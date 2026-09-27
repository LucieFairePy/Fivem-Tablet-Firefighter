import { icon, mountSprite } from './icons.js';
import { escapeHtml, searchCards, highlight, debounce } from './search.js';
import { CATEGORIES, NAV_GROUPS, AGE_GROUPS, categoryLabel } from './data/taxonomy.js';
import { CARDS, CARDS_BY_ID, cardsInCategory, validateData, DATA_STATS } from './data/index.js';
import {
  hydrate, getState, setState, subscribe,
  toggleFavorite, pushRecent, toggleTheme, toggleContrast, toggleMotion, resetPreferences,
} from './store.js';
import { startRouter, bindRouteDelegation, navigate, currentRoute, goBack } from './router.js';
import { initNui, registerServiceWorker, IS_NUI } from './nui.js';
import {
  mountDevice, openDevice, closeDevice, resetStage, isPoweredOn,
  getScrollRoot, getOverlayRoot, onHardware,
} from './device.js';
import { renderDashboard } from './views/dashboard.js';
import { renderCard } from './views/card.js';
import { renderCategory, renderSearch, renderFavorites, renderAllCards, renderNotFound } from './views/lists.js';
import { renderTool, mountTool } from './views/tools.js';
import { renderSources, renderSettings } from './views/static.js';

const dom = {};

function buildShell(appRoot, overlayRoot) {
  appRoot.innerHTML = `
    <a class="skip-link" href="#main-content">Aller au contenu</a>

    <div class="app">
      ${renderSidebar()}

      <div class="main">
        ${renderTopbar()}
        <main class="content" id="main-content" tabindex="-1"></main>
        ${renderFooter()}
      </div>
    </div>

    <div class="backdrop" id="backdrop" hidden></div>
  `;

  overlayRoot.innerHTML = '<div class="toasts" id="toasts" role="status" aria-live="polite"></div>';

  dom.appRoot = appRoot;
  dom.overlayRoot = overlayRoot;
  dom.sidebar = appRoot.querySelector('.sidebar');
  dom.content = appRoot.querySelector('#main-content');
  dom.backdrop = appRoot.querySelector('#backdrop');
  dom.toasts = overlayRoot.querySelector('#toasts');
  dom.navItems = [...appRoot.querySelectorAll('.nav-item')];
}

function renderSidebar() {
  const fixedTop = [
    { route: 'dashboard', icon: 'home', label: 'Tableau de bord' },
    { route: 'favorites', icon: 'star', label: 'Mes favoris' },
    { route: 'all', icon: 'layers', label: 'Toutes les fiches' },
  ];

  const fixedBottom = [
    { route: 'sources', icon: 'book', label: 'Référentiels' },
    { route: 'settings', icon: 'sliders', label: 'Réglages' },
  ];

  const navItem = ({ route, param, icon: iconName, label, count }) => `
    <button class="nav-item" data-route="${route}"${param ? ` data-route-param="${param}"` : ''}>
      ${icon(iconName)}
      <span>${escapeHtml(label)}</span>
      ${count ? `<span class="nav-item__count">${count}</span>` : ''}
    </button>`;

  const groups = NAV_GROUPS.map((group) => {
    const items = CATEGORIES
      .filter((cat) => cat.group === group.id)
      .map((cat) => navItem({
        route: 'category',
        param: cat.id,
        icon: cat.icon,
        label: cat.short,
        count: cardsInCategory(cat.id).length,
      }))
      .join('');

    if (!items) return '';

    return `<p class="nav-group__label">${escapeHtml(group.label)}</p>${items}`;
  }).join('');

  return `
    <aside class="sidebar" id="sidebar">
      <div class="sidebar__brand">
        <span class="sidebar__crest">${icon('helmet', { size: 'lg' })}</span>
        <div>
          <p class="sidebar__name">SAPEURS-POMPIERS<br>DE PARIS</p>
          <span class="sidebar__motto">Sauver · Protéger · Servir</span>
        </div>
      </div>

      <nav class="sidebar__nav" id="nav" aria-label="Navigation principale">
        ${fixedTop.map(navItem).join('')}
        ${groups}
        <p class="nav-group__label">Informations</p>
        ${fixedBottom.map(navItem).join('')}
      </nav>

      <div class="sidebar__footer">
        <p class="sidebar__tagline">
          ${icon('shield', { size: 'sm' })}
          <span>Toujours plus loin<br>pour vous</span>
        </p>
      </div>
    </aside>`;
}

