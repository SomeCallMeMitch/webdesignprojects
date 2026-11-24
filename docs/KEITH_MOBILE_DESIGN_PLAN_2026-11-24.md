# Keith Tyran mobile website concept

November 24, 2026 · Design plan for review

## Scope

Plan a distinct portrait-first website for Keith Tyran, The Gentleman Magician. The current desktop hero, 12-section composition, visual effects and sound behavior remain under the desktop design lock. The user reported that the current desktop page breaks on phones. Tablet behavior has not been verified. This phase covers design decisions and still mockups. Implementation requires a separate user decision.

The current public desktop build is the `keith-page-sound` composition at `15e30cfd686ae78681c4532f70e5e40eb734549d` on `SomeCallMeMitch/keith-magician-website`, branch `codex/cloudflare-preparation`. Live reference: https://keith-magician-website.pages.dev/.

## Phone experience

Use the purple-black theater palette, restrained gold accents, an expressive portrait and the existing split between elegant and playful performance. Give every section a single-column reading order and a clear next action. The first screen introduces Keith, offers one brief interaction and makes the inquiry action obvious. No interaction has to finish before someone can inquire.

| Order | Proposed mobile section | Touch behavior |
| --- | --- | --- |
| 1 | Entrance | Compact name and menu. Portrait first with the chosen reveal. Primary inquiry CTA visible in the first screen. |
| 2 | Choose your event | Stack three readable entries for corporate events, birthdays and private events. Each goes directly to relevant inquiry details. |
| 3 | A taste of the show | One sample card as the featured interaction, with optional access to the other five. Tap to reveal meaningful text. Show basic descriptions independent of motion. |
| 4 | Meet Keith and see him perform | Portrait and concise bio, then a small gallery. Use a short performance clip only if a rights-cleared clip and poster are available. Tap thumbnails for a full-screen photo viewer with visible close and next controls. |
| 5 | Audience proof | Use source-verified client references and approved testimonials. Exclude placeholder reviews from a prospective public mobile build. |
| 6 | Booking and practical questions | Three stacked planning steps and an accordion include the essential answers. The CTA leads to the inquiry section or an approved contact method. |
| 7 | Inquiry | A simple first step with event type, date or flexibility, location and contact. The concept still shows its demo-only status. Production routing and real inquiry handling require approval. |

Offer a compact header with Menu and a clearly labeled CTA. Consider a bottom inquiry button only after the initial CTA scrolls out of view and hide it over the inquiry form and virtual keyboard. Start from 390 × 844 logical pixels. Compose for 320–430 px phone widths and short viewports, including safe areas and 44 px tap targets. Use system reduced-motion settings and visible focus. Sound is optional, off by default and only starts after a deliberate request. Text and inquiries must work with slow assets or disabled motion.

## Four directions to compare

| Direction | First screen | Next interaction | Tradeoff |
| --- | --- | --- | --- |
| A. Pocket Stage | Large layered portrait over an intimate purple theater stage. Two thumb-sized buttons labeled The Gentleman and The Showman. Inquiry button below. | Tapping a persona swaps the portrait with a brief crossfade and changes a few lines of supporting copy. | Closest to the desktop story while being easy to operate with a thumb. Needs matched portrait crops. |
| B. Pick a Card | Keith's name and portrait above three full-sized card backs in a single row. The booking CTA stays visible independently. | A tap flips one card and explains a show experience. A plain-text option offers equivalent access. | The most playful opening. Limit the reveal to one quick beat so the path to inquiry stays clear. |
| C. Curtain Call | Portrait within a plum velvet proscenium. A clearly labeled Reveal Keith control sits below the frame. Booking is visible up front. | A tap briefly opens a small portrait-sized curtain. Additional content simply scrolls below. | Strongest theatrical moment. Use composited curtain layers and a short transition if selected. |
| D. Booking First | Clean portrait, short introduction and immediate inquiry button. Event choices appear earlier than in the other options. | Clear, compact event cards open details. A discrete Show preview offers a secondary action. | Fastest route for people already looking to hire a magician. The interactive effects are lighter. |

**Recommended first prototype** combines A's tap-based portrait reveal with D's fast event and booking flow. If an additional theatrical beat is needed, place one card reveal in The Show. Keep the rest of the page quiet.

## Tablet and delivery plan

1. Test the existing desktop page on real or emulated tablet portrait and landscape sizes before making any routing decision. Inspect the desktop invitation, navigation, gallery and controls with touch. Portrait tablets can trial the phone experience with a wider reading column. Landscape tablets can trial desktop only where targets and interactions work with touch. A screen's width alone does not establish support for mouse-driven controls.
2. After a direction is selected, sketch a complete mobile page and its interaction states, including the initial frame, alternate portrait or reveal, menu, gallery and inquiry. Review short and tall viewports before preparing final assets.
3. Build the approved mobile experience under a separately scoped preview route, such as `/mobile/`, with an explicit way to switch versions during review. Keep the live site unchanged during this design phase. Choose any launch routing only after device testing. Preserve existing deep links and measure the same key visitor actions where the designs overlap.
4. Before release, test at 320, 390 and 430 px, plus an iPad-sized portrait and landscape viewport. Verify Safari and Chrome, touch and keyboard, reduced motion, no audio before opt-in, visible booking access, and a cold load on a throttled connection. Prioritize one optimized hero portrait and defer other art and sound.

## Mockup reading notes

The four generated stills are directional illustrations for the first screen and the start of the next section. Illustrated stand-in portraits and event art are placeholders. Use approved Keith photos during a later asset phase. Button placement, exact wording, individual embellishments, and depicted interaction states are provisional. No phone or tablet experience has been implemented or tested in this planning phase.
