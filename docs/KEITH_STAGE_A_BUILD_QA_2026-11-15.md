# Stage A asset evaluation and copied-module build

Date: 2026-11-15 (America/Los_Angeles). Scope: continue the existing private desktop review, preserving hero and originals. This is implementation for user review, not final aesthetic approval.

## Asset verdict

**The supplied three images are adequate for this prototype; no replacement generation is needed now.** Retrieved both exact Drive ZIPs. Sizes, SHA-256 and CRC match the build handoff:

- Review: `keith-stage-a-motion-images-review-v1-2026-11-15.zip`, 11,079,479 bytes, SHA-256 `b6c6b985ca2c6013cc24d36e8a5cbdc7b5d49184c27d6f9f18fbb840cb2419a1`.
- Input: `keith-image-generation-inputs-2026-11-15.zip`, 15,256,541 bytes, SHA-256 `18646a1faaa09239be402b40ce79cccc03b4c41e8fb40669faab92b8c0db4550`.

Inspected cleaned backdrop, actual original backdrop, light/dark smoke composites, original beam texture and the assets in the assembled page. Background keeps the main curtain/set geometry, but fine generated texture drift remains. It is acceptable for a separate variant; it is not a pixel-exact restoration. No new image generation, retouching, crop or resizing was needed. Input PNGs/ZIPs remain unchanged.

Both smoke images have real partial transparency. Measured outermost-edge maximum alpha is **1/255** (cloud: 529 nonzero perimeter samples; wisp: 24). The original strict transparent-margin requirement still fails. New scoped CSS uses a feathered mask on cloud/wisp instances to conceal peripheral residue. This is compositing cleanup, not a claim that the original PNGs were repaired. Cloud becomes an animated overlay; wisp supplies one brief hover/focus gesture. Static textures do not become a fluid simulation or exact physical morph.

Runtime WebP conversions use quality 88, original dimensions and byte-identical decoded alpha planes. RGB compression is lossy. Combined runtime image size: **588,276 bytes** (background 100,162; cloud 264,164; wisp 223,950). These are stored/deferred file sizes, not a measured initial-load or performance score. Exact source/runtime hashes and sizes are in `module-library/asset-packs/stage-a-v1/manifest.json`.

## What was built

- Forked Experience v1 → **v2**. New cleaned backdrop in the enhanced view; original painted backdrop remains the no-JavaScript fallback. Reused the preserved hero's two beam textures as independent instances, plus a soft independently drawn center cone. Source points measured on the cleaned 1672×941 plate: left (382,42), center (836,2), right (1291,42). Map through the new variant's `cover`/top crop; do not use hero layout origins. Retained section dimensions/content; changed background object-position to top so its actual emitters stay in view. Beams track bounded horizontal pointer input from fixed sources. Copy remains readable. Old weak local glow is replaced only in this fork.
- Forked Show v2 → **v3**. Retained the existing spotlight, art and short captions. Added six native fallback disclosures; JavaScript enhances these into clearly named popup buttons. Hover/focus gives a brief wisp. Activation uses a bounded cloud/blur/fade reveal into one native dialog with the original illustration, longer live-text concept description, Close and local inquiry link. No sound or autoplay loop.
- New recipe **`compositions/keith-stage-a-review.json`** selects Experience v2 and Show v3, preserving Events v2 and Gallery/Booking v3. Prior `keith-current-review.json` stays unchanged. Current hosted builder now selects the new recipe; Revision 03 hub explains both additions.
- New optional asset-pack compiler mapping serves only explicitly selected `assets/<pack>/` directories. Packs cannot collide with the preserved asset tree. Repository previews, hosted build and portable export share the same mapping. Original/baseline source and preserved hashes are not modified.

## Verification actually performed

- `compose-site verify` passed before and after: **117 preserved SHA-256 entries**. Separate pre-change hashes match for all root runtime/art files, `dist/original.html`, and previous current-review recipe. No hero/nav changes. Git diff shows older experimental modules unchanged.
- All existing full, lab and bundle recipes plus new recipe assemble. New portable export includes new assets. Static checks passed for unique IDs, all fragment destinations and referenced local images. Syntax checks and `git diff --check` passed. Existing Show/Events Node VM suite: **35 checks pass**; this suite does not certify new smoke/tracking logic.
- Managed cloud browser, exact iframe CSS viewports **1440×900, 1672×941, 1920×1080**, displayed at a reduced scale to fit the available browser window. This is real desktop layout sizing inside a test frame, not a physical full-resolution screen capture. All three have no horizontal document overflow. Experience lights/art and dialog fit inspected; form controls stay within the paper at each size.
- Pointer interaction changed beam rotations while source positions remained fixed (1672 view left x378.573/y41.6232, center x828.5/y1.98206, right x1279.42/y41.6232; browser scrollbar reduces content width by 15px). Center cone's initially hard edge was softened in code. Frame-coalesced event handling has no perpetual rAF loop.
- Six distinct categories open their matching descriptions. Tested keyboard Enter, explicit Close and Escape; focus initially goes to Close and returns to the originating card. The inquiry route remains a local anchor. Native dialog modality provides background exclusion. Full screen-reader listening was not performed.
- Repeated open/close and different-card activation, including during transitions, remain usable. Detected and fixed internal card scrolling caused by the overflowing decorative wisp: enhanced cards now use `overflow: clip`. Post-fix internal scroll positions are zero. Animations are canceled on close, preference events, hidden/offscreen/resize handling; no stacked queued reveal is used.
- JavaScript-off iframe genuinely blocks scripts: no popup is created; native Show disclosures open their live descriptions and all six static illustrations remain. Original painted Experience art is supplied by `noscript`. Static form preview stays disabled; Enter caused no navigation or new resource entries.
- Enabled form checked with synthetic name/email/private-event/undecided-date/location: valid click and Enter both show the explicit nothing-sent/stored/booked feedback; request audit recorded **zero new resource entries and unchanged URL**. This is browser resource/navigation evidence plus source review of inert `method="dialog"`/preventDefault/no endpoint, not an external server packet capture.
- Gallery manual next/previous, eight alternating inputs, native lightbox and Escape/focus return operate. Hero visually changes to the playful pose using End and back using Home; Enable/Mute controls operate. No audio quality audition is claimed. Existing Events/Booking source preserved.
- New QA harness catches page errors/unhandled rejections; observed **zero** in exercised copied-page flows. Browser-extension metadata errors are infrastructure messages, not page exceptions.

