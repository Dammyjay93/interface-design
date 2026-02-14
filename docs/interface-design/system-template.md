# Design System

## Direction

**Personality:** [Precision & Density | Warmth & Approachability | Sophistication & Trust | Boldness & Clarity | Utility & Function | Data & Analysis]

**Foundation:** [warm | cool | neutral | tinted]

**Depth:** [borders-only | subtle-shadows | layered-shadows]

## Tokens

### Spacing
Base: [4px | 8px]
Scale: [4, 8, 12, 16, 24, 32, 64]

### Colors
```
--foreground: [slate-900]
--secondary: [slate-600]
--muted: [slate-400]
--faint: [slate-200]
--accent: [blue-600]
```

### Radius
Scale: [4px, 6px, 8px] (sharp) | [8px, 12px, 16px] (soft)

### Typography
Font: [system | Inter | Geist]
Scale: 12, 13, 14 (base), 16, 18, 24, 32
Weights: 400, 500, 600

## Patterns

### Button Primary
- Height: 36px
- Padding: 12px 16px
- Radius: 6px
- Font: 14px, 500 weight
- Background: accent color
- Usage: Primary actions

### Card Default
- Border: 0.5px solid (faint)
- Padding: 16px
- Radius: 8px
- Background: white
- Usage: Content containers

## Decisions

| Decision | Rationale | Date |
|----------|-----------|------|
| Borders-only depth | Dashboard tool, users want density. Shadows add visual weight without information value. | YYYY-MM-DD |
| 4px spacing base | Tight enough for data tables, divisible by common UI sizes | YYYY-MM-DD |
