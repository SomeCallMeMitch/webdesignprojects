# Revision 05 — smoke card backs and softer About curtains

2026-11-15 (America/Los_Angeles). User approves Revision04 smoke visually, requests text on the back of the same card instead of a modal, through hover or click. User asks us to choose from four curtain sequences in the linked project Drive folder. Hero/originals/accepted Experience lights remain locked.

## Result and interaction choices

New recipe `compositions/keith-card-backs-curtain-review.json` selects Show v5 and About v3; all other selections unchanged. New versions preserve Show v4/About v2 and earlier recipes. Same owner-private Site and Original & Latest hub, Revision05. No new destination, audience, media generation, sound, framework, mobile work or live inquiry.

Show v5 retains the approved sixteen-frame smoke assets and full-card proportional cover. A180ms fine-pointer hover pause starts smoke, dense frame6 swaps art/caption for real HTML detailed text inside the exact same panel, and smoke clears. Click/Enter/Space also reveals. Back remains open after leaving so readers can move the pointer without losing text. “Show illustration” or Escape runs smoke back to the illustration. Pointer must leave/re-enter before another automatic reveal after a manual return. Short flyovers before dense interval cancel cleanly. Other cards and the page remain interactive; no Show dialog/modal/backdrop remains. One canvas/timeline exists at a time; preference/visibility/resize/scroll cancellation settles to the requested side. Readiness/failure uses immediate text access, with no delayed resurrection. No-JS retains native details and illustrations. Keyboard focus moves between the originating Explore control and its own return control when needed. Layout dimensions remain stable.

About v3 selects **option4, Transparent purple curtain sprite sheet-4.png**: symmetric scalloped plum swags, gold fringe and rounded cloth silhouette match the existing theater scene without rectangular rails/corners. Option1 has a pale-filled opening; option2 uses a central star and angular outer folds; option3 is asymmetric. All four decoded/visually inspected. This is our selected option for review, not a claim of final user aesthetic approval.

Exact source folder: https://drive.google.com/drive/folders/1ePEwPxI-QwA3Go--2h15TXepDY8SZ8pW . Project parent `1jLMAO7aEGDxedeusAlLnbKLY5Zn2VCGc`.

| Option | Drive ID | Bytes | SHA256 |
|---|---|---:|---|
|1 Plum Velvet Curtain Opening Sequence-1.png|1aigrSsebLfaGoSY8hiHFn_DfB8_pWn-Z|2280420|13ca73c54e730572bfa6fd5a0bb4716a115fe5cda9d36f008f0e9eafe6248008|
|2 Eight-Frame Plum Velvet Curtain Sequence-2.png|1Q84fXU7NnfUZ_N7yYB6yAxccB51xKfZL|1854285|4fe9df7f0f4d5ece0e949b2633bf933981ce497ac0d18b63bd720ecc23f0b216|
|3 Asymmetric purple curtain opening sequence-3.png|1aMFglFl8OmP3hlmuBdSc9wzjnBd8jJdo|1958203|c730680e7a332e33b813d3c9fd961572e793adda022d641ea4f65776e42d5de5|
|4 Transparent purple curtain sprite sheet-4.png|1Ud6oiyLV66TGKd17fTbvsuOo0Zcb53oS|1808183|eda628c1538c0924331f07759e6490a214b716b3fce3e8abc66dd97120a2444e|

All sheets1774×887 RGBA with actual0–255 alpha. Chosen master is byte-identical under `module-library/asset-packs/theatrical-curtain-v1/inputs/`. Reproducible `tools/prepare-theatrical-curtain.py` uses explicit bounds x[0,444,887,1331,1774],y[0,444,887]. Cells0–4 are the closed→fully-open sequence; reverse for closing, rather than treating closing cells5–7 as continued opening. Cells padded to444 without stretching, alpha<=5 removed and alpha>=240 made opaque. WebP RGBq90 (topq92). Fixed top rows0:120 stabilize the decorative valance; no separate rigid rails. Portrait is proportionately cropped inside the opening, including head/forward hand; outer raised hand is partly covered by side cloth. Closed state masks portrait; missing sprites/no-JS retain a useful static portrait/biography and concept label. Click opens and stays open; repeat input reverses, no auto-hover cycling.

New curtain runtime171,720 bytes across five cells plus fixed valance; unchanged smoke242,952 bytes. Both effect textures total414,672 bytes. Older packs remain preserved, including unused earlier curtain assets in exported asset directories; these totals describe current effect files, not initial page-transfer or performance measurements. New curtain loading is deferred until section approach.

## Actual checks and fixes

- All117 preservation hashes pass; independent238-file prior snapshot unchanged (older versions, root runtime/hero, Original, older recipes and approved smoke derivatives). No preservation manifest refresh.
- Syntax, `git diff --check`, composition build and portable export. All existing recipes still assemble; generated static source has41 unique IDs and no Show dialog markup/aria-haspopup. Enhanced back IDs are created uniquely per card.
- Managed Chrome, exact iframe CSS viewports1440×900,1672×941,1920×1080, scaled to fit available browser window: no horizontal document overflow. Back text fits without inner scrolling (all six at1440; first at1672 and Cards & Coins at1920). This is not a full-resolution physical-monitor capture.
- All six Space/Enter reveals and Escape restores checked. Same-card text/controls present, zero Show modals. Explicit illustration-return and mouse click checked; held focus moves to corresponding side's control. Rapid reveal/return and switching categories remain usable.
- Synthetic pointerenter QA button verified first-card hover; real pointer-entry via a native drag from outside the card into Cards & Coins also revealed its back without activating Explore. This checks pointer entry; drag selected some text and was cleared afterward. No claim of physical-user smoothness benchmark.
- Found/fixed suppression after a keyboard return when pointer was outside: track actual hover presence so suppression lasts only for the current hover encounter.
- Growth/dense/clear screenshots use QA-only controlled frame samples calling the same renderer; clear sample shows text behind clearing smoke. Normal click/keyboard playback also exercised. These samples are not FPS recordings.
- Synthetic JS reduced-motion switch during smoke removes canvas and settles readable text. Actual OS CSS switching not tested.
- Curtain closed/opening/open at1440/1672/1920 inspected; normal Space,Enter and rapid reversal exercised; fixed valance, soft silhouette and useful portrait crop. Source has five key opening drawings, not a continuous video simulation.
- No-JS iframe sandbox genuinely blocks scripts: static portrait and native Show disclosure remain useful. Deliberately missing-sprite QA page reveals Illusions text directly with no modal. No deferred callback starts a surprise effect.
- Post-fix exercised QA diagnostic page errors empty. Existing35-check spotlight/Events Node VM suite passes, without claiming it covers new card-side logic. Hero, Experience lights, Events, Gallery, Booking, Inquiry and footer source hashes/selections unchanged; previous regression findings remain in Revision04 report. No new network endpoint/storage added.

## Limits and next action

No full screen-reader session, OS media switch, controlled slow network, actual tab-hide, every resize race, physical display smoothness, cross-browser, FPS or Lighthouse certification. Inherited zero-send Inquiry module is unchanged and was tested in Revision04; its complete valid-submit suite was not rerun in this turn. Runtime branch is separate Sites `main`; original GitHub concept branch receives docs/receipts rather than this runtime. Review the same private comparison, pause over cards, use return controls, and inspect the new curtains. No further unrelated work requested.
