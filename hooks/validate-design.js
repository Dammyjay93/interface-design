#!/usr/bin/env node
/**
 * Design Engineer: Post-write validation hook
 * Validates UI file writes against YOUR .design-engineer/system.md
 *
 * Only enforces what you've defined. No system = no enforcement.
 */

const fs = require('fs');
const path = require('path');

const UI_EXTENSIONS = ['.tsx', '.jsx', '.vue', '.svelte', '.css', '.scss'];

function parseSystemFile(systemPath) {
  if (!fs.existsSync(systemPath)) return null;

  const content = fs.readFileSync(systemPath, 'utf-8');
  const system = {
    depth: null,
    colors: [],
    spacingBase: null,
    spacingScale: [],
    radiusScale: []
  };

  // Parse depth strategy (only if explicitly defined)
  if (content.includes('Depth: Borders-only') || content.includes('depth: borders-only')) {
    system.depth = 'borders-only';
  } else if (content.includes('Depth: Subtle') || content.includes('depth: subtle')) {
    system.depth = 'subtle-shadows';
  } else if (content.includes('Depth: Layered') || content.includes('depth: layered')) {
    system.depth = 'layered-shadows';
  }

  // Parse spacing base (e.g., "Base: 4px" or "base: 8px")
  const spacingBaseMatch = content.match(/(?:spacing\s+)?base:\s*(\d+)px/i);
  if (spacingBaseMatch) {
    system.spacingBase = parseInt(spacingBaseMatch[1]);
  }

  // Parse spacing scale (e.g., "Scale: 4, 8, 12, 16")
  const spacingScaleMatch = content.match(/### Spacing[\s\S]*?Scale:\s*([\d,\s]+)/i);
  if (spacingScaleMatch) {
    system.spacingScale = spacingScaleMatch[1]
      .split(',')
      .map(s => parseInt(s.trim()))
      .filter(n => !isNaN(n));
  }

  // Parse radius scale (e.g., "Scale: 4px, 6px, 8px")
  const radiusScaleMatch = content.match(/### Radius[\s\S]*?Scale:\s*([\d\w,\s]+)/i);
  if (radiusScaleMatch) {
    system.radiusScale = radiusScaleMatch[1]
      .match(/\d+/g)
      ?.map(n => parseInt(n)) || [];
  }

  // Extract hex colors from tokens section
  const tokensSection = content.match(/### Colors[\s\S]*?(?=###|## |$)/i);
  if (tokensSection) {
    const hexMatches = tokensSection[0].match(/#[0-9a-fA-F]{6}/g) || [];
    system.colors = [...new Set(hexMatches.map(c => c.toLowerCase()))];
  }

  return system;
}

function validateContent(content, system) {
  const violations = [];

  // Only check shadows if depth strategy is explicitly borders-only
  if (system.depth === 'borders-only') {
    if (content.includes('box-shadow') && !content.includes('box-shadow: none')) {
      const shadowMatch = content.match(/box-shadow:\s*([^;]+)/g) || [];
      for (const shadow of shadowMatch) {
        // Allow ring shadows (0 0 0 Xpx) as they're border-like
        if (!shadow.includes('0 0 0') && !shadow.includes('inset')) {
          violations.push({
            type: 'depth',
            message: 'Shadow detected but your system uses borders-only depth',
            suggestion: 'Use border instead, or update your depth strategy in system.md'
          });
          break;
        }
      }
    }

    // Check Tailwind shadow classes
    if (/\bshadow-(sm|md|lg|xl|2xl)\b/.test(content)) {
      violations.push({
        type: 'depth',
        message: 'Tailwind shadow class used but your system is borders-only',
        suggestion: 'Use border classes instead, or update your depth strategy'
      });
    }
  }

  // Only check spacing if a base is defined
  if (system.spacingBase) {
    const pxMatches = content.matchAll(/[:\s](\d+)px/g);
    const seenValues = new Set();
    for (const match of pxMatches) {
      const value = parseInt(match[1]);
      // Allow 0px, 1px (borders), and values on the defined grid
      if (value !== 0 && value !== 1 && value % system.spacingBase !== 0 && !seenValues.has(value)) {
        seenValues.add(value);
        const nearest = Math.round(value / system.spacingBase) * system.spacingBase;
        violations.push({
          type: 'spacing',
          message: `${value}px is not on your ${system.spacingBase}px grid`,
          suggestion: `Consider ${nearest}px, or update your spacing base in system.md`
        });
      }
    }
  }

  // Only check colors if palette is defined
  if (system.colors.length > 0) {
    const contentHexColors = content.match(/#[0-9a-fA-F]{6}/gi) || [];
    const seenColors = new Set();
    for (const color of contentHexColors) {
      const lowerColor = color.toLowerCase();
      if (!system.colors.includes(lowerColor) && !seenColors.has(lowerColor)) {
        seenColors.add(lowerColor);
        violations.push({
          type: 'color',
          message: `Color ${color} not in your defined palette`,
          suggestion: 'Add to system.md colors, or use an existing token'
        });
      }
    }
  }

  // Only check radius if scale is defined
  if (system.radiusScale.length > 0) {
    const radiusMatches = content.matchAll(/border-radius:\s*(\d+)px/gi);
    const seenRadius = new Set();
    for (const match of radiusMatches) {
      const value = parseInt(match[1]);
      if (!system.radiusScale.includes(value) && !seenRadius.has(value)) {
        seenRadius.add(value);
        violations.push({
          type: 'radius',
          message: `${value}px radius not in your scale (${system.radiusScale.join(', ')})`,
          suggestion: 'Use a value from your scale, or update system.md'
        });
      }
    }
  }

  return violations;
}

async function main() {
  const cwd = process.cwd();
  const systemPath = path.join(cwd, '.design-engineer', 'system.md');

  const system = parseSystemFile(systemPath);
  if (!system) {
    // No design system defined, skip validation entirely
    process.exit(0);
  }

  // Read hook input from stdin (JSON format from Claude Code)
  let input = '';
  for await (const chunk of process.stdin) {
    input += chunk;
  }

  let targetFile;
  try {
    const hookData = JSON.parse(input);
    targetFile = hookData.tool_input?.file_path;
  } catch {
    // If not JSON, skip validation
    process.exit(0);
  }

  if (!targetFile) {
    process.exit(0);
  }

  // Check if it's a UI file
  const ext = path.extname(targetFile);
  if (!UI_EXTENSIONS.includes(ext)) {
    process.exit(0);
  }

  if (!fs.existsSync(targetFile)) {
    process.exit(0);
  }

  const content = fs.readFileSync(targetFile, 'utf-8');
  const violations = validateContent(content, system);

  if (violations.length > 0) {
    console.error('\n=== DESIGN SYSTEM CHECK ===\n');
    console.error('Found inconsistencies with your defined system:\n');
    for (const v of violations) {
      console.error(`  [${v.type}] ${v.message}`);
      console.error(`    -> ${v.suggestion}\n`);
    }
    console.error('These are based on YOUR system.md definitions.');
    console.error('Update system.md to change what gets checked.\n');
    console.error('===========================\n');
    process.exit(2); // Exit 2 feeds stderr back to Claude
  }

  process.exit(0);
}

main();
