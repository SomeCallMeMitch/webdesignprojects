const hero = document.querySelector('.hero');
const range = hero.querySelector('.persona-range');
const track = hero.querySelector('.track');
const thumb = track.querySelector('.knob');
const directSlider = hero.hasAttribute('data-card-reveal-demo');
const audioPath = directSlider ? 'assets/audio/remix/' : 'assets/audio/';
const hatReveal = 64;
const personaRender = new Event('persona-render');
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
const soundChoice = hero.querySelector('.sound-choice');
const soundName = hero.querySelector('#sound-name');
const soundToggle = hero.querySelector('.sound-toggle');
const transitionAudio = hero.querySelector('.transition-audio');
const sounds = [
  { name: 'Magic Chimes', file: 'magic-chimes.wav' },
  { name: 'Spell Whoosh', file: 'spell-whoosh.wav' },
  { name: 'Mystery Bell', file: 'mystery-bell.wav' },
  { name: 'Circus Magic', file: 'circus-magic.wav', loop: true },
];
const cards = [
  { element: hero.querySelector('[data-flight="high"]'), start: 58, end: 90, x: 4.2, y: -5.2, arc: 2.4, roll: 42, opacity: .83 },
  { element: hero.querySelector('[data-flight="low"]'), start: 69, end: 100, x: 9.2, y: 8.8, arc: 2, roll: 54, opacity: .8 },
  { element: hero.querySelector('[data-flight="ace"]'), start: 63, end: 97, x: 11, y: 2.2, arc: 2.2, roll: 25, opacity: .95 },
];
const lights = [
  { element: hero.querySelector('.beam-left'), x: .336, y: .137, home: 34, angle: 0, target: 0 },
  { element: hero.querySelector('.beam-center'), x: .523, y: .134, home: 0, angle: 0, target: 0 },
  { element: hero.querySelector('.beam-right'), x: .714, y: .146, home: -37, angle: 0, target: 0 },
];

let shown = Number(range.value);
let selectedPersona = shown;
let soundSide = shown > 50 ? 1 : -1;
let scene;
let rail;
let frame = 0;
let lastTime = 0;
let soundIndex = 0;
let soundEnabled = false;
let playedDuringDrag = false;
let repeatingKey = false;

function playTransitionSound() {
  transitionAudio.currentTime = 0;
  transitionAudio.play().catch(() => {
    // A mute or sound change can interrupt a pending play request.
  });
}

function updateTransitionAudio(previous, value, playCue) {
  if (directSlider) {
    const side = value >= hatReveal ? 1 : value < 50 ? -1 : soundSide;
    if (side === soundSide) return;
    soundSide = side;
    if (!soundEnabled) return;
    if (sounds[soundIndex].loop && side < 0) transitionAudio.pause();
    else playTransitionSound();
    return;
  }

  if (!soundEnabled || previous === value) return;

  if (!sounds[soundIndex].loop) {
    if (playCue) playTransitionSound();
  } else if (previous <= 50 && value > 50) {
    playTransitionSound();
  } else if (value <= 50) {
    transitionAudio.pause();
  }
}

soundChoice.addEventListener('click', () => {
  transitionAudio.pause();
  soundIndex = (soundIndex + 1) % sounds.length;
  const sound = sounds[soundIndex];
  soundName.textContent = sound.name;
  transitionAudio.loop = Boolean(sound.loop);
  transitionAudio.src = audioPath + sound.file;
});

soundToggle.addEventListener('click', () => {
  soundEnabled = !soundEnabled;
  soundToggle.textContent = soundEnabled ? 'Mute sound' : 'Enable sound';
  transitionAudio.preload = soundEnabled ? 'auto' : 'none';
  if (!soundEnabled) transitionAudio.pause();
  else if (directSlider) transitionAudio.load();
});

function measureSlider() {
  scene = hero.getBoundingClientRect();
  rail = track.getBoundingClientRect();
}

function renderThumb(value) {
  thumb.style.setProperty('--thumb-x', `${rail.width * value / 100}px`);
}

function renderCards(value) {
  const reduce = reducedMotion.matches;
  for (const card of cards) {
    const progress = Math.max(0, Math.min(1, (value - card.start) / (card.end - card.start)));
    if (progress === card.progress && reduce === card.reduced) continue;
    card.progress = progress;
    card.reduced = reduce;
    const travel = reduce ? 1 : 1 - (1 - progress) ** 2;
    const lift = Math.sin(Math.PI * travel) * card.arc;
    const style = card.element.style;
    style.opacity = card.opacity * (reduce ? Number(progress >= .5) : Math.min(1, progress * 3));
    style.setProperty('--card-x', `${card.x * travel}cqw`);
    style.setProperty('--card-y', `${card.y * travel - lift}cqw`);
    style.setProperty('--card-roll', `${card.roll - 34 * (1 - travel)}deg`);
    style.setProperty('--card-scale', .22 + .78 * travel);
    style.setProperty('--card-flip', `${154 - 172 * travel}deg`);
  }
}

