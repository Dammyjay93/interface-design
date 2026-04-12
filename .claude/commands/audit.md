---
name: interface-design:audit
description: Check existing code against your design system for spacing, depth, color, and pattern violations.
---

# interface-design audit

Check existing code against your design system.

## Usage

```
/audit <path>     # Audit specific file/directory
/audit            # Audit common UI paths
```

## What to Check

**If `.interface-design/system.md` exists:**

1. **Spacing violations**
   - Find spacing values not on defined grid
   - Example: 17px when base is 4px

2. **Depth violations**
   - Borders-only system → flag shadows
   - Subtle system → flag layered shadows
   - Allow ring shadows (0 0 0 1px)

3. **Color violations**
   - If palette defined → flag colors not in palette
   - Allow semantic grays

4. **Pattern drift**
   - Find buttons not matching Button pattern
   - Find cards not matching Card pattern

**Report format:**
```
## Audit Results: src/components/

### Summary
- X files scanned
- X violations found across X categories
- X patterns in compliance, X drifted

### Spacing (X violations)
- Button.tsx:12 — height 38px, expected 36px (4px grid)
- Input.tsx:20 — padding 14px, not on grid (nearest: 12px or 16px)

### Depth (X violations)
- Card.tsx:8 — box-shadow used, system is borders-only

### Colors (X violations)
- Header.tsx:34 — #3b4f61 not in defined palette

### Patterns (X violations)
- Form.tsx:55 — custom button, does not match Button pattern

### Fixes
- Button.tsx:12 — 38px → 36px
- Card.tsx:8 — remove shadow, add border: 1px solid var(--border)
- Input.tsx:20 — 14px → 12px
```

**If no system.md:**

```
No design system to audit against.

Create a system first:
1. Build UI → establish system automatically
2. Run /extract → create system from existing code
```

## Implementation

1. Check for system.md
2. Parse system rules
3. Read target files (tsx, jsx, css, scss)
4. Compare against rules
5. Report violations with suggestions
