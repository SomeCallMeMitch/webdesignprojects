# Living design preferences and specifications

**Updated:** 2026-11-13. **Rules:** All future chats/agents READ this file at startup and UPDATE it when a design preference or decision is discovered. Mark status as *User confirmed*, *Proposed*, *Needs validation*, or *Rejected* with date and rationale. Never promote a suggestion to user-confirmed silently.

## User-confirmed direction
| ID | Preference | Status | Evidence |
|---|---|---|---|
| DP-001 | Build impressive custom websites for entertainers or similar businesses with ordinary/static-feeling sites, independent of the ToteEase/ToteStream project. | User confirmed | Conversation, Nov 12–13 |
| DP-002 | Use https://hercmagnus.com/ as inspiration for immersive interaction (reactive theatrical lighting, playful controls, coherent storytelling), not as a copy target. | User confirmed | Conversation, Nov 12–13 |
| DP-003 | Keith Tyran magician website is the first preferred prospect and concept. | User confirmed | Conversation, Nov 13 |
| DP-004 | ChatGPT Chat/Work generally leads planning; Codex codes once a clear plan is approved. | User confirmed | Conversation, Nov 13 |
| DP-005 | Every prompt/session reads and appends to progress; work and decisions accessible to future chats. | User confirmed | Conversation, Nov 13 |

## Design directions — exploratory ONLY
| ID | Idea | Status | Questions/requirements |
|---|---|---|---|
| DP-101 | Elegant theatrical / gentleman magician mood (dramatic spotlight, dark stage, subtle metallic accents). | Proposed | Choose tone relative to existing Keith brand; avoid cheesy magic clip-art |
| DP-102 | Pointer-reactive spotlight/light beams that subtly illuminate hero or navigation. | Proposed | Keyboard/touch equivalents, reduced motion, performance |
| DP-103 | One meaningful mini illusion (e.g. interactive card choice/reveal) used as memorable introduction. | Proposed | Must be original, fast, optional, accessible and never block booking |
| DP-104 | Smooth reveal of specialties: close-up, stage, mentalism, corporate/private events. | Proposed | Verify actual offered services and how his audience searches |
| DP-105 | Prominent straightforward 'Check availability' / 'Request a quote' CTA. | Proposed | Determine copy, booking workflows, friction/privacy |
| DP-106 | Editorial, premium typography and polished photography, mobile-first content. | Proposed | License/permission plan |
| DP-107 | Mobile should feel deliberate, not a smaller desktop stage with unusable hover behaviors. | Proposed | Touch interactions and performance budgets |
| DP-108 | Optional audio interactions, never autoplay with sound. | Proposed | Audio might not suit premium magician concept |
| DP-109 | Original effects + reusable technical foundation for other performer sites. | Proposed | Prioritize polish over excessive modularization |

## Nonnegotiable quality guardrails (provisional until planning ratifies)
- Full keyboard navigation, visible focus, semantic labels and sensible screen-reader experience.
- Respect `prefers-reduced-motion`; provide static fallback and no seizure-risk flashing.
- Use accessible text contrast and don't hide the booking CTA behind effects.
- Audio muted until visitor initiates; explicit controls and immediate stop.
- Aim for strong mobile performance, compressed/licensed imagery, lazy loading below fold, no jank.
- Never present a concept as Keith's official website or use his protected media without permission.

## Open decisions for planning chat
1. Desired genre: refined luxury / cinematic mystery / playful street magic?
2. Target customer: corporate/event planners first or general private events?
3. Hero interaction: spotlight, card illusion, or both—with what degree of spectacle?
4. Whether audio is appropriate for a magician concept.
5. Specific palette, typefaces, animation pacing, and accessibility/measurement budgets.
6. Prototype deliverable: clickable wireframe vs coded preview; hosting and any exposure controls.
7. Brand/media permissions, text/reviews/testimonial sourcing, and commercial outreach plan.

## Change log
- **2026-11-13:** Created initial preference register separating user-established intentions from design ideas. No visual comps or build approved.

## 2026-11-13 — Planning-session provisional findings and guidance
The following are NOT user-approved visual decisions. The evidence is in `docs/KEITH_SITE_MARKET_AUDIT_2026-11-13.md`; full creative concepts in `docs/CREATIVE_DIRECTIONS_2026-11-13.md`.

