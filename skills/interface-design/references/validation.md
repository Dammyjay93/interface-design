# Memory And Validation

Use this when updating or checking `.interface-design/system.md`.

## When To Save Patterns

Save a pattern when:

- A component appears two or more times.
- A component is likely reusable across the product.
- Specific measurements or states are worth preserving.
- A design decision explains future tradeoffs.

Do not save:

- One-off components.
- Temporary experiments.
- Variations better handled by props.
- Values that are still uncertain.

## Pattern Format

```markdown
### Button Primary
- Height: 36px
- Padding: 12px 16px
- Radius: 6px
- Font: 14px, 500 weight
- States: hover, active, focus, disabled, loading
- Usage: Primary screen actions
```

## Consistency Checks

- Spacing: are values multiples of the system base?
- Depth: does the UI follow the declared depth strategy?
- Colors: do values come from the palette instead of random hex codes?
- Typography: do text levels match the system?
- Patterns: are documented patterns reused instead of recreated?
- States: are interactive, loading, empty, and error states represented where needed?

## Update Discipline

When changing a documented pattern, update the rationale. If the new value contradicts the old system, either migrate the affected components or record the exception explicitly.
