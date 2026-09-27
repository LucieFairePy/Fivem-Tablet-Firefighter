import { icon } from '../icons.js';
import { escapeHtml } from '../search.js';
import { DATA_STATS, validateData } from '../data/index.js';
import { CATEGORIES } from '../data/taxonomy.js';
import { getState } from '../store.js';
import { IS_NUI } from '../nui.js';
import { getDeviceInfo, DEVICE_MODELS } from '../device.js';
import { breadcrumbs, hero, notice } from './components.js';

const SOURCES = [
  {
    title: 'Références techniques nationales — Premiers Secours en Équipe',
    level: 'info',
    text:
      'Base principale de ce support : bilan, fonctions respiratoire, circulatoire et '
      + 'neurologique, gestes de secours et procédures. C’est le référentiel qui fixe les '
      + 'critères mesurés de détresse cités dans les fiches.',
  },
  {
    title: 'Code de la santé publique — articles R.6311-18 à R.6311-18-4',
    level: 'info',
    text:
      'Encadre le recueil par les secouristes de la température, de la pulsation, de la '
      + 'pression artérielle, de la glycémie capillaire, de la saturation en oxygène et des '
      + 'scores cliniques, ainsi que leur application aux unités militaires.',
  },
  {
    title: 'Haute Autorité de Santé et Assurance Maladie',
    level: 'info',
    text:
      'Sources complémentaires pour les définitions cliniques, l’évaluation de la douleur '
      + 'et les repères non fixés par le référentiel PSE.',
  },
  {
    title: 'Échelles cliniques citées',
    level: 'info',
    text:
      'Glasgow Coma Scale (Teasdale et Jennett), Richmond Agitation-Sedation Scale (Sessler), '
      + 'échelle des visages FPS-R, EVENDOL, score d’Apgar, règle des 9 de Wallace.',
  },
];

export function renderSources() {
  const { errors, warnings } = validateData();

  const sources = SOURCES.map((source) => `
    <section class="block block--${source.level}">
      <h2 class="block__title">${icon('book')}${escapeHtml(source.title)}</h2>
      <p class="block__text">${escapeHtml(source.text)}</p>
    </section>`).join('');

  const coverage = CATEGORIES.map((cat) => `
    <li>${icon(cat.icon, { size: 'sm' })}<span>${escapeHtml(cat.label)}</span></li>`).join('');

  const integrity = errors.length === 0 && warnings.length === 0
    ? `<section class="block block--ok">
        <h2 class="block__title">${icon('checkCircle')}Intégrité des données</h2>
        <p class="block__text">
          ${DATA_STATS.cards} fiches vérifiées : identifiants uniques, catégories déclarées,
          liens internes valides, et une fiche pour chaque constante du tableau de bord.
        </p>
      </section>`
    : `<section class="block block--danger">
        <h2 class="block__title">${icon('alert')}Anomalies détectées</h2>
        <ul class="block__list">
          ${[...errors, ...warnings].map((message) => `
            <li>${icon('chevronRight', { size: 'sm' })}<span>${escapeHtml(message)}</span></li>`).join('')}
        </ul>
      </section>`;

  return `
    <div class="view">
      ${breadcrumbs([
        { label: 'Accueil', route: 'dashboard' },
        { label: 'Référentiels' },
      ])}

      ${hero(
        'book',
        'Référentiels & sources',
        `Support pédagogique — ${DATA_STATS.cards} fiches, ${DATA_STATS.vitals} constantes, révision ${DATA_STATS.revision}.`,
      )}

      <div class="sheet__grid">
        <div class="sheet__col">
          ${notice(
            '<strong>Ce support n’est pas un protocole de service.</strong> '
            + 'La formation reçue, les procédures internes en vigueur et la régulation '
            + 'médicale priment en toutes circonstances. En cas de divergence entre ce '
            + 'document et une consigne de service, c’est la consigne de service qui s’applique.',
          )}
          ${sources}
        </div>

        <div class="sheet__col">
          ${integrity}

          <section class="block block--info">
            <h2 class="block__title">${icon('layers')}Couverture</h2>
            <ul class="block__list">${coverage}</ul>
          </section>

          <section class="block">
            <h2 class="block__title">${icon('info')}À propos</h2>
            <p class="block__text">
              Tablette de consultation conçue pour un usage en jeu de rôle. Fonctionne
              intégralement hors ligne : aucune ressource externe, aucune connexion requise.
            </p>
            <p class="block__text">
              Contexte d’exécution détecté : <strong>${IS_NUI ? 'NUI FiveM' : 'navigateur'}</strong>.
            </p>
          </section>
        </div>
      </div>
    </div>`;
}

