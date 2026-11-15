# Continue the Keith Tyran desktop concept

Copy the prompt below into a new Codex chat opened in this repository. All files required to run the integrated preview and continue the build are on the concept branch.

---

Continue my unofficial **Keith Tyran / The Gentleman Magician** desktop website concept. Build **Section 11, Your Invitation Awaits**, immediately below **Section 10, Before the Curtain Rises**. Finish and verify Section 11 for review. Section 12 is next after that.

## Start here

- Repository [SomeCallMeMitch/webdesignprojects](https://github.com/SomeCallMeMitch/webdesignprojects), branch [concept/keith-tyran-magician-experience](https://github.com/SomeCallMeMitch/webdesignprojects/tree/concept/keith-tyran-magician-experience).
- Use the existing checkout on my Windows computer at `C:\Users\field\OneDrive\Documents\ChatGPT\Spec Websites\keith-tyran` if available. Otherwise clone the concept branch. Check `git status --short --branch` and preserve any newer edits. Sections 01–10 are in the branch history. Older handoffs about uncommitted Sections 03–10 are historical.
- Read [AGENTS.md](../AGENTS.md) and its startup files first. Then read the latest dated entries in [PROGRESS.md](PROGRESS.md) and [DESIGN_PREFERENCES.md](DESIGN_PREFERENCES.md), and the [Sections 10–12 design plan](KEITH_DESKTOP_SECTIONS_10_12_DESIGN_PLAN_2026-11-14.md) and [build handoff](KEITH_DESKTOP_SECTIONS_10_12_BUILD_HANDOFF_2026-11-14.md).
- The live entry point is [card-reveal-demo.html](../card-reveal-demo.html). Serve the repository root with `python -m http.server 8722 --bind 127.0.0.1`. Open [the desktop preview](http://127.0.0.1:8722/card-reveal-demo.html) or [the FAQ](http://127.0.0.1:8722/card-reveal-demo.html#faq). `index.html` is the older three-card fallback.

## What’s already built

| Section | Integrated preview |
| --- | --- |
| 01 Interactive hero | Six-card reveal, two-persona slider, fixture-anchored lighting, King of Hearts, lantern, seer and opt-in audio |
| 02 Experience the Magic | Layered stage, image frames and demo video disclosure at `#experience-the-magic` |
| 03 The Show | Six illustrated show categories at `#show` |
| 04 Choose Your Event | Three illustrated playbills at `#events` and links to demo availability |
| 05 Behind the Curtain | Concept portrait and short bio at `#about` |
| 06 Trusted by Audiences | Eight HTML/CSS plaques and a source link at `#clients` |
| 07 Moments of Wonder | Five framed concept illustrations, manual rotation, keyboard controls and lightbox at `#gallery` |
| 08 Audience Reactions | Three labeled review placeholders on one shared letter plate at `#reactions` |
| 09 How Booking Works | Three linked ticket steps and a demo CTA at `#booking` |
| 10 Before the Curtain Rises | Six native FAQ disclosures and a demo inquiry link at `#faq` |

The integrated site uses plain HTML, scoped CSS, small scripts and local assets. Sections 03–05 and 07–09 use `deferred-section-art.js`. Sections 06 and 10 are HTML/CSS. The desktop checkpoints cover 1440 × 900, 1672 × 941 and 1920 × 1080. See the progress log for detailed QA.

## Build Section 11 next

The ZIP’s editable reference modules are copied into [reference/sections-10-12/](reference/sections-10-12/). Use the Section 11 markup in [sections_10_12.html](reference/sections-10-12/sections_10_12.html), the invitation styles in [sections_10_12.css](reference/sections-10-12/sections_10_12.css), and the demo behavior in [sections_10_12_demo.js](reference/sections-10-12/sections_10_12_demo.js). The combined reference contains global rules for a separate offline preview. Adapt the Section 11 pieces into scoped files for the live page. The integrated FAQ is already in place.

1. Use the purple-and-ivory invitation treatment from the reference. Keep labels, fields, helper text and feedback in HTML. The reference needs no new photography.
2. Include name, email, event type, event date or a “date still undecided” option, and city or venue. Keep guest count and event notes optional. When the date is undecided, disable the date input and remove its required constraint.
3. Integrate the inquiry in place of the current end-of-page preview placeholder. Keep `#availability` working for the hero, event playbills, booking section and FAQ, and connect the header Contact link to the invitation. Check all entry points.
4. Keep the form visibly demo-only. Validate locally and give an inline confirmation that nothing was sent or booked. Ensure submission cannot navigate, send data or persist entries, including with JavaScript disabled.
5. Verify the layout and transition at all three desktop sizes. Use mouse and keyboard to test focus, required and email validation, toggling the undecided date, local feedback and the inquiry links. Confirm zero submission traffic and verify the existing hero and gallery controls. Capture review screenshots and update the project notes with the branch, paths, tests and remaining work.

**Later:** Section 12, **The Final Curtain**, is a quiet concept footer with navigation and an unofficial-concept label. Its reference markup and styles are in the same folder. The full [website-ready ZIP](https://drive.google.com/file/d/1CHc4MDdxbwvH5C38Cj95D3kZ6VWzgD6G/view), [standalone visual preview](https://drive.google.com/file/d/14tl3y0kId7ITLkRUtkjue9WHeYfYAOt5/view) and [Sections 10–12 visual overview](https://drive.google.com/file/d/1-h7qpCQqFSqK6RI0068_UH6uI1yq4GVI/view) are optional references if your account can open them.

This is an unofficial concept for desktop review. Keep mobile, website deployment, outreach and real booking out of scope. Keep artwork and review placeholders identified as concept material. Use the concept branch for the build.

---

### Clone on another computer

```powershell
git clone --branch concept/keith-tyran-magician-experience https://github.com/SomeCallMeMitch/webdesignprojects.git keith-tyran
cd keith-tyran
```

Open the cloned `keith-tyran` folder in Codex and use the prompt above.
