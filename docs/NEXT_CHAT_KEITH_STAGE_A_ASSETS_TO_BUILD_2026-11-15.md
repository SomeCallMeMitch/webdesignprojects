# Build-chat handoff — Stage A motion assets are available
Prepared 2026-11-15 for the existing Keith Tyran desktop website build conversation.

## Assignment and scope
Restore your existing build context, retrieve the actual image files below, and use this handoff to continue the motion/module work already authorized in your conversation. This handoff supplies components and technical guidance; it does not create new deployment/publication authority or assert that the user approved every generated detail.

Read `AGENTS.md` and its required startup records, latest `docs/PROGRESS.md`, `docs/DESIGN_PREFERENCES.md`, and `docs/image-handoffs/2026-11-15/STAGE_A_REVIEW_RESULTS.md`.
Repository: `SomeCallMeMitch/webdesignprojects`.
Concept branch: `concept/keith-tyran-magician-experience`.

**Preserve the newest existing build.** Original GitHub runtime is an older Sections 01–10 checkpoint; all twelve sections plus module/motion work were completed later in separate local/exported work. Do not rebuild completed sections or reset a current checkout from this older branch/archive. The input kit was exported from a separate private Sites source repository, not from access to the user's Windows checkout. Determine which current source you already have and retain newer/uncommitted work. If source is missing, retrieve the current source through your existing build records rather than treating this asset ZIP as a complete site.

**Hero stays locked.** Do not alter its people, slider, light/audio behavior, artwork, scripts or styles. Needed navigation changes are the sole standing exception. Read-only reuse or independent copies of hero beam textures below it is allowed.

## Required package: three NEW image components
Download this exact ZIP yourself with connected Google Drive tools where available:
- **Filename:** `keith-stage-a-motion-images-review-v1-2026-11-15.zip`
- **URL:** https://drive.google.com/file/d/1ckcfBi-67182tUrEzjxoNos_Jc43YlWw/view?usp=drivesdk
- **ID:** `1ckcfBi-67182tUrEzjxoNos_Jc43YlWw`
- **Project folder:** https://drive.google.com/drive/folders/1jLMAO7aEGDxedeusAlLnbKLY5Zn2VCGc
- **Bytes:** 11,079,479
- **SHA-256:** `b6c6b985ca2c6013cc24d36e8a5cbdc7b5d49184c27d6f9f18fbb840cb2419a1`
- **Alternate ChatGPT copy:** https://chatgpt.com/library?file_id=libfile_3a2a4df990e881918af94449004f84ac&account_id=personal
- Drive metadata verified the exact name, size, parent and private status. Input bytes were hashed locally and output ZIP CRC passed; a fresh remote output hash was not performed.

Use authenticated binary download/materialization, not a text preview. Extract in a separate staging folder, never over the current project. Verify bytes/checksum and CRC when supported. If connected access fails, identify the actual limitation and ask for this exact ZIP only. Do not imply guaranteed access to another chat or Windows paths.

### Exact files at ZIP root and purpose
| File | Actual size / mode | What it does |
| --- | --- | --- |
| `experience_stage_no_beams_v1.png` | 1672×941 RGB, opaque | Copied Experience stage cleaned of its three baked directional spotlight cones and fixed beam-landing highlights. Keeps purple curtains, gold set/floor geometry, ambient haze and three tiny original source glints. Use as the base of a NEW Experience motion variant, with separate beams above it. |
| `show_smoke_cloud_v1.png` | 1536×1024 RGBA | One reusable billowing lavender/ivory cloud. Scale/move/fade across a Show card-to-description transition to help conceal the image/content swap. Reuse across all six Show categories. |
| `show_smoke_wisp_v1.png` | 1254×1254 RGBA | A lighter, airy curl for hovered card edges and transition start/end. Reposition, mirror or rotate copies in code. One source asset; no six-image set required. |

