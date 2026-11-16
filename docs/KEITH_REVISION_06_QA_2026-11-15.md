# Revision 06 — larger curtain, tasselled pull cord, ten-second card returns

User requested a slightly larger About curtain, a gold cord with tassels and a “Pull me” sign replacing the bottom button, and another smoke cloud restoring each card after ten seconds. Implemented in copied Show v6 and About v4; current recipe `compositions/keith-cord-timed-cards-review.json`. Starting separate Sites main HEAD `dac49d3c7da3b8f199bab64c7ae49a6d33bcc694`. Original GitHub concept branch remains separate and older.

## Changes

- About stage width increases432→496px (27→31rem),14.8% at the checked desktop sizes. Biography/crop/art remain; no hero changes. Code-native SVG gold braided cord with two tassels hangs beside the stage. HTML “Pull me” sign. Original bottom control removed. Same native button supplies click, Enter/Space, visible keyboard focus and an accessible changing reveal/close label. Downward pointer pull of18px also toggles; pointer capture and click suppression avoid a double toggle. The cord responds to a tug. No raster generation, additional bitmap downloads, sound or framework.
- Every back gets a10,000ms reading interval from the completed reveal (after its smoke is removed). A fresh full sixteen-frame cloud swaps back to the original illustration at the dense phase. Manual Show illustration/Escape still works and cancels its timer. Return clouds queue if another effect is active, so none interrupts another. Thus simultaneous deadlines can wait for a cloud already playing. Hover over the returning card does not immediately reopen it; leave/re-enter to reveal again.
- Offscreen timed returns restore the illustration directly. Hiding the document cancels pending timers/queue and settles fronts, avoiding surprise delayed smoke. Reduced motion/missing sprites retain immediate side changes. No-JS remains native static details/portrait. No Show modal.

## Actual verification

- Preservation117 SHA256 entries pass before/after; old tracked modules/recipes/root/Original/hero unchanged by diff. All ten recipes assemble; JS syntax and `git diff --check` pass. Existing35 spotlight/Events VM checks pass, not claimed to cover new timers.
- Managed Chrome exact iframe CSS viewports1440×900,1672×941,1920×1080, scaled to fit browser. Cord bounding box stays left of biography at all three; stage measures496px. No horizontal document overflow at1920; other sizes visibly fit. This is not a physical full-resolution monitor test.
- Actual downward drag of the cord opens once; Enter closes, Space opens and mouse click toggles. New SVG/HTML control visually inspected closed/opening/open. No-JS sandbox confirms cord hidden and static portrait visible.
- Actual10-second browser timing audit: first single-card return cloud started10,001.6ms after reveal cloud removal. Following six-card audit: all six ended on front; queued clouds played sequentially without overlapping canvases. Raw mutation timing evidence: `docs/qa/revision06/six-card-timing.json`. This is real browser wall-clock timing, not an accelerated timer mock. Configured10,000ms is not an exact scheduling guarantee under load/background throttling.
- Earlier smoke/card/curtain art is byte-identical. Existing Gallery/Booking/Inquiry/Experience/hero sources unchanged; their complete regression suites were not rerun. No new endpoint, persistence, form submission or audio.

Limits: actual OS media switching, real tab-hide, controlled slow networking, cross-browser, screen-reader listening and performance/FPS certification remain unverified. Hidden-state behavior was source-reviewed. Complete export and deployment identity are recorded in Revision06 delivery receipt. Next action: user review at the same owner-private Original & Latest URL. No sharing changes, outreach, domains or mobile work.

Source restoration note: prior working Site checkout had been removed by workspace maintenance. Reopened authoritative current source using supported Sites workflow. Empty-directory helper failed once; initializing an empty Git checkout fixed opening; no user source reset or lost edits.
