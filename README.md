# Interface Design

<p align="center">
  <strong>Craft · Memory · Consistency</strong>
</p>

<p align="center">
  Build interfaces with intention. Remember decisions across sessions. Maintain systematic consistency.
</p>

<p align="center">
  <em>For interface design — dashboards, apps, tools, admin panels. Not for marketing sites.</em>
</p>

<p align="center">
  <a href="#installation">Install</a> ·
  <a href="#how-it-works">How It Works</a> ·
  <a href="https://interface-design.dev/examples.html">Examples</a> ·
  <a href="https://interface-design.dev">Website</a>
</p>

---

## What This Does

When you build UI with Claude Code or Antigravity, design decisions get made: spacing values, colors, depth strategy, surface elevation. Without structure, those decisions drift across sessions.

**Interface Design helps you:**

1. **Craft** — Principle-based design that produces professional, polished interfaces
2. **Memory** — Save decisions to `.interface-design/system.md`, load automatically
3. **Consistency** — Every component follows the same principles throughout the session

Make choices once. Apply them consistently.

## Before & After

**Without interface-design:**
- Every session starts from scratch
- Button heights drift (36px, 38px, 40px...)
- Random spacing values (14px, 17px, 22px...)
- No consistency across components

**With interface-design:**
- System loads automatically each session
- Patterns reused (Button: 36px, Card: 16px pad)
- Spacing on grid (4px, 8px, 12px, 16px)
- Consistent depth and surface treatment throughout

See the difference: **[interface-design.dev/examples.html](https://interface-design.dev/examples.html)**

---

## Installation

### Plugin (Recommended)

```bash
# Add the marketplace
/plugin marketplace add Dammyjay93/interface-design

# Install the plugin
/plugin menu
```

Select `interface-design` from the menu. Restart Claude Code after.

Gets you:
- Principle-based craft for every UI component
- Automatic system.md loading every session
- Per-component design checkpoint
- Commands (/interface-design status, audit, extract)

### Manual (Advanced)

```bash
git clone https://github.com/Dammyjay93/interface-design.git
cd interface-design
cp -r .claude/* ~/.claude/
cp -r .claude-plugin/* ~/.claude-plugin/
```

Restart Claude Code.

### Antigravity

The installation is always manual for Antigravity:

- **Local inside your desired repo**
  ```bash
  cp -r .agents/* <repository-path>/.agents/
  ```
- **Global**
  ```bash
  cp -r .agents/workflows/* ~/.gemini/antigravity/global_workflows/
  cp -r .agents/skills/ ~/.gemini/antigravity/skills/
  ```

Restart Antigravity.

---

## How It Works

### The Flow

When you build UI with interface-design:

**If system.md exists:**
```
✓ Reads skill files and principles
✓ Loads .interface-design/system.md
✓ Applies established patterns
✓ States design choices before each component
✓ Offers to save new patterns
```

**If no system.md:**
```
1. Reads skill files and principles
2. Assesses project context
3. Suggests direction, asks for confirmation
4. States design choices before each component
5. Builds with consistent principles
6. Offers to save system
```

### Example: First Session

```
You: "Build a user dashboard with metrics cards"

Claude:
This feels like a data-heavy dashboard — I'd suggest:
- Depth: Borders-only (clean, technical)
- Surfaces: Subtle elevation shifts
- Spacing: 8px base

Does this direction fit?

[You: y]

Depth: borders-only
Surfaces: 7% → 9% → 11% lightness scale
Borders: rgba(255,255,255,0.06)
Spacing: 8px base

[Builds dashboard with consistent depth, spacing, surfaces]

Want me to save these patterns to .interface-design/system.md?

[You: y]

✓ System saved
```

### Example: Second Session

```
You: "Add a settings page"

Claude:
✓ Loaded system.md

Depth: borders-only
Surfaces: using established scale
Borders: rgba(255,255,255,0.06)
Spacing: 8px base

[Builds settings page matching existing system]

Want me to save any new patterns?
```

The system **remembers** across sessions.

---

## System File

After establishing direction, your decisions live in `.interface-design/system.md`:

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
/interface-design:init                      # Start building with design principles
/interface-design:status                    # Show current system
/interface-design:audit <path>(optional)    # Check code against system
/interface-design:extract <path>(optional)  # Extract patterns from existing code
/interface-design:critique                  # Critique code against system
```

### Antigravity Workflows

```bash
/interface-design-init                      # Start building with design principles
/interface-design-status                    # Show current system
/interface-design-audit <path>(optional)    # Check code against system
/interface-design-extract <path>(optional)  # Extract patterns from existing code
/interface-design-critique                  # Critique code against system
```

---

## Design Directions

The skill infers direction from project context, but you can customize:

| Direction | Feel | Best For |
|-----------|------|----------|
| **Precision & Density** | Tight, technical, monochrome | Developer tools, admin dashboards |
| **Warmth & Approachability** | Generous spacing, soft shadows | Collaborative tools, consumer apps |
| **Sophistication & Trust** | Cool tones, layered depth | Finance, enterprise B2B |
| **Boldness & Clarity** | High contrast, dramatic space | Modern dashboards, data-heavy apps |
| **Utility & Function** | Muted, functional density | GitHub-style tools |
| **Data & Analysis** | Chart-optimized, numbers-first | Analytics, BI tools |

---

## Examples

See live examples at **[interface-design.dev/examples.html](https://interface-design.dev/examples.html)**

For system file templates, see `reference/examples/`:
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
/plugin marketplace add Dammyjay93/interface-design
/plugin menu
```

Your system.md files (if any) continue to work — just rename `.ds-engineer/` to `.interface-design/`.

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
  <a href="https://interface-design.dev">Website</a> · <a href="https://github.com/Dammyjay93/interface-design">GitHub</a>
</p>
