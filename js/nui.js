export const IS_NUI = typeof window.GetParentResourceName === 'function';

const RESOURCE = IS_NUI ? window.GetParentResourceName() : 'tablette-secours';

const handlers = {
  onOpen: null,
  onClose: null,
  onRoute: null,

  onRequestClose: null,
  shouldEscapeClose: null,
};

export function post(callback, data = {}) {
  if (!IS_NUI) return Promise.resolve(null);

  return fetch(`https://${RESOURCE}/${callback}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=UTF-8' },
    body: JSON.stringify(data),
  }).catch(() => null);
}

export function requestClose() {
  post('close');
  if (handlers.onClose) handlers.onClose();
}

export function initNui(callbacks = {}) {
  Object.assign(handlers, callbacks);

  window.addEventListener('message', (event) => {
    const payload = event.data;
    if (!payload || typeof payload !== 'object') return;

    switch (payload.action) {
      case 'open':
        document.body.classList.remove('is-hidden-nui');
        if (payload.route && handlers.onRoute) handlers.onRoute(payload.route);
        if (handlers.onOpen) handlers.onOpen(payload);
        break;

      case 'close':
        document.body.classList.add('is-hidden-nui');
        if (handlers.onClose) handlers.onClose();
        break;

      case 'requestClose':
        if (handlers.onRequestClose) handlers.onRequestClose();
        else requestClose();
        break;

      case 'setRoute':
        if (payload.route && handlers.onRoute) handlers.onRoute(payload.route);
        break;

      default:

        break;
    }
  });

  window.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    if (handlers.shouldEscapeClose && !handlers.shouldEscapeClose()) return;

    event.preventDefault();

    if (handlers.onRequestClose) handlers.onRequestClose();
    else requestClose();
  });
}

export function registerServiceWorker() {
  if (IS_NUI) return;
  if (!('serviceWorker' in navigator)) return;
  if (location.protocol !== 'https:' && location.hostname !== 'localhost') return;

  navigator.serviceWorker.register('sw.js').catch(() => {

  });
}