Output SHA-256:
- Background: `472c5013e417a7c116c6654142ae4a942bd5853d3463333509deaa403a6ade1d`.
- Cloud: `2f028ae8bb62f3a4e84b9e62732b909693e0c1e81902f7c7770a7a676900ba58`.
- Wisp: `20e610f7c74409d021764539e8edb364fc0c857493c436c4e95e681baf724394`.

### Other package contents
- `README.md`: review status and limits.
- `OUTPUT_MANIFEST.json`: dimensions, modes, byte sizes, hashes, measured alpha and QA notes.
- `qa/smoke_light_dark_preview.png`: labeled white/dark-purple smoke composites for inspection ONLY. Do not use this flattened sheet as a runtime asset.
- `qa/background_original_result_overlay.png`: 50% original/result registration overlay. It intentionally still shows the ORIGINAL beams and is QA ONLY, not the cleaned background.
- `references/01_START_HERE.md`, `02_STAGE_A_IMAGE_BRIEFS.md`, `03_REUSE_HERO_LIGHTS.md`, `05_SOURCE_MANIFEST.json`, `06_IMAGE_INDEX.md`: source briefs/provenance.
- `references/png-references/section02_experience/experience_stage_background.png`: unmodified old background.
- `references/png-references/hero/smoke.png`, `hero/haze.png`, `hero/reveal/smoke.png`: read-only smoke style references.
- `references/png-references/section03_show/show_*.png`: six original Show illustrations, read-only context.
These reference paths are relative to the output ZIP, unlike the input kit's `png-references/assets/...` paths.

## Existing reusable beam components: get from current source or ORIGINAL input kit
The NEW output ZIP above does **not** include the beam files. They already exist in the preserved site assets and are also in this separate input kit:
- **Filename:** `keith-image-generation-inputs-2026-11-15.zip`
- **URL:** https://drive.google.com/file/d/1FXzNaVnS1aWu-CDUr2Cc_xTn6UA6vHlC/view?usp=drivesdk
- **ID:** `1FXzNaVnS1aWu-CDUr2Cc_xTn6UA6vHlC`
- **Bytes:** 15,256,541
- **SHA-256:** `18646a1faaa09239be402b40ce79cccc03b4c41e8fb40669faab92b8c0db4550`
- **Alternate:** https://chatgpt.com/library?file_id=libfile_794a5aba9f848191947326a84333e916&account_id=personal
- This image session downloaded and verified its bytes/checksum and 49-entry CRC successfully.
- Required if you cannot locate the exact existing beam assets; otherwise optional reference backup.

Within that ORIGINAL input ZIP:
| Exact relative path | Size | Purpose |
| --- | --- | --- |
| `source-originals/assets/hero/beam-left.webp` | 1672×941 RGBA | Original transparent left beam |
| `source-originals/assets/hero/beam-right.webp` | 1672×941 RGBA | Original transparent right beam |
| `source-originals/assets/hero/reveal/beam-left.webp` | 950×535 RGBA | Optimized left beam |
| `source-originals/assets/hero/reveal/beam-right.webp` | 950×535 RGBA | Optimized right beam |
| `source-originals/assets/hero/smoke.webp` | 1672×941 RGBA | Existing smoke, optional fallback |
| `source-originals/assets/hero/reveal/smoke.webp` | 1120×630 RGBA | Optimized existing smoke |
| `source-originals/assets/hero/haze.webp` | 1672×941 RGBA | Existing atmosphere; includes painted cards, so not a neutral replacement cloud |

Decoded PNG equivalents are at `png-references/assets/...` with matching filenames/extensions changed to PNG. No conversion adds resolution. The middle beam is procedural CSS, not a missing third image. Do not ask for or generate a third beam.

