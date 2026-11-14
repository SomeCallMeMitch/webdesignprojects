# Codex build handoff — Keith Tyran desktop Sections 02–12
Date: 2026-11-14  
Repository: `SomeCallMeMitch/webdesignprojects`  
Branch: `concept/keith-tyran-magician-experience`  
Status: **Review/demo integration requested; do not publish.** This is an unofficial speculative concept.

## Verified source of truth
1. Read `AGENTS.md` first and its required core files; obey the append-only `docs/PROGRESS.md` protocol.
2. Read `docs/DESIGN_PREFERENCES.md`, `docs/CURRENT_DESIGN_DIRECTION.md`, `docs/KEITH_DESKTOP_SECTIONS_02_09_ASSET_HANDOFF_2026-11-14.md`, `docs/KEITH_DESKTOP_SECTIONS_10_12_DESIGN_PLAN_2026-11-14.md`, and `docs/EXPERIENCE_SECTION.md`.
3. **Authoritative complete downstream build source:** [Sections 02–12 ZIP](https://drive.google.com/file/d/1CHc4MDdxbwvH5C38Cj95D3kZ6VWzgD6G/view?usp=drivesdk), exact file `keith_tyran_desktop_sections_02_12_review.zip`, **4,117,405 bytes**, verified through connected Drive metadata on 2026-11-14.
4. [Standalone combined HTML preview](https://drive.google.com/file/d/14tl3y0kId7ITLkRUtkjue9WHeYfYAOt5/view?usp=drivesdk), exact file `keith_tyran_desktop_sections_02_12_preview.html`, **3,746,426 bytes** (embedded images; use to review, not as deployable optimized source).
5. [Sections 10–12 visual overview](https://drive.google.com/file/d/1-h7qpCQqFSqK6RI0068_UH6uI1yq4GVI/view?usp=drivesdk), exact file `keith_sections_10_12_visual_overview.jpg`, **170,410 bytes**.
6. All files above belong to [project asset folder](https://drive.google.com/drive/folders/1jLMAO7aEGDxedeusAlLnbKLY5Zn2VCGc). The former Sections 02–09 source/archive and editable layers remain in this folder.

**Do not assume Drive ZIP contents are already GitHub-tracked.** Docs and existing integrated Section 02 are on the branch; ZIP image/code assets for Sections 03–12 must be integrated from Drive. If access to Drive is unavailable to Codex, ask user to download the exact ZIP and place it in the workspace; do not fabricate assets.

## Confirmed scope / sections
- **01 Hero:** existing interactive six-card theatrical hero, separate pose-change slider, physically fixture-anchored pointer lights, King of Hearts, lantern/seer effects, opt-in audio and mute. Preserve live behavior. Files include `card-reveal-demo.html`, `card-reveal-demo.css`, `card-reveal-demo.js`, `hero.js`, `assets/hero/`, and `assets/audio/`. Never replace it with the static preview hero or a screenshot.
- **02 Experience the Magic:** already integrated below hero in the GitHub files `card-reveal-demo.html`, `experience-section.css`, `experience-section.js`, `assets/section02_experience/`. Do not duplicate Section 02 from combined preview. Treat existing integration as canonical; preserve deferred loading, focus and glow behavior.
- **03:** six magic displays, each image replaceable, reusable CSS frame.
- **04:** three event playbills, individual event photos and one reusable transparent frame.
- **05:** Behind the Curtain, isolated portrait/atmosphere layers.
- **06:** CSS/HTML client-name plaques; do not imply endorsement.
- **07:** gallery, five replaceable photos, transparent frames, arrows and lightbox.
- **08:** Audience Reactions, blank decorative card and **placeholders only**; no fabricated reviews.
- **09:** How Booking Works, reusable ticket frame, three HTML steps, demo CTA.
- **10:** Before the Curtain Rises, six FAQ rows in native HTML details/summary.
- **11:** Your Invitation Awaits, real labeled HTML **demo-only** inquiry, date TBD option, validation, **no sending**.
- **12:** Final Curtain, CSS footer with actual anchor navigation and concept notice.

## Codex's integration assignment
1. Inspect current branch HEAD, working tree, latest commits and all `AGENTS.md` requirements before modifying anything. Preserve uncommitted work.
2. Download/unpack the **optimized 02–12 review ZIP**, inspect its README, manifest, `index.html`, asset paths and `section_modules/`. Compare existing Section 02 against the package and skip any duplicate HTML/CSS/JS. Keep the source/master archive out of runtime; retain independent layers for replaceability.
3. Integrate **Sections 03–12** beneath existing Sections 01–02 in `card-reveal-demo.html`, preferably via isolated module styles/scripts or namespaced selectors. Maintain all hero interactive controls. Reuse existing page design tokens where reasonable; no CSS or JS collision with hero/Section 02. Preserve existing gallery controls, lightbox, accordion and demo form behavior.
4. Connect navigation and demo CTAs to actual anchor IDs. In the live concept preview, the form must send **zero network requests**, must label itself demo-only, and never report a real booking. Do not introduce a real email destination, company endorsements, fabricated reviews or unauthorized photography.
5. Desktop **only**: test 1440×900, 1672×941 and 1920×1080. Do not implement mobile layout; mobile will be a separately designed future project. Verify portrait slider and light beams from fixtures, sound opt-in/mute, gallery arrows/dialog, FAQ keyboard control, date-TBD form validation, anchors, focus order, reduced motion, no JS exceptions, no broken links, and no accidental horizontal scroll.
6. Preserve performance: 02–09 source documentation measures **1,900,874 bytes of compressed image assets** excluding hero/audio/fonts/new sections; 10–12 add no bitmaps. Do not inline 3.75 MB embedded standalone HTML into production. Prefer optimized WebP and lazy-loading, stage/portrait priority and no repeated full-resolution transfers. Do cold-cache, throttled network check and report combined page budgets separately from source ZIP sizes.
7. Capture three desktop screenshots and a short QA report. Update `docs/PROGRESS.md` append-only, write a new integration report with file inventory, tests and open issues, and update `docs/DESIGN_PREFERENCES.md` only if user-approved durable decisions are added. Commit/push to **concept branch only**, not main; no deployment, domain changes or prospect outreach.

## Important review gates
- Sections 02–12 are visual concept work, not final design approval. User expects later layout adjustments.
- Prefer authentic Keith/performance/audience photos *only when permission and suitable resolution are confirmed*; synthetic audience imagery remains concept-only, not documentary evidence.
- Keep hero and section assets separate; maintain reusable components for future magician spec sites.
- Real publication requires Keith approval, photo/testimonial/logo rights, correct contact endpoint (current public site has conflicting email addresses), privacy/data-handling decisions, and user authorization to deploy.

## Prompt to give Codex
“Read `AGENTS.md` and execute `docs/KEITH_DESKTOP_SECTIONS_02_12_CODEX_BUILD_HANDOFF_2026-11-14.md` on `concept/keith-tyran-magician-experience`. Integrate the optimized Sections 03–12 Drive package under existing working hero 01 and already-integrated Section 02. Preserve all hero features; test the specified desktop widths, record QA and commit to concept branch only. Do not deploy or send inquiries.”
