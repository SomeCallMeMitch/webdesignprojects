# Project progress — append-only cross-chat handoff

**Current project:** Unofficial Keith Tyran magician-site concept.
**Repository:** `SomeCallMeMitch/webdesignprojects`
**Working branch:** `concept/keith-tyran-magician-experience`
**Current phase:** Initial context and planning setup; no build.
**Owner decision:** Next phase is a new ChatGPT planning chat (Chat or Work), with Codex reserved primarily for coding.
**Canonical docs:** `AGENTS.md`, `docs/PROJECT_BRIEF.md`, `docs/REFERENCE_SITE_ANALYSIS.md`, `docs/PROSPECT_RESEARCH.md`, `docs/DESIGN_PREFERENCES.md`, `docs/NEXT_CHAT_PLANNING_PROMPT.md`.

## Open decisions / next actions
1. New chat reads all required files and evaluates existing Keith website, mobile UX, positioning, and current source-verified commercial activity.
2. Research three distinct creative directions, plan mobile and booking UX, select primary hero interaction and asset licensing approach.
3. User approves direction and prototype scope before Codex implementation.
4. No direct prospect outreach, no launch, no real client/media assets without permission.

## Session log (append new entries BELOW; never replace history)

### 2026-11-13 — Initial repository and project setup
- **Request:** Set up separate project branch and complete durable research/planning handoff for a high-end magician website inspired by Herc Magnus, prioritizing Keith Tyran.
- **Repository discovery:** Found newly created empty public `SomeCallMeMitch/webdesignprojects`, inferred this was intended repo because no URL appeared in the message; confirm if necessary. Initialized `main` with a neutral README because an empty GitHub repo cannot branch from an existing commit.
- **Created branch:** `concept/keith-tyran-magician-experience`.
- **Research preserved:** Reference site direct observations vs unverified technology in REFERENCE_SITE_ANALYSIS; five prospects and unverified marketing counts in PROSPECT_RESEARCH; concept and constraints in PROJECT_BRIEF.
- **Design governance:** DESIGN_PREFERENCES establishes user-confirmed direction versus proposals and outstanding decisions.
- **Cross-chat protocol:** AGENTS mandates read-PROGRESS-first and append a dated progress entry at completion of EVERY future prompt/session, including failed/blocked work.
- **Next-chat work:** Planning-only assignment saved to NEXT_CHAT_PLANNING_PROMPT. Codex implementation deferred.
- **Contact/deployment/application changes:** None. Documentation only; no production site modified.
- **Files:** `AGENTS.md`, `docs/PROJECT_BRIEF.md`, `docs/REFERENCE_SITE_ANALYSIS.md`, `docs/PROSPECT_RESEARCH.md`, `docs/DESIGN_PREFERENCES.md`, `docs/NEXT_CHAT_PLANNING_PROMPT.md`, `docs/PROGRESS.md`.
- **Commit:** See current branch HEAD after documents are committed (record in final session handoff).

### 2026-11-13 — First creative planning and independent website/market audit
- **Request:** Execute `docs/NEXT_CHAT_PLANNING_PROMPT.md`: independently assess Keith, his current site and reference design, offer three distinctive directions, recommend one, define booking-friendly UX and noncoding prototype gates, update all research and design records.
- **Branch verified:** `concept/keith-tyran-magician-experience`, started at `b6f6888806df44083249cdfce619f1faa22eba8a`. Repository remains separate from ToteStream.
- **Materials read:** `AGENTS.md`, `docs/PROGRESS.md`, `docs/DESIGN_PREFERENCES.md`, `docs/PROJECT_BRIEF.md`, `docs/REFERENCE_SITE_ANALYSIS.md`, `docs/PROSPECT_RESEARCH.md`, `docs/NEXT_CHAT_PLANNING_PROMPT.md`, README and current branch tree.
- **Research actions:** Public homepage (Wix content, service formats, proof, calls-to-action); Thumbtack profile indexed snapshot with 98 hires, 56 reviews, 5.0 and self-reported show frequency and displayed price FAQ; independent Oct 3 SFPL announcement; Sarah Eichstedt March 2026 photography story; David Martinez/Tom Collett/Kevin Blake/Matteo Cammisa competitor sites; Herc Magnus interaction notes. Read-only desktop live browser inspection: https://agent.tinyfish.ai/runs/21a2a8a8-fdbf-4019-a25d-35f7cc6250db .
- **Material qualification:** Current mobile viewport not actually inspected (browser lacks resizing); no Core Web Vitals, SEO, WCAG or conversion data. One BOOK NOW click had no observed navigation, but does not prove broken behavior. Published marketplaces counts are not independently audited sales; `120 shows/year` self-report, venue/client mentions Keith-origin claims, pricing snapshot not a current quote. No verified social follower totals, post cadence or conversions. Assets/photographs are not cleared for reuse.
- **Creative output:** Three PROPOSED visual directions: A The Velvet Reveal, B The Impossible Invitation, C Two Sides of Wonder. Recommend A for first visual comparison, not a frozen decision. A balances sophisticated lighting and Keith's playful all-ages identity. Corporate-only/high-ticket positioning is not presumed; suggest broad event architecture.
- **UX and delivery:** Proposed information architecture, accessible hero spotlight/card interaction, optional effect controls, short inquiry path, no false availability, mobile/reduced-motion fallbacks, reference/source-rights rules, staged visual-review-before-code process, and later performance/accessibility/SEO tests.
- **New files:** `docs/KEITH_SITE_MARKET_AUDIT_2026-11-13.md`, `docs/CREATIVE_DIRECTIONS_2026-11-13.md`, `docs/EXPERIENCE_ARCHITECTURE_PROTOTYPE_PLAN_2026-11-13.md`.
- **Updated files:** `docs/DESIGN_PREFERENCES.md` (DP-110–DP-119, explicitly *Proposed*, not approved); this append-only `docs/PROGRESS.md` entry.
- **Commit for research/design documents:** `a971967bcfd74dcd2c9a20e686eb3f43b002f1c5` on `concept/keith-tyran-magician-experience`. This progress-log write is a following commit; inspect current branch HEAD for final SHA.
- **User decisions needed:** Choose A/B/C or hybrid; target balance of elegant mystery vs playful charisma, priority of corporate vs family/private buyers, desired first hero interaction, and available licensed assets. Prefer desktop/mobile still comps and interaction storyboard before functional prototype.
- **Exact next actions:** (1) Get direction preferences, (2) produce noncoded original concept compositions and interaction boards after approval, (3) perform real mobile audit with screenshots when tools permit, (4) prepare a Codex implementation brief only after explicit user go-ahead.
- **Contact/deploy/app coding/publishing:** None. No prospect contact or external outreach. Documentation only; no site altered.

