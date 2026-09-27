import { icon } from '../icons.js';
import { escapeHtml, highlight } from '../search.js';
import { cardAccent } from '../data/index.js';
import { SEVERITY, categoryLabel } from '../data/taxonomy.js';
import { isFavorite } from '../store.js';

export function cardTile(card, opts = {}) {
  const { index = 0, query = '', showCategory = true } = opts;
  const severity = SEVERITY[card.severity] || SEVERITY.standard;
  const favorited = isFavorite(card.id);

  return `
    <article class="card" style="--card-accent:${cardAccent(card)};--i:${index}"
             data-route="card" data-route-param="${escapeHtml(card.id)}"
             tabindex="0" role="link"
             aria-label="Ouvrir la fiche ${escapeHtml(card.title)}">
      <button class="fav" data-stop-route data-fav="${escapeHtml(card.id)}"
              aria-pressed="${favorited}"
              aria-label="${favorited ? 'Retirer des favoris' : 'Ajouter aux favoris'}">
        ${icon('star', { size: 'sm' })}
      </button>

      <div class="card__top">
        <span class="card__icon">${icon(card.icon)}</span>
        <h3 class="card__title">${query ? highlight(card.title, query) : escapeHtml(card.title)}</h3>
      </div>

      <p class="card__desc">${query ? highlight(card.desc, query) : escapeHtml(card.desc)}</p>

      <div class="card__meta">
        <span class="tag tag--${severity.tone}">${icon(severity.icon, { size: 'sm' })}${escapeHtml(severity.label)}</span>
        ${showCategory ? `<span class="card__cat">${escapeHtml(categoryLabel(card.cat, true))}</span>` : ''}
      </div>
    </article>`;
}

export function cardGrid(cards, opts = {}) {
  if (cards.length === 0) return '';

  return `<div class="cards stagger">${
    cards.map((card, index) => cardTile(card, { ...opts, index })).join('')
  }</div>`;
}

export function emergencyButton(card, index = 0) {
  const pulse = card.severity === 'critical' ? ' emergency--pulse' : '';

  return `
    <button class="emergency${pulse}" style="--i:${index}"
            data-route="card" data-route-param="${escapeHtml(card.id)}">
      ${icon(card.icon)}
      <span>${escapeHtml(card.title)}</span>
      ${icon('chevronRight', { size: 'sm', cls: 'emergency__go' })}
    </button>`;
}

export function panelHead(iconName, label, count = null) {
  return `
    <div class="panel__head">
      ${icon(iconName)}
      <span>${escapeHtml(label)}</span>
      ${count !== null ? `<span class="panel__count">${count}</span>` : ''}
    </div>`;
}

export function breadcrumbs(trail) {
  const parts = trail.map((step, index) => {
    const last = index === trail.length - 1;

    if (last || !step.route) {
      return `<span aria-current="page">${escapeHtml(step.label)}</span>`;
    }

    return `<button data-route="${step.route}"${
      step.param ? ` data-route-param="${escapeHtml(step.param)}"` : ''
    }>${escapeHtml(step.label)}</button>`;
  });

  return `<nav class="crumbs" aria-label="Fil d’Ariane">${
    parts.join(icon('chevronRight', { size: 'sm' }))
  }</nav>`;
}

export function hero(iconName, title, subtitle, aside = '') {
  return `
    <header class="hero">
      <div>
        <h1 class="hero__title">${icon(iconName, { size: 'lg' })}<span>${escapeHtml(title)}</span></h1>
        ${subtitle ? `<p class="hero__sub">${escapeHtml(subtitle)}</p>` : ''}
      </div>
      ${aside}
    </header>`;
}

export function emptyState(iconName, title, hint, action = '') {
  return `
    <div class="empty">
      ${icon(iconName, { size: 'hero' })}
      <p class="empty__title">${escapeHtml(title)}</p>
      <p class="empty__hint">${escapeHtml(hint)}</p>
      ${action}
    </div>`;
}

export function notice(text) {
  return `
    <div class="notice">
      ${icon('alert', { size: 'lg' })}
      <p>${text}</p>
    </div>`;
}

export function pills(items) {
  return items.map((item) => `<span class="pill">${escapeHtml(item)}</span>`).join('');
}
