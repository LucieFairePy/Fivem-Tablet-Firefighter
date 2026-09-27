import { icon } from '../icons.js';
import { escapeHtml } from '../search.js';
import { AGE_GROUPS } from '../data/taxonomy.js';
import { VITALS } from '../data/vitals.js';
import { breadcrumbs, hero, emptyState, notice } from './components.js';

const GLASGOW_ITEMS = [
  {
    key: 'eyes',
    label: 'Ouverture des yeux (Y)',
    max: 4,
    options: [
      { score: 4, label: 'Spontanée' },
      { score: 3, label: 'À la demande verbale' },
      { score: 2, label: 'À la douleur' },
      { score: 1, label: 'Aucune' },
    ],
  },
  {
    key: 'verbal',
    label: 'Réponse verbale (V)',
    max: 5,
    options: [
      { score: 5, label: 'Orientée, cohérente' },
      { score: 4, label: 'Confuse' },
      { score: 3, label: 'Mots inappropriés' },
      { score: 2, label: 'Sons incompréhensibles' },
      { score: 1, label: 'Aucune' },
    ],
  },
  {
    key: 'motor',
    label: 'Réponse motrice (M)',
    max: 6,
    options: [
      { score: 6, label: 'Obéit aux ordres' },
      { score: 5, label: 'Orientée à la douleur' },
      { score: 4, label: 'Retrait à la douleur' },
      { score: 3, label: 'Flexion anormale (décortication)' },
      { score: 2, label: 'Extension anormale (décérébration)' },
      { score: 1, label: 'Aucune' },
    ],
  },
];

export const glasgowTool = {
  title: 'Calculateur de score de Glasgow',

  render() {
    const groups = GLASGOW_ITEMS.map((item) => {
      const options = item.options.map((option) => `
        <button class="calc__opt" data-gcs="${item.key}" data-score="${option.score}"
                aria-pressed="${option.score === item.max}">
          <b>${option.score}</b><span>${escapeHtml(option.label)}</span>
        </button>`).join('');

      return `
        <fieldset class="calc__row">
          <legend class="calc__label">${escapeHtml(item.label)}</legend>
          <div class="calc__options">${options}</div>
        </fieldset>`;
    }).join('');

    return `
      <div class="view">
        ${breadcrumbs([
          { label: 'Accueil', route: 'dashboard' },
          { label: 'Calculateur Glasgow' },
        ])}

        ${hero(
          'brain',
          'Score de Glasgow',
          'Sélectionnez la meilleure réponse obtenue pour chaque item. Le total se met à jour automatiquement.',
        )}

        <div class="sheet__grid">
          <form class="calc" id="gcs-form">${groups}</form>

          <div class="sheet__col">
            <div class="calc__total">
              <div>
                <p class="eyebrow">Total</p>
                <p class="calc__score" id="gcs-total">15</p>
              </div>
              <div class="calc__verdict" id="gcs-verdict"></div>
            </div>

            <section class="block block--info">
              <h2 class="block__title">${icon('radio')}Formulation à transmettre</h2>
              <p class="block__text" id="gcs-phrase"></p>
            </section>

            ${notice(
              '<strong>Transmettre le détail Y / V / M</strong>, jamais le total seul : ' +
              '4+1+3 et 1+4+3 donnent tous deux 8 sans décrire la même victime.',
            )}

            <section class="block">
              <h2 class="block__title">${icon('alert')}Seuils</h2>
              <ul class="block__list">
                <li>${icon('chevronRight', { size: 'sm' })}<span><strong>≤ 8</strong> — coma, voies aériennes menacées</span></li>
                <li>${icon('chevronRight', { size: 'sm' })}<span><strong>9 à 13</strong> — conscience altérée</span></li>
                <li>${icon('chevronRight', { size: 'sm' })}<span><strong>14 à 15</strong> — proche de l’état habituel</span></li>
                <li>${icon('chevronRight', { size: 'sm' })}<span>Une baisse de <strong>2 points</strong> est un critère d’aggravation</span></li>
              </ul>
            </section>
          </div>
        </div>
      </div>`;
  },

  mount(root) {
    const form = root.querySelector('#gcs-form');
    if (!form) return;

    const totalEl = root.querySelector('#gcs-total');
    const verdictEl = root.querySelector('#gcs-verdict');
    const phraseEl = root.querySelector('#gcs-phrase');

    const update = () => {
      const scores = {};

      for (const item of GLASGOW_ITEMS) {
        const selected = form.querySelector(`[data-gcs="${item.key}"][aria-pressed="true"]`);
        scores[item.key] = selected ? Number(selected.dataset.score) : item.max;
      }

      const total = scores.eyes + scores.verbal + scores.motor;

      totalEl.textContent = `${total}`;
      totalEl.style.color = total <= 8
        ? 'var(--danger)'
        : total <= 13 ? 'var(--warn)' : 'var(--ok)';

      verdictEl.textContent = total <= 8
        ? 'Coma — voies aériennes menacées'
        : total <= 13 ? 'Conscience altérée' : 'Proche de l’état habituel';

      phraseEl.textContent =
        `« Glasgow ${total} sur 15, `
        + `Y ${scores.eyes}, V ${scores.verbal}, M ${scores.motor}. »`;
    };

    form.addEventListener('click', (event) => {
      const button = event.target.closest('[data-gcs]');
      if (!button) return;

      event.preventDefault();

      form.querySelectorAll(`[data-gcs="${button.dataset.gcs}"]`)
        .forEach((option) => option.setAttribute('aria-pressed', 'false'));

      button.setAttribute('aria-pressed', 'true');
      update();
    });

    update();
  },
};

