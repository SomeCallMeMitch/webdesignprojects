# Experience the Magic

Open [card-reveal-demo.html](../card-reveal-demo.html) for the local desktop preview. The same preview works from a local server. Run `python -m http.server 8722 --bind 127.0.0.1` in the project directory and open `http://127.0.0.1:8722/card-reveal-demo.html`. The older three-card demo opens from `index.html`.

## Reuse on another magician site

1. Copy the `.magic-experience` section from `card-reveal-demo.html`, along with `experience-section.css`, `experience-section.js`, and the five WebPs in `assets/section02_experience/`. Link the CSS and load the script with `defer`. Give the section and heading unique IDs, then point the preceding scroll link at the new section.
2. Replace the heading, intro, disclosure and image paths, dimensions and alt text in the section markup. Update both the `data-src` and `noscript` versions of each image. If the destination omits the script, remove the deferred image copies and use the fallback markup's `src` and `loading="lazy"` on the five images. Keyboard access to the demo CTA comes from native `details` and `summary` elements.
3. Set the palette, gutter, padding, frame widths and glow via the `--magic-*` properties. Use each photo's `object-position` to tune its crop. If you replace a frame, adjust its aspect ratio and the matching photo mask so the image extends under the opaque rim. The background has a painted light beam and stays fixed.
4. Keep the inline demo message until a performance video is approved. With approved footage, replace the message with a player initialized on the first open or click. Remove the glow element and omit its initializer call for a static variant.

The loader observes the framed artwork, which sits below the section's top edge. On the Keith page it also waits for the existing two waves of hero images to decode before setting the five section URLs. On a page with a different preceding section it uses the viewport check alone.
