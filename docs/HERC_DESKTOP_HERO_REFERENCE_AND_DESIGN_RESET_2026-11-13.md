# Herc Magnus Desktop Hero — Focused Reference Review & Keith Concept Reset
**Date of inspection:** 2026-11-13
**Status:** Read-only reference analysis and user-corrected planning constraints. **No implementation approved.**
**Repo/branch:** `SomeCallMeMitch/webdesignprojects` / `concept/keith-tyran-magician-experience`

## The user's correction — authoritative project direction
- **Desktop ONLY now.** Do not design mobile, include mobile mockups, or plan mobile effects this phase.
- When mobile is eventually considered, it must be separately art-directed/explicitly designed, **not an automatically compressed desktop composition**. This is a future phase, not a task now.
- The three Velvet Reveal versions A1 Grand Entrance, A2 Living Spotlight and A3 Close-Up Encounter did **not** meet the user's intended style; set them aside. The previously recommended 'A2 + A1 + A3' combination was not user-approved and is now specifically rejected as the current design path.
- Follow the **immersive, layered, stateful composition mechanics** of the real https://hercmagnus.com/ reference MUCH more closely (not copy its artwork, branded elements, code or precise composition). The hero has an isolated floating human cutout superimposed over a stage/environment. A horizontal slider changes which human portrait/pose is visible along with the scene.
- Keep **Keith's current website's existing brand colors** (not assistant-invented oxblood, antique brass, copper or other palettes). The prior desktop inspection described a purple header, charcoal/dark sections, white and green-backed imagery. This is an observation, **not a validated exact color palette or hexadecimal token set**. Sample actual colors from site screenshots/style later before locking design; use Keith's photos/brand only with rights.
- No code, deployment, publishing or outreach. User asks for proof of understanding and a reference breakdown now.

## New direct observation: Herc desktop hero (Nov 13, 2026)
Source: https://hercmagnus.com/
Live read-only browser inspection evidence: https://agent.tinyfish.ai/runs/6980a73d-2052-43a2-90bc-0c3491ce60a2
Prior notes: `docs/REFERENCE_SITE_ANALYSIS.md`

### Structure — the actual source of the special effect
1. **Rear scenic layer:** Wide stage photograph/scene with side Marshall amp stacks, raised drum platform, wedges, truss and volumetric-looking amber/blue light through haze. Inspecting agent reports `stage.webp` and `stage-lit.webp` assets.
2. **Lighting/atmosphere layer:** Colored lamps/spotlight beams, mist/haze, contrast shifts. The changing illumination makes the scene feel dimensional.
3. **Independent foreground PERSON:** `herc-rock.webp` is an isolated/alpha-backed photograph of Herc in rock performance pose, on top of the stage. The speaking mode uses a different cutout-like portrait (`herc-clean-720.png` according to live inspection). Neither looks like a photo trapped inside a rectangle. The separation of human from background is essential.
4. **UI/content layer:** Name/nav, explanatory copy, slider and stage-specific controls float over/around the scene; alignment and spacing create staged depth, rather than stacking ordinary panels.

### Slider control and verified changes
- Visual track described as orange-to-blue with pick-like glowing knob; labels: **FROM ROCK STAGE** ↔ **TO SPEAKING STAGE**. Side labels are clickable endpoints; actual input/track is visible to page extraction.
- **Left / rock:** dynamic guitar pose (plaid shirt, cap, instrument, arm raised and knee up), colorful stage lights, amps and a **TURN ON THE AMPS** affordance.
- **Right / speaking:** cleaner/grayscale, arms-crossed portrait; calmer educational/speaking visuals, and a different **Learn From Herc** lead/CTA.
- **Moving between states:** visually appears to crossfade/blend the human and scene, with lighting mood changing as well. Inspector saw a partial middle state but could not definitively confirm continuous interpolation versus snap at specific thresholds. Treat the **visual result** as verified, **exact implementation and blend model** as unverified until source/DevTools analysis.
- Main lesson: this is not a cosmetic color toggle, nor simply a background slider. **The person changes. The environment changes. The purpose/CTA can change.** Because the person is a separate foreground cutout, the scene has a much more convincing layered/floating quality.

### What remains uncertain — do not misrepresent
- Whether CSS opacity, SVG masks, image swaps or canvas drives the states. No reliable source-level proof in this review.
- Exact interpolation at intermediate positions, timings/easing, whether foreground parallax follows pointer and how lighting tracks the cursor; do not infer all from the visual.
- Exact number of lighting images/layers and whether images are alpha cutouts at *every* state.
- Source assets are observation/reference only: never download into project or reuse protected Herc imagery, sound or code.

## User-aligned desktop direction — PROPOSED and only to test comprehension
Design a **single high-impact, desktop-first hero as a dimensional interactive set**:
- Distinct background world(s), coordinated lighting, and **large isolated Keith cutout(s)** in the foreground. Portraits must have acceptable edge extraction, resolution, grounded lighting, and matching relative scale to avoid uncanny replacement.
- Slider or similarly expressive state selector at a prominent position; **dragging/switching must visibly change Keith's appearance**, not just move a beam or reveal a card.
- Coordinate background, lighting color, supporting copy and possibly CTA with portrait state. Keep same underlying brand color family as Keith's existing site (dominant purple + charcoal/black, light and green where appropriate); first sample exact palette from current live design rather than invent new hexes.
- One possible meaningful two-state mapping to discuss: **'The Gentleman' ↔ 'The Showman'**; alternatively **'Close-Up Magic' ↔ 'Stage Magic'** or **'Corporate' ↔ 'Celebration'** only if available portraits and actual offered services support it. Do not lock labels yet and **do not presume** a hired photo session's persona concept is approved by Keith for the website.
- Secondary micro-interactions (pointer-reactive lights, stage props) are subordinate; the primary hero is an image+scene transformation. Do not reproduce Herc's guitar, amp, song, character artwork or exact visual brand.
- Text/booking remains independently accessible while the hero changes; not a mandatory interaction.
- **Do not do any mobile design now** (including 390px comps or responsive conversion schemes). Future mobile gets separate explicit art direction.

## Questions to resolve only after shared understanding
1. Which genuine two looks/poses of Keith would best tell the story? Real rights-cleared assets may govern feasibility.
2. How closely should the transition emulate Herc's apparent blended intermediate state versus a smooth two-state change? Need live prototype only after implementation authorization.
3. Brand exact hex colors must be sampled and verified; current inspection provides purple/charcoal/white/green **descriptions**, not canonical values.
4. Do we have permission or a realistic pathway to use cutout images of Keith in any eventual concept? No approval yet.

## Supersession and next step
`docs/VELVET_REVEAL_DESIGN_EXPLORATION_2026-11-13.md` remains historical, but all suggested palette variants, A1/A2/A3 hero options, mobile comps and A2 recommendation are **superseded** by this user's correction. No new visuals are authorized/required in this turn. Next: confirm conceptual match, then develop a desktop-only proposal anchored in foreground cutout + transforming slider + existing brand colors. Codex implementation remains gated.
