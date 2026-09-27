import { icon } from './icons.js';
import { requestClose, IS_NUI } from './nui.js';

const VIEWPORT_MARGIN = 0.97;

const MODELS = [
  { id: 'xl', w: 1680, h: 944, label: '15 pouces — dalle large' },
  { id: 'lg', w: 1440, h: 810, label: '13 pouces — dalle standard' },
  { id: 'md', w: 1280, h: 720, label: '12 pouces — dalle compacte' },
  { id: 'sm', w: 1120, h: 640, label: '10 pouces — dalle réduite' },
  { id: 'xs', w: 960, h: 560, label: '9 pouces — dalle minimale' },
];

const MODEL_MIN_SCALE = 0.92;

const MAX_SCALE = 2.4;

const BRIGHTNESS_STEPS = [1, 0.82, 0.64, 0.46];

const els = {};

let chrome = { extraW: 160, extraH: 94 };

let brightnessStep = 0;

let current = { model: MODELS[0], scale: 1 };

export function mountDevice() {
  document.body.innerHTML = `
    <div class="device" id="device">
     <div class="device__stage" id="device-stage">
      <div class="device__chassis" id="device-chassis">

        <div class="device__bezel">
          <div class="device__top">
            <span class="device__sensor" aria-hidden="true"></span>
            <span class="device__cam" aria-hidden="true"></span>
            <span class="device__topmark">Tactical Field Unit</span>
          </div>

          <div class="device__screen" id="device-screen">
            <div class="device__viewport" id="device-viewport"></div>
            <div class="device__overlays" id="device-overlays"></div>
            <div class="device__off" id="device-off" role="button" tabindex="-1"
                 aria-label="Dalle éteinte — toucher pour allumer">
              <span class="device__hint">${icon('power')}Appuyer pour allumer</span>
            </div>
            <div class="device__glass" aria-hidden="true"></div>
          </div>

          <div class="device__chin">
            <span class="device__engrave">Sapeurs-Pompiers de Paris</span>
            <span class="device__grille" aria-hidden="true">
              ${'<i></i>'.repeat(14)}
            </span>
          </div>
        </div>

        <div class="device__rail">
          <button class="device__btn device__btn--power" id="device-power"
                  aria-pressed="false"
                  aria-label="Allumer ou éteindre la tablette"
                  title="Allumer — puis éteindre et ranger la tablette">
            ${icon('power')}
          </button>

          <div class="device__leds" role="group" aria-label="Voyants d’état">
            <span class="device__led device__led--power" data-on="true"
                  title="Alimentation"></span>
            <span class="device__led device__led--batt" data-on="true"
                  title="Batterie"></span>
            <span class="device__led device__led--net" data-on="true"
                  title="Réseau"></span>
          </div>

          <button class="device__btn" data-device="brightness"
                  aria-label="Régler la luminosité de l’écran" title="Luminosité">
            ${icon('sun')}
          </button>

          <button class="device__btn" data-device="volume-up"
                  aria-label="Augmenter le volume" title="Volume +">
            ${icon('plus')}
          </button>

          <button class="device__btn" data-device="volume-down"
                  aria-label="Baisser le volume" title="Volume −">
            ${icon('minus')}
          </button>

          <span class="device__railmark">P-1</span>
        </div>
      </div>
     </div>
    </div>`;

  els.device = document.getElementById('device');
  els.stage = document.getElementById('device-stage');
  els.chassis = document.getElementById('device-chassis');
  els.screen = document.getElementById('device-screen');
  els.viewport = document.getElementById('device-viewport');
  els.overlays = document.getElementById('device-overlays');
  els.off = document.getElementById('device-off');
  els.powerBtn = document.getElementById('device-power');

  readChrome();
  bindHardwareButtons();
  observeViewport();

  return {
    appRoot: els.viewport,
    overlayRoot: els.overlays,
    screen: els.screen,
  };
}

