const STORAGE_KEY = 'tablette-bspp:v1';

const PERSISTED_KEYS = ['age', 'theme', 'contrast', 'motion', 'favorites', 'recents'];

const MAX_RECENTS = 8;

const state = {

  age: 'adult',

  theme: 'dark',

  contrast: 'normal',

  motion: 'auto',

  favorites: [],

  recents: [],

  route: { name: 'dashboard', params: {} },

  query: '',

  drawerOpen: false,

  paletteOpen: false,
};

const listeners = new Set();

function readStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === 'object' ? parsed : null;
  } catch {

    return null;
  }
}

function writeStorage() {
  try {
    const payload = {};
    for (const key of PERSISTED_KEYS) payload[key] = state[key];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  } catch {

  }
}

export function hydrate() {
  const saved = readStorage();

  if (saved) {
    for (const key of PERSISTED_KEYS) {
      if (saved[key] !== undefined) state[key] = saved[key];
    }
  }

  applyDocumentAttributes();
}

function applyDocumentAttributes() {
  const root = document.documentElement;
  root.dataset.theme = state.theme;
  root.dataset.contrast = state.contrast;
  root.dataset.motion = state.motion === 'reduced' ? 'reduced' : 'auto';
}

export function getState() {
  return state;
}

export function setState(patch, changed = Object.keys(patch)) {
  Object.assign(state, patch);

  if (changed.some((key) => PERSISTED_KEYS.includes(key))) {
    writeStorage();
  }

  if (changed.some((key) => ['theme', 'contrast', 'motion'].includes(key))) {
    applyDocumentAttributes();
  }

  for (const listener of listeners) listener(state, changed);
}

export function subscribe(listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function toggleFavorite(cardId) {
  const favorites = state.favorites.includes(cardId)
    ? state.favorites.filter((id) => id !== cardId)
    : [cardId, ...state.favorites];

  setState({ favorites }, ['favorites']);
  return favorites.includes(cardId);
}

export function isFavorite(cardId) {
  return state.favorites.includes(cardId);
}

export function pushRecent(cardId) {
  const recents = [cardId, ...state.recents.filter((id) => id !== cardId)].slice(0, MAX_RECENTS);
  setState({ recents }, ['recents']);
}

export function toggleTheme() {
  const theme = state.theme === 'dark' ? 'light' : 'dark';
  setState({ theme }, ['theme']);
  return theme;
}

export function toggleContrast() {
  const contrast = state.contrast === 'high' ? 'normal' : 'high';
  setState({ contrast }, ['contrast']);
  return contrast;
}

export function toggleMotion() {
  const motion = state.motion === 'reduced' ? 'auto' : 'reduced';
  setState({ motion }, ['motion']);
  return motion;
}

export function resetPreferences() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {

  }

  setState({
    age: 'adult',
    theme: 'dark',
    contrast: 'normal',
    motion: 'auto',
    favorites: [],
    recents: [],
  });
}
