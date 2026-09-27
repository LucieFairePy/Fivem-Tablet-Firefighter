export const CONSTANTES_CARDS = [

  {
    id: 'fr',
    cat: 'constantes',
    title: 'Fréquence respiratoire',
    abbr: 'FR',
    icon: 'lungs',
    severity: 'standard',
    desc: 'Nombre de cycles respiratoires par minute, et qualité de la respiration.',
    tags: ['respiration', 'bradypnée', 'tachypnée', 'tirage', 'cyanose', 'ventilation'],
    summary:
      'La fréquence ne dit pas tout. Une victime à 18/min qui lutte pour respirer est plus grave qu’une victime à 24/min parfaitement à l’aise. Regarder toujours amplitude, régularité, bruits, tirage, coloration et capacité à parler.',
    blocks: [
      {
        title: 'Comment mesurer',
        level: 'info',
        items: [
          'Compter sans prévenir : dire « je compte votre respiration » modifie le résultat.',
          'Observer ou poser la main à plat sur le thorax, compter 30 secondes et multiplier par 2.',
          'Un cycle = une inspiration + une expiration.',
        ],
      },
      {
        title: 'Signes de lutte respiratoire',
        level: 'warn',
        items: [
          'Tirage sus-sternal, intercostal ou sous-costal.',
          'Battement des ailes du nez, geignement expiratoire.',
          'Mise en jeu des muscles du cou et des épaules.',
          'Impossibilité de terminer une phrase sans reprendre son souffle.',
        ],
      },
      {
        title: 'Pièges fréquents',
        level: 'danger',
        items: [
          'Une FR qui ralentit chez une victime en détresse signe l’épuisement, pas l’amélioration.',
          'Les gasps (respiration agonique) ne sont PAS une respiration : ils imposent la RCP.',
          'Anxiété et douleur accélèrent la respiration sans pathologie respiratoire.',
        ],
      },
    ],
    steps: [
      { title: 'Observer', text: 'Position spontanée, capacité à parler, coloration, sueurs.' },
      { title: 'Compter', text: 'Sur 30 secondes, discrètement, en gardant la main sur le pouls pour ne pas alerter la victime.' },
      { title: 'Qualifier', text: 'Ample ou superficielle, régulière ou irrégulière, bruyante ou silencieuse.' },
      { title: 'Agir', text: 'Position assise si détresse et conscience conservée, oxygène selon les critères, réévaluation rapprochée.' },
    ],
    redFlags: [
      'FR > 30/min chez l’adulte',
      'FR < 6/min ou pauses respiratoires',
      'Cyanose, sueurs, agitation puis somnolence',
      'Impossibilité de parler',
      'Épuisement avec ralentissement de la FR',
    ],
    transmit: ['Valeur et heure', 'Amplitude', 'Bruits', 'Signes de lutte', 'Coloration', 'SpO₂ associée', 'Évolution'],
    related: ['spo2', 'detresse-resp', 'asthme', 'o2'],
    source: 'Références techniques nationales PSE — bilan de la fonction respiratoire.',
  },

  {
    id: 'spo2',
    cat: 'constantes',
    title: 'Saturation pulsée en oxygène',
    abbr: 'SpO₂',
    icon: 'droplet',
    severity: 'standard',
    desc: 'Estimation non invasive de la proportion d’hémoglobine transportant de l’oxygène.',
    tags: ['oxymètre', 'saturomètre', 'hypoxie', 'oxygène', 'IRC', 'monoxyde'],
    summary:
      'L’oxymètre mesure la lumière absorbée par le sang pulsé. Il estime l’oxygénation, il ne mesure ni la ventilation ni le CO₂. Une SpO₂ normale n’exclut ni une détresse respiratoire, ni une intoxication au monoxyde de carbone.',
    blocks: [
      {
        title: 'Conditions d’une mesure fiable',
        level: 'info',
        items: [
          'Doigt propre, réchauffé, sans vernis foncé ni faux ongle.',
          'Attendre la stabilisation de la courbe ou du signal, 10 à 15 secondes.',
          'Mesurer à l’air ambiant AVANT d’oxygéner, si l’état le permet.',
          'Noter la valeur ET le mode : air ambiant ou sous oxygène, avec le débit.',
        ],
      },
      {
        title: 'Causes de mesure fausse',
        level: 'warn',
        items: [
          'Hypothermie, état de choc, vasoconstriction : signal absent ou sous-estimé.',
          'Mouvements, tremblements, frissons.',
          'Lumière ambiante intense directement sur le capteur.',
          'Anémie sévère : la SpO₂ reste normale alors que le transport d’oxygène est effondré.',
        ],
      },
      {
        title: 'Le piège du monoxyde de carbone',
        level: 'danger',
        text:
          'L’oxymètre standard ne distingue pas l’oxyhémoglobine de la carboxyhémoglobine. Dans une intoxication au CO, il peut afficher 98 à 100 % alors que la victime est gravement hypoxique. Dans un contexte d’incendie, de chauffage défectueux ou de groupe électrogène, la SpO₂ ne doit jamais rassurer.',
      },
      {
        title: 'Insuffisant respiratoire chronique',
        level: 'warn',
        text:
          'Chez l’insuffisant respiratoire chronique, la cible d’oxygénation est 88–92 %. Viser 100 % peut déprimer sa commande ventilatoire. Se conformer à la prescription médicale et à la régulation.',
      },
    ],
    steps: [
      { title: 'Poser le capteur', text: 'Index ou majeur, capteur adapté à la taille du doigt.' },
      { title: 'Attendre', text: 'Stabilisation du signal ; vérifier que la fréquence affichée correspond au pouls palpé.' },
      { title: 'Confronter', text: 'FR, travail respiratoire, coloration, conscience. La clinique prime sur le chiffre.' },
      { title: 'Oxygéner si indiqué', text: 'Selon le protocole et la cible adaptée au terrain de la victime.' },
    ],
    redFlags: [
      'SpO₂ < 94 % à l’air ambiant',
      'SpO₂ < 90 % malgré l’oxygène',
      'Cyanose visible',
      'Contexte de fumées ou de CO, quelle que soit la valeur affichée',
    ],
    transmit: ['Valeur', 'Air ambiant ou débit d’O₂', 'Heure', 'Qualité du signal', 'Évolution sous oxygène'],
    related: ['fr', 'o2', 'detresse-resp', 'co'],
    source: 'Références techniques nationales PSE — oxymétrie de pouls et oxygénothérapie.',
  },

  {
    id: 'fc',
    cat: 'constantes',
    title: 'Fréquence cardiaque',
    abbr: 'FC',
    icon: 'heart',
    severity: 'standard',
    desc: 'Nombre de battements par minute, régularité et amplitude du pouls.',
    tags: ['pouls', 'bradycardie', 'tachycardie', 'radial', 'carotidien', 'rythme'],
    summary:
      'Le cœur accélère pour compenser : douleur, fièvre, hypoxie, hémorragie, déshydratation, stress. La tachycardie est souvent le PREMIER signe d’un choc, bien avant la chute de tension. Un pouls filant et rapide est plus inquiétant qu’un chiffre élevé isolé.',
    blocks: [
      {
        title: 'Où prendre le pouls',
        level: 'info',
        items: [
          'Adulte et enfant conscients : radial, deux doigts, jamais le pouce.',
          'Adulte inconscient : carotidien, 10 secondes maximum.',
          'Nourrisson : brachial ou fémoral — jamais le carotidien.',
        ],
      },
      {
        title: 'Au-delà du chiffre',
        level: 'info',
        items: [
          'Régularité : régulier, irrégulier, irrégulièrement irrégulier.',
          'Amplitude : bien frappé, faible, filant.',
          'Symétrie : comparer les deux radiales en cas de suspicion de dissection aortique.',
        ],
      },
      {
        title: 'Causes d’accélération',
        level: 'warn',
        text: 'Douleur, fièvre, anxiété, effort, hypoxie, hémorragie, déshydratation, choc, hyperthyroïdie, toxiques et stimulants, sevrage.',
      },
      {
        title: 'Causes de ralentissement',
        level: 'warn',
        text: 'Sportif entraîné, médicaments (bêtabloquants, digitaliques), trouble de conduction, hypothermie, hypertension intracrânienne, hypoxie profonde chez l’enfant.',
      },
    ],
    steps: [
      { title: 'Palper', text: 'Deux doigts sur le trajet artériel, sans comprimer.' },
      { title: 'Compter', text: '30 secondes × 2 si régulier ; 60 secondes pleines si irrégulier.' },
      { title: 'Qualifier', text: 'Régularité et amplitude, en plus du chiffre.' },
      { title: 'Croiser', text: 'PA, TRC, coloration, marbrures, conscience : c’est l’ensemble qui définit la perfusion.' },
    ],
    redFlags: [
      'FC < 40 ou > 120/min chez l’adulte',
      'Pouls radial imprenable alors que le carotidien est perçu',
      'Pouls filant avec marbrures et TRC allongé',
      'Bradycardie chez un enfant en détresse respiratoire',
    ],
    transmit: ['Valeur et heure', 'Site de prise', 'Régularité', 'Amplitude', 'PA associée', 'Évolution'],
    related: ['pa', 'trc', 'choc', 'hemorragie'],
    source: 'Références techniques nationales PSE — bilan de la fonction circulatoire.',
  },

  {
    id: 'pa',
    cat: 'constantes',
    title: 'Pression artérielle',
    abbr: 'PA',
    icon: 'gauge',
    severity: 'standard',
    desc: 'Pression systolique et diastolique dans le réseau artériel, en mmHg.',
    tags: ['tension', 'systolique', 'diastolique', 'hypotension', 'hypertension', 'brassard', 'mmHg'],
    summary:
      'La systolique correspond à l’éjection du sang par le cœur, la diastolique à la pression résiduelle entre deux battements. Chez l’adulte, le repère usuel est d’environ 120/80 mmHg — ce n’est pas une norme à atteindre, mais un ordre de grandeur.',
    blocks: [
      {
        title: 'Mesurer correctement',
        level: 'info',
        items: [
          'Victime au repos, bras au niveau du cœur, manche non serrée.',
          'Brassard adapté : la poche gonflable doit couvrir environ 80 % du tour de bras.',
          'Ne pas mesurer du côté d’une fistule, d’un curage axillaire ou d’un membre traumatisé.',
          'En cas de valeur surprenante, recontrôler sur l’autre bras avant de conclure.',
        ],
      },
      {
        title: 'Erreurs de brassard',
        level: 'warn',
        text: 'Un brassard trop petit surestime la pression, un brassard trop grand la sous-estime. C’est la cause d’erreur la plus fréquente en préhospitalier, particulièrement chez la personne obèse et chez l’enfant.',
      },
      {
        title: 'Hypotension',
        level: 'danger',
        text:
          'PAS < 90 mmHg, ou baisse de 30 % chez un hypertendu connu, constitue un critère mesuré de détresse circulatoire. Une PAS à 110 chez une personne habituellement à 170 est déjà une hypotension relative.',
      },
      {
        title: 'Hypertension',
        level: 'warn',
        text:
          'Une PA élevée isolée, sans symptôme, n’est pas une urgence. Elle le devient associée à : céphalée brutale, déficit neurologique, douleur thoracique, difficulté respiratoire, troubles visuels, ou grossesse.',
      },
    ],
    steps: [
      { title: 'Installer', text: 'Brassard au bras nu, bord inférieur 2–3 cm au-dessus du pli du coude.' },
      { title: 'Mesurer', text: 'Victime immobile et silencieuse pendant la mesure.' },
      { title: 'Interpréter', text: 'Comparer à l’état habituel et au traitement en cours plutôt qu’à une norme théorique.' },
      { title: 'Réévaluer', text: 'Toute PAS < 90 impose une nouvelle mesure et un bilan à la régulation.' },
    ],
    redFlags: [
      'PAS < 90 mmHg',
      'Baisse de 30 % chez un hypertendu connu',
      'Asymétrie tensionnelle nette entre les deux bras',
      'PA élevée avec signes neurologiques, thoraciques ou grossesse',
    ],
    transmit: ['PAS / PAD', 'Bras utilisé', 'Position', 'Heure', 'Traitement antihypertenseur connu', 'Évolution'],
    related: ['fc', 'trc', 'choc', 'avc'],
    source: 'Références techniques nationales PSE — bilan de la fonction circulatoire.',
  },

  {
    id: 'temp',
    cat: 'constantes',
    title: 'Température',
    abbr: 'T°',
    icon: 'thermometer',
    severity: 'standard',
    desc: 'Température corporelle, méthode de mesure et contexte thermique.',
    tags: ['fièvre', 'hypothermie', 'hyperthermie', 'frissons', 'coup de chaleur'],
    summary:
      'La température est une donnée de contexte autant que de valeur : un même 38,5 °C n’a pas le même sens chez un nourrisson de 2 mois, un adulte grippé ou un travailleur en plein soleil.',
    blocks: [
      {
        title: 'Méthodes et équivalences',
        level: 'info',
        items: [
          'Tympanique : rapide, fiable si le conduit est dégagé ; fausse en cas de cérumen.',
          'Frontale sans contact : pratique en tri, sensible au vent et à la sueur.',
          'Axillaire : sous-estime d’environ 0,5 °C.',
          'Toujours transmettre la méthode employée avec la valeur.',
        ],
      },
      {
        title: 'Hypothermie',
        level: 'danger',
        items: [
          'Légère 32–35 °C : frissons, confusion.',
          'Modérée 28–32 °C : disparition des frissons, rigidité, bradycardie.',
          'Sévère < 28 °C : coma, risque de fibrillation.',
          'Mobiliser avec douceur : un cœur hypothermique est très irritable.',
        ],
      },
      {
        title: 'Hyperthermie sévère',
        level: 'danger',
        text:
          'Température ≥ 40 °C associée à des troubles neurologiques (confusion, convulsion, coma), le plus souvent avec peau chaude et sèche. Il s’agit d’une urgence vitale : refroidissement immédiat, déshabillage, aspersion, ventilation, bilan à la régulation.',
      },
      {
        title: 'Fièvre à ne pas banaliser',
        level: 'warn',
        items: [
          'Nourrisson de moins de 3 mois : toute fièvre est une urgence médicale.',
          'Fièvre + purpura ne s’effaçant pas à la pression : urgence absolue.',
          'Fièvre + raideur de nuque + photophobie.',
          'Fièvre chez une personne immunodéprimée ou revenant de voyage.',
        ],
      },
    ],
    steps: [
      { title: 'Mesurer', text: 'Méthode adaptée à l’âge et au contexte ; noter laquelle.' },
      { title: 'Contextualiser', text: 'Température ambiante, exposition, effort, vêtements, traitement antipyrétique déjà pris.' },
      { title: 'Chercher les signes associés', text: 'Purpura, raideur de nuque, troubles de conscience, sueurs ou peau sèche.' },
      { title: 'Agir', text: 'Réchauffer et isoler, ou refroidir activement, selon le sens de l’anomalie.' },
    ],
    redFlags: [
      'T° < 35 °C',
      'T° ≥ 40 °C avec troubles neurologiques',
      'Fièvre avant 3 mois',
      'Fièvre avec purpura',
      'Peau chaude et sèche en ambiance chaude',
    ],
    transmit: ['Valeur', 'Méthode de mesure', 'Heure', 'Température ambiante', 'Antipyrétique déjà administré'],
    related: ['brulure', 'hypothermie', 'coup-chaleur', 'pedia-fievre'],
    source: 'Références techniques nationales PSE — atteintes liées à la température.',
  },

  {
    id: 'gly',
    cat: 'constantes',
    title: 'Glycémie capillaire',
    abbr: 'Gly',
    icon: 'glucose',
    severity: 'standard',
    desc: 'Taux de glucose sanguin mesuré au bout du doigt.',
    tags: ['diabète', 'hypoglycémie', 'hyperglycémie', 'sucre', 'insuline', 'resucrage', 'mmol'],
    summary:
      'Le cerveau ne stocke pas de glucose : il en consomme en continu. Une hypoglycémie produit en quelques minutes sueurs, tremblements, confusion, agressivité, convulsions puis coma. C’est une des rares urgences totalement réversible sur place.',
    blocks: [
      {
        title: 'Règle absolue',
        level: 'danger',
        text:
          'Tout trouble de conscience, toute convulsion, tout comportement inhabituel impose une glycémie capillaire. Une hypoglycémie non recherchée est une hypoglycémie non traitée, et les séquelles neurologiques sont définitives.',
      },
      {
        title: 'Unités',
        level: 'info',
        items: [
          '1 g/L = 5,5 mmol/L environ.',
          'Toujours transmettre l’unité : « 0,45 » et « 4,5 » ne veulent pas dire la même chose.',
          'Préciser l’heure et le dernier repas.',
        ],
      },
      {
        title: 'Signes d’hypoglycémie',
        level: 'warn',
        items: [
          'Sueurs froides, pâleur, tremblements, faim brutale.',
          'Confusion, agressivité, propos incohérents — souvent pris à tort pour une ivresse.',
          'Troubles visuels, céphalée, malaise.',
          'Convulsion puis coma si elle se prolonge.',
        ],
      },
      {
        title: 'Signes d’hyperglycémie',
        level: 'warn',
        items: [
          'Soif intense, urines abondantes, amaigrissement rapide.',
          'Haleine à odeur de pomme reinette (acétone).',
          'Respiration ample et profonde (Kussmaul), douleurs abdominales, vomissements.',
          'Installation progressive sur plusieurs heures ou jours, contrairement à l’hypoglycémie.',
        ],
      },
      {
        title: 'Technique de mesure',
        level: 'info',
        items: [
          'Mains lavées et séchées : un doigt sucré fausse la valeur vers le haut.',
          'Piquer la face latérale de la pulpe, pas le centre.',
          'Écarter la première goutte, utiliser la seconde.',
          'Ne pas presser fortement le doigt : cela dilue l’échantillon.',
        ],
      },
    ],
    steps: [
      { title: 'Mesurer', text: 'Devant tout trouble de conscience ou de comportement, sans attendre.' },
      { title: 'Interpréter', text: 'Confronter au contexte : diabétique connu, traitement, dernier repas, effort, alcool.' },
      { title: 'Resucrer si conscient', text: 'Sucre rapide par voie orale uniquement si la victime est consciente et capable de déglutir.' },
      { title: 'Ne jamais faire boire', text: 'Chez une victime inconsciente ou somnolente : risque d’inhalation. Bilan médical urgent.' },
      { title: 'Recontrôler', text: '15 minutes après le resucrage, puis transmettre les deux valeurs.' },
    ],
    redFlags: [
      'Glycémie < 0,60 g/L',
      'Trouble de conscience avec glycémie basse',
      'Hyperglycémie avec respiration ample et odeur d’acétone',
      'Diabétique de type 1 qui vomit',
    ],
    transmit: ['Valeur et unité', 'Heure', 'Diabète connu et type', 'Traitement (insuline, comprimés)', 'Dernier repas', 'Valeur après resucrage'],
    related: ['malaise', 'inconscience', 'epilepsie', 'glasgow'],
    source: 'Références techniques nationales PSE et code de la santé publique R.6311-18 (recueil de la glycémie).',
  },

  {
    id: 'glasgow',
    cat: 'constantes',
    title: 'Score de Glasgow',
    abbr: 'GCS',
    icon: 'brain',
    severity: 'standard',
    desc: 'Évaluation standardisée de la conscience : ouverture des yeux, réponse verbale, réponse motrice.',
    tags: ['conscience', 'coma', 'GCS', 'neurologique', 'Y V M', 'score'],
    summary:
      'Le Glasgow décrit trois réponses indépendantes. Le total seul est ambigu : un GCS 8 en 1+2+5 et un GCS 8 en 4+1+3 ne décrivent pas la même victime. Transmettre toujours le détail Y / V / M.',
    blocks: [
      {
        title: 'Ouverture des yeux (Y) — sur 4',
        level: 'info',
        items: [
          '4 — spontanée',
          '3 — à la demande verbale',
          '2 — à la douleur',
          '1 — aucune',
        ],
      },
      {
        title: 'Réponse verbale (V) — sur 5',
        level: 'info',
        items: [
          '5 — orientée, cohérente',
          '4 — confuse',
          '3 — mots inappropriés',
          '2 — sons incompréhensibles',
          '1 — aucune',
        ],
      },
      {
        title: 'Réponse motrice (M) — sur 6',
        level: 'info',
        items: [
          '6 — obéit aux ordres',
          '5 — orientée à la douleur',
          '4 — retrait à la douleur',
          '3 — flexion anormale (décortication)',
          '2 — extension anormale (décérébration)',
          '1 — aucune',
        ],
      },
      {
        title: 'Seuils et conséquences',
        level: 'danger',
        items: [
          'GCS ≤ 8 : coma, voies aériennes menacées. Position latérale de sécurité, oxygène, renfort médical.',
          'GCS 9–13 : conscience altérée, surveillance rapprochée.',
          'Une baisse de 2 points ou plus est un critère d’aggravation à transmettre immédiatement.',
        ],
      },
      {
        title: 'Limites du score',
        level: 'warn',
        items: [
          'Non interprétable chez une victime sédatée, intubée ou aphasique.',
          'Faussé par l’alcool, les toxiques, une barrière de langue, une surdité.',
          'Chez l’enfant, la réponse verbale se cote selon le langage attendu à son âge.',
        ],
      },
    ],
    steps: [
      { title: 'Observer', text: 'Les yeux sont-ils ouverts spontanément ? Noter Y avant de parler.' },
      { title: 'Parler', text: 'Question simple et ouverte : nom, lieu, date. Coter V.' },
      { title: 'Demander un geste', text: '« Serrez ma main », « tirez la langue ». Si obéissance : M = 6.' },
      { title: 'Stimuler si besoin', text: 'Stimulation douloureuse standardisée seulement si aucune réponse ; observer le type de réponse motrice.' },
      { title: 'Refaire', text: 'Réévaluer toutes les 5 minutes si le score est altéré, et noter la tendance.' },
    ],
    redFlags: [
      'GCS ≤ 8',
      'Baisse de 2 points ou plus',
      'Réponse motrice en flexion ou extension anormale',
      'Anisocorie associée',
      'Vomissements répétés après traumatisme crânien',
    ],
    transmit: ['Détail Y / V / M', 'Total', 'Heure', 'Évolution depuis le premier bilan', 'Pupilles', 'Glycémie'],
    related: ['pupilles', 'inconscience', 'trauma-cranien', 'gly', 'rass'],
    source: 'Références techniques nationales PSE — bilan de la fonction neurologique.',
  },

  {
    id: 'trc',
    cat: 'constantes',
    title: 'Temps de recoloration cutanée',
    abbr: 'TRC',
    icon: 'hand',
    severity: 'standard',
    desc: 'Temps de retour de la coloration après compression, reflet de la perfusion périphérique.',
    tags: ['perfusion', 'choc', 'marbrures', 'recoloration', 'microcirculation'],
    summary:
      'Le TRC explore la microcirculation. Quand l’organisme manque de volume ou de débit, il ferme les vaisseaux périphériques pour protéger le cerveau et le cœur : la peau se refroidit, se marbre, et la recoloration s’allonge. C’est un signe PRÉCOCE, souvent antérieur à la chute de tension.',
    blocks: [
      {
        title: 'Technique',
        level: 'info',
        items: [
          'Comprimer la pulpe de l’ongle ou le sternum pendant 5 secondes.',
          'Relâcher et compter le temps de retour de la couleur.',
          'Chez le nourrisson : sternum ou front.',
        ],
      },
      {
        title: 'Conditions à respecter',
        level: 'warn',
        items: [
          'Le froid ambiant allonge le TRC chez un sujet sain : mesurer sur une zone centrale en cas de doute.',
          'Vernis à ongles, ongles artificiels ou mains très abîmées rendent la mesure ininterprétable.',
          'Une seule mesure vaut peu : c’est l’évolution qui est informative.',
        ],
      },
      {
        title: 'À associer systématiquement',
        level: 'info',
        text: 'Marbrures (genoux d’abord), température des extrémités, coloration des conjonctives, pouls, PA, conscience et diurèse rapportée.',
      },
    ],
    steps: [
      { title: 'Comprimer', text: 'Pulpe de l’ongle, 5 secondes, pression ferme.' },
      { title: 'Compter', text: 'Temps de recoloration en secondes.' },
      { title: 'Recontrôler', text: 'Sur une zone centrale si la valeur est limite ou l’ambiance froide.' },
      { title: 'Croiser', text: 'Marbrures, extrémités, FC, PA, conscience : c’est l’ensemble qui fait le choc.' },
    ],
    redFlags: [
      'TRC > 3 secondes',
      'Marbrures étendues au-delà des genoux',
      'Extrémités froides avec tachycardie',
      'TRC qui s’allonge d’un bilan à l’autre',
    ],
    transmit: ['Valeur en secondes', 'Site de mesure', 'Température ambiante', 'Marbrures', 'Évolution'],
    related: ['choc', 'hemorragie', 'fc', 'pa'],
    source: 'Références techniques nationales PSE — bilan de la fonction circulatoire.',
  },

  {
    id: 'pupilles',
    cat: 'constantes',
    title: 'Examen des pupilles',
    abbr: 'Pupilles',
    icon: 'eye',
    severity: 'standard',
    desc: 'Taille, symétrie et réactivité pupillaires à la lumière.',
    tags: ['mydriase', 'myosis', 'anisocorie', 'réactivité', 'neurologique', 'opioïdes'],
    summary:
      'Trois questions, toujours dans cet ordre : sont-elles de taille normale, sont-elles égales entre elles, réagissent-elles à la lumière ? Une asymétrie brutale après un traumatisme crânien est une urgence neurochirurgicale.',
    blocks: [
      {
        title: 'Vocabulaire',
        level: 'info',
        items: [
          'Myosis : pupille rétrécie.',
          'Mydriase : pupille dilatée.',
          'Anisocorie : pupilles de taille inégale.',
          'Aréactive : ne se resserre pas à la lumière.',
        ],
      },
      {
        title: 'Myosis serré bilatéral',
        level: 'danger',
        text:
          'Associé à une bradypnée et à des troubles de conscience, il oriente fortement vers une intoxication aux opioïdes. C’est une des rares causes de coma dont l’antidote agit en quelques minutes : le signaler sans délai à la régulation.',
      },
      {
        title: 'Mydriase',
        level: 'warn',
        items: [
          'Bilatérale réactive : stress, douleur, certains toxiques et stimulants.',
          'Bilatérale aréactive : souffrance cérébrale profonde, hypoxie sévère, arrêt cardiaque.',
          'Unilatérale aréactive après traumatisme crânien : engagement cérébral, urgence absolue.',
        ],
      },
      {
        title: 'Pièges',
        level: 'warn',
        items: [
          'Prothèse oculaire, chirurgie de la cataracte, collyre récent : anisocorie sans valeur pathologique.',
          'Anisocorie physiologique discrète : présente chez environ une personne sur cinq.',
          'Toujours demander à l’entourage si l’anomalie est habituelle.',
        ],
      },
    ],
    steps: [
      { title: 'Se placer dans la pénombre', text: 'Ou faire de l’ombre avec la main.' },
      { title: 'Observer au repos', text: 'Taille et symétrie avant toute stimulation lumineuse.' },
      { title: 'Éclairer', text: 'Lampe de côté vers le centre, œil par œil ; noter la vitesse de constriction.' },
      { title: 'Comparer', text: 'Droite / gauche, et à l’état antérieur rapporté par l’entourage.' },
    ],
    redFlags: [
      'Anisocorie d’apparition récente',
      'Mydriase bilatérale aréactive',
      'Myosis serré avec bradypnée',
      'Anomalie pupillaire après traumatisme crânien',
    ],
    transmit: ['Taille', 'Symétrie', 'Réactivité', 'Côté anormal', 'Contexte traumatique ou toxique', 'Évolution'],
    related: ['glasgow', 'trauma-cranien', 'opioides', 'avc'],
    source: 'Références techniques nationales PSE — bilan de la fonction neurologique.',
  },

  {
    id: 'douleur',
    cat: 'constantes',
    title: 'Évaluation de la douleur',
    abbr: 'EN / EVA',
    icon: 'smile',
    severity: 'standard',
    desc: 'Mesure de l’intensité douloureuse et de son évolution.',
    tags: ['EVA', 'EN', 'OPQRST', 'antalgie', 'FPS-R', 'EVENDOL'],
    summary:
      'La douleur se mesure pour suivre son évolution et évaluer l’efficacité des gestes, pas pour juger la gravité de sa cause. Un infarctus peut être coté 3/10, une colique néphrétique 10/10.',
    blocks: [
      {
        title: 'Choisir l’échelle',
        level: 'info',
        items: [
          'Adulte et enfant > 6 ans : échelle numérique 0 à 10, auto-évaluée.',
          'Enfant 4–6 ans : échelle des visages FPS-R, cotée 0-2-4-6-8-10.',
          'Enfant < 4 ans et nourrisson : hétéro-évaluation (EVENDOL, FLACC).',
          'Personne non communicante ou démente : hétéro-évaluation comportementale (Algoplus, ECPA).',
        ],
      },
      {
        title: 'Caractériser — méthode OPQRST',
        level: 'info',
        items: [
          'O — Origine : que faisait la victime au moment du début ?',
          'P — Provocation / soulagement : qu’est-ce qui l’aggrave, qu’est-ce qui la calme ?',
          'Q — Qualité : serrement, brûlure, décharge, crampe, pesanteur ?',
          'R — iRradiation : vers où la douleur part-elle ?',
          'S — Sévérité : cotation chiffrée.',
          'T — Temps : début, durée, évolution, épisodes antérieurs.',
        ],
      },
      {
        title: 'Signes de douleur non exprimée',
        level: 'warn',
        items: [
          'Position antalgique spontanée, refus de bouger.',
          'Crispation du visage, sueurs, pâleur, tachycardie.',
          'Enfant qui ne joue plus, reste silencieux et immobile : atonie psychomotrice, signe de douleur intense.',
          'Personne âgée : agitation, repli, refus de soin, confusion d’apparition récente.',
        ],
      },
      {
        title: 'Règle de posture',
        level: 'danger',
        text:
          'Ne jamais contester le chiffre annoncé, ne jamais le corriger à la baisse « parce que ça ne paraît pas si grave ». La douleur est ce que la victime dit qu’elle est.',
      },
    ],
    steps: [
      { title: 'Choisir l’échelle', text: 'Adaptée à l’âge et à la capacité de communication.' },
      { title: 'Coter avant', text: 'Noter la valeur initiale et l’heure.' },
      { title: 'Caractériser', text: 'OPQRST complet.' },
      { title: 'Agir', text: 'Installation confortable, immobilisation, froid si indiqué, rassurer.' },
      { title: 'Coter après', text: 'Réévaluer après les gestes et transmettre les deux valeurs.' },
    ],
    redFlags: [
      'Douleur thoracique, quelle que soit son intensité',
      'Douleur abdominale brutale « en coup de poignard »',
      'Céphalée en coup de tonnerre',
      'Douleur d’un membre avec froideur et absence de pouls',
      'Douleur disproportionnée par rapport à la lésion visible',
    ],
    transmit: ['Échelle utilisée', 'Valeur initiale', 'Valeur après gestes', 'OPQRST', 'Antalgique déjà pris et heure'],
    related: ['trauma', 'malaise', 'geriatrie'],
    source: 'Références techniques nationales PSE et recommandations HAS sur l’évaluation de la douleur.',
  },

  {
    id: 'rass',
    cat: 'constantes',
    title: 'Échelle RASS',
    abbr: 'RASS',
    icon: 'moon',
    severity: 'standard',
    desc: 'Richmond Agitation-Sedation Scale : niveau d’agitation ou de sédation, de −5 à +4.',
    tags: ['agitation', 'sédation', 'Richmond', 'vigilance', 'confusion'],
    summary:
      'Le RASS décrit objectivement ce que « agité » ou « somnolent » veut dire. Il complète le Glasgow sur le versant comportemental, il ne le remplace pas. Validé chez l’adulte uniquement.',
    blocks: [
      {
        title: 'Versant agitation',
        level: 'warn',
        items: [
          '+4 — combatif, violent, danger immédiat pour l’équipe',
          '+3 — très agité, arrache le matériel, agressif',
          '+2 — agité, mouvements fréquents non intentionnels',
          '+1 — anxieux, inquiet, mouvements non agressifs',
        ],
      },
      {
        title: 'État de référence',
        level: 'ok',
        text: '0 — éveillé, calme, coopérant.',
      },
      {
        title: 'Versant sédation',
        level: 'info',
        items: [
          '−1 — somnolent, éveil > 10 s au contact verbal',
          '−2 — sédation légère, éveil < 10 s',
          '−3 — sédation modérée, mouvement sans contact visuel',
          '−4 — sédation profonde, réponse à la stimulation physique uniquement',
          '−5 — non réveillable',
        ],
      },
      {
        title: 'Précision de vocabulaire',
        level: 'info',
        text: 'RASS = Richmond Agitation-Sedation Scale, du nom de l’université de Richmond en Virginie. Ce n’est pas une échelle « Reynolds » : l’erreur est fréquente et brouille la transmission.',
      },
      {
        title: 'Devant une agitation',
        level: 'danger',
        text:
          'Une agitation n’est pas un trait de caractère : chercher d’abord une cause organique — hypoglycémie, hypoxie, douleur, globe vésical, traumatisme crânien, sevrage, intoxication. Assurer la sécurité de l’équipe avant tout examen.',
      },
    ],
    steps: [
      { title: 'Observer', text: 'Comportement spontané sans intervenir : cote +1 à +4 si agitation.' },
      { title: 'Appeler', text: 'Nom de la victime, voix forte. Mesurer la durée du contact visuel.' },
      { title: 'Stimuler', text: 'Contact physique léger seulement si aucune réponse verbale.' },
      { title: 'Chercher la cause', text: 'Glycémie, SpO₂, douleur, toxiques, traumatisme.' },
    ],
    redFlags: [
      'RASS +3 ou +4 : sécurité de l’équipe avant tout',
      'RASS −4 ou −5 : voies aériennes menacées',
      'Passage brutal de l’agitation à la somnolence',
    ],
    transmit: ['Valeur RASS', 'Heure', 'Évolution', 'Glasgow associé', 'Cause organique recherchée'],
    related: ['glasgow', 'inconscience', 'gly'],
    source: 'Échelle RASS (Sessler et al.), utilisée en complément du Glasgow.',
  },
];
