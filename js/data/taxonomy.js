export const CATEGORIES = [
  {
    id: 'constantes',
    label: 'Constantes & paramètres vitaux',
    short: 'Constantes',
    icon: 'activity',
    accent: '--accent-neuro',
    group: 'bilan',
  },
  {
    id: 'bilan',
    label: 'Bilan & démarche ABCDE',
    short: 'Bilan / ABCDE',
    icon: 'clipboard',
    accent: '--info',
    group: 'bilan',
  },
  {
    id: 'vitales',
    label: 'Urgences vitales',
    short: 'Urgences vitales',
    icon: 'heartPulse',
    accent: '--danger',
    group: 'urgences',
  },
  {
    id: 'resp',
    label: 'Voies aériennes & respiration',
    short: 'Respiration',
    icon: 'lungs',
    accent: '--accent-resp',
    group: 'urgences',
  },
  {
    id: 'circu',
    label: 'Circulation & hémorragies',
    short: 'Circulation',
    icon: 'droplet',
    accent: '--accent-spo2',
    group: 'urgences',
  },
  {
    id: 'neuro',
    label: 'Neurologie',
    short: 'Neurologie',
    icon: 'brain',
    accent: '--accent-neuro',
    group: 'urgences',
  },
  {
    id: 'malaises',
    label: 'Malaises & pathologies fréquentes',
    short: 'Pathologies',
    icon: 'stethoscope',
    accent: '--accent-thermo',
    group: 'pathologies',
  },
  {
    id: 'trauma',
    label: 'Traumatologie',
    short: 'Traumatologie',
    icon: 'bone',
    accent: '--accent-cardio',
    group: 'pathologies',
  },
  {
    id: 'circonst',
    label: 'Atteintes circonstancielles',
    short: 'Circonstanciel',
    icon: 'flame',
    accent: '--warn',
    group: 'pathologies',
  },
  {
    id: 'avp',
    label: 'AVP & secours routier',
    short: 'AVP / routier',
    icon: 'car',
    accent: '--accent-cardio',
    group: 'pathologies',
  },
  {
    id: 'pedia',
    label: 'Pédiatrie & nourrisson',
    short: 'Pédiatrie',
    icon: 'baby',
    accent: '--accent-trc',
    group: 'publics',
  },
  {
    id: 'obst',
    label: 'Obstétrique',
    short: 'Obstétrique',
    icon: 'child',
    accent: '--accent-trc',
    group: 'publics',
  },
  {
    id: 'geriatrie',
    label: 'Personnes âgées',
    short: 'Gériatrie',
    icon: 'user',
    accent: '--accent-pupil',
    group: 'publics',
  },
  {
    id: 'pharma',
    label: 'Oxygène & médicaments',
    short: 'Oxygène / médicaments',
    icon: 'vial',
    accent: '--accent-tension',
    group: 'ressources',
  },
  {
    id: 'memo',
    label: 'Aides au bilan & transmission',
    short: 'Aides au bilan',
    icon: 'radio',
    accent: '--info',
    group: 'ressources',
  },
];

export const NAV_GROUPS = [
  { id: 'bilan', label: 'Évaluer' },
  { id: 'urgences', label: 'Urgences vitales' },
  { id: 'pathologies', label: 'Pathologies & lésions' },
  { id: 'publics', label: 'Publics particuliers' },
  { id: 'ressources', label: 'Ressources' },
];

export const SEVERITY = {
  critical: { label: 'Vital', tone: 'critical', weight: 3, icon: 'alert' },
  urgent: { label: 'Urgent', tone: 'urgent', weight: 2, icon: 'alertCircle' },
  standard: { label: 'Fiche', tone: 'standard', weight: 1, icon: 'info' },
};

export const AGE_GROUPS = [
  {
    id: 'adult',
    label: 'Adulte',
    hint: 'adulte et adolescent',
    icon: 'user',
    bounds: 'à partir de la puberté',
  },
  {
    id: 'child',
    label: 'Enfant',
    hint: '1 an → puberté',
    icon: 'child',
    bounds: 'de 1 an à la puberté',
  },
  {
    id: 'infant',
    label: 'Nourrisson',
    hint: 'moins de 1 an',
    icon: 'baby',
    bounds: 'de 1 mois à 1 an',
  },
];

export function getCategory(id) {
  return CATEGORIES.find((cat) => cat.id === id) || null;
}

export function categoryLabel(id, short = false) {
  const cat = getCategory(id);
  if (!cat) return id;
  return short ? cat.short : cat.label;
}
