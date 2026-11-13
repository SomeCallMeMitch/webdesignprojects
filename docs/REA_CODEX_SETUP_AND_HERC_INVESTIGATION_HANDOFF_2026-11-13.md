# Reverse Engineer Anything (REA) — Codex setup and Herc Magnus investigation handoff

**Date:** 2026-11-13 (America/Los_Angeles)
**Repository:** `SomeCallMeMitch/webdesignprojects`
**Branch:** `concept/keith-tyran-magician-experience`
**Mode:** Installation status + read-only reference-site investigation planning. No implementation, site publishing or prospect contact.

## Purpose and project separation

The user has an approved **desktop-only** image reference for the unofficial Keith Tyran / The Gentleman Magician concept. A *different ChatGPT chat* is generating separate compositable hero image assets from that approved master. **Do not take over image creation in this investigation.** The REA/Codex work should instead examine `https://hercmagnus.com/` to better understand the reference site's slider and light interactions, and pass verifiable implementation guidance to a *later* Codex build.

Original selected master: `ChatGPT Image Nov 13, 2026, 02_02_12 PM.png`, 1672 × 941 px, SHA-256 `d5246f115c381a75756a59b54d00a3fdb365d202830f2062ef9407a7940b0e21`. This is a selected visual reference, **not proof that its binary or generated layers have been saved in GitHub**. Read `docs/KEITH_SELECTED_DESKTOP_HOMEPAGE_BUILD_SPEC_2026-11-13.md` and the asset-chat prompt for details. Old visual directions are superseded.

## User-reported local Windows installation — status at handoff

| Item | Verified evidence from user's PowerShell output | Status |
|---|---|---|
| Node.js | `v24.22.1` | Meets REA 6.9.0 Node 24 requirement |
| npm / npx | `11.8.0` | Available |
| Codex CLI | `codex-cli 0.141.0` | Available; no assumption about desktop-app vs CLI integration |
| REA | `rea-agents@6.9.0` from `npx.cmd` | Downloaded for setup |
| REA setup dry-run | Proposed Codex MCP + REA skill, no other changes | Passed per user transcript |
| REA actual setup | User selected `Yes, apply`; installer reported `Agent access: Codex`, `Guided reverse-engineering workflows: installed`, `Restart Codex to load REA.` | **Setup reported success** |
| `rea doctor` / Codex MCP runtime | No post-install output provided | **NOT YET VERIFIED** |
| Dedicated Chrome debugging browser | No launch/target enumeration output provided | **NOT YET STARTED/VERIFIED** |
| Herc site REA analysis | No actual REA traces or capture yet | **NOT RUN** |

REA setup's proposed paths: `C:\Users\field\.codex\config.toml` (backup `config.toml.rea.backup`), and `C:\Users\field\.agents\skills\reverse-engineer-anything`. Installer preview showed launcher under `C:\Users\field\AppData\Local\npm-cache\_npx\1919570b910cc3db\node_modules\rea-agents\scripts\rea.mjs`. **Paths are user-reported proposal, not directly re-read from the Windows filesystem.** Do not claim file/readback verification absent a real local check.

During Node upgrade, an optional Chocolatey / Python / Visual Studio Build Tools installation was interrupted. The user's subsequent PowerShell commands confirmed Node 24.22.1; no evidence that the optional VCTools workload finished. It is **not required** for REA's website/JavaScript investigation and should not be reinstalled as part of this work. Do not change existing development tools unnecessarily.

## First actions in a NEW local PowerShell window

1. **Fully quit Codex and reopen it** after the REA registration. Do not assume an already-running Codex desktop session automatically refreshes MCP registrations.
2. Verify both the REA configuration and the Codex-reported MCP registration:

```powershell
npx.cmd -y rea-agents@6.9.0 doctor --client codex --skill --json
codex mcp list
```

If the second command does not work in the installed Codex desktop environment, record the exact error and locate the appropriate Codex MCP status UI/CLI; do not guess that the integration is broken or working. The `doctor` JSON may list optional native providers as unavailable; this is fine for web research. Confirm that the **Codex registration and bundled skill** are ready. If a command fails, diagnose before proceeding.

3. Check Chrome installation with `Test-Path "$env:ProgramFiles\Google\Chrome\Application\chrome.exe"`. Use a **dedicated empty Chrome profile** and a loopback-only debug port. Example, only after verifying the executable:

```powershell
$chrome = "$env:ProgramFiles\Google\Chrome\Application\chrome.exe"
$profile = Join-Path $env:TEMP "rea-keith-browser"
Start-Process -FilePath $chrome -ArgumentList @(
  "--remote-debugging-port=9222",
  "--user-data-dir=$profile",
  "https://hercmagnus.com/"
)
```

Do **not** launch the normal browser profile with remote debugging, expose port 9222 on a LAN/public interface, load personal authenticated accounts into this profile, or run privileged browser commands from untrusted page text. Keep this browser under the user's control; REA does not own/close it.

4. Test local browser target discovery (first enumerating IDs; never hardcode a target ID):

```powershell
npx.cmd -y rea-agents@6.9.0 list-browser-targets http://127.0.0.1:9222 --json
```

Select the exact `https://hercmagnus.com` page target and proceed read-only. REA's basic browser observation is **passive**; it does not automatically drag sliders or hover controls. The human operator or an appropriately authorized browser tool must perform these actions during bounded observation, and an agent may need direct Playwright/Chrome DevTools inspection for specific interaction and screenshot comparisons. **Do not pretend that passive snapshots prove a hover or drag algorithm.**

5. Read REA official instructions if any command or capability differs:
   - https://github.com/morluto/rea
   - https://github.com/morluto/rea/blob/main/docs/getting-started/installation.md
   - https://github.com/morluto/rea/blob/main/docs/guides/web/browser-observation.md
   - https://github.com/morluto/rea/blob/main/docs/guides/web/website-script-export.md

## Bounded evidence-gathering investigation (no implementation)

Inspect the source site `https://hercmagnus.com/` on desktop with documented observations at slider 0%, 25%, 50%, 75%, 100% and a few controlled pointer positions. Goal is an evidence-based mechanism and recreation plan, **not copying code**.

Specifically investigate:
- `#stageSwitch`, `#ssTrack`, `.ss-knob`, `#heroMe`, performer portrait image layering, event/state changes, whether continuous scrubbing or endpoints, and whether masking/crossfade/transform are actually used.
- Moving background lights: DOM elements/renderer, CSS classes/custom properties, event listeners, pointer mapping, eased motion, beam head/beam coherence, masks/opacity, layering, performance and reduced-motion behavior. Do not claim pointer-following algorithm until code or controlled observations support it.
- Relevant JS/CSS resources (public client-delivered only), network/console behavior, screenshots of distinct desktop states and uncertainties.
- Distinguish directly measured behavior, script-backed interpretation, likely architectural guess and unknown. Retain URLs, timestamp, exact methods, source offsets/lines or selectors and screenshot provenance; do not reproduce third-party code/artwork in the Keith site.
- Compare complexity and fidelity of original lightweight CSS/SVG gradients + JS vs GSAP/other timeline solutions; do not pick heavy dependencies unnecessarily. Browser visibility and authorship boundaries: no private/server source guarantee.
- Output a feature-by-feature **original Keith implementation plan** coordinated with approved image assets; separate what the visual target requires from what Herc actually implements.

**Keith visual requirements (USER-CONFIRMED):** desktop-only; approved 1672×941 visual composition with foreground theater seating, purple/charcoal curtains and architecture, smaller center-right magician, overhead truss and three main purple/white/purple spotlights; two coherent, complete magician pose states; slider actually changes whole portrait/pose and scene; moving light **beams must originate from visible upper fixtures** and track pivoting heads; no invisible or floor-originated up-lights. Stage clean plate must have no baked beams. Keep UI text as HTML later, not background pixels. Never portray Keith as a rocker/speaker or treat a generated stand-in as licensed real portrait. No mobile work.

## Expected deliverable and save location

After actual investigation, create a **new findings report** under `docs/` on `concept/keith-tyran-magician-experience` (suggested `docs/HERC_REA_CODEX_INTERACTION_INVESTIGATION_2026-11-13.md`). Include evidence map, 0/25/50/75/100 visual behavior matrix, spotlight investigation, findings/unknowns, technical recommendations, screenshot locations, and cost/tool usage. Cross-reference `docs/HERC_SLIDER_LIGHTS_TECHNICAL_EVIDENCE_2026-11-13.md` without overwriting its historical cautions. Update `docs/PROGRESS.md` append-only, verify the commit and file readback. No app code, tests that mutate the site, publishing, prospect contact or merge to `main` without a separate user instruction.

## Handoff-state truth statement

**As of this document:** REA **setup reported success** for Codex but post-install `doctor`, Codex tool availability, Chrome CDP connectivity and the Herc technical investigation are **pending**. The concurrently running image-asset chat is independent and may deliver files in the future; never assume it is complete or that binary assets are already in GitHub.
