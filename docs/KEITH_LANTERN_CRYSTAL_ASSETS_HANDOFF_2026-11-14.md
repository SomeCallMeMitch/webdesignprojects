# Keith Tyran — Lantern Flicker and Crystal-Ball Apparition Asset Handoff
**Date:** 2026-11-14  
**Status:** Draft image-only review assets; not committed binary files; no website changes  
**Project branch:** `concept/keith-tyran-magician-experience`

## Request
User requested isolated image variations for the **small upper-left bronze wall lantern** and the **lower-left purple crystal ball** already visible in the approved desktop theater hero. A flicker should dim the existing lantern; a mysterious face should appear faintly, then fully, *inside the same glass sphere*. Do not change the existing hero implementation, slider, cards, or sound.

## Created deliverables (chat downloadable ZIP, not in repository)
- `lantern_dim_tight.png`: reduced-glow variant preserving the original wall-lantern geometry.
- `lantern_almost_off_tight.png`: nearly-unlit variant, same fixture and anchor.
- `crystal_head_faint_tight.png`: faint face inside the existing source ball.
- `crystal_head_clear_tight.png`: clearer version of the **same** spectral face at the **same position**.
- Each of the four also exported as transparent overlays on 549x762 crop, 1823x1028 current screenshot, and 1672x941 scaled artboard.
- `ASSET_MANIFEST.json`: file naming, measured bounds and coordinate transforms.
- `detail_comparison.png`, `comparison_triptych.jpg`, and original-size preview compositions.

**Important:** Image binary content was delivered through ChatGPT conversation downloads, not uploaded/committed to GitHub. Before Codex can load it locally, download `keith_tyran_lantern_crystal_assets.zip` or `keith_tyran_lantern_crystal_four_tight_layers.zip` from that chat and place the desired exports into `assets/hero/`, subject to review. Do not claim these PNG files are already present in the repo.

## Exact geometry and quality checks
- User's supplied reference crop `image(2).png` is 549x762 pixels. The current full hero screenshot `image.png` is 1823x1028 pixels.
- Feature-based comparison aligned crop (0,0) to full screenshot approximately (1,221); scale approximately 1:1 at the capture dimensions.
- Both lantern states share the exact same full-frame alpha bbox, approximately (1, 256) to (148, 436) in the screenshot coordinate system.
- Both apparition states share the same alpha bbox, approximately (53, 675) to (119, 741), and are applied inside the existing crystal glass instead of replacing its pedestal.
- All four layers were exported in matching RGBA canvas sizes, with transparent exterior. QA contact sheet was rendered and inspected.
- 1672x941 variants were **resized from the current prototype screenshot coordinate system**, so confirm against the actual underlying optimized `assets/hero/stage.webp` image/DOM layout before implementation; matching screenshots is not proof of exact CSS alignment at all viewport widths.
- The source stage art still has some warm lantern spill baked into the backdrop. A convincing fully extinguished illumination would require replacing/cleaning the original local background and animating its glow separately. This kit is a composited first pass, not native 3D relighting.
- The apparition face is fictional original conceptual artwork, not Keith's actual portrait.
- Existing original bright lamp/crystal remain the default states. Overlay states are for optional flicker/apparition transitions.

## Animation and implementation notes for the other chat/Codex (not code)
- Lantern: choose on (original), dim, almost-off with small nonregular timing variation. Use opacity or image-state switching without changing fixture location.
- Crystal: retain original ball, fade apparition faint -> clear -> faint -> empty; same face should not drift.
- Prefer tight PNG assets for performance once their positions are validated; the full-frame overlays are registration references.
- Respect reduced-motion and avoid flashes; keep effects decorative, never blocking CTA or navigation.

## Scope
No website code, hosting, deployment, live booking, outreach, or mobile design was performed for this image-production pass. Preserve approved hero direction and other chat's independent card/audio/slider work.