## Important limits

- Reduced-motion **JavaScript** cancellation and immediate popup use were exercised through an explicitly simulated matchMedia change in a QA-only copy; active new Web Animations became zero and content stayed usable. This does **not** certify actual operating-system media switching or all native CSS transitions. Reduced-motion CSS is present and statically reviewed; OS preference switching and tab-hide during a frame remain unverified in this browser.
- Offscreen cleanup and rapid navigation were exercised, but image-request failure injection, slow-network timing, all resize-mid-animation races, physical desktop smoothness, FPS/Lighthouse, cross-browser testing and screen-reader listening remain open. Source handlers/readiness fallbacks were reviewed, not promoted to empirical passes.
- Very first activation before smoke decode opens the readable dialog immediately without smoke. Do not delay access waiting for decoration. Fine-pointer hover is optional; touch/reduced-motion retain content access.
- Taste remains subject to user review. If the effect feels too busy, tune opacity/timing before commissioning more art. A genuinely different smoke shape/sequence or precisely repainted background is optional later work, not a blocker to this prototype.

## Reproduction / source identity

Working checkout: `/workspace/sites/keith-tyran-subtle-review`, separate Sites source repository on provider branch `main`; starting HEAD `24217c74e3c62c8130e4b80c7f4d86a24ed0ada4`. Original GitHub concept branch and Windows checkout are separate; no local download was remotely changed. New complete export has no `.git` history.

Run `node tools/build-hosted-review.cjs`, then `node tools/create-stage-a-qa.cjs` for temporary test pages. Managed preview uses the approved `sites-preview` route. Before publishing remove only generated `dist/stage-a-qa.html` and `dist/stage-a-qa-runtime.html`; keep harness source under `docs/qa/` and generator under `tools/`. The harness intentionally labels simulated reduced motion and supplies actual viewport and resource diagnostics.

Full local review export: `exports/keith-stage-a-review-v1/`. Current private comparison keeps its Site identity/audience. Publication receipt and exact source commit are recorded separately after native success. No public sharing, real inquiry, outreach or media-rights change.

## Published build and complete source export

- **Existing private comparison:** https://keith-tyran-subtle-review.chiccaper1.chatgpt.site — Revision 03. Native deployment status `succeeded`; deployment `appgdep_6afa1a1f15fc8191a3cc823f8b934e80`; saved version `appgprj_6af9d5dc93448191a81742b0d8c08dd6~appgver_cb2a1b4d690c81919e264532ef83eb00`. Owner-only audience confirmed (one owner; no groups/editors/external visitors); no sharing changes.
- **Deployed Sites source commit:** `2cc532308e4e4c72dce63732cb68bda52b390975`, separate provider branch `main`.
- **Complete current source + portable runtime export:** [keith-stage-a-build-review-v1-2026-11-15.zip](https://drive.google.com/file/d/1bp4JvWgbfg-PUCIL4P4P3kvwieJqSEm5/view?usp=drivesdk), Drive ID `1bp4JvWgbfg-PUCIL4P4P3kvwieJqSEm5`, verified parent `1jLMAO7aEGDxedeusAlLnbKLY5Zn2VCGc`.
- **Archive:** 41,988,077 bytes; 476 entries; SHA-256 `66640595839ab775a2b78b20141d2ac51057411ecb9be93a1d0d7015a5b003d3`; local CRC passed. Drive metadata name/size/parent verified; no fresh remote output binary hash claimed.
- Archive is an exported file tree, not a Git checkout. Read `EXPORT_PROVENANCE.json`. Preserve newer Windows work; extract beside it. Includes preserved originals, module system, new variants/assets/recipe, docs and `exports/keith-stage-a-review-v1/`. It does not include the source repository's Git history.
- Original GitHub `SomeCallMeMitch/webdesignprojects` branch `concept/keith-tyran-magician-experience` records this report and source/export receipt. Its tracked application remains the older runtime; do not mistake this documentation update for full runtime synchronization. This is deliberately distinguished from the deployed Sites source.
- User review of strength/taste is next. No further effects, image generation, real booking or outreach started.