const DEFAULT_BPM = 110;

export const rcpTool = {
  title: 'Métronome RCP',

  render() {
    return `
      <div class="view">
        ${breadcrumbs([
          { label: 'Accueil', route: 'dashboard' },
          { label: 'Métronome RCP' },
        ])}

        ${hero(
          'heartPulse',
          'Métronome et chronomètre RCP',
          'Cadence des compressions, chronomètre d’intervention et rappel de relais toutes les 2 minutes.',
        )}

        <div class="sheet__grid">
          <div class="sheet__col">
            <div class="metronome">
              <div class="metronome__dot" id="rcp-dot">
                ${icon('heart', { size: 'xl' })}
              </div>
              <p class="metronome__count" id="rcp-bpm">${DEFAULT_BPM} / min</p>

              <div class="row">
                <button class="btn" data-rcp="slower" aria-label="Diminuer la cadence">
                  ${icon('minus')}
                </button>
                <button class="btn btn--danger" data-rcp="toggle" id="rcp-toggle">
                  ${icon('play')}<span>Démarrer</span>
                </button>
                <button class="btn" data-rcp="faster" aria-label="Augmenter la cadence">
                  ${icon('plus')}
                </button>
              </div>

              <p class="calc__hint">Cadence recommandée : 100 à 120 compressions par minute.</p>
            </div>

            <div class="calc__total">
              <div>
                <p class="eyebrow">Temps écoulé</p>
                <p class="metronome__readout" id="rcp-clock">00:00</p>
              </div>
              <div class="calc__verdict">
                <p class="eyebrow">Cycles de 2 min</p>
                <p class="calc__score" id="rcp-cycles">0</p>
              </div>
            </div>

            <button class="btn" data-rcp="reset">${icon('refresh')}<span>Remettre à zéro</span></button>
          </div>

          <div class="sheet__col">
            ${notice(
              '<strong>Outil d’entraînement et d’aide à la cadence.</strong> ' +
              'Il ne remplace ni la formation, ni le protocole du service, ni le retour du défibrillateur.',
            )}

            <section class="block block--danger">
              <h2 class="block__title">${icon('alert')}Qualité des compressions</h2>
              <ul class="block__list">
                <li>${icon('chevronRight', { size: 'sm' })}<span>Profondeur 5 à 6 cm chez l’adulte</span></li>
                <li>${icon('chevronRight', { size: 'sm' })}<span>Relâchement thoracique complet entre chaque compression</span></li>
                <li>${icon('chevronRight', { size: 'sm' })}<span>Interruptions de moins de 10 secondes</span></li>
                <li>${icon('chevronRight', { size: 'sm' })}<span>Relais toutes les 2 minutes : la qualité chute dès la deuxième minute</span></li>
              </ul>
            </section>

            <section class="block block--info">
              <h2 class="block__title">${icon('info')}Rapports compressions / insufflations</h2>
              <ul class="block__list">
                <li>${icon('chevronRight', { size: 'sm' })}<span>Adulte : 30 / 2</span></li>
                <li>${icon('chevronRight', { size: 'sm' })}<span>Enfant et nourrisson, à deux secouristes : 15 / 2, après 5 insufflations initiales</span></li>
                <li>${icon('chevronRight', { size: 'sm' })}<span>Nouveau-né : 3 / 1</span></li>
              </ul>
            </section>

            <button class="btn" data-route="card" data-route-param="acr">
              ${icon('heartPulse')}<span>Ouvrir la fiche Arrêt cardio-respiratoire</span>
            </button>
          </div>
        </div>
      </div>`;
  },

  mount(root) {
    const dot = root.querySelector('#rcp-dot');
    if (!dot) return;

    const bpmEl = root.querySelector('#rcp-bpm');
    const clockEl = root.querySelector('#rcp-clock');
    const cyclesEl = root.querySelector('#rcp-cycles');
    const toggleBtn = root.querySelector('#rcp-toggle');

    let bpm = DEFAULT_BPM;
    let beatTimer = null;
    let clockTimer = null;
    let startedAt = 0;
    let audioCtx = null;

    const click = () => {
      try {
        if (!audioCtx) {
          const Ctor = window.AudioContext || window.webkitAudioContext;
          if (!Ctor) return;
          audioCtx = new Ctor();
        }

        if (audioCtx.state === 'suspended') audioCtx.resume();

        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();

        const level = 0.16 * ((window.__tabletteVolume ?? 0.6) / 0.6);

        osc.frequency.value = 1000;
        gain.gain.setValueAtTime(Math.max(0.0001, level), audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.05);

        osc.connect(gain).connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.05);
      } catch {

      }
    };

    const beat = () => {
      click();
      dot.classList.remove('is-beating');

      void dot.offsetWidth;
      dot.classList.add('is-beating');
    };

    const tickClock = () => {
      const elapsed = Math.floor((Date.now() - startedAt) / 1000);
      const minutes = String(Math.floor(elapsed / 60)).padStart(2, '0');
      const seconds = String(elapsed % 60).padStart(2, '0');

      clockEl.textContent = `${minutes}:${seconds}`;
      cyclesEl.textContent = `${Math.floor(elapsed / 120)}`;
    };

    const stop = () => {
      clearInterval(beatTimer);
      clearInterval(clockTimer);
      beatTimer = null;
      clockTimer = null;
      toggleBtn.innerHTML = `${icon('play')}<span>Démarrer</span>`;
    };

    const start = () => {
      startedAt = startedAt || Date.now();
      beat();
      beatTimer = setInterval(beat, 60000 / bpm);
      clockTimer = setInterval(tickClock, 250);
      toggleBtn.innerHTML = `${icon('pause')}<span>Arrêter</span>`;
    };

    const setBpm = (next) => {
      bpm = Math.min(130, Math.max(80, next));
      bpmEl.textContent = `${bpm} / min`;

      if (beatTimer) {
        clearInterval(beatTimer);
        beatTimer = setInterval(beat, 60000 / bpm);
      }
    };

    root.addEventListener('click', (event) => {
      const button = event.target.closest('[data-rcp]');
      if (!button) return;

      switch (button.dataset.rcp) {
        case 'toggle':
          if (beatTimer) stop(); else start();
          break;
        case 'faster': setBpm(bpm + 5); break;
        case 'slower': setBpm(bpm - 5); break;
        case 'reset':
          stop();
          startedAt = 0;
          clockEl.textContent = '00:00';
          cyclesEl.textContent = '0';
          setBpm(DEFAULT_BPM);
          break;
        default:
          break;
      }
    });

    window.addEventListener('hashchange', stop, { once: true });
  },
};

