(() => {
  for (const grid of document.querySelectorAll('[data-deferred-art]')) {
    const load = () => {
      for (const image of grid.querySelectorAll('img[data-src]')) image.src = image.dataset.src;
    };

    if (!('IntersectionObserver' in window)) {
      load();
      continue;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.intersectionRatio < 0.2) return;
      observer.disconnect();
      load();
    }, { rootMargin: '0px 0px 64px', threshold: 0.2 });

    observer.observe(grid);
  }
})();
