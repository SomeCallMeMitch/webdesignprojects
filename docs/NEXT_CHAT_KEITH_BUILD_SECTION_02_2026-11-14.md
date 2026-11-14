# Build Section 02 — Experience the Magic

I’m building an unofficial desktop website concept for Keith Tyran, The Gentleman Magician. Build **only the first section below the existing hero**, “Experience the Magic.” This is a working local implementation. The site will become a template for other magician spec sites, so make this section easy to move, restyle and populate with another performer's content.

## Start with the current hero and repository

- Repo: `SomeCallMeMitch/webdesignprojects`. Base branch: `concept/keith-tyran-magician-experience`. I’m attaching `keith-desktop-hero-snapshot.zip` and a screenshot of the current hero. The ZIP is the runnable baseline. Extract it to a temporary directory and compare its files with your checkout before integrating. If this is the same local checkout, the latest hero may already be present at `C:\Users\field\OneDrive\Documents\ChatGPT\Spec Websites\keith-tyran`.
- The hero entry is `card-reveal-demo.html`, supported by `styles.css`, `hero.js`, `card-reveal-demo.css` and `card-reveal-demo.js`. Open it first and check that the closest card is the King of Hearts, the left lantern flickers on a rightward crossing, the crystal ball reveals the seer and opt-in audio starts around 64% with the hat reveal. The older `index.html` is the three-card fallback. The attached ZIP covers the newer local hero edits, which were not in the verified remote branch at the time of this handoff.
- Read `AGENTS.md`, then the latest `docs/PROGRESS.md` and `docs/DESIGN_PREFERENCES.md` plus the project context they require. The local hero checkpoint starts at `f303c75`. The newer remote design notes were verified at `5b6cd815612f43f999ffc0c2544f888df3109cca`. If absent locally, read the [remote docs at that commit](https://github.com/SomeCallMeMitch/webdesignprojects/tree/5b6cd815612f43f999ffc0c2544f888df3109cca/docs). Start with `KEITH_BELOW_FOLD_SECTION_DESIGN_PLAN_2026-11-14.md`, `KEITH_BELOW_FOLD_SECTION_02_03_ASSET_HANDOFF_2026-11-14.md`, and `KEITH_DESKTOP_SECTIONS_02_09_ASSET_HANDOFF_2026-11-14.md`. Check current branch and working-tree status before writing. Preserve any concurrent work and keep changes off `main`.

## Use the supplied mockup and five layers

- [Project Drive folder](https://drive.google.com/drive/folders/1jLMAO7aEGDxedeusAlLnbKLY5Zn2VCGc)
- [Sections 02–09 visual preview](https://drive.google.com/file/d/1RVqCxiufJboHmwPZIzcJisSjUJCT9XDK/view) for the layout and design language. It starts with Section 02 because the live hero is a separate build.
- [Section 02 assets](https://drive.google.com/drive/folders/15N0CI5unAwg0gkKAwi-vvVVoOc0Q4sD-) and [web-ready ZIP](https://drive.google.com/file/d/19CHxteWzNJDsUVz7qwgWFaLqJoxLaN-Q/view). Use `assets/section02_experience/` from the lighter ZIP or download the five WebPs directly.

```text
experience_stage_background.webp
experience_performance_photo.webp
experience_main_frame.webp
experience_audience_photo.webp
experience_secondary_frame.webp
```

Keep the reference preview, source PNGs and other sections' artwork outside the served page. Use the original layer composition as the visual guide. On the left, recreate the eyebrow, “Experience the Magic” heading, short copy and performance CTA in live HTML. On the right, use the large framed performance illustration and the smaller overlapping audience illustration. Fit the photos behind the transparent frame openings with CSS. Preserve the purple, charcoal and gold theater palette and the stage imagery. Let the bottom of the hero flow into the new section through a short shadow or stage-edge transition without restaging the hero.

The supplied people and audience art are concept illustrations. Label them accordingly. Use the mockup copy as a starting point and keep the performance CTA demo-only unless I supply an approved video. A demo action can explain that a performance clip will be added later. If a playable video is provided, load it on demand. This pass is desktop-only. Sections 03 onward remain references for later work.

## Build a reusable module

- Keep the existing plain HTML/CSS/JS stack and the ability to open the integrated preview locally. Place a semantic section directly after the live hero, using an H2 and a unique anchor such as `#experience-the-magic`. The hero already owns `#experience`. Point **Scroll to explore** at the new section and preserve the existing demo availability target. Avoid adding a second page header or navigation bar from the standalone preview.
- Scope new styles and optional motion JS to this module. Use a small set of CSS custom properties for palette, spacing, frame proportions and glow. Keep the background, both photo interiors, decorative frames, copy and CTA independently replaceable. Keep Keith-specific copy, imagery and labels in the page or its content inputs so another magician can use the same layout and effect. A static HTML section with clearly scoped CSS and a small optional initializer is enough.
- Try one restrained mouse-following light for Section 02, such as a soft wash across the framed images. Start from the simple pointer spotlight in the design notes and preview. Keep the movement bounded to the section, batch pointer updates to one animation frame and let the light settle on pointer exit. Suspend updates when the section is offscreen. Preserve a readable static composition with keyboard, touch, reduced motion or disabled script. The stage WebP contains a painted light cone. Leave that cone fixed and use a separate glow for any movement. Keep the hero’s own lights and slider behavior intact.

## Protect the first view and verify the result

- The five supplied WebPs total **683,354 bytes** before markup and CSS. Use them at appropriate rendered sizes and reserve layout space. Give the hero stage and portraits first priority. Defer the new images, including the section’s backdrop, until the visitor approaches the section. Check this in the Network panel since the section starts just below the hero and native lazy loading may still fetch it early. Avoid duplicate requests, embedded Base64, or a new font family or animation library for this section. Keep deeper compression for a later pass if the first build is visually sound.
- Run the whole local page at 1440 × 900, 1672 × 941 and 1920 × 1080. Check the landing view, the transition below the theater seats, section framing and media crops. Verify the scroll link, CTA and keyboard focus. Exercise the hero slider in both directions with sound enabled and muted. Check pointer lighting with reduced motion and while scrolling away, and inspect the console for errors. Run at least one throttled cold load and report initial hero transfers separately from Section 02 bytes fetched after scrolling. The prior hero-only Edge test at 5 Mbps measured about 1.5 s for the stage and portraits and 2.3 s for all hero layers. Treat that as a local comparison, not a hosted speed guarantee.
- Deliver a local preview with the live hero followed by Section 02, desktop screenshots, changed paths, quick reuse instructions, and verification results. Append a dated `docs/PROGRESS.md` entry and record durable decisions in `docs/DESIGN_PREFERENCES.md`. Keep this an unofficial local concept with demo-only actions. Any deployment or outreach is a separate task.
