const PATHS = {

  home: '<path d="M3 10.2 12 3l9 7.2"/><path d="M5.5 9.3V20a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V9.3"/><path d="M10 21v-6h4v6"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20.2 20.2-4.1-4.1"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  close: '<path d="m6 6 12 12M18 6 6 18"/>',
  chevronRight: '<path d="m9 5 7 7-7 7"/>',
  arrowLeft: '<path d="M20 12H4"/><path d="m10 6-6 6 6 6"/>',

  star: '<path d="m12 2.8 2.9 5.9 6.5.9-4.7 4.6 1.1 6.5-5.8-3.1-5.8 3.1 1.1-6.5L2.6 9.6l6.5-.9z"/>',
  checkCircle: '<circle cx="12" cy="12" r="9"/><path d="m8 12.2 2.8 2.8L16 9.5"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  minus: '<path d="M5 12h14"/>',
  play: '<path d="M7 4.6 19.2 12 7 19.4z"/>',
  pause: '<path d="M8.5 4.5v15M15.5 4.5v15"/>',
  refresh: '<path d="M20.4 11a8.5 8.5 0 0 0-14.6-5.4L2.8 8.6"/><path d="M2.8 3.6v5h5"/><path d="M3.6 13a8.5 8.5 0 0 0 14.6 5.4l3-3"/><path d="M21.2 20.4v-5h-5"/>',
  printer: '<path d="M7 8.5V3h10v5.5"/><path d="M7 18.5H5.2a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h13.6a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H17"/><rect x="7" y="14.5" width="10" height="6.8" rx="1"/>',

  power: '<path d="M12 3.2v8.2"/><path d="M7.1 6.3a7.6 7.6 0 1 0 9.8 0"/>',
  sliders: '<path d="M4 7h9M19 7h1M4 17h3M13 17h7"/><circle cx="16" cy="7" r="2.4"/><circle cx="10" cy="17" r="2.4"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2.2v2.2M12 19.6v2.2M4.3 4.3l1.6 1.6M18.1 18.1l1.6 1.6M2.2 12h2.2M19.6 12h2.2M4.3 19.7l1.6-1.6M18.1 5.9l1.6-1.6"/>',
  moon: '<path d="M20.5 14.6A8.6 8.6 0 0 1 9.4 3.5a8.6 8.6 0 1 0 11.1 11.1z"/>',
  keyboard: '<rect x="2.5" y="6" width="19" height="12" rx="2.2"/><path d="M6.5 10h.01M10 10h.01M13.5 10h.01M17 10h.01M7 14.2h10"/>',
  grid: '<rect x="3.4" y="3.4" width="7.2" height="7.2" rx="1.6"/><rect x="13.4" y="3.4" width="7.2" height="7.2" rx="1.6"/><rect x="3.4" y="13.4" width="7.2" height="7.2" rx="1.6"/><rect x="13.4" y="13.4" width="7.2" height="7.2" rx="1.6"/>',
  layers: '<path d="m12 2.6 9.2 4.9-9.2 4.9-9.2-4.9z"/><path d="m2.8 12.6 9.2 4.9 9.2-4.9"/><path d="m2.8 17.1 9.2 4.9 9.2-4.9"/>',
  list: '<path d="M9 6h11M9 12h11M9 18h11"/><path d="M4.6 6h.01M4.6 12h.01M4.6 18h.01"/>',
  book: '<path d="M4 5.2A2.7 2.7 0 0 1 6.7 2.5H20v15.3H6.7A2.7 2.7 0 0 0 4 20.5z"/><path d="M4 17.8a2.7 2.7 0 0 1 2.7-2.7H20"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11.2v5.4"/><path d="M12 7.6h.01"/>',
  alert: '<path d="M12 3.6 2.9 19.3a1.4 1.4 0 0 0 1.2 2.1h15.8a1.4 1.4 0 0 0 1.2-2.1z"/><path d="M12 9.6v4.4"/><path d="M12 17.6h.01"/>',
  alertCircle: '<circle cx="12" cy="12" r="9"/><path d="M12 7.4v5.2"/><path d="M12 16.4h.01"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.4"/>',
  flow: '<rect x="3" y="2.8" width="6.4" height="6.4" rx="1.6"/><rect x="14.6" y="14.8" width="6.4" height="6.4" rx="1.6"/><rect x="3" y="14.8" width="6.4" height="6.4" rx="1.6"/><path d="M6.2 9.2v5.6"/><path d="M9.4 18h5.2"/>',

  lungs: '<path d="M12 3.4v7.1"/><path d="m12 10.5-3.4 2.1"/><path d="m12 10.5 3.4 2.1"/><path d="M8.6 12.6c0-2-2-2.6-3.2-1.3s-1.9 4.2-1.9 6.7c0 2 .9 3 2.3 3 1.6 0 2.8-1.4 2.8-3.4z"/><path d="M15.4 12.6c0-2 2-2.6 3.2-1.3s1.9 4.2 1.9 6.7c0 2-.9 3-2.3 3-1.6 0-2.8-1.4-2.8-3.4z"/>',
  droplet: '<path d="M12 2.8s6.5 6.6 6.5 11a6.5 6.5 0 0 1-13 0c0-4.4 6.5-11 6.5-11z"/>',
  glucose: '<path d="M12 2.8s6.5 6.6 6.5 11a6.5 6.5 0 0 1-13 0c0-4.4 6.5-11 6.5-11z"/><path d="M9.2 14.4h5.6"/><path d="M12 11.6v5.6"/>',
  heart: '<path d="M12 20.4 4.3 12.7a4.8 4.8 0 0 1 6.8-6.8l.9.9.9-.9a4.8 4.8 0 0 1 6.8 6.8z"/>',
  heartPulse: '<path d="M12 20.4 4.3 12.7a4.8 4.8 0 0 1 6.8-6.8l.9.9.9-.9a4.8 4.8 0 0 1 6.8 6.8z"/><path d="M3.4 12.6h3.9l1.5-2.7 2.4 5.2 1.8-3.4 1.2 1h6.4"/>',
  activity: '<path d="M2.4 12h4.2l2.4-6.6 4.5 13.2 2.5-6.6h5.6"/>',
  gauge: '<path d="M20.6 16.8a9.5 9.5 0 1 0-17.2 0"/><path d="m12 15.6 4.1-5.2"/><circle cx="12" cy="16.4" r="1.5"/>',
  thermometer: '<path d="M13.9 14.4V5.2a2.3 2.3 0 0 0-4.6 0v9.2a4.4 4.4 0 1 0 4.6 0z"/><path d="M11.6 8.4h2.3M11.6 11.2h2.3"/>',
  brain: '<path d="M9.7 3.3a2.6 2.6 0 0 0-2.6 2 2.5 2.5 0 0 0-2.3 2.6 2.6 2.6 0 0 0-1 3.6 2.6 2.6 0 0 0 .6 3.4 2.6 2.6 0 0 0 1.8 3.8 2.7 2.7 0 0 0 4.2 1.9 1.6 1.6 0 0 0 1.6-1.6V5a1.7 1.7 0 0 0-2.3-1.7z"/><path d="M14.3 3.3a2.6 2.6 0 0 1 2.6 2 2.5 2.5 0 0 1 2.3 2.6 2.6 2.6 0 0 1 1 3.6 2.6 2.6 0 0 1-.6 3.4 2.6 2.6 0 0 1-1.8 3.8 2.7 2.7 0 0 1-4.2 1.9 1.6 1.6 0 0 1-1.6-1.6V5a1.7 1.7 0 0 1 2.3-1.7z"/><path d="M8.3 9.4a2 2 0 0 0 2 1.4"/><path d="M15.7 9.4a2 2 0 0 1-2 1.4"/>',
  eye: '<path d="M2.2 12S5.8 5.6 12 5.6 21.8 12 21.8 12 18.2 18.4 12 18.4 2.2 12 2.2 12z"/><circle cx="12" cy="12" r="3.2"/>',
  hand: '<path d="M10 11.4V4.6a1.8 1.8 0 0 1 3.6 0v7.2"/><path d="M13.6 11.4V9.2a1.7 1.7 0 0 1 3.4 0v2.4"/><path d="M17 11.6v-1.2a1.7 1.7 0 0 1 3.4 0V16a6 6 0 0 1-6 6h-1.6a5.5 5.5 0 0 1-4.3-2.1l-3.6-4.4a1.8 1.8 0 0 1 2.7-2.3L10 15.6"/>',
  smile: '<circle cx="12" cy="12" r="9"/><path d="M8.2 14.2a4.8 4.8 0 0 0 7.6 0"/><path d="M9 9.4h.01M15 9.4h.01"/>',
  scale: '<path d="M12 3.4v17.2"/><path d="M5.5 20.6h13"/><path d="M4 8.6h16"/><path d="m4 8.6-2.4 5.8a3.4 3.4 0 0 0 4.8 0z"/><path d="m20 8.6 2.4 5.8a3.4 3.4 0 0 1-4.8 0z"/><circle cx="12" cy="5.4" r="2"/>',

  bandage: '<path d="M9.9 4.6 4.6 9.9a4.5 4.5 0 0 0 0 6.4l3.1 3.1a4.5 4.5 0 0 0 6.4 0l5.3-5.3a4.5 4.5 0 0 0 0-6.4l-3.1-3.1a4.5 4.5 0 0 0-6.4 0z"/><path d="m8.8 8.8 6.4 6.4"/><path d="M10.6 12h.01M12 10.6h.01M12 13.4h.01M13.4 12h.01"/>',
  bone: '<path d="m7.2 16.8 9.6-9.6"/><path d="M5.6 15.6a2.4 2.4 0 1 0-1.8 4.1 2.4 2.4 0 1 0 4.1-1.8"/><path d="M18.4 8.4a2.4 2.4 0 1 0 1.8-4.1 2.4 2.4 0 1 0-4.1 1.8"/>',
  flame: '<path d="M12 2.6c3 3.4 6.5 5.7 6.5 10a6.5 6.5 0 0 1-13 0c0-2.3 1-3.9 2.2-5.2.2 1.7.9 2.8 2 2.8 1.3 0 1.9-1.2 1.9-3 0-1.7-.3-3.1.4-4.6z"/>',
  zap: '<path d="M13.2 2.2 4 13.6h7L10.8 21.8 20 10.4h-7z"/>',
  waves: '<path d="M2 7.4c2 0 2 1.8 4 1.8s2-1.8 4-1.8 2 1.8 4 1.8 2-1.8 4-1.8 2 1.8 4 1.8"/><path d="M2 12.4c2 0 2 1.8 4 1.8s2-1.8 4-1.8 2 1.8 4 1.8 2-1.8 4-1.8 2 1.8 4 1.8"/><path d="M2 17.4c2 0 2 1.8 4 1.8s2-1.8 4-1.8 2 1.8 4 1.8 2-1.8 4-1.8 2 1.8 4 1.8"/>',
  snowflake: '<path d="M12 2.4v19.2"/><path d="m3.7 7.2 16.6 9.6"/><path d="m20.3 7.2-16.6 9.6"/><path d="m9.2 5.2 2.8 2.8 2.8-2.8"/><path d="m9.2 18.8 2.8-2.8 2.8 2.8"/>',
  cloud: '<path d="M6.8 18.6h10.6a4.4 4.4 0 0 0 .7-8.7 6.1 6.1 0 0 0-11.4-1.7 4.2 4.2 0 0 0 .1 10.4z"/>',
  car: '<path d="M5 17.6H3.7a1.1 1.1 0 0 1-1.1-1.1v-3a2 2 0 0 1 .5-1.3l1.7-2 1.5-3.4A1.7 1.7 0 0 1 8 5.7h8a1.7 1.7 0 0 1 1.6 1.1l1.5 3.4 1.7 2a2 2 0 0 1 .5 1.3v3a1.1 1.1 0 0 1-1.1 1.1H19"/><circle cx="7.2" cy="17.6" r="2.3"/><circle cx="16.8" cy="17.6" r="2.3"/><path d="M4.3 12.2h15.4"/>',
  siren: '<path d="M7 17.6v-4.8a5 5 0 0 1 10 0v4.8"/><rect x="4.4" y="17.6" width="15.2" height="3.8" rx="1.4"/><path d="M12 4.4V2.2M5.4 7 3.9 5.5M18.6 7l1.5-1.5"/>',

  user: '<circle cx="12" cy="7.8" r="4"/><path d="M4.4 21a7.6 7.6 0 0 1 15.2 0"/>',
  child: '<circle cx="12" cy="5.6" r="3"/><path d="M12 8.6v7.2"/><path d="M8.2 11.4h7.6"/><path d="m9.2 21 2.8-5.2L14.8 21"/>',
  baby: '<circle cx="12" cy="12.6" r="8.4"/><path d="M9.2 11.4h.01M14.8 11.4h.01"/><path d="M9.6 15.6a3.6 3.6 0 0 0 4.8 0"/><path d="M12 4.2V2.2"/>',
  helmet: '<path d="M4 17c0-5.4 3.4-9.2 8-9.2s8 3.8 8 9.2"/><path d="M2.6 17h18.8a1.8 1.8 0 0 1 0 3.6H2.6a1.8 1.8 0 0 1 0-3.6z"/><path d="M12 7.6 10 12.4h4z"/>',

  stethoscope: '<path d="M5.6 3v5.6a4.5 4.5 0 0 0 9 0V3"/><path d="M4.2 3h2.8M13.2 3h2.8"/><path d="M10.1 13v2.3a4.4 4.4 0 0 0 8.8 0v-1.5"/><circle cx="18.7" cy="11.6" r="2.3"/>',
  pill: '<path d="M14.1 3.4 3.4 14.1a5 5 0 0 0 7.1 7.1L21.2 10.5a5 5 0 0 0-7.1-7.1z"/><path d="m8.8 8.8 6.4 6.4"/>',
  vial: '<path d="M8 2.4h8"/><path d="M9.6 2.4v5.4L6 17.3a3 3 0 0 0 2.8 4.1h6.4a3 3 0 0 0 2.8-4.1L14.4 7.8V2.4"/><path d="M7 14.6h10"/>',
  cross: '<path d="M9.2 2.8h5.6v6.4h6.4v5.6h-6.4v6.4H9.2v-6.4H2.8V9.2h6.4z"/>',
  radio: '<path d="M4.9 4.9a10 10 0 0 0 0 14.2"/><path d="M19.1 4.9a10 10 0 0 1 0 14.2"/><path d="M7.9 7.9a6 6 0 0 0 0 8.2"/><path d="M16.1 7.9a6 6 0 0 1 0 8.2"/><circle cx="12" cy="12" r="2.2"/>',
  clipboard: '<rect x="4.4" y="4" width="15.2" height="17.4" rx="2.2"/><rect x="8" y="1.9" width="8" height="4.2" rx="1.3"/><path d="M8.4 11h7.2M8.4 15h7.2M8.4 18.6h4"/>',
  shield: '<path d="M12 21.5s8-3.6 8-9.5V5.4L12 2.5 4 5.4V12c0 5.9 8 9.5 8 9.5z"/>',
  wind: '<path d="M3 8.4h9.4a3 3 0 1 0-3-3"/><path d="M3 12.4h13.9a3 3 0 1 1-3 3"/><path d="M3 16.4h6.4a2.5 2.5 0 1 1-2.5 2.5"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 6.8v5.4l3.4 2"/>',
};

