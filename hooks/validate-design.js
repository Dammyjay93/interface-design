#!/usr/bin/env node
/**
 * Design Engineer: Post-write validation
 *
 * Validates UI code and outputs relevant principles when violations found.
 * This ensures Claude has fresh context for fixing issues.
 */

const fs = require('fs');
const path = require('path');

const UI_EXTENSIONS = ['.tsx', '.jsx', '.vue', '.svelte', '.css', '.scss'];

// Principles with guidance (output when violated)
const PRINCIPLES = {
  spacing: {
    name: 'Spacing Grid',
    guidance: 'Pick a base unit (4px is common) and stick to multiples. Random values signal no system.'
  },
  depth: {
    name: 'Depth Strategy',
    guidance: 'Choose ONE approach: borders-only, subtle shadows, or layered shadows. Don\'t mix.'
  },
  animation: {
    name: 'Animation',
    guidance: 'Fast micro-interactions (150ms), smooth easing. No bouncy/spring effects in professional UI.'
  }
};

function parseSystemFile(systemPath) {
  if (!fs.existsSync(systemPath)) return null;

  const content = fs.readFileSync(systemPath, 'utf-8');
  const system = {
    depth: null,
    spacingBase: null,
    colors: []
  };

  if (content.includes('Depth: Borders-only') || content.includes('depth: borders-only')) {
    system.depth = 'borders-only';
  } else if (content.includes('Depth: Subtle') || content.includes('depth: subtle')) {
    system.depth = 'subtle-shadows';
  } else if (content.includes('Depth: Layered') || content.includes('depth: layered')) {
    system.depth = 'layered-shadows';
  }

  const spacingBaseMatch = content.match(/(?:spacing\s+)?base:\s*(\d+)px/i);
  if (spacingBaseMatch) {
    system.spacingBase = parseInt(spacingBaseMatch[1]);
  }

  const tokensSection = content.match(/### Colors[\s\S]*?(?=###|## |$)/i);
  if (tokensSection) {
    const hexMatches = tokensSection[0].match(/#[0-9a-fA-F]{6}/g) || [];
    system.colors = [...new Set(hexMatches.map(c => c.toLowerCase()))];
  }

  return system;
}

function validateContent(content, system) {
  const violations = [];

  // Check for bouncy animations (always)
  if (/cubic-bezier\s*\([^)]*[2-9][\d.]*\s*\)/g.test(content) ||
      /transition.*\b(bounce|spring|elastic)\b/gi.test(content)) {
    violations.push({
      type: 'animation',
      message: 'Bouncy/spring animation detected',
      principle: PRINCIPLES.animation
    });
  }

  // Check depth consistency if system defines it
  if (system?.depth === 'borders-only') {
    if (content.includes('box-shadow') && !content.includes('box-shadow: none')) {
      const shadowMatch = content.match(/box-shadow:\s*([^;]+)/g) || [];
      for (const shadow of shadowMatch) {
        if (!shadow.includes('0 0 0') && !shadow.includes('inset')) {
          violations.push({
            type: 'depth',
            message: 'Shadow used but system specifies borders-only',
            principle: PRINCIPLES.depth
          });
          break;
        }
      }
    }

    if (/\bshadow-(sm|md|lg|xl|2xl)\b/.test(content)) {
      violations.push({
        type: 'depth',
        message: 'Tailwind shadow class used but system is borders-only',
        principle: PRINCIPLES.depth
      });
    }
  }

  // Check spacing grid if system defines it
  if (system?.spacingBase) {
    const pxMatches = content.matchAll(/[:\s](\d+)px/g);
    const offGrid = new Set();
    for (const match of pxMatches) {
      const value = parseInt(match[1]);
      if (value > 2 && value % system.spacingBase !== 0) {
        offGrid.add(value);
      }
    }
    if (offGrid.size > 0) {
      violations.push({
        type: 'spacing',
        message: `Values off ${system.spacingBase}px grid: ${[...offGrid].join(', ')}px`,
        principle: PRINCIPLES.spacing
      });
    }
  }

  // Check colors if system defines palette
  if (system?.colors.length > 0) {
    const contentColors = content.match(/#[0-9a-fA-F]{6}/gi) || [];
    const unknown = new Set();
    for (const color of contentColors) {
      if (!system.colors.includes(color.toLowerCase())) {
        unknown.add(color);
      }
    }
    if (unknown.size > 0) {
      violations.push({
        type: 'color',
        message: `Colors not in system palette: ${[...unknown].join(', ')}`
      });
    }
  }

  return violations;
}

async function main() {
  let input = '';
  for await (const chunk of process.stdin) {
    input += chunk;
  }

  let targetFile;
  try {
    const hookData = JSON.parse(input);
    targetFile = hookData.tool_input?.file_path;
  } catch {
    process.exit(0);
  }

  if (!targetFile) process.exit(0);

  const ext = path.extname(targetFile);
  if (!UI_EXTENSIONS.includes(ext)) process.exit(0);

  if (!fs.existsSync(targetFile)) process.exit(0);

  const content = fs.readFileSync(targetFile, 'utf-8');
  const cwd = process.cwd();
  const systemPath = path.join(cwd, '.design-engineer', 'system.md');
  const system = parseSystemFile(systemPath);

  const violations = validateContent(content, system);

  if (violations.length > 0) {
    console.error('\n=== DESIGN VALIDATION ===\n');

    for (const v of violations) {
      console.error(`[${v.type}] ${v.message}`);
      if (v.principle) {
        console.error(`  Principle: ${v.principle.guidance}`);
      }
      console.error('');
    }

    console.error('Fix these issues before proceeding.\n');
    console.error('=========================\n');
    process.exit(2);
  }

  process.exit(0);
}

main();