| ID | Guidance / discovery | Status | Rationale |
|---|---|---|---|
| DP-110 | Compare The Velvet Reveal (A), Impossible Invitation (B), Two Sides of Wonder (C); explore A first. | Proposed | A best balances lighting spectacle, existing Gentleman identity, mobile clarity and asset burden. |
| DP-111 | Preserve warm, funny, all-ages appeal alongside corporate professionalism; avoid luxury-only assumptions. | Proposed | Site offerings and marketplace review themes encompass family and adult occasions as well as business events. |
| DP-112 | Use pointer-reactive lighting as subtle decor, with an equivalent keyboard/tap cue and static fallback. | Proposed | More memorable than static hero without hiding important information. |
| DP-113 | Hero headline and request CTA always visible; optional one-touch invitation/event-format reveal, not a mandatory game. | Proposed | Keeps conversion path usable independent of animations. |
| DP-114 | A palette: ink/oxblood/brass/ivory; B: paper/plum/copper; C: charcoal/ruby/blush/mint. | Proposed | Concept starting points only; no typography/color finalized and contrast testing still required. |
| DP-115 | No sound for initial prototype; opt-in audio only if later requested. | Proposed | Limits distraction, complexity and visitor consent burden. |
| DP-116 | Use original/rights-cleared silhouette or generic illustrative stand-ins for visuals; do not publish Keith portraits or photographer images without permission. | Proposed / rights guardrail | 2026 professional photos are a powerful reference, not a license. |
| DP-117 | Inquiry CTA should say 'Check your date' or 'Request availability' but must explicitly be an inquiry, never false live bookability. | Proposed | Current site primarily uses email/phone; no authenticated live calendar verified. |
| DP-118 | First approval artifact should be original desktop/mobile still compositions + short interaction storyboard before any functional implementation. | Proposed | Lets user evaluate creative impact before committing Codex time. |
| DP-119 | Three event-audience routes: corporate, birthdays/celebrations, weddings/private; offer show formats within those routes. | Proposed | More faithful to source site and marketplace evidence than corporate-only assumptions. |

**Still not tested:** Keith's true mobile rendering, actual performance metrics, CTA reliability, social engagement and site conversions.

## 2026-11-13 — Direction A focused exploration (not final approval)
**User confirmed:** Explore **Direction A: The Velvet Reveal** in greater visual/interactive depth, compare alternatives, and do **not start implementation**. This approves a *planning focus*, not a final visual specification.

