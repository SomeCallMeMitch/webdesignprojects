# Keith Tyran — Current Site, Audience & Market Audit
**Research date:** 2026-11-13 | **Status:** planning evidence, not a commissioned client audit | **Branch:** `concept/keith-tyran-magician-experience`

## Method and verification boundaries
- Read repository project context and previous Herc Magnus analysis.
- Read the public Keith Tyran homepage, marketplace profile/indexed listing, 2026 third-party photography story, 2026 San Francisco Public Library event, and selected Bay Area competitor sites.
- Performed one read-only live browser inspection of desktop Keith homepage on Nov 13; see run log: https://agent.tinyfish.ai/runs/21a2a8a8-fdbf-4019-a25d-35f7cc6250db . No login, form submission, outreach, or edit.
- **Mobile was NOT tested**: browser couldn't resize/emulate a phone. No direct page-speed, accessibility, SEO metadata, funnel analytics, or cross-browser audit. All mobile concerns are hypotheses for later verification.
- Recheck dated marketplace metrics and claims before using them in pitches or actual website copy.

## Evidence ledger
| Item | Observation (November 13, 2026 unless specified) | Source | Confidence / caveat |
|---|---|---|---|
| Keith site | `https://www.keithtyran.com/`: six nav labels HOME, ABOUT KEITH, THE SHOW, PRICING, MY CLIENTS, BOOK; hero with 'Gentleman Magician'; service cards for birthday, corporate, private; contact via phone/email; client imagery and quotes | https://www.keithtyran.com/ | High for publicly visible copy, not for operational claims |
| Platform | Desktop inspection found Wix widgets and Wix static image CDN, purple navigation, dark/light split hero, sliders, Wix chat | Same URL; live read-only run linked above | High for observed desktop; no performance measurement |
| Booking | Homepage offers BOOK NOW / BOOK KEITH / CALL / EMAIL; visible text includes two different emails (`bookkeithnow@gmail.com`, `kwtyran@gmail.com`) | https://www.keithtyran.com/ | High for display; whether both inboxes are monitored is unknown |
| CTA test | Browser agent clicked one BOOK NOW control without perceiving a state/navigation change | Live read-only run above | Inconclusive; do **not** label definitely broken until reproducible |
| Offer formats | Birthday listed as 45-minute show + 15-minute close-up; corporate 15+75; private 15+45; custom quote | https://www.keithtyran.com/ | Public offer statements; actual availability/price can change |
| Thumbtack | Platform listing shows 98 hires, 56 reviews, 5.0 stars; Top Pro; describes stage, close-up, walk-around, weddings and family events | https://www.thumbtack.com/ca/san-francisco/magicians/gentleman-magician/service/482555032101085192?spotlightWebMarkupEnabled=1 | Platform-reported count; indexed page could differ from live JS-protected view |
| Thumbtack pricing | Public FAQ advertises $350 for birthday parties in SF, $400 corporate in SF, variable by travel | same Thumbtack URL | Listing snapshot, **not** a live quote and not a recommended price |
| Review themes | Visible 2026 marketplace reviews describe adult birthdays, family occasions, wedding walk-around, politeness, punctuality, interaction, comedy | same Thumbtack URL | Public review texts are third-party submissions; obtain permissions/attribute before direct quotation |
| Shows/year | 120/year appears on Keith's own Thumbtack description | same Thumbtack URL | Self-reported, **not** audited independently |
| Client/venue claims | His own website names Meta, Google, NASCAR, SF Symphony, etc. | https://www.keithtyran.com/ | Business claims; individual client use/logo rights not independently verified |
| Independent event | San Francisco Public Library Parkside Open House announced Keith show at 1:15 pm on Oct 3, 2026 | https://sfpl.org/events/2026/10/03/celebration-open-house | High confidence listing existed; attendance/payment not proven |
| Photography | Sarah Eichstedt's March 2026 story describes photo library and two personas: formal stage and playful late-night alter ego | https://saraheichstedtphotography.com/2026/03/creative-brand-photography-for-san-francisco-magician-keith-tyran/ | High for photographer's story; **no license** to reuse imagery or assume red jacket is Keith's active brand |
| Social media | Desktop DOM linked to Instagram `https://www.instagram.com/keithtyran/` and an X/Twitter icon | https://www.keithtyran.com/ ; live run above | Existence of link observed. Follower count, account status, recency and engagement **not verified** |
| Reference | Herc Magnus provides a two-state hero, interactive amp/music and guitar metaphor | https://hercmagnus.com/ ; repo `docs/REFERENCE_SITE_ANALYSIS.md` | Direct interaction themes; exact light implementation unknown |

