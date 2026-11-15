# Yes — reuse the hero lights below the hero

## Verified current implementation

The hero has **two independent transparent WebP beam files**, plus **one CSS-drawn center beam**. Its rendered three lights are not three flattened stage images. Its separate smoke/haze layers are reusable too.

| Purpose | Exact source relative to baseline assets | Size | Current format |
| --- | --- | --- | --- |
| Left beam, original size | `hero/beam-left.webp` | 1672 x 941 | RGBA, partial alpha |
| Right beam, original size | `hero/beam-right.webp` | 1672 x 941 | RGBA, partial alpha |
| Left beam, runtime optimized | `hero/reveal/beam-left.webp` | 950 x 535 | RGBA, partial alpha |
| Right beam, runtime optimized | `hero/reveal/beam-right.webp` | 950 x 535 | RGBA, partial alpha |
| Center beam | Procedural CSS in shared v1 `styles.css` | Layout dependent | No image to generate |
| Smoke, original | `hero/smoke.webp` | 1672 x 941 | RGBA |
| Smoke, optimized | `hero/reveal/smoke.webp` | 1120 x 630 | RGBA |
| Haze | `hero/haze.webp` | 1672 x 941 | RGBA |

All raster files above are supplied in this kit as exact WebPs plus decoded PNG references. Runtime can use the optimized files when visual quality is sufficient; large files remain available for reference. Transparency and dimensions were checked while packaging.

## Reuse without changing the locked hero

- Read/reference the existing files or make independent named copies for the new module. Never overwrite the hero files, baseline, shared v1 or preserved hashes.
- Give the new section its own scoped CSS/JS and independent beam instances. Do not load `hero.js` a second time or change its current state/handlers to make the lower section work.
- Do not add new generic `.beam` or `.beam-center` CSS rules that could leak into the hero. Use a section-specific prefix.
- New origin positions belong to the Experience section's background/crop, not the hero's fixture coordinates.
- Left/right textures can be repositioned/rotated/scaled around their light-emitting point. Center beam can be created independently using the same CSS technique. Its construction requires no new image-generation call.
- The current lower-section background still needs a clean copied base. Reusing the hero beams does not remove the cones painted into that background.

## Current source pivots — reference only

Shared v1 styles use left `transform-origin: 30.1% 12.9%` and right `transform-origin: 71.2% 14.3%` within the full beam image element. These are useful starting points for the supplied uncropped textures. If a derivative is cropped/reframed, its pivot must be recalibrated.

Current HERO layout uses different light-origin coordinates (about 33.6%/13.7%, 52.3%/13.4%, 71.4%/14.6%). **Do not copy these layout positions into Section 02**. Keep the supplied source image canvas intact and independently map the new section's three origins after object-fit cropping. Brightest-pixel measurements are not a substitute for physical-origin alignment.

## Center beam construction, explanatory reference

The current center light uses clipped, layered gradients with a soft blur and screen blending: a narrow source at top center, widening trapezoidal cone, bright near-source wash fading downward, plus faint internal rays. Its transform origin is top center. A new section can use this pattern under new scoped class names; the original CSS remains unchanged. Do not ask the image model to generate a third beam merely because there are only two raster beam files.

## Priorities for the new image chat

1. Clean the Section 02 backdrop (A1).
2. Produce dedicated cloud/wisp assets (A2/A3) for smoke-card work.
3. Keep existing beam files unchanged. Their reuse is an implementation task, not a generation task.
