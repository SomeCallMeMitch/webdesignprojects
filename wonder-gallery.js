(() => {
  const gallery = document.querySelector('.wonder-gallery');
  if (!gallery) return;
  const lightbox = gallery.querySelector('.wonder-gallery__lightbox');
  if (typeof lightbox.showModal !== 'function') return;

  const display = gallery.querySelector('.wonder-gallery__display');
  const strip = gallery.querySelector('.wonder-gallery__strip');
  const status = gallery.querySelector('.wonder-gallery__status');
  const closeButton = lightbox.querySelector('.wonder-gallery__close');
  const enlargedImage = lightbox.querySelector('img');
  const enlargedCaption = lightbox.querySelector('figcaption');
  let opener;

  for (const arrow of display.querySelectorAll('[data-gallery-step]')) arrow.hidden = false;
  for (const artwork of strip.querySelectorAll('.wonder-gallery__art')) {
    const caption = artwork.nextElementSibling.textContent;
    artwork.setAttribute('aria-label', `Enlarge ${caption}`);
    artwork.setAttribute('aria-haspopup', 'dialog');
  }

  function rotate(direction) {
    if (direction > 0) {
      strip.append(strip.firstElementChild);
    } else {
      strip.prepend(strip.lastElementChild);
    }
    const middle = strip.children[Math.floor(strip.children.length / 2)];
    status.textContent = `Center artwork: ${middle.querySelector('figcaption').textContent}`;
  }

  display.addEventListener('click', (event) => {
    const arrow = event.target.closest('[data-gallery-step]');
    if (arrow) {
      rotate(Number(arrow.dataset.galleryStep));
      return;
    }

    const artwork = event.target.closest('.wonder-gallery__art');
    if (!artwork || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    opener = artwork;
    enlargedImage.alt = artwork.querySelector('.wonder-gallery__opening img').alt;
    enlargedImage.src = artwork.href;
    enlargedCaption.textContent = artwork.nextElementSibling.textContent;
    lightbox.showModal();
  });

  display.addEventListener('keydown', (event) => {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    const direction = event.key === 'ArrowRight' ? 1 : -1;
    event.preventDefault();

    if (event.target.matches('[data-gallery-step]')) {
      rotate(direction);
    } else {
      const links = [...strip.querySelectorAll('.wonder-gallery__art')];
      const next = (links.indexOf(event.target) + direction + links.length) % links.length;
      links[next].focus();
    }
  });

  closeButton.addEventListener('click', () => lightbox.close());
  lightbox.addEventListener('close', () => opener.focus({ preventScroll: true }));
  lightbox.addEventListener('keydown', (event) => {
    // Close is the dialog's only tab stop.
    if (event.key === 'Tab') event.preventDefault();
  });
})();
