# The Velvet Reveal — Detailed Design Exploration
**Date:** 2026-11-13 | **Project:** Unofficial Keith Tyran / Gentleman Magician site concept | **Status:** EXPLORATION, not final specification and **NOT authorization to code**
**Branch:** `concept/keith-tyran-magician-experience`

## Decision status
- **User-confirmed (2026-11-13):** Explore Direction A, 'The Velvet Reveal', in more detail and compare visual/interaction alternatives. Do not start implementation.
- **Not yet approved:** A1/A2/A3 variation, palette, words/typography, timing/effects, photo/video approach, booking workflow or prototype scope.
- **Creative-director recommendation, not user decision:** A2 Living Spotlight as core, A1 restrained velvet framing, A3 one optional close-up reveal further down page.

## Intent and strategy
Create the feeling of entering a private theater, where a polished performance is already underway. The site itself should express a surprising touch of magic, but visitor agency, readability, inclusive event positioning and straightforward inquiry are always first-class. Do not imitate Herc Magnus's split-state selector/guitar/amp or reuse its imagery, layout, code or music. Avoid ubiquitous magician clichés (rabbit, hat, gratuitous playing-card confetti, casino motifs, excessive gold foil).

Keith currently serves corporate *and* private/family audiences according to public site and marketplace information. The tone can be elegant without suggesting exclusive luxury/high-price-only entertainment. Authentic humor and a friendly portrait/reaction footage (if licensed later) are what humanize the dark theater concept.

## Three variations within A
| Variant | Composition | Key effect | First impression | Conversion tradeoff | Complexity |
|---|---|---|---|---|---|
| **A1 — Grand Entrance** | Centered, almost symmetrical stage; full red velvet proscenium, center silhouette or figure; headline beneath/over stage | Curtain parts slightly; gold stage light warms; optional reveal | Most immersive 'arriving at theater' | Full stage can hide CTA, feel like theater venue, mobile crop expensive | Medium-high |
| **A2 — Living Spotlight** | Asymmetric editorial split: left copy and strong CTA, right atmospheric performance portrait/silhouette, curtains as thin framing | Mouse-reactive illumination on visual area, focus-aware highlights; smooth reveal cues | Most balanced prestige + personal performance | Needs exquisite typography and imagery to avoid generic premium landing page | Medium |
| **A3 — Close-Up Encounter** | Black velvet tabletop with invitation/card/small object; surrounding copy and performance evidence | Visitor selects object and gets surprising reveal | Highest interactivity and curiosity | Action could feel like game, delay request, or misrepresent whole-act scope | Medium-high |

**Proposed synthesis:** A2's always-visible headline and CTA, 10–15% of A1's dramatic curtain framing, and A3's optional, accessible 'invitation' reveal below hero. No heavy curtain-opening loading screen. Do not add continuous particle systems or WebGL by default. Stage metaphor must support Keith's actual services, not just a visual trick.

## Palette candidates to compare
**V1 Classic Velvet (leading proposal):** ink `#121218`, velvet oxblood `#592332`, muted brass `#C3A16B`, warm ivory `#F8F3E9`. Mood: intimate, refined, classic.
**V2 Midnight Illusion:** graphite `#111820`, blue-black `#1D3540`, champagne `#CFB57E`, chalk `#F4F0E7`. Mood: modern, mysterious, less traditional theater; may lose velvet identity.
**V3 Warm Cabaret:** espresso `#241A1A`, garnet `#842D43`, soft copper `#C47A56`, linen `#FFF1DD`. Mood: playful, warm, suitable for all ages; risks looking like hospitality/bar website.
Colors are proposed hex starting points only; not contrast-checked. Every text/background/button pair requires measured AA validation; gold is mostly decoration or on dark panels with testing, not automatically acceptable for tiny text.

**Typography proposals:** expressive but restrained high-contrast serif for hero ('Cormorant Garamond' or alternative if license/legibility validated), legible neutral sans for practical information ('Manrope' or equivalent, license to verify). Do not use extremely thin serif weights on mobile, sentence copy or small fonts. Avoid faux-Victorian circus styling. Proposed logo/wordmark is typographic and original, not a copied mark.

## Detailed desktop composition — A2
**Viewport reference:** start at 1440×900; also design a coherent 1280×720 without cropping the only CTA.

