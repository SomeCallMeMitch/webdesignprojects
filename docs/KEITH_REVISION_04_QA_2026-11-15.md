# Revision 04 — full-card smoke and About curtains

2026-11-15, America/Los_Angeles. Existing private Site `appgprj_6af9d5dc93448191a81742b0d8c08dd6`, separate Sites source branch `main`, starting HEAD `da155aab380c6e043958e15aa9393fe7d5f9541b`. Original GitHub concept branch is documentation authority and remains an older runtime.

## Implementation

New recipe `compositions/keith-smoke-curtain-review.json` selects Show v4 and About v2. Existing Experience v2, Events v2, Gallery v3, Booking v3 and remaining originals stay selected. Earlier recipes and variants are unchanged. Hosted Latest and the existing Original & Latest hub select Revision 04.

Show v4 plays all16 supplied smoke frames using a single canvas/timeline shared by hover/focus and activation. Proportional cover maps the square frames to the actual full panel dimensions; no anisotropic stretching. Dense frames conceal the transition to the existing native dialog. Close stays immediately available; the content surface becomes visible at frame6 (about510ms from a new burst), then smoke clears. Only one card has decorative work. A click during hover continues/retargets that timeline. Escape, Close and backdrop restore the same card/focus. Leaving a hover cancels to the intact original. Missing/undecoded art and reduced motion open content directly. Descriptions remain real HTML; no-JS retains native details.

About v2 removes the CSS arch/rings. Purple curtain cloth plays forward/reverse through eight supplied frames. Rod, top valance and outer rails use a fixed derivative of the first frame. Click/Space/Enter opens and stays open; repeat input reverses. Portrait uses a proportionate crop within the stage, retains head and forward hand; outer raised hand is partly behind the side curtain. Biography and concept-art label are unchanged. No-JS/missing sprites show the static portrait and biography. No full automatic hover opening.

## Input and preparation

Exact Drive ZIP A retrieved through authenticated raw-file fetch:7,671,025 bytes; SHA256 `95b4b87317f1800476dca85268d842816004790207523dfb899aab5afedaf9d1`; ZIP extraction succeeded. Preferred sheets preserved byte-identically under the new pack's `inputs/`. Rejected nontransparent sheet was not deployed. No redraw or generation.

`tools/prepare-sprite-reveal.py` uses explicit integer crop bounds: smoke x/y `[0,314,627,941,1254]`, curtain x `[0,444,887,1331,1774]`, y `[0,444,887]`. Transparent padding normalizes cells to314/444px; no resize/stretch during extraction. Alpha<=5 is zeroed to remove fringe; alpha>=240 becomes255 for dense concealment. RGB WebP quality88, fixed frame quality92. All resulting files decode. Runtime total **478,048 bytes** (16 smoke cells,8 curtain cells,1 fixed frame); metadata/hashes in the pack manifest. Deferred until section approach; activation before readiness uses immediate content. This is stored image weight, not a measured first-load score.

## Actual checks

- Preserved117 SHA256 entries pass. Independent snapshot verifies197 pre-existing root/library/recipe/original-output files unchanged (new fork files excluded). `dist/original.html`, all hero sources/assets, original modules, previous recipes and Experience v2 are unchanged. No preservation hashes refreshed.
- All eight complete/lab/bundle recipes assemble. New twelve-module preview and portable export build;42 unique HTML IDs;43 static image references exist. Compiler validates anchors/module IDs; syntax checks and `git diff --check` pass.
- Managed cloud Chrome, exact **iframe CSS viewports1440×900,1672×941,1920×1080**, scaled to fit the available browser window. No document horizontal overflow at any size. This is not a native full-resolution monitor capture.
- Full-card smoke coverage inspected at each size; growth/dense/clear samples captured through QA-only frame-selection controls calling the same renderer. Samples prove layout/coverage, not real-time fluidity. Normal activation playback and settled dialog also inspected. Dense sample covers corners without illustration/text bleed; clear sample exposes the intact original. Atlas motion remains a crossfaded16-frame illustration sequence, not a fluid simulation. No replacement art required for this review build.
- All six correct descriptions tested using Enter; Escape closes and focus returns. Rapid six-category open/close, explicit Close and mouse activation exercised. Detected/fixed negative first-rAF timestamp causing an invalid frame lookup. Post-fix QA diagnostic errors empty in exercised flows.
- Curtain closed/midpoint/open states inspected; fixed rod/valance/rails; no old arch. Rapid close/open/reverse, Space and synthetic JS reduced-motion change exercised. Found/fixed portrait spill outside the frame and no-JS nested-image crop. Final static portrait inspected with scripts actually blocked by iframe sandbox.
- Missing sprite paths deliberately injected in a QA-only page: About falls back to visible portrait/biography with reveal button hidden; Comedy dialog opens immediately without smoke. No disabled gate blocks content. This does not simulate all slow-network races.
- JavaScript-off native Show disclosure opens; static illustration/portrait and biography remain. Inquiry's preview control is disabled with explicit no-JS explanation. Valid enhanced sample click and Enter produce nothing-sent/stored/booked feedback, unchanged URL and **zero new resource entries** after network audit start. No endpoint or persistence was introduced. Static source and the unchanged Inquiry module retain zero-send behavior.
- Gallery next/previous, keyboard activation, lightbox and Escape exercised. Hero Home/End exercised; accepted Experience beam transforms observed changing from fixed source positions in QA diagnostics. Existing Booking/Events sources unchanged. No new sound, framework or mobile changes.

## Limits / next review

No actual OS reduced-motion switch, real tab-hide, controlled slow-network throttling, every resize-mid-frame race, cross-browser run, screen-reader listening, FPS or Lighthouse certification. Reduced-motion tests explicitly simulate JS media events; CSS declarations were reviewed. Browser snapshots of intermediate frames are controlled samples, not a performance recording. Eight-frame curtain cloth has source drawing changes and stepped motion; the decorative frame is fixed, but this is not optical-flow video. Taste/real-device smoothness remains for user review.

QA generator creates temporary sample/slow/failure pages; remove all `dist/*qa*.html` before publication. Keep generator and evidence in source. Final delivery receipt records deployed commit/version, archive ID/size/checksum and documentation commit separately. Do not claim the original GitHub runtime or user's Windows download was replaced.

## Publication
Native deployment succeeded for source `415aa68711e9c151e200a336593fbe401ed9dc70` at the same private URL. Live browser encountered the owner-private sign-in wall; no authenticated post-deploy runtime check is claimed. Managed preview hub renders Revision04. Existing35-check Node VM spotlight/sheen suite also passes; this suite does not certify the new canvas timelines.
