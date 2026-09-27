import { icon } from '../icons.js';
import { escapeHtml } from '../search.js';
import { VITALS, NOT_APPLICABLE } from '../data/vitals.js';
import { AGE_GROUPS } from '../data/taxonomy.js';
import { CARDS_BY_ID, EMERGENCY_IDS, TOOL_LINKS, DATA_STATS } from '../data/index.js';
import { getState } from '../store.js';
import { cardTile, emergencyButton, panelHead, hero, emptyState } from './components.js';

const TONE_CLASS = {
  low: 't-low',
  ok: 't-ok',
  warn: 't-warn',
  danger: 't-danger',
  info: 't-info',
};

export function renderDashboard() {
  const { age } = getState();
  const ageGroup = AGE_GROUPS.find((group) => group.id === age) || AGE_GROUPS[0];

  return `
    <div class="view" id="view-dashboard">
      ${hero(
        'activity',
        'Constantes — bilan rapide',
        `Repères et interprétation pour la catégorie sélectionnée (${ageGroup.bounds}). Toucher une constante ouvre sa fiche détaillée.`,
        renderAgeTabs(age),
      )}

      <div class="dash">
        <div>
          ${renderVitals(age)}
          ${renderSecondary()}
        </div>
        ${renderRail()}
      </div>
    </div>`;
}

function renderAgeTabs(currentAge) {
  const buttons = AGE_GROUPS.map((group) => `
    <button class="segmented__btn" role="tab" data-age="${group.id}"
            aria-selected="${group.id === currentAge}">
      ${icon(group.icon)}
      <span>${escapeHtml(group.label)}<small>${escapeHtml(group.hint)}</small></span>
    </button>`).join('');

  return `<div class="segmented" role="tablist" aria-label="Tranche d’âge">${buttons}</div>`;
}

function renderVitals(age) {
  const tiles = VITALS.map((vital, index) => {
    const values = vital.byAge[age];

    return values
      ? renderVitalCard(vital, values, index)
      : renderVitalUnavailable(vital, index);
  }).join('');

  return `<section class="vitals stagger" aria-label="Constantes vitales">${tiles}</section>`;
}

function renderVitalCard(vital, values, index) {
  const zones = values.zones.map((zone) => `
    <div class="zone ${TONE_CLASS[zone.tone] || 't-info'}">
      <span class="zone__value">${escapeHtml(zone.value)}</span>
      <span class="zone__label">${escapeHtml(zone.label)}</span>
    </div>`).join('');

  const notes = values.notes.map((note) => `
    <li>${icon('chevronRight', { size: 'sm' })}<span>${escapeHtml(note)}</span></li>`).join('');

  return `
    <article class="vital" style="--accent:var(${vital.accent});--i:${index}"
             data-route="card" data-route-param="${escapeHtml(vital.id)}"
             tabindex="0" role="link"
             aria-label="Ouvrir la fiche ${escapeHtml(vital.title)}">
      <div class="vital__head">
        ${icon(vital.icon, { size: 'lg' })}
        <div>
          <span class="vital__title">${escapeHtml(vital.title)}</span>
          <span class="vital__abbr">${escapeHtml(vital.abbr)}</span>
        </div>
        ${icon('chevronRight', { cls: 'vital__go' })}
      </div>

      <div class="vital__figure">
        <span class="vital__art">${icon(vital.art, { size: 'hero', cls: vital.artAnim })}</span>
        <span class="vital__value">
          <strong class="vital__num">${escapeHtml(values.value)}</strong>
          <span class="vital__unit">${escapeHtml(values.unit)}</span>
        </span>
      </div>

      <div class="zones">${zones}</div>
      <ul class="vital__notes">${notes}</ul>
    </article>`;
}

function renderVitalUnavailable(vital, index) {
  const reason = NOT_APPLICABLE[vital.id]
    || 'Ce paramètre ne s’applique pas à cette tranche d’âge.';

  return `
    <article class="vital" style="--accent:var(--text-faint);--i:${index}"
             data-route="card" data-route-param="${escapeHtml(vital.id)}"
             tabindex="0" role="link"
             aria-label="Ouvrir la fiche ${escapeHtml(vital.title)}">
      <div class="vital__head">
        ${icon(vital.icon, { size: 'lg' })}
        <div>
          <span class="vital__title">${escapeHtml(vital.title)}</span>
          <span class="vital__abbr">Non applicable</span>
        </div>
        ${icon('chevronRight', { cls: 'vital__go' })}
      </div>

      <div class="vital__figure">
        <span class="vital__art">${icon('info', { size: 'hero' })}</span>
      </div>

      <ul class="vital__notes">
        <li>${icon('info', { size: 'sm' })}<span>${escapeHtml(reason)}</span></li>
      </ul>
    </article>`;
}

function renderSecondary() {
  const { favorites, recents } = getState();

  const favoriteCards = favorites.map((id) => CARDS_BY_ID.get(id)).filter(Boolean);
  const recentCards = recents.map((id) => CARDS_BY_ID.get(id)).filter(Boolean);

  const favoritesPanel = `
    <section class="panel" aria-label="Fiches favorites">
      ${panelHead('star', 'Mes favoris', favoriteCards.length || null)}
      <div class="panel__body">
        ${favoriteCards.length
          ? `<div class="cards stagger">${favoriteCards.map((card, i) => cardTile(card, { index: i })).join('')}</div>`
          : emptyState(
              'star',
              'Aucun favori',
              'Touchez l’étoile d’une fiche pour l’épingler ici et y accéder en un geste.',
            )}
      </div>
    </section>`;

  const recentsPanel = recentCards.length
    ? `<section class="panel" aria-label="Consultées récemment">
        ${panelHead('clock', 'Consultées récemment', recentCards.length)}
        <div class="panel__body">
          <div class="cards stagger">${recentCards.map((card, i) => cardTile(card, { index: i })).join('')}</div>
        </div>
      </section>`
    : '';

  return `<div class="stack" style="margin-top:var(--sp-4)">${favoritesPanel}${recentsPanel}</div>`;
}

function renderRail() {
  const emergencies = EMERGENCY_IDS
    .map((id) => CARDS_BY_ID.get(id))
    .filter(Boolean)
    .map((card, index) => emergencyButton(card, index))
    .join('');

  const tools = TOOL_LINKS.map((tool) => `
    <a class="tool" href="${tool.route}">
      ${icon(tool.icon, { size: 'lg' })}
      <span>${escapeHtml(tool.label)}</span>
    </a>`).join('');

  return `
    <aside class="rail" aria-label="Accès rapides">
      <section class="panel">
        ${panelHead('siren', 'Accès rapides — urgences')}
        <div class="panel__body">
          <div class="rail__list stagger stagger--right">${emergencies}</div>
        </div>
      </section>

      <section class="panel">
        ${panelHead('grid', 'Outils')}
        <div class="panel__body">
          <div class="tools">${tools}</div>
        </div>
      </section>

      <p class="quote">
        « Une bonne évaluation, c’est déjà une prise en charge mieux adaptée. »
        <br><br>
        ${DATA_STATS.cards} fiches · ${DATA_STATS.vitals} constantes · révision ${DATA_STATS.revision}
      </p>
    </aside>`;
}
