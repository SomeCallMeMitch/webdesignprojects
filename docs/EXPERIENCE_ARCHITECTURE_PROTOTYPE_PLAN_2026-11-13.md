# Experience Architecture, Inquiry Flow & Prototype Gates
**Date:** 2026-11-13 | **Status:** proposed plan, not coding authorization | **Branch:** `concept/keith-tyran-magician-experience`
**Purpose:** memorable theater-like brand expression that also helps a real visitor evaluate and request an entertainer.

## Proposed visitor journeys
### Fast path: ready to hire
Land on site -> see what Keith does + location + visible CTA -> select 'Check your date' -> short event inquiry -> receive clear confirmation of *request only*. Do not imply calendar verification or guaranteed availability.

### Exploratory path: needs to be convinced
Land -> optional magic reveal -> 20–40 sec permission-cleared performance/reaction video -> choose corporate / celebrations / weddings and private / close-up or stage format -> source-attributed client feedback and practical FAQ -> inquiry.

### Accessibility / no-effects path
Full headline, service information, testimonials and form readable without animation, JS-dependent visual effects, sound or pointer.

## Proposed IA (single homepage + future supporting pages if warranted)
1. **Hero**: brand, Bay Area relevance, clear value and CTA, optional stage light.
2. **Real reactions**: concise outcome and visual proof; at most one permission-cleared short video (poster first; load on user play).
3. **Choose your occasion**: Corporate Events, Birthdays & Celebrations, Weddings/Private Events; clarify close-up/walk-around vs parlor/stage as *formats*, not necessarily exclusive categories.
4. **Why Keith**: warmth, professionalism, audience involvement, setup and flexibility. Source every factual credibility claim.
5. **What to expect**: three short steps from inquiry to performance; verify practical statements with Keith before publishing.
6. **Reviews/proof**: attributed licensed quotes + platform verification links (if appropriate), public listing examples and approved client logos only.
7. **About Keith**: genuine story and smile; tasteful option for second persona if validated.
8. **FAQ**: event length, venue, guest ages, service area, pricing approach, planning, sound requirements, booking policy, cancellation (verify with Keith).
9. **Inquiry/contact**: short form, optional contact alternatives, privacy note, accessible confirmation, no fake live availability.
Navigation concept: **The Experience · Events · Reviews · About · Check Your Date**. Sticky mobile CTA remains evident without covering controls.

## Inquiry form proposal
**Required for initial request:** event date (allow 'not decided' if sales preference), event type, city/venue area, name, email. **Optional:** estimated guest count, telephone, preferred format, notes/budget. Do not collect unnecessary data and do not silently prefill.
- Use descriptive 'Request availability' or 'Tell us about your event', not 'Book now' if it isn't a confirmed booking.
- Plain language expectations: e.g. 'This sends an inquiry; your date is not held' (wording to confirm).
- Validation inline; keyboard/screen-reader labels; success state after an actual supported send only; no fake send success in a demo.
- Before any production send: owner-confirmed destination email, spam controls, privacy/retention policy, reliable delivery verification and anti-duplicate protections; accessible click-to-call/email alternatives.
- On a publicly shareable unofficial demo, use a conspicuous **Concept preview — no real bookings** label, and disable live contact sending until permission and setup. No prospect name/logo/media misuse.

## Interaction map
| Moment | Desktop | Mobile / keyboard | Fallback |
|---|---|---|---|
| Entrance | Low-contrast radial spotlight tracks pointer with easing; tiny parallax optional | Gentle ambient static glow; tap/reveal; focus-controlled cue | Static hero |
| Invitation / event formats | Click/Enter activates a card reveal | One-tap stacked selector; focus/space/Enter | Plain labeled links |
| Scroll storytelling | Short fade/translate reveal only once; no opaque long wait | Shorter or none | Content present from start |
| Reviews | Native readable carousel or stacked quotes; user controls | Swipe plus visible buttons, never auto-rotate | All quotes readable in document |
| Booking | CTA visible before and after effects | Thumb-friendly persistent but non-obscuring button | Direct anchor to form |