function readChrome() {
  const style = getComputedStyle(document.documentElement);
  const px = (name) => parseFloat(style.getPropertyValue(name)) || 0;

  const shell = px('--dev-shell');
  const bezel = px('--dev-bezel');
  const chin = px('--dev-chin');
  const rail = px('--dev-rail');

  chrome = {
    extraW: bezel * 2 + rail + shell * 2,
    extraH: bezel + chin + shell * 2,
  };
}

function fitFor(model, availableW, availableH) {
  return Math.min(
    availableW / (model.w + chrome.extraW),
    availableH / (model.h + chrome.extraH),
  );
}

export function applyLayout() {
  const availableW = window.innerWidth * VIEWPORT_MARGIN;
  const availableH = window.innerHeight * VIEWPORT_MARGIN;

  const smallest = MODELS[MODELS.length - 1];
  let model = smallest;
  let scale = fitFor(smallest, availableW, availableH);

  for (const candidate of MODELS) {
    const fit = fitFor(candidate, availableW, availableH);

    if (fit >= MODEL_MIN_SCALE) {
      model = candidate;
      scale = fit;
      break;
    }
  }

  scale = Math.min(scale, MAX_SCALE);

  const root = document.documentElement;
  root.dataset.size = model.id;
  root.style.setProperty('--dev-screen-w', `${model.w}px`);
  root.style.setProperty('--dev-screen-h', `${model.h}px`);
  root.style.setProperty('--dev-scale', scale.toFixed(4));

  current = { model, scale };
  return current;
}

function observeViewport() {
  applyLayout();

  window.addEventListener('resize', applyLayout);
  window.addEventListener('orientationchange', applyLayout);

  if (typeof ResizeObserver === 'function') {
    new ResizeObserver(() => applyLayout()).observe(els.device);
  }

  if (window.visualViewport) {
    window.visualViewport.addEventListener('resize', applyLayout);
  }
}

const hardwareListeners = new Set();

export function onHardware(listener) {
  hardwareListeners.add(listener);
  return () => hardwareListeners.delete(listener);
}

function emit(action, value) {
  for (const listener of hardwareListeners) listener(action, value);
}

function bindHardwareButtons() {
  els.chassis.addEventListener('click', (event) => {
    const button = event.target.closest('[data-device]');
    if (!button) return;

    switch (button.dataset.device) {
      case 'brightness': cycleBrightness(); break;
      case 'volume-up': emit('volume', 1); break;
      case 'volume-down': emit('volume', -1); break;
      default: break;
    }
  });

  bindPowerButton();

  els.off.addEventListener('click', () => powerOn());
}

function bindPowerButton() {
  els.powerBtn.addEventListener('click', (event) => {
    event.preventDefault();
    togglePower();
  });
}

function cycleBrightness() {

  if (!powered) return;

  brightnessStep = (brightnessStep + 1) % BRIGHTNESS_STEPS.length;
  const value = BRIGHTNESS_STEPS[brightnessStep];

  document.documentElement.style.setProperty('--dev-brightness', value);
  emit('brightness', value);
}

let powered = false;

let transitioning = false;

let powerTimers = [];

export function isPoweredOn() {
  return powered;
}

function clearPowerTimers() {
  for (const id of powerTimers) clearTimeout(id);
  powerTimers = [];
}

