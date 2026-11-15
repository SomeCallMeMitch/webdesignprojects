# Stage A motion-image review results — 2026-11-15

Scope: static image assets only, using the actual verified source kit. No website, original hero, beam files, Windows checkout, Sites project, module library or comparison page modified.

## Saved review package
- Filename: `keith-stage-a-motion-images-review-v1-2026-11-15.zip`
- Exact Drive URL: https://drive.google.com/file/d/1ckcfBi-67182tUrEzjxoNos_Jc43YlWw/view?usp=drivesdk
- Drive ID: `1ckcfBi-67182tUrEzjxoNos_Jc43YlWw`
- Verified parent: `1jLMAO7aEGDxedeusAlLnbKLY5Zn2VCGc`.
- Size: 11,079,479 bytes. SHA-256: `b6c6b985ca2c6013cc24d36e8a5cbdc7b5d49184c27d6f9f18fbb840cb2419a1`.
- Drive metadata readback confirmed name, size, parent and private sharing. No fresh remote output download/hash performed.
- ChatGPT copy: https://chatgpt.com/library?file_id=libfile_3a2a4df990e881918af94449004f84ac&account_id=personal

## Delivered images
| File | Dimensions | Mode | Result |
| --- | --- | --- | --- |
| experience_stage_no_beams_v1.png | 1672×941 | RGB | Three cones/fixed floor highlights removed; three source glints retained. |
| show_smoke_cloud_v1.png | 1536×1024 | RGBA | Billowing lavender/ivory cloud. |
| show_smoke_wisp_v1.png | 1254×1254 | RGBA | Airy reusable curl; larger than preferred 1024 square. |

Built-in image generation/editing used, referencing actual supplied PNGs. Delivered PNG bytes unchanged from selected generation, no stretching, alpha extraction, thresholding or recoloring. Two further generative refinements attempted; initial smoke candidates selected for their preferable visual appearance.

## QA and limitations
Input ZIP downloaded with connected Drive tools: 15,256,541 bytes and SHA-256 `18646a1faaa09239be402b40ce79cccc03b4c41e8fb40669faab92b8c0db4550` matched; 49 entries, CRC passed, extracted separately. Required briefs/index/manifest read. Visually inspected Experience target, three hero smoke/haze references and all six Show illustrations.

Smoke alpha contains genuine zero and intermediate values; extrema 0–253 for both. Cloud has 636,550 zero-alpha and 936,314 partial-alpha pixels. Wisp has 1,190,041 zero-alpha and 382,475 partial-alpha pixels. White and dark-purple composites inspected: no obvious matte rectangle, cut visible plume or objectionable halo at preview scale.

**Strict fully transparent safety margins fail**: low alpha pixels extend to canvas edges. Neither smoke file is certified production-ready for that requirement. Generative refinements did not reliably solve it. Resolve padding/edge cleanup before integration; do not silently claim margins passed.

Backdrop dimensions exactly retained. Full-size 50% source/result overlay visually shows close curtain edges, tassels, ellipse and front-panel registration, but small generative trim/texture changes remain. No automated landmark alignment, physical source coordinate calibration, or pixel-exact equivalence claimed. Review backdrop in actual crop before integration.

ZIP includes separate PNGs, README, measured OUTPUT_MANIFEST.json, labeled light/dark smoke preview, background overlay, original relevant PNG references and source briefs. Local output ZIP CRC passed.

## Review stopping point
User reviews candidates. No animation, popup HTML, dissolve implementation, beam tracking, site preview rebuild, runtime tests, deployment, publication, outreach or real booking performed. No changes to current comparison page; clicking it will not yet show these assets. Integration is a separately authorized phase, preserving hero, baseline/v1 and newer local/exported source.

Original repository branch started at `3f5a39aa7c77996cac1414cf6033b9b33fa408c9`, `concept/keith-tyran-magician-experience`. Documentation updates here do not synchronize the user's local Windows files.
