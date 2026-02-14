# Design System - Precision & Density

Example system for dashboard/admin interfaces

## Direction

**Personality:** Precision & Density
**Foundation:** Cool (slate)
**Depth:** Borders-only

## Tokens

### Spacing
Base: 4px
Scale: 4, 8, 12, 16, 24, 32

### Colors
```
--foreground: slate-900
--secondary: slate-600
--muted: slate-400
--faint: slate-200
--border: rgba(0, 0, 0, 0.08)
--accent: blue-600
```

### Radius
Scale: 4px, 6px, 8px (sharp, technical)

### Typography
Font: system-ui (fast, native)
Scale: 11, 12, 13, 14 (base), 16, 18
Weights: 400, 500, 600
Mono: SF Mono, Consolas (for data)

## Patterns

### Button
- Height: 32px (compact)
- Padding: 8px 12px
- Radius: 4px
- Font: 13px, 500 weight
- Border: 1px solid

### Card
- Border: 0.5px solid (faint)
- Padding: 12px
- Radius: 6px
- No shadow

### Table Cell
- Padding: 8px 12px
- Font: 13px tabular-nums
- Border-bottom: 1px solid (faint)

## Decisions

| Decision | Rationale | Date |
|----------|-----------|------|
| Borders-only | Information density matters more than lift | 2026-01-15 |
| Compact sizing | Power users, high information density | 2026-01-15 |
| System fonts | Performance, native feel | 2026-01-15 |
