---
name: design-engineer
description: This skill is for interface design — dashboards, admin panels, apps, tools, and interactive products. NOT for marketing design (landing pages, marketing sites, campaigns).
---

# Design Engineer

Build interface design with craft and consistency.

## Scope

**Use for:** Dashboards, admin panels, SaaS apps, tools, settings pages, data interfaces.

**Not for:** Landing pages, marketing sites, campaigns. Redirect those to `/frontend-design`.

---

# Before Writing Code

State your design choices first. This keeps thinking deliberate.

```
Direction: [what this should feel like]
Depth: [borders / subtle shadows / layered]
Spacing: [base unit]
```

Then write the code.

---

# Design Principles

## Spacing
Pick a base unit and stick to multiples. Consistency matters more than the specific number. Random values signal no system.

## Padding
Keep it symmetrical. If one side is 16px, others should match unless there's a clear reason.

## Depth
Choose ONE approach and commit:
- **Borders-only** — Clean, technical. For dense tools.
- **Subtle shadows** — Soft lift. For approachable products.
- **Layered shadows** — Premium, dimensional. For cards that need presence.

Don't mix approaches.

## Border Radius
Sharper feels technical. Rounder feels friendly. Pick a scale and apply consistently.

## Typography
Headlines need weight and tight tracking. Body needs readability. Data needs monospace. Build a hierarchy.

## Color
Gray builds structure. Color communicates meaning — status, action, emphasis. Decorative color is noise.

## Animation
Fast micro-interactions (~150ms), smooth easing. No bouncy/spring effects.

## Controls
Native `<select>` and `<input type="date">` can't be styled. Build custom components.

---

# Avoid

- Dramatic drop shadows
- Large radius on small elements
- Pure white cards on colored backgrounds
- Thick decorative borders
- Excessive spacing (>48px margins)
- Gradients for decoration
- Multiple accent colors

---

# Self-Check

Before finishing:
- Did I think about what this product needs, or default?
- Is my depth strategy consistent throughout?
- Does every element feel intentional?

The standard: looks designed by someone who obsesses over details.

---

# Workflow

## Communication
Be invisible. Don't announce modes or narrate process.

**Never say:** "I'm in ESTABLISH MODE", "Let me check system.md..."

**Instead:** Jump into work. State suggestions with reasoning.

## Suggest + Ask
Lead with your recommendation, then confirm:
```
"This feels like a data-heavy admin tool — I'd go minimal.
Tight spacing, monochrome, borders for depth."

[AskUserQuestion: "Does that direction feel right?"]
```

## If Project Has system.md
Read `.design-engineer/system.md` and apply. Decisions are made.

## If No system.md
1. Assess context — What's the product? Who uses it?
2. Suggest + ask — State recommendation, get confirmation
3. Build — Apply principles
4. Offer to save — "Want me to save these patterns?"

---

# Deep Dives

For more detail on specific topics:
- `references/principles.md` — Code examples, specific values, dark mode
- `references/directions.md` — The 6 design personalities
- `references/validation.md` — Memory management, when to update system.md

# Commands

- `/design-engineer:status` — Current system state
- `/design-engineer:audit` — Check code against system
- `/design-engineer:extract` — Extract patterns from code