function renderPersona(value) {
  const amount = value / 100;
  const position = 100 * (rail.left - scene.left + rail.width * amount) / scene.width;
  const reveal = position + 8 * (2 * amount - 1) ** 3;
  const revealPercent = Math.max(0, Math.min(100, reveal));
  if (directSlider) {
    // Keep the thumb on its own layer and move the glowing seam with a transform.
    hero.style.setProperty('--reveal-x', `${scene.width * revealPercent / 100}px`);
  }
  hero.style.setProperty('--persona', `${value}%`);
  hero.style.setProperty('--reveal', `${revealPercent}%`);
  hero.style.setProperty('--seam', Math.min(.87, Math.min(value, 100 - value) / 10));
  hero.style.setProperty('--mood', .52 + .4 * amount);
  hero.style.setProperty('--face', Math.max(0, 1 - Math.abs(value - 50) / 17));
  // Lift the Playful portrait while the seam crosses the face, then ease back to its original pose.
  const faceOverlap = Math.max(0, 1 - ((value - 50) / 32) ** 2) ** 2;
  hero.style.setProperty('--face-lift', `${-.65 * faceOverlap}cqw`);
  renderCards(value);
  if (directSlider) hero.dispatchEvent(personaRender);
}

function renderFrame(time) {
  const elapsed = lastTime ? Math.min(time - lastTime, 50) : 16.7;
  lastTime = time;
  const next = selectedPersona;
  let moving = false;

  if (shown !== next) {
    shown = directSlider ? next : shown + (next - shown) * (1 - Math.exp(-elapsed / 65));
    if (Math.abs(next - shown) < .12) shown = next;
    renderPersona(shown);
    moving = shown !== next;
  }

  for (const light of lights) {
    if (light.angle === light.target) continue;
    light.angle += (light.target - light.angle) * (1 - Math.exp(-elapsed / 170));
    if (Math.abs(light.target - light.angle) < .03) light.angle = light.target;
    light.element.style.setProperty('--aim', `${light.angle}deg`);
    moving ||= light.angle !== light.target;
  }

  frame = moving ? requestAnimationFrame(renderFrame) : 0;
  if (!frame) lastTime = 0;
}

function wake() {
  if (!frame && !document.hidden) frame = requestAnimationFrame(renderFrame);
}

function selectPersona(playCue = false, value = Number(range.value)) {
  const percent = Number(range.value);
  const label = percent === 0 ? 'The Gentleman' : percent === 100 ? 'The Playful Magician' : `${percent}% toward The Playful Magician`;
  range.setAttribute('aria-valuetext', label);
  updateTransitionAudio(selectedPersona, value, playCue);
  selectedPersona = value;
  if (directSlider) renderThumb(value);
  if (reducedMotion.matches) {
    shown = value;
    renderPersona(shown);
  } else {
    wake();
  }
}

function resetLights() {
  for (const light of lights) light.target = 0;
  wake();
}

range.addEventListener('keydown', event => {
  repeatingKey = event.repeat;
});
range.addEventListener('input', () => selectPersona(!repeatingKey));
range.addEventListener('keyup', () => { repeatingKey = false; });
range.addEventListener('blur', () => { repeatingKey = false; });

function seekFromPointer(event) {
  const position = 100 * (event.clientX - rail.left) / rail.width;
  range.value = Math.round(position);
  const value = directSlider ? Math.max(0, Math.min(100, position)) : Number(range.value);
  if (value === selectedPersona) return;
  selectPersona(!playedDuringDrag, value);
  playedDuringDrag = true;
}

range.addEventListener('pointerdown', event => {
  if (event.button !== 0 || !event.isPrimary) return;
  event.preventDefault();
  measureSlider();
  range.focus({ preventScroll: true });
  range.setPointerCapture(event.pointerId);
  playedDuringDrag = false;
  seekFromPointer(event);
});
range.addEventListener('pointermove', event => {
  if (range.hasPointerCapture(event.pointerId)) seekFromPointer(event);
});

for (const button of hero.querySelectorAll('[data-persona]')) {
  button.addEventListener('click', () => {
    range.value = button.dataset.persona;
    selectPersona(true);
  });
}

hero.addEventListener('pointermove', event => {
  if (event.pointerType === 'touch' || reducedMotion.matches) return;
  // During a drag the slider and cards already supply the movement.
  if (directSlider && range.hasPointerCapture(event.pointerId)) return;
  const bounds = hero.getBoundingClientRect();
  const x = event.clientX - bounds.left;
  const y = event.clientY - bounds.top;
  for (const light of lights) {
    const dx = x - bounds.width * light.x;
    const dy = Math.max(y - bounds.height * light.y, bounds.height * .23);
    const aim = Math.atan2(dx, dy) * 180 / Math.PI;
    light.target = Math.max(-15, Math.min(15, (light.home - aim) * .46));
  }
  wake();
});
hero.addEventListener('pointerleave', resetLights);

reducedMotion.addEventListener('change', () => {
  if (!reducedMotion.matches) {
    renderCards(shown);
    return;
  }
  cancelAnimationFrame(frame);
  frame = 0;
  lastTime = 0;
  for (const light of lights) {
    light.angle = light.target = 0;
    light.element.style.removeProperty('--aim');
  }
  selectPersona(false, selectedPersona);
});

document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    cancelAnimationFrame(frame);
    frame = 0;
    lastTime = 0;
    for (const light of lights) light.target = 0;
  } else {
    wake();
  }
});

function resizeScene() {
  measureSlider();
  if (directSlider) renderThumb(selectedPersona);
  renderPersona(shown);
}

new ResizeObserver(resizeScene).observe(hero);
resizeScene();
