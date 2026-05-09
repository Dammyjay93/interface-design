---
name: interface-design-audit
description: "Use when auditing UI code against .interface-design/system.md for spacing drift, depth strategy violations, color/token drift, typography inconsistency, missing states, or reusable pattern mismatch."
---

# Interface Design Audit

Audit frontend code against `.interface-design/system.md`.

## Inputs

- A path from the user, or common UI paths if no path is given: `src`, `app`, `pages`, `components`, `frontend`, `ui`.
- `.interface-design/system.md`, when present.

## If No System Exists

Report:

```text
No .interface-design/system.md found.
Use interface-design-extract to infer a system from existing UI, or use interface-design while building a new surface.
```

Do not invent a system during an audit unless the user asks.

## Audit Checks

Read `../interface-design/references/validation.md` when needed.

Check:

- Spacing values off the documented grid.
- Radius values outside the documented scale.
- Shadows used in a borders-only system, or mixed depth strategies.
- Raw colors that bypass tokens.
- Text hierarchy drift.
- Recreated button/card/input patterns that should reuse documented patterns.
- Missing hover, focus, disabled, loading, empty, or error states.
- Layout hacks such as negative margins, absolute positioning used to escape normal flow, or unnecessary `calc()` values.

## Output

Lead with findings. Use file and line references when possible.

```text
Audit Results: <path>

Findings:
- <file:line> Spacing 14px is off the 4px grid. Use 12px or 16px.
- <file:line> Card uses box-shadow, but system depth is borders-only.

Suggested Fixes:
- ...
```

If no issues are found, say that clearly and mention any areas not checked.
