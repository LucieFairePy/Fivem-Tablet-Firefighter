import { CARDS, severityWeight } from './data/index.js';
import { categoryLabel } from './data/taxonomy.js';

const FIELD_WEIGHTS = {
  title: 10,
  abbr: 9,
  tags: 6,
  desc: 4,
  category: 3,
  body: 1,
};

export function normalize(text) {
  return String(text)
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .trim();
}

const INDEX = CARDS.map((card) => {
  const bodyParts = [
    card.summary || '',
    ...(card.blocks || []).flatMap((block) => [block.title, block.text || '', ...(block.items || [])]),
    ...(card.steps || []).flatMap((step) => [step.title, step.text]),
    ...(card.redFlags || []),
    ...(card.transmit || []),
  ];

  return {
    card,
    fields: {
      title: normalize(card.title),
      abbr: normalize(card.abbr),
      tags: normalize((card.tags || []).join(' ')),
      desc: normalize(card.desc),
      category: normalize(categoryLabel(card.cat)),
      body: normalize(bodyParts.join(' ')),
    },
  };
});

export function searchCards(query, limit = 40) {
  const terms = normalize(query).split(/\s+/).filter(Boolean);
  if (terms.length === 0) return [];

  const results = [];

  for (const entry of INDEX) {
    let score = 0;
    let matchesAllTerms = true;

    for (const term of terms) {
      const termScore = scoreTerm(entry.fields, term);

      if (termScore === 0) {
        matchesAllTerms = false;
        break;
      }

      score += termScore;
    }

    if (!matchesAllTerms) continue;

    score += severityWeight(entry.card);

    results.push({ card: entry.card, score });
  }

  return results.sort((a, b) => b.score - a.score).slice(0, limit);
}

function scoreTerm(fields, term) {
  let score = 0;

  for (const [field, weight] of Object.entries(FIELD_WEIGHTS)) {
    const value = fields[field];
    const position = value.indexOf(term);

    if (position === -1) continue;

    score += weight;

    if (position === 0) score += weight * 0.6;

    if (value === term) score += weight;

    if (position > 0 && /[\s'-]/.test(value[position - 1])) score += weight * 0.3;
  }

  return score;
}

export function highlight(text, query) {
  const terms = normalize(query).split(/\s+/).filter(Boolean);
  if (terms.length === 0) return escapeHtml(text);

  const normalized = normalize(text);
  const ranges = [];

  for (const term of terms) {
    let from = 0;
    let at = normalized.indexOf(term, from);

    while (at !== -1) {
      ranges.push([at, at + term.length]);
      from = at + term.length;
      at = normalized.indexOf(term, from);
    }
  }

  if (ranges.length === 0) return escapeHtml(text);

  ranges.sort((a, b) => a[0] - b[0]);
  const merged = [ranges[0]];

  for (const [start, end] of ranges.slice(1)) {
    const last = merged[merged.length - 1];
    if (start <= last[1]) {
      last[1] = Math.max(last[1], end);
    } else {
      merged.push([start, end]);
    }
  }

  let html = '';
  let cursor = 0;

  for (const [start, end] of merged) {
    html += escapeHtml(text.slice(cursor, start));
    html += `<mark>${escapeHtml(text.slice(start, end))}</mark>`;
    cursor = end;
  }

  return html + escapeHtml(text.slice(cursor));
}

export function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (ch) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[ch]));
}

export function debounce(fn, delay = 120) {
  let timer = null;

  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}
