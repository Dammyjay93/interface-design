# Codex Image Generation Workflow

Use this reference only when running in Codex and image generation is available. In other agents, keep the same design reasoning but skip image generation.

Image generation is a visual companion for interface design. It is not the final UI source of truth. Generate images to explore direction, sharpen critique, or create project-bound raster assets; then translate the useful decisions into tokens, layout, components, states, and code.

## When To Use Image Generation

Use image generation when one of these is true:

- The project has no `.interface-design/system.md` and visual direction is still open.
- The user asks for a new screen, dashboard, app shell, design direction, redesign, polish pass, or "make it beautiful" work.
- The interface needs a distinctive product-specific signature and text exploration is still too abstract.
- A screenshot exists and the next step is a craft critique or stronger visual alternative.
- The UI needs a project-bound raster asset: empty-state illustration, textured background, product placeholder, banner, onboarding image, or domain-specific visual.

Skip image generation when:

- The task is a small component tweak with an established system.
- The existing product design is locked and the requested change is implementation-only.
- The needed output is a precise icon, logo, SVG, chart, diagram, or UI text layout better handled in code.
- Generated visuals would slow the work without clarifying a decision.

## Core Loop

1. Explore domain, color world, signature, and defaults as usual.
2. Decide whether an image will clarify the next decision.
3. Use image generation for one of four modes: direction board, UI reference, screenshot paintover, or raster asset.
4. Inspect the image. Reject generic SaaS, decorative noise, unreadable UI, impossible layouts, bad text, and off-domain palettes.
5. Extract decisions from the useful parts: palette, density, proportions, surface strategy, navigation model, signature element, and asset style.
6. Implement in code. Do not treat the generated image as the implementation.
7. Verify the real UI in a browser or screenshot.
8. Save durable decisions to `.interface-design/system.md` when they should persist.

## Mode 1: Direction Boards

Use before code when product direction is open. Generate two or three visually distinct boards, not full UI screens.

Each board should show:

- Product world and material cues.
- Color temperature and accent behavior.
- Surface/depth mood.
- Density and rhythm.
- One possible signature element.

Avoid generic dashboard cards, legible UI text, final product screens, decorative gradients, abstract blobs, and stock-photo feel.

Prompt scaffold:

```text
Use case: ui-mockup
Asset type: interface design direction board, not a final UI
Primary request: Explore a visual direction for [product/domain].
Audience/task: [human] needs to [core verb].
Feel: [specific emotional/operational quality].
Domain cues: [5+ concepts from exploration].
Color world: [5+ physical/domain colors].
Signature idea: [unique visual/structural/interaction concept].
Composition: moodboard-like composition with interface fragments, material samples, layout rhythm, surface hierarchy, and abstracted controls.
Text: no readable product copy; use abstract blocks and tiny illegible labels only.
Avoid: generic SaaS dashboard, blue-purple gradients, floating cards everywhere, decorative blobs, stock-photo feel, unreadable contrast.
```

After generation, choose the useful direction by naming:

- Palette primitives.
- Surface/depth strategy.
- Navigation or composition model.
- Signature element.
- Defaults it replaces.

## Mode 2: UI Reference Mockups

Use for greenfield screens and major redesigns after direction is chosen. Generate a medium-fidelity reference image to make composition concrete, then implement it in code.

The generated mockup may inspire layout proportions, information hierarchy, component density, surface stacking, motion or interaction hints, and signature placement. Do not rely on generated text, exact measurements, chart values, icons, or data correctness.

Prompt scaffold:

```text
Use case: ui-mockup
Asset type: medium-fidelity product interface reference
Primary request: Create a reference mockup for [screen/workflow].
Audience/task: [human] needs to [core verb].
Chosen direction: [direction board summary].
Layout requirements: [navigation, panels, table/chart/form, primary action].
Signature element: [specific recurring product-only element].
Design system: [depth strategy, spacing base, radius, typography mood, palette primitives].
Text: use mostly abstract labels or very short generic labels; do not depend on exact readable text.
Responsive intent: design should translate cleanly to desktop and mobile.
Avoid: generic dashboard template, impossible controls, noisy decoration, too many accent colors, illegible contrast.
```

When coding from a mockup:

- Translate the image into real component structure.
- Replace image text with real product copy.
- Use stable responsive constraints, not pixel-copying.
- Verify with browser screenshots.

## Mode 3: Screenshot Paintovers

Use after implementation when the UI works but lacks craft. Capture or inspect the current screen first, then use it as a reference for a stronger design direction.

Ask image generation for a better version that preserves product purpose, main layout and workflow, required data regions, and existing brand/system constraints if present. Ask it to improve focal hierarchy, rhythm and proportions, surface depth, density, signature visibility, and empty/error/loading state presence.

Then compare the real screenshot to the generated reference. Patch only decisions that make the real UI better and remain feasible in the codebase.

## Mode 4: Project-Bound Raster Assets

Use for assets that should ship or be referenced by the UI:

- Empty-state illustration.
- Onboarding or setup image.
- Domain-specific placeholder.
- Background texture or material.
- Product mockup or feature preview.

Do not use raster generation for icons when the repo uses an icon set, logos or brand marks that need vector precision, charts or diagrams that need data accuracy, or UI text that must be legible and exact.

After generation:

1. Inspect the result.
2. Move or copy the selected asset into the project.
3. Use a stable, descriptive filename.
4. Update code references.
5. Verify the asset renders at desktop and mobile sizes.
6. Record the final prompt and path if the asset defines reusable visual language.

## Saving Visual Decisions

When image generation shapes the design, offer to save durable parts to `.interface-design/system.md`.

Suggested format:

```markdown
## Visual Direction
Source: Codex image generation
Selected reference: path/to/reference.png
Prompt summary: [one paragraph]
Palette: [primitive colors and why]
Surface strategy: [borders-only/subtle shadows/layered/surface shifts]
Signature: [element and where it appears]
Do not use: [rejected defaults and visual traps]
```

Save image references only when they will help future sessions. Do not save discarded variants, one-off assets, or prompts that did not influence the final UI.

## Quality Gate

Before showing the result, confirm:

- The real UI, not the generated image, is the deliverable.
- Generated direction appears in at least five concrete places if it was used.
- Tokens and component choices match the selected visual direction.
- Text is real, readable, and implemented in code.
- Layout works in browser screenshots at relevant breakpoints.
- Project-bound generated assets live in the workspace, not only in Codex's default generated image location.
