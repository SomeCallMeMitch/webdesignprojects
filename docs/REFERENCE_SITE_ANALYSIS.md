# Reference site research — Herc Magnus (https://hercmagnus.com/)

**Inspection:** 2026-11-12/13 via public homepage fetch and read-only live browser interaction. **Purpose:** reproduce *ideas and interaction principles* with original work, not copy.

## What was directly found
- Site presents a rock-stage identity and speaker/professional identity. The hero has controls labelled **FROM ROCK STAGE** and **TO SPEAKING STAGE**; switching changes hero state, associated imagery and selector indication.
- The homepage presents dramatic stage-style lighting/haze, an amplifier and an interactive concert metaphor.
- A user-triggered **Turn on the amps (starts the music)** control changes state (e.g. 'AMP IS ON') and starts music. A separate hero music control references **Pretty Shade Of Blue** by Hollywood Assassyn.
- It offers guitar-string drag interaction (six strings, standard E-to-E), with playful achievement/easter-egg messaging.
- The inspected DOM included classes or selectors such as `ss-l`, `ss-r`, `amp-hit`, `herosnd`, and page sections `#hero`, `#short`, `#built`, `#stage`, `#music`.
- Images included `herc-rock.webp` and `speaking-lit.webp`, along with other optimized image assets.
- No clear React, Next.js, Vue, Astro or WordPress generator fingerprint was detected in the page elements examined. No visible canvas element was detected by that inspection.
- The site uses substantial browser-side interaction. CSS transitions, HTML5 audio and pointer-driven JS are plausible implementation primitives.

## What remains NOT verified
- Exact source code; script and stylesheet URLs were not successfully extracted in the browser inspection.
- Exact framework or build pipeline; hosting/CDN; animation package; whether lights are CSS gradients, SVG or other image layers; exact audio/synthesis mechanics.
- The specific mouse-over-nav light movement was visually suggested but **not conclusively isolated** during the automated hover test. Do not assert its exact implementation.
- Genuine live-user count behind the guitar achievement; a UI message does not establish an actual analytics counter.
- The author says he uses AI to build software, but which AI tool was used for this site is unknown.

## Creator / AI methodology
The creator wrote **'I've shipped twelve apps and I don't write code'** (2026-06-11), describing AI-assisted implementation with his own architectural/design direction and prior software-building experience. This supports a general AI-assisted development method, not a claim that the same model/framework built this specific site.
Source: https://hercmagnus.com/blog/twelve-apps-no-code/

## Design lessons transferable to magician concept
- Build a coherent performance-themed interaction metaphor, not random decorative animation.
- Let the visitor trigger audiovisual effects; user action is the consent gate for sound.
- Use a hero interactive comparison only if it communicates a story or service distinction.
- Reward discovery with small delightful surprises, but keep main content, CTA, keyboard navigation and mobile straightforward.
- Use tasteful animation and layering: responsive spotlight, card reveal, show transition, handoff to clear booking action.
- Make interactive features optional and degradable under reduced-motion, slow connections, older devices.

## Reference links
- https://hercmagnus.com/
- https://hercmagnus.com/blog/twelve-apps-no-code/
- Research gathered from public fetch and live browser inspection Nov 12/13, 2026. Reinspect before relying on exact behaviors or technical implementation.

## 2026-11-13 — Focused desktop hero revisitation (see new authoritative correction)
**Primary URL:** https://hercmagnus.com/ ; **read-only session:** https://agent.tinyfish.ai/runs/6980a73d-2052-43a2-90bc-0c3491ce60a2
- The full desktop hero is a **layered stage scene** with amp/truss/haze/light background, **independent alpha-backed foreground Herc cutout**, text/UI layer and a prominent horizontal 'From Rock Stage' ↔ 'To Speaking Stage' slider.
- Rock state: Herc in lively guitar performance pose (`herc-rock.webp`), vivid concert lighting and amps. Speaking state: different clean grayscale arms-crossed portrait (observed filename `herc-clean-720.png`), softer professional atmosphere and different CTA.
- Slider movement visibly changes **person's appearance + scene + lighting + contextual purpose**, rather than only coloring a background. Partial middle appearance was seen, but implementation of continuous crossfade and the exact source technique remains **unverified**. Do not claim definitive CSS/canvas mechanics.
- This corrects the previous creative interpretation: the important fidelity is the cutout portrait and stateful slider, not generic red velvet curtain/backdrop.
- **User revised priority:** Desktop only now; future mobile must be designed specifically in a separate phase; use Keith's existing palette rather than new black/oxblood/brass schemes. Full handoff: `docs/HERC_DESKTOP_HERO_REFERENCE_AND_DESIGN_RESET_2026-11-13.md`.
