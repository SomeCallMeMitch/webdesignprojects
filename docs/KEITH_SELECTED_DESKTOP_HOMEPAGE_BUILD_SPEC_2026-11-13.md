# Keith Tyran — Selected Desktop Homepage Reference & Layered Build Specification

**2026-11-13 | Status:** USER-SELECTED VISUAL REFERENCE, technical prototype planning; **not** a licensed client commission or public-launch approval.  
**Repository:** `SomeCallMeMitch/webdesignprojects`  
**Branch:** `concept/keith-tyran-magician-experience`  
**Source of truth:** This document plus `docs/DESIGN_PREFERENCES.md` and `docs/PROGRESS.md`. The user's latest uploaded image takes priority over previous generated variations.

## 1. Visual selection (USER-CONFIRMED)

After reviewing multiple image variations, the user explicitly selected the **exact uploaded PNG from the 2026-11-13 2:02 PM message**, replacing previous candidates. It shows:
- Desktop homepage, 1672 × 941 pixel reference image.
- Entire proscenium stage composition in Keith's purple/charcoal/white family, heavy curtains at the upper and side edges, ornate upper stage truss.
- Front-row theater seats visible all along the bottom foreground, stage floor with circular graphic, small original theatrical props on lower left, right-side ornamental architecture/lamps.
- Magician figure smaller than the original oversized comp, centrally placed but slightly right of left text, in two appearances split by a vertical purple glow in the illustrative midpoint.
- Left hero copy: 'Two Sides of The Magician', short explanatory paragraph and prominent 'BRING KEITH TO YOUR NEXT EVENT' control.
- Horizontal middle-lower slider labeled 'THE GENTLEMAN' and 'THE PLAYFUL MAGICIAN'; upper nav includes 'REQUEST AVAILABILITY'.
- **Three primary downward overhead spotlights with visibly grounded fixture positions**: cool violet, center white, cool violet; stage haze and smaller practical lighting. No bottom-stage up-light fixtures or beams.
- Dramatic but restrained stage setup, with atmospheric fog and some floating-card decorative elements.

**Exact source attachment:** `ChatGPT Image Nov 13, 2026, 02_02_12 PM.png` provided in the user message.  
**Verified local conversation artifact:** `/mnt/data/keith_tyran_approved_desktop_homepage_reference_2026-11-13.png` (identical copy of uploaded PNG).  
**Size / format:** 1672x941 PNG RGBA, 3,062,570 bytes.  
**SHA-256:** `d5246f115c381a75756a59b54d00a3fdb365d202830f2062ef9407a7940b0e21`.  
**IMPORTANT:** As of this documentation write, the PNG is saved as a conversation artifact only. **It has not been committed as a binary GitHub asset**: the available GitHub text-file action cannot ingest a sandbox file path. Any later coding agent needs the user-provided/downloaded image copied into the branch (suggested path `assets/reference/keith-tyran-selected-desktop-hero-2026-11-13.png`) and must validate the SHA-256. **Never claim the PNG exists in the GitHub tree until verified.** The generated picture is a design reference, not a licensed photograph of Keith.

## 2. Current scope and permission

The user asked whether we can **build just this homepage, with a real slider and moving lights like Herc Magnus**, then explicitly said to use this selected image and keep investigating. That establishes clear **prototype intent** and approval of the **visual reference**, but does **not** approve production hosting, live booking, use of actual Keith photos, or contact. This session performs **technical research and a build-ready Codex brief**, not code deployment or implementation. Confirm actual coding authorization if ambiguity remains before writing production-facing code. Desktop ONLY; do not design a mobile version or downgrade it to a responsive mini-stage.

## 3. The flat-picture problem (essential implementation insight)

The PNG is a single baked image. Its performer, furniture, glowing slider, light beams, top fixtures, atmospheric lighting, headline, controls and seats are all pixels. Animating it as one photograph would make **beams move without changing their source fixtures**, while static baked beams remain behind the new beams, defeating the user's explicit physical-light rule. Slider could move a superficial mask without producing two truly independent magician poses.

**Therefore the prototype MUST use an intentionally prepared original layer kit**, with exact composition visually matched to the selected screenshot:
1. **Base stage clean plate, no baked light beams:** curtains, proscenium, truss, stage floor, right architecture, front audience seats, props; no figure or UI, no stage-floor uplighters.
2. **Practical fixtures** placed on truss, isolated or faithfully re-drawn in individual layers that can rotate visibly with beams.
3. **Each beam** as a separately controlled transparent/SVG cone with a physically fixed top origin at the corresponding overhead fixture; faint volumetric haze is allowed but no luminous cone from an invisible or floor source.
4. **Stage illumination** and ground pools/reflected light linked to the moving beams, plus appropriate rim/fill on the figure. Floor hotspots are light *impacts*, not floor-mounted beam emitters.
5. **Magician cutouts:** two complete isolated alpha portraits of the **same stand-in figure**, one poised 'Gentleman' and one lively 'Playful Magician', with matched camera angle, face scale, perspective, hands, foot/stage alignment and believable pose differences; two half-outfits painted onto one flat person is not a genuine pose-changing slider. If any actual Keith portrait is used, verify rights first.
6. **Optional decor:** floating cards and controlled smoke in separate layers, not mandatory or allowed to obscure core UI. Preserve the selected layout's visual mood.
7. **UI layer:** actual HTML text/nav, CTA and semantic range slider, not text baked into a background image.