- Top of page: unobtrusive concept-only status for any shared unaffiliated mockup; original typographic 'The Gentleman Magician' on left, navigation `Experience · Events · Reviews · About`, restrained gold-outline `Request Availability` at right. Sticky nav only after scroll if useful; no massive overlay.
- Background: primarily ink black with subtle burgundy fabric entering from upper-right and far-left edge; theatrical beam on stage-right. Atmospheric textures original or properly licensed, sparse enough for accessible contrast.
- Editorial copy on left (approx 43% of width): eyebrow `KEITH TYRAN · SAN FRANCISCO MAGICIAN` (label must be verified before public use); original headline draft `A little wonder. A lasting impression.` Subtext draft `Magic, wit and unforgettable moments for the people you bring together.` Hero primary CTA `Request Availability` (concept demo not live), secondary `See the Experience` (scroll to demo area, only live once media available).
- Visual stage on right (approx 57%): rights-cleared portrait if later available; for visual concept, original anonymous/abstract silhouette, intentionally not a likeness of Keith. Rim lighting from upper-left of portrait, soft brass highlight, velvet gradient; avoid cutout floating body/uncanny composite.
- Near fold: succinct verification-friendly bridge, e.g., `Corporate celebrations · Private parties · Walk-around and stage magic` (confirm exact actual categories) and small cue `Your next event deserves a moment of wonder.`
- Distinct visual rhythm below fold: burgundy/ink hero -> warm ivory or desaturated dark review proof strip -> rich editorial event section -> dark intimate invitation reveal -> ivory practical inquiry/FAQ, avoiding an endlessly black page.

**Copy is draft advertising language only**. No real client quotes, brand logos, fabricated review counts, guarantees, live availability or contact forms will be published from this concept.

## Detailed mobile composition
**Reference:** 390×844 primary, check 320/360/430 and landscape later. Mobile is a deliberately composed version, not a squashed desktop stage.

- Slim header with wordmark, menu and clearly visible access to inquiry; hero headline in 2–4 readable lines (not arbitrarily squeezed), CTA near first fold.
- One rights-cleared vertical image/illustration crop with lighting halo and side sliver of velvet; visual can appear behind the headline only if contrast maintained. Do not require a visitor to tap just to see information.
- Do not simulate mouse-follow on mobile. Optional tap to illuminate a prop/card; no accidental scroll capture or gyroscope permission.
- After user scrolls beyond hero, compact sticky inquiry button if it doesn't obscure content, browser navigation, keyboard, or focus; honor safe areas.
- Occasion cards stack as text-first buttons; any reveal provides concise information and a clear next step.
- Subtle animation can use shorter crossfades; reduce/disable for reduced motion. No autoplay audio or video.
- For small screens, do not force 100vh image, giant curtain, delayed hero text, or hiding booking behind a menu.

## Interactions ranked by value
| Idea | Purpose | Proposed behavior | Accessibility / performance | Recommendation |
|---|---|---|---|---|
| **Living spotlight** | Memorable art direction | Broad soft halo follows pointer in bounded hero visual zone, never masks or pursues text, eases gently and settles when idle | Focus-based highlight; static reduced-motion/low-power fallback; prefer transform/opacity over animating expensive layout; test compositing | **Hero signature — proposed** |
| **Velvet edge reveal** | Stage metaphor | Small introduction of curtain depth/side slit once when loaded; NOT a mandatory full curtain-opening gate | Static frame immediately visible; stop on preference/visibility; avoid flashing | **Low-intensity secondary** |
| **Invitation reveal** | Meaningful discovery | Short label `Choose your occasion`, 3 clearly labeled tactile invitation tiles: Corporate, Birthdays & Celebrations, Weddings & Private. Choice unfolds relevant format description and inquiry CTA | Click/Enter/Space, screen reader expanded state; no random outcome, no fake mind reading; normal links in static mode | **One opt-in interactive beat, below hero** |
| **The Prediction** | Optional true magic Easter egg | A deliberate later micro-illusion independent of inquiry (e.g. vanishing card leaves a personalized-sounding but generic message) | Must not fabricate knowing visitor details; replay/skip; fully optional; no keyboard trap | **Defer** |
| **Scroll reveal** | Pacing | Low-distance, once-only opacity/translate for media and section dividers | Content readable without animation, no giant blank wait | **Use sparingly** |
| **Soundscape** | Atmosphere | Muted by default; control to opt in/out if added | User initiation only, persistent stop | **Exclude initial scope** |
| **Particle fog/WebGL** | Spectacle | Potential textured beam in full GPU rendering | High energy/cost, accessibility concerns, hard mobile reliability | **Avoid unless simpler solution visibly fails** |

## Proposed 0–10 second hero storyboard — *descriptive, not implementation*
| Time/trigger | Visual state | Business/UX requirement |
|---|---|---|
| On first paint | Hero is *already legible*: headline, CTA, stage still and overall composition visible. | No intro loading gate |
| After ~0.3–0.6s if motion allowed | A narrow highlight or ambient beam gently settles; restrained contrast—not a bright sweep over copy | CTA remains in fixed position |
| First pointer move in visual area | Light blooms/offsets subtly within a bounded region, eased as theater operator adjusting a lamp | No cursor following text or trigger that blocks scroll |
| Keyboard focus or touch | Intentional focus glow or tap activated cue approximates effect | Equivalent experience, not identical physics |
| Primary CTA clicked | Direct anchor to inline inquiry section (mock demo makes it non-sending) | No illusion gate or fake booked state |
| Visitor scrolls to 'Choose your occasion' | Three invitation tiles available; one optionally unfolds relevant content quickly | Inactive choices still accessible, replay/change allowed |