function motionReduced() {
  return document.documentElement.dataset.motion === 'reduced'
    || window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function reflectPowerState() {
  els.screen.dataset.power = powered ? 'on' : 'off';
  els.chassis.dataset.devicePower = powered ? 'on' : 'off';

  els.powerBtn.setAttribute('aria-pressed', String(powered));

  els.viewport.setAttribute('aria-hidden', powered ? 'false' : 'true');
  els.viewport.inert = !powered;

  els.off.tabIndex = powered ? -1 : 0;
  els.off.setAttribute('aria-hidden', powered ? 'true' : 'false');
}

export function powerOn({ instant = false } = {}) {
  if (powered || transitioning) return false;

  clearPowerTimers();
  transitioning = true;
  powered = true;

  els.screen.classList.remove('is-powering-off');
  reflectPowerState();

  document.documentElement.style.setProperty(
    '--dev-brightness',
    BRIGHTNESS_STEPS[brightnessStep],
  );

  emit('power', 'on');

  if (instant || motionReduced()) {
    transitioning = false;
    return true;
  }

  const boot = document.createElement('div');
  boot.className = 'device__boot';
  boot.setAttribute('aria-hidden', 'true');
  boot.innerHTML = icon('cross', { size: 'hero' });
  els.screen.append(boot);

  powerTimers.push(setTimeout(() => {
    boot.classList.add('is-done');

    powerTimers.push(setTimeout(() => {
      boot.remove();
      transitioning = false;
    }, 340));
  }, 820));

  return true;
}

export function powerOff({ instant = false } = {}) {
  if (!powered || transitioning) return Promise.resolve();

  clearPowerTimers();
  transitioning = true;

  emit('power', 'off');

  const finish = () => {
    powered = false;
    els.screen.classList.remove('is-powering-off');
    reflectPowerState();
    transitioning = false;
  };

  if (instant || motionReduced()) {
    finish();
    return Promise.resolve();
  }

  els.screen.classList.add('is-powering-off');

  return new Promise((resolve) => {
    powerTimers.push(setTimeout(() => {
      finish();
      resolve();
    }, 440));
  });
}

export function togglePower() {
  if (powered) {
    closeDevice();
    return false;
  }

  powerOn();
  return true;
}

const STAGE_IN_MS = 620;
const STAGE_OUT_MS = 380;

let stageTimers = [];

function clearStageTimers() {
  for (const id of stageTimers) clearTimeout(id);
  stageTimers = [];
}

export function openDevice({ instant = false } = {}) {
  clearStageTimers();

  if (powered) powerOff({ instant: true });
  reflectPowerState();

  els.stage.classList.remove('is-leaving');

  if (instant || motionReduced()) {
    els.stage.classList.remove('is-entering');
    els.stage.classList.add('is-ready');
    emit('stage', 'opened');
    return;
  }

  els.stage.classList.remove('is-entering', 'is-ready');
  void els.stage.offsetWidth;
  els.stage.classList.add('is-entering');

  stageTimers.push(setTimeout(() => {
    els.stage.classList.add('is-ready');
    emit('stage', 'opened');
  }, STAGE_IN_MS));
}

export function closeDevice() {
  clearStageTimers();

  const screenOff = powered ? powerOff() : Promise.resolve();

  return screenOff.then(() => new Promise((resolve) => {
    const finish = () => {
      emit('stage', 'closed');

      if (IS_NUI) {
        requestClose();
      } else {

        stageTimers.push(setTimeout(() => openDevice(), 700));
      }

      resolve();
    };

    if (motionReduced()) {
      els.stage.classList.remove('is-entering', 'is-ready');
      els.stage.classList.add('is-leaving');
      finish();
      return;
    }

    els.stage.classList.remove('is-entering', 'is-ready');
    els.stage.classList.add('is-leaving');

    stageTimers.push(setTimeout(finish, STAGE_OUT_MS));
  }));
}

export function resetStage() {
  clearStageTimers();
  clearPowerTimers();

  if (powered) powerOff({ instant: true });

  els.stage.classList.remove('is-entering', 'is-ready', 'is-leaving');
}

export function getScrollRoot() {
  return els.viewport?.querySelector('.main') || null;
}

export function getOverlayRoot() {
  return els.overlays;
}

export function getDeviceInfo() {
  const { model, scale } = current;

  return {
    modelId: model.id,
    modelLabel: model.label,
    screen: `${model.w} × ${model.h}`,
    chassis: `${model.w + chrome.extraW} × ${model.h + chrome.extraH}`,
    scale,
    viewport: `${window.innerWidth} × ${window.innerHeight}`,
    brightness: BRIGHTNESS_STEPS[brightnessStep],
    powered,
  };
}

export const DEVICE_MODELS = MODELS;