function renderTopbar() {
  return `
    <header class="topbar">
      <button class="btn btn--icon topbar__burger" id="burger"
              aria-label="Ouvrir le menu" aria-expanded="false" aria-controls="sidebar">
        ${icon('menu')}
      </button>

      <div class="topbar__mark">
        <span class="topbar__badge">${icon('cross')}</span>
        <div>
          <p class="topbar__title">Tablette secourisme</p>
          <span class="topbar__subtitle">Constantes · Bilan · Urgences · Conduites à tenir</span>
        </div>
      </div>

      <button class="search" id="search-trigger" aria-label="Rechercher (Ctrl + K)">
        ${icon('search')}
        <span style="flex:1;text-align:left;color:var(--text-faint);font-size:var(--fs-sm)">
          Rechercher une constante, une pathologie, un geste…
        </span>
        <span class="search__kbd"><span class="kbd">Ctrl</span><span class="kbd">K</span></span>
      </button>

      <div class="topbar__actions">
        <button class="btn btn--icon btn--ghost" data-action="theme" aria-label="Changer de thème">
          ${icon('sun')}
        </button>
        <button class="btn btn--icon btn--ghost" data-action="help" aria-label="Raccourcis clavier">
          ${icon('keyboard')}
        </button>
        ${IS_NUI ? `
          <button class="btn btn--icon btn--danger" data-action="close-nui" aria-label="Fermer la tablette">
            ${icon('close')}
          </button>` : ''}
      </div>
    </header>`;
}

function renderFooter() {
  return `
    <footer class="footer">
      <span>${icon('info', { size: 'sm' })} Support pédagogique — révision ${DATA_STATS.revision}</span>
      <strong>${DATA_STATS.cards} fiches · ${DATA_STATS.categories} catégories</strong>
      <span>Les procédures de service et la régulation médicale priment.</span>
    </footer>`;
}

function renderRoute(route) {
  let html;

  switch (route.name) {
    case 'dashboard': html = renderDashboard(); break;
    case 'category': html = renderCategory(route.params.id); break;
    case 'card': html = renderCard(route.params.id); break;
    case 'search': html = renderSearch(route.query.q); break;
    case 'favorites': html = renderFavorites(); break;
    case 'all': html = renderAllCards(); break;
    case 'tool': html = renderTool(route.params.id); break;
    case 'sources': html = renderSources(); break;
    case 'settings': html = renderSettings(); break;
    default: html = renderNotFound(route.params.path);
  }

  dom.content.innerHTML = html;

  if (route.name === 'tool') mountTool(route.params.id, dom.content);
  if (route.name === 'card') registerVisit(route.params.id);

  updateNavState(route);
  updateDocumentTitle(route);

  closeDrawer();
}

function registerVisit(cardId) {
  if (CARDS_BY_ID.has(cardId)) pushRecent(cardId);
}

function updateNavState(route) {
  for (const item of dom.navItems) {
    const matches = item.dataset.route === route.name
      && (!item.dataset.routeParam || item.dataset.routeParam === route.params.id);

    item.setAttribute('aria-current', matches ? 'page' : 'false');
  }

  if (route.name === 'card') {
    const card = CARDS_BY_ID.get(route.params.id);
    if (!card) return;

    const parent = dom.navItems.find(
      (item) => item.dataset.route === 'category' && item.dataset.routeParam === card.cat,
    );
    if (parent) parent.setAttribute('aria-current', 'page');
  }
}

function updateDocumentTitle(route) {
  const base = 'Tablette secourisme';
  let suffix = '';

  switch (route.name) {
    case 'card': {
      const card = CARDS_BY_ID.get(route.params.id);
      suffix = card ? card.title : 'Fiche';
      break;
    }
    case 'category': suffix = categoryLabel(route.params.id, true); break;
    case 'search': suffix = `Recherche : ${route.query.q || ''}`; break;
    case 'favorites': suffix = 'Favoris'; break;
    case 'all': suffix = 'Toutes les fiches'; break;
    case 'tool': suffix = 'Outils'; break;
    case 'sources': suffix = 'Référentiels'; break;
    case 'settings': suffix = 'Réglages'; break;
    default: suffix = '';
  }

  document.title = suffix ? `${suffix} — ${base}` : base;
}