## Current experience: what works
- A clear, memorable 'Gentleman Magician' persona, expressive portrait, and direct service options.
- Specific show format/duration examples; visual performance archive; multiple ways to get in touch.
- Stronger external booking proof than many new entertainer concepts: Thumbtack platform counts and specific recent reviews.
- Wix image CDN supplies optimized formats; this does **not** itself prove Core Web Vitals results.

## Most meaningful improvement hypotheses
1. **Turn the first impression into a performance:** a subtle reactive spotlight and original, opt-in reveal, while keeping headline and inquiry CTA visible immediately.
2. **Make hiring feel easy:** one recognizable 'Check your date / Request availability' action from every key section, leading to short inquiry form with event type, date, general location, guest size and contact; don't imply real-time calendar availability.
3. **Make third-party credibility legible:** review themes, properly attributed real testimonials (permission/usage review), proof links and event types; avoid anonymous quotes with no context.
4. **Differentiate formats:** close-up/strolling, short stage/parlor, corporate, birthdays, weddings/private celebrations; only promise services Keith actually confirms.
5. **Reconcile booking details:** visible two-email inconsistency; verify correct contact, tested confirmation workflow and spam handling before any real deployment.
6. **Preserve broad fit:** 2026 reviews include birthdays, kids, mixed-age celebrations and weddings, while site also courts corporate planners. Do not automatically reposition Keith as luxury-only.
7. **Visual coherence:** existing bright purple / green photography is lively but doesn't consistently communicate an elegant theater; a richer palette could enhance recognition without eliminating humor.
8. **Separate assets and rights:** photographer's 2026 portraits are promising creative reference, not automatically licensed website/demo content.

## Audience hypotheses (to validate with Keith, not assumed facts)
| Segment | What visitor needs answered quickly | Design consequence |
|---|---|---|
| Corporate planner / office host | Will this be polished, audience-safe, low-stress, adaptable to group? | Professional proof, walking-vs-stage guidance, short quote flow, clear event logistics |
| Adult birthday/private host | Is it surprisingly fun, what does it look like, how long and what's involved? | 20–40-second permitted performance clip, format comparison, authentic reactions |
| Parent/family host | Age suitability, engagement, cost and easy setup | Warm tone, all-ages information, transparent expectations; do not look intimidating |
| Wedding/celebration planner | Can walk-around fill gaps without disrupting program? | Reception examples and simple timing explanation |

## Competitive website lessons (web copy review, not live mobile audits)
- **David Martinez:** https://www.davidmartinezmagic.com/ — 'zero stress' promise, reception vs stage vs MC use cases, explicit 3-step hiring process, repeated Check Availability. Lesson: remove anxiety for planners.
- **Tom Collett:** https://tomcollettmagic.com/ — immediate Check Availability + Watch Demo, audience reaction imagery, clear event categories, easy setup. Lesson: show the reaction, not just props.
- **Kevin Blake:** https://kevinblakemagic.com/ — very strong media/press and ticketed-show proof plus separate corporate hire journey. Lesson: borrow credibility hierarchy, not claims.
- **Matteo Cammisa:** https://matteocammisa.com/locations/san-francisco — luxury-first visual/storytelling and published pricing language; not necessarily a comparable market tier. Lesson: typography restraint and service-specific intent; do not assume Keith shares price tier.
- **Herc Magnus:** https://hercmagnus.com/ — a self-contained metaphor with meaningful state changes and user-initiated sound. Lesson: hero interaction should express Keith's identity, not be a copied guitar/amp gimmick.

## Important unknowns / risks
- No real mobile rendering or conversion data; do not write 'mobile currently broken'.
- Instagram/X/YouTube follower metrics, active posting cadence and engagement remain unverified, despite links.
- Current site may be under redesign: March 2026 professional photography investment makes that a real possibility, not proof.
- No client participation or authorization; approval of any outward-facing pitch or reuse of assets required.
- No proof of Keith's income or budget; 98 marketplace hires do not imply a particular conversion rate or earning figure.
- Need verified accurate phone/email, pricing policy, allowed quotes, corporate logo rights, video and portrait licenses before any client-ready site.

## Next fact checks
1. Inspect true 390px mobile and 1440px desktop with screenshots/screen recording; audit accessibility, navigation, CTA outcomes, booking and core metrics.
2. Verify which booking action works and whether emails differ intentionally.
3. Look up current posts and links on Keith's official social accounts with direct platform evidence; do not infer inactivity from search silence.
4. Confirm source/rights for photographs, event videos and testimonials if Keith agrees to a project.
5. Record source-specific dates and distinguish published copy from actual booked activity.