Timings are proposals to communicate rhythm and must be adjusted after visual test; neither film nor animation approval.

## Visitor path / page rhythm
1. **Hero:** theatrical first impression, clear location and promise, inquiry access.
2. **Short proof/preview:** opt-in video/reaction evidence when rights cleared; never claim currently available footage.
3. **Find your occasion:** 3 meaningful event types, short descriptions and format suggestions. Avoid confusing 'close-up' (format) with 'wedding' (occasion).
4. **Optional reveal:** a single invitation/cards moment so exploration feels magical.
5. **Proof and reasons to trust:** externally verifiable sources, licensed/approved testimonials and corporate client claims only after approval. Friendly warmth.
6. **How it works:** brief inquiry -> discuss format -> confirm privately. No promises of instant availability.
7. **About:** human personality, portraits, actual experience and tasteful humor.
8. **Inquiry and FAQ:** straightforward event type/date/location/contact, notes; accessible confirmation after real delivery only.

**CTA proposal:** `Request Availability` or `Check Your Date` must link to an inquiry, not portray a live calendar. For an unofficial concept, never send leads to Keith. Use a labeled non-sending mock with no fake success confirmation if preview is eventually approved.

## Technical feasibility guidance (for future Codex brief ONLY; no code here)
- Prefer layered CSS backgrounds, gradient/light overlay, SVG mask or composited image glow with bounded transforms; test before introducing any animation dependency.
- Keep pointer motion decoration separate from semantic controls. Use opacity/transform where possible; continuously animating backdrop filters, shadows and gradient position can be costly. Benchmark on real phones/lower-end devices before selecting technique.
- If choosing a library later, prove that it is justified. Don't prematurely choose Next.js, GSAP, WebGL, React or a rendering platform.
- Source and rights inventory for all portraits, fonts, video, sound, review quotes and logos; no copies from Keith or Herc without explicit rights.
- WCAG 2.2 AA baseline as in `docs/EXPERIENCE_ARCHITECTURE_PROTOTYPE_PLAN_2026-11-13.md`; motion-related WCAG 2.3.3 is AAA and opting to honor user reduction preference is a quality commitment beyond AA. Review W3C references:
  - https://www.w3.org/WAI/WCAG22/Techniques/css/C39 (reviewed Nov 13, 2026; W3C technique demonstrates `prefers-reduced-motion`)
  - https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions (reviewed Nov 13, 2026; explains user-controlled motion)
  - https://web.dev/articles/animations-guide (reviewed Nov 13, 2026; performance recommendation to prefer transforms/opacity and test paint cost)
- Future QA verifies 320px reflow, keyboard/focus, screen reader, page/hero loading time, non-blocking CTA, touch scroll and no unwanted audio.

## Visual review package to create after user selects variation
1. Three **original static desktop hero comps** at 1440×900 comparing A1/A2/A3 and which interaction their stage depicts (no cloned reference creative).
2. Three companion **mobile crops** at 390×844, no hover-only affordances.
3. Palette strip with V1/V2/V3, suggested heading/body type specimens, two hero copy choices.
4. A 6-frame interaction storyboard for spotlight + occasion reveal, including reduced-motion baseline.
5. A source/asset register distinguishing inspiration vs licensed/owned content and a 'concept, not affiliated' notice.

Do not write code, publish, deploy, contact Keith, generate a misleading likeness, or make live site changes in this phase.

## Decisions requested from user
1. Does **A2 editorial Living Spotlight with restrained A1 curtains** feel like the right base, or lean into A1 grand stage/A3 close-up table?
2. Choose tonal balance: **mystery-forward**, **warm/showman-forward**, or equal.
3. Choose interactive centerpiece: **spotlight + event invitation** (recommended), **spotlight alone**, or a **more elaborate optional mini trick**.
4. Palette starting point: Classic Velvet V1 (recommended), Midnight V2, or Warm Cabaret V3. No need to decide exact fonts yet.
5. Scope of first review: original static desktop/mobile comps and short storyboard (recommended) before a clickable demo.

## 2026-11-13 — Superseded by user correction
**Historical exploration only:** The A1/A2/A3 variations, recommended A2+restrained curtains+optional invitation, the proposed V1/V2/V3 palettes, 390px mobile designs and the planned original desktop/mobile comparison package were **not accepted**. User explicitly wants closer fidelity to Herc Magnus's **floating foreground portrait, layered atmospheric stage and appearance-changing slider**, while retaining **Keith's existing website palette**. **Desktop-only** now; mobile is a future **separate custom design**, not a responsive shrink of desktop. Do not reuse this document as the active concept brief. See `docs/HERC_DESKTOP_HERO_REFERENCE_AND_DESIGN_RESET_2026-11-13.md`. No implementation authorized.
