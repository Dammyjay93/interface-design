# Design Engineer

<p align="center">
  <strong>Craft · Memory · Enforcement</strong>
</p>

<p align="center">
  Build interfaces with intention. Remember decisions across sessions. Maintain systematic consistency.
</p>

<p align="center">
  <a href="#installation">Install</a> ·
  <a href="#how-it-works">How It Works</a> ·
  <a href="#examples">Examples</a> ·
  <a href="https://dashboard-v4-eta.vercel.app">Demo</a>
</p>

---

## What This Does

When you build UI with Claude, design decisions get made: spacing values, colors, depth strategy, button heights. Without structure, those decisions drift across sessions.

**Design Engineer helps you:**

1. **Craft** — Smart direction inference (dashboard → precision, marketing → bold)
2. **Memory** — Save decisions to `.design-engineer/system.md`, load automatically
3. **Enforcement** — Validate UI code against your system, catch violations before you see them

Make choices once. Enforce them automatically.

## Before & After

**Without design-engineer:**
- Every session starts from scratch
- Button heights drift (36px, 38px, 40px...)
- Random spacing values (14px, 17px, 22px...)
- No consistency across components

**With design-engineer:**
- System loads automatically each session
- Patterns reused (Button: 36px, Card: 16px pad)
- Spacing on grid (4px, 8px, 12px, 16px)
- Violations caught before finishing

See the difference: **[dashboard-v4-eta.vercel.app](https://dashboard-v4-eta.vercel.app)**

---

## Installation

### Plugin (Recommended)

```bash
# Add the marketplace
/plugin marketplace add Dammyjay93/claude-design-engineer

# Install the plugin
/plugin marketplace install design-engineer design-engineer
```

Restart Claude Code after installing.

Gets you:
- Smart workflows (APPLY, ESTABLISH, EXTEND modes)
- Automatic system.md loading every session
- Post-write validation hooks
- Commands (/design-engineer status, audit, extract)

### Manual (Advanced)

```bash
git clone https://github.com/Dammyjay93/claude-design-engineer.git
cd claude-design-engineer
cp -r .claude/* ~/.claude/
cp -r .claude-plugin/* ~/.claude-plugin/
```

Restart Claude Code.

---

## How It Works

### Smart Dispatcher

When you build UI, design-engineer automatically detects which mode to use:

**APPLY MODE** (system exists)
```
✓ Loads .design-engineer/system.md
✓ Uses established patterns
✓ Validates before finishing
✓ Updates system if new patterns emerge
```

**ESTABLISH MODE** (real project, no system)
```
1. Scans project (package.json, framework, file structure)
2. Infers product type (dashboard? marketing? docs?)
3. Suggests direction based on context
4. Asks ONE smart question with default
5. Builds components
6. Offers to save system
```

**PRINCIPLES ONLY** (quick prototype)
```
✓ Just applies craft principles
✓ No questions, no system.md
```

### Example: First Session

```
You: "Build a user dashboard with metrics cards"

Claude (via design-engineer):
Detected: Dashboard with data visualization
Suggests: Precision & Density, Cool (slate), Borders-only

Does this direction fit? (y/n/customize)

[You: y]

[Builds dashboard with tight spacing, borders, clean layout]

Created foundations:
- Direction: Precision & Density
- Depth: Borders-only
- Patterns: MetricCard (border, 16px pad, 8px gap)

Save to .design-engineer/system.md? (y)

✓ System saved
```

### Example: Second Session

```
You: "Add a settings page"

Claude (via design-engineer):
✓ Loaded system (Precision & Density, Borders-only)
✓ Reusing MetricCard pattern
✓ Building with established spacing grid

[Builds settings page matching existing design]

✓ Self-validation passed
```

The system **remembers** and **enforces** automatically.

---

## System File

After establishing direction, your decisions live in `.design-engineer/system.md`:

```markdown
# Design System

## Direction
Personality: Precision & Density
Foundation: Cool (slate)
Depth: Borders-only

## Tokens
### Spacing
Base: 4px
Scale: 4, 8, 12, 16, 24, 32

### Colors
--foreground: slate-900
--secondary: slate-600
--accent: blue-600

## Patterns
### Button Primary
- Height: 36px
- Padding: 12px 16px
- Radius: 6px
- Usage: Primary actions

### Card Default
- Border: 0.5px solid
- Padding: 16px
- Radius: 8px
```

This file loads automatically at session start. Claude sees it and maintains consistency.

---

## Commands

```bash
/design-engineer              # Smart status/suggestions
/design-engineer status       # Show current system
/design-engineer audit <path> # Check code against system
/design-engineer extract      # Extract patterns from existing code
```

---

## Design Directions

The skill infers direction from project context, but you can customize:

| Direction | Feel | Best For |
|-----------|------|----------|
| **Precision & Density** | Tight, technical, monochrome | Developer tools, admin dashboards |
| **Warmth & Approachability** | Generous spacing, soft shadows | Collaborative tools, consumer apps |
| **Sophistication & Trust** | Cool tones, layered depth | Finance, enterprise B2B |
| **Boldness & Clarity** | High contrast, dramatic space | Marketing sites, modern dashboards |
| **Utility & Function** | Muted, functional density | GitHub-style tools |
| **Data & Analysis** | Chart-optimized, numbers-first | Analytics, BI tools |

---

## Enforcement

The post-write validation hook catches violations:

```
=== DESIGN SYSTEM CHECK ===

Found inconsistencies with your defined system:

  [spacing] 17px is not on your 4px grid
    -> Consider 16px, or update your spacing base in system.md

  [depth] Shadow detected but your system uses borders-only depth
    -> Use border instead, or update your depth strategy

===========================
```

Claude fixes these automatically before you see the code.

---

## Examples

See `reference/examples/` for complete system files:
- **[system-precision.md](reference/examples/system-precision.md)** — Dashboard/admin interfaces
- **[system-warmth.md](reference/examples/system-warmth.md)** — Collaborative/consumer apps

---

## Migration from claude-design-skill

**This repo was renamed from `claude-design-skill`.**

All old URLs redirect automatically.

**If you installed the old skill:**

```bash
# Uninstall old
rm -rf ~/.claude/skills/design-principles

# Install new plugin
/plugin marketplace add Dammyjay93/claude-design-engineer
/plugin marketplace install design-engineer design-engineer
```

Your system.md files (if any) continue to work — just rename `.ds-engineer/` to `.design-engineer/`.

---

## Philosophy

**Decisions compound.** A spacing value chosen once becomes a pattern. A depth strategy becomes an identity.

**Consistency beats perfection.** A coherent system with "imperfect" values beats a scattered interface with "correct" ones.

**Memory enables iteration.** When you can see what you decided and why, you can evolve intentionally instead of drifting accidentally.

---

## License

MIT — See [LICENSE](LICENSE)

---

<p align="center">
  <a href="https://design-engineer.vercel.app">Website</a> · <a href="https://github.com/Dammyjay93/claude-design-engineer">GitHub</a>
</p>
