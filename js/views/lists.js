import { icon } from '../icons.js';
import { escapeHtml } from '../search.js';
import { searchCards } from '../search.js';
import { CARDS, CARDS_BY_ID, cardsInCategory, severityWeight } from '../data/index.js';
import { CATEGORIES, getCategory } from '../data/taxonomy.js';
import { getState } from '../store.js';
import { cardGrid, cardTile, breadcrumbs, hero, emptyState } from './components.js';

export function renderCategory(catId) {
  const category = getCategory(catId);

  if (!category) {
    return `
      <div class="view">
        ${emptyState(
          'alertCircle',
          'Catégorie inconnue',
          `Aucune catégorie ne correspond à « ${catId} ».`,
          '<a class="btn btn--primary" href="#/">Revenir au tableau de bord</a>',
        )}
      </div>`;
  }

  const cards = [...cardsInCategory(catId)]
    .sort((a, b) => severityWeight(b) - severityWeight(a));

  return `
    <div class="view">
      ${breadcrumbs([
        { label: 'Accueil', route: 'dashboard' },
        { label: category.label },
      ])}

      ${hero(
        category.icon,
        category.label,
        `${cards.length} fiche${cards.length > 1 ? 's' : ''} dans cette catégorie, les plus critiques en premier.`,
        renderCategoryChips(catId),
      )}

      ${cards.length
        ? cardGrid(cards, { showCategory: false })
        : emptyState(
            'layers',
            'Catégorie vide',
            'Aucune fiche n’est encore rattachée à cette catégorie.',
          )}
    </div>`;
}

function renderCategoryChips(currentId) {
  const chips = CATEGORIES.map((cat) => `
    <button class="chip" data-route="category" data-route-param="${cat.id}"
            aria-pressed="${cat.id === currentId}">
      ${icon(cat.icon, { size: 'sm' })}${escapeHtml(cat.short)}
    </button>`).join('');

  return `<div class="chips" role="group" aria-label="Changer de catégorie">${chips}</div>`;
}

export function renderSearch(query) {
  const trimmed = (query || '').trim();

  if (!trimmed) {
    return `
      <div class="view">
        ${hero('search', 'Recherche', 'Saisissez une constante, une pathologie ou un geste.')}
        ${emptyState(
          'search',
          'Que cherchez-vous ?',
          'La recherche porte sur les titres, les abréviations, les mots-clés et le contenu des fiches. Les accents ne sont pas nécessaires.',
        )}
      </div>`;
  }

  const results = searchCards(trimmed);

  if (results.length === 0) {
    return `
      <div class="view">
        ${hero('search', `Recherche : « ${trimmed} »`, 'Aucun résultat.')}
        ${emptyState(
          'alertCircle',
          `Aucune fiche pour « ${trimmed} »`,
          'Essayez un terme plus court, une abréviation (ACR, OVA, SpO₂) ou parcourez les catégories depuis le menu.',
          '<a class="btn btn--primary" href="#/">Revenir au tableau de bord</a>',
        )}
      </div>`;
  }

  return `
    <div class="view">
      ${hero(
        'search',
        `Recherche : « ${trimmed} »`,
        `${results.length} résultat${results.length > 1 ? 's' : ''}, du plus pertinent au moins pertinent.`,
      )}
      ${cardGrid(results.map((result) => result.card), { query: trimmed })}
    </div>`;
}

export function renderFavorites() {
  const { favorites } = getState();
  const cards = favorites.map((id) => CARDS_BY_ID.get(id)).filter(Boolean);

  return `
    <div class="view">
      ${breadcrumbs([
        { label: 'Accueil', route: 'dashboard' },
        { label: 'Mes favoris' },
      ])}

      ${hero(
        'star',
        'Mes favoris',
        'Les fiches épinglées, dans l’ordre où vous les avez ajoutées. Conservées sur cet appareil.',
      )}

      ${cards.length
        ? cardGrid(cards)
        : emptyState(
            'star',
            'Aucun favori',
            'Touchez l’étoile en haut à droite d’une fiche pour l’épingler. Utile pour préparer une garde ou réviser un protocole.',
            '<a class="btn btn--primary" href="#/">Parcourir les fiches</a>',
          )}
    </div>`;
}

export function renderAllCards() {
  const sections = CATEGORIES.map((cat) => {
    const cards = cardsInCategory(cat.id);
    if (cards.length === 0) return '';

    return `
      <section class="panel" style="margin-bottom:var(--sp-4)">
        <div class="panel__head">
          ${icon(cat.icon)}
          <span>${escapeHtml(cat.label)}</span>
          <span class="panel__count">${cards.length}</span>
        </div>
        <div class="panel__body">
          <div class="cards stagger">${
            cards.map((card, i) => cardTile(card, { index: i, showCategory: false })).join('')
          }</div>
        </div>
      </section>`;
  }).join('');

  return `
    <div class="view">
      ${hero('layers', 'Toutes les fiches', `${CARDS.length} fiches, regroupées par catégorie.`)}
      ${sections}
    </div>`;
}

export function renderNotFound(path) {
  return `
    <div class="view">
      ${emptyState(
        'alertCircle',
        'Page introuvable',
        `Le chemin « ${path || ''} » ne correspond à aucune page de la tablette.`,
        '<a class="btn btn--primary" href="#/">Revenir au tableau de bord</a>',
      )}
    </div>`;
}
