# Herc Magnus — Public-Page Interaction Findings & Keith Asset Implications

**Date:** November 13, 2026  
**Scope:** Read-only research and asset planning for the **user-selected Keith desktop homepage**, not copying another site's source, assets or proprietary graphics.  
**Status:** Partially verified technical evidence; exact light code remains unknown.  
**Selected Keith reference:** See `docs/KEITH_SELECTED_DESKTOP_HOMEPAGE_BUILD_SPEC_2026-11-13.md`.

## Source observations

1. The public desktop hero at https://hercmagnus.com/ exposes a **From Rock Stage / To Speaking Stage** selector. Its slider visibly changes the presented performer and stage context. Earlier live desktop visual inspection: https://agent.tinyfish.ai/runs/6980a73d-2052-43a2-90bc-0c3491ce60a2 .
2. A further read-only browser DOM/visual investigation on November 13, 2026: https://agent.tinyfish.ai/runs/5676a97b-5d15-4161-a75f-b888ebd22b03 identified the following page structure:
   - `div#stageSwitch.stageswitch` (role group, `aria-label="Rock stage or speaking stage"`).
   - `div#ssTrack.ss-track`, `div.ss-knob`, and left/right labels `span.ss-l` and `span.ss-r`.
   - Foreground figure container `div#heroMe.hero-me`, with at least one `img.me-rock` image.
   - Publicly referenced asset names `/v2/img/herc-rock.webp`, `/v2/img/stage.webp` and `/v2/img/stage-lit.webp` (filenames recorded for evidence only; do **not** download/reuse).
3. The separate rock/speaking image states and label-driven selection are observed; a *complete* intermediate image swap/crossfade/mask strategy is **not established**.
4. Dramatic lighting/haze is visible. The specific mouse-following spotlight mechanism is **not verified**. The automated inspection did **not** establish computed light styles, pointer/mouse listeners, CSS custom properties, JavaScript code, exact separate spotlight elements, or `requestAnimationFrame` behavior. It did not find a canvas/WebGL element **in the inspected DOM**, but that is not proof of the entire rendering architecture.
5. Page extraction did not produce dependable external script/style URLs. In general, a site's **public client-side scripts** may be inspectable in Chrome DevTools; private server code or original authored sources need not be exposed. Do not claim exact mechanics of Herc's lights or source-code equivalence.

## Practical original implementation lesson

We **can create comparable perceived behavior** for Keith without reverse-engineering Herc's implementation. The user-selected artwork has fixed stage geometry and visible overhead light fixtures. The design contract is stricter than anything technically proven at Herc:
- Separate visual **fixture heads**, **beam cones**, **beam impacts**, **ambient haze** and **magician portrait layers**.
- Rotate beam cone and fixture head coherently around the fixture's physical pivot; never translate a disconnected cone without its fixture.
- Light cones may be produced through original translucent PNG textures, CSS/SVG shapes, or another lightweight implementation chosen by Codex **after** the image layers are approved. The current **image-production chat should not choose or code this stack**.
- Direct moving light only from visibly installed upper-stage fixtures. **No floor-originating upward beams**, hidden floating sources, or mismatched shadows.
- Stage **clean plate must exclude all baked downward beams** (so there are not two sets when the lights animate). Physical fixtures may remain visible only if they do not prevent later head pivoting; ideally head overlays are isolated.
- Slider needs **two complete compatible portrait cutouts**. Static current screenshot contains a stylized halfway-left/right wardrobe split, which is **not** two suitable full-body states.
- Clear, editable text, navigation and CTA should be actual HTML when later coded, not irrevocable pixels in the clean plate.

## Repo Radar tools evaluated

Read the user's private `SomeCallMeMitch/repo-radar` on its main branch, and found:

- `reviews/morluto/rea/review.md` reviewing [morluto/rea](https://github.com/morluto/rea), aka Reverse Engineer Anything / REA. The prior Oct 21 review characterizes it as a **local CLI/MCP investigation tool**, capable of JavaScript artifact analysis and bounded browser observation; **not** an instant site-rebuild engine. No hands-on REA runtime test is recorded in that review. It recommends a targeted experiment rather than automatic adoption. Browser debugging context needs isolation.
- `reviews/ChromeDevTools/chrome-devtools-mcp/review.md`, reviewing [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp). It documents Chrome inspection/screenshots/network/console/performance in an agent workflow, with risk/permission considerations. This is a possible simpler first tool for public desktop behavior.
- `systems/reverse-engineering-studio/review.md` recommends evidence-backed behavioral analysis instead of assuming that a suite of tools reconstructs a website perfectly.

**Current decision:** The user is running the REA investigation in a **different chat**. Do **not** duplicate that work in the **next image-assets chat** or install/tools/source-clone anything there. Image-asset creation is a separate, narrow project phase. Later coding agent can ingest the verified behavior notes produced by that independent REA work.

## Caveats, decisions and next actions

- The user has **selected a particular PNG** as visual master and asked to prepare individual assets to build it. That is **not yet approval of any extracted portrait licensing, final design, or deployment**.
- Latest uploaded master is `ChatGPT Image Nov 13, 2026, 02_02_12 PM.png`, 1672×941 RGBA, 3,062,570 bytes, SHA-256 `d5246f115c381a75756a59b54d00a3fdb365d202830f2062ef9407a7940b0e21`.
- The master was verified in the chat container and is expected to be supplied again by the user in the next dedicated image-production chat. Do not equate an attachment path with a durable GitHub blob.
- Next step **only**: generate and QA original, separately usable image layers from that master per `docs/NEXT_CHAT_KEITH_HOMEPAGE_IMAGE_ASSETS_PROMPT_2026-11-13.md`; no app code, REA installation or live site work in that chat.