| ID | Specific item | Status | Reason |
|---|---|---|---|
| DP-120 | Explore The Velvet Reveal (Direction A); implementation remains off-limits. | **User confirmed — exploration only** | Direct user request, 2026-11-13 |
| DP-121 | A2 Living Spotlight as primary; use restrained A1 curtains and one A3 opt-in invitation moment below hero. | **Proposed**, not approved | Strongest balance of theatrical impression, clear booking, accessibility, mobile and personality |
| DP-122 | Compare three variants: A1 Grand Entrance, A2 Living Spotlight, A3 Close-Up Encounter. | **Proposed design comparison** | Each brings different spectacle / booking tradeoffs |
| DP-123 | Compare V1 Classic Velvet (#121218/#592332/#C3A16B/#F8F3E9), V2 Midnight Illusion, V3 Warm Cabaret; V1 leads. | **Proposed** | More specific art-direction choice within A; contrast/font still untested |
| DP-124 | Keep copy + inquiry CTA visible at first paint; no curtain-loading gate or required card trick. | **Proposed usability guardrail** | Ready-to-hire visitors must be able to take action without participation |
| DP-125 | Direct motion into bounded stage-right light: subtle pointer glow, keyboard focus cue, touch activation, reduced-motion still. | **Proposed** | Preserve theatricality while avoiding pointer chasing across essential text |
| DP-126 | Proposal for 'Choose your occasion' invitations: Corporate, Birthdays & Celebrations, Weddings & Private; formats as subcontent. | **Proposed** | Educational interaction rather than decorative game, but labels must be verified |
| DP-127 | No sound, full-screen video autoplay, heavy particle/WebGL effect or unlicensed client assets in first concept. | **Proposed** | Performance, accessibility, rights and distinctiveness |
| DP-128 | Prepare 1440×900 desktop and 390×844 mobile original still comps plus 6-frame motion storyboard for comparison before any Codex task. | **Proposed** | Gives concrete visual review without implementing an app |

**Detailed reasoning and open choices:** `docs/VELVET_REVEAL_DESIGN_EXPLORATION_2026-11-13.md`. Distinguish static inspirational imagery from original visual comps. Do not claim Keith approved or commissioned anything.

## 2026-11-13 — User correction: desktop-only Herc-inspired layered slider (OVERRIDES earlier proposed A direction)
**User-confirmed**:
| ID | Decision | Status | Rationale / scope |
|---|---|---|---|
| DP-129 | Work **100% on desktop** in the current design phase; no mobile mocks, interactions or planning. | **User confirmed** | Explicit correction, Nov 13 |
| DP-130 | Mobile is always to be **specifically designed as a separate experience** when addressed, not just a responsive shrinking of desktop. | **User confirmed** | Do not work on mobile now |
| DP-131 | Prior Velvet Reveal A1/A2/A3 designs **not liked**; no more traditional velvet/cabaret/spotlight-only proposals as current direction. | **User confirmed — rejected proposals** | User explicitly rejected all previous visuals |
| DP-132 | Make desktop hero **much closer in interactive structure to https://hercmagnus.com/**: person image cut out and floating layered over scene; slider changes how person looks (not merely background color). | **User confirmed — design target** | Preserve unique interactive mechanics with original non-infringing visuals |
| DP-133 | Use **colors already on Keith's existing site** rather than new theatrical burgundy/gold palettes. | **User confirmed** | Need exact colors sampled; desktop inspection currently describes purple/charcoal/white/green, not verified hex values |

**Interpretations awaiting choice, NOT approved**:
| ID | Idea | Status | Rationale |
|---|---|---|---|
| DP-134 | Two possible Keith slider states: Gentleman ↔ Showman, or Close-Up ↔ Stage; swap cutout portrait, scene, lighting and supporting text. | **Proposed** | Needs Keith-appropriate imagery/rights and meaningful labels |
| DP-135 | Large transparent foreground portrait + ambient stage layers + slider, optionally responsive lighting; readable CTA always accessible. | **Proposed extrapolation** | Emulates principle, not Herc visual assets/code; exact mechanics unverified |
| DP-136 | Explicitly supersede prior DP-114, DP-121–DP-128 aesthetic and mobile-comparison proposals when they conflict with DP-129–DP-133. | **Governance clarification** | Earlier unapproved drafts remain in history but are NOT active design brief |

**Evidence:** `docs/HERC_DESKTOP_HERO_REFERENCE_AND_DESIGN_RESET_2026-11-13.md`, read-only site inspection Nov 13. No developer implementation or visual comps approved. **Do not restart mobile planning until separately requested.**

## 2026-11-13 — Final handoff refinement: magic poses plus curtains and lighting
**User-confirmed on Nov 13:** The original-site-like portrait-changing slider is still central. **Curtains and theatrical lighting are welcome** as part of the layered scene; their presence is not inherently rejected. Keith is a MAGICIAN; do not transfer Herc's rock-musician/speaker roles literally. The user wants to explore **two versions of Keith with distinct pre-/post-illusion or other meaningful performance poses**. They also want a new chat to continue, with all history in the repo.

| ID | Preference / restriction | Status | Detail |
|---|---|---|---|
| DP-137 | Theatrical curtains and lighting may be composed into the original layered desktop scene rather than deleted outright. | **User confirmed** | Clarifies DP-131: rejected old standalone designs, not curtains/lights themselves |
| DP-138 | The slider must depict two Keith-specific MAGICIAN appearances/poses, potentially before vs after an effect; neither state should portray him as Herc-style musician or speaker. | **User confirmed creative requirement; exact poses exploratory** | User said 'maybe' before/after poses; do NOT promote specific before/after poses to final approval |
| DP-139 | Keep lighting as an important part of hero atmosphere alongside floating cutout, scene depth and slider. | **User confirmed** | Lighting fits the reference and Keith's magic theme |
| DP-140 | Exact two-state story, pose asset selection, curtains design, slider placement and visual art remain **open**. | **Needs validation** | Next design chat should compare magician-appropriate options instead of coding |

**Active design source of truth:** `docs/CURRENT_DESIGN_DIRECTION.md`. **Next conversation handoff:** `docs/NEXT_CHAT_DESKTOP_HERO_PROMPT_2026-11-13.md`. Existing DP-129–DP-133 (desktop-only, original Herc-inspired layering, Keith palette) remain authoritative. Do NOT revive mobile comps or the prior A1/A2/A3 drafts.


## 2026-11-13 — Desktop dual-state hero concepts (planning session; no design lock)

The user-confirmed requirements DP-129–DP-140 remain the design authority. The following are all **PROPOSED** creative explorations or research qualifications. Full analysis: `docs/KEITH_DESKTOP_TWO_STATE_HERO_CONCEPTS_2026-11-13.md`.

| ID | New research / option | Status | Reason and boundary |
|---|---|---|---|
| DP-141 | **A: The Impossible Moment** — pre-illusion poised Keith cutout versus post-illusion expanded reveal pose; one magician-specific event, with coordinated magic object, curtains, purple spotlights and stage depth. | **Proposed — recommended for discussion, NOT approved** | Slider produces cause-and-effect magic, not only persona/style; specific magic effect and imagery require validation. |
| DP-142 | **B: The Gentleman & The Wild Card** — formal tuxedo versus a playful alter-ego performance look, with changed poses/lighting. | **Proposed alternative, NOT approved** | March 2026 professional portrait story shows the two looks; red jacket risks implying musician or unsupported new persona. Photographs are not licensed for project reuse. |
| DP-143 | **C: Close Enough to Amaze / The Whole Room Gasps** — intimate close-up performance versus larger theatrical stage performance. | **Proposed alternative, NOT approved** | Maps to public service formats, but can be less magical and creates difficult camera/portrait matching. |
| DP-144 | Prefer a reversible scrub whose intermediate frame **masks the Keith pose change with motivated light/shimmer**, avoiding ghosted overlapping faces/hands. Keep full portrait/scene change and always-visible inquiry CTA. | **Proposed interaction treatment** | Two separately photographed poses cannot convincingly continuously morph facial anatomy; exact reference site's compositing mechanism remains unverified. |
| DP-145 | For desktop composition, compare 1440x900 and 1600x900 review canvases with a visually dominant isolated figure, stage floor/shadow, multi-depth curtains and coordinated portrait illumination; no conventional centered red-velvet layout. | **Proposed art direction, NOT approved** | Implements the currently approved *principles* without copying Herc composition or the rejected A1/A2/A3. |
| DP-146 | Brand research refinement: live site CSS gradient contains `rgb(128,121,255)` / `#8079FF`; visual header-purple estimate `#C169E1`, charcoal approximately `#202020–#2A2A2A`, white `#FFFFFF`. No verified green **interface** token. | **Observed partial evidence; exact master palette NEEDS VALIDATION** | Current live read-only Nov 13 review at https://agent.tinyfish.ai/runs/34b776f5-aaab-4a86-b1e2-5e88253f3400 ; gradient is exact CSS sample, header/charcoal only visual approximations. Green in photo backdrops should not automatically become a brand UI color. |
| DP-147 | First visual decision artifact should be **desktop-only paired start/end original artboards plus a 0/25/50/75/100 slider storyboard**, created only after user selects a narrative. | **Proposed next review, NOT approved** | Prior desktop/mobile A1/A2/A3 mock package is superseded; no mobile work now. |

**Rights and scope:** All photographs on Keith's site or Sarah Eichstedt's article remain reference-only; no assets downloaded to repo, licensed, or approved for re-use. No coding, public launch, contact, or final design choice.


## 2026-11-13 — First desktop homepage visual requested

| ID | Preference / visual-review fact | Status | Rationale |
|---|---|---|---|
| DP-148 | After the initial pose/slider comparison, **create an original visual mockup of the desktop homepage now** rather than continuing with only abstract design discussion. | **User confirmed — request for a mockup, NOT visual approval** | Explicit request on Nov 13. The first in-chat image has been generated, and an assessment is in `docs/KEITH_DESKTOP_HOMEPAGE_MOCKUP_REVIEW_2026-11-13.md`. |
| DP-149 | The initial render illustrates a **two-persona, split-portrait design** with a visible slider and purple theatrical set. It is neither an approved direction nor a verified demonstration of a working slider. | **Proposed first visual / needs user review** | The rendered image visually drifted toward concept B even though concept A was the leading recommendation. Do not treat the mockup as consent to revive rejected props, lock a red jacket look, or to implement. |


## 2026-11-13 — User selects FINAL desktop visual reference and image-asset handoff (overrides old mockups)

**This is approval of which **visual reference** to use for the desktop proof-of-concept, not final production design approval or permission to contact/deploy.**

| ID | Preference / decision | Status | Source / implications |
|---|---|---|---|
| DP-150 | Choose the **uploaded November 13, 2:02 PM, 1672×941 desktop PNG** with foreground theater seating, smaller central figure, upper truss, purple/white overhead spotlights, curtains, left props, card haze, right theater architecture, headline and horizontal two-persona slider as the **master image**. | **USER CONFIRMED — visual master** | Exact master fingerprint and image description in `docs/KEITH_SELECTED_DESKTOP_HOMEPAGE_BUILD_SPEC_2026-11-13.md`. Replaces every earlier candidate. |
| DP-151 | Keep the **visible audience seats at the bottom**, physical stage layout, small center-right foreground figure, purple-centered branding and exact composition of winner. | **USER CONFIRMED — imagery** | Specific user selection and comparative image history. Do not accidentally switch to the no-seats version. |
| DP-152 | Lights must move like theater fixtures; **all moving beams must originate from visibly present overhead fixtures**, with no upward floor lights, unexplained beams, or fixed baked cones competing with live lights. | **USER CONFIRMED — lighting behavior** | Explicit repeated corrections and final approval; exact animation details for implementation remain proposed. |
| DP-153 | Aim for a **working standalone desktop-only homepage proof of concept** with a meaningful two-appearance slider and interactive lights, using original layers instead of a flattened screenshot. | **USER CONFIRMED — product goal; coding authorization distinct** | User asked whether this can be built. Separate image-prep chat now requested; no code written here. |
| DP-154 | The **next chat is strictly for taking the uploaded master image and creating individual production image assets** (clean stage, compatible alternate portrait cutouts, curtains, fixture heads, beams, atmosphere, foreground seats and props). | **USER CONFIRMED — immediate next task** | Prompt saved in `docs/NEXT_CHAT_KEITH_HOMEPAGE_IMAGE_ASSETS_PROMPT_2026-11-13.md`. |
| DP-155 | Research/installation of **Reverse Engineer Anything (REA)** is being handled in a separate chat; the image-assets chat should **not** duplicate it. Codex is likely for later coding integration. | **USER CONFIRMED — workflow** | Repository radar evidence documented in `docs/HERC_SLIDER_LIGHTS_TECHNICAL_EVIDENCE_2026-11-13.md`. |
| DP-156 | Intermediate visual split is inspiration only; underlying slider assets need **two actual full coherent magician pose/appearance images**, matching camera/perspective, not two halves of a single baked cutout. | **PROPOSED asset-engineering inference** | Needed for genuine portrait-changing slider; exact end-state pose specifications remain open to fidelity checks. |

**Asset preservation constraint:** Selected visual is an uploaded conversation PNG; it is not yet verified as a binary GitHub asset. User will upload the image to next chat. Filename/dimensions/SHA-256 are recorded in master image specification. `docs/PROGRESS.md` remains append-only.

## 2026-11-13 — Desktop prototype milestones

- **Confirmed:** Approve the static desktop composition first. Add the independently layered pose slider and cursor-following stage beams after review.
- **Confirmed:** Anchor the violet, white and violet beams to the three visible overhead lenses. Head rotation is optional if the artwork supports a clean result. This supersedes the fixture-rotation acceptance item in the selected desktop build spec.
- **Confirmed:** Use the existing Herc evidence and validate the Keith composition at 1672 × 941, 1440 × 900 and 1920 × 1080 CSS pixels.

## 2026-11-14 — Desktop prototype transition audio trial

- **User requested for this test:** Three one-shot magic cues, one looping circus-magic option, an easy way to switch sounds, and a prominent mute button.
- **Prototype choices:** Start muted. Place the sound selector and enable/mute button directly below the slider. Play one cue per drag or discrete keyboard/endpoint action. Start the original circus waltz when the slider crosses 50% toward The Playful Magician, and stop it on the return crossing. Changing sounds or muting stops the current clip. Enabling sound waits for a slider action.
- **Open for review:** Preferred cue and playback level. The four clips are original trial audio.

## 2026-11-14 — Six-card demo variant

- **User requested for this test:** Retain the original preview and create a second demo with three extra cards scattered at different angles. Place a red card near the audience and a smaller red one left of the Ace. Make the audio buttons about half their current size.
- **Prototype choices:** Add a tilted purple-backed card farther right in the haze. Keep the new cards tied to the reversible slider. Reduce each sound button's visual area by about half and retain its 44 px click height.


## 2026-11-14 — Below-the-fold image separation and performance preferences
| ID | Preference / decision | Status | Evidence |
|---|---|---|---|
| DP-157 | Build desktop below-the-fold art one section at a time, with images and decorative frames as **separate assets**, enabling independent layout and effects. | **User confirmed** | User requested frames without photos and the photos separately, then authorized moving to the next section after completion. |
| DP-158 | Keep the image-heavy website fast; cursor-responsive lights below the hero are desirable **only if lightweight**. No performance acceptance is implied by static mockups. | **User confirmed conditional preference** | User explicitly prioritized image weight and reasonable page loading. |
| DP-159 | In Section 03 use six reusable display cards with a single CSS border style and lightweight CSS hover effects, instead of six unique heavy frame images. | **Proposed implementation/detail, not independently approved** | Derived from design plan and performance constraint; user has not yet approved the individual art. |


## 2026-11-14 — Complete 02–06 mockup asset handoff
| ID | Preference / direction | Status | Detail |
|---|---|---|---|
| DP-160 | Bundle prior separate asset packs into a **single ZIP** and supply an HTML preview spanning every completed desktop section; omit the hero if the separate interactive version cannot be represented faithfully. | **User confirmed workflow** | User explicitly requested a single ZIP and HTML demo; hero screenshot was intentionally not substituted for interactive hero. |
| DP-161 | Prepare the **next three sections** (04 Choose Your Event, 05 Behind the Curtain, 06 Trusted by Audiences) as part of this continuous desktop preview. | **User confirmed workflow and scope** | Approval to make a review artifact, not approval of specific final visuals or production publication. |
| DP-162 | 04 uses individually editable event photos plus one lightweight reusable transparent gold playbill frame; 05 uses a separately layered concept portrait and atmospheric background; 06 uses CSS name plaques instead of downloaded logos. | **Provisional design implementation; awaits user review** | Keeps image transfer small and editing granular; details in `docs/KEITH_DESKTOP_SECTIONS_02_06_PREVIEW_AND_ASSET_HANDOFF_2026-11-14.md`. |


## 2026-11-14 — Section 07–09 concept approval and real-photography preference
| ID | Preference / workflow | Status | Detail |
|---|---|---|---|
| DP-163 | Continue the approved-purple-theater direction for 07 Moments of Wonder, 08 Audience Reactions and 09 How Booking Works; produce separately usable build assets rather than flattening section mockups. | **User confirmed design direction and asset request, not final live-site approval** | User responded positively to the 07–09 mockups and requested the pieces needed to build them. |
| DP-164 | Prefer **actual Keith performance and audience photographs** over AI-generated audience imagery where credible original sources and reproduction rights are available. | **User confirmed** | User explicitly requested real imagery instead of AI audiences; authorization for reuse is still unverified. |
| DP-165 | Consolidate sections 02–09 into one downloadable ZIP and an HTML preview; store a copy in the specified Drive folder, maintain handoff in GitHub, and make a new-chat continuation prompt. | **User confirmed workflow** | New Drive folder: https://drive.google.com/drive/folders/1jLMAO7aEGDxedeusAlLnbKLY5Zn2VCGc |
| DP-166 | For 07 use individual photo files plus separate transparent frame overlays; 08 one reusable blank review letter with real HTML copy; 09 one reusable ticket plate and real HTML booking steps. | **Implemented as reviewable concept, not independently finalized** | Weight/performance and editability; no fake testimonials or permanent image licensing assumption. |

## 2026-11-14 — Six-card slider and audio refinements

- **User requested:** Make the thumb track smoothly, sound the cue when entering the opposite side across the midpoint, and use an Ace of Hearts for the near card. Audition a richer sound mix and support a supplied audio file if the user chooses one.
- **Prototype choices:** Use direct pointer tracking and render the scene on the next animation frame. The exact midpoint preserves the last side. Circus Magic remains a right-side loop. Give the original cues stereo reflections and a gentler tail in the remix, with slightly different accents per cue. WAV or MP3 can be used for a supplied track. The original audio and three-card fallback are available for comparison.

## 2026-11-14 — Supplied card and stage props

- **User requested:** Use the supplied King of Hearts for the near card, try a lantern flicker on the rightward reveal, and cue audio when the Playful Magician's hat starts to show.
- **Prototype choices:** Flicker only the left sconce glass so its fixture stays in place. Dissolve from the original crystal ball into the two supplied seer images. Trigger the outbound cue at 64% and use the midpoint to reset on return. Give first-load bandwidth to the stage and portraits, then load the decorative layers.

## 2026-11-14 — Modular below-the-fold build

- **User confirmed:** Build new sections as reusable modules for future magician spec sites. The next implementation is limited to Section 02 below the existing live desktop hero. Use the supplied Drive mockup and component images, with attention to payload and further image optimization deferred.
- **Proposed for implementation review:** Keep the five art layers independent, place section copy and media in easily replaceable inputs, and try a scoped, inexpensive pointer glow. Keep the hero's existing interaction independent of the section.

## 2026-11-14 — Experience the Magic desktop implementation

- **User authorized:** Build Section 02 locally beneath the existing six-card hero with the supplied mockup and five WebP layers.
- **Choices for review:** Continue the theater palette with a shadow below the seats. Keep performance and audience art in independent, overlapping gold frames, with descriptive alt text and a visible concept illustration label. Keep the painted light fixed. Add one soft pointer glow over the artwork for mouse users who allow motion.
- **Navigation and loading:** Scroll to explore links to the new section. Watch a performance opens an inline preview message. A viewport check defers the five WebPs until the visitor approaches the artwork. For this hero, section requests also wait for the hero image layers to finish. Native disclosure and lazy image fallbacks support a static view with JavaScript disabled.


## 2026-11-14 — Verified development handoff boundaries

- **User confirmed workflow:** Complete asset verification and a single authoritative Codex handoff before implementation; preserve working hero and already-integrated Section 02, and integrate only 03–12 in the next coding phase.
- **User confirmed:** Desktop-only visual checks at 1440×900, 1672×941 and 1920×1080; mobile remains an independent future design. Keep components modular/reusable, real photographs only with confirmed rights, and later visual refinements expected. No new aesthetic selection was made in asset preparation.
- **Verified source limitation, not a new preference:** Section 05 portrait is RGB rectangular art without alpha; 02/07 backdrops contain painted lights, without separate downstream moving-beam layers. Existing hero layers remain authoritative. Details in the authoritative 02–12 build handoff.

## 2026-11-14 — The Show desktop implementation

- **User authorized:** Continue with the next section after the hero and Experience the Magic checkpoint is pushed.
- **Choices for review:** Use the supplied six category illustrations in a three-column, two-row exhibit. Use one reusable double gold frame, per-illustration crops and a restrained hover glow. All descriptions are visible by default. Keep panels informational and the Shows navigation link keyboard accessible. Preserve the static composition with reduced motion or JavaScript disabled.

## 2026-11-14 — Choose Your Event desktop implementation

- **User authorized:** Build the next section after The Show for the desktop concept.
- **Choices for review:** Present Birthday Parties, Corporate Events and Private Events as three tall playbills. Use a shared transparent gold frame and independent concept art for each event. Keep copy and calls to action in HTML, with visible keyboard focus and restrained hover lift when motion is allowed.
- **Reuse:** Copy the event section markup and `event-playbills.css`. Set the color and spacing properties on `.event-playbills`, and update each illustration, crop, alt text, event description and CTA. The `data-deferred-art` grid uses the shared `deferred-section-art.js` loader. Keep both image URLs in sync for the JavaScript-off fallback.

## 2026-11-14 — Behind the Curtain desktop implementation

- **User authorized:** Build the next section when the repo and asset handoff provide enough to proceed.
- **Choices for review:** Use an arched concept portrait derived from the hero and a separate softened backstage atmosphere, with a restrained portrait light on mouse hover. Label the portrait as concept art. Keep the biography to the performance categories already documented in project research. About Keith links to the section.
- **Reuse:** Copy the `.behind-curtain` markup and `behind-curtain.css`. Swap the two WebPs in both image paths, then update the portrait alt text, caption, copy and `--curtain-*` properties. Shared `deferred-section-art.js` handles asset deferral.

## 2026-11-14 — Trusted by Audiences desktop implementation

- **User authorized:** Build Section 06 beneath Behind the Curtain.
- **Choices for review:** Use a four-column wall of eight text plaques with gold inlays and a restrained hover highlight. The plaques are informational. Keep the source as a normal keyboard-accessible link and label the preview as an unofficial concept.
- **Reuse:** Copy the section markup and `audience-references.css`. Replace the names and source with the next performer's documented references, and adjust the `--audiences-*` properties for that site's palette.

## 2026-11-14 — Moments of Wonder desktop implementation

- **User authorized:** Build the supplied gallery below Trusted by Audiences and use the live header’s Gallery link.
- **Choices for review:** Start with the featured portrait centered between the landscape pieces and outer portraits. Keep the stage lighting fixed and add a soft picture light on hover or keyboard focus. Captions sit beneath their frames. The arrows rotate the framed prints as units. Arrow keys move focus between prints and operate the rotation controls when focused.
- **Reuse:** Each figure holds a print URL, image alt text, transparent frame and HTML caption. To replace a print, update the full-image link, deferred image path and static fallback. Adjust the frame aperture and crop in `wonder-gallery.css` when the frame geometry changes. The lightbox uses the figure’s image and caption, returns focus on close, and supports Escape. The static gallery links directly to the full illustrations.

## 2026-11-14 — Audience Reactions desktop implementation

- **User authorized:** Continue to Section 08 after integrating the gallery.
- **Choices for review:** Use three static paper letters with one shared envelope asset. Label the review placeholders once above the letters. Keep each heading and description editable as HTML over the parchment, with a paper-colored fallback if the artwork is unavailable.
- **Reuse:** Copy the section markup and `audience-reactions.css`. Keep future testimonials verbatim and attributed to a confirmed source once reuse is approved. The shared image loader defers the decorative envelope until readers approach the section.

## 2026-11-14 — How Booking Works desktop implementation

- **User authorized:** Continue to the next section after Audience Reactions.
- **Choices for review:** Use a three-step ordered list with one ornate ticket frame, numbers in the frame’s existing medallions and a static connector between the notches. Keep the copy editable and the CTA visibly demo-only. Reuse the gallery backdrop with a darker wash.
- **Reuse:** Copy the booking markup and `booking-steps.css`. The frame and backdrop load through `deferred-section-art.js` and have native lazy image fallbacks. Adjust the copy and align the medallion numbers and connector if frame geometry changes.

## 2026-11-14 — Before the Curtain Rises desktop implementation

- **User authorized:** Continue through Section 10, the FAQ below How Booking Works.
- **Choices for review:** Set the section title and inquiry link in the left column of a quiet plum theater program. Use fine gold rules and six native disclosures on the right. The first answer starts open. Readers can keep several answers open to compare details.
- **Reuse:** Copy the section markup and `curtain-faq.css`. Edit the summaries and answers in HTML, and point the inquiry link to the intended local destination. Keep the source attribution for facts and confirm event-specific policies before any production use.

## 2026-11-15 — New-chat handoff workflow and hero lock

- **User-approved workflow:** Save a detailed continuation prompt in the original project repository, then give the user one copyable line containing its direct link. Prefer storing required ZIPs/images in the project Google Drive folder and include exact file links/IDs and retrieval instructions in the prompt. The next chat should retrieve/extract inputs itself when its connected tools permit; explain genuine access limits and request manual attachment only as needed.
- **User-approved protection:** The main hero is untouchable unless the user directly requests a change, with needed navigation updates as the standing exception. Read-only reuse/copying of hero beam/smoke textures below it does not authorize altering hero assets or behavior.
- **Scope distinction:** Stage A image briefs describe requested inputs for review, not completed motion or final visual approval. No new aesthetic decision, code integration or publication occurred in this documentation task.


## 2026-11-15 — Stage A image candidates, awaiting review

- **User-authorized scope:** Three separate static Stage A assets only; existing hero and website remain untouched. No artwork approval or implementation approval inferred.
- **Provisional outputs:** Cleaned Experience backdrop and two lavender/ivory smoke candidates, recorded in `image-handoffs/2026-11-15/STAGE_A_REVIEW_RESULTS.md`. Major background geometry visually close with fine generative drift. Both smoke files have true partial alpha but strict fully transparent margins remain unresolved. These are review candidates, not a new approved visual standard.

## 2026-11-15 — Stage A assets evaluated and integrated for review

- **User-authorized:** Evaluate supplied Stage A art, make practical small adjustments and continue existing copied-module build. Existing private Original & Latest page is the delivery route.
- **Provisional implementation:** Experience v2 uses cleaned stage plus independent fixed-origin pointer beams; Show v3 uses a short hover/focus wisp and a smoke reveal into an accessible native dialog with six live concept descriptions. Preserve earlier approved polish, locked hero and original versions.
- **Asset verdict:** No regeneration needed for this prototype. Masters preserved; faint 1/255 alpha residue concealed in new compositing masks. Background generative fine-detail drift remains. Runtime WebP compression preserves size/alpha; visuals/timing await user review.
- **Verification distinction:** Three-size browser layout and interaction checks do not imply screen-reader, real-device/FPS or actual OS CSS preference certification. Full limits: `KEITH_STAGE_A_BUILD_QA_2026-11-15.md`.

## 2026-11-15 — User feedback on lights/smoke and lower-page discoveries

- **User-approved visual feedback:** Moving lights worked great; top sections are successful. Preserve them, with the existing explicit hero lock.
- **User-rejected current effect:** Smoke dissolve is too small for the box and reads as a puff appearing/disappearing. Technical asset readiness is not visual approval. No removal/replacement performed in this ideas-only task.
- **User-requested exploration:** Discoverable magical hover changes lower on the page, such as a light or another feature. New list: `KEITH_LOWER_PAGE_EASTER_EGG_IDEAS_2026-11-15.md`.
- **Proposals only:** Enchanted seal, footer ghostlight/hat shadow, prediction in gallery crystal, invisible ink, runaway frame shadow, escaping ace, ticket corner, unfolding letter, reversing pocket watch, miniature final bow. Assistant recommends testing at most two; no individual concept or asset commission approved yet.

## 2026-11-15 — Requested next-chat smoke rebuild and About curtain replacement

- **User-requested next implementation:** Rebuild smoke across all six Show cards using supplied new sequence; replace the arched About portrait frame with purple curtains revealing the magician, and update the existing Original & Latest comparison. Current turn prepares the handoff/assets only.
- **Target / protection:** Section05 Behind the Curtain (`#about`), not hero or Gallery. Replace copied CSS arch treatment around existing concept portrait; preserve original version, hero lock and successful Experience moving lights.
- **Interaction recommendation, not separately finalized timing:** Curtains start drawn; clear click/keyboard reveal stays open, with close/replay control. Optional hover/focus hint is acceptable to explore; dependable click remains primary. No intrusive hover cycling or biography/form hiding.
- **Smoke acceptance:** Full intended card coverage, actual staged growth/billowing and dense-phase concealment before clearing; the previous small appearance/disappearance puff remains rejected. Atlas readiness/smoothness must be tested, not inferred from alpha validity.
- **Delivery:** Continue version-copy workflow and same private comparison destination. No additional lower-page Easter eggs selected. Detailed task: `NEXT_CHAT_KEITH_REBUILD_SMOKE_AND_ABOUT_CURTAINS_2026-11-15.md`.


## 2026-11-15 — Smoke and About curtain batch

User direction: full-card billowing smoke on all six Show cards; replace About CSS arch with supplied purple/gold curtain, initially drawn, click/keyboard reveal and close/replay. Preserve locked hero, Original, older variants and accepted Experience lights. Implementation choice for review:16-frame proportional-cover smoke with shared hover/click timeline; fixed curtain rod/valance/rails and eight-frame reversible cloth; no full auto-hover opening. Source atlas limitations and actual QA in `KEITH_REVISION_04_QA_2026-11-15.md`; this is implementation for review, not final taste approval.


## 2026-11-15 — User-approved smoke, in-place card backs; curtain choice

User says smoke looks great. Change requested: hover or click smoke reveals detailed text on the back of the same card, without a modal. Implementation for review:180ms hover pause, text stays until Show illustration/Escape, click/Enter/Space fallback; preserve art/grid. User delegates selection among four new curtain sequences. Chosen option4 is the transparent symmetric scalloped purple/gold drapery, replacing hard corners/rails; options and rationale in Revision05 QA. This option is selected by assistant for review, not separately approved by user. Hero and accepted lights stay locked.


## 2026-11-15 — Larger curtain and Pull me cord; ten-second card backs

User-approved: slightly enlarge curtain, replace bottom button with a gold tasselled pull cord and Pull me sign; automatically cloud back to each card illustration after10seconds. Implementation choice:496px cap (~15% larger), code-native gold cord beside stage with click/keyboard/downward-pull activation;10-second reading interval after reveal clears, queued return clouds, manual return retained. No hero or accepted-art changes.


## 2026-11-15 — Audience section visual exploration (not selected)

User approves the current site overall but finds Trusted by Audiences uninspired and requests four alternatives, static or animated. Four separate visual proposals: Royal Circle theater seats, Magician’s Guestbook, Cabinet of Wonder, Constellation of Wonder. Optional motion remains proposed only. Recommend1 for theater/audience fit or2 for a quieter elegant contrast. No user selection or implementation approval inferred; current live build unchanged. Full prompt set and next step in `KEITH_AUDIENCE_FOUR_VISUAL_DIRECTIONS_2026-11-15.md`.
