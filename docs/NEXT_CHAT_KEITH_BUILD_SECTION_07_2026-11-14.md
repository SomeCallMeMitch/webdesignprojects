# Next chat prompt — Integrate Keith Tyran Section 07

Continue my unofficial, desktop-only **Keith Tyran / The Gentleman Magician** website concept. **Build Section 07, “Moments of Wonder,” immediately below Section 06, “Trusted by Audiences,” in the existing interactive preview.** Read the handoff for Sections 08–12 so you know what follows. Stop after Section 07 is built and verified for review.

## Start from the current checkout

- Repo: `SomeCallMeMitch/webdesignprojects`
- Branch: `concept/keith-tyran-magician-experience`
- Existing checkout: `C:\Users\field\OneDrive\Documents\ChatGPT\Spec Websites\keith-tyran`. Open the new Codex chat in this same workspace.
- At handoff, local HEAD and the pushed checkpoint match at `935cc1fe9094819578532b3b0d1b74aef707f5e0`. That checkpoint contains Sections 01–02. **Sections 03–06 are already built and verified in the local working tree, with modified and untracked files.** Inspect status and preserve those files and any newer user edits. A fresh clone at the pushed checkpoint will lack Sections 03–06. Use the existing checkout before relying on a fresh clone.
- The live entry point is `card-reveal-demo.html`. `index.html` is the older three-card fallback. Use the live entry point and preserve the existing hero, slider, King of Hearts, lantern, seer, opt-in audio and demo availability behavior.
- Run `python -m http.server 8722 --bind 127.0.0.1` from the checkout if the server is down. Current preview: http://127.0.0.1:8722/card-reveal-demo.html. Latest section: http://127.0.0.1:8722/card-reveal-demo.html#clients.

| Section | Integrated status |
| --- | --- |
| 01 Interactive hero | Pushed. Six-card reveal, fixture-anchored lighting, character slider and opt-in audio |
| 02 Experience the Magic | Pushed. Layered frames and artwork, subtle pointer glow and demo video CTA |
| 03 The Show | Local. Six illustrated categories. Header Shows link goes to `#show` |
| 04 Choose Your Event | Local. Three illustrated playbills with links to the demo availability target |
| 05 Behind the Curtain | Local. Concept portrait and short bio. Header About Keith links to `#about` |
| 06 Trusted by Audiences | Local. Eight HTML/CSS plaques, attributed performance references and `#clients` |

Sections 02–06 were checked in Edge at **1440 × 900, 1672 × 941, and 1920 × 1080**. See the dated progress entries for test details. Sections 03–05 use `deferred-section-art.js` for scoped artwork loading. Section 06 adds no image or script. The previous 02–12 standalone preview is a separate reference build.

## Read the current repo notes

Read `AGENTS.md` first, then `docs/PROGRESS.md` and `docs/DESIGN_PREFERENCES.md`, plus the startup files named in AGENTS. Use the newest dated entries for integration status. The older continuation notes describe the separate mockup and asset-preparation work.

- `docs/KEITH_BELOW_FOLD_SECTION_DESIGN_PLAN_2026-11-14.md`
- `docs/KEITH_DESKTOP_SECTIONS_02_09_ASSET_HANDOFF_2026-11-14.md`
- `docs/KEITH_DESKTOP_SECTIONS_10_12_DESIGN_PLAN_2026-11-14.md`
- `docs/KEITH_DESKTOP_SECTIONS_10_12_BUILD_HANDOFF_2026-11-14.md`

## Find the rest of the artwork and previews

- [Project Google Drive folder](https://drive.google.com/drive/folders/1jLMAO7aEGDxedeusAlLnbKLY5Zn2VCGc)
- [Sections 02–12 website-ready ZIP](https://drive.google.com/file/d/1CHc4MDdxbwvH5C38Cj95D3kZ6VWzgD6G/view). Start here. It contains the optimized, separate 07–09 WebPs, preview HTML, asset manifest and separate 10–12 modules under `section_modules/`.
- [Sections 02–12 standalone visual preview](https://drive.google.com/file/d/14tl3y0kId7ITLkRUtkjue9WHeYfYAOt5/view). Download and open locally for interactive review.
- [Sections 02–09 website-ready ZIP](https://drive.google.com/file/d/19CHxteWzNJDsUVz7qwgWFaLqJoxLaN-Q/view) · [Sections 02–09 full source asset ZIP](https://drive.google.com/file/d/1h2CJq8nZJW2uOz3ABD5jlBAzh4IqDezx/view)
- [Sections 10–12 visual overview](https://drive.google.com/file/d/1-h7qpCQqFSqK6RI0068_UH6uI1yq4GVI/view)

The local Dropbox kit at `C:\Users\field\Dropbox\Robin\Lynx E-Com\Spec Websites\Magicians\keith_website_sections_02_06` contains Sections 02–05 assets. Use Drive for 07–12. Extract the reference kit separately and use its manifest and HTML to identify the exact gallery art paths, crops and layers before copying the WebPs into the repo.

## Build 07, then report for review

Use the supplied five gallery illustrations, purple scene, independent portrait frames and shared landscape frame. Follow the gallery reference in the kit and keep each image, frame and caption replaceable. Use manual arrows, a restrained picture-light effect and a click-to-enlarge lightbox. Wire the **Gallery** header link to the new section. Verify keyboard navigation, dialog focus and Escape, reduced motion, readable static content with JavaScript off, image crops and the transition from Section 06. Defer gallery assets until near the section and verify that the gallery does not compete with the hero during the initial load. Capture the result at the three desktop sizes and check the prior sections still work.

After the gallery, the sequence is **08 Audience Reactions & Testimonials** (reusable review art and clearly identified placeholders), **09 How Booking Works** (three ticket steps and demo CTA), **10 Before the Curtain Rises** (FAQ), **11 Your Invitation Awaits** (demo inquiry), and **12 The Final Curtain** (footer). The 10–12 modules are ready as separate reference implementations.

Use plain HTML, scoped CSS and small JS modules. Keep artwork labeled as concept material and use authentic photos or testimonials only with the appropriate rights and verification. Keep inquiry actions local and demo-only. Work on the concept branch and leave deployment, outreach and mobile work out of scope. Append the new entry to `docs/PROGRESS.md`, update `docs/DESIGN_PREFERENCES.md` and report the preview, screenshots, verification and Git state.
