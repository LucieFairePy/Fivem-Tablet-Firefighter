const ROUTES = [
  { pattern: /^\/?$/, name: 'dashboard', params: () => ({}) },
  { pattern: /^\/categorie\/([\w-]+)$/, name: 'category', params: (m) => ({ id: m[1] }) },
  { pattern: /^\/fiche\/([\w-]+)$/, name: 'card', params: (m) => ({ id: m[1] }) },
  { pattern: /^\/recherche$/, name: 'search', params: () => ({}) },
  { pattern: /^\/favoris$/, name: 'favorites', params: () => ({}) },
  { pattern: /^\/fiches$/, name: 'all', params: () => ({}) },
  { pattern: /^\/outils\/([\w-]+)$/, name: 'tool', params: (m) => ({ id: m[1] }) },
  { pattern: /^\/sources$/, name: 'sources', params: () => ({}) },
  { pattern: /^\/reglages$/, name: 'settings', params: () => ({}) },
];

const DEPTH = {
  dashboard: 0,
  category: 1,
  search: 1,
  favorites: 1,
  all: 1,
  sources: 1,
  settings: 1,
  tool: 1,
  card: 2,
  notFound: 1,
};

const ctx = {
  container: null,
  render: null,
  current: { name: 'dashboard', params: {}, query: {} },

  getScrollRoot: null,
};

const SUPPORTS_VIEW_TRANSITIONS = typeof document.startViewTransition === 'function';

const SWAP_FALLBACK_MS = 220;

export function parseRoute(hash = location.hash) {
  const raw = hash.replace(/^#/, '') || '/';
  const [path, queryString = ''] = raw.split('?');
  const query = Object.fromEntries(new URLSearchParams(queryString));

  for (const route of ROUTES) {
    const match = path.match(route.pattern);
    if (match) {
      return { name: route.name, params: route.params(match), query };
    }
  }

  return { name: 'notFound', params: { path }, query };
}

export function buildUrl(name, params = {}, query = {}) {
  let path = '/';

  switch (name) {
    case 'category': path = `/categorie/${params.id}`; break;
    case 'card': path = `/fiche/${params.id}`; break;
    case 'tool': path = `/outils/${params.id}`; break;
    case 'search': path = '/recherche'; break;
    case 'favorites': path = '/favoris'; break;
    case 'all': path = '/fiches'; break;
    case 'sources': path = '/sources'; break;
    case 'settings': path = '/reglages'; break;
    default: path = '/';
  }

  const qs = new URLSearchParams(query).toString();
  return `#${path}${qs ? `?${qs}` : ''}`;
}

export function navigate(name, params = {}, query = {}, replace = false) {
  const url = buildUrl(name, params, query);

  if (replace) {
    location.replace(url);
  } else if (location.hash !== url) {
    location.hash = url;
  } else {

    handleRouteChange();
  }
}

export function goBack() {
  if (history.length > 1) {
    history.back();
  } else {
    navigate('dashboard');
  }
}

export function currentRoute() {
  return ctx.current;
}

async function transition(direction, swap) {
  const { container } = ctx;
  const reducedMotion = document.documentElement.dataset.motion === 'reduced'
    || window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reducedMotion) {
    swap();
    return;
  }

  if (SUPPORTS_VIEW_TRANSITIONS) {

    let swapped = false;

    const runSwap = () => {
      if (swapped) return;
      swapped = true;
      swap();
    };

    const viewTransition = document.startViewTransition(runSwap);

    const ignoreAbort = (error) => {
      if (error && error.name === 'AbortError') return;
      console.error('[routeur] transition de vue interrompue :', error);
    };

    viewTransition.ready.catch(ignoreAbort);
    viewTransition.finished.catch(ignoreAbort);
    viewTransition.updateCallbackDone.catch(ignoreAbort);

    setTimeout(runSwap, SWAP_FALLBACK_MS);
    return;
  }

  const outgoing = container.firstElementChild;

  if (outgoing) {
    outgoing.classList.add('is-leaving');
    await waitForAnimation(outgoing, 240);
  }

  swap();

  const incoming = container.firstElementChild;
  if (incoming && direction === 'back') {
    incoming.classList.add('is-entering-back');
  }
}

function waitForAnimation(el, fallbackMs) {
  return new Promise((resolve) => {
    let settled = false;

    const done = () => {
      if (settled) return;
      settled = true;
      el.removeEventListener('animationend', done);
      resolve();
    };

    el.addEventListener('animationend', done, { once: true });
    setTimeout(done, fallbackMs);
  });
}

function scrollToTop() {
  const root = ctx.getScrollRoot?.();

  if (root) {
    root.scrollTop = 0;
    return;
  }

  window.scrollTo({ top: 0, behavior: 'auto' });
}

function handleRouteChange() {
  const next = parseRoute();
  const previous = ctx.current;
  const direction = DEPTH[next.name] >= DEPTH[previous.name] ? 'forward' : 'back';

  ctx.current = next;

  transition(direction, () => {
    ctx.render(next);
    scrollToTop();
  });
}

export function startRouter(container, render, getScrollRoot = null) {
  ctx.container = container;
  ctx.render = render;
  ctx.getScrollRoot = getScrollRoot;

  window.addEventListener('hashchange', handleRouteChange);

  ctx.current = parseRoute();
  ctx.render(ctx.current);
}

export function bindRouteDelegation(root) {
  root.addEventListener('click', (event) => {
    const trigger = event.target.closest('[data-route]');
    if (!trigger) return;

    if (event.target.closest('[data-stop-route]')) return;

    event.preventDefault();

    const { route, routeParam } = trigger.dataset;
    navigate(route, routeParam ? { id: routeParam } : {});
  });
}