const FALLBACK = 'alertCircle';

export const iconNames = Object.freeze(Object.keys(PATHS));

export function hasIcon(name) {
  return Object.prototype.hasOwnProperty.call(PATHS, name);
}

export function mountSprite() {
  if (document.getElementById('icon-sprite')) return;

  const symbols = Object.entries(PATHS)
    .map(([name, body]) => `<symbol id="i-${name}" viewBox="0 0 24 24">${body}</symbol>`)
    .join('');

  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.id = 'icon-sprite';
  svg.setAttribute('aria-hidden', 'true');
  svg.style.cssText = 'position:absolute;width:0;height:0;overflow:hidden';
  svg.innerHTML = symbols;
  document.body.prepend(svg);
}

export function icon(name, opts = {}) {
  const { size = 'md', cls = '', label = '' } = opts;
  const key = hasIcon(name) ? name : FALLBACK;
  const sizeCls = size === 'md' ? '' : ` icon--${size}`;
  const extra = cls ? ` ${cls}` : '';
  const a11y = label
    ? ` role="img" aria-label="${escapeAttr(label)}"`
    : ' aria-hidden="true"';

  return `<svg class="icon${sizeCls}${extra}"${a11y}><use href="#i-${key}"/></svg>`;
}

function escapeAttr(value) {
  return String(value).replace(/[&<>"']/g, (ch) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[ch]));
}
