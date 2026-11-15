# Rebuild Show smoke, replace About arch with curtain reveal, update existing comparison

Prepared 2026-11-15 (America/Los_Angeles). Continue my unofficial **Keith Tyran / The Gentleman Magician desktop website**. Complete the two copied-module changes below, test them and update our **existing private Original & Latest comparison page**. This is an implementation assignment for this next chat, not another round of general ideas.

## User direction and exact scope

1. Rebuild the smoke effect on **all six The Show cards**, using my new smoke sequence. The present Revision 03 smoke is rejected: it is much smaller than the box and just appears/disappears. It must grow/billow across the intended card area, conceal the change, then clear convincingly.
2. In **Section 05 Behind the Curtain, `#about`**, replace the existing arched portrait frame with the supplied purple-and-gold curtain presentation. Start with curtains drawn and a clear **Click to reveal Keith** control. Open the curtains to reveal the existing magician portrait.
3. Rebuild and publish Latest at the **same existing comparison destination**. Preserve Original, previous variants and the successful moving lights. Do not create another Site.

The main hero is **perfect and locked**: no artwork, portrait, markup, styling, slider, lighting, audio or loading changes. Necessary navigation changes are the only standing exception; none appear needed here. The user says the upper sections and new Experience moving lights work great. Keep those, Events sheen, smooth manual Gallery, Booking cue, section order, normal content and quiet FAQ/form/footer. Do not implement the separate lower-page Easter-egg ideas.

## Startup and actual current source