## Proposed production-quality acceptance criteria for later coding agent
**No code is authorized yet.** These are future gates.
- **Accessibility:** WCAG 2.2 AA target; keyboard through every control, visible focus, logical headings, alt text, touch targets 24x24 CSS minimum (prefer 44x44), actual contrast verified, form errors announced, reduced-motion static alternative, no flashing or unexpected audio. Test with screen reader.
- **Mobile:** True rendered device/viewport tests at 320/360/390/430px, 768px and 1280/1440px; hero CTA visible, no horizontal overflow, forms usable, no interaction dependent on hover, light never interferes with scrolling or taps.
- **Performance:** Field-target Core Web Vitals LCP <=2.5s, INP <=200ms, CLS <=0.1 at 75th percentile; for prototype measure lab mobile and desktop, not claim actual field scores. Initial target hero responsive image <=300–450KB when feasible; below-fold media lazy loaded, video click-to-play. 60fps-ish desktop animation with no long tasks, minimize expensive repaints, effects disable gracefully on slow devices.
- **Conversion:** clear event fit within 5 seconds; first actionable inquiry CTA without effect completion; same CTA language across sections; source-backed proof and clear follow-up expectation. Measure later via consent-respecting analytics only after approval, not assume lift.
- **SEO:** indexable semantic copy, one H1, relevant Bay Area/event service terminology based on truthful copy, descriptive metadata, canonical logic, structured data only for genuine applicable facts (no fabricated reviews or events).
- **Maintainability:** reusable CSS tokens and components, avoid overengineering before proof of visual quality; stable media licenses and attribution inventory; no borrowed Herc JS/audio/creative assets.
- **Verification:** cross-browser Chromium/Firefox/WebKit where available, no console errors, high/low motion mode; manual keyboard and phone walkthrough; automated Lighthouse reports; visual screenshots against approved comps.

## Asset rights & prototype safety
- Use original generated/illustrated placeholder **that does not falsely depict Keith** or commission/license appropriate assets. A shadow silhouette and abstract props are safer for initial moodboards.
- Sarah Eichstedt photos (https://saraheichstedtphotography.com/2026/03/creative-brand-photography-for-san-francisco-magician-keith-tyran/) show a useful palette/persona direction, **not** a reusable asset pack without rights.
- Keith's website photos/logos/testimonials and videos are copyrighted/third-party material. Do not copy into repo or publish.
- Any reference to Meta/Google/etc. must be labeled as Keith's own marketing claim unless verified and approved for commercial display.
- Keep demo local/private until user explicitly approves public preview; include unaffiliated concept notice if shown.

## Staged plan / approval gates
0. **Planning completed here:** site/market read, three directions, initial architecture and acceptance criteria; actual mobile audit remains open.
1. **User decision (next):** pick direction, relative mystery vs playful tone, hero interaction, primary audience. No build.
2. **Visual review:** produce 3 distinct original static desktop/mobile compositions or detailed wireframes and 5–10 second interaction storyboards; compare and revise. Avoid final client portraits until rights.
3. **Interaction prototype scope approval:** make *one* narrowly scoped hero interaction and a usable booking-path mock. Only after explicit permission, hand to Codex to code an isolated nonpublic prototype.
4. **Review & QA:** screenshot parity, real phone/desktop, reduced motion, accessibility/performance; evaluate delight against CTA reach.
5. **Optional later expansion:** secondary sections, testimonials, approved media and final form integration; no production publication/client contact without consent.

## Next user decisions that materially change work
- Creative direction A/B/C or custom hybrid?
- Should first-view imagery feel like a velvet stage, a personal invitation, or double-persona performance?
- Equal focus on corporate and family bookings, or a consciously chosen business priority?
- Demo should emphasize visual drama or a single playful interactive trick first?
- Are there already licensed photos/videos or do we design around original/placeholder assets?