export const pediatricTool = {
  title: 'Repères pédiatriques',

  render() {
    const rows = VITALS
      .filter((vital) => vital.byAge.child && vital.byAge.infant)
      .map((vital) => `
        <section class="block block--info">
          <h2 class="block__title">${icon(vital.icon)}${escapeHtml(vital.title)}</h2>
          <ul class="block__list">
            ${AGE_GROUPS.map((group) => {
              const values = vital.byAge[group.id];
              if (!values) return '';
              return `<li>${icon('chevronRight', { size: 'sm' })}<span>
                <strong>${escapeHtml(group.label)}</strong> — ${escapeHtml(values.value)}
                <span class="calc__hint">${escapeHtml(values.unit)}</span>
              </span></li>`;
            }).join('')}
          </ul>
        </section>`).join('');

    return `
      <div class="view">
        ${breadcrumbs([
          { label: 'Accueil', route: 'dashboard' },
          { label: 'Repères pédiatriques' },
        ])}

        ${hero(
          'baby',
          'Repères pédiatriques',
          'Estimation du poids et valeurs de référence par tranche d’âge, côte à côte.',
        )}

        <div class="sheet__grid">
          <div class="sheet__col">
            <section class="block">
              <h2 class="block__title">${icon('scale')}Estimation du poids</h2>
              <div class="calc__row">
                <label class="calc__label" for="ped-age">Âge de l’enfant</label>
                <div class="row">
                  <input class="btn" type="number" id="ped-age" min="0" max="14" step="1" value="4"
                         style="width:90px;text-align:center">
                  <select class="btn" id="ped-unit">
                    <option value="years">ans</option>
                    <option value="months">mois</option>
                  </select>
                </div>
              </div>

              <div class="calc__total">
                <div>
                  <p class="eyebrow">Poids estimé</p>
                  <p class="calc__score" id="ped-weight">16 kg</p>
                </div>
                <p class="calc__verdict" id="ped-formula"></p>
              </div>

              <p class="calc__hint">
                Le poids réel indiqué par les parents ou le carnet de santé prime
                toujours sur une formule d’estimation.
              </p>
            </section>

            ${notice(
              'Ces formules servent à <strong>estimer un ordre de grandeur</strong> quand le ' +
              'poids réel est inconnu. Elles ne remplacent ni la pesée, ni une réglette pédiatrique.',
            )}

            <section class="block block--warn">
              <h2 class="block__title">${icon('alert')}Particularités à retenir</h2>
              <ul class="block__list">
                <li>${icon('chevronRight', { size: 'sm' })}<span>L’arrêt de l’enfant est presque toujours d’origine respiratoire : 5 insufflations initiales</span></li>
                <li>${icon('chevronRight', { size: 'sm' })}<span>L’hypotension est un signe tardif : se fier au TRC, aux marbrures et à la conscience</span></li>
                <li>${icon('chevronRight', { size: 'sm' })}<span>Une bradycardie signe une hypoxie : oxygéner et ventiler</span></li>
                <li>${icon('chevronRight', { size: 'sm' })}<span>Nourrisson : tête en position neutre, jamais en hyperextension</span></li>
                <li>${icon('chevronRight', { size: 'sm' })}<span>Pas de compressions abdominales chez le nourrisson qui s’étouffe</span></li>
              </ul>
            </section>
          </div>

          <div class="sheet__col">${rows}</div>
        </div>
      </div>`;
  },

  mount(root) {
    const ageInput = root.querySelector('#ped-age');
    if (!ageInput) return;

    const unitSelect = root.querySelector('#ped-unit');
    const weightEl = root.querySelector('#ped-weight');
    const formulaEl = root.querySelector('#ped-formula');

    const update = () => {
      const value = Number(ageInput.value);

      if (!Number.isFinite(value) || value < 0) {
        weightEl.textContent = '—';
        formulaEl.textContent = 'Saisissez un âge valide.';
        return;
      }

      let weight;
      let formula;

      if (unitSelect.value === 'months') {

        weight = value / 2 + 4;
        formula = '(âge en mois ÷ 2) + 4';
      } else {

        weight = (value + 4) * 2;
        formula = '(âge en années + 4) × 2';
      }

      weightEl.textContent = `${Math.round(weight * 10) / 10} kg`;
      formulaEl.textContent = formula;
    };

    ageInput.addEventListener('input', update);
    unitSelect.addEventListener('change', update);
    update();
  },
};

const TOOLS = {
  glasgow: glasgowTool,
  rcp: rcpTool,
  pediatrie: pediatricTool,
};

export function renderTool(id) {
  const tool = TOOLS[id];

  if (!tool) {
    return `
      <div class="view">
        ${emptyState(
          'alertCircle',
          'Outil introuvable',
          `Aucun outil ne correspond à « ${id} ».`,
          '<a class="btn btn--primary" href="#/">Revenir au tableau de bord</a>',
        )}
      </div>`;
  }

  return tool.render();
}

export function mountTool(id, root) {
  const tool = TOOLS[id];
  if (tool && typeof tool.mount === 'function') tool.mount(root);
}