function openDrawer() {
  setState({ drawerOpen: true }, ['drawerOpen']);
  dom.sidebar.classList.add('is-open', 'is-drawer');
  dom.backdrop.hidden = false;
  requestAnimationFrame(() => dom.backdrop.classList.add('is-open'));
  dom.appRoot.querySelector('#burger').setAttribute('aria-expanded', 'true');
}

function closeDrawer() {
  if (!dom.sidebar.classList.contains('is-open')) return;

  setState({ drawerOpen: false }, ['drawerOpen']);
  dom.sidebar.classList.remove('is-open');
  dom.backdrop.classList.remove('is-open');
  dom.appRoot.querySelector('#burger').setAttribute('aria-expanded', 'false');

  setTimeout(() => { dom.backdrop.hidden = true; }, 240);
}

const palette = { el: null, results: [], cursor: 0 };

function openPalette(initialQuery = '') {
  if (palette.el) return;

  const overlay = document.createElement('div');
  overlay.className = 'modal';
  overlay.id = 'palette';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-label', 'Recherche');

  overlay.innerHTML = `
    <div class="modal__panel">
      <div class="palette__input">
        ${icon('search', { size: 'lg' })}
        <input id="palette-input" type="text" autocomplete="off" spellcheck="false"
               placeholder="Constante, pathologie, geste, abréviation…"
               aria-label="Rechercher" aria-controls="palette-results">
        <span class="kbd">Échap</span>
      </div>
      <div class="palette__results" id="palette-results" role="listbox"></div>
    </div>`;

  getOverlayRoot().append(overlay);
  palette.el = overlay;

  const input = overlay.querySelector('#palette-input');
  input.value = initialQuery;

  const update = debounce(() => renderPaletteResults(input.value), 90);

  input.addEventListener('input', update);
  input.addEventListener('keydown', handlePaletteKeys);

  overlay.addEventListener('click', (event) => {
    if (event.target === overlay) closePalette();
  });

  overlay.addEventListener('click', (event) => {
    const item = event.target.closest('.palette__item');
    if (!item) return;
    openPaletteItem(Number(item.dataset.index));
  });

  renderPaletteResults(initialQuery);
  input.focus();
  input.select();
}

function closePalette() {
  if (!palette.el) return;

  palette.el.remove();
  palette.el = null;
  palette.results = [];
  palette.cursor = 0;

  dom.content.focus({ preventScroll: true });
}

function renderPaletteResults(query) {
  const container = palette.el?.querySelector('#palette-results');
  if (!container) return;

  const trimmed = query.trim();

  if (!trimmed) {
    const { favorites, recents } = getState();
    const suggestionIds = [...new Set([...favorites, ...recents])].slice(0, 8);
    const suggestions = suggestionIds.map((id) => CARDS_BY_ID.get(id)).filter(Boolean);

    palette.results = suggestions.length ? suggestions : CARDS.slice(0, 8);
    palette.cursor = 0;

    container.innerHTML =
      `<p class="palette__group">${suggestions.length ? 'Favoris et récents' : 'Suggestions'}</p>`
      + palette.results.map((card, index) => paletteItem(card, index, '')).join('');
    return;
  }

  palette.results = searchCards(trimmed, 12).map((result) => result.card);
  palette.cursor = 0;

  if (palette.results.length === 0) {
    container.innerHTML = `
      <p class="palette__group">Aucun résultat</p>
      <p class="calc__hint" style="padding:var(--sp-3)">
        Aucune fiche ne correspond à « ${escapeHtml(trimmed)} ».
        Essayez une abréviation (ACR, OVA, TRC) ou un terme plus court.
      </p>`;
    return;
  }

  container.innerHTML =
    `<p class="palette__group">${palette.results.length} résultat${palette.results.length > 1 ? 's' : ''}</p>`
    + palette.results.map((card, index) => paletteItem(card, index, trimmed)).join('');
}

function paletteItem(card, index, query) {
  return `
    <button class="palette__item" role="option" data-index="${index}"
            aria-selected="${index === palette.cursor}">
      ${icon(card.icon)}
      <span class="palette__label">${query ? highlight(card.title, query) : escapeHtml(card.title)}</span>
      <span class="palette__cat">${escapeHtml(categoryLabel(card.cat, true))}</span>
    </button>`;
}

function moveCursor(delta) {
  if (palette.results.length === 0) return;

  palette.cursor = (palette.cursor + delta + palette.results.length) % palette.results.length;

  const items = palette.el.querySelectorAll('.palette__item');
  items.forEach((item, index) => {
    item.setAttribute('aria-selected', index === palette.cursor ? 'true' : 'false');
  });

  items[palette.cursor]?.scrollIntoView({ block: 'nearest' });
}

