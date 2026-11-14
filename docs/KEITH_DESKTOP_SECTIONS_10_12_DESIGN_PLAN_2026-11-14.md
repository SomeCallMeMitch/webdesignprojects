# Keith Tyran — desktop Sections 10–12 design continuation
**Date:** 2026-11-14  
**Status:** Proposed for review; not user-approved finished visuals or implemented code  
**Repo/branch:** `SomeCallMeMitch/webdesignprojects` / `concept/keith-tyran-magician-experience`  
**Asset source:** [Sections 02–09 Drive handoff](https://drive.google.com/drive/folders/1jLMAO7aEGDxedeusAlLnbKLY5Zn2VCGc)  
**Authority:** `AGENTS.md`, `docs/DESIGN_PREFERENCES.md`, `docs/KEITH_DESKTOP_SECTIONS_02_09_ASSET_HANDOFF_2026-11-14.md`

## Context verified 2026-11-14
- Section 01 is a **separately owned interactive desktop hero** (portrait/pose-changing slider, fixture-anchored moving overhead lights, related card and optional sound experiments). Repo contains `card-reveal-demo.html`, `.css`, `.js`, `hero.js`, and `assets/hero/`. Do **not** flatten, rebuild or overwrite it during below-fold work.
- Sections 02–09 have standalone HTML previews and separate optimized and editable assets in the linked Drive folder. Validated that the full 38,369,017-byte ZIP, lighter 4,104,025-byte preview ZIP, and embedded HTML preview exist. These are good review concepts, **not** locked launch designs.
- Existing HTML preview uses a purple/charcoal/ivory/gold theatrical visual system. Its prototype CSS tokens include ink `#120519`, secondary ink `#210b2b`, plum `#320b3c`, violet `#b855e8`, gold `#dfae65`, ivory `#f9f0e3`. These are *preview styling values*, not independently verified official brand swatches.
- User-confirmed: desktop **only**; future mobile separately designed; retain original independent hero; prefer authentic Keith/performance/audience photography if sufficiently high quality **and authorized**, rather than representing AI-generated audiences as reality; keep assets modular and web weight modest.
- Public existing website checked 2026-11-14: https://www.keithtyran.com/ . It describes illusions, comedy, cards & coins, storytelling, mentalism, mind reading; birthday, corporate, private occasions; close-up, walk-around, stage/parlour formats; customized pricing. Listed published package examples: birthdays 45-minute show + 15-minute close-up, corporate 15-minute show + 75-minute walk-around, private 15-minute show + 45-minute walk-around. These are *current public-site descriptions*, not verified contractual commitments. Site shows inconsistent booking email addresses in different locations (`bookkeithnow@gmail.com` and `kwtyran@gmail.com`), so choose no production destination without client confirmation.
- No approved right to reuse actual photos, reviews, logos or contact data in a speculative published site; no real event inquiry should be sent.

## Proposed Section 10 — Before the Curtain Rises (FAQ)
**Role:** Answer practical concerns directly after the three-step booking explainer, without requiring interaction to reveal core information.

**Layout:** At 1440px+ desktop, centered theatrical **program** panel on subdued deep-plum stage background; left ~34% holds small decorative title, one faint spotlight/curtain edge and a concise booking reassurance; right ~66% holds six generously spaced accordion rows, ivory text and slim gold separators. Use CSS gradients, borders, thin rules and typography; **no new large background image** needed. On wide desktop, panel max width should align with existing Section 09 card/content grid.

**Interaction:** Native semantic `<details><summary>` or accessible button/panel accordions, keyboard operable with focus ring; multiple rows may stay open. No content-blocking entrance animation. Optional tiny glow on open/focus; respect reduced motion. Content remains plain text, not baked into image.

**Proposed questions with evidence-safe answers (draft, not approved claims):**
1. **What types of events can Keith perform at?** “His current site lists birthday parties, corporate events and private gatherings. Tell us about your occasion so the performance can be tailored to it.”
2. **What kind of magic can guests experience?** “Keith describes close-up, walk-around and stage/parlour-style performances, including cards, coins, illusions and mentalism. The right mix depends on your event.”
3. **How long does a performance last?** “Published examples range by event type and combine a short show with close-up or walk-around magic. Your inquiry is the best way to confirm the format and duration for your event.” No fabricated fixed guarantee.
4. **Is the show suitable for children and adults?** “Keith's site describes entertainment for different age groups. Include your audience ages when you inquire so the show style can be discussed.”
5. **How much does it cost?** “Pricing is customized for the event. Share the date, location, approximate guest count and format to request a quote.”
6. **What if my date or venue is not finalized?** “You can still describe your plans in the inquiry. Availability, venue needs and final arrangements are subject to confirmation.” This is a **proposed form behavior**, not Keith's verified policy.

**Avoid:** invented travel radius, response SLA, equipment guarantees, public price, instant booking or refund policy. Better facts can replace these answers after Keith authorizes production.

## Proposed Section 11 — Your Invitation Awaits (inquiry)
**Role:** The clearest end-of-page request path, unlike Section 09 (which only explains stages).

**Visual:** One large original **invitation/ticket composition** echoing Section 09's ornate ticket, but not repeating three separate tickets. Purple curtains frame a lit ivory/plum center panel with fine gold border and small “Tell us about your event” kicker. Right/center has the actual form; opposite side holds a brief respectful invitation and a silhouette/quiet theater motif. All text, labels, validation and buttons are HTML/CSS **not baked into PNG**. Prefer reuse of existing decorative assets/gradients; if a new ornamental transparent panel is needed, export a single background plate with a clean text-free interior.

**Draft title/copy:** “Your Invitation Awaits” / “Let's make your next gathering unforgettable. Share a few details and request a conversation about the right performance.” Avoid implying dates are available.

**Proposed form fields:**
- Required: name; email; event type; event date or “date not decided”; city/venue location.
- Optional: approximate guest count; phone; brief event notes.
- Real HTML labels and validation; explicit consent/privacy language would require an approved production policy.
- Button: **Request Availability**. In concept preview only, the button must visibly disclose **Demo only — no inquiry is sent** and must not report that a real request was delivered. Production recipient, spam protection, handling/retention and confirmation behavior must be decided with Keith before implementation.
- Keyboard tab/focus, input grouping, errors read by screen readers, no hover-only content. Keep layout 2-column on desktop, not a flattened poster.

**Rights:** Do not insert real Keith portraits/photos unless permission and suitable source quality are confirmed. This ending does not need an AI audience image.

## Proposed Section 12 — Final Curtain (footer)
**Role:** Quiet closure and conventional navigation after a dramatic page; no competing animated show.

**Visual:** Subdued rich-plum-to-charcoal curtain fade, subtle gold hairline, very small purple fixture glow. Reuse CSS/texture from earlier sections rather than new heavy illustration. Left: wordmark “Keith Tyran — The Gentleman Magician” marked as concept text treatment. Center: actual section anchor links (The Show, Events, About, Gallery, FAQ, Contact). Right: **contact placeholder or link to original site until authorized destination is agreed**. Underneath: clear small-print concept disclaimer in offline/unofficial review; do not impersonate Keith or claim official copyright for newly created project content.

**Effects:** None beyond restrained hover/focus color transitions. No second audio loop, autoplay, fake stage applause, or excess image downloads.

## Build/editability plan and acceptance gates
1. **Design review:** User reviews this FAQ + inquiry + footer direction. Treat every section name, question/answer and composition above as proposed, not approved.
2. **Asset composition after approval:** Section 10 and footer should be almost all HTML/CSS; Section 11 may need at most one modular visual backdrop/transparent frame. No need to regenerate Sections 02–09 or the hero.
3. **Demo integration:** In a **separate explicitly approved implementation phase**, append 10–12 to the existing Sections 02–09 lightweight preview first, preserving eight previous sections and scripts. Afterwards integrate the independently developed hero using a named seam/isolated CSS/JS assets, not a static image.
4. **Verification:** 1440×900, 1672×941, 1920×1080 desktop; full-page scrolling; anchor offsets under sticky nav; gallery controls/lightbox; FAQ keyboard; form demo/no network sends; full hero slider/lights/sound mute; reduced motion and focus states; no broken asset links; Lighthouse on throttled network. The known 1.81 MiB image figure excludes hero and should remain measured per final build.
5. **Photo migration:** Maintain inventory by section of synthetic placeholders to swap for authorized genuine performance/audience material. Prefer original licensed photos of Keith when available; do not assume publicly displayed photos are free to republish.
6. **Future phase:** Mobile is a *separate designed project*, explicitly out of scope.

## Unresolved before any public website
- Keith/client rights for photos, testimonials, company names/logos; permission and ownership of resulting concept.
- Confirm actual booking destination (two emails appear on current public site), phone/contact, business disclosures, form privacy and handling.
- Which published package/duration claims to show and whether these details are still current.
- Approval of Section 10–12 visuals/content and later permission for whole-site coding/integration.
- Public launch and live form are **not authorized**.

## Recommended immediate next step
Confirm the visual direction of **“program FAQ → single invitation/form → quiet final curtain”**. Then make a desktop-only *reviewable* 10–12 visual/asset kit and a merged 02–12 standalone preview in the later implementation phase, keeping Section 01 independently controlled.
