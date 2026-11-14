(() => {
  for (const section of document.querySelectorAll('.magic-experience')) {
    deferArtwork(section);
    enableArtworkGlow(section);
  }

  function deferArtwork(section) {
    const images = section.querySelectorAll('img[data-src]');
    const load = () => {
      for (const image of images) image.src = image.dataset.src;
    };

    if (!('IntersectionObserver' in window)) {
      load();
      return;
    }

    // Observe the inset layout, so a few visible pixels of stage edge do not trigger downloads.
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.intersectionRatio < 0.24) return;

      // The hero assigns its second wave on decode. Let both waves finish before sharing bandwidth.
      observer.disconnect();
      const hero = section.previousElementSibling;
      if (!hero?.matches('[data-card-reveal-demo]')) {
        load();
        return;
      }

      const openingImages = hero.querySelectorAll('.plate, .persona img');
      Promise.allSettled(Array.from(openingImages, image => image.decode())).then(() => {
        const heroLayers = hero.querySelectorAll('img[src]');
        return Promise.allSettled(Array.from(heroLayers, image => image.decode()));
      }).then(load);
    }, { rootMargin: '0px 0px 72px', threshold: 0.24 });

    observer.observe(section.querySelector('.magic-experience__art'));
  }

  function enableArtworkGlow(section) {
    if (!('IntersectionObserver' in window)) return;

    const art = section.querySelector('.magic-experience__art');
    const glow = section.querySelector('.magic-experience__glow');
    const motion = matchMedia('(any-hover: hover) and (any-pointer: fine) and (prefers-reduced-motion: no-preference)');
    let pendingFrame = 0;
    let pointer;
    let inView = false;

    function paint() {
      pendingFrame = 0;
      const rect = art.getBoundingClientRect();
      const x = pointer.clientX - rect.left;
      const y = pointer.clientY - rect.top;
      glow.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      glow.setAttribute('data-lit', '');
    }

    function clear() {
      cancelAnimationFrame(pendingFrame);
      pendingFrame = 0;
      glow.removeAttribute('data-lit');
    }

    art.addEventListener('pointermove', event => {
      if (!inView || !motion.matches || event.pointerType !== 'mouse' || document.hidden) return;
      pointer = event;
      if (!pendingFrame) pendingFrame = requestAnimationFrame(paint);
    }, { passive: true });
    art.addEventListener('pointerleave', clear);
    art.addEventListener('pointercancel', clear);
    motion.addEventListener('change', clear);
    document.addEventListener('visibilitychange', clear);

    new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      if (!inView) clear();
    }).observe(art);
  }
})();