const ENGINE_FEATURES = [
  {
    label: 'color-mix() — teintes et halos',
    since: 'Chromium 111',
    critical: true,
    test: () => CSS.supports('color', 'color-mix(in srgb, red 50%, transparent)'),
  },
  {
    label: 'Unités dvh — hauteur de la fenêtre',
    since: 'Chromium 108',
    critical: true,
    test: () => CSS.supports('height', '100dvh'),
  },
  {
    label: 'Modules JavaScript',
    since: 'Chromium 61',
    critical: true,

    test: () => true,
  },
  {
    label: 'Transitions de vue animées',
    since: 'Chromium 111',
    critical: false,
    test: () => typeof document.startViewTransition === 'function',
  },
  {
    label: 'inert — contenu neutralisé hors tension',
    since: 'Chromium 102',
    critical: false,
    test: () => 'inert' in HTMLElement.prototype,
  },
  {
    label: 'ResizeObserver — suivi de résolution',
    since: 'Chromium 64',
    critical: false,
    test: () => typeof ResizeObserver === 'function',
  },
];

function renderEngineCheck() {
  const results = ENGINE_FEATURES.map((feature) => {
    let ok = false;
    try {
      ok = Boolean(feature.test());
    } catch {
      ok = false;
    }
    return { ...feature, ok };
  });

  const blocking = results.filter((r) => !r.ok && r.critical);
  const degraded = results.filter((r) => !r.ok && !r.critical);

  const items = results.map((r) => `
    <li>
      ${icon(r.ok ? 'checkCircle' : (r.critical ? 'alert' : 'alertCircle'), { size: 'sm' })}
      <span>
        ${escapeHtml(r.label)}
        <span class="calc__hint">${escapeHtml(r.since)} — ${
          r.ok ? 'disponible' : (r.critical ? 'MANQUANT' : 'absent, repli actif')
        }</span>
      </span>
    </li>`).join('');

  let verdict;
  if (blocking.length > 0) {
    verdict = notice(
      `<strong>${blocking.length} fonctionnalité(s) requise(s) manquante(s).</strong> `
      + 'Le moteur est trop ancien : certaines couleurs ou dimensions seront '
      + 'incorrectes. Mettez le client FiveM à jour.',
    );
  } else if (degraded.length > 0) {
    verdict = `<p class="block__text">Tout fonctionne. ${degraded.length} option(s) `
      + `d’agrément indisponible(s), avec repli automatique : aucune incidence `
      + 'sur le contenu.</p>';
  } else {
    verdict = '<p class="block__text">Toutes les fonctionnalités sont disponibles.</p>';
  }

  return `
    <section class="block block--${blocking.length ? 'danger' : 'ok'}">
      <h2 class="block__title">${icon('shield')}Compatibilité du moteur</h2>
      ${verdict}
      <ul class="block__list">${items}</ul>
    </section>`;
}

