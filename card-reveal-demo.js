// Extend the shared slider animation only on the six-card demo.
cards.push(
  { element: hero.querySelector('[data-flight="small-red"]'), start: 64, end: 92, x: 5.6, y: 3.5, arc: 1.1, roll: -31, opacity: .93 },
  { element: hero.querySelector('[data-flight="far"]'), start: 71, end: 99, x: 19.4, y: -3.1, arc: 4.4, roll: 67, opacity: .79 },
  { element: hero.querySelector('[data-flight="near"]'), start: 74, end: 100, x: 15.5, y: 25.9, arc: 3.4, roll: -39, opacity: .97 },
);

const lanternDim = hero.querySelector('.lantern-dim');
const lanternUnlit = hero.querySelector('.lantern-unlit');
const orb = hero.querySelector('.stage-orb');
let effectsValue;
let lanternAnimations = [];

function updateStageProps() {
  const value = shown;
  if (value === effectsValue) return;

  const playful = value > 50;
  const wasPlayful = effectsValue > 50;
  effectsValue = value;
  if (playful !== wasPlayful) {
    hero.toggleAttribute('data-playful', playful);
    lanternAnimations.forEach(animation => animation.cancel());
    lanternAnimations = [];
    if (playful && !reducedMotion.matches) {
      const timing = { duration: 710, easing: 'ease-in-out' };
      lanternAnimations = [
        lanternDim.animate([0, .8, .37, .89, 0].map(opacity => ({ opacity })), timing),
        lanternUnlit.animate([0, .82, 0, .62, 0].map(opacity => ({ opacity })), timing),
      ];
    }
  }

  const shadow = Math.max(0, Math.min(1, (value - 50) / 14));
  const seer = Math.max(0, Math.min(1, (value - 63) / 20));
  orb.style.setProperty('--orb-shadow', shadow);
  orb.style.setProperty('--orb-seer', seer);
}

// Prop changes follow the rendered pose, including keyboard input and reduced motion.
hero.addEventListener('persona-render', updateStageProps);
reducedMotion.addEventListener('change', () => lanternAnimations.forEach(animation => animation.cancel()));
updateStageProps();

// Give the opening scene and both poses the first pass at the connection.
const openingImages = hero.querySelectorAll('.plate, .persona img');
Promise.allSettled(Array.from(openingImages, image => image.decode())).then(() => {
  for (const image of hero.querySelectorAll('img[data-src]')) {
    image.src = image.dataset.src;
  }
});