Original GitHub: [SomeCallMeMitch/webdesignprojects](https://github.com/SomeCallMeMitch/webdesignprojects), branch `concept/keith-tyran-magician-experience`. Read `AGENTS.md`, its mandatory core records and latest `docs/PROGRESS.md` / `docs/DESIGN_PREFERENCES.md` first. Also read:
- `docs/KEITH_MODULE_LIBRARY_GUIDE.md`
- `docs/KEITH_STAGE_A_BUILD_QA_2026-11-15.md`
- `docs/KEITH_REVISION_03_DELIVERY_2026-11-15.json`
- `docs/KEITH_MOTION_REVIEW_2026-11-14.md` and `docs/KEITH_MODULE_MOTION_QA_2026-11-14.md`, for historical behavior/testing constraints.

**Do not build from the older GitHub runtime alone.** Its tracked application is an older Sections 01–10 checkpoint; all twelve sections, module system and newer motion exist in a **separate Sites source repository/current exported copy**. Original GitHub holds the latest decisions/handoffs, including rejected smoke feedback. An older Section 11 handoff is historical, not an instruction to rebuild completed sections.

Preferred live source: open our existing Site through its supported source workflow, preserving its identity and newest commits:
- Site ID: `appgprj_6af9d5dc93448191a81742b0d8c08dd6`
- [Stable comparison](https://keith-tyran-subtle-review.chiccaper1.chatgpt.site)
- Last deployed runtime was Revision 03, source commit `2cc532308e4e4c72dce63732cb68bda52b390975`.
- Separate Sites provider branch `main`, later source-only documentation HEAD `da155aab380c6e043958e15aa9393fe7d5f9541b` when this prompt was prepared. Inspect current source; newer state wins.
- Prior working path `/workspace/sites/keith-tyran-subtle-review` is a breadcrumb, not guaranteed to exist in a new chat.
- Read the existing `.openai/hosting.json` and retain its project ID. Get current Site/source access and use the supported source-opening process before edits.

Original user Windows checkout is `C:\Users\field\OneDrive\Documents\ChatGPT\Spec Websites\keith-tyran`; do not assume a cloud chat can access it. Never reset or unzip over newer/uncommitted user work.

If current Sites source cannot be opened, retrieve the complete source/export ZIP below into a fresh folder. It has no `.git` history: report an exported copy, not an invented branch/checkpoint. Do not claim updating a local user download. If publication/source access is unavailable, finish safe source/asset preparation and tests, save a versioned deliverable, and state the exact live-update blocker. Do not create a replacement Site or change the audience.

## Retrieve these files yourself

Use connected Drive metadata and authenticated binary download/materialization. A text preview is not ZIP bytes. Extract into staging, verify size/SHA-256 and CRC when supported, then read the included README/manifests. If the required file cannot be retrieved, state the actual access gap and ask for that exact attachment. The user should not need to upload again when tools can retrieve it.

### A. Required new sprite-sheet inputs — already uploaded

- **Filename:** `keith-smoke-and-about-curtain-inputs-v1-2026-11-15.zip`
- **Exact URL:** https://drive.google.com/file/d/1sCT3Gey1Nx56_1-LLm5nFlGz5zY7YHkl/view?usp=drivesdk
- **Drive ID:** `1sCT3Gey1Nx56_1-LLm5nFlGz5zY7YHkl`
- **Bytes:** **7,671,025**
- **SHA-256:** `95b4b87317f1800476dca85268d842816004790207523dfb899aab5afedaf9d1`
- **Verified project parent:** `1jLMAO7aEGDxedeusAlLnbKLY5Zn2VCGc` — [project folder](https://drive.google.com/drive/folders/1jLMAO7aEGDxedeusAlLnbKLY5Zn2VCGc).
- Six ZIP entries: README, manifest, two preferred unmodified sprite sheets, one rejected curtain sheet as reference only, and current About portrait reference. Packaging changed no image pixels and extracted no animation frames.

| Path inside ZIP | Exact source / role | Dimensions and limits |
| --- | --- | --- |
| `inputs/show-smoke-16frames-original.png` | Uploaded “Lavender smoke burst sprite sheet-2.png”; use for all six Show cards | 1254×1254 RGBA, apparent 4×4 sequence. Source SHA `ae7abb8fcc8f17b6d05eba53b688b5813bb82e083500c43bfc0df06f4541a2fb`. |
| `inputs/about-curtain-8frames-transparent-original.png` | Uploaded “Eight-frame purple curtain sprite sheet-3.png”; **preferred curtain** | 1774×887 RGBA, apparent 4×2 sequence. Source SHA `3082ee5e5c353bc92c07cc32d71496afcd07f9c3ca222ef4dc5b12650af6a5fd`. |
| `references/curtain-nontransparent-DO-NOT-USE.png` | Uploaded “Purple theater curtain opening sprite sheet-1.png”; comparison only | Alpha207–250 everywhere, no fully transparent openings. Do not deploy this as a transparent curtain overlay. |
| `references/magician_portrait_concept.webp` | Unmodified current About portrait | Rectangular RGB concept artwork. The arch is CSS, not painted into this image. |

Source sheets can be used as atlases or separated/repacked for playback; **individual redraws are not required just to obtain separate files**. Inspect actual decoded images, not just filenames or screenshots.

### B. Required complete current source fallback — optional if live source is available

- **Filename:** `keith-stage-a-build-review-v1-2026-11-15.zip`
- **Exact URL:** https://drive.google.com/file/d/1bp4JvWgbfg-PUCIL4P4P3kvwieJqSEm5/view?usp=drivesdk
- **Drive ID:** `1bp4JvWgbfg-PUCIL4P4P3kvwieJqSEm5`
- **Bytes:** **41,988,077**, 476 entries
- **SHA-256:** `66640595839ab775a2b78b20141d2ac51057411ecb9be93a1d0d7015a5b003d3`
- Same verified project folder. Includes preserved original, all twelve module sources, current copied motion variants, tools, assets, recipes, docs and self-contained `exports/keith-stage-a-review-v1/`. Read `EXPORT_PROVENANCE.json`.
- Export identifies deployed Sites source `2cc532308e4e4c72dce63732cb68bda52b390975`; it has no Git history and predates the latest rejection/new task notes. Apply current GitHub instructions to it.

Old one-cloud Stage A image pack is historical; do not accidentally reuse its puff instead of this sixteen-frame sequence. Other chats may have a ZIP named “keith-square-smoke-and-curtain-reveal-v1.zip”; this task’s exact package A is verified and contains the actual files assessed in the build conversation.

## Source map and preservation

Current composition: `compositions/keith-stage-a-review.json`. It selects Experience v2, Show v3, Events v2, Gallery v3, Booking v3, About v1 and all other original modules.

Before changes:
```text
node tools/compose-site.cjs verify
node tools/compose-site.cjs list
```

Preserve root `card-reveal-demo.html`/runtime, `module-library/baseline/`, every module v1, shared v1, integrity manifest and all older experiments/recipes. Baseline verification currently covers 117 entries. Do not refresh hashes to conceal edits. Preserve `dist/original.html` byte-for-byte and snapshot relevant root/hero/previous-recipe hashes before changes.

Fork **Show v3 → a free version (likely v4)** and **About v1 → a free version (likely v2)** with the tool. Copy the current recipe to a new descriptive recipe, e.g. `compositions/keith-smoke-curtain-review.json`. Choose free destinations; do not overwrite earlier experiments. Generated `previews/` pages are outputs.

Use a new selected asset pack for prepared sprites/frames, e.g. `module-library/asset-packs/sprite-reveal-v1/assets/sprite-reveal-v1/`. Current compiler supports explicit `assetPacks` prefixes for repository, hosted and portable builds. Preserve existing `stage-a-v1` selection because Experience v2 still uses its successful cleaned background. Keep original input sheets separate from runtime derivatives and record hashes/dimensions/alpha.

## Task 1 — smoke that actually covers the six cards

The previous failure was visual: small unrelated puff, weak coverage, simple appearance/disappearance. Valid alpha and working popup controls were not enough.

- Keep the existing six illustrations, grid, labels, original descriptions and click-to-expanded-description route. Replace the failed smoke choreography in the **new Show copy**, not in v3.
- The new sheet should show a compact central burst expanding into billowing smoke, a dense covering interval, then a clearing interval. Play the sequence; do not merely scale one cell and call it a smoke animation.
- Calibrate one card first, correct what you observe, then apply the reusable effect to **all six**. Do not stop at one working card and report the full task done.
- Map the overlay to the actual card’s bounding box. Smoke must reach the intended edges/corners at peak, not float as a smaller sprite in its center. Square atlas cells do not mean current DOM cards are square: inspect actual illustration/frame/caption dimensions. Preserve the approved layout and use proportional cover/appropriate clipping; do not stretch the smoke anisotropically or silently redesign all cards.
- Hover/focus should visibly start the central growth/billow. Keep it a single controlled encounter, not a continuously looping puff. Leaving during playback should settle/reset cleanly, without snapping a half-open blank card or stacking work.
- Preserve click/Enter/Space activation for the larger description. Coordinate card fade/masking and panel appearance with **the dense interval** so the smoke conceals the handoff. At peak the original must not visibly bleed through simply because most cloud alpha is 250 rather than255. Keep immediate access and Close/Escape available; do not delay usable content unnecessarily.
- Hover activation and click must share one state machine/timeline: clicking during hover retargets/continues safely instead of spawning a second cloud. Only the active card has decorative work. Closing restores the same original card and returns focus.
- Keep concept descriptions as real HTML. No text or buttons baked into sprites. No new sound or animation framework. Reduced motion opens the same content directly; no-JS retains native details/static illustrations.
- Do not promise a fluid simulation or smooth real sequence from this sheet until actual playback is inspected. Crossfades/holds may help; if the asset still pops or changes shape incoherently, identify specific defective frames and the smallest replacement brief rather than falsely marking success.

## Task 2 — curtain reveal replacing the arched About portrait frame

**Target is Section05 `#about`, not the hero and not the gallery.**

Actual current source:
- `module-library/modules/05-about/v1/module.html`
- `behind-curtain.css`
- `.behind-curtain__portrait` / `.behind-curtain__arch`
- `assets/section05_behind_curtain/magician_portrait_concept.webp`.

The current arched outline, border-radius, rings and glow are CSS. Replace that arch treatment in the **new About version** with a rectangular/square purple-curtain stage opening using the preferred curtain sheet. The portrait is already an unframed RGB image; it does not require repainting or an alpha-isolated person just to sit behind curtains.

- Initial enhanced state: curtain fully drawn, unmistakable click-to-reveal control. Keep “Behind the Curtain” title and biography readable outside the curtain.
- Default full reveal is **click or keyboard activation**, then remain open for viewing. Provide a clear way to close/replay. Exact wording can be refined, e.g. “Reveal Keith” / “Close curtain”.
- The user also suggested “maybe hover”. Use hover/focus as an optional small invitation—glint or slight seam response—if it improves discovery. Avoid automatically opening/closing the entire portrait repeatedly as the pointer crosses it. Click remains the dependable primary interaction.
- Portrait stays beneath the opening, framed by the drawn curtain/rod, without the old arched gold border still visible inside it. Preserve facial proportions and a useful crop. Do not crop his face/hands carelessly, stretch the portrait or imply a newly authenticated photograph.
- Curtain rod/frame/top valance must remain visually fixed while cloth opens. The supplied eight generated frames may shift: calibrate registration, crop boundaries and padding. If necessary isolate a consistent static decorative frame and prepare aligned cloth derivatives from the actual sheet; preserve source files. Do not move/scale the whole frame to fake cloth opening.
- Open/reverse/close behavior must survive rapid repeat input without skipping into the wrong state. Avoid one-frame flashes of the portrait before readiness or through the closed state. A solid backing/mask may be needed because near-opaque sprite pixels are not exactly opaque.
- Portrait remains labeled concept artwork; it is not a new live-action image or video. No face animation or hero behavior reuse. Use independent scoped classes/initializers.
- No-JS shows a useful static portrait/biography; reduced motion reveals/closes immediately. Image failure must not leave a disabled control blocking the only content.

## Sprite preparation / known quality limits

Already measured:
- Smoke sheet: real alpha0–255, apparent sixteen frames. Candidate middle cells7–12 have roughly99.8–100% pixels at alpha≥240. **Not a guarantee of perfect opacity, seamless playback or exact cell boundaries.**
- Preferred curtain sheet: real alpha0–255; ~33.21% pixels are exactly transparent. Its openings can reveal the portrait.
- Rejected pale/checkered curtain sheet: no zero-alpha pixels; do not choose it merely because it looks cleaner in a thumbnail.
- Faint bright-color edge residue in preferred sheets has measured alpha≤5. Inspect runtime on the actual dark background and light diagnostic background; do not certify clean edges by looking at transparent black alone.
- 1254/4 =313.5 and1774/4 =443.5. **Do not blindly divide into rounded equal cells and assume aligned results.** Establish explicit per-frame bounds/padding. Approximate original frame resolution is313px smoke and443px curtain; upscaling adds no detail.
- Sequence timing, frame drift, edge bleed and temporal coherence have not been tested. Separate image files would not fix inconsistently drawn frames.
- Extract/repack/optimize new derivatives with supported tools, record the method and any transparency/size changes. Keep sheets byte-identical. This task authorizes necessary sprite preparation, not unrelated generative redesign or new people.
- Delay nonessential image loading until approach/interaction; decode required assets before decorating. If a visitor activates before readiness, show usable content promptly rather than queueing a surprise later.
- Use bounded timers/animation work; cancel offscreen/tab-hidden/resize and on preference changes. Avoid persistent rAF loops and six simultaneous filter/particle simulations. Measure actual added asset weights; preserve alpha during compression.

## Build, test and update the existing page

Build the new recipe and regenerate outputs. Update `tools/build-hosted-review.cjs` to select that copied recipe for Latest; update the hub source `review/compare.html` and relevant current pointers. Inspect current revision first, use the next revision label (likely04), and include direct About/Show links plus clear instructions. Old root URL and Original must remain the same.

Use existing Site identity `appgprj_6af9d5dc93448191a81742b0d8c08dd6`; preserve current owner-private audience. Follow supported Sites source/packaging/publication workflow, push exact source before saving/deploying, keep credentials out of files/output, verify native deployment success. Current task explicitly requests this existing comparison update; no new destination/public launch or sharing change.

Required actual checks at **1440×900,1672×941,1920×1080**:
- Full-card smoke coverage, dense-phase concealment and natural clear/reveal. Capture at several timeline points, not only settled popup.
- Curtain closed, opening midpoint, open and reversing states: fixed rod/frame, readable unchanged copy, sensible portrait crop.
- Mouse/keyboard/focus visibility, six correct popup contents, Escape/backdrop/Close/focus return, curtain control state/replay.
- Rapid alternating hover/click/exit and close/reopen; no duplicate overlays, stale decode callback resurrection or accumulated timers.
- Initial reduced motion and changes during animation; no-JS static content; slow/failed images; offscreen, tab visibility and resize cancellation.
- Original hero regression, successful Experience tracking-light regression, existing Gallery keyboard/lightbox and smooth reordering, Booking cue and normal anchors. Keep footer last.
- Inquiry demo validation and **zero-send behavior** for click/Enter and JS-off; no endpoint/persistence introduced.
- Before/after integrity117 preserved hashes, root/original/previous variants unchanged, unique IDs, composition anchors/assets and portable export paths.
- No added sound, framework or mobile work. Report actual image bytes and loading behavior; no unsupported60fps/performance or screen-reader claims.

Use existing QA scripts when their runtime is available, or equivalent supported browser checks. Record exact viewport method and distinguish synthetic preference tests from actual OS media changes. If browser infrastructure is limited, say exactly what could not be tested. Passing static tests alone does not prove that smoke looks good.

## Completion and review

Finish both authorized effects and roll smoke across all six when quality is acceptable. If a real asset defect prevents a usable result, preserve a working view, record the concrete defect and minimal additional image requirement. Do not silently ship another visibly unsuccessful puff or request a whole new library of images without evidence.

Append work, paths, source identity, actual tests/limits, decisions and remaining tasks to PROGRESS; record user directions versus implementation choices in DESIGN_PREFERENCES. Update module guide/current recipe pointer and QA evidence. Save a **new versioned complete source/export ZIP** in the verified project Drive folder, preserving older packages; record exact link/ID/bytes/checksum and Git/Sites commits.

Return:
- Verified same Original & Latest URL and new revision, with where/how to trigger each effect.
- Short description and useful visual evidence of what changed.
- Actual QA results/limits and any unfinished issue.
- Actual current branch/commit(s), distinguishing original GitHub docs from separate Sites source/export.
- Confirmation the hero/original versions/accepted moving lights remain protected.

No unrelated Easter eggs, public exposure, mobile design, new media-rights assumption, real booking, endpoints, outreach or domain changes. Stop for user review after this batch.
