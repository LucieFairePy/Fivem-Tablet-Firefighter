export const PUBLICS_CARDS = [

  {
    id: 'abcde',
    cat: 'bilan',
    title: 'Démarche ABCDE',
    abbr: 'ABCDE',
    icon: 'flow',
    severity: 'standard',
    desc: 'Ordre d’examen qui garantit qu’aucune détresse vitale n’est manquée.',
    tags: ['ABCDE', 'bilan', 'méthode', 'airway', 'breathing', 'circulation'],
    summary:
      'L’intérêt de l’ABCDE n’est pas la liste, c’est l’ORDRE et la règle du « traiter avant d’avancer ». On ne passe jamais à la lettre suivante tant que la précédente n’est pas stabilisée : une hémorragie non contrôlée rend inutile un examen neurologique parfait.',
    blocks: [
      {
        title: 'A — Airway : voies aériennes',
        level: 'danger',
        items: [
          'La victime parle-t-elle normalement ? Si oui, A est libre.',
          'Chercher : corps étranger, vomissements, sang, œdème, bruits anormaux (stridor, ronflement).',
          'Agir : libération des voies aériennes, aspiration, position adaptée.',
          'Suspicion de lésion du rachis : maintien de l’axe pendant toute la manœuvre.',
        ],
      },
      {
        title: 'B — Breathing : ventilation',
        level: 'danger',
        items: [
          'Regarder, écouter, sentir. Fréquence, amplitude, symétrie, bruits, signes de lutte.',
          'Mesurer : FR et SpO₂.',
          'Agir : position assise, oxygène, ventilation assistée si besoin.',
        ],
      },
      {
        title: 'C — Circulation',
        level: 'danger',
        items: [
          'Chercher et arrêter toute hémorragie visible.',
          'Pouls : fréquence, régularité, amplitude. TRC, coloration, marbrures, température des extrémités.',
          'Mesurer : FC, PA.',
          'Agir : compression, position adaptée, protection thermique.',
        ],
      },
      {
        title: 'D — Disability : neurologique',
        level: 'warn',
        items: [
          'Glasgow détaillé, pupilles, motricité et sensibilité des quatre membres.',
          'Glycémie capillaire systématique.',
          'Agir : PLS si inconscience avec respiration, immobilisation si déficit.',
        ],
      },
      {
        title: 'E — Exposure : examen complet',
        level: 'info',
        items: [
          'Déshabiller pour examiner, en préservant la pudeur et en luttant contre le refroidissement.',
          'Examiner le dos, les plis, le cuir chevelu : les lésions s’y cachent.',
          'Prendre la température.',
          'Recouvrir dès l’examen terminé.',
        ],
      },
      {
        title: 'Puis : réévaluer',
        level: 'info',
        text:
          'L’ABCDE n’est pas une checklist faite une fois. Toute aggravation impose de reprendre à A. Après chaque geste significatif, on reprend à A.',
      },
    ],
    steps: [
      { title: 'A — Libérer', text: 'Voies aériennes libres et maintenues libres.' },
      { title: 'B — Oxygéner', text: 'FR, SpO₂, signes de lutte. Traiter avant de passer à C.' },
      { title: 'C — Perfuser', text: 'Hémorragie arrêtée, FC, PA, TRC. Traiter avant de passer à D.' },
      { title: 'D — Évaluer', text: 'Glasgow, pupilles, glycémie, déficit.' },
      { title: 'E — Examiner', text: 'Déshabiller, examen complet dos compris, température, puis recouvrir.' },
      { title: 'Recommencer', text: 'Réévaluation complète à intervalle régulier et après chaque geste.' },
    ],
    redFlags: ['Voies aériennes non sécurisées', 'Toute détresse identifiée non traitée avant de poursuivre', 'Absence de réévaluation'],
    transmit: ['Chaque lettre, avec les valeurs mesurées', 'Gestes réalisés à chaque étape', 'Évolution entre deux bilans'],
    related: ['bilan', 'transmission', 'detresse-resp', 'choc', 'glasgow'],
    source: 'Références techniques nationales PSE — bilan et surveillance.',
  },

  {
    id: 'bilan',
    cat: 'bilan',
    title: 'Les trois temps du bilan',
    abbr: 'Bilan',
    icon: 'clipboard',
    severity: 'standard',
    desc: 'Bilan circonstanciel, bilan d’urgence vitale, bilan complémentaire.',
    tags: ['bilan', 'circonstanciel', 'urgence vitale', 'complémentaire', 'surveillance'],
    summary:
      'Trois temps successifs, du général au particulier. Le bilan circonstanciel protège l’équipe, le bilan d’urgence vitale sauve la victime, le bilan complémentaire oriente la prise en charge. Aucun ne remplace les autres.',
    blocks: [
      {
        title: '1 — Bilan circonstanciel',
        level: 'info',
        items: [
          'Que s’est-il passé ? Depuis quand ?',
          'Existe-t-il un danger persistant pour l’équipe, la victime ou les tiers ?',
          'Combien de victimes ? Faut-il des moyens supplémentaires ?',
          'Ce temps se fait AVANT de toucher la victime.',
        ],
      },
      {
        title: '2 — Bilan d’urgence vitale',
        level: 'danger',
        items: [
          'Conscience, respiration, hémorragie : les trois questions qui décident de tout.',
          'Application de l’ABCDE.',
          'Tout geste de sauvegarde s’effectue à ce moment, avant de poursuivre.',
          'Il aboutit à une décision : urgence vitale ou non.',
        ],
      },
      {
        title: '3 — Bilan complémentaire',
        level: 'info',
        items: [
          'Interrogatoire : SAMPLE et OPQRST.',
          'Examen de la tête aux pieds.',
          'Mesure de toutes les constantes.',
          'Recueil administratif : identité, âge, médecin traitant, personne à prévenir.',
        ],
      },
      {
        title: 'Puis : la surveillance',
        level: 'warn',
        text:
          'Le bilan n’est pas un instantané mais une tendance. Renouveler les constantes à intervalle adapté à la gravité — toutes les 5 minutes en cas d’instabilité — et noter chaque série avec son heure. C’est l’évolution qui informe la régulation.',
      },
      {
        title: 'SAMPLE',
        level: 'info',
        items: [
          'S — Signes et symptômes',
          'A — Allergies',
          'M — Médicaments et traitements en cours',
          'P — Passé médical et chirurgical',
          'L — Last meal, dernier repas et dernière boisson',
          'E — Événements ayant conduit à l’appel',
        ],
      },
    ],
    steps: [
      { title: 'Circonstanciel', text: 'Sécurité, nature de l’intervention, nombre de victimes, moyens.' },
      { title: 'Urgence vitale', text: 'Conscience, respiration, hémorragie. Gestes de sauvegarde immédiats.' },
      { title: 'Complémentaire', text: 'SAMPLE, OPQRST, examen complet, constantes.' },
      { title: 'Transmettre', text: 'Bilan structuré à la régulation.' },
      { title: 'Surveiller', text: 'Constantes répétées et horodatées jusqu’au relais.' },
      { title: 'Transmettre le relais', text: 'Synthèse à l’équipe qui prend la suite, avec l’évolution.' },
    ],
    redFlags: ['Bilan d’urgence vitale non refait après aggravation', 'Constantes prises une seule fois', 'Absence d’horodatage'],
    transmit: ['Les trois temps, dans l’ordre', 'Constantes horodatées', 'Gestes et heures', 'Évolution'],
    related: ['abcde', 'transmission', 'sample'],
    source: 'Références techniques nationales PSE — bilan et surveillance.',
  },

  {
    id: 'pedia-eval',
    cat: 'pedia',
    title: 'Évaluer un enfant',
    abbr: 'Éval. péd.',
    icon: 'child',
    severity: 'urgent',
    desc: 'Triangle d’évaluation pédiatrique et particularités de l’enfant en détresse.',
    tags: ['pédiatrie', 'triangle', 'TEP', 'enfant', 'évaluation', 'nourrisson'],
    summary:
      'Un enfant compense longtemps puis s’effondre brutalement. Les constantes restent normales jusqu’au dernier moment : ce qu’il faut regarder, c’est son aspect général, son travail respiratoire et sa coloration — le triangle d’évaluation pédiatrique, qui se juge depuis la porte, avant de toucher.',
    blocks: [
      {
        title: 'Triangle d’évaluation pédiatrique',
        level: 'danger',
        items: [
          'APPARENCE : tonus, interaction, regard, consolabilité, cri. Un enfant qui ne s’intéresse à rien est grave.',
          'TRAVAIL RESPIRATOIRE : bruits, position, tirage, battement des ailes du nez, geignement.',
          'CIRCULATION CUTANÉE : pâleur, marbrures, cyanose.',
          'Une seule branche anormale suffit à classer l’enfant comme instable.',
        ],
      },
      {
        title: 'Signes de gravité',
        level: 'danger',
        items: [
          'Hypotonie, enfant « poupée de chiffon ».',
          'Geignement expiratoire : équivalent pédiatrique d’un signe de détresse majeure.',
          'Refus alimentaire total chez le nourrisson.',
          'Absence de réaction à la présence des parents.',
          'Teint gris, marbrures étendues.',
          'Somnolence inhabituelle ou au contraire agitation inconsolable.',
        ],
      },
      {
        title: 'Ce qui trompe',
        level: 'warn',
        items: [
          'L’hypotension est un signe TARDIF : quand elle apparaît, l’enfant est déjà en décompensation.',
          'La fréquence respiratoire qui ralentit signe l’épuisement.',
          'Un enfant qui a beaucoup pleuré puis s’apaise brutalement peut être en train de s’épuiser.',
          'Écouter les parents : « il n’est pas comme d’habitude » est un signe clinique à part entière.',
        ],
      },
      {
        title: 'Estimation du poids',
        level: 'info',
        items: [
          'Formule usuelle de 1 à 10 ans : poids (kg) ≈ (âge en années + 4) × 2.',
          'Nourrisson de moins de 1 an : poids (kg) ≈ (âge en mois / 2) + 4.',
          'Demander toujours le poids réel aux parents, ou le carnet de santé, qui priment sur toute formule.',
        ],
      },
      {
        title: 'Approche relationnelle',
        level: 'info',
        items: [
          'Se mettre à sa hauteur, parler doucement, expliquer chaque geste.',
          'Laisser l’enfant dans les bras d’un parent chaque fois que c’est possible : cela améliore aussi l’examen.',
          'Examiner du moins invasif au plus invasif ; garder la gorge et les oreilles pour la fin.',
          'Ne jamais promettre que « ça ne fera pas mal » si c’est faux.',
        ],
      },
    ],
    steps: [
      { title: 'Observer de loin', text: 'Triangle d’évaluation pédiatrique, avant tout contact.' },
      { title: 'Interroger les parents', text: 'Comportement habituel, évolution, alimentation, couches mouillées, fièvre.' },
      { title: 'Examiner', text: 'Du moins invasif au plus invasif, enfant rassuré, si possible dans les bras.' },
      { title: 'Mesurer', text: 'Constantes adaptées à l’âge, matériel de taille adaptée.' },
      { title: 'Estimer le poids', text: 'Par la formule, ou mieux, demander le poids réel.' },
      { title: 'Réévaluer souvent', text: 'La dégradation peut être très rapide.' },
    ],
    redFlags: [
      'Hypotonie',
      'Geignement',
      'Refus alimentaire complet',
      'Marbrures ou teint gris',
      'Absence d’interaction',
      'Parents très inquiets',
    ],
    transmit: ['Âge exact et poids', 'Triangle d’évaluation', 'Constantes adaptées à l’âge', 'Alimentation et couches', 'Carnet de santé et vaccinations', 'Avis des parents sur l’écart au comportement habituel'],
    related: ['pedia-fievre', 'pedia-convulsion', 'rcp-pedia', 'fr', 'trc'],
    source: 'Références techniques nationales PSE — particularités de l’enfant et du nourrisson.',
  },

  {
    id: 'pedia-fievre',
    cat: 'pedia',
    title: 'Fièvre de l’enfant',
    abbr: 'Fièvre péd.',
    icon: 'thermometer',
    severity: 'urgent',
    desc: 'Ce qui compte n’est pas le chiffre mais la tolérance et l’âge.',
    tags: ['fièvre', 'enfant', 'nourrisson', 'purpura', 'méningite', 'déshydratation'],
    summary:
      'Un enfant à 40 °C qui joue est moins inquiétant qu’un enfant à 38,5 °C prostré et gris. Deux situations imposent cependant une urgence indépendamment de la tolérance : l’âge de moins de 3 mois, et la présence d’un purpura.',
    blocks: [
      {
        title: 'Urgences absolues',
        level: 'danger',
        items: [
          'Nourrisson de moins de 3 mois : toute fièvre, même bien tolérée.',
          'PURPURA : taches rouges ou violacées qui ne s’effacent pas à la pression du doigt ou d’un verre. Suspicion de purpura fulminans, urgence vitale absolue.',
          'Raideur de nuque, bombement de la fontanelle, photophobie.',
          'Troubles de conscience, hypotonie, geignement.',
          'Marbrures, extrémités froides, TRC > 3 s.',
        ],
      },
      {
        title: 'Le test du verre',
        level: 'danger',
        text:
          'Appuyer un verre transparent sur les taches. Si elles restent visibles à travers le verre, il s’agit d’un purpura. Alerter immédiatement : le purpura fulminans peut tuer en quelques heures. Examiner tout le corps, y compris sous les couches et derrière les oreilles.',
      },
      {
        title: 'Signes de déshydratation',
        level: 'warn',
        items: [
          'Couches sèches depuis plusieurs heures, moins de larmes.',
          'Bouche et lèvres sèches, yeux cernés ou creux.',
          'Pli cutané persistant.',
          'Fontanelle déprimée chez le nourrisson.',
          'Somnolence, refus de boire.',
        ],
      },
      {
        title: 'Mesures de terrain',
        level: 'info',
        items: [
          'Découvrir l’enfant, pièce tempérée et aérée.',
          'Proposer à boire fréquemment, par petites quantités.',
          'Jamais de bain froid, jamais de friction à l’alcool : risque de frissons, de vasoconstriction et d’intoxication.',
          'Noter l’antipyrétique déjà donné, la dose et l’heure — le risque de surdosage par cumul est réel.',
        ],
      },
    ],
    steps: [
      { title: 'Mesurer', text: 'Température avec une méthode adaptée à l’âge.' },
      { title: 'Évaluer la tolérance', text: 'Triangle d’évaluation pédiatrique : apparence, respiration, circulation.' },
      { title: 'Déshabiller et examiner', text: 'Tout le corps, à la recherche d’un purpura. Ne pas oublier le siège et le cuir chevelu.' },
      { title: 'Chercher la déshydratation', text: 'Couches, larmes, muqueuses, pli cutané, fontanelle.' },
      { title: 'Rafraîchir', text: 'Découvrir, hydrater, pièce tempérée.' },
      { title: 'Transmettre', text: 'Âge, température, tolérance, purpura, antipyrétiques déjà administrés.' },
    ],
    redFlags: [
      'Âge < 3 mois',
      'Purpura',
      'Raideur de nuque ou fontanelle bombée',
      'Hypotonie ou geignement',
      'Marbrures',
      'Convulsion associée',
      'Déshydratation',
    ],
    transmit: ['Âge exact', 'Température et méthode', 'Durée de la fièvre', 'Purpura présent ou non', 'Antipyrétique, dose et heure', 'Alimentation et couches', 'Vaccinations'],
    related: ['temp', 'pedia-eval', 'pedia-convulsion', 'trc'],
    source: 'Références techniques nationales PSE — particularités de l’enfant.',
  },

  {
    id: 'pedia-convulsion',
    cat: 'pedia',
    title: 'Convulsion fébrile',
    abbr: 'Conv. fébrile',
    icon: 'zap',
    severity: 'urgent',
    desc: 'Crise convulsive sur fièvre chez le jeune enfant : fréquente, impressionnante, souvent bénigne.',
    tags: ['convulsion fébrile', 'enfant', 'fièvre', 'crise', 'épilepsie'],
    summary:
      'La convulsion fébrile simple touche l’enfant de 6 mois à 5 ans, dure moins de 15 minutes, est généralisée et ne récidive pas dans les 24 heures. Elle est très impressionnante pour les parents et ne laisse habituellement pas de séquelle — mais elle impose toujours un bilan médical.',
    blocks: [
      {
        title: 'Convulsion fébrile SIMPLE',
        level: 'ok',
        items: [
          'Âge entre 6 mois et 5 ans.',
          'Crise généralisée, symétrique.',
          'Durée inférieure à 15 minutes.',
          'Pas de récidive dans les 24 heures.',
          'Retour à la normale rapide après la crise.',
        ],
      },
      {
        title: 'Convulsion fébrile COMPLEXE — gravité',
        level: 'danger',
        items: [
          'Âge inférieur à 6 mois ou supérieur à 5 ans.',
          'Durée supérieure à 15 minutes.',
          'Crise localisée à un côté du corps.',
          'Récidive dans les 24 heures.',
          'Déficit neurologique persistant après la crise.',
        ],
      },
      {
        title: 'Éliminer une méningite',
        level: 'danger',
        text:
          'Une convulsion fébrile ne doit jamais faire oublier la méningite. Rechercher systématiquement : purpura, raideur de nuque, fontanelle bombée, absence de retour à un état normal, et transmettre ces éléments.',
      },
      {
        title: 'Accompagner les parents',
        level: 'info',
        text:
          'Les parents pensent très souvent que leur enfant est en train de mourir. Expliquer calmement ce qui se passe, ce qui va être fait, et pourquoi on emmène l’enfant. Cette explication fait partie du soin.',
      },
    ],
    steps: [
      { title: 'Noter l’heure', text: 'Début et fin de la crise. Chronométrer.' },
      { title: 'Protéger', text: 'Coucher sur le côté, écarter les objets, rien dans la bouche, ne pas contenir.' },
      { title: 'Découvrir', text: 'Déshabiller pour faire baisser la température.' },
      { title: 'Examiner la peau', text: 'Rechercher un purpura sur tout le corps.' },
      { title: 'Glycémie', text: 'Systématique.' },
      { title: 'Transmettre', text: 'Âge, durée, caractère généralisé ou localisé, récidive, température, purpura.' },
    ],
    redFlags: [
      'Durée > 15 minutes',
      'Crise localisée à un côté',
      'Âge < 6 mois ou > 5 ans',
      'Récidive dans la journée',
      'Purpura',
      'Absence de retour à un état normal',
    ],
    transmit: ['Âge', 'Heure de début et durée', 'Type de crise', 'Température', 'Récidive', 'Purpura', 'État de conscience après la crise'],
    related: ['epilepsie', 'pedia-fievre', 'etat-mal', 'gly'],
    source: 'Références techniques nationales PSE — crise convulsive chez l’enfant.',
  },

  {
    id: 'accouchement',
    cat: 'obst',
    title: 'Accouchement inopiné',
    abbr: 'Accouchement',
    icon: 'baby',
    severity: 'critical',
    desc: 'Accompagner un accouchement imminent hors maternité.',
    tags: ['accouchement', 'naissance', 'contractions', 'expulsion', 'délivrance', 'cordon'],
    summary:
      'Un accouchement n’est pas une maladie. Le rôle du secouriste est d’accompagner, de recevoir l’enfant sans le laisser tomber, de le sécher et de le réchauffer — pas de « faire » l’accouchement. Ne jamais chercher à retenir la sortie de l’enfant.',
    blocks: [
      {
        title: 'Signes d’imminence',
        level: 'danger',
        items: [
          'Contractions rapprochées (moins de 2 minutes), longues et intenses.',
          'Envie irrépressible de pousser, comme pour aller à la selle.',
          'Perte des eaux.',
          'Tête visible à la vulve.',
          'Multipare : le travail est souvent beaucoup plus rapide qu’au premier enfant.',
        ],
      },
      {
        title: 'Préparer',
        level: 'info',
        items: [
          'Local chauffé, intimité préservée, aide présente.',
          'Champs propres, gants, matériel d’accouchement, aspiration prête.',
          'Matériel de réanimation du nouveau-né à portée de main.',
          'Deux victimes à partir de l’expulsion : la mère ET l’enfant.',
        ],
      },
      {
        title: 'Pendant l’expulsion',
        level: 'warn',
        items: [
          'Accompagner la sortie de la tête sans tirer ni retenir.',
          'Vérifier que le cordon n’entoure pas le cou ; s’il est lâche, le faire glisser doucement par-dessus la tête.',
          'Après la tête, le corps sort très vite et le nouveau-né est glissant : le recevoir fermement, à deux mains.',
          'Noter l’HEURE exacte de la naissance.',
        ],
      },
      {
        title: 'Immédiatement après',
        level: 'danger',
        items: [
          'Sécher vigoureusement le nouveau-né : le séchage stimule et réchauffe.',
          'Retirer le linge humide, envelopper dans du linge sec et chaud, bonnet si disponible.',
          'Évaluer : respiration, tonus, fréquence cardiaque, coloration.',
          'Poser sur le ventre de la mère, peau contre peau, si l’état le permet.',
          'Ne pas couper le cordon sans matériel adapté ni instruction médicale.',
        ],
      },
      {
        title: 'Délivrance',
        level: 'warn',
        items: [
          'Le placenta sort spontanément dans les 5 à 30 minutes.',
          'Ne JAMAIS tirer sur le cordon.',
          'Conserver le placenta pour l’équipe médicale : son examen vérifie qu’il est complet.',
          'Surveiller l’hémorragie de la délivrance : c’est le risque principal pour la mère.',
        ],
      },
      {
        title: 'Hémorragie du post-partum',
        level: 'danger',
        text:
          'Un saignement abondant après la naissance est la première cause de mortalité maternelle. Surveiller le volume, masser le fond utérin à travers la paroi abdominale selon le protocole, mesurer les constantes et transmettre en urgence.',
      },
    ],
    steps: [
      { title: 'Évaluer l’imminence', text: 'Contractions, envie de pousser, tête visible, parité.' },
      { title: 'Installer', text: 'Local chaud, intimité, champs propres, matériel prêt, aide appelée.' },
      { title: 'Accompagner', text: 'Sans tirer ni retenir. Vérifier le cordon autour du cou.' },
      { title: 'Recevoir', text: 'À deux mains. Noter l’heure de naissance.' },
      { title: 'Sécher et réchauffer', text: 'Séchage vigoureux, linge sec, bonnet, peau contre peau.' },
      { title: 'Surveiller les deux', text: 'Nouveau-né : respiration, tonus, FC. Mère : saignement, constantes.' },
    ],
    redFlags: [
      'Procidence du cordon (cordon visible avant l’enfant)',
      'Présentation autre que la tête',
      'Saignement abondant avant ou après la naissance',
      'Convulsion chez la mère',
      'Liquide amniotique teinté ou méconial',
      'Nouveau-né qui ne respire pas ou reste hypotonique',
    ],
    transmit: ['Terme de la grossesse', 'Nombre d’enfants précédents', 'Heure de perte des eaux et aspect du liquide', 'Heure de naissance', 'État du nouveau-né', 'Délivrance faite ou non', 'Saignement estimé'],
    related: ['nouveau-ne', 'urgences-grossesse', 'hemorragie', 'rcp-pedia'],
    source: 'Références techniques nationales PSE — accouchement inopiné.',
  },

  {
    id: 'nouveau-ne',
    cat: 'obst',
    title: 'Prise en charge du nouveau-né',
    abbr: 'Nouveau-né',
    icon: 'baby',
    severity: 'critical',
    desc: 'Les premières minutes de vie : sécher, réchauffer, évaluer, ventiler si nécessaire.',
    tags: ['nouveau-né', 'Apgar', 'réanimation néonatale', 'séchage', 'hypothermie'],
    summary:
      'Trois gestes règlent la grande majorité des situations : sécher, réchauffer, stimuler. Le nouveau-né qui ne démarre pas a presque toujours un problème respiratoire, et la ventilation est le geste clé — rarement les compressions.',
    blocks: [
      {
        title: 'Les trois premiers gestes',
        level: 'danger',
        items: [
          'SÉCHER vigoureusement, en particulier la tête.',
          'RETIRER le linge humide, remplacer par du linge sec et chaud.',
          'STIMULER par le séchage et des frictions du dos.',
        ],
      },
      {
        title: 'Lutter contre le froid — priorité absolue',
        level: 'danger',
        text:
          'Un nouveau-né mouillé perd sa chaleur extrêmement vite : la tête représente une grande part de sa surface corporelle. L’hypothermie aggrave tout le reste. Local chauffé, linge sec, bonnet, peau contre peau avec la mère si possible.',
      },
      {
        title: 'Évaluation — score d’Apgar',
        level: 'info',
        items: [
          'Coté à 1 minute puis à 5 minutes, sur 5 critères notés 0, 1 ou 2.',
          'Apparence (coloration), Pouls, Grimace (réactivité), Activité (tonus), Respiration.',
          'Score sur 10. Il sert à décrire l’adaptation, pas à décider de réanimer : la réanimation se décide sur la respiration et la fréquence cardiaque, immédiatement.',
        ],
      },
      {
        title: 'Si le nouveau-né ne respire pas',
        level: 'danger',
        items: [
          'Tête en position NEUTRE : toute hyperextension ferme les voies aériennes.',
          '5 insufflations initiales, volumes très faibles, juste de quoi soulever le thorax.',
          'Si FC < 60/min malgré une ventilation efficace : compressions thoraciques, rapport 3 compressions pour 1 insufflation.',
          'Deux pouces encerclant le thorax, environ un tiers du diamètre antéro-postérieur.',
        ],
      },
      {
        title: 'Liquide méconial',
        level: 'warn',
        text:
          'Un liquide amniotique teinté ou verdâtre signale une souffrance fœtale. Le signaler impérativement. Le nouveau-né doit être surveillé de près : risque d’inhalation et de détresse respiratoire.',
      },
    ],
    steps: [
      { title: 'Noter l’heure', text: 'Heure exacte de naissance.' },
      { title: 'Sécher', text: 'Vigoureusement, tête comprise.' },
      { title: 'Réchauffer', text: 'Linge sec, bonnet, peau contre peau, local chaud.' },
      { title: 'Évaluer', text: 'Respiration, tonus, fréquence cardiaque, coloration.' },
      { title: 'Ventiler si besoin', text: 'Tête en position neutre, 5 insufflations de faible volume.' },
      { title: 'Comprimer si FC < 60', text: 'Rapport 3:1, malgré une ventilation efficace.' },
    ],
    redFlags: [
      'Absence de cri et de respiration',
      'Hypotonie complète',
      'FC < 100/min',
      'Cyanose persistante',
      'Liquide méconial',
      'Prématurité',
    ],
    transmit: ['Heure de naissance', 'Terme', 'Aspect du liquide amniotique', 'Apgar à 1 et 5 minutes', 'Gestes réalisés', 'Température'],
    related: ['accouchement', 'rcp-pedia', 'hypothermie'],
    source: 'Références techniques nationales PSE — prise en charge du nouveau-né.',
  },

  {
    id: 'urgences-grossesse',
    cat: 'obst',
    title: 'Urgences de la grossesse',
    abbr: 'Grossesse',
    icon: 'alertCircle',
    severity: 'critical',
    desc: 'Pré-éclampsie, éclampsie, hémorragie, et particularités de la femme enceinte.',
    tags: ['grossesse', 'pré-éclampsie', 'éclampsie', 'hémorragie', 'décubitus latéral gauche'],
    summary:
      'Deux réflexes propres à la femme enceinte : la coucher sur le côté GAUCHE au-delà du deuxième trimestre, et considérer que toute convulsion est une éclampsie jusqu’à preuve du contraire.',
    blocks: [
      {
        title: 'Position — décubitus latéral gauche',
        level: 'danger',
        text:
          'À partir du deuxième trimestre, l’utérus comprime la veine cave inférieure quand la femme est sur le dos : le retour veineux chute et la tension s’effondre. Installer systématiquement en décubitus latéral GAUCHE, ou caler la hanche droite pour incliner le bassin. Cela vaut aussi pendant le transport.',
      },
      {
        title: 'Pré-éclampsie',
        level: 'danger',
        items: [
          'Hypertension artérielle.',
          'Céphalées intenses, troubles visuels (mouches, flou, éclairs).',
          'Douleur en barre à l’estomac.',
          'Œdèmes du visage et des mains, prise de poids rapide.',
          'Bourdonnements d’oreilles, réflexes vifs.',
        ],
      },
      {
        title: 'Éclampsie',
        level: 'danger',
        text:
          'Crise convulsive chez une femme enceinte ou en post-partum. Urgence vitale pour la mère et l’enfant. Protéger de la chute, décubitus latéral gauche, oxygène, calme et pénombre, transmission immédiate. Toute convulsion chez une femme enceinte est une éclampsie jusqu’à preuve du contraire.',
      },
      {
        title: 'Hémorragies',
        level: 'danger',
        items: [
          'Premier trimestre : fausse couche, grossesse extra-utérine (douleur pelvienne + retard de règles + malaise = urgence vitale).',
          'Troisième trimestre : placenta praevia (saignement indolore) ou hématome rétroplacentaire (douleur intense, utérus dur).',
          'Après l’accouchement : hémorragie de la délivrance.',
          'Ne jamais sous-estimer : le saignement extériorisé ne reflète pas toujours la perte réelle.',
        ],
      },
      {
        title: 'Traumatisme chez la femme enceinte',
        level: 'warn',
        items: [
          'La mère compense longtemps aux dépens du fœtus : des constantes maternelles normales n’excluent pas une souffrance fœtale.',
          'Toute femme enceinte traumatisée, même légèrement, doit être évaluée en milieu obstétrical.',
          'Immobilisation sur plan dur avec inclinaison du plan vers la gauche.',
          'En cas d’arrêt cardiaque, réaliser la RCP en récusant le décubitus dorsal strict : déplacer manuellement l’utérus vers la gauche.',
        ],
      },
    ],
    steps: [
      { title: 'Installer sur le côté gauche', text: 'Systématiquement au-delà du deuxième trimestre.' },
      { title: 'Recueillir', text: 'Terme, nombre de grossesses, suivi, complications connues.' },
      { title: 'Mesurer', text: 'PA en particulier : rechercher une hypertension.' },
      { title: 'Chercher les signes de pré-éclampsie', text: 'Céphalées, troubles visuels, barre épigastrique, œdèmes.' },
      { title: 'Protéger si convulsion', text: 'Éclampsie jusqu’à preuve du contraire : calme, pénombre, oxygène, transmission immédiate.' },
      { title: 'Évaluer le saignement', text: 'Quantité, aspect, douleur associée, tonicité de l’utérus.' },
    ],
    redFlags: [
      'Convulsion chez une femme enceinte',
      'Céphalées avec troubles visuels',
      'Douleur en barre épigastrique',
      'Saignement abondant',
      'Utérus dur et douloureux',
      'Diminution des mouvements fœtaux',
    ],
    transmit: ['Terme en semaines', 'Nombre de grossesses et accouchements', 'PA', 'Signes de pré-éclampsie', 'Saignement estimé', 'Mouvements fœtaux', 'Maternité de suivi'],
    related: ['accouchement', 'hemorragie', 'etat-mal', 'pa', 'choc'],
    source: 'Références techniques nationales PSE — urgences liées à la grossesse.',
  },

  {
    id: 'geriatrie',
    cat: 'geriatrie',
    title: 'Spécificités de la personne âgée',
    abbr: 'Gériatrie',
    icon: 'user',
    severity: 'standard',
    desc: 'Présentations atypiques, fragilité, polymédication : lire les constantes autrement.',
    tags: ['personne âgée', 'gériatrie', 'atypique', 'polymédication', 'confusion', 'iatrogénie'],
    summary:
      'Chez la personne âgée, les maladies graves se présentent souvent sans leurs signes habituels : un infarctus qui se manifeste par une chute, une infection urinaire par une confusion, une pneumonie sans fièvre. Le repère n’est pas la norme théorique mais l’état habituel de la personne.',
    blocks: [
      {
        title: 'Présentations atypiques',
        level: 'danger',
        items: [
          'Infarctus sans douleur : essoufflement, fatigue, malaise, chute.',
          'Infection sans fièvre, parfois avec hypothermie.',
          'Confusion aiguë comme seul symptôme d’une infection, d’une douleur ou d’une rétention urinaire.',
          'Abdomen chirurgical avec peu de douleur et peu de défense.',
          'Déshydratation sans sensation de soif : le réflexe de soif diminue avec l’âge.',
        ],
      },
      {
        title: 'Le repère est l’état habituel',
        level: 'warn',
        text:
          'Une PAS à 115 chez une personne habituellement à 170 est une hypotension relative. Une confusion « habituelle » chez une personne démente n’a pas la même valeur qu’une confusion apparue ce matin. Toujours demander à l’entourage ou aux soignants : « depuis quand est-ce différent ? »',
      },
      {
        title: 'Iatrogénie',
        level: 'warn',
        items: [
          'Chercher l’ordonnance, la pilulier, le carnet : la polymédication est la règle.',
          'Anticoagulants : un traumatisme mineur devient grave.',
          'Bêtabloquants : ils empêchent la tachycardie de compensation, masquant un choc débutant.',
          'Psychotropes et somnifères : chutes, confusion, hypotension orthostatique.',
          'Diurétiques : déshydratation, troubles ioniques.',
          'Un médicament nouvellement introduit est une cause fréquente de malaise.',
        ],
      },
      {
        title: 'Chute',
        level: 'danger',
        items: [
          'Une chute n’est jamais « juste une chute » : chercher la cause (malaise, trouble du rythme, hypotension, AVC, infection, hypoglycémie).',
          'Demander depuis combien de temps la personne est au sol : une station prolongée entraîne déshydratation, rhabdomyolyse et hypothermie.',
          'Chercher une fracture du col du fémur : membre raccourci et en rotation externe.',
          'Sous anticoagulant, toute chute avec choc à la tête impose un bilan hospitalier.',
        ],
      },
      {
        title: 'Douleur',
        level: 'warn',
        items: [
          'Souvent sous-évaluée et sous-exprimée, par pudeur ou par crainte de déranger.',
          'Chez la personne non communicante : utiliser une échelle d’hétéro-évaluation comportementale (Algoplus, ECPA).',
          'Signes indirects : agitation, repli, refus de mobilisation, gémissements, crispation, refus alimentaire.',
        ],
      },
      {
        title: 'Relation et dignité',
        level: 'info',
        items: [
          'S’adresser à la personne, pas uniquement à son entourage.',
          'Vérifier appareils auditifs et lunettes avant de conclure à une confusion.',
          'Vouvoyer, ne pas infantiliser.',
          'Emporter lunettes, prothèses, ordonnances et carte vitale.',
        ],
      },
    ],
    steps: [
      { title: 'Situer l’état habituel', text: 'Autonomie, cognition, constantes habituelles. Interroger l’entourage.' },
      { title: 'Chercher la cause', text: 'Derrière toute chute, toute confusion, tout malaise.' },
      { title: 'Recueillir les traitements', text: 'Ordonnance, pilulier, modifications récentes.' },
      { title: 'Examiner complètement', text: 'Y compris le dos et les points d’appui ; chercher une déshydratation.' },
      { title: 'Évaluer la douleur', text: 'Avec une échelle adaptée, y compris en cas de troubles de communication.' },
      { title: 'Emporter', text: 'Lunettes, prothèses auditives et dentaires, ordonnances, personne à prévenir.' },
    ],
    redFlags: [
      'Confusion d’apparition récente',
      'Station au sol prolongée',
      'Chute sous anticoagulant',
      'Hypothermie',
      'Constantes « normales » mais éloignées de l’état habituel',
      'Refus alimentaire et hydrique',
    ],
    transmit: ['Autonomie et lieu de vie habituels', 'État cognitif habituel', 'Depuis quand est-ce différent', 'Traitements et modifications récentes', 'Durée au sol', 'Personne à prévenir et directives éventuelles'],
    related: ['malaise', 'douleur', 'trauma-cranien', 'coup-chaleur', 'temp'],
    source: 'Références techniques nationales PSE et recommandations HAS sur la personne âgée.',
  },

  {
    id: 'o2',
    cat: 'pharma',
    title: 'Oxygénothérapie',
    abbr: 'O₂',
    icon: 'vial',
    severity: 'urgent',
    desc: 'Indications, dispositifs, débits et sécurité de l’administration d’oxygène.',
    tags: ['oxygène', 'masque', 'lunettes', 'haute concentration', 'BAVU', 'débit', 'bouteille'],
    summary:
      'L’oxygène est un médicament : il a des indications, des doses et des effets indésirables. L’administration systématique « pour être sûr » n’est plus recommandée — elle est même délétère dans le syndrome coronarien et chez l’insuffisant respiratoire chronique.',
    blocks: [
      {
        title: 'Indications',
        level: 'danger',
        items: [
          'SpO₂ inférieure à la cible, selon le terrain de la victime.',
          'Détresse respiratoire ou circulatoire caractérisée.',
          'Arrêt cardio-respiratoire.',
          'Intoxication au monoxyde de carbone : haute concentration, quelle que soit la SpO₂ affichée.',
          'Inhalation de fumées.',
        ],
      },
      {
        title: 'Dispositifs et débits',
        level: 'info',
        items: [
          'Lunettes nasales : 1 à 6 L/min. Confortables, permettent de parler et de boire.',
          'Masque simple : 6 à 8 L/min minimum, pour éviter le ré-inhalation du CO₂.',
          'Masque à haute concentration avec réservoir : 9 à 15 L/min. Le réservoir doit rester gonflé.',
          'Ballon auto-remplisseur (BAVU) avec réservoir : 15 L/min, pour la ventilation assistée.',
        ],
      },
      {
        title: 'Cibles de saturation',
        level: 'warn',
        items: [
          'Population générale : 94 à 98 %.',
          'Insuffisant respiratoire chronique : 88 à 92 %. Sur-oxygéner peut déprimer sa commande ventilatoire.',
          'Intoxication au CO et arrêt cardiaque : haute concentration sans cible, la SpO₂ n’étant pas interprétable.',
        ],
      },
      {
        title: 'Erreurs fréquentes',
        level: 'danger',
        items: [
          'Masque à haute concentration avec un débit trop faible : le réservoir se collabe et la victime ré-inhale son CO₂.',
          'Oublier de purger et de gonfler le réservoir avant la pose.',
          'Oxygène systématique dans la douleur thoracique avec SpO₂ normale : non recommandé.',
          'Ne pas surveiller le manomètre : la bouteille se vide plus vite qu’on ne le croit à 15 L/min.',
        ],
      },
      {
        title: 'Sécurité',
        level: 'danger',
        items: [
          'Aucune flamme, aucune cigarette, aucun corps gras à proximité : l’oxygène est comburant.',
          'Bouteille arrimée, jamais couchée librement dans un véhicule.',
          'Vérifier la pression avant le départ et après chaque usage.',
          'Ouvrir lentement le robinet ; ne jamais graisser le détendeur.',
        ],
      },
      {
        title: 'Calcul d’autonomie',
        level: 'info',
        text:
          'Autonomie en minutes ≈ (pression en bars × capacité en litres) / débit en L/min. Exemple : une bouteille de 5 L à 150 bars, à 15 L/min, fournit environ 50 minutes. Prévoir toujours une marge et une bouteille de secours.',
      },
    ],
    steps: [
      { title: 'Vérifier l’indication', text: 'SpO₂, cible adaptée au terrain, signes de détresse.' },
      { title: 'Choisir le dispositif', text: 'Selon le débit nécessaire et l’état de la victime.' },
      { title: 'Purger le réservoir', text: 'Pour un masque haute concentration : gonfler le réservoir avant de poser.' },
      { title: 'Poser et ajuster', text: 'Masque bien appliqué, sangle réglée, victime informée.' },
      { title: 'Surveiller', text: 'SpO₂, FR, conscience, réservoir, manomètre.' },
      { title: 'Noter', text: 'Débit, dispositif, heure de début, SpO₂ avant et après.' },
    ],
    redFlags: [
      'Réservoir qui se collabe',
      'SpO₂ qui ne remonte pas malgré un débit correct',
      'Somnolence chez un insuffisant respiratoire chronique sous oxygène',
      'Bouteille en réserve basse',
    ],
    transmit: ['Dispositif utilisé', 'Débit en L/min', 'Heure de début', 'SpO₂ avant et sous oxygène', 'Évolution clinique'],
    related: ['spo2', 'detresse-resp', 'co', 'asthme', 'oap'],
    source: 'Références techniques nationales PSE — oxygénothérapie.',
  },

  {
    id: 'medic',
    cat: 'pharma',
    title: 'Aide à la prise de médicaments',
    abbr: 'Médicaments',
    icon: 'pill',
    severity: 'standard',
    desc: 'Cadre et précautions lorsqu’un secouriste aide une victime à prendre son traitement.',
    tags: ['médicament', 'traitement', 'aide à la prise', 'auto-injecteur', 'protocole'],
    summary:
      'Le secouriste n’administre pas : il AIDE la victime à prendre son propre traitement, prescrit pour elle, qu’elle connaît. Toute autre situation relève d’un protocole du service et de la régulation médicale.',
    blocks: [
      {
        title: 'Les cinq vérifications',
        level: 'danger',
        items: [
          'Le BON patient : le médicament est-il prescrit à cette personne ?',
          'Le BON médicament : lire l’étiquette, pas la boîte, et vérifier la date de péremption.',
          'La BONNE dose : celle prescrite, pas celle que la victime « prend d’habitude quand ça va mal ».',
          'La BONNE voie : orale, inhalée, injectable, sublinguale.',
          'Le BON moment : quand la victime a-t-elle pris la dernière dose ?',
        ],
      },
      {
        title: 'Cas habituels',
        level: 'info',
        items: [
          'Bronchodilatateur inhalé chez un asthmatique connu en crise.',
          'Auto-injecteur d’adrénaline chez une personne allergique connue en anaphylaxie.',
          'Sucre par voie orale en cas d’hypoglycémie chez une victime consciente.',
          'Dérivé nitré en spray, selon protocole et régulation.',
        ],
      },
      {
        title: 'Interdits',
        level: 'danger',
        items: [
          'Ne jamais donner un médicament d’un tiers, ni de la pharmacie du véhicule hors protocole.',
          'Ne rien donner par la bouche à une victime somnolente, confuse ou qui ne déglutit pas.',
          'Ne pas décider seul d’un antalgique.',
          'Ne pas écraser un comprimé sans savoir s’il est à libération prolongée.',
        ],
      },
      {
        title: 'Tracer',
        level: 'warn',
        text:
          'Noter systématiquement : nom du produit, dose, voie, heure exacte, et qui a réalisé le geste. Conserver l’emballage et le présenter à l’équipe médicale. Une aide à la prise non tracée est une information perdue pour la suite de la prise en charge.',
      },
    ],
    steps: [
      { title: 'Vérifier le cadre', text: 'Traitement personnel prescrit, ou protocole du service avec régulation.' },
      { title: 'Les cinq vérifications', text: 'Patient, médicament, dose, voie, moment.' },
      { title: 'Vérifier la conscience', text: 'Rien par la bouche si la déglutition n’est pas sûre.' },
      { title: 'Aider', text: 'La victime prend son traitement ; le secouriste accompagne le geste.' },
      { title: 'Surveiller', text: 'Effet attendu et effets indésirables.' },
      { title: 'Tracer', text: 'Produit, dose, voie, heure, opérateur. Conserver l’emballage.' },
    ],
    redFlags: ['Doute sur la prescription', 'Victime somnolente', 'Doses déjà répétées', 'Absence d’amélioration attendue'],
    transmit: ['Produit exact', 'Dose', 'Voie', 'Heure', 'Effet observé', 'Doses déjà prises avant l’arrivée'],
    related: ['anaphylaxie', 'asthme', 'gly', 'o2', 'intox'],
    source: 'Références techniques nationales PSE — aide à la prise de médicaments.',
  },

  {
    id: 'transmission',
    cat: 'memo',
    title: 'Transmettre un bilan',
    abbr: 'Transmission',
    icon: 'radio',
    severity: 'standard',
    desc: 'Structure, discipline radio et contenu d’une transmission utile.',
    tags: ['transmission', 'bilan', 'radio', 'régulation', 'SBAR', 'alphabet'],
    summary:
      'Une bonne transmission est courte, ordonnée et sans jugement. Le médecin régulateur ne voit pas la scène : il reconstruit l’image à partir des mots. Chiffres, heures et faits ; pas d’interprétation personnelle.',
    blocks: [
      {
        title: 'Structure',
        level: 'info',
        items: [
          'Qui parle et d’où : identification de l’engin et du lieu.',
          'Le contexte : motif d’appel, ce qui s’est passé, heure de survenue.',
          'La victime : âge, sexe, antécédents et traitements marquants.',
          'L’état : ABCDE, constantes chiffrées avec leur heure.',
          'Les gestes : ce qui a été fait et à quelle heure.',
          'La demande : ce que l’on attend précisément de la régulation.',
        ],
      },
      {
        title: 'Discipline radio',
        level: 'warn',
        items: [
          'Écouter avant de parler : ne jamais couper un message en cours.',
          'Appuyer sur l’alternat, attendre une demi-seconde, puis parler.',
          'Phrases courtes, débit régulier, articulation nette.',
          'Épeler les noms propres avec l’alphabet international.',
          'Faire répéter plutôt que supposer avoir compris.',
        ],
      },
      {
        title: 'Alphabet international',
        level: 'info',
        text:
          'Alpha, Bravo, Charlie, Delta, Echo, Foxtrot, Golf, Hotel, India, Juliett, Kilo, Lima, Mike, November, Oscar, Papa, Quebec, Romeo, Sierra, Tango, Uniform, Victor, Whiskey, X-ray, Yankee, Zulu.',
      },
      {
        title: 'Ce qui rend une transmission inutilisable',
        level: 'danger',
        items: [
          '« Il ne va pas bien » sans aucun chiffre.',
          'Des constantes sans heure : on ne peut pas juger d’une tendance.',
          'Un jugement à la place d’un fait : « il simule », « c’est juste de l’alcool ».',
          'Oublier l’heure de début des signes dans un AVC ou une douleur thoracique.',
          'Oublier de signaler un geste réalisé, en particulier la pose d’un garrot.',
        ],
      },
      {
        title: 'Éléments toujours horodatés',
        level: 'warn',
        items: [
          'Heure de début des signes.',
          'Heure de chaque série de constantes.',
          'Heure de pose d’un garrot.',
          'Heure d’administration d’un médicament.',
          'Heure de début de RCP et de chaque choc.',
          'Heure de naissance en cas d’accouchement.',
        ],
      },
    ],
    steps: [
      { title: 'Préparer', text: 'Fiche bilan sous les yeux, constantes notées, avant d’appuyer sur l’alternat.' },
      { title: 'Identifier', text: 'Engin, lieu, nombre de victimes.' },
      { title: 'Contextualiser', text: 'Motif, circonstances, heure de survenue.' },
      { title: 'Décrire', text: 'Âge, antécédents, ABCDE, constantes chiffrées horodatées.' },
      { title: 'Énumérer les gestes', text: 'Avec leurs heures.' },
      { title: 'Formuler la demande', text: 'Clairement : avis, renfort médicalisé, orientation, destination.' },
    ],
    redFlags: ['Constantes sans heure', 'Geste non transmis', 'Heure de début des signes inconnue'],
    transmit: ['Structure complète', 'Chiffres', 'Heures', 'Demande explicite'],
    related: ['bilan', 'abcde', 'sample'],
    source: 'Références techniques nationales PSE — transmission du bilan.',
  },

  {
    id: 'sample',
    cat: 'memo',
    title: 'SAMPLE et OPQRST',
    abbr: 'Interrogatoire',
    icon: 'list',
    severity: 'standard',
    desc: 'Deux moyens mnémotechniques pour ne rien oublier à l’interrogatoire.',
    tags: ['SAMPLE', 'OPQRST', 'interrogatoire', 'anamnèse', 'mnémotechnique'],
    summary:
      'SAMPLE structure l’histoire de la victime. OPQRST structure la description d’un symptôme, en particulier une douleur. Les deux se complètent : SAMPLE pour le contexte, OPQRST pour le motif.',
    blocks: [
      {
        title: 'SAMPLE — l’histoire de la victime',
        level: 'info',
        items: [
          'S — Signes et symptômes : ce que la victime ressent et ce que l’on observe.',
          'A — Allergies : médicamenteuses, alimentaires, latex, venins.',
          'M — Médicaments : traitements en cours, modifications récentes, observance.',
          'P — Passé médical : antécédents médicaux et chirurgicaux, hospitalisations.',
          'L — Last meal : dernier repas et dernière boisson, avec l’heure.',
          'E — Événements : ce qui s’est passé juste avant, et ce qui a conduit à l’appel.',
        ],
      },
      {
        title: 'OPQRST — la description d’un symptôme',
        level: 'info',
        items: [
          'O — Origine : que faisait la victime au moment du début ?',
          'P — Provocation et soulagement : qu’est-ce qui aggrave, qu’est-ce qui calme ?',
          'Q — Qualité : serrement, brûlure, décharge, crampe, pesanteur, piqûre.',
          'R — iRradiation : où la douleur part-elle ?',
          'S — Sévérité : cotation sur une échelle adaptée.',
          'T — Temps : heure de début, durée, évolution, épisodes similaires antérieurs.',
        ],
      },
      {
        title: 'Bien interroger',
        level: 'warn',
        items: [
          'Questions ouvertes d’abord : « racontez-moi », puis préciser.',
          'Ne pas souffler la réponse : « ça vous serre la poitrine ? » induit la réponse.',
          'Laisser la victime finir ses phrases.',
          'Interroger aussi l’entourage, surtout si la victime est confuse, très jeune ou très âgée.',
          'Noter les réponses au fur et à mesure : on ne se souvient pas de tout.',
        ],
      },
      {
        title: 'Sources d’information sur place',
        level: 'info',
        items: [
          'Ordonnances, pilulier, carnet de santé, carte de groupe sanguin.',
          'Dossier de liaison d’urgence en EHPAD.',
          'Carte de porteur de pacemaker, de traitement anticoagulant, de diabète.',
          'Directives anticipées et personne de confiance.',
          'Appareils sur place : lecteur de glycémie, pompe à insuline, concentrateur d’oxygène.',
        ],
      },
    ],
    steps: [
      { title: 'Commencer ouvert', text: '« Racontez-moi ce qui s’est passé. »' },
      { title: 'Dérouler SAMPLE', text: 'Sans souffler les réponses.' },
      { title: 'Détailler avec OPQRST', text: 'Sur le symptôme principal.' },
      { title: 'Recouper', text: 'Avec l’entourage et les documents trouvés sur place.' },
      { title: 'Noter', text: 'Au fur et à mesure, sur la fiche bilan.' },
    ],
    redFlags: ['Incohérences entre le récit et les constatations', 'Récit modifié entre deux interlocuteurs', 'Lésions incompatibles avec le mécanisme décrit'],
    transmit: ['SAMPLE complet', 'OPQRST du symptôme principal', 'Documents trouvés sur place'],
    related: ['bilan', 'transmission', 'douleur', 'malaise'],
    source: 'Références techniques nationales PSE — interrogatoire de la victime.',
  },

  {
    id: 'checklist',
    cat: 'memo',
    title: 'Checklist d’intervention',
    abbr: 'Checklist',
    icon: 'checkCircle',
    severity: 'standard',
    desc: 'Points de contrôle au départ, sur place et au retour.',
    tags: ['checklist', 'départ', 'matériel', 'retour', 'hygiène', 'vérification'],
    summary:
      'Les oublis se produisent toujours aux mêmes endroits : le matériel qu’on n’a pas vérifié au départ, et l’effet personnel qu’on laisse sur place. Une vérification systématique coûte deux minutes et évite l’essentiel.',
    blocks: [
      {
        title: 'Au départ — vérification de l’engin',
        level: 'info',
        items: [
          'Oxygène : pression des bouteilles, présence d’une réserve, masques de toutes tailles.',
          'DAE : voyant, électrodes adultes et pédiatriques, date de péremption.',
          'Aspirateur de mucosités en état de marche, sondes présentes.',
          'Sac de premiers secours complet : pansements, garrots, attelles, couverture de survie.',
          'Matériel de mesure : tensiomètre avec brassards de plusieurs tailles, oxymètre, thermomètre, lecteur de glycémie avec bandelettes valides.',
          'Protection individuelle : gants de toutes tailles, masques, lunettes, gel hydroalcoolique.',
        ],
      },
      {
        title: 'À l’arrivée sur les lieux',
        level: 'danger',
        items: [
          'Sécurité : danger persistant ? Besoin de moyens supplémentaires ?',
          'Nombre de victimes, et vérification qu’aucune n’est passée inaperçue.',
          'Accès et sortie : le brancard passera-t-il ? Y a-t-il un ascenseur, un escalier étroit ?',
          'Anticiper le relevage avant de commencer les soins.',
        ],
      },
      {
        title: 'Avant de quitter les lieux',
        level: 'warn',
        items: [
          'Effets personnels : lunettes, prothèses auditives et dentaires, téléphone, clés, portefeuille.',
          'Documents : ordonnances, carte vitale, pièce d’identité, carnet de santé, dossier de liaison.',
          'Matériel de l’équipe : rien d’oublié sur place, en particulier ciseaux et matériel de mesure.',
          'Sécurisation du logement : gaz coupé, porte fermée, animal confié.',
          'Personne à prévenir informée.',
        ],
      },
      {
        title: 'Au retour',
        level: 'info',
        items: [
          'Nettoyage et désinfection du matériel et du brancard.',
          'Élimination des déchets d’activité de soins à risque infectieux dans le contenant adapté.',
          'Réarmement complet : remplacer ce qui a été consommé.',
          'Remise en charge des appareils.',
          'Rédaction et transmission de la fiche bilan.',
          'Débriefing si l’intervention a été difficile : cela fait partie du travail.',
        ],
      },
      {
        title: 'Hygiène',
        level: 'danger',
        items: [
          'Friction hydroalcoolique avant et après chaque contact avec une victime.',
          'Gants à usage unique, changés entre chaque victime.',
          'Masque et lunettes en cas de risque de projection ou de contexte infectieux.',
          'En cas d’accident d’exposition au sang : lavage immédiat, antiseptique, déclaration sans délai.',
        ],
      },
    ],
    steps: [
      { title: 'Départ', text: 'Vérifier oxygène, DAE, aspiration, sacs, protections individuelles.' },
      { title: 'Arrivée', text: 'Sécurité, nombre de victimes, accès et itinéraire de sortie.' },
      { title: 'Prise en charge', text: 'Bilan, gestes, surveillance, transmission.' },
      { title: 'Avant de partir', text: 'Effets personnels, documents, matériel de l’équipe, sécurisation des lieux.' },
      { title: 'Retour', text: 'Nettoyage, déchets, réarmement, recharge, fiche bilan.' },
      { title: 'Débriefer', text: 'Après une intervention difficile.' },
    ],
    redFlags: ['Matériel non vérifié au départ', 'Victime non recensée sur les lieux', 'Effets personnels oubliés', 'Réarmement non fait'],
    transmit: ['Matériel consommé', 'Incidents rencontrés', 'Effets personnels remis et à qui'],
    related: ['bilan', 'transmission', 'avp'],
    source: 'Procédures de service — à adapter aux consignes locales en vigueur.',
  },
];