function openPaletteItem(index) {
  const card = palette.results[index];
  if (!card) return;

  closePalette();
  navigate('card', { id: card.id });
}

function handlePaletteKeys(event) {
  switch (event.key) {
    case 'ArrowDown':
      event.preventDefault();
      moveCursor(1);
      break;
    case 'ArrowUp':
      event.preventDefault();
      moveCursor(-1);
      break;
    case 'Enter':
      event.preventDefault();
      if (palette.results.length > 0) {
        openPaletteItem(palette.cursor);
      } else {

        const query = event.target.value.trim();
        closePalette();
        if (query) navigate('search', {}, { q: query });
      }
      break;
    case 'Escape':
      event.preventDefault();

      event.stopPropagation();
      closePalette();
      break;
    default:
      break;
  }
}

function openHelp() {
  if (document.getElementById('help-modal')) return;

  const shortcuts = [
    [['Ctrl', 'K'], 'Ouvrir la recherche'],
    [['/'], 'Ouvrir la recherche'],
    [['↑', '↓'], 'Parcourir les résultats'],
    [['Entrée'], 'Ouvrir le résultat sélectionné'],
    [['Alt', '←'], 'Revenir en arrière'],
    [['Échap'], IS_NUI ? 'Fermer la surcouche, puis la tablette' : 'Fermer la surcouche'],
    [['?'], 'Afficher cette aide'],
  ];

  const overlay = document.createElement('div');
  overlay.className = 'modal';
  overlay.id = 'help-modal';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-label', 'Raccourcis clavier');

  overlay.innerHTML = `
    <div class="modal__panel">
      <div class="modal__head">
        ${icon('keyboard', { size: 'lg' })}
        <h2 class="modal__title">Raccourcis clavier</h2>
        <button class="btn btn--icon btn--ghost" data-close-help aria-label="Fermer">
          ${icon('close')}
        </button>
      </div>
      <div class="modal__body">
        <ul class="block__list">
          ${shortcuts.map(([keys, label]) => `
            <li>
              <span>${keys.map((key) => `<span class="kbd">${escapeHtml(key)}</span>`).join(' ')}</span>
              <span>${escapeHtml(label)}</span>
            </li>`).join('')}
        </ul>
      </div>
    </div>`;

  getOverlayRoot().append(overlay);

  overlay.addEventListener('click', (event) => {
    if (event.target === overlay || event.target.closest('[data-close-help]')) {
      overlay.remove();
    }
  });
}

function toast(message, iconName = 'checkCircle') {
  const el = document.createElement('div');
  el.className = 'toast';
  el.innerHTML = `${icon(iconName)}<span>${escapeHtml(message)}</span>`;

  dom.toasts.append(el);

  setTimeout(() => {
    el.classList.add('is-leaving');
    setTimeout(() => el.remove(), 200);
  }, 2200);
}

function bindGlobalEvents() {
  bindRouteDelegation(dom.appRoot);

  dom.appRoot.addEventListener('click', (event) => {
    const actionEl = event.target.closest('[data-action]');
    const favEl = event.target.closest('[data-fav]');
    const settingEl = event.target.closest('[data-setting]');
    const ageEl = event.target.closest('[data-age]');

    if (favEl) {
      event.preventDefault();
      event.stopPropagation();

      const cardId = favEl.dataset.fav;
      const added = toggleFavorite(cardId);
      const card = CARDS_BY_ID.get(cardId);

      favEl.setAttribute('aria-pressed', String(added));
      favEl.setAttribute('aria-label', added ? 'Retirer des favoris' : 'Ajouter aux favoris');
      toast(
        `${card ? card.title : 'Fiche'} ${added ? 'ajoutée aux favoris' : 'retirée des favoris'}`,
        added ? 'star' : 'close',
      );
      return;
    }

    if (ageEl) {
      setState({ age: ageEl.dataset.age }, ['age']);
      renderRoute(currentRoute());
      return;
    }

    if (settingEl) {
      handleSetting(settingEl.dataset.setting);
      return;
    }

    if (!actionEl) return;

    switch (actionEl.dataset.action) {
      case 'theme':
        toast(toggleTheme() === 'dark' ? 'Thème sombre' : 'Thème clair', 'sun');
        break;
      case 'help':
        openHelp();
        break;
      case 'print':
        window.print();
        break;
      case 'back':
        goBack();
        break;
      case 'close-nui':

        closeDevice();
        break;
      default:
        break;
    }
  });

  dom.appRoot.querySelector('#burger').addEventListener('click', () => {
    if (dom.sidebar.classList.contains('is-open')) closeDrawer(); else openDrawer();
  });

  dom.backdrop.addEventListener('click', closeDrawer);

  dom.appRoot.querySelector('#search-trigger').addEventListener('click', () => openPalette());

  dom.appRoot.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter' && event.key !== ' ') return;

    const target = event.target.closest('[data-route][tabindex]');
    if (!target) return;

    event.preventDefault();
    target.click();
  });

  window.addEventListener('keydown', handleGlobalKeys);
}

