# Keith Tyran — Desktop Two-State Hero Concepts & Slider Storyboard

**Research and planning date:** 2026-11-13  
**Project / branch:** `SomeCallMeMitch/webdesignprojects` / `concept/keith-tyran-magician-experience`  
**Status:** **PROPOSED FOR DISCUSSION, NOT APPROVED.** Unofficial speculative design, no media license, code, public site or outreach.  
**Authority:** `AGENTS.md`, `docs/CURRENT_DESIGN_DIRECTION.md`, latest `docs/DESIGN_PREFERENCES.md`; prior Velvet Reveal A1/A2/A3 and burgundy/gold visuals are rejected.

## 1. Confirmed user requirements
- Desktop-only design now, no mobile designs, mockups, tasks or responsive-downscaling proposal.
- The key visual structure is Herc Magnus-inspired: **large isolated alpha-backed Keith figure over a dimensional environment**. A **draggable horizontal slider changes Keith's actual pose/appearance and multiple scene layers**, not just background hue.
- Magician-specific dual states, perhaps before/after a magic event, but the exact states are undecided. No musician/speaker portrayal.
- Layered curtains and theatrical spotlights are welcome; Keith's current purple/dark/white branding is authoritative, not an invented oxblood/gold scheme.
- Research/planning only. No copying photographer/Herc/client assets into repo; no contact, coding, publication or deployment without approval.

## 2. Dated live-source observations and qualifications

