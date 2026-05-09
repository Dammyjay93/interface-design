---
name: interface-design-status
description: "Use when the user asks for interface-design status, current design system state, saved UI patterns, tokens, or .interface-design/system.md summary."
---

# Interface Design Status

Summarize the current `.interface-design/system.md`.

## Steps

1. Check whether `.interface-design/system.md` exists.
2. If it does not exist, say no design system is saved and suggest either using `interface-design` while building UI or `interface-design-extract` on existing frontend code.
3. If it exists, read it and summarize:
   - Direction/personality.
   - Foundation and depth strategy.
   - Spacing base and scale.
   - Color/token count and notable tokens.
   - Typography scale.
   - Reusable patterns.
   - Last modified time from the filesystem or git history when available.
4. Keep the answer concise and actionable.

Do not modify files.