Do not paste Herc Magnus's website source, photographs, amp imagery, light effects, scripts, copyrighted copy or music. The **interactive principles** are inspiration, not a license.

## 4. Desktop interaction proposal (not frozen implementation)

### Slider
- A clearly visible horizontal scrubber, controlled by mouse dragging, click/tap on track, keyboard arrows and named endpoint buttons. Use semantic native range input with a skinned track/knob or equivalent accessible pattern.
- Progress 0 = whole Gentleman pose + its lighting tone, 100 = whole playful-magician pose + its matching scene. At intermediate values the figure genuinely updates, with a controlled wipe/illuminated occlusion instead of an uncanny ghosted overlapping face; exact midpoint aesthetic evaluated via review.
- Scene elements (portrait, lighting mood, curtain depth or relevant props, selected descriptive copy) must react coherently. The slider itself does **not** have to move the overhead light fixtures; cursor movement drives those separately.
- The selected PNG illustrates an intermediate **split** with an upright glowing reveal line. Preserve that *visual inspiration*, but only if two actual whole-person image states make a split believable. Avoid face/hand seams that look like distorted anatomy.
- Reversible, deterministic and smooth, with no compulsory autoplay and no audio.

### Moving spotlights — physically motivated
- Anchor each moving light to the **visible center of its actual fixture**. Beam cone and fixture head rotate together (e.g. bounded ±8–12 degrees, subject to art direction) while its apex stays fixed.
- Primary grouping: left-purple, center neutral-white, right-purple, in the exact spirit of the uploaded winner. Additional visible fixtures may contribute low-intensity fills but no invisible sources.
- Softly follow cursor position **within a bounded stage/hero interaction region**. Interpolate with sensible easing and mild independently staggered follow, so they feel like theatrical motors, not a literal pointer flashlight.
- All source-to-beam relationships remain convincing as lights traverse curtains, figure and stage. Curtain/floor/figure glow may respond at same time; moving beam must not cross readable text with insufficient contrast.
- **Explicit prohibition:** no floor-standing upward-moving spotlights, no beams originating at stage edge, no free-floating unexplained glow, no stray top-left beam with no visible fixture.
- Optional gradual ambience for visitor who doesn't move cursor, but prefer static default unless approved; honor reduced motion.

### Navigation and conversion
- Keep header and 'Request Availability' recognizable and visually live. For an unofficial local prototype, neither submit inquiries to Keith nor show false live availability. If only the hero is implemented, do **not** create deceptive dead links; clearly mark unfinished menu targets as demo-only.
- Stage-wide desktop review artboard: selected 1672x941 as fidelity master. Also examine 1440x900 and 1920x1080 desktop carefully, without beginning mobile design.
- Maintain readable contrast, focus rings, keyboard input and reduced-motion still states.

## 5. Asset gate before implementation claims

A working result cannot match the reference simply by adding HTML over the PNG. Before coding animation, create/review the base plate, two separate portrait cutouts, each foreground fixture/beam, and site UI tokens. The two portraits are the **highest fidelity bottleneck**. If available photos are not suited for a matched pair, plan an original stand-in pair, explicitly unofficial. Do not silently synthesize a fake endorsed client performance.

## 6. What counts as acceptance

- At both ends the person is visibly a **different complete pose**; the right half never remains glued to the left.
- At every tested slider position the portrait, environmental mood and reveal marker track the knob without flicker or anatomical ghosting.
- Moving the cursor left/right causes **visible overhead fixture-head rotations** with matching purple/white beams; sources do not drift and every animated beam can be traced to a fixture.
- There is no bottom-to-top light or other phantom light source, including inside the reference clean plate.
- Seats, drapery, stage floor, card/glow atmosphere, and hero text preserve the selected design's composition at the fixed reference viewport.
- Hero CTA is always visible and keyboard accessible; reduced-motion disables motion while retaining full state switching.
- No third-party protected assets, unauthorized Keith portrait, real booking endpoint, domain or public site deployment.

## 7. Next steps

1. Confirm asset recovery and copy the exact selected PNG into the working branch by a binary-aware workflow; verify checksum and location.
2. Extract/generate approved original clean-plate and portrait pairs. **User review of the layer kit before serious animation work.**
3. Follow the companion public-reference behavior study and Codex prompt.
4. Only after explicit build authorization, implement a **private / local desktop-only** prototype in small stages: static fidelity → real slider → moving physically anchored lights → polish and QA.

No code or deployment was done by creation of this specification.