### 2026-11-13 — Focused Velvet Reveal (Direction A) design exploration
- **Request:** User selected Direction A to explore, asked to develop and compare visual and interactive options in more detail, and explicitly prohibited implementation.
- **Branch:** `concept/keith-tyran-magician-experience`. Starting commit `179b0e09ff8e826dc59e11632a4de3e2786465a4`; kept all edits on this branch, no main changes.
- **Reviewed context:** Mandatory AGENTS, progress, preferences, project brief, prospect/research, existing three-direction and UX plan, next-chat instructions, branch file list and HEAD.
- **Evidence/context:** Prior repo audit of Keith's current site and 2026 activity; original reference Herc Magnus and caution about its unverified exact technical light mechanism. Additional Nov 13 external guidance: https://www.w3.org/WAI/WCAG22/Techniques/css/C39 (supports reduced motion), https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions (AAA motion reduction) and https://web.dev/articles/animations-guide (avoid animating layout/paint where possible). Generic image inspirations in user-facing discussion are external mood references only, not cleared client/media assets or approved comps.
- **Work completed:** Detailed comparative concept of A1 Grand Entrance (curtain spectacle), A2 Living Spotlight (editorial hero), A3 Close-Up Encounter (table/card interaction); three palette families; early typography, original draft copy, 1440×900 desktop/390×844 mobile composition, stage-to-inquiry narrative, 0–10s hero storyboard and accessible pointer/focus/tap/static alternatives. Recommended **A2 core + restrained A1 visual framing + one optional A3 invitation**. This remains a **recommendation only**. No finished image comps, user-approved exact specs, or functional prototype.
- **Added:** `docs/VELVET_REVEAL_DESIGN_EXPLORATION_2026-11-13.md`.
- **Updated:** `docs/DESIGN_PREFERENCES.md` DP-120–DP-128. DP-120 records user's *confirmed choice to explore* A; all concrete visual/interaction guidance clearly Proposed; `docs/PROGRESS.md` appended in this commit.
- **Design/document commit:** `f6149d22b7a4aada8181d8c3f3beb2e7deb39a42`. Progress update is a subsequent commit; final branch HEAD is reported to user.
- **Decisions still open:** Which A variant emphasis? Classic Velvet / Midnight Illusion / Warm Cabaret palette? Balance of mysterious vs playful? Spotlight plus educational reveal or additional genuine trick? First review package as 3 original static desktop/mobile comps + a six-frame storyboard? Photo rights unverified.
- **Next actions:** Invite user preference on A1/A2/A3 and palette/tonal mood, prepare *noncoded* original visual comps/storyboard only after choice, test true current mobile site when supported, then iterate design before any Codex handoff.
- **Uncompleted and limits:** No original desktop/mobile comp files created in this session; no actual 390px browser test, no performance/contrast measurement or permission-cleared Keith media. No source/brand/logo use cleared.
- **Code, site changes, contact, deployment, publishing:** **None**. Documentation-only planning.