function handleGlobalKeys(event) {

  if (event.key === 'Escape') {
    const help = document.getElementById('help-modal');

    if (help) {
      help.remove();
      event.stopImmediatePropagation();
      return;
    }

    if (dom.sidebar.classList.contains('is-open')) {
      closeDrawer();
      event.stopImmediatePropagation();
      return;
    }

    return;
  }

  if (!isPoweredOn()) return;

  const inField = /^(INPUT|TEXTAREA|SELECT)$/.test(event.target.tagName);

  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
    event.preventDefault();
    openPalette();
    return;
  }

  if (inField) return;

  if (event.key === '/') {
    event.preventDefault();
    openPalette();
    return;
  }

  if (event.key === '?') {
    event.preventDefault();
    openHelp();
    return;
  }

  if (event.altKey && event.key === 'ArrowLeft') {
    event.preventDefault();
    goBack();
  }
}

function handleSetting(setting) {
  switch (setting) {
    case 'theme':
      toggleTheme();
      break;
    case 'contrast':
      toast(toggleContrast() === 'high' ? 'Contraste renforcé' : 'Contraste standard', 'sun');
      break;
    case 'motion':
      toast(toggleMotion() === 'reduced' ? 'Animations désactivées' : 'Animations activées', 'sliders');
      break;
    case 'reset':
      resetPreferences();
      toast('Préférences réinitialisées', 'refresh');
      break;
    default:
      return;
  }

  renderRoute(currentRoute());
}

function closeOverlays() {
  closePalette();
  document.getElementById('help-modal')?.remove();
  closeDrawer();
}

function shouldEscapeClose() {
  if (document.getElementById('palette')) return false;
  if (document.getElementById('help-modal')) return false;
  if (dom.sidebar.classList.contains('is-open')) {
    closeDrawer();
    return false;
  }
  return true;
}

function boot() {
  hydrate();

  const { errors, warnings } = validateData();
  if (errors.length > 0) {
    console.error('[données] anomalies bloquantes :\n' + errors.join('\n'));
  }
  if (warnings.length > 0) {
    console.warn('[données] avertissements :\n' + warnings.join('\n'));
  }

  const { appRoot, overlayRoot } = mountDevice();

  buildShell(appRoot, overlayRoot);

  mountSprite();

  bindGlobalEvents();
  bindHardware();
  startRouter(dom.content, renderRoute, getScrollRoot);

  initNui({
    onRoute: (route) => { location.hash = route; },

    onOpen: () => openDevice(),

    onClose: resetStage,

    onRequestClose: () => closeDevice(),
    shouldEscapeClose,
  });

  registerServiceWorker();
  openDevice();

  subscribe((state, changed) => {
    if (!changed.includes('favorites')) return;
    if (currentRoute().name !== 'dashboard') return;
    renderRoute(currentRoute());
  });
}

function bindHardware() {
  onHardware((action, value) => {
    switch (action) {
      case 'volume':
        adjustVolume(value);
        break;

      case 'brightness':
        toast(`Luminosité ${Math.round(value * 100)} %`, 'sun');
        break;

      case 'power':

        if (value === 'on') {
          dom.content.focus({ preventScroll: true });
        } else {
          closeOverlays();
        }
        break;

      default:
        break;
    }
  });
}

function adjustVolume(direction) {
  const current = window.__tabletteVolume ?? 0.6;
  const next = Math.min(1, Math.max(0, Math.round((current + direction * 0.2) * 10) / 10));

  window.__tabletteVolume = next;
  toast(next === 0 ? 'Son coupé' : `Volume ${Math.round(next * 100)} %`, next === 0 ? 'minus' : 'plus');
}

boot();
