# Revision07 — Royal Circle chair carousel

Date:2026-11-16. Separate Sites source repository main; original GitHub concept branch receives documentation. Owner-private audience retained.

User selected the Royal Circle chairs and requested one horizontally moving row, with optional hover logos. Forked Clients v1→v2; all other R06 module selections retained in `compositions/keith-chair-carousel-review.json`. Original chair asset generated from selected visual direction; preserved PNG and640px alpha WebP in royal-circle-v1 pack with SHA256 manifest. Names are real HTML; no raster typography. Scoped curtain swags, warm nameplates and theater rail.

Motion:26px/sec continuous procession. Pause on pointer/focus; explicit Pause/Play and previous/next controls. rAF cancelled offscreen, when hidden, paused or motion reduced. Reduced motion uses immediate manual browsing. Eight accessible original names, inert aria-hidden duplicates for seamless loop. No-JS horizontal scroll and tab-accessible chairs. Image error keeps names on a brass panel when a requested lazy image fails.

No approved logo assets found in project assets. Hover brightens the chair/nameplate; corporate logos were not downloaded, generated or republished. User's optional logo idea remains pending suitable approved source assets. No testimonials added or claimed; source qualifier and unofficial disclaimer retained.

Actual validation:
-117 protected hashes pass.254 earlier tracked module/baseline/shared/root-asset/recipe files byte-compared with source HEAD; zero changes. Frozen dist/original.html unchanged. Hero and accepted R06 modules untouched.
-Compiler build/portable export and JS syntax pass.35 existing behavior checks pass (old Show/Events tests, not carousel coverage).
-Managed Chromium exact1440×900,1672×941,1920×1080 iframe checks: no document horizontal overflow; all8 nameplates have no clipped text. Screenshot records in docs/qa/revision07. Wide frames scaled only for capture.
-Observed movement and26px/sec configured rate; manual next advanced one chair. Eight next clicks returned exact offset50.6→50.6 after correcting fractional measurement drift. Previous and forward share same wrap normalization.
-Keyboard traversed all8 original chairs; final Habbis plaque onscreen, viewport scrollLeft0 with JS. Duplicates tabindex-1/aria-hidden/inert attributes set; accessibility snapshot contains8 names once.
-Actual pointer entered chair and paused (runningfalse); focus and explicit pause stopped motion. Offscreen Show navigation left carousel runningfalse; re-entry resumes.
-Simulated reduced-motion JS event immediately stopped and disabled autoplay control; manual next still advanced. This is a source QA matchMedia shim, not an OS preference test.
-No-JS sandbox:8 names, controls hidden, no enhancements; Tab through all8 auto-scrolls to Habbis.
-Forced missing chair URLs: requested images hidden, brass label fallbacks applied; lazy offscreen images settle only when requested.
-Uninstrumented latest page visually inspected and final screenshot saved. No error events in QA diagnostics.

Limits: No formal screen reader, cross-browser, GPU/performance or slow network study. Native tab visibility path reviewed in source, not an actual OS/tab-hide session. CSS reduced-motion media query not independently changed at OS level. Authenticated deployed page not inspected; managed preview visual QA plus native deployment status used. Existing unrelated functionality preserved by source identity rather than repeating all R06 interaction tests.

Files:06-clients/v2;royal-circle-v1 pack;new recipe;build-hosted-review selector;review/compare;generated latest/preview/export;tools/create-chair-qa.cjs;docs. Temporary QA runtime pages excluded from deploy.
