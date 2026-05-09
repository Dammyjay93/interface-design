---
name: interface-design-extract
description: "Use when extracting a reusable .interface-design/system.md from existing UI code, repeated spacing/radius/color values, button/card/input patterns, typography, and depth strategy."
---

# Interface Design Extract

Infer a design system from existing frontend code and offer to write `.interface-design/system.md`.

## Steps

1. Identify target UI paths from the user or common paths: `src`, `app`, `pages`, `components`, `frontend`, `ui`.
2. Inspect UI files such as `.tsx`, `.jsx`, `.vue`, `.svelte`, `.css`, `.scss`, and Tailwind-heavy templates.
3. Count repeated values:
   - spacing and gap values;
   - padding and margin patterns;
   - radius values;
   - border and shadow values;
   - colors and CSS variables;
   - button, card, input, table, and nav patterns.
4. Infer:
   - spacing base and scale;
   - depth strategy;
   - foundation color temperature;
   - text hierarchy;
   - reusable component patterns.
5. Present the inferred system and ask before writing `.interface-design/system.md`, unless the user explicitly asked you to create it.

Use `../interface-design/references/system-template.md` as the output structure.

## Output Shape

```text
Extracted patterns from <path>:

Spacing:
- Base: 4px
- Common values: ...

Depth:
- Borders-only, based on ...

Patterns:
- Button: ...
- Card: ...

Write this to .interface-design/system.md?
```

When writing, preserve existing `.interface-design/system.md` unless the user approves replacement. If the file already exists, propose a patch-style update instead.
