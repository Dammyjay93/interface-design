# Interface Design - Roo Code Mode

Design engineering for Roo Code. Build interfaces with craft, memory, and consistency.

## What This Does

When you build UI with AI, design decisions get made: spacing values, colors, depth strategy, surface elevation. Without structure, those decisions drift across sessions.

**Interface Design helps you:**

1. **Craft** — Principle-based design that produces professional, polished interfaces
2. **Memory** — Save decisions to `.interface-design/system.md`, load automatically
3. **Consistency** — Every component follows the same principles throughout the session

Make choices once. Apply them consistently.

## Installation

### Roo Code Mode

The `.roomodes` file in your workspace root defines the `interface-design` mode. Simply switch to this mode when working on UI components.

### Using the Mode

1. Switch to the `interface-design` mode in Roo Code
2. The mode will automatically check for `.interface-design/system.md`
3. If it exists, patterns are loaded and applied
4. If not, you'll be guided through establishing a design direction

## How It Works

### The Flow

When you build UI with interface-design mode:

**If system.md exists:**
```
✓ Reads mode instructions and principles
✓ Loads .interface-design/system.md
✓ Applies established patterns
✓ States design choices before each component
✓ Offers to save new patterns
```

**If no system.md:**
```
1. Reads mode instructions and principles
2. Assesses project context
3. Suggests direction, asks for confirmation
4. States design choices before each component
5. Builds with consistent principles
6. Offers to save system
```

### Example: First Session

```
You: "Build a user dashboard with metrics cards"

Roo (interface-design mode):
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

Roo (interface-design mode):
✓ Loaded system.md

Depth: borders-only
Surfaces: using established scale
Borders: rgba(255,255,255,0.06)
Spacing: 8px base

[Builds settings page matching existing system]

Want me to save any new patterns?
```

The system **remembers** across sessions.

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

This file loads automatically at session start. Roo sees it and maintains consistency.

## Available Operations

### Status

Show current design system state:

```
"Show me the design system status"
```

Displays:
- Direction and personality
- Foundation and depth strategy
- Spacing base and scale
- Color palette
- Documented patterns
- Last updated date

### Audit

Check existing code against design system:

```
"Audit the UI code for consistency"
```

Checks for:
- Spacing values not on defined grid
- Depth strategy violations
- Colors not in defined palette
- Components not matching documented patterns

### Extract

Extract design patterns from existing code:

```
"Extract design patterns from the codebase"
```

Analyzes:
- Repeated spacing values
- Common radius values
- Button patterns
- Card patterns
- Depth strategy usage

### Critique

Critique build for craft, then rebuild what defaulted:

```
"Critique this UI for craft"
```

Reviews:
- Composition and rhythm
- Craft details (spacing, typography, surfaces)
- Content coherence
- Structure and implementation

## Documentation

- [`principles.md`](principles.md) — Core craft principles with code examples
- [`system-template.md`](system-template.md) — Template for creating system.md
- [`examples/`](examples/) — Example design systems

## Scope

**Use for:** Dashboards, admin panels, SaaS apps, tools, settings pages, data interfaces.

**Not for:** Landing pages, marketing sites, campaigns.

## Credits

Ported from the [Interface Design Claude Code plugin](https://github.com/Dammyjay93/interface-design) by Damola Akinleye.
