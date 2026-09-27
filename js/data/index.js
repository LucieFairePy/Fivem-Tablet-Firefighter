import { CONSTANTES_CARDS } from './cards.constantes.js';
import { URGENCES_CARDS } from './cards.urgences.js';
import { PATHOLOGIES_CARDS } from './cards.pathologies.js';
import { PUBLICS_CARDS } from './cards.publics.js';
import { CATEGORIES, SEVERITY, getCategory } from './taxonomy.js';
import { VITALS, VITAL_IDS } from './vitals.js';

export const CARDS = [
  ...CONSTANTES_CARDS,
  ...URGENCES_CARDS,
  ...PATHOLOGIES_CARDS,
  ...PUBLICS_CARDS,
];

export const CARDS_BY_ID = new Map(CARDS.map((card) => [card.id, card]));

export const CARDS_BY_CAT = CATEGORIES.reduce((acc, cat) => {
  acc[cat.id] = CARDS.filter((card) => card.cat === cat.id);
  return acc;
}, {});

export const EMERGENCY_IDS = [
  'acr',
  'detresse-resp',
  'hemorragie',
  'avc',
  'douleur-thoracique',
  'ova',
  'choc',
  'epilepsie',
  'anaphylaxie',
  'brulure',
];

export const TOOL_LINKS = [
  { route: '#/categorie/bilan', icon: 'flow', label: 'Bilan / ABCDE' },
  { route: '#/fiche/transmission', icon: 'radio', label: 'Transmission' },
  { route: '#/outils/glasgow', icon: 'brain', label: 'Calcul Glasgow' },
  { route: '#/outils/rcp', icon: 'heartPulse', label: 'Métronome RCP' },
  { route: '#/outils/pediatrie', icon: 'scale', label: 'Repères pédiatriques' },
  { route: '#/sources', icon: 'book', label: 'Référentiels' },
];

export function getCard(id) {
  return CARDS_BY_ID.get(id) || null;
}

export function cardsInCategory(catId) {
  return CARDS_BY_CAT[catId] || [];
}

export function cardAccent(card) {
  const cat = getCategory(card.cat);
  return cat ? `var(${cat.accent})` : 'var(--info)';
}

export function severityWeight(card) {
  return (SEVERITY[card.severity] || SEVERITY.standard).weight;
}

export function validateData() {
  const errors = [];
  const warnings = [];

  const declaredCats = new Set(CATEGORIES.map((cat) => cat.id));
  const seenIds = new Set();
  const usedCats = new Set();

  for (const card of CARDS) {

    if (seenIds.has(card.id)) {
      errors.push(`Identifiant de fiche dupliqué : "${card.id}".`);
    }
    seenIds.add(card.id);

    for (const field of ['cat', 'title', 'abbr', 'desc', 'icon', 'severity']) {
      if (!card[field]) {
        errors.push(`Fiche "${card.id}" : champ obligatoire manquant "${field}".`);
      }
    }

    if (card.severity && !SEVERITY[card.severity]) {
      errors.push(`Fiche "${card.id}" : criticité inconnue "${card.severity}".`);
    }

    usedCats.add(card.cat);
    if (!declaredCats.has(card.cat)) {
      errors.push(
        `Fiche "${card.id}" : catégorie "${card.cat}" absente de taxonomy.js. ` +
        'Elle serait inaccessible depuis le menu.',
      );
    }

    for (const relatedId of card.related || []) {
      if (!seenIdsWillContain(relatedId)) {
        warnings.push(`Fiche "${card.id}" : lien "${relatedId}" ne correspond à aucune fiche.`);
      }
    }

    for (const block of card.blocks || []) {
      if (!['ok', 'info', 'warn', 'danger'].includes(block.level)) {
        warnings.push(`Fiche "${card.id}" : niveau de bloc inconnu "${block.level}".`);
      }
    }
  }

  for (const vitalId of VITAL_IDS) {
    if (!CARDS_BY_ID.has(vitalId)) {
      errors.push(
        `Constante "${vitalId}" sans fiche correspondante : un clic sur sa carte ` +
        'du tableau de bord n\'ouvrirait rien.',
      );
    }
  }

  for (const cat of CATEGORIES) {
    if (!usedCats.has(cat.id)) {
      warnings.push(`Catégorie "${cat.id}" déclarée mais sans aucune fiche.`);
    }
  }

  for (const id of EMERGENCY_IDS) {
    if (!CARDS_BY_ID.has(id)) {
      errors.push(`Accès rapide "${id}" : fiche inexistante.`);
    }
  }

  return { errors, warnings };
}

function seenIdsWillContain(id) {
  return CARDS_BY_ID.has(id);
}

export const DATA_STATS = {
  cards: CARDS.length,
  categories: CATEGORIES.length,
  vitals: VITALS.length,

  revision: '2026-09',
};
