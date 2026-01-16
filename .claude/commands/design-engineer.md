---
name: designer-engineer
description: Smart dispatcher - detects mode and builds UI with craft, memory, and enforcement.
---

# Design Engineer

Build interfaces with intention, consistency, and memory. This command detects your project context and applies the right approach.

## Smart Dispatcher

**Before building any UI, detect the mode:**

### Step 1: Determine Mode

**Check for `.design-engineer/system.md`:**
- **Exists?** → **APPLY MODE** (use existing system)
- **Doesn't exist?** → Check project type:
  - Has `package.json` or `.git`? → **ESTABLISH MODE** (create system)
  - Neither? → **PRINCIPLES ONLY** (just apply principles)

### Step 2: Execute Mode

**APPLY MODE** (system exists):
1. Read `.design-engineer/system.md`
2. Load direction, tokens, patterns
3. Build using established patterns
4. Validate before finishing
5. If new patterns emerge → add to system.md

**ESTABLISH MODE** (real project, no system):
1. Scan project structure (package.json, files, framework)
2. Infer product type and suggest direction
3. Ask ONE smart question with default
4. Build first components
5. Offer to save system after finishing

**PRINCIPLES ONLY** (no system needed):
- Apply craft principles
- No questions, no system.md
- For quick prototypes/experiments

## Related Commands

- `/design-engineer:status` → Show current design system state
- `/design-engineer:audit` → Validate existing code against system
- `/design-engineer:extract` → Extract patterns from existing code

## Core Principles

- 4px spacing grid
- Symmetrical padding
- Consistent border radius
- Intentional depth strategy (borders-only, subtle, or layered)
- Typography hierarchy
- Color for meaning only

Run `/design-engineer:status` to see your current system, or just start building and the dispatcher will guide you.