export function renderSettings() {
  const { theme, contrast, motion, favorites, recents } = getState();
  const device = getDeviceInfo();

  const toggle = (id, label, hint, active, on, off) => `
    <div class="setting">
      <div class="setting__text">
        <p class="setting__label">${escapeHtml(label)}</p>
        <p class="setting__hint">${escapeHtml(hint)}</p>
      </div>
      <button class="btn" data-setting="${id}" aria-pressed="${active}">
        ${icon(active ? on.icon : off.icon, { size: 'sm' })}
        <span>${escapeHtml(active ? on.label : off.label)}</span>
      </button>
    </div>`;

  return `
    <div class="view">
      ${breadcrumbs([
        { label: 'Accueil', route: 'dashboard' },
        { label: 'Réglages' },
      ])}

      ${hero(
        'sliders',
        'Réglages',
        'Préférences d’affichage, conservées sur cet appareil uniquement.',
      )}

      <div class="sheet__grid">
        <div class="sheet__col">
          <section class="block">
            <h2 class="block__title">${icon('sun')}Affichage</h2>
            <div class="calc">
              ${toggle('theme', 'Thème',
                'Sombre pour l’usage en jeu, clair pour la lecture sur écran lumineux.',
                theme === 'light',
                { icon: 'sun', label: 'Clair' }, { icon: 'moon', label: 'Sombre' })}
              ${toggle('contrast', 'Contraste renforcé',
                'Augmente les tailles minimales et la netteté des textes secondaires.',
                contrast === 'high',
                { icon: 'checkCircle', label: 'Activé' }, { icon: 'minus', label: 'Standard' })}
              ${toggle('motion', 'Mouvement réduit',
                'Supprime les animations d’entrée et de transition.',
                motion === 'reduced',
                { icon: 'checkCircle', label: 'Activé' }, { icon: 'minus', label: 'Standard' })}
            </div>
          </section>

          <section class="block">
            <h2 class="block__title">${icon('grid')}Châssis de la tablette</h2>
            <p class="block__text">
              La tablette s’affiche toujours dans son châssis. Pour rester
              lisible à toutes les résolutions, elle existe en plusieurs
              définitions de dalle : la plus grande qui tient dans la fenêtre
              est retenue automatiquement, puis mise à l’échelle. À dalle égale,
              la mise en page est identique pour tous les joueurs.
            </p>

            <ul class="block__list">
              <li>${icon('chevronRight', { size: 'sm' })}<span>Résolution détectée : <strong>${escapeHtml(device.viewport)}</strong></span></li>
              <li>${icon('chevronRight', { size: 'sm' })}<span>Modèle retenu : <strong>${escapeHtml(device.modelLabel)}</strong></span></li>
              <li>${icon('chevronRight', { size: 'sm' })}<span>Dalle : <strong>${escapeHtml(device.screen)}</strong> · châssis ${escapeHtml(device.chassis)}</span></li>
              <li>${icon('chevronRight', { size: 'sm' })}<span>Échelle appliquée : <strong>${Math.round(device.scale * 100)} %</strong></span></li>
            </ul>

            <p class="calc__hint">Gamme disponible</p>
            <div class="chips" role="list" aria-label="Définitions de dalle">
              ${DEVICE_MODELS.map((m) => `
                <span class="chip" role="listitem" aria-current="${m.id === device.modelId}"
                      ${m.id === device.modelId ? 'aria-pressed="true"' : ''}>
                  ${escapeHtml(m.w + ' × ' + m.h)}
                </span>`).join('')}
            </div>
          </section>

          <section class="block block--warn">
            <h2 class="block__title">${icon('refresh')}Données locales</h2>
            <p class="block__text">
              ${favorites.length} favori${favorites.length > 1 ? 's' : ''} ·
              ${recents.length} fiche${recents.length > 1 ? 's' : ''} dans l’historique.
              Ces informations restent sur cet appareil et ne sont jamais transmises.
            </p>
            <button class="btn btn--danger" data-setting="reset">
              ${icon('refresh')}<span>Réinitialiser les préférences</span>
            </button>
          </section>
        </div>

        <div class="sheet__col">
          <section class="block block--info">
            <h2 class="block__title">${icon('keyboard')}Raccourcis clavier</h2>
            <ul class="block__list">
              <li><span class="kbd">Ctrl</span><span class="kbd">K</span><span>Ouvrir la recherche</span></li>
              <li><span class="kbd">/</span><span>Ouvrir la recherche</span></li>
              <li><span class="kbd">↑</span><span class="kbd">↓</span><span>Parcourir les résultats</span></li>
              <li><span class="kbd">Entrée</span><span>Ouvrir le résultat sélectionné</span></li>
              <li><span class="kbd">Échap</span><span>Fermer la surcouche, puis la tablette</span></li>
              <li><span class="kbd">?</span><span>Afficher cette liste</span></li>
            </ul>
          </section>

          <section class="block block--info">
            <h2 class="block__title">${icon('power')}Boutons du châssis</h2>
            <ul class="block__list">
              <li>${icon('power', { size: 'sm' })}<span><strong>Alimentation</strong> — en haut de la tranche : allume la dalle, puis l’éteint et range la tablette</span></li>
              <li>${icon('chevronRight', { size: 'sm' })}<span>Dalle éteinte, tablette encore sortie : la toucher la rallume</span></li>
              <li>${icon('chevronRight', { size: 'sm' })}<span><span class="kbd">Échap</span> range la tablette, quel que soit l’état de la dalle</span></li>
              <li>${icon('sun', { size: 'sm' })}<span><strong>Luminosité</strong> — quatre paliers, utile de nuit en jeu</span></li>
              <li>${icon('plus', { size: 'sm' })}<span><strong>Volume</strong> — règle le son du métronome RCP</span></li>
            </ul>
          </section>

          ${renderEngineCheck()}

          <section class="block">
            <h2 class="block__title">${icon('printer')}Impression</h2>
            <p class="block__text">
              Toute fiche peut être imprimée : le menu, le rail et les boutons sont
              automatiquement retirés pour ne garder que le contenu.
            </p>
          </section>
        </div>
      </div>
    </div>`;
}
