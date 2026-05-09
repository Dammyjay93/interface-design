---
name: interface-design
description: "Use for product interface design work in Codex: dashboards, admin panels, SaaS apps, tools, settings pages, data interfaces, UI components, design-system memory, and interaction craft. Do not use for landing pages, marketing sites, campaigns, or brand-only visual exploration."
---

# Interface Design

Build product interfaces with intent, craft, and consistency. This skill is for UI that people operate: dashboards, admin panels, SaaS apps, internal tools, settings, data interfaces, and interactive products.

Do not use this for marketing pages or campaign sites. Use the repository's normal frontend guidance for those.

## First Checks

1. Read the user request and identify the exact interface surface being changed.
2. Check whether `.interface-design/system.md` exists.
3. If it exists, treat it as the project-specific source of truth for direction, tokens, depth, spacing, and reusable patterns.
4. If it does not exist, establish a direction before major UI changes. If the user has provided enough context, choose a direction and state the rationale. If the user context is too thin and the design choice would be arbitrary, ask one concise question before implementing.

## Intent Before UI

Before implementing a meaningful UI surface, determine:

- **Human:** who is using this, where they are, and what pressure they are under.
- **Task:** the verb they came to perform, not the generic feature name.
- **Feel:** a specific quality such as "dense like a trading floor", "calm like a reading app", or "warm like a notebook"; never stop at "clean" or "modern".

Then explore:

- **Domain:** at least 5 concepts, metaphors, materials, or vocabulary from the product's world.
- **Color world:** at least 5 colors or material cues that naturally belong to that domain.
- **Signature:** one visual, structural, or interaction element that could only belong to this product.
- **Defaults rejected:** 3 obvious interface defaults and what replaces each.

Use this exploration to make design decisions. Do not paste a long analysis into chat unless the user asked for it; use it to shape the implementation.

## Component Checkpoint

Before writing or changing a UI component, know the answer to:

```text
Intent: who uses this, what they must do, how it should feel
Palette: colors from the domain and why they fit
Depth: borders, shadows, layered surfaces, or surface shifts, and why
Surfaces: elevation scale and color temperature
Typography: type choice and why it fits the task
Spacing: base unit and scale
```

If any answer is "common", "standard", "clean", or "it works", keep designing. That is a default, not a choice.

## Building Rules

- Ground every screen with navigation context, location, and user/workspace context when applicable.
- Build a token architecture: foreground, background/surface, border, brand, semantic, and control tokens.
- Use four text levels: primary, secondary, tertiary, muted.
- Pick one depth strategy and commit to it: borders-only, subtle shadows, layered shadows, or surface color shifts.
- Keep surface elevation subtle. Hierarchy should be felt before it is noticed.
- Use one spacing base, usually 4px or 8px, and keep values on the grid.
- Keep radius systematic: small for buttons/inputs, medium for cards, larger for modals.
- Use icons to clarify meaning, not decorate. One icon set per product surface.
- Give every interactive element states: default, hover, active/pressed, focus, disabled, loading where relevant.
- For data interfaces, use tabular numbers and monospace where alignment or IDs matter.
- Prefer native controls when they preserve accessibility and styling requirements. Build custom controls only when native controls cannot meet the product interaction or visual system.

For deeper implementation details, read `references/principles.md` only when needed.

## Memory

Project memory lives at `.interface-design/system.md`.

Use it when present. After creating a new reusable design direction or component pattern, offer to save it. Save only patterns that are reused, likely reusable, or have measurements worth preserving.

Use this structure:

```markdown
# Design System

## Direction
Personality: ...
Foundation: ...
Depth: ...

## Tokens
### Spacing
Base: ...
Scale: ...

### Colors
...

## Patterns
### Button Primary
- Height: ...
- Padding: ...
- Radius: ...
- Usage: ...

## Decisions
| Decision | Rationale | Date |
```

For memory update rules, read `references/validation.md`.

## Evaluation Before Delivery

Before presenting UI work as complete:

- **Swap test:** would the design still feel the same if you swapped in a generic typeface, card grid, or sidebar?
- **Squint test:** can hierarchy be perceived without harsh borders or loud surfaces?
- **Signature test:** can you point to concrete places where the product-specific signature appears?
- **Token test:** do token names and values feel tied to this product, or could they belong to anything?
- **State test:** do interactive and async states exist?

If a check fails, fix the UI before final response. For a deeper post-build pass, use the `interface-design-critique` skill.

## Related Skills

- `interface-design-status`: summarize `.interface-design/system.md`.
- `interface-design-extract`: extract a system from existing frontend code.
- `interface-design-audit`: audit UI code against `.interface-design/system.md`.
- `interface-design-critique`: critique and improve a built interface.
