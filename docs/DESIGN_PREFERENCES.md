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
