# Keith Tyran — Section 02/03 web asset handoff
Date: 2026-11-14. Unofficial desktop-only concept, not an authorized public Keith Tyran website.

## Context
The selected theatrical purple hero remains independently managed. The user requested individually buildable image layers, transparent frames, separate photographs, a lightweight cursor-following light only if performant, and careful loading budgets. This work addressed **02 Experience the Magic** and **03 The Show** from `docs/KEITH_BELOW_FOLD_SECTION_DESIGN_PLAN_2026-11-14.md`.

## Section 02 — Experience the Magic
Five optimized WebP images were prepared:
- `experience_stage_background.webp` — 1672x941, 90 KiB (includes a stationary painted-in light cone).
- `experience_performance_photo.webp` — 1448x1086, 111 KiB.
- `experience_audience_photo.webp` — 1536x1024, 117 KiB.
- `experience_main_frame.webp` — 1536x1024, 186 KiB, verified alpha/transparency; accompanying source PNG.
- `experience_secondary_frame.webp` — 1448x1086, 163 KiB, verified alpha/transparency; accompanying source PNG.

Photo and decorative frame are **independent layers**. Overlay frames as static elements; crop/mask underlying photo via CSS. The frame transparency was verified at central pixels; exact placement must still be tested at final desktop artboard widths.

## Section 03 — The Show
Six independent roughly 505x505 WebP tiles, combined **~187 KiB**, were generated and extracted from a common themed illustration contact sheet:
1. `show_01_illusions.webp` — purple-lit illusion cabinet — 35 KiB.
2. `show_02_cards_and_coins.webp` — cards and coin — 34 KiB.
3. `show_03_mentalism.webp` — profile and concentric magic light — 22 KiB.
4. `show_04_comedy.webp` — magician engaging audience — 32 KiB.
5. `show_05_storytelling.webp` — enchanted book — 31 KiB.
6. `show_06_mind_reading.webp` — crystal-ball motif — 33 KiB.

Recommended page structure: 3x2 desktop CSS grid; live HTML text; one reusable CSS border/frame treatment; image and effects independent; keyboard-friendly card interactions. A lightweight self-contained demonstration HTML was prepared for user review, but **not merged into the website**.

## Weight and animation recommendations
- Optimized WebPs from sections 02 and 03 together are approximately **0.835 MiB / 855 KB**. This does NOT include hero, CSS, JS, fonts, audio or future sections.
- Section 03 alone: **~187 KB**.
- Avoid video, raster animation frames or six separate ornate background images for these cards. Use CSS gradients, opacity, transform and one batched pointer-driven radial glow, with prefers-reduced-motion and static fallbacks.
- Do not rotate baked-in beams in Section 02's stage illustration: retain a subtle animated *additional* glow only, or prepare a beam-free base if physically moving beams are needed.
- Hero light origin must remain physically attached to visible overhead fixtures per existing accepted hero spec.
- Defer below-the-fold images until close to viewport; preserve priority for hero and actual inquiry CTA. Performance must be verified with a deployed test and throttled Lighthouse/DevTools; compressed size alone does not prove a fast page.
- The ~505px square art is adequate at modest desktop card widths, but may be soft at large dimensions on high-density monitors. Request higher resolution only if the final layout needs it.

## Rights and source accuracy
The art in these packages is **AI-generated illustrative material** based on user-provided visual references, not verified photographic documentation. The comedy scene includes a Keith-like fictional portrayal and must **not be represented as an authentic image of Keith**. The invented audience and performance photographs also must not be presented as real client evidence. Before public use, replace with rights-cleared Keith photography and properly approved audience images. This project is unofficial and unendorsed; do not publish or contact anyone.

## Delivery status and file locations
Files were created in the ChatGPT conversation runtime and exported as:
- `keith_section02_experience_assets.zip`
- `keith_section03_show_assets.zip`
- `keith_sections02_03_website_asset_pack.zip`
- A bundle README, manifest and `section03-preview.html`.

**The image binaries/ZIPs have NOT been uploaded to GitHub**. Download them from the conversation and then add extracted optimized WebPs/approved originals to a suitable repository folder using the normal development workflow. GitHub only stores this documentary handoff. No public deployment or contact.

## Next
After Section 03 visual acceptance, prepare **Section 04 Choose Your Event**: three tall playbill motifs for Birthday Parties, Corporate Events, Private Events, with distinct imagery, a common lightweight frame style and live HTML labels/CTAs. Do not touch mobile or the hero's separate feature work.
