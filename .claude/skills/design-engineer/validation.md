# Validation

Run this check before showing work to user. Fix violations yourself.

## Spacing Check

If system defines a grid:
- All spacing multiples of base? (4px, 8px, 12px — not 14px, 17px)
- Padding symmetrical unless intentional?

## Depth Check

If system defines a depth strategy:
- **Borders-only** → no shadows except rings (0 0 0 1px)
- **Subtle shadows** → single layer only
- **Layered** → multiple layers consistent

## Pattern Check

If system has documented patterns:
- Reusing button pattern instead of creating new?
- Card treatment matches existing cards?
- Input styling consistent with established inputs?

## Color Check

If system defines a palette:
- Using colors from palette or semantic grays?
- No random hex codes?
- Accent color used only for meaning (action, status)?

---

# Memory Management

## When to Update system.md

Add new patterns when:
- Component used 2+ times (buttons, cards, inputs)
- Pattern is reusable across the project
- Has specific measurements worth remembering

Pattern format:
```markdown
### Button Primary
- Height: 36px
- Padding: 12px 16px
- Radius: 6px
- Font: 14px, 500 weight
```

Don't document:
- One-off components
- Temporary experiments
- Variations better handled with props

## Pattern Reuse

Before creating a component, check system.md:
- Does the pattern exist? Use it.
- Need variation? Extend pattern, don't create new.

Memory compounds: each pattern saved makes future work faster and more consistent.

---

# Anti-Patterns

## Never Do This

- Dramatic drop shadows (`box-shadow: 0 25px 50px...`)
- Large border radius (16px+) on small elements
- Asymmetric padding without clear reason
- Pure white cards on colored backgrounds
- Thick borders (2px+) for decoration
- Excessive spacing (margins > 48px between sections)
- Spring/bouncy animations
- Gradients for decoration
- Multiple accent colors in one interface

## Always Question

- "Did I think about what this product needs, or did I default?"
- "Does this direction fit the context and users?"
- "Does this element feel crafted?"
- "Is my depth strategy consistent and intentional?"
- "Are all elements on the grid?"

---

# The Standard

Every interface should look designed by a team that obsesses over 1-pixel differences. Not stripped — *crafted*. And designed for its specific context.

Different products want different things. A developer tool wants precision and density. A collaborative product wants warmth and space. A financial product wants trust and sophistication.

The goal: intricate minimalism with appropriate personality. Same quality bar, context-driven execution.
