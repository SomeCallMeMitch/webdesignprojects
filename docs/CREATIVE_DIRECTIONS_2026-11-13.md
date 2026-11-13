# Three Creative Directions — Keith Tyran (for discussion)
**Date:** 2026-11-13 | **Status:** All concepts PROPOSED; no design frozen or implementation approved.
**Premise:** Create an original performance-like site inspired by interaction principles at https://hercmagnus.com/, not its imagery, code, music or composition. Keith's existing persona is approachable, polished and sometimes humorous; the site must work for both corporate and family/private audiences.

## Direction A — The Velvet Reveal (RECOMMENDED FOR FIRST VISUAL EXPLORATION)
**Emotion:** A private theatrical invitation. Refined but welcoming: 'You're in the front row, and something impossible is about to happen.'
**Art direction:** Ink-black stage (#121218), oxblood velvet (#592332), muted antique brass (#C3A16B), warm ivory (#F8F3E9); editorial display serif paired with highly legible modern sans. Precise contrast ratios still require verification. Realistic cloth/silhouette/stage illumination, never clip-art hats or rabbits.
**Hero:** Dark curtain and atmospheric halo behind an *original licensed/placeholder portrait or silhouette*. Headline 'An extraordinary moment for your next event' (copy exploration only) + always-visible 'Check your date'. A mouse position adjusts a broad, low-contrast spotlight within controlled bounds. Keyboard focus on feature elements creates equivalent light cues; on touch, a gentle tap controls a simple reveal. Under reduced motion/low power it is a beautiful static composition.
**Signature interaction:** 'Choose an invitation' — three elegantly rendered invitation/card surfaces labeled Corporate, Celebrations, Close-Up & Stage; clicking flips or slides a card to reveal appropriate event benefits and CTA. It is navigation/education dressed as magic, not a long trick. A single optional smaller illusion below the hero can reveal a message or selected card with a clear Replay/Skip.
**Story:** Curtain rises -> the kind of wonder -> audience reactions -> event options -> reassurance/process -> invitation to inquire.
**Mobile:** Fixed clear CTA, short headline, portrait crop, one tap to glow/reveal, simple stacked cards; no hover-only control or scrolling trap.
**Effort:** Medium (layered gradients/CSS/SVG + accessible card state, minimal JS). **Risk:** Can feel generic 'luxury hotel' if too dark, or perform poorly if using heavy video. Counter by retaining smile, humor, relevant event photography and family-inclusive copy.

## Direction B — The Impossible Invitation
**Emotion:** A mysterious personal letter from an impossibly good host. Less theater, more high-end editorial magic.
**Art direction:** Cream paper (#F5F0E6), near-black plum (#2A202B), copper (#AD694A), ink gray (#39333C); fine-rule ornaments, expressive high-contrast serif headlines, elegant monogram/typographic signature (original only).
**Hero:** Oversized illustrated envelope/playing-card invitation with headline beside it. Opening the envelope (click/tap/Enter) unfolds a surprising yet short transformation: an event-format selector, a quote, or tiny illusion. CTA always visible separate from interaction.
**Signature interaction:** One delightful, optional 'pick a card' reveal; the selected motif becomes the divider/style on the next section. No faux guessing of visitor information; nothing deceptive about booking or privacy.
**Story:** Receive invitation -> impossible moment -> why guests love Keith -> select event -> proof -> inquiry.
**Mobile:** Extremely strong: card interaction works as a clean tap; editorial content prioritizes reading and quick scroll.
**Effort:** Low–medium for design; medium for high-polish illustrated morph. **Risk:** Too calm/print-like to achieve the desired theatrical first impression; requires exceptional illustration/typographic execution.

## Direction C — Two Sides of Wonder
**Emotion:** Formal tuxedo charm meets unexpected playful showmanship. Inspired by photographer's 2026 description of dual personas; **not proof** Keith authorizes/uses this framing.
**Art direction:** Cinematic charcoal (#181820), ruby (#B32449), backstage blush (#E9CCD7), cool mint accent (#CBE8CF); confident contemporary display typography, bold imagery, sharp but graceful transitions.
**Hero:** Two-stage switch 'The Gentleman' / 'The Unexpected' changes pose, backdrop lighting and microcopy. Both states emphasize bookings. A reveal could change a formal pocket square into a playful object via originally authored motion assets.
**Signature interaction:** State switch, scroll-timed scene transitions, optional live 'surprise' Easter egg; never autoplay music. Avoid literal imitation of Herc's rock/speaker toggle and original performance design.
**Story:** Meet both sides -> choose your event -> see reactions -> about/credibility -> inquire.
**Mobile:** Clearly labeled two-state segmented control, one fast crossfade with accessible announcements; state change is optional.
**Effort:** Medium–high; demands multiple coordinated rights-cleared portraits / footage / effects. **Risk:** Brand mismatch, extra shoot/licensing expense, distraction and resemblance to Herc's two-state structure. Use only if Keith confirms brand appropriateness.

## Direction comparison (creative-director judgment, not measured scores)
| Criterion | A Velvet Reveal | B Impossible Invitation | C Two Sides |
|---|---|---|---|
| Theatrical visual punch | High | Medium | Very high |
| Fits 'Gentleman Magician' without brand changes | High | High | Requires validation |
| Mobile clarity | High if reduced to one tap | Very high | Medium-high if simplified |
| Booking clarity | High | High | Medium unless disciplined |
| Asset dependency | Medium | Low–medium | High |
| Risk of Herc imitation | Low | Low | Elevated unless differentiated |
| Prototype speed | Medium | Fast | Slower |

## Recommendation and rationale
**Start with A — The Velvet Reveal**, with the warmth and personality learned from the March photography story rather than a faceless luxury aesthetic. It delivers the lighting theatricality the brief asks for, remains original, translates to mobile, and can be shown compellingly with a licensed placeholder/silhouette before any artist assets are cleared.
**Keep C as a possible 'second act' later**, not the default hero, until Keith's actual brand direction and rights are known.
**Do not select technology or render final media before user chooses a direction.** First compare static composition/mood at desktop and phone plus a written 10-second interaction storyboard. User review gate before functional prototype.

## Visual and interaction decisions awaiting user
1. Select A, B, C, or a precise hybrid. A is recommendation only.
2. First impression emphasis: elegant mystery, joyful charisma, or 50/50?
3. Event priority: broad bookings with corporate near the top, or corporate-first? Marketplace evidence suggests broad use; no automatic luxury-only pivot.
4. Hero signature: reactive spotlight alone, invitation/card reveal alone, or subtle spotlight plus a single optional card reveal? Recommend latter, with tightly limited motion.
5. Sound: recommend **none in phase 1**; if ever added, opt-in only with persistent stop/mute.
6. Photographs/video: concept-safe licensed/commissioned art or permission from rights holders; never scrape and republish Keith photos.
7. Select approval artifact: desktop/mobile still mockups and interaction storyboard (recommendation) before implementation.
