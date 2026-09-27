import { icon } from '../icons.js';
import { escapeHtml } from '../search.js';
import { getCard, cardAccent } from '../data/index.js';
import { SEVERITY, categoryLabel, getCategory } from '../data/taxonomy.js';
import { getVital } from '../data/vitals.js';
import { getState, isFavorite } from '../store.js';
import { breadcrumbs, emptyState, pills } from './components.js';

const BLOCK_ICON = {
  ok: 'checkCircle',
  info: 'info',
  warn: 'alertCircle',
  danger: 'alert',
};

export function renderCard(id) {
  const card = getCard(id);

  if (!card) {
    return `
      <div class="view">
        ${emptyState(
          'alertCircle',
          'Fiche introuvable',
          `Aucune fiche ne correspond à l’identifiant « ${id} ». Elle a peut-être été renommée.`,
          '<a class="btn btn--primary" href="#/">Revenir au tableau de bord</a>',
        )}
      </div>`;
  }

  const severity = SEVERITY[card.severity] || SEVERITY.standard;
  const category = getCategory(card.cat);
  const favorited = isFavorite(card.id);

  return `
    <div class="view" style="--card-accent:${cardAccent(card)}">
      <div class="row" style="margin-bottom:var(--sp-2)">
        <button class="btn btn--sm" data-action="back">
          ${icon('arrowLeft', { size: 'sm' })}<span>Retour</span>
        </button>
      </div>

      ${breadcrumbs([
        { label: 'Accueil', route: 'dashboard' },
        { label: categoryLabel(card.cat, true), route: 'category', param: card.cat },
        { label: card.title },
      ])}

      <article class="sheet">
        <header class="sheet__head">
          <span class="sheet__badge">${icon(card.icon, { size: 'xl' })}</span>

          <div class="sheet__headings">
            <p class="eyebrow">${escapeHtml(category ? category.label : card.cat)}</p>
            <h1>${escapeHtml(card.title)}</h1>
            <p class="sheet__desc">${escapeHtml(card.desc)}</p>
          </div>

          <div class="sheet__actions">
            <span class="tag tag--${severity.tone}">
              ${icon(severity.icon, { size: 'sm' })}${escapeHtml(severity.label)}
            </span>
            <span class="pill">${escapeHtml(card.abbr)}</span>
            <button class="btn btn--icon" data-fav="${escapeHtml(card.id)}"
                    aria-pressed="${favorited}"
                    aria-label="${favorited ? 'Retirer des favoris' : 'Ajouter aux favoris'}">
              ${icon('star')}
            </button>
            <button class="btn btn--icon" data-action="print" aria-label="Imprimer la fiche">
              ${icon('printer')}
            </button>
          </div>
        </header>

        ${card.summary ? renderSummary(card.summary) : ''}

        <div class="sheet__grid">
          <div class="sheet__col">
            ${renderRedFlags(card.redFlags)}
            ${renderSteps(card.steps)}
            ${renderTransmit(card.transmit)}
          </div>

          <div class="sheet__col">
            ${renderVitalValues(card.id)}
            ${renderBlocks(card.blocks)}
            ${renderRelated(card.related)}
            ${renderSource(card.source)}
          </div>
        </div>
      </article>
    </div>`;
}

function renderSummary(summary) {
  return `
    <section class="block block--info">
      <h2 class="block__title">${icon('target')}À comprendre</h2>
      <p class="block__text">${escapeHtml(summary)}</p>
    </section>`;
}

function renderRedFlags(redFlags) {
  if (!redFlags || redFlags.length === 0) return '';

  const items = redFlags.map((flag) => `
    <li>${icon('alert', { size: 'sm' })}<span>${escapeHtml(flag)}</span></li>`).join('');

  return `
    <section class="block block--danger">
      <h2 class="block__title">${icon('alert')}Signes de gravité</h2>
      <ul class="block__list">${items}</ul>
    </section>`;
}

function renderSteps(steps) {
  if (!steps || steps.length === 0) return '';

  const items = steps.map((step) => `
    <li class="step">
      <div>
        <p class="step__title">${escapeHtml(step.title)}</p>
        <p class="step__text">${escapeHtml(step.text)}</p>
      </div>
    </li>`).join('');

  return `
    <section class="block">
      <h2 class="block__title">${icon('flow')}Conduite à tenir</h2>
      <ol class="steps">${items}</ol>
    </section>`;
}

function renderTransmit(transmit) {
  if (!transmit || transmit.length === 0) return '';

  return `
    <section class="transmit">
      <h2 class="transmit__title">${icon('radio')}À transmettre</h2>
      <div class="transmit__items">${pills(transmit)}</div>
      <p class="block__text">
        Toujours accompagné de l’heure de mesure et de l’évolution depuis le bilan précédent.
        Une constante isolée ne suffit jamais à poser un diagnostic.
      </p>
    </section>`;
}

function renderBlocks(blocks) {
  if (!blocks || blocks.length === 0) return '';

  return blocks.map((block) => {
    const iconName = BLOCK_ICON[block.level] || 'info';

    const body = block.items
      ? `<ul class="block__list">${block.items.map((item) => `
          <li>${icon('chevronRight', { size: 'sm' })}<span>${escapeHtml(item)}</span></li>`).join('')}</ul>`
      : `<p class="block__text">${escapeHtml(block.text || '')}</p>`;

    return `
      <section class="block block--${escapeHtml(block.level)}">
        <h2 class="block__title">${icon(iconName)}${escapeHtml(block.title)}</h2>
        ${body}
      </section>`;
  }).join('');
}

function renderVitalValues(cardId) {
  const vital = getVital(cardId);
  if (!vital) return '';

  const { age } = getState();
  const values = vital.byAge[age];
  if (!values) return '';

  const zones = values.zones.map((zone) => `
    <li>${icon('chevronRight', { size: 'sm' })}
      <span><strong>${escapeHtml(zone.value)}</strong> — ${escapeHtml(zone.label)}</span>
    </li>`).join('');

  return `
    <section class="block block--ok">
      <h2 class="block__title">${icon('gauge')}Valeurs de référence</h2>
      <p class="block__text">
        <strong>${escapeHtml(values.value)}</strong> ${escapeHtml(values.unit)}
      </p>
      <ul class="block__list">${zones}</ul>
      <p class="calc__hint">
        Valeurs affichées pour la catégorie d’âge sélectionnée sur le tableau de bord.
      </p>
    </section>`;
}

function renderRelated(related) {
  if (!related || related.length === 0) return '';

  const links = related
    .map((id) => getCard(id))
    .filter(Boolean)
    .map((card) => `
      <button class="related__item" data-route="card" data-route-param="${escapeHtml(card.id)}">
        ${icon(card.icon, { size: 'sm' })}
        <span>${escapeHtml(card.title)}</span>
        ${icon('chevronRight', { size: 'sm' })}
      </button>`)
    .join('');

  if (!links) return '';

  return `
    <section class="block">
      <h2 class="block__title">${icon('layers')}Fiches liées</h2>
      <div class="related">${links}</div>
    </section>`;
}

function renderSource(source) {
  return `
    <p class="source-line">
      ${icon('book', { size: 'sm' })}
      <span>
        ${escapeHtml(source || 'Références techniques nationales PSE.')}
        Support pédagogique : la formation reçue, les procédures en vigueur et la
        régulation médicale priment sur ce document.
      </span>
    </p>`;
}
