# Stage A — exact briefs for three images

## A1 — Clean Experience background

**Type:** precise background edit, not redesign.

**Edit target:** `png-references/assets/section02_experience/experience_stage_background.png` (1672 x 941, opaque RGB). The original WebP is in the matching `source-originals` path.

**Output:** `experience_stage_no_beams_v1.png`, opaque RGB PNG, target canvas 1672 x 941 with unchanged composition/registration.

**Prompt:**

Edit only the painted light cones in this theater background. Produce a new copy suitable for compositing independent moving spotlight beams over it. Preserve the camera, exact framing, purple velvet curtains, curtain trim/tassels, top light-origin locations, stage floor geometry, gold floor ellipse, ornamental stage-front panels, gold trim and all other composition. Remove the three visible directional spotlight cones and their conspicuous cone-shaped bright washes from the central background. Reconstruct the areas beneath them as a coherent dark plum/purple theater atmosphere. Keep a gentle diffuse ambient wash and restrained existing atmosphere so the scene retains depth; remove any directional floor highlight that unmistakably fixes an old beam's landing position. Do not turn the scene pitch black, flatten the texture, move the curtains or redraw the set. Retain the three existing source apertures/glints in their original positions so independent beams can be anchored there. No new lights, fixtures, people, audience, text, logos, frames, photos, props, beams, flares or a UI. This background must match the original as closely as the editing tool permits, apart from cleaning away the stationary beams.

**Registration requirements:**
- The bright middle origin reaches the top edge; do not expand the canvas to invent space above it.
- Use the actual original image to preserve origins. Approximate source locations are around x=22%, 50%, 78% near the top; these are visual guidance, not measured replacement registration data.
- No new content-aware crop or aspect-ratio change. If exact 1672x941 editing is unsupported, state the returned size/aspect and alignment limitations. Do not merely stretch a different scene and claim it matches.
- Comparison QA: curtain edges, tassels, gold ellipse and stage-front corners should line up when the result is overlaid on the original. New moving beam calibration happens later in code, including object-fit cropping.

**Do not recreate the supplied reusable beam files.**

## A2 — Main transition smoke cloud

**Type:** new standalone compositing asset, generated with genuine transparency.

**Style references:** `png-references/assets/hero/smoke.png`, `.../hero/haze.png`, and `.../hero/reveal/smoke.png`. For palette/context also inspect `.../section03_show/show_01_illusions.png` and the other five Show illustrations. Those source images are read-only references, not edit targets.

**Output:** `show_smoke_cloud_v1.png`, RGBA PNG, preferred canvas 1536 x 1024. Actual size must be reported.

**Prompt:**

Create one elegant theatrical smoke-cloud layer on a genuinely transparent background for a purple magician website. A soft irregular billowing cloud grows outward from a compact central gathering of smoke into loose curling edges. Silvery ivory highlights with muted lavender/plum shading, soft volumetric depth, varied fine tendrils and gaps, asymmetrical natural contours, detailed enough to be visible against a dark purple stage. Keep the overall cloud neutral enough to reuse for all six magic categories. Dense enough through parts of its center to briefly conceal an image swap, with translucent surrounding smoke and gradually fading edges. Leave a fully transparent safety margin of approximately 12–15% on every edge so no plume is cut off. It must read as smoke suspended in air, not an explosion, solid cotton ball, fog rectangle or neon shape. No opaque background, baked checkerboard, floor/contact shadow, props, faces, hands, cards, coins, flames, sparks, stars, glitter, text, frame, logo, popup or button. Preserve smooth partial alpha at edges, not only binary cutout transparency.

**Use:** code will move/scale/fade this cloud around a card-to-dialog transition. Do not draw the card or dialog into it. Do not promise that a single static texture alone creates physically correct smoke or an exact animated morph.

## A3 — Wispy hover/edge smoke

**Type:** new standalone compositing asset, generated with genuine transparency.

**References:** same smoke/palette inputs as A2.

**Output:** `show_smoke_wisp_v1.png`, RGBA PNG, preferred 1024 x 1024.

**Prompt:**

Create one airy, irregular curl of theatrical smoke on a genuinely transparent background. Thin wisps peel away and curl upward, with a few overlapping semi-transparent ribbons and softly lit lavender/ivory edges. Light, flowing, tactile and clearly legible on a dark purple theater background, while quieter and much more open than the main billowing cloud. Let the curl occupy the middle of the canvas with generous transparent margins; keep the whole wisp uncut. It should be reusable along any card edge when mirrored/rotated in code. No border, card, rectangle, frame, lettering, object, neon outline, sparkle, flame, face, background or painted checkerboard. Real partial alpha throughout the wispy edges.

**Use:** one image can be mirrored/repositioned/reused; do not generate six separate wisp sets unless the user later requests them. No hand-drawn labels inside the asset.

## Output and alpha QA

1. Deliver each asset as a separate file, not three items in a collage.
2. For B/C, transparent areas must actually have alpha=0 and smoke edges must include intermediate alpha values. An RGB image depicting checkerboard/black is not transparent.
3. Check B/C on both light and dark backgrounds for matte halos, hard cut edges and visible rectangles. Do not bake those test backgrounds into the deliverables.
4. For A, compare the set geometry and origin positions against the source; report any unavoidable generative drift before approving it for implementation.
5. Report actual width/height, mode/alpha status, filename, what changed, known quality/alignment limits and what remains undone. Do not claim automated pixel alignment or alpha verification unless those checks were actually run.
6. Preserve all input files. Generated outputs use new filenames in a separate output folder. No changes to the current website, approved hero or beam files.

## Not required from the image model

The popup's headings, paragraphs, close control and inquiry action belong in HTML. Dissolve masks, focus behavior, timed animation, smoke movement and beam tracking belong in code. Do not create an animated sprite sheet as a substitute for these three static assets: independent generations do not guarantee coherent frame-to-frame animation. A later real smoke sequence is a separate request if needed after the static-layer prototype.
