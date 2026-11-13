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