### Beam anchoring and isolation
- New Experience instances must have independent section-scoped CSS/JS; never reload `hero.js` or bind lower-section behavior to hero state.
- Do not add global `.beam`/`.beam-center` rules that leak into the hero.
- Reference texture pivots for the intact original beam canvases: left `30.1% 12.9%`, right `71.2% 14.3%`. Treat as starting points; cropped derivatives require recalibration.
- Independently measure/map Experience's actual three source glints through its object-fit crop. Rough image positions around 22%, 50%, 78% near top are visual guidance only.
- Do NOT copy hero layout-origin coordinates into Experience.
- Center beam may use an independently scoped version of the existing clipped layered-gradient/blur/screen-blend technique.
- Keep every moving beam visibly attached to its emitting source. The cleaned background is needed to avoid stationary cones beneath the new moving beams.

## Known defects and review status — do not omit
These are generated review candidates, not flawless or finally approved assets:
1. Background retains exact 1672×941 canvas without resize. Major geometry visually aligned closely in a full-size 50% overlay, but fine curtain/trim/texture details have small generative drift. No automated pixel registration or physical source calibration passed.
2. Both smoke PNGs have genuine alpha=0 and intermediate alpha, extrema 0–253. White/dark preview inspection showed no obvious matte rectangle, cut visible plume or objectionable halo at preview scale.
3. **Strict fully transparent safety margins failed:** faint peripheral alpha extends to image edges. Cloud nonzero bbox `(0,0,1530,1024)`; wisp `(0,23,1236,1254)`. Generative refinements did not reliably fix it. Resolve edge handling/padding in new derived copies before treating these as final runtime assets; preserve masters and record any changed dimensions/pivots. Do not silently claim the original margins pass.
4. Wisp is 1254 square, larger than preferred 1024 square. Do not stretch to fit.
5. Static textures alone are not a physical smoke simulation, exact morph, coherent sprite sequence or finished animation.
6. This image chat changed NO site source, hero, modules, baseline/v1, live preview or original/new comparison page. No deployment occurred. The inline review was a compressed conversation-only viewer, not a website deliverable.

## Intended integration in the existing build
Use your existing authorized implementation plan. This section explains roles, not a new unrelated rebuild:
- Preserve original/root preview and baseline, all v1 modules/shared files and integrity hashes.
- Create copied/new variants and recipes for Experience tracking beams and Show smoke transitions; do not overwrite the preserved original modules.
- Keep existing Show glow, Events sheen, manual Gallery movement and Booking light cue unless the user explicitly changes them.
- Show: retain the six category illustrations; cloud/wisp are separate overlay layers. Expanded headings/paragraphs, close button and inquiry action remain real HTML. Dissolve masks, timing, focus management and animation cleanup belong in code. Do not flatten text/dialog controls into images or generate replacement Show illustrations.
- Support keyboard, Escape, focus return, rapid repeated activation, reduced motion and useful static fallback. Animation must not block the inquiry route.
- Experience: apply cleaned background only in the new variant; add independent left/right/center beams anchored to its real sources.
- If already authorized to update the existing original/new comparison destination, rebuild its generated previews to expose the new variants and verify their routes. Follow that conversation's existing hosting authorization; no new destination/public launch is authorized by this handoff.

## Verification and completion
Before coding, run `node tools/compose-site.cjs verify` if present in the actual current module source, record baseline result, and inspect source integrity. Do not pretend the older original repo necessarily includes that tool.
After changes, rerun integrity verification, rebuild generated previews, and actually test desktop at 1440×900, 1672×941 and 1920×1080, pointer/keyboard/reduced motion, fixed source anchoring, light/dark smoke edges, popup focus/close behavior, repeated use and original hero regression. Keep runtime image weights reasonable; use new derivatives with preserved alpha when optimizing. Report only checks performed.

Append actual work, changed paths, package/source identity, tests, limits, current branch/commit and exact next steps to `docs/PROGRESS.md`; record genuinely approved durable decisions separately from proposals in `docs/DESIGN_PREFERENCES.md`. Save any derivative asset package to the verified project Drive folder with a new versioned name; preserve originals and sharing.

Return the exact updated comparison link only if it was actually updated and verified; otherwise say clearly what remains pending. No mobile, real booking endpoints, media-rights assumptions or outreach.
