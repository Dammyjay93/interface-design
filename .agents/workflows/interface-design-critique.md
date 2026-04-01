---
description: Critique your build for craft, then rebuild what defaulted.
---

# Critique

Your first build shipped the structure. Now look at it the way a design lead reviews a junior's work — not asking "does this work?" but "would I put my name on this?"

## Required Reading

Read `.agents/skills/interface-design/references/critique.md` or `~/.gemini/antigravity/skills/interface-design/references/critique.md` for the full critique protocol.

## Process

1. Open the file you just built
2. Walk through each section below: composition, craft, content, structure
3. Identify every place you defaulted instead of decided
4. Rebuild those parts — from the decision, not from a patch
5. Do not narrate the critique to the user. Do the work. Show the result.

## Composition Check
- Does the layout have rhythm? Dense areas vs. open content?
- Are proportions doing work? Can you articulate what they say?
- Is there a clear focal point?

## Craft Check
- Spacing grid: every value a multiple of 4?
- Typography: distinguishable by more than just size?
- Surfaces: whisper hierarchy through tonal shifts?
- Interactive elements: hover, focus, press states?

## Content Check
- Does the screen tell one coherent story?
- Could a real person be looking at this data right now?

## Structure Check
- Any negative margins patching bad layout?
- Any calc() workarounds?
- Any absolute positioning escaping flow?

## Final Pass

Ask: "If they said this lacks craft, what would they point to?"

That thing you just thought of — fix it. Then ask again.