| Source reviewed | 2026-11-13 finding | Evidence quality / unknown |
|---|---|---|
| [Herc Magnus](https://hercmagnus.com/) | Homepage presents 'From Rock Stage' / slider / 'To Speaking Stage', distinct rock and speaker figure images, music/amp interactions, stage context. | Direct public page text reviewed this session; separate live desktop interaction documented previously at https://agent.tinyfish.ai/runs/6980a73d-2052-43a2-90bc-0c3491ce60a2 . Exact slider image compositing / motion code / pointer light mechanics not established. No proprietary art reuse. |
| [Keith Tyran official website](https://www.keithtyran.com/) | The Gentleman Magician of San Francisco; site names illusions, comedy, cards and coins, storytelling, mentalism, mind reading. Public offers include birthday, corporate, private, close-up / walk-around / stage / parlour contexts. | Direct public page extraction this session; offerings are site claims, not guaranteed show details. |
| [Keith live desktop visual check](https://agent.tinyfish.ai/runs/34b776f5-aaab-4a86-b1e2-5e88253f3400) | Wix desktop page: purple top navigation, dark charcoal / white text, large full-bleed photo at right of Keith with glasses/headset. Other event galleries exist, but not enough clear same-scale portrait pairs could be verified there. | Live read-only visual inspection this session; no screenshot/image asset copied. |
| Live Keith color check above | A visible CSS radial gradient includes `rgb(128,121,255)` = `#8079FF`. Header purple visually estimated `#C169E1`, dark neutral approximately `#202020–#2A2A2A`; white `#FFFFFF`. | Only gradient CSS value is source-confirmed for that role, **not an official master brand token**. Header and charcoal are **approximate**, and colors of original imagery or photos must not be mistaken for brand standards. Earlier 'green-backed photography' is not evidence green is a core interface color. Exact header computed fill still open. |
| [Sarah Eichstedt branding shoot article](https://saraheichstedtphotography.com/2026/03/creative-brand-photography-for-san-francisco-magician-keith-tyran/) | Photographer describes polished tuxedo-stage and playful red-leather alter ego sessions, with both green studio and curtain-set images, white ball manipulation and other prop poses. | Original photographer's March 2026 article and published reference images observed Nov 13; two looks were intentionally shot, but no download/license/identity approval or sufficient pose-matched full-res cutouts has been granted. |

## 3. Three magician-specific two-state narratives

### A. The Impossible Moment — **recommended to explore first**, NOT approved
**Core:** Dragging changes the *moment* in a single trick: the anticipation and the impossible reveal. Avoid depicting a specific real Keith routine without confirming it.

- **State 1 / BEFORE — 'The Setup' (working label):** Keith in tuxedo (or recognized polished suit), visible from above knee or nearly full length, body slightly turned, playful controlled eye contact, one hand displaying a single small object such as a white ball or coin, other hand elegantly open. Expression: 'Watch closely.'
- **State 2 / AFTER — 'The Impossible' (working label):** same recognizably Keith figure, near-same camera height, scale and lens, distinctly more expansive performance pose, grin/eyebrow or delighted expression, open hand and a visual impossibility (ball multiplication/vanish or impossible object location, selected only with real show/photo validation). This is not a second person magically replacing Keith; he changes physical expression and pose.
- **Stage world:** Same spatially credible purple-and-charcoal proscenium/set. BEFORE: narrower soft white key and cool-violet rim, curtains framing, deep shadow; AFTER: stronger purple overhead and subtle lavender backlight, practical visible source, curtains shift enough to expose additional stage depth, modest reveal glow and a second lighting bounce on figure.
- **Slider at 0–100:** At 0 the poised Keith is clear. At ~25 light begins to track and rear curtains subtly separate. At ~45–55 a bright but restrained 'reveal band' / magical shimmer masks a *deliberate pose cut*; **avoid visibly ghosted overlapping faces/hands**. At ~75 the new Keith pose and transformed prop/scene are clear; at 100 lights settle into celebratory reveal. Drag back reconstructs the setup; no required autoplay or delay. Intermediate values are meaningful and deterministic.
- **Copy/CTA:** Headline and 'Request Availability' remain in place. Short optional copy can change from 'The moment before...' to '...the moment they remember.' Avoid misleading visitor into assuming he really performs the depicted trick.
- **Why it wins:** Creates a real suspense/payoff relationship between the visitor's hand and Keith's magic. Strongest repeated-drag 'wow' while keeping one magician identity and original performance language.
- **Risks:** Needs new pose-matched, rights-cleared photography or carefully produced clearly fictional art; difficult hands/props; an AI-generated recognizable likeness without authorization is not appropriate for a published client-facing spec piece. Different image lighting and motion can produce a fake/misaligned photo montage. The specific object/trick must be confirmed.

### B. The Gentleman & The Wild Card — strongest existing-photography inspiration
**Core:** A deliberate persona contrast already explored by photographer; polished magician versus more playful alter ego. The slider changes pose, outfit and expression as well as environment.

- **State 1 — 'The Gentleman':** clean tuxedo/red bow tie, controlled smile and poised reveal gesture, recognizable purple/charcoal surroundings and formal proscenium.
- **State 2 — 'The Unexpected' (working label):** red leather jacket/look shown in March photo story, dynamic cheeky gesture, broad grin and a more open, neon-violet-lit magic workspace; curtains pull further back to show practical props, still appropriate for event bookings.
- **Slider:** direct, smoothly controllable transition with a brief lit stage-obscuration around 50% to permit wardrobe/pose swap. Light and curtains change along with the figure, not an afterthought. Reversible and keyboard-drivable.
- **Benefit:** Real visual difference between two Keith looks; existing portrait references make an asset feasibility discussion concrete.
- **Risk:** It can resemble a rock-star/costume-change theme; user explicitly does NOT want a musician. Red leather should only be used if it reflects how Keith wants his magician persona represented. Two existing photo sessions may differ in focal length/lighting too much for a seamless same-position transition. Treat photography as reference only, not licensed material.
- **Business relevance:** Illustrates warmth and range, but can imply two service products that he does not actually sell; keep labels about personality rather than inventing separate acts.

### C. Close Enough to Amaze ↔ The Whole Room Gasps — clearest services story
**Core:** Same Keith, two real formats publicly described on his website. The slider shows changes in scale and performance energy, not a mere palette toggle.

- **State 1 — 'Up Close':** Keith leaned slightly toward the visitor with a coin/card or ball at eye level, small-scale intimate performance environment, controlled side light and shallow stage depth.
- **State 2 — 'Center Stage':** full-figure Keith in theatrical reveal pose, wider curtains, audience-light suggestion, stronger elevated beam and clearly larger performance set. No unverified fabricated venue/booking clients.
- **Slider:** a visual 'pull back the stage' move. To preserve one physical stage, keep figure face size and perspective aligned; adjust framing for stage-world depth rather than forcing two unrelated camera shots to morph. At midpoint perform a softly masked scene change, not a fake continuous skeletal morph.
- **Benefit:** Visitor instantly understands the range from walk-around to parlor/stage magic, consistent with public service language.
- **Risk:** Less of a magical *moment* than A; can feel like a conventional service-mode toggle. Matching crop/perspective between close-up and full-body is hard.
- **Business relevance:** Could support an optional contextual link to formats further down, but booking CTA remains always visible.

## 4. Proposed desktop composition and spatial rules

**Design canvas:** investigate **1440 × 900** as the first fixed desktop storyboard artboard; also judge composition at a genuinely wide desktop such as 1600 × 900. These are desktop review canvases, not mobile guidance or approval.

1. **Rear architecture:** Original deep charcoal stage wall with an irregular central opening, realistic stage-floor horizon, nonliteral dark-purple side curtains occupying a relatively small edge area; avoid a symmetric generic velvet-landing composition or copying Herc's amps/truss.
2. **Midground:** Separate inner curtain, stage practicals/props if appropriate, distant shadowed stage panels, controlled haze, and physically directional purple illumination that can shift with slider; subtle depth cues distinguish near/far.
3. **Figure:** Extremely prominent rights-cleared/commissioned Keith *cutout*, ideally about 75–85% of artboard height with carefully maintained face position and figure scale across both assets; subtle floor shadow or deliberate stage-light base makes him feel physically present, while head/gesture overlap higher layers for floating effect. Avoid rectangular photo frames, cardboard cutout edges, or unnaturally unsupported feet.
4. **Front layer:** A little foreground atmospheric spill and partial curtain overlap as a depth occluder. Never drape a curtain over Keith's eyes, hands or CTA.
5. **UI:** Brand/wordmark and simple navigation on top; readable copy in a protected negative-space zone, Keith in the center/right; prominent **horizontal slider** near the lower third of the main stage, clearly labeled for both endpoints and with a drag cue; inquiry CTA visible independently (e.g. in header and copy) throughout. Slider is not the booking gate.
6. **Lighting:** One motivated front key, a visually distinct purple rim, and environmental fill that *also changes on Keith's cutout*, not merely a background overlay. Cursor movement can adjust a distant spotlight modestly while leaving type/control contrast stable. Avoid continuous lens flares or strobe.
7. **Accessibility:** Focusable real input/arrow keys and clickable labels with descriptive current state, still fallback under reduced motion, no automatic sound, CTA always accessible. No implementation choice locked.
8. **Performance/rights:** Two quality isolated portraits, compatible lens/camera positions, segmented scene/environment images and controlled crossfades cost less visual consistency than trying to generate arbitrary in-between human anatomy. No copyrighted site assets or protected portraits are included in this planning file.

## 5. Recommendation, decision gates and next visual comparison

**Recommend A 'The Impossible Moment' as the leading **creative experiment**:** it makes the slider a magical event rather than an outfit selector. Consider B as a compelling fallback if the strongest real available Keith portraits are the formal-vs-playful images, and C if event-format clarity matters most. Do **not** conflate A and B without evaluating whether a wardrobe change improves or distracts from the actual illusion.

**Proposed next desktop-only review package (after user chooses a narrative):**
1. Original 1440 × 900 **start-state artboard** showing actual layer structure and negative space, with a clearly labeled non-licensed/anonymous stand-in if no rights are secured.
2. Matching **end-state artboard**, keeping Keith's face location/scale and stage perspective credible.
3. A **five-frame drag storyboard** at 0/25/50/75/100 with portrait/curtain/light/prop/copy changes specified independently, including a deliberate midpoint masking technique.
4. A focused set of two or three **portrait-pair pose sketches or photographic shot-list descriptions**, not a generic new palette or unrelated layout contest.
5. A short **asset/rights checklist**: rights to Keith likeness and photos; whether a new controlled session is possible; isolated full-body resolution; consistent lens/light; props corresponding to real act; original environmental art.

**Two consequential user choices:** (a) Is the transformation a **single before/after magic effect (A)**, **two Keith personas (B)**, or **close-up vs stage (C)**? (b) Should the first concept depict Keith via permission-cleared existing photos, propose a future custom shoot, or use clearly non-Keith placeholder compositions for early artboards?

## Status
Planning/documentation only. Nothing implemented, deployed, published, downloaded/reused from third-party imagery, or sent to Keith. Existing photos and site screenshots are reference material, not content cleared for reproduction.
