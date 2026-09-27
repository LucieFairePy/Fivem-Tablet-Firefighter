export const VITALS = [

  {
    id: 'fr',
    title: 'Fréquence respiratoire',
    abbr: 'FR',
    icon: 'lungs',
    art: 'lungs',
    artAnim: 'art--breathe',
    accent: '--accent-resp',
    byAge: {
      adult: {
        value: '12–20',
        unit: 'mouvements / minute, au repos',
        zones: [
          { value: '< 12', label: 'Bradypnée', tone: 'low' },
          { value: '12–20', label: 'Habituel', tone: 'ok' },
          { value: '> 20', label: 'Tachypnée', tone: 'warn' },
        ],
        notes: [
          'Critère PSE de détresse respiratoire : FR > 30/min.',
          'Une FR < 6/min annonce un arrêt respiratoire : ventiler sans attendre.',
          'Compter 30 secondes et multiplier par 2, sans prévenir la victime.',
        ],
      },
      child: {
        value: '20–30',
        unit: 'mouvements / minute',
        zones: [
          { value: '< 20', label: 'Bradypnée', tone: 'low' },
          { value: '20–30', label: 'Habituel', tone: 'ok' },
          { value: '> 30', label: 'Tachypnée', tone: 'warn' },
        ],
        notes: [
          'La fatigue respiratoire est un piège : une FR qui ralentit chez un enfant en détresse est un signe de gravité, pas d\'amélioration.',
          'Chercher tirage, battement des ailes du nez, geignement, balancement thoraco-abdominal.',
        ],
      },
      infant: {
        value: '30–40',
        unit: 'mouvements / minute',
        zones: [
          { value: '< 30', label: 'Bradypnée', tone: 'low' },
          { value: '30–40', label: 'Habituel', tone: 'ok' },
          { value: '> 40', label: 'Tachypnée', tone: 'warn' },
        ],
        notes: [
          'Les pauses respiratoires (apnées) de plus de 15 secondes sont un critère de gravité.',
          'Le nourrisson respire par le nez : un nez encombré suffit à créer une détresse.',
        ],
      },
    },
  },

  {
    id: 'spo2',
    title: 'Saturation pulsée en oxygène',
    abbr: 'SpO₂',
    icon: 'droplet',
    art: 'droplet',
    artAnim: 'art--wave',
    accent: '--accent-spo2',
    byAge: {
      adult: {
        value: '94–100',
        unit: '% à l’air ambiant',
        zones: [
          { value: '< 94 %', label: 'Anormale', tone: 'danger' },
          { value: '94–100 %', label: 'Habituel', tone: 'ok' },
          { value: 'IRC : 88–92 %', label: 'Cible spécifique', tone: 'warn' },
        ],
        notes: [
          'Critère PSE de détresse respiratoire : SpO₂ < 94 % à l’air ambiant.',
          'Chez l’insuffisant respiratoire chronique, la cible est 88–92 % : ne pas sur-oxygéner.',
          'Un oxymètre standard ne détecte pas l’intoxication au CO et peut afficher 100 % à tort.',
        ],
      },
      child: {
        value: '94–100',
        unit: '% à l’air ambiant',
        zones: [
          { value: '< 94 %', label: 'Anormale', tone: 'danger' },
          { value: '94–100 %', label: 'Habituel', tone: 'ok' },
          { value: '< 90 %', label: 'Détresse grave', tone: 'danger' },
        ],
        notes: [
          'Utiliser un capteur pédiatrique : un capteur adulte sur un doigt d’enfant donne un signal faux.',
          'La clinique prime : un enfant épuisé, silencieux, avec une SpO₂ correcte reste grave.',
        ],
      },
      infant: {
        value: '94–100',
        unit: '% à l’air ambiant',
        zones: [
          { value: '< 94 %', label: 'Anormale', tone: 'danger' },
          { value: '94–100 %', label: 'Habituel', tone: 'ok' },
          { value: '< 90 %', label: 'Détresse grave', tone: 'danger' },
        ],
        notes: [
          'Capteur au pied ou à la paume, maintenu : les mouvements faussent en permanence la mesure.',
          'Surveiller la coloration péribuccale, le tonus et la prise des biberons.',
        ],
      },
    },
  },

  {
    id: 'fc',
    title: 'Fréquence cardiaque',
    abbr: 'FC',
    icon: 'heart',
    art: 'heart',
    artAnim: 'art--beat',
    accent: '--accent-cardio',
    byAge: {
      adult: {
        value: '60–100',
        unit: 'battements / minute',
        zones: [
          { value: '< 60', label: 'Bradycardie', tone: 'low' },
          { value: '60–100', label: 'Habituel', tone: 'ok' },
          { value: '> 100', label: 'Tachycardie', tone: 'warn' },
        ],
        notes: [
          'Critère PSE de détresse circulatoire : FC < 40 ou > 120/min.',
          'Un sportif entraîné peut être à 45/min sans aucune anomalie : comparer à l’état habituel.',
          'Noter aussi la régularité et l’amplitude du pouls, pas seulement le chiffre.',
        ],
      },
      child: {
        value: '70–140',
        unit: 'battements / minute',
        zones: [
          { value: '< 70', label: 'Bradycardie', tone: 'low' },
          { value: '70–140', label: 'Habituel', tone: 'ok' },
          { value: '> 140', label: 'Tachycardie', tone: 'warn' },
        ],
        notes: [
          'Pleurs, fièvre, douleur et peur accélèrent le pouls : réévaluer au calme.',
          'Chez l’enfant, une bradycardie est presque toujours d’origine hypoxique : oxygéner et ventiler.',
        ],
      },
      infant: {
        value: '100–160',
        unit: 'battements / minute',
        zones: [
          { value: '< 100', label: 'Bradycardie', tone: 'danger' },
          { value: '100–160', label: 'Habituel', tone: 'ok' },
          { value: '> 160', label: 'Tachycardie', tone: 'warn' },
        ],
        notes: [
          'FC < 60/min avec signes de mauvaise perfusion : débuter les compressions thoraciques.',
          'Prendre le pouls au brachial ou au fémoral, jamais au carotidien.',
        ],
      },
    },
  },

  {
    id: 'pa',
    title: 'Pression artérielle',
    abbr: 'PA',
    icon: 'gauge',
    art: 'gauge',
    artAnim: '',
    accent: '--accent-tension',
    byAge: {
      adult: {
        value: '≈ 120 / 80',
        unit: 'mmHg — repère usuel',
        zones: [
          { value: 'PAS < 90', label: 'Détresse', tone: 'danger' },
          { value: '90–140', label: 'Habituel', tone: 'ok' },
          { value: 'PAS > 140', label: 'À contextualiser', tone: 'warn' },
        ],
        notes: [
          'Critère PSE de détresse circulatoire : PAS < 90 mmHg, ou baisse de 30 % chez un hypertendu connu.',
          'Le premier chiffre est la systolique, le second la diastolique.',
          'Brassard adapté au bras : trop petit, il surestime ; trop grand, il sous-estime.',
        ],
      },
      child: {
        value: '70 + (2 × âge)',
        unit: 'mmHg — PAS minimale attendue',
        zones: [
          { value: '< formule', label: 'Hypotension', tone: 'danger' },
          { value: '≥ formule', label: 'Acceptable', tone: 'ok' },
          { value: 'Brassard', label: 'Taille adaptée', tone: 'info' },
        ],
        notes: [
          'Il n’existe pas de valeur de référence unique chez l’enfant : la PAS minimale attendue s’estime par 70 + (2 × âge en années).',
          'L’hypotension est un signe TARDIF chez l’enfant : le choc se voit d’abord sur le TRC, les marbrures et la conscience.',
        ],
      },
      infant: {
        value: '> 60',
        unit: 'mmHg — PAS, repère de perfusion',
        zones: [
          { value: 'PAS < 60', label: 'Hypotension', tone: 'danger' },
          { value: 'PAS ≥ 60', label: 'Acceptable', tone: 'ok' },
          { value: 'Clinique', label: 'Prioritaire', tone: 'info' },
        ],
        notes: [
          'La mesure est difficile et peu fiable en préhospitalier : ne jamais retarder un geste pour l’obtenir.',
          'Se fier au TRC, à la couleur, au tonus, à la température des extrémités et au pouls central.',
        ],
      },
    },
  },

  {
    id: 'temp',
    title: 'Température',
    abbr: 'T°',
    icon: 'thermometer',
    art: 'thermometer',
    artAnim: '',
    accent: '--accent-thermo',
    byAge: {
      adult: {
        value: '36,0–37,5',
        unit: '°C',
        zones: [
          { value: '< 35 °C', label: 'Hypothermie', tone: 'low' },
          { value: '36–37,5', label: 'Habituel', tone: 'ok' },
          { value: '≥ 38 °C', label: 'Fièvre', tone: 'warn' },
        ],
        notes: [
          '≥ 40 °C avec troubles neurologiques : hyperthermie sévère, refroidir immédiatement.',
          'Transmettre la méthode de mesure : tympanique, frontale et axillaire ne sont pas équivalentes.',
          'Hypothermie sévère (< 30 °C) : mobiliser avec douceur, le cœur est irritable.',
        ],
      },
      child: {
        value: '36,0–37,5',
        unit: '°C',
        zones: [
          { value: '< 35 °C', label: 'Hypothermie', tone: 'low' },
          { value: '36–37,5', label: 'Habituel', tone: 'ok' },
          { value: '≥ 38 °C', label: 'Fièvre', tone: 'warn' },
        ],
        notes: [
          'Découvrir l’enfant et hydrater ; ne jamais utiliser un bain froid ni l’alcool.',
          'Fièvre + éruption qui ne s’efface pas à la pression (purpura) : urgence absolue.',
        ],
      },
      infant: {
        value: '36,5–37,5',
        unit: '°C',
        zones: [
          { value: '< 36 °C', label: 'Hypothermie', tone: 'danger' },
          { value: '36,5–37,5', label: 'Habituel', tone: 'ok' },
          { value: '≥ 38 °C', label: 'Fièvre', tone: 'danger' },
        ],
        notes: [
          'Toute fièvre avant 3 mois est une urgence médicale, même avec un bon état général.',
          'Le nourrisson se refroidit très vite : limiter le déshabillage, couvrir la tête.',
        ],
      },
    },
  },

  {
    id: 'gly',
    title: 'Glycémie capillaire',
    abbr: 'Gly',
    icon: 'glucose',
    art: 'glucose',
    artAnim: '',
    accent: '--accent-glyc',
    byAge: {
      adult: {
        value: '0,70–1,10',
        unit: 'g/L — à jeun',
        zones: [
          { value: '< 0,60', label: 'Hypoglycémie', tone: 'danger' },
          { value: '0,70–1,10', label: 'Habituel', tone: 'ok' },
          { value: '> 2,00', label: 'Hyperglycémie', tone: 'warn' },
        ],
        notes: [
          'Seuil opérationnel de resucrage : < 0,60 g/L, ou tout diabétique symptomatique.',
          '1 g/L = 5,5 mmol/L. Toujours transmettre l’unité, l’heure et le dernier repas.',
          'Tout trouble de conscience impose une glycémie : c’est une cause réversible en quelques minutes.',
        ],
      },
      child: {
        value: '0,60–1,10',
        unit: 'g/L',
        zones: [
          { value: '< 0,60', label: 'Hypoglycémie', tone: 'danger' },
          { value: '0,60–1,10', label: 'Habituel', tone: 'ok' },
          { value: '> 2,00', label: 'Hyperglycémie', tone: 'warn' },
        ],
        notes: [
          'L’enfant épuise ses réserves de glucose beaucoup plus vite que l’adulte : jeûne, vomissements ou effort suffisent.',
          'Une convulsion chez l’enfant impose une glycémie.',
        ],
      },
      infant: {
        value: '0,50–1,00',
        unit: 'g/L',
        zones: [
          { value: '< 0,45', label: 'Hypoglycémie', tone: 'danger' },
          { value: '0,50–1,00', label: 'Habituel', tone: 'ok' },
          { value: 'Mesure', label: 'Systématique', tone: 'info' },
        ],
        notes: [
          'Le seuil est plus bas chez le nouveau-né (< 0,45 g/L) et l’hypoglycémie y est fréquente.',
          'Signes trompeurs : hypotonie, refus du biberon, geignement, hypothermie.',
        ],
      },
    },
  },

  {
    id: 'glasgow',
    title: 'Score de Glasgow',
    abbr: 'GCS',
    icon: 'brain',
    art: 'brain',
    artAnim: '',
    accent: '--accent-neuro',
    byAge: {
      adult: {
        value: '15 / 15',
        unit: 'Y + V + M — score maximal',
        zones: [
          { value: '≤ 8', label: 'Coma', tone: 'danger' },
          { value: '9–13', label: 'Altéré', tone: 'warn' },
          { value: '14–15', label: 'Habituel', tone: 'ok' },
        ],
        notes: [
          'Toujours transmettre le détail Y / V / M, pas seulement le total : 4+1+3 et 1+4+3 n’ont pas le même sens.',
          'GCS ≤ 8 : voies aériennes menacées, position latérale de sécurité et renfort médical.',
          'Une baisse de 2 points ou plus est un critère d’aggravation en soi.',
        ],
      },
      child: {
        value: '15 / 15',
        unit: 'Glasgow pédiatrique adapté',
        zones: [
          { value: '≤ 8', label: 'Coma', tone: 'danger' },
          { value: '9–13', label: 'Altéré', tone: 'warn' },
          { value: '14–15', label: 'Habituel', tone: 'ok' },
        ],
        notes: [
          'La réponse verbale est cotée selon le langage attendu à l’âge de l’enfant.',
          'Le meilleur repère reste l’entourage : « il n’est pas comme d’habitude » est un signe clinique.',
        ],
      },
      infant: {
        value: '15 / 15',
        unit: 'Glasgow pédiatrique adapté',
        zones: [
          { value: '≤ 8', label: 'Coma', tone: 'danger' },
          { value: '9–13', label: 'Altéré', tone: 'warn' },
          { value: '14–15', label: 'Habituel', tone: 'ok' },
        ],
        notes: [
          'Chez le nourrisson, la réponse verbale se cote sur le babillage, les pleurs et le geignement.',
          'Hypotonie, regard fixe, absence de réaction à la voix des parents : rechercher une urgence vitale.',
        ],
      },
    },
  },

  {
    id: 'trc',
    title: 'Temps de recoloration cutanée',
    abbr: 'TRC',
    icon: 'hand',
    art: 'hand',
    artAnim: '',
    accent: '--accent-trc',
    byAge: {
      adult: {
        value: '< 2',
        unit: 'secondes',
        zones: [
          { value: '< 2 s', label: 'Habituel', tone: 'ok' },
          { value: '2–3 s', label: 'À recontrôler', tone: 'warn' },
          { value: '> 3 s', label: 'Anormal', tone: 'danger' },
        ],
        notes: [
          'Comprimer la pulpe de l’ongle ou le sternum 5 secondes, puis relâcher et compter.',
          'Le froid ambiant allonge le TRC : mesurer sur une zone centrale en cas de doute.',
          'Un TRC allongé précède souvent la chute de tension : c’est un signe précoce de choc.',
        ],
      },
      child: {
        value: '< 2',
        unit: 'secondes',
        zones: [
          { value: '< 2 s', label: 'Habituel', tone: 'ok' },
          { value: '2–3 s', label: 'À recontrôler', tone: 'warn' },
          { value: '> 3 s', label: 'Anormal', tone: 'danger' },
        ],
        notes: [
          'Chez l’enfant, c’est l’indicateur de perfusion le plus utile en préhospitalier.',
          'À associer aux marbrures, à la température des genoux et à l’état de conscience.',
        ],
      },
      infant: {
        value: '< 2',
        unit: 'secondes',
        zones: [
          { value: '< 2 s', label: 'Habituel', tone: 'ok' },
          { value: '2–3 s', label: 'À recontrôler', tone: 'warn' },
          { value: '> 3 s', label: 'Anormal', tone: 'danger' },
        ],
        notes: [
          'Mesurer au sternum ou au front, en milieu tempéré.',
          'Marbrures persistantes + TRC > 3 s + hypotonie : état de choc jusqu’à preuve du contraire.',
        ],
      },
    },
  },

  {
    id: 'pupilles',
    title: 'Pupilles',
    abbr: 'Pupilles',
    icon: 'eye',
    art: 'eye',
    artAnim: 'art--wave',
    accent: '--accent-pupil',
    byAge: {
      adult: {
        value: 'Égales',
        unit: 'symétrie • réactivité • taille',
        zones: [
          { value: 'Réactives', label: 'Habituel', tone: 'ok' },
          { value: 'Asymétriques', label: 'À signaler', tone: 'warn' },
          { value: 'Fixes', label: 'Gravité', tone: 'danger' },
        ],
        notes: [
          'Mydriase = pupille dilatée. Myosis = pupille rétrécie.',
          'Myosis serré bilatéral + bradypnée : évoquer une intoxication aux opioïdes.',
          'Une mydriase unilatérale aréactive après un traumatisme crânien est une urgence absolue.',
        ],
      },
      child: {
        value: 'Égales',
        unit: 'symétrie • réactivité • taille',
        zones: [
          { value: 'Réactives', label: 'Habituel', tone: 'ok' },
          { value: 'Asymétriques', label: 'À signaler', tone: 'warn' },
          { value: 'Fixes', label: 'Gravité', tone: 'danger' },
        ],
        notes: [
          'Examiner dans la pénombre, avec une lampe de faible intensité.',
          'Toujours rapprocher du contexte : traumatisme, toxique, convulsion.',
        ],
      },
      infant: {
        value: 'Égales',
        unit: 'symétrie • réactivité • taille',
        zones: [
          { value: 'Réactives', label: 'Habituel', tone: 'ok' },
          { value: 'Asymétriques', label: 'À signaler', tone: 'warn' },
          { value: 'Fixes', label: 'Gravité', tone: 'danger' },
        ],
        notes: [
          'Le regard « plafonnant » ou dévié est un signe neurologique à transmettre.',
          'Anomalie pupillaire sans cause évidente chez un nourrisson : rechercher un traumatisme infligé.',
        ],
      },
    },
  },

  {
    id: 'douleur',
    title: 'Évaluation de la douleur',
    abbr: 'EN / EVA',
    icon: 'smile',
    art: 'smile',
    artAnim: '',
    accent: '--accent-douleur',
    byAge: {
      adult: {
        value: '0–10',
        unit: 'échelle numérique, auto-évaluée',
        zones: [
          { value: '0–3', label: 'Légère', tone: 'ok' },
          { value: '4–6', label: 'Modérée', tone: 'warn' },
          { value: '7–10', label: 'Intense', tone: 'danger' },
        ],
        notes: [
          'La douleur est ce que la victime dit qu’elle est : ne jamais corriger son chiffre.',
          'Méthode OPQRST : Origine, Provocation, Qualité, iRradiation, Sévérité, Temps.',
          'Réévaluer après chaque geste, et transmettre les deux valeurs (avant / après).',
        ],
      },
      child: {
        value: 'Selon l’âge',
        unit: 'FPS-R ou échelle numérique',
        zones: [
          { value: '< 4 ans', label: 'EVENDOL', tone: 'info' },
          { value: '4–6 ans', label: 'Visages FPS-R', tone: 'info' },
          { value: '> 6 ans', label: 'EN 0–10', tone: 'ok' },
        ],
        notes: [
          'L’échelle des visages (FPS-R) se cote 0-2-4-6-8-10, jamais de 1 à 6.',
          'Un enfant qui ne joue plus, ne parle plus et reste immobile a souvent très mal : l’atonie psychomotrice est un signe de douleur intense.',
        ],
      },
      infant: {
        value: 'Hétéro-évaluation',
        unit: 'EVENDOL / FLACC',
        zones: [
          { value: 'Visage', label: 'Crispation', tone: 'info' },
          { value: 'Corps', label: 'Agitation, raideur', tone: 'info' },
          { value: 'Cri', label: 'Inconsolable', tone: 'warn' },
        ],
        notes: [
          'Aucune auto-évaluation possible : observer visage, membres, cri, consolabilité et interaction.',
          'Un nourrisson qui geint faiblement sans pleurer peut être épuisé : c’est un signe de gravité.',
        ],
      },
    },
  },

  {
    id: 'rass',
    title: 'Échelle RASS',
    abbr: 'RASS',
    icon: 'moon',
    art: 'moon',
    artAnim: '',
    accent: '--accent-sedation',
    byAge: {
      adult: {
        value: '0',
        unit: 'échelle de −5 à +4',
        zones: [
          { value: '−5 → −1', label: 'Hypovigilance', tone: 'low' },
          { value: '0', label: 'Éveillé, calme', tone: 'ok' },
          { value: '+1 → +4', label: 'Agitation', tone: 'warn' },
        ],
        notes: [
          'RASS = Richmond Agitation-Sedation Scale. −5 : non réveillable. +4 : combatif, dangereux.',
          'Complète le Glasgow sur le versant agitation ; elle ne le remplace pas.',
          'Utile pour décrire objectivement une agitation avant l’arrivée médicale.',
        ],
      },

      child: null,
      infant: null,
    },
  },
];

export const VITAL_IDS = VITALS.map((vital) => vital.id);

export function getVital(id) {
  return VITALS.find((vital) => vital.id === id) || null;
}

export function vitalForAge(id, ageId) {
  const vital = getVital(id);
  return vital ? vital.byAge[ageId] || null : null;
}

export const NOT_APPLICABLE = {
  rass: 'L’échelle RASS n’est pas validée chez l’enfant et le nourrisson. Décrire le comportement observé et le comparer à l’état habituel rapporté par les parents.',
};
