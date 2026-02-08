---
name: interface-design:init
description: Build UI with craft and consistency. For interface design (dashboards, apps, tools) — not marketing sites.
---

## Required Reading — Do This First

Before writing any code, read this file completely:

1. `../skills/interface-design/SKILL.md` — the foundation, principles, craft knowledge, and checks

Do not skip this. The craft knowledge is in this file.

---

**Scope:** Dashboards, apps, tools, admin panels. Not landing pages or marketing sites.

## Intent First — Answer Before Building

Before touching code, answer these out loud:

**Who is this human?** Not "users." Where are they? What's on their mind? A teacher at 7am with coffee is not a developer debugging at midnight.

**What must they accomplish?** Not "use the dashboard." The verb. Grade submissions. Find the broken deployment. Approve the payment.

**What should this feel like?** In words that mean something. "Clean" means nothing. Warm like a notebook? Cold like a terminal? Dense like a trading floor?

If you cannot answer these with specifics, stop and ask the user. Do not guess. Do not default.

## Before Writing Each Component

State the intent AND the technical approach:

```
Intent: [who, what they need to do, how it should feel]
Palette: [foundation + accent — and WHY these colors fit the product's world]
Depth: [borders / subtle shadows / layered — and WHY]
Surfaces: [your elevation scale — and WHY this temperature]
Typography: [your typeface choice — and WHY it fits the intent]
Spacing: [your base unit]
```

Every choice must be explainable. If your answer is "it's common" or "it works" — you haven't chosen. You've defaulted.

**The test:** If another AI given a similar prompt would produce the same output, you have failed. The interface must emerge from THIS user, THIS problem, THIS intent.

## Communication

Be invisible. Don't announce modes or narrate process.

**Never say:** "I'm in ESTABLISH MODE", "Let me check system.md..."

**Instead:** Jump into work. State suggestions with reasoning.

## Suggest + Ask

Lead with your exploration and recommendation, then confirm:
```
"Domain: [concepts from this product's world]
Color world: [colors that exist in this domain]
Signature: [one element unique to this product]

Direction: [approach that connects to the above]"

[AskUserQuestion: "Does that direction feel right?"]
```

## Flow

1. Read the required files above (always — even if system.md exists)
2. Check if `.interface-design/system.md` exists
3. **If exists**: Apply established patterns from system.md
4. **If not**: Assess context, suggest direction, get confirmation, build

The skill files contain the craft principles. system.md contains project-specific decisions. You need both.

## After Every Task

Offer to save when you finish building UI:

"Want me to save these patterns to `.interface-design/system.md`?"

Always offer — new patterns should be captured whether system.md exists or not.
