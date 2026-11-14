# Authoritative Codex build handoff — Keith desktop Sections 01–12

Verified preparation completed **2026-11-14**. Repository `SomeCallMeMitch/webdesignprojects`; branch **`concept/keith-tyran-magician-experience`** only. This replaces the earlier metadata-only handoff in this same file. Earlier design/asset handoffs remain reference material; this is the single integration authority.

**Ready for Codex implementation of Sections 03–12; not an integrated or visually signed-off twelve-section website.** No application files were changed in preparation. Desktop only, unofficial unpublished concept, later visual refinements expected.

## Final verified package

Use **`keith_desktop_codex_verified_2026-11-14.zip`**, not the older review ZIP.

- [Exact Drive download](https://drive.google.com/file/d/1Tsgd_fR2kERPd_AHNWW1xDFhMiOTFtHR/view?usp=drivesdk)
- [Project folder](https://drive.google.com/drive/folders/1jLMAO7aEGDxedeusAlLnbKLY5Zn2VCGc); saved as a new file, no sources deleted or replaced.
- [ChatGPT copy](https://chatgpt.com/library?file_id=libfile_eeba325ae07c8191808bb5fd0f2a6b54&account_id=personal)
- **44,338,735 bytes; 121 files**, including verification script and SHA manifest.
- **SHA-256:** `7741218ab88b6a6d5abb739987fefa42428f36df8608b5d199f6dc79881eb3d1`
- Drive metadata confirmed exact name, size and parent. A fresh download of the uploaded ZIP matched this SHA-256, byte-for-byte.
- Protected application baseline: **`05a5863c739ae174f717a680e0cfc944ed5287b3`**. Current checkout wins if newer; never reset or overwrite it from the package.

If Codex cannot download Drive files: user downloads the exact linked ZIP, verifies it using `Get-FileHash -Algorithm SHA256` or `sha256sum`, extracts it **beside the checkout**, and gives Codex its absolute path. Run `python verify_package.py` in extracted root. Do not unzip over repository files. Only new runtime files need copying into GitHub during Codex integration; all code/reference inputs are now in this package.

## Restore project context

Read `AGENTS.md` first and all required records, latest `docs/PROGRESS.md`, `docs/DESIGN_PREFERENCES.md`, `docs/CURRENT_DESIGN_DIRECTION.md`, `docs/EXPERIENCE_SECTION.md`, `docs/KEITH_DESKTOP_SECTIONS_02_09_ASSET_HANDOFF_2026-11-14.md` and `docs/KEITH_DESKTOP_SECTIONS_10_12_DESIGN_PLAN_2026-11-14.md`. The user's current instructions authorize later Codex integration despite historical planning-only wording in older records. No redesign, mobile or publication is authorized.

Current six-card entry is **`card-reveal-demo.html`**. Its companion files are `styles.css`, `card-reveal-demo.css`, `hero.js`, `card-reveal-demo.js`, `experience-section.css`, `experience-section.js`, `assets/hero/`, `assets/audio/`, and `assets/section02_experience/`. The older three-card variant is `index.html`; preserve it unless a change is explicitly justified and reported.

## Package folder counts

| Location | Files | Purpose |
|---|---:|---|
| `baseline/` | 40 | 8 HTML/CSS/JS, 24 WebPs, 8 WAVs; immutable comparison copy, never overwrite checkout |
| `runtime/assets/` | 22 | New compressed art for 03/04/05/07/08/09 only |
| `source/` | 19 | Preview, 11 section fragments, shared CSS/JS/dialogs, original 10–12 module alternatives |
| `reference/` | 22 | Full-resolution source/master/preview imagery, separate from runtime |
| `audit/` | 13 | Exact inventory, hashes, comparisons, dimensions, alpha, paths, syntax, failure evidence |
| Root | 5 | README, INVENTORY, FINDINGS, verify script, SHA manifest |

## Sections 01–12 inventory

| Section | Composition | Runtime art | Packaged source | Status / caveats |
|---|---|---|---|---|
| 01 | Interactive hero | 19 WebPs preserved (14 referenced by six-card entry); 8 WAVs (4 remixed cues selected by six-card JS) | baseline/card-reveal-demo.html; styles.css; card-reveal-demo.css; hero.js; card-reveal-demo.js | Existing working layered hero is authoritative; other 5 WebPs and 4 WAVs preserve older fallback, not extra new payload. |
| 02 | Experience the Magic | 5 WebPs; 683,354 bytes | baseline/experience-section.css and .js; existing section in baseline/card-reveal-demo.html | All 5 match Drive exactly. source/sections/02-experience.html is reference only. Synthetic performance/audience imagery. |
| 03 | The Show | 6 WebPs; 192,218 bytes | source/sections/03-show.html | Illusions; cards/coins; mentalism; comedy; storytelling; mind reading. CSS frame; synthetic scenes. |
| 04 | Choose Your Event | 4 WebPs; 134,808 bytes | source/sections/04-events.html | 3 synthetic event pictures plus one alpha playbill frame. PNG alternate is reference only. |
| 05 | Behind the Curtain | 2 WebPs; 62,536 bytes | source/sections/05-about.html | Synthetic portrait + atmosphere. Portrait is RGB rectangular art, NOT a transparent cutout. |
| 06 | Trusted by Audiences | 0 bitmaps; 0 bytes | source/sections/06-clients.html | HTML/CSS plaques; organization claims unverified; no logos copied. |
| 07 | Moments of Wonder | 8 WebPs; 655,916 bytes; plus shared existing 02 frame | source/sections/07-gallery.html | 5 synthetic photos, stage backdrop, 2 alpha frames; shared landscape frame not duplicated. Gallery arrows/dialog script in source/shared/preview-1.js. |
| 08 | Audience Reactions | 1 WebP; 81,776 bytes | source/sections/08-reactions.html | Reusable blank decorative letter; HTML review placeholders only. |
| 09 | How Booking Works | 1 WebP; 90,266 bytes; shared 07 stage backdrop | source/sections/09-booking.html | Reusable ticket frame; 3 live HTML steps. No independent stage bitmap duplicate. |
| 10 | FAQ | 0 bitmaps; 0 bytes | source/sections/10-faq.html | 6 native details/summary questions; HTML/CSS. |
| 11 | Your Invitation Awaits | 0 bitmaps; 0 bytes | source/sections/11-contact.html | HTML/CSS invitation; local demonstration form; date TBD. Script source/shared/preview-2.js. |
| 12 | Final Curtain | 0 bitmaps; 0 bytes | source/sections/12-final-curtain.html | HTML/CSS footer; actual anchor links and unofficial-concept disclosure. |

## Exact asset filenames
`audit/runtime-images.csv` lists every runtime image, full relative path, bytes, dimensions, color mode, alpha extrema and SHA-256. `audit/protected-baseline.json` lists all 40 protected baseline files, including 8 WAVs and 8 HTML/CSS/JS files. `MANIFEST.sha256` covers every packaged file except itself.

Sections 02–09: 27 compressed WebPs, 1,900,874 bytes. Of those, 5 already exist on the branch; integrate only the new 22 (1,217,520 bytes). All 19 preserved hero WebPs plus these 27 total 46 images / 4,135,558 bytes. The six-card entry references only 14 hero files / 1,140,816 bytes; projected unique active page image dependency total is 3,041,690 bytes, including all downstream WebPs. This is a file-size sum, not a measured network payload or initial-load claim. The 8 WAVs total 3,901,792 bytes; audio is optional and not added to image totals. Legacy unused files remain only in the preservation snapshot.

No essential bitmap dependency is missing for the existing approved concept. Optional true-alpha Section 05 portrait, beam-free downstream backdrops, authentic photos, verified reviews, actual performance video and layered editable originals are absent; they are future content/art needs, not current runtime dependencies. A real form endpoint is intentionally absent.


## Start here
1. Read the CURRENT branch `AGENTS.md`, required project records, and `docs/KEITH_DESKTOP_SECTIONS_02_12_CODEX_BUILD_HANDOFF_2026-11-14.md`. That repository document is the single integration authority.
2. Verify this package using `python verify_package.py`. Read `INVENTORY.md`, `FINDINGS.md`, and `audit/summary.json`.
3. `baseline/` is a byte-identical preservation snapshot of existing application code, hero, audio and Section 02. **Do not copy it over the current checkout.** If the branch has advanced, current repository files win; reconcile drift. `baseline/card-reveal-demo.html` is the six-card hero plus already-integrated Section 02. `baseline/index.html` preserves the older three-card version for comparison.
4. `runtime/assets/` has only the 22 new compressed images for Sections 03–09. Copy these section directories into the repository's `assets/`. There is deliberately no second Section 02 runtime directory here. Gallery landscape frames reuse the repository's `assets/section02_experience/experience_main_frame.webp`.
5. `source/preview.html` is the pre-existing Sections 02–12 design source with only asset paths rewritten for this package. Open it locally or serve the package root. Its Section 02 and navigation are comparison material, **not** replacements for existing page content. No hero is included in this preview.
6. `source/sections/03-…html` through `12-…html` are extracted, independently editable fragments. `source/shared/` has the original CSS, scripts and dialogs extracted for reference. `source/upstream-modules/` retains the supplied 10–12 modules unchanged. These alternatives overlap: choose one copy of each section, dialog and script. Do not concatenate all alternatives.
7. Fragment paths are relative to their packaged files. When merged at repository root, remap `../../runtime/assets/` and `../../baseline/assets/` to `assets/`; preview's `../runtime/assets/` and `../baseline/assets/` have the same destination. CSS `url()` paths must be relative to the final stylesheet location. Do not carry `baseline/` or `runtime/` into deployed URLs.
8. `reference/` is full-resolution, alternate PNG frames, contact sheet, selected master and original/mockup art. **Never serve it as page runtime.** The supplied masters are flattened PNGs and separate exported layers, not layered PSD/AI files or fully separated relightable scenes.
9. `audit/` records exact SHA-256, dimensions, alpha, bytes, source archive checks, Drive comparisons and relative path checks. ZIP checksum is recorded outside the archive in the authoritative repository handoff and accompanying `.sha256` file, avoiding a self-referential checksum.

## Required integration boundaries
Preserve slider/portraits, three fixture-anchored pointer lights, all six card effects, King of Hearts, lantern/seer, delayed image loading, opt-in audio and immediate mute. Retain existing Section 02 deferred loader and focus/glow behavior. Remove only the trailing placeholder preview/availability block when replacing it with Sections 03–12; update nav and CTA anchor destinations deliberately.

Do not load preview CSS globally: it contains `:root`, `*`, `html`, `body`, `button,a`, `.eyebrow`, `.description` and `#experience` selectors that collide with the existing hero. Remove the preview Section 02 `#experience` rules entirely. Scope downstream tokens and styles to a reusable wrapper, or namespace downstream components. Footer can remain a footer outside main. Keep gallery dialogs present exactly once and scope script initialization to their wrapper. Keep generic modal initialization from crashing if an optional demo trigger/dialog is omitted.

The native demo form uses `method="dialog"` and JS `preventDefault()`. Retain its conspicuous demo/no-send label, date-TBD validation, and no persistence/network destinations. Verify that click and Enter, including JS-disabled behavior, never transmit form values. Use synthetic test values only.

## Verification status
- Completed: downloaded all 103 Drive files across all 18 descendant folders (folder listings were each below 100 children); CRC-tested all three supplied ZIPs; compared SHA-256 and decoded image content; decoded all packaged runtime images; checked 125 local HTML/CSS dependency references and found zero broken paths; checked top-level preview/baseline anchors and duplicate IDs. JS syntax checks recorded in FINDINGS.
- Visual content reviewed using contact sheets, including all 27 section WebPs and all 16 original section reference images. Frames have genuine alpha openings. No new art or redesign performed.
- NOT completed: three-size browser rendering and interaction verification. Local Chromium launch failed before a page loaded (`socket() failed: Operation not permitted`); this is not a passed test. Browser extension cannot access files in this remote workspace through the user's localhost. `audit/browser-launch-failure.txt` records the failure. No screenshot, performance score, audio audition or runtime network result is claimed.
- Required before integration signoff: actual browser checks at **1440×900, 1672×941 and 1920×1080**, followed by screenshots, keyboard/reduced-motion checks, form zero-transmission check and cold-cache throttled measurement. Desktop only; no mobile implementation or testing.

## Rights / content
Section photographs and portraits are synthetic concept placeholders, not authenticated Keith/audience photography. Real photos are preferred only after rights and resolution are confirmed. Section 08 contains HTML placeholders, not real reviews. Section 06 company-name plaques carry unverified-source caveats, not endorsements. Original mockup artwork can contain fictional testimonial-looking text: never transcribe it into genuine reviews. No contact with Keith, publication, main changes, deployment or live inquiry is authorized.


## Verification findings and integration risks

## Reconciled sources
- GitHub baseline `05a5863c739ae174f717a680e0cfc944ed5287b3` contains the working hero/audio/lantern/cards and Section 02 only; no downstream Section 03–12 runtime art is tracked there. Existing trailing `.preview#preview`/`#availability` block is a placeholder, not final content.
- All 103 files under the supplied Drive root were downloaded, including native inventory/readme text. All 18 descendant folders were enumerated; none had a 100-child truncated listing. Drive IDs and source metadata are in `audit/drive-inventory.json`; no signed download URLs are retained.
- Individual folder's 47 section images = **31 exports** (27 WebPs, 3 alternate frame PNGs, 1 contact JPG) + **16 original/reference PNGs**. Its extra root mockup is a 48th image, separate from that count. Folder title “1–12” does not mean 12 sets of raster layers; hero is on GitHub and 06/10/11/12 are HTML/CSS.
- All 47 individually supplied images match corresponding bytes inside the complete 02–09 archive. All 32 files under `assets/` in the 02–12 ZIP match those in both 02–09 archives: 31 images and one Section 03 preview HTML. All 16 individual reference images match the master archive's reference sources. Five Section 02 WebPs also match GitHub byte-for-byte.
- The three source ZIP CRC checks passed: 38 files (02–12 review), 35 files (02–09 lightweight review), 52 files (02–09 master). Full SHA-256 and byte counts are in `audit/source-archives.json`. Their nested archives/embedded-image previews are omitted from this final development package as redundant copies.
- **26 exact-byte duplicate groups** among downloaded Drive files; see hash matches and decoded duplicate groups. Same names do not always mean same bytes. The approved master named `keith_tyran_approved_desktop_homepage_reference_2026-11-13.png` has SHA-256 `d5246f115c381a75756a59b54d00a3fdb365d202830f2062ef9407a7940b0e21` and is included separately. The two 02_02_01/02_02_12 PM PNGs have SHA `fa253508…`, but decoded RGBA pixels match this approved master exactly. The older archive's `approved_hero_static_screenshot_REFERENCE_ONLY.png` is a DIFFERENT reference screenshot (3,307,623 bytes); it must not supersede the selected master or working hero.
- All original full-resolution section art is retained under `reference/`, not runtime. Alternate PNG/WebP playbill exports decode identically; only the 1,124-byte WebP belongs in runtime. The Section 02 PNG frame variants are retained for editing; browser uses the existing WebPs. Six large Drive card-face PNGs are not replacements for the working optimized card assets: unused faces are optional source alternatives and are omitted with exact IDs/hashes recorded in the audit. Other old hero visual variants remain on Drive, not the runtime bundle.

## Missing layers and source limitations
- Section 05 portrait is RGB, no alpha channel; the earlier description “isolated portrait” means separate file, not background-free portrait. Preserve its rectangular crop or obtain a proper cutout in a future authorized art task; do not invent an extraction here.
- Section 02 and 07 backgrounds contain painted illumination. No beam-free plate or separate matching downstream moving-fixture layers exist in the supplied section pack. Keep their painted lights static; any optional glow must be modest and honor reduced motion. Existing hero fixture light layers remain intact.
- Transparent openings verified in 02 frames, 04 playbill, 07 frames, 08 letter exterior and 09 ticket exterior. “Alpha” does not imply every interior is blank: letter/ticket center is intentionally opaque decoration for HTML copy.
- No PSD/AI or fully layered master documents were supplied; preserved PNG source art is flat, with independent exported frames/photos where available. No authorized real Keith/audience photography or actual reviews supplied.

## Integration issues to resolve in Codex
1. The preview's Section 02 uses `id="experience"`, already assigned to the hero. SKIP preview 02 and all its CSS/JS initialization. Existing 02 ID is `experience-the-magic`. Retain hero ID `experience`. Footer's Experience link can target existing 02 intentionally; define mapping in the integration report.
2. Never append entire preview HTML. Omit its sticky nav, skip-link duplication, Section 02, outer html/body/main tags and duplicate dialog/module variants. Existing placeholder #preview and #availability are the seam; replace them once with 03–12, and map header Shows→#show, About→#about, Gallery→#gallery, Contact and request CTAs→#contact.
3. Preview global selectors/tokens (`:root`, `body`, `*`, `button,a`, `.eyebrow`, `.description`, global focus rules) overlap hero styles. Scope CSS and component tokens to downstream wrapper, remove all obsolete preview #experience selectors, keep hero/02 scripts untouched. The supplied 10–12 CSS is NOT standalone; it depends on preview tokens/shared classes. Do not import it blindly.
4. Gallery reuses existing 02 main frame. After copying only new assets, confirm shared URL stays `assets/section02_experience/experience_main_frame.webp`. Gallery rotates photos through fixed shape slots; inspect object-fit crops across all 5 offsets. There are 5 photos, 2 new frame files and 1 existing shared frame, not 5 new frames.
5. Existing gallery pointer JS lacks reduced-motion event gating even though CSS disables some effects. Adapt the new modules with reduced-motion and hidden/offscreen guards; do not change the protected hero to solve downstream issues.
6. Demo form's no-send behavior is source-inspected only. Browser-test pointer submission, Enter, invalid email, required fields, date/TBD toggle, no JS, and zero requests containing form values; do not connect mail, analytics, storage or APIs.
7. The old manifest still labels itself 02–09 and lists PNGs/contact sheet among optimized assets. Use this package's measured inventory. Old master README refers to `preview-standalone.html` even though lightweight ZIPs omit it; final package instead provides `source/preview.html` with external assets.

## Tests actually performed
- SHA-256 on downloaded files, archive members, protected baseline, final package files; decoded-pixel comparisons on downloaded PNG/WebP/JPG images.
- ZIP CRC/unsafe path checks for 3 source archives. Final ZIP CRC and SHA manifest check recorded outside archive after assembly.
- All 46 packaged runtime image files decoded, dimensions and alpha recorded. Their bytes were preserved; no recompression or resizing was needed or performed.
- 125 packaged HTML/CSS dependency references resolved, all inside package and existing. Dynamic JS audio paths separately resolved against all 4 filenames under each of the two preserved audio directories. Baseline and source preview top-level anchors resolve with no duplicate IDs before integration.
- Visual contact-sheet inspection of all 27 section WebPs and 16 originals; not viewport screenshots.
- Browser rendering at 1440×900 / 1672×941 / 1920×1080: **NOT RUN**; browser launch failed before page load. No interaction, audio-audition, accessibility, request-monitoring, horizontal-overflow or Lighthouse pass is claimed. Those remain mandatory Codex integration acceptance checks.

## Exact integration sequence and acceptance

1. Verify branch, HEAD and worktree; preserve uncommitted/newer work. Verify package and compare protected baseline hashes without reverting anything.
2. Capture baseline hero + 02 at all three desktop sizes before modifying application source. Keep all protected image/audio files intact.
3. Copy **only** the 22 files under `runtime/assets/` into matching repository `assets/` directories. Do not copy baseline, reference, alternate PNGs or contact sheets into runtime.
4. In `card-reveal-demo.html`, replace trailing `.preview#preview` with Sections 03–11 after existing Section 02; footer 12 goes outside main. Remove the obsolete nested `#availability` placeholder. Keep dialogs once. Do not copy preview nav, outer document tags, preview 02 or its `#experience` CSS.
5. Remap fragment asset prefixes to repository `assets/`. Scope downstream CSS/tokens/JS so hero and existing 02 remain unchanged. Maintain replaceable content and reusable magician-site components; no framework migration requested.
6. Header Shows→`#show`, About→`#about`, Gallery→`#gallery`, Contact/request CTAs→`#contact`. Preserve hero wordmark→`#experience`, scroll cue→`#experience-the-magic`. Footer Experience→`#experience-the-magic`; other links target their real new section IDs. Verify unique IDs and no remaining #preview/#availability links.
7. Preserve/adapt downstream gallery arrows, one lightbox, six FAQ native disclosures, demo form date-TBD and validation. Do not duplicate shared versus upstream module scripts. Add reduced-motion/hidden/offscreen guards for NEW glows. Keep existing hero/02 interaction ownership independent.
8. Inquiry remains visibly demo-only, zero transmissions/storage/analytics/endpoints. Check click, Enter, invalid fields, TBD toggles and no-JS behavior with synthetic values; never claim availability or a booked event.
9. Actual browser checks at **1440×900, 1672×941, 1920×1080**: full-page and section screenshots, all slider positions, fixture anchors/pointer lights, 6 cards, lantern/seer, audio opt-in/mute, Section 02 disclosure/deferred loading, all gallery offsets/dialog/keyboard, FAQ, form, focus order/reduced motion, anchors, JS/resource errors and horizontal clipping/scroll. Do not hide layout errors with overflow alone. Preparation browser tests did not run; no inherited visual pass.
10. Measure cold-cache throttled loading separately from source ZIP/file sums. Retain hero priority, existing 02 loader and lazy new images. Report actual image/audio transfers separately; no Lighthouse result unless run.
11. Write integration QA with exact changed files, measured results, captures and unresolved refinements; append PROGRESS, update preferences only for new user-approved decisions. Commit/push concept branch only. No main changes, deployment, live form, publication, contact with Keith or source deletion.

## Copy-and-paste Codex implementation prompt

Continue Keith Tyran desktop website in `SomeCallMeMitch/webdesignprojects` on `concept/keith-tyran-magician-experience`. Read `AGENTS.md` and its mandatory context, then execute `docs/KEITH_DESKTOP_SECTIONS_02_12_CODEX_BUILD_HANDOFF_2026-11-14.md` as the single authoritative build handoff.

Use `keith_desktop_codex_verified_2026-11-14.zip`, **44,338,735 bytes**, SHA-256 **`7741218ab88b6a6d5abb739987fefa42428f36df8608b5d199f6dc79881eb3d1`**, from the exact Drive link in the handoff or my extracted local copy. Verify it first. Integrate only Sections **03–12** beneath the existing working hero and Section 02 in `card-reveal-demo.html`. Never overwrite newer files using baseline or duplicate Section 02. Preserve the portrait slider, moving fixture-anchored stage lights, all six cards, King of Hearts, lantern/seer, opt-in audio/mute and Section 02 loading/focus/glow behavior.

Copy only the 22 new WebPs; scope downstream styles/scripts and resolve documented ID/anchor/path collisions. Use modular reusable components, with no redesign. Keep inquiry demo-only with no transmission or persistence; synthetic imagery and review placeholders stay explicitly labeled until authentic rights-cleared material exists. Desktop only: test and capture **1440×900, 1672×941 and 1920×1080**, all hero/new interactions, keyboard/reduced motion, errors/resources, clipping and no-send behavior. Preparation did not complete browser checks. Measure throttled cold-cache loading separately. Update PROGRESS and write QA; commit/push concept branch only. Do not modify main, deploy, publish, contact Keith or enable a live form. Report commit, evidence and unresolved refinements.
