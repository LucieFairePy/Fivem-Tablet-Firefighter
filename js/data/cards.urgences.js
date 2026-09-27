export const URGENCES_CARDS = [

  {
    id: 'acr',
    cat: 'vitales',
    title: 'Arrêt cardio-respiratoire',
    abbr: 'ACR',
    icon: 'heartPulse',
    severity: 'critical',
    desc: 'Victime inconsciente qui ne respire pas normalement : réanimation cardio-pulmonaire immédiate.',
    tags: ['ACR', 'RCP', 'massage', 'compressions', 'DAE', 'gasps', 'arrêt cardiaque'],
    summary:
      'Trois constats suffisent : elle ne répond pas, elle ne respire pas normalement, il faut masser. Chaque minute sans compression fait perdre environ 10 % de chances de survie. Les gasps — respiration bruyante, irrégulière, agonique — ne sont pas une respiration.',
    blocks: [
      {
        title: 'Reconnaître',
        level: 'danger',
        items: [
          'Aucune réaction à la parole ni à la stimulation.',
          'Respiration absente, ou anormale : gasps, mouvements agoniques, bruits de gorge.',
          'Ne pas perdre plus de 10 secondes à chercher un pouls.',
          'Dans le doute, considérer qu’il s’agit d’un arrêt et commencer.',
        ],
      },
      {
        title: 'Compressions de qualité',
        level: 'danger',
        items: [
          'Fréquence 100 à 120/minute.',
          'Profondeur 5 à 6 cm chez l’adulte.',
          'Relâchement thoracique complet entre chaque compression.',
          'Talon de la main au centre du thorax, bras tendus, épaules à l’aplomb.',
          'Relais toutes les 2 minutes : la qualité chute dès la deuxième minute.',
        ],
      },
      {
        title: 'Ce qui tue les chances de survie',
        level: 'warn',
        items: [
          'Les interruptions : viser moins de 10 secondes à chaque pause.',
          'Un appui trop superficiel, plus fréquent qu’un appui trop profond.',
          'Un relâchement incomplet, qui empêche le cœur de se remplir.',
          'Le retard à la pose du DAE.',
        ],
      },
      {
        title: 'Causes réversibles à évoquer',
        level: 'info',
        text:
          'Hypoxie, hypovolémie (hémorragie), hypothermie, hypo/hyperkaliémie, intoxication, tamponnade, pneumothorax sous tension, thrombose. Le contexte de l’intervention oriente : noyade, électrisation, overdose, traumatisme.',
      },
    ],
    steps: [
      { title: 'Sécuriser', text: 'Protéger la zone, écarter le danger, s’assurer de sa propre sécurité.' },
      { title: 'Évaluer', text: 'Parler, secouer les épaules. Libérer les voies aériennes. Chercher la respiration 10 secondes maximum.' },
      { title: 'Alerter et demander un DAE', text: 'Faire alerter le 18/112 et apporter le défibrillateur ; rester auprès de la victime.' },
      { title: 'Comprimer', text: '30 compressions, 100–120/min, 5–6 cm, relâchement complet.' },
      { title: 'Insuffler', text: '2 insufflations d’une seconde chacune, thorax qui se soulève visiblement.' },
      { title: 'Poser le DAE dès son arrivée', text: 'Sans interrompre les compressions pendant la pose des électrodes.' },
      { title: 'Poursuivre', text: 'Cycles 30:2 sans arrêt jusqu’au relais médicalisé, à la reprise d’une respiration normale ou à l’épuisement de l’équipe.' },
    ],
    redFlags: [
      'Gasps pris à tort pour une respiration',
      'Plus de 10 secondes d’interruption des compressions',
      'Retard à la pose du DAE',
      'Contexte traumatique ou hémorragique associé',
    ],
    transmit: ['Heure de l’arrêt', 'Heure du début de RCP', 'Témoin de l’arrêt ou non', 'Nombre de chocs délivrés', 'Rythme initial', 'Circonstances', 'Traitements connus'],
    related: ['dae', 'rcp-pedia', 'inconscience', 'noyade', 'elect'],
    source: 'Références techniques nationales PSE — arrêt cardiaque chez l’adulte.',
  },

  {
    id: 'rcp-pedia',
    cat: 'vitales',
    title: 'RCP enfant et nourrisson',
    abbr: 'RCP péd.',
    icon: 'baby',
    severity: 'critical',
    desc: 'Réanimation adaptée à l’enfant et au nourrisson : l’arrêt y est presque toujours d’origine respiratoire.',
    tags: ['RCP pédiatrique', 'nourrisson', 'insufflations', '15:2', 'enfant', 'arrêt'],
    summary:
      'Chez l’adulte, le cœur lâche d’abord. Chez l’enfant, c’est la respiration. D’où la différence fondamentale : on commence par 5 insufflations, et le rapport devient 15 compressions pour 2 insufflations dès que deux secouristes sont présents.',
    blocks: [
      {
        title: 'Ce qui change par rapport à l’adulte',
        level: 'danger',
        items: [
          '5 insufflations initiales AVANT toute compression.',
          'Rapport 15:2 à deux secouristes (30:2 si l’on est seul).',
          'Profondeur : environ un tiers du diamètre antéro-postérieur du thorax.',
          'Une bradycardie < 60/min avec mauvaise perfusion se traite comme un arrêt : comprimer.',
        ],
      },
      {
        title: 'Technique — enfant (1 an → puberté)',
        level: 'info',
        items: [
          'Talon d’une main, ou deux mains si l’enfant est grand.',
          'Profondeur environ 5 cm.',
          'Fréquence 100–120/min.',
        ],
      },
      {
        title: 'Technique — nourrisson (< 1 an)',
        level: 'info',
        items: [
          'Deux doigts au centre du thorax si l’on est seul.',
          'Deux pouces encerclant le thorax si l’on est deux : technique plus efficace.',
          'Profondeur environ 4 cm.',
          'Tête en position neutre : une hyperextension referme les voies aériennes du nourrisson.',
        ],
      },
      {
        title: 'Insufflations',
        level: 'warn',
        items: [
          'Nourrisson : bouche du secouriste sur le nez ET la bouche.',
          'Enfant : bouche-à-bouche, nez pincé.',
          'Volume juste suffisant pour soulever le thorax ; insuffler trop fort distend l’estomac et fait vomir.',
        ],
      },
    ],
    steps: [
      { title: 'Évaluer', text: 'Absence de réaction et de respiration normale, 10 secondes maximum.' },
      { title: 'Libérer et insuffler', text: 'Voies aériennes libérées, tête en position adaptée à l’âge, puis 5 insufflations initiales.' },
      { title: 'Alerter', text: 'Si seul : faire 1 minute de RCP avant d’aller alerter, sauf effondrement brutal devant témoin.' },
      { title: 'Comprimer', text: '15 compressions pour 2 insufflations à deux secouristes.' },
      { title: 'DAE', text: 'Électrodes pédiatriques si disponibles avant 8 ans ; sinon électrodes adultes en position antéro-postérieure.' },
      { title: 'Poursuivre', text: 'Sans interruption, relais réguliers, jusqu’au relais médicalisé.' },
    ],
    redFlags: [
      'Bradycardie < 60/min avec signes de mauvaise perfusion',
      'Hypotonie complète',
      'Cyanose péribuccale',
      'Pauses respiratoires prolongées',
    ],
    transmit: ['Âge estimé et poids', 'Heure de l’arrêt', 'Cause suspectée (obstruction, noyade, fièvre, traumatisme)', 'Gestes réalisés', 'Présence des parents'],
    related: ['acr', 'ova', 'dae', 'pedia-eval'],
    source: 'Références techniques nationales PSE — arrêt cardiaque chez l’enfant et le nourrisson.',
  },

  {
    id: 'dae',
    cat: 'vitales',
    title: 'Défibrillateur automatisé externe',
    abbr: 'DAE',
    icon: 'zap',
    severity: 'critical',
    desc: 'Mise en œuvre du DAE pendant la réanimation cardio-pulmonaire.',
    tags: ['DAE', 'défibrillateur', 'choc', 'électrodes', 'analyse'],
    summary:
      'Le DAE analyse le rythme et décide seul s’il faut choquer. L’opérateur n’a que trois responsabilités : l’allumer vite, poser les électrodes correctement, et garantir que personne ne touche la victime pendant l’analyse et le choc.',
    blocks: [
      {
        title: 'Position des électrodes',
        level: 'info',
        items: [
          'Adulte : sous la clavicule droite, et sur le côté gauche du thorax sous l’aisselle.',
          'Nourrisson et jeune enfant : une électrode sur la poitrine, une dans le dos (position antéro-postérieure).',
          'Suivre les schémas imprimés sur les électrodes elles-mêmes.',
        ],
      },
      {
        title: 'Situations particulières',
        level: 'warn',
        items: [
          'Thorax mouillé : essuyer avant de coller.',
          'Pilosité importante : raser ou arracher avec une première paire d’électrodes.',
          'Pacemaker ou boîtier implanté visible : décaler l’électrode d’au moins 8 cm.',
          'Patch médicamenteux : le retirer et essuyer la peau.',
          'Surface métallique ou flaque d’eau : déplacer la victime avant le choc.',
        ],
      },
      {
        title: 'Sécurité',
        level: 'danger',
        items: [
          'Annoncer à voix haute « écartez-vous » et vérifier visuellement avant chaque analyse et chaque choc.',
          'Personne ne touche la victime, y compris l’équipe qui ventile.',
          'Reprendre les compressions IMMÉDIATEMENT après le choc, sans vérifier le pouls.',
        ],
      },
      {
        title: 'Erreur fréquente',
        level: 'warn',
        text:
          'Attendre le DAE pour commencer les compressions. Les compressions démarrent dès le constat d’arrêt ; le DAE s’installe pendant qu’elles continuent.',
      },
    ],
    steps: [
      { title: 'Allumer', text: 'Dès l’arrivée de l’appareil. Il guide vocalement à partir de là.' },
      { title: 'Dénuder le thorax', text: 'Torse nu, peau sèche.' },
      { title: 'Coller les électrodes', text: 'Selon le schéma, sans interrompre les compressions.' },
      { title: 'Analyser', text: 'Écarter tout le monde, laisser l’appareil analyser.' },
      { title: 'Choquer si indiqué', text: 'Vérifier que personne ne touche, puis appuyer.' },
      { title: 'Reprendre', text: 'Compressions immédiates, 2 minutes, jusqu’à la prochaine analyse.' },
    ],
    redFlags: ['Choc retardé', 'Reprise tardive des compressions après le choc', 'Électrodes mal positionnées ou décollées'],
    transmit: ['Nombre de chocs', 'Heure du premier choc', 'Rythme choquable ou non', 'Évolution après chaque choc'],
    related: ['acr', 'rcp-pedia'],
    source: 'Références techniques nationales PSE — défibrillation automatisée externe.',
  },

  {
    id: 'inconscience',
    cat: 'vitales',
    title: 'Inconscience avec respiration',
    abbr: 'PLS',
    icon: 'moon',
    severity: 'critical',
    desc: 'Victime qui ne répond pas mais respire normalement : libération des voies aériennes et position latérale de sécurité.',
    tags: ['PLS', 'inconscience', 'coma', 'voies aériennes', 'position latérale'],
    summary:
      'Chez une victime inconsciente sur le dos, la langue bascule et le contenu gastrique peut passer dans les poumons. La PLS résout les deux problèmes à elle seule. C’est le geste qui gagne le plus de temps pour le moins d’effort.',
    blocks: [
      {
        title: 'Avant la PLS',
        level: 'danger',
        items: [
          'Vérifier la respiration : absente ou anormale, c’est un arrêt, pas une PLS.',
          'Libérer les voies aériennes : bascule prudente de la tête, menton soulevé.',
          'Rechercher et traiter une hémorragie avant de mobiliser.',
        ],
      },
      {
        title: 'Causes à rechercher systématiquement',
        level: 'warn',
        items: [
          'Hypoglycémie — glycémie capillaire obligatoire.',
          'Traumatisme crânien, chute.',
          'Intoxication : médicaments, alcool, opioïdes, CO.',
          'AVC, crise convulsive récente, hypoxie.',
        ],
      },
      {
        title: 'Cas particuliers',
        level: 'info',
        items: [
          'Suspicion de traumatisme du rachis : maintien de l’axe tête-cou-tronc, retournement à plusieurs si la PLS est indispensable.',
          'Femme enceinte : coucher de préférence sur le côté GAUCHE.',
          'Nourrisson : le tenir sur l’avant-bras, tête légèrement plus basse que le corps.',
        ],
      },
    ],
    steps: [
      { title: 'Constater', text: 'Aucune réponse, mais respiration normale présente.' },
      { title: 'Libérer', text: 'Voies aériennes : tête basculée avec précaution, menton soulevé.' },
      { title: 'Retirer', text: 'Lunettes, objets encombrants ; desserrer les vêtements au cou.' },
      { title: 'Retourner', text: 'Mise en PLS, la bouche orientée vers le sol pour laisser s’écouler les liquides.' },
      { title: 'Stabiliser', text: 'Position stable, thorax dégagé, couvrir la victime.' },
      { title: 'Surveiller', text: 'Respiration en continu ; glycémie et constantes ; réévaluer toutes les minutes.' },
    ],
    redFlags: [
      'Arrêt de la respiration en cours de surveillance',
      'Vomissements abondants',
      'Glasgow ≤ 8',
      'Anisocorie',
      'Contexte traumatique',
    ],
    transmit: ['Glasgow détaillé', 'Heure de perte de connaissance', 'Glycémie', 'Circonstances', 'Traitements et antécédents', 'Position adoptée'],
    related: ['glasgow', 'gly', 'acr', 'trauma-cranien', 'opioides'],
    source: 'Références techniques nationales PSE — victime inconsciente qui respire.',
  },

  {
    id: 'detresse-resp',
    cat: 'resp',
    title: 'Détresse respiratoire',
    abbr: 'Détresse resp.',
    icon: 'lungs',
    severity: 'critical',
    desc: 'Reconnaissance et prise en charge d’une insuffisance respiratoire aiguë.',
    tags: ['détresse', 'dyspnée', 'tirage', 'cyanose', 'hypoxie', 'essoufflement'],
    summary:
      'La détresse respiratoire se voit avant de se mesurer : une victime assise, penchée en avant, qui ne finit pas ses phrases, est déjà en détresse quels que soient les chiffres. Les critères mesurés confirment, ils ne déclenchent pas.',
    blocks: [
      {
        title: 'Critères mesurés (PSE)',
        level: 'danger',
        items: [
          'Fréquence respiratoire > 30/min chez l’adulte.',
          'SpO₂ < 94 % à l’air ambiant.',
        ],
      },
      {
        title: 'Signes cliniques',
        level: 'danger',
        items: [
          'Tirage, battement des ailes du nez, geignement.',
          'Cyanose des lèvres et des extrémités.',
          'Sueurs, agitation puis somnolence.',
          'Position assise penchée en avant, refus de s’allonger.',
          'Incapacité à terminer une phrase.',
        ],
      },
      {
        title: 'Signes d’épuisement — urgence maximale',
        level: 'danger',
        items: [
          'Ralentissement de la fréquence respiratoire chez une victime jusque-là polypnéique.',
          'Respiration paradoxale : le ventre se creuse à l’inspiration.',
          'Silence auscultatoire chez un asthmatique qui sifflait.',
          'Troubles de conscience.',
        ],
      },
      {
        title: 'Orienter la cause',
        level: 'info',
        items: [
          'Sifflement expiratoire : asthme, BPCO.',
          'Crépitants et expectoration mousseuse rosée : œdème aigu du poumon.',
          'Début brutal avec douleur thoracique : embolie pulmonaire, pneumothorax.',
          'Fièvre et toux : infection.',
          'Contexte de fumées : intoxication, brûlure des voies aériennes.',
        ],
      },
    ],
    steps: [
      { title: 'Installer', text: 'Position demi-assise ou assise, celle que la victime choisit spontanément. Ne jamais l’allonger de force.' },
      { title: 'Libérer', text: 'Desserrer col et ceinture, aérer, écarter l’entourage.' },
      { title: 'Oxygéner', text: 'Selon les critères et la cible adaptée au terrain (88–92 % chez l’insuffisant respiratoire chronique).' },
      { title: 'Mesurer', text: 'FR, SpO₂, FC, PA, conscience, température.' },
      { title: 'Traitement personnel', text: 'Aider à la prise du bronchodilatateur prescrit si la victime en a un.' },
      { title: 'Réévaluer', text: 'Toutes les 3 à 5 minutes ; transmettre toute aggravation immédiatement.' },
    ],
    redFlags: [
      'FR > 30 ou FR qui ralentit',
      'SpO₂ < 90 % malgré l’oxygène',
      'Cyanose',
      'Troubles de conscience',
      'Silence auscultatoire',
      'Respiration paradoxale',
    ],
    transmit: ['FR', 'SpO₂ air ambiant puis sous O₂', 'Débit d’oxygène', 'Signes de lutte', 'Position tolérée', 'Antécédents respiratoires', 'Traitement pris'],
    related: ['fr', 'spo2', 'o2', 'asthme', 'oap', 'ova'],
    source: 'Références techniques nationales PSE — détresse respiratoire.',
  },

  {
    id: 'ova',
    cat: 'resp',
    title: 'Obstruction des voies aériennes',
    abbr: 'OVA',
    icon: 'wind',
    severity: 'critical',
    desc: 'Étouffement par corps étranger : conduite selon obstruction partielle ou totale.',
    tags: ['étouffement', 'Heimlich', 'corps étranger', 'claques dorsales', 'fausse route'],
    summary:
      'Une seule question décide de tout : la victime peut-elle tousser ou parler ? Si oui, obstruction partielle — on n’intervient PAS, on encourage à tousser. Si non, obstruction totale — on agit immédiatement.',
    blocks: [
      {
        title: 'Obstruction PARTIELLE — ne pas intervenir',
        level: 'warn',
        items: [
          'La victime tousse, parle, respire même difficilement.',
          'Ne pas taper dans le dos, ne pas faire de compressions : on risque de déplacer le corps étranger et de bloquer complètement.',
          'Encourager à tousser, installer en position assise, oxygéner, surveiller en permanence.',
        ],
      },
      {
        title: 'Obstruction TOTALE — agir',
        level: 'danger',
        items: [
          'Aucun son, aucune toux efficace, impossibilité de parler.',
          'Agitation, port des mains à la gorge, visage rouge puis cyanosé.',
          'Alternance 5 claques dorsales / 5 compressions, jusqu’au désobstruction ou à la perte de connaissance.',
        ],
      },
      {
        title: 'Adaptation selon la victime',
        level: 'info',
        items: [
          'Adulte et enfant : 5 claques dorsales puis 5 compressions ABDOMINALES.',
          'Nourrisson : 5 claques dorsales puis 5 compressions THORACIQUES. Jamais d’abdominales.',
          'Femme enceinte ou personne obèse : compressions THORACIQUES à la place des abdominales.',
        ],
      },
      {
        title: 'Si la victime perd connaissance',
        level: 'danger',
        text:
          'L’allonger avec précaution et débuter immédiatement la réanimation cardio-pulmonaire. Les compressions thoraciques génèrent une pression capable d’expulser le corps étranger. Regarder dans la bouche à chaque ouverture, retirer l’objet uniquement s’il est visible et accessible.',
      },
      {
        title: 'Après désobstruction',
        level: 'warn',
        text:
          'Un bilan médical reste nécessaire : des compressions abdominales peuvent léser des organes, et un fragment peut être descendu dans les bronches. Ne jamais laisser la victime sur place sans avis.',
      },
    ],
    steps: [
      { title: 'Poser LA question', text: '« Est-ce que vous vous étouffez ? » Évaluer toux, parole et respiration.' },
      { title: 'Partielle : encourager', text: 'Laisser tousser, ne rien faire d’autre, surveiller de près.' },
      { title: 'Totale : 5 claques dorsales', text: 'Talon de la main entre les omoplates, victime penchée en avant, soutenue.' },
      { title: '5 compressions', text: 'Abdominales chez l’adulte et l’enfant, thoraciques chez le nourrisson, la femme enceinte et la personne obèse.' },
      { title: 'Alterner', text: 'Jusqu’à expulsion ou perte de connaissance.' },
      { title: 'Perte de connaissance', text: 'Allonger et débuter la RCP immédiatement.' },
    ],
    redFlags: ['Aucun son émis', 'Cyanose rapide', 'Perte de connaissance', 'Obstruction partielle qui devient totale'],
    transmit: ['Nature du corps étranger si connue', 'Durée de l’obstruction', 'Gestes réalisés et nombre', 'Expulsion constatée ou non', 'État de conscience'],
    related: ['detresse-resp', 'acr', 'rcp-pedia'],
    source: 'Références techniques nationales PSE — obstruction des voies aériennes par corps étranger.',
  },

  {
    id: 'asthme',
    cat: 'resp',
    title: 'Crise d’asthme',
    abbr: 'Asthme',
    icon: 'wind',
    severity: 'urgent',
    desc: 'Bronchospasme aigu : sifflements expiratoires, gêne à l’expiration, réponse au bronchodilatateur.',
    tags: ['asthme', 'sifflements', 'bronchodilatateur', 'ventoline', 'bronchospasme'],
    summary:
      'Dans l’asthme, l’air entre mais sort mal : l’expiration est longue et sifflante. Le signe le plus grave n’est pas un sifflement plus fort — c’est un thorax devenu silencieux.',
    blocks: [
      {
        title: 'Signes de gravité — asthme aigu grave',
        level: 'danger',
        items: [
          'Impossibilité de parler ou de terminer une phrase.',
          'FR > 30/min, FC > 120/min.',
          'SpO₂ < 94 % malgré l’oxygène.',
          'Sueurs, agitation, puis somnolence.',
          'SILENCE auscultatoire : plus aucun sifflement — urgence absolue.',
          'Cyanose, impossibilité de rester allongé.',
        ],
      },
      {
        title: 'Aide au traitement personnel',
        level: 'info',
        items: [
          'La victime connaît son traitement : l’aider à le prendre, ne pas s’y substituer.',
          'Chambre d’inhalation si elle en dispose : nettement plus efficace qu’un aérosol seul mal coordonné.',
          'Noter le produit, la dose et l’heure de prise.',
        ],
      },
      {
        title: 'Facteurs déclenchants à rechercher',
        level: 'info',
        text: 'Infection respiratoire, allergène (pollen, animal, acarien), effort, air froid, fumée, stress, arrêt du traitement de fond, prise d’anti-inflammatoire.',
      },
      {
        title: 'Piège à connaître',
        level: 'warn',
        text:
          'Une première crise sifflante chez une personne âgée n’est pas forcément de l’asthme : penser à l’œdème aigu du poumon, dont la prise en charge est différente. Chercher les antécédents cardiaques, les œdèmes des jambes et l’orthopnée.',
      },
    ],
    steps: [
      { title: 'Installer', text: 'Position assise, penchée en avant, bras en appui. Ne jamais allonger.' },
      { title: 'Calmer', text: 'Environnement apaisé, écarter l’entourage, faire respirer lentement. L’angoisse aggrave le bronchospasme.' },
      { title: 'Aider au traitement', text: 'Bronchodilatateur personnel, avec chambre d’inhalation si disponible.' },
      { title: 'Oxygéner', text: 'Si SpO₂ < 94 % ou signes de gravité.' },
      { title: 'Surveiller', text: 'FR, SpO₂, capacité à parler, coloration. Toute aggravation : bilan immédiat.' },
    ],
    redFlags: ['Silence auscultatoire', 'Impossibilité de parler', 'Somnolence', 'SpO₂ < 90 %', 'Absence de réponse au bronchodilatateur'],
    transmit: ['Heure de début', 'Traitement pris, dose et heure', 'Nombre de bouffées déjà utilisées', 'Hospitalisations antérieures pour asthme', 'FR, SpO₂, capacité à parler'],
    related: ['detresse-resp', 'spo2', 'o2', 'anaphylaxie', 'oap'],
    source: 'Références techniques nationales PSE — détresse respiratoire d’origine bronchique.',
  },

  {
    id: 'oap',
    cat: 'resp',
    title: 'Œdème aigu du poumon',
    abbr: 'OAP',
    icon: 'waves',
    severity: 'urgent',
    desc: 'Inondation des alvéoles d’origine cardiaque : détresse respiratoire brutale, souvent nocturne.',
    tags: ['OAP', 'œdème pulmonaire', 'insuffisance cardiaque', 'orthopnée', 'crépitants'],
    summary:
      'Le cœur gauche n’évacue plus le sang : la pression remonte dans les poumons et le plasma passe dans les alvéoles. La victime se noie de l’intérieur. Elle ne supporte pas d’être allongée — c’est le signe qui doit alerter en premier.',
    blocks: [
      {
        title: 'Tableau typique',
        level: 'danger',
        items: [
          'Début souvent nocturne, brutal.',
          'Orthopnée : impossibilité de rester allongé, besoin de s’asseoir ou de se lever.',
          'Grésillement laryngé, respiration bruyante « de bulles ».',
          'Expectoration mousseuse, parfois rosée.',
          'Sueurs profuses, angoisse majeure, pâleur.',
        ],
      },
      {
        title: 'Éléments d’orientation',
        level: 'info',
        items: [
          'Antécédents cardiaques, infarctus, hypertension.',
          'Œdèmes des chevilles, prise de poids récente.',
          'Traitement diurétique en cours.',
          'Écart de régime sans sel ou oubli de traitement.',
        ],
      },
      {
        title: 'Ne pas confondre',
        level: 'warn',
        text:
          'Asthme et OAP sifflent tous les deux. L’OAP touche plutôt une personne âgée avec antécédents cardiaques, survient la nuit, et s’accompagne d’œdèmes des membres inférieurs. L’asthme a des antécédents connus et un traitement personnel. En cas de doute, ne rien administrer et transmettre.',
      },
    ],
    steps: [
      { title: 'Asseoir', text: 'Position assise, jambes pendantes hors du lit ou du brancard : cela diminue le retour veineux.' },
      { title: 'Oxygéner', text: 'Haute concentration si SpO₂ basse, selon protocole.' },
      { title: 'Ne pas allonger', text: 'Sous aucun prétexte, même pour le transport, tant que la détresse persiste.' },
      { title: 'Rassurer', text: 'L’angoisse augmente le travail cardiaque ; parler calmement.' },
      { title: 'Bilan urgent', text: 'Transmettre rapidement à la régulation : la prise en charge médicamenteuse est urgente.' },
    ],
    redFlags: ['SpO₂ effondrée', 'Expectoration mousseuse rosée', 'Sueurs profuses', 'Troubles de conscience', 'Marbrures ou hypotension associées'],
    transmit: ['Heure de début', 'Position tolérée', 'SpO₂ et débit d’O₂', 'Antécédents cardiaques', 'Traitements', 'Œdèmes des membres inférieurs'],
    related: ['detresse-resp', 'douleur-thoracique', 'spo2', 'o2'],
    source: 'Références techniques nationales PSE — détresse respiratoire d’origine cardiaque.',
  },

  {
    id: 'hemorragie',
    cat: 'circu',
    title: 'Hémorragie externe',
    abbr: 'Hémorragie',
    icon: 'droplet',
    severity: 'critical',
    desc: 'Arrêt d’un saignement abondant : compression, pansement compressif, garrot.',
    tags: ['hémorragie', 'saignement', 'compression', 'pansement compressif', 'garrot'],
    summary:
      'Une hémorragie qui imbibe un mouchoir n’est pas une hémorragie. Une hémorragie qui imbibe les vêtements ou fait une flaque tue en quelques minutes. La compression directe, immédiate, avec les mains s’il le faut, règle la grande majorité des cas.',
    blocks: [
      {
        title: 'Progression des moyens',
        level: 'danger',
        items: [
          '1 — Compression manuelle directe, immédiate, sur la plaie.',
          '2 — Pansement compressif, en maintenant la compression pendant la pose.',
          '3 — Garrot si le saignement persiste malgré le pansement, ou d’emblée dans les situations particulières.',
        ],
      },
      {
        title: 'Garrot d’emblée',
        level: 'danger',
        items: [
          'Amputation ou délabrement majeur d’un membre.',
          'Victime incarcérée, accès à la plaie impossible.',
          'Situation de danger ou victimes multiples ne permettant pas de maintenir une compression.',
          'Échec de la compression directe.',
        ],
      },
      {
        title: 'Règles du garrot',
        level: 'danger',
        items: [
          'Poser à 5 cm au-dessus de la plaie, jamais sur une articulation.',
          'Serrer jusqu’à l’ARRÊT COMPLET du saignement — un garrot insuffisant aggrave en bloquant le retour veineux.',
          'Noter l’HEURE de pose, visible, sur la victime.',
          'Ne jamais le desserrer, ne jamais le recouvrir.',
          'Prévenir la victime : c’est très douloureux, cela n’est pas un signe de mauvaise pose.',
        ],
      },
      {
        title: 'Protection du secouriste',
        level: 'warn',
        text: 'Gants systématiques, lunettes en cas de projection. Si le contact sanguin a lieu malgré tout : lavage immédiat, antiseptique, et déclaration d’accident d’exposition au sang.',
      },
      {
        title: 'Cas particuliers',
        level: 'info',
        items: [
          'Corps étranger dans la plaie : ne pas le retirer, comprimer autour.',
          'Saignement de nez : tête penchée en AVANT, compression des narines 10 minutes sans relâcher.',
          'Plaie du cuir chevelu : très hémorragique mais rarement grave ; compression directe.',
          'Hémorragie non compressible (abdomen, thorax, racine de membre) : pansement hémostatique si disponible, évacuation urgente.',
        ],
      },
    ],
    steps: [
      { title: 'Se protéger', text: 'Gants, lunettes si projection possible.' },
      { title: 'Comprimer', text: 'Immédiatement, à la main sur la plaie, à travers un tissu propre. Ne pas chercher le matériel parfait d’abord.' },
      { title: 'Allonger', text: 'La victime, pour limiter le malaise et le saignement.' },
      { title: 'Pansement compressif', text: 'Sans jamais relâcher la compression pendant la pose.' },
      { title: 'Garrot si échec', text: '5 cm au-dessus de la plaie, serrage jusqu’à arrêt complet, heure notée.' },
      { title: 'Surveiller le choc', text: 'FC, PA, TRC, conscience, coloration. Couvrir. Ne rien faire boire.' },
    ],
    redFlags: [
      'Saignement en jet pulsatile',
      'Pâleur, sueurs froides, soif intense',
      'FC > 120 avec PAS < 90',
      'TRC > 3 s et marbrures',
      'Agitation puis somnolence',
    ],
    transmit: ['Localisation et aspect de la plaie', 'Quantité estimée', 'Heure de pose du garrot', 'Moyens employés', 'Constantes et leur évolution', 'Traitement anticoagulant connu'],
    related: ['garrot', 'choc', 'trc', 'trauma', 'avp'],
    source: 'Références techniques nationales PSE — hémorragies externes.',
  },

  {
    id: 'garrot',
    cat: 'circu',
    title: 'Pose du garrot',
    abbr: 'Garrot',
    icon: 'bandage',
    severity: 'critical',
    desc: 'Indications, technique et surveillance du garrot tourniquet.',
    tags: ['garrot', 'tourniquet', 'amputation', 'hémorragie', 'CAT'],
    summary:
      'Le garrot a longtemps eu mauvaise réputation. Les retours de la médecine de guerre l’ont réhabilité : posé correctement et noté à l’heure, il sauve des vies sans coût fonctionnel notable dans les deux premières heures.',
    blocks: [
      {
        title: 'Indications',
        level: 'danger',
        items: [
          'Échec de la compression directe et du pansement compressif.',
          'Amputation ou délabrement majeur.',
          'Impossibilité d’accéder à la plaie ou de maintenir une compression.',
          'Victimes multiples, secouriste seul.',
          'Contexte de danger imposant une extraction rapide.',
        ],
      },
      {
        title: 'Technique',
        level: 'info',
        items: [
          'Placer 5 cm au-dessus de la plaie, sur peau nue si possible.',
          'Jamais sur une articulation : remonter au segment au-dessus.',
          'Serrer progressivement jusqu’à disparition complète du saignement ET du pouls en aval.',
          'Verrouiller le dispositif.',
          'Écrire l’heure de pose sur la victime, de façon visible, ainsi que sur la fiche.',
        ],
      },
      {
        title: 'Erreurs classiques',
        level: 'danger',
        items: [
          'Serrage insuffisant : bloque le retour veineux et AUGMENTE le saignement.',
          'Pose trop bas, sur l’articulation : inefficace.',
          'Garrot recouvert par une couverture : oublié lors du relais.',
          'Desserrage « pour voir » : reprise de l’hémorragie et risque de relargage toxique.',
        ],
      },
      {
        title: 'Si le saignement persiste',
        level: 'warn',
        text: 'Poser un second garrot juste au-dessus du premier, sans retirer le premier. C’est fréquent sur les cuisses, où la masse musculaire est importante.',
      },
    ],
    steps: [
      { title: 'Annoncer', text: 'Prévenir la victime : le geste est douloureux et cette douleur est normale.' },
      { title: 'Positionner', text: '5 cm au-dessus de la plaie, hors articulation.' },
      { title: 'Serrer', text: 'Jusqu’à l’arrêt complet du saignement et la disparition du pouls distal.' },
      { title: 'Verrouiller', text: 'Sécuriser le dispositif pour qu’il ne se desserre pas au brancardage.' },
      { title: 'Noter l’heure', text: 'Sur la victime et sur la fiche bilan. Laisser le garrot visible.' },
      { title: 'Surveiller', text: 'Reprise du saignement, état de choc, douleur. Transmettre l’heure à chaque passage de relais.' },
    ],
    redFlags: ['Reprise du saignement sous garrot', 'Garrot posé depuis plus de 2 heures', 'État de choc associé'],
    transmit: ['Heure exacte de pose', 'Localisation', 'Nombre de garrots', 'Efficacité', 'Constantes'],
    related: ['hemorragie', 'choc', 'avp', 'trauma'],
    source: 'Références techniques nationales PSE — garrot tourniquet.',
  },

  {
    id: 'choc',
    cat: 'circu',
    title: 'État de choc',
    abbr: 'Choc',
    icon: 'activity',
    severity: 'critical',
    desc: 'Défaillance circulatoire aiguë : les organes ne reçoivent plus assez de sang oxygéné.',
    tags: ['choc', 'hypovolémie', 'marbrures', 'collapsus', 'anaphylactique', 'septique'],
    summary:
      'Le choc ne commence pas quand la tension chute : la tension chute quand le choc est déjà installé. Les signes précoces sont la tachycardie, l’allongement du TRC, les marbrures et l’angoisse — tous visibles avec un brassard dans la poche.',
    blocks: [
      {
        title: 'Signes précoces',
        level: 'warn',
        items: [
          'Tachycardie, pouls filant.',
          'TRC > 3 secondes.',
          'Marbrures, d’abord aux genoux.',
          'Pâleur, extrémités froides, sueurs.',
          'Soif intense, angoisse, agitation.',
        ],
      },
      {
        title: 'Signes tardifs',
        level: 'danger',
        items: [
          'PAS < 90 mmHg.',
          'Somnolence puis troubles de conscience.',
          'Polypnée superficielle.',
          'Chute de la diurèse rapportée.',
        ],
      },
      {
        title: 'Les grandes causes',
        level: 'info',
        items: [
          'Hypovolémique : hémorragie, brûlure étendue, déshydratation, vomissements ou diarrhées profuses.',
          'Cardiogénique : infarctus, trouble du rythme, OAP.',
          'Anaphylactique : allergie sévère, urticaire, œdème, bronchospasme.',
          'Septique : infection, fièvre ou hypothermie, marbrures.',
          'Neurogénique : lésion médullaire haute, avec bradycardie paradoxale.',
        ],
      },
      {
        title: 'Position',
        level: 'warn',
        text:
          'Décubitus dorsal avec jambes surélevées dans le choc hypovolémique. MAIS : demi-assis si détresse respiratoire ou choc cardiogénique, et strictement à plat sans surélévation en cas de traumatisme du rachis ou du bassin. La position suit la cause.',
      },
    ],
    steps: [
      { title: 'Traiter la cause', text: 'Arrêter l’hémorragie avant tout autre geste, si elle est en cause.' },
      { title: 'Allonger', text: 'Jambes surélevées si hypovolémie et absence de contre-indication.' },
      { title: 'Oxygéner', text: 'Selon le protocole et la SpO₂.' },
      { title: 'Protéger thermiquement', text: 'Couvrir : l’hypothermie aggrave les troubles de la coagulation.' },
      { title: 'Ne rien faire boire', text: 'Même si la victime a très soif : risque d’inhalation et d’anesthésie prochaine.' },
      { title: 'Surveiller', text: 'FC, PA, TRC, conscience toutes les 5 minutes, et noter la tendance.' },
    ],
    redFlags: [
      'PAS < 90 mmHg',
      'FC > 120/min',
      'TRC > 3 s avec marbrures',
      'Troubles de conscience',
      'Absence de pouls radial avec pouls carotidien perçu',
    ],
    transmit: ['Cause suspectée', 'Constantes complètes et leur évolution', 'Gestes réalisés et heure', 'Quantité de sang perdue estimée', 'Allergies et traitements'],
    related: ['hemorragie', 'trc', 'pa', 'fc', 'anaphylaxie'],
    source: 'Références techniques nationales PSE — détresse circulatoire.',
  },

  {
    id: 'douleur-thoracique',
    cat: 'circu',
    title: 'Douleur thoracique',
    abbr: 'SCA',
    icon: 'heartPulse',
    severity: 'critical',
    desc: 'Toute douleur thoracique est un syndrome coronarien aigu jusqu’à preuve du contraire.',
    tags: ['infarctus', 'SCA', 'angine de poitrine', 'douleur thoracique', 'coronaire'],
    summary:
      'Le muscle cardiaque privé de sang meurt en quelques dizaines de minutes. Le temps est du muscle : la seule chose qui compte sur place est de reconnaître, immobiliser, oxygéner si besoin et transmettre vite.',
    blocks: [
      {
        title: 'Douleur typique',
        level: 'danger',
        items: [
          'Rétrosternale, en étau, constrictive.',
          'Irradiant vers le bras gauche, la mâchoire, le dos ou les deux bras.',
          'Durant plus de 20 minutes, non calmée par le repos.',
          'Accompagnée de sueurs, nausées, angoisse, pâleur.',
        ],
      },
      {
        title: 'Formes atypiques — à connaître absolument',
        level: 'danger',
        items: [
          'Femme : fatigue inhabituelle, nausées, douleur dorsale ou épigastrique.',
          'Diabétique : douleur absente ou minime (neuropathie).',
          'Personne âgée : confusion, chute, essoufflement isolé.',
          'Douleur cotée 2 ou 3/10 : l’intensité ne présume pas de la gravité.',
        ],
      },
      {
        title: 'Autres causes à ne pas manquer',
        level: 'warn',
        items: [
          'Embolie pulmonaire : douleur brutale, dyspnée, contexte d’immobilisation ou de chirurgie récente.',
          'Dissection aortique : douleur en coup de poignard migrant vers le dos, asymétrie tensionnelle.',
          'Pneumothorax : douleur latérale brutale, dyspnée, sujet jeune et longiligne.',
          'Péricardite : douleur majorée en position allongée, soulagée penché en avant.',
        ],
      },
      {
        title: 'Règle du repos strict',
        level: 'danger',
        text:
          'Ne jamais faire marcher une victime suspecte de syndrome coronarien, pas même pour rejoindre le brancard. L’effort augmente la consommation d’oxygène du myocarde et peut déclencher un trouble du rythme mortel.',
      },
    ],
    steps: [
      { title: 'Repos strict', text: 'Position demi-assise, aucun effort, aucun déplacement actif.' },
      { title: 'Rassurer', text: 'Calmer l’angoisse, qui augmente le travail cardiaque.' },
      { title: 'Oxygéner si indiqué', text: 'Seulement si SpO₂ < 94 % : l’oxygène systématique n’est plus recommandé.' },
      { title: 'Mesurer', text: 'PA aux deux bras, FC, SpO₂, glycémie. Noter l’heure exacte du début de la douleur.' },
      { title: 'Transmettre vite', text: 'Bilan précoce à la régulation : orientation et traitement dépendent du délai.' },
      { title: 'Anticiper', text: 'Préparer le DAE à proximité : le risque d’arrêt cardiaque est maximal dans la première heure.' },
    ],
    redFlags: [
      'Douleur durant plus de 20 minutes',
      'Sueurs, pâleur, malaise associés',
      'Hypotension ou troubles du rythme',
      'Dyspnée ou signes d’OAP',
      'Syncope',
    ],
    transmit: ['Heure exacte de début', 'OPQRST complet', 'PA aux deux bras', 'SpO₂', 'Antécédents cardiaques', 'Traitements (anticoagulant, dérivé nitré)', 'Facteurs de risque'],
    related: ['douleur', 'acr', 'oap', 'dae', 'pa'],
    source: 'Références techniques nationales PSE — douleur thoracique et détresse circulatoire.',
  },

  {
    id: 'avc',
    cat: 'neuro',
    title: 'Accident vasculaire cérébral',
    abbr: 'AVC',
    icon: 'brain',
    severity: 'critical',
    desc: 'Déficit neurologique brutal : chaque minute perdue détruit des neurones.',
    tags: ['AVC', 'FAST', 'VITE', 'paralysie', 'aphasie', 'thrombolyse', 'hémiplégie'],
    summary:
      'L’AVC est une urgence de délai, pas de geste. Le seul élément que le secouriste apporte et que personne d’autre ne pourra retrouver, c’est l’HEURE EXACTE de début des signes. Elle conditionne l’accès à la thrombolyse.',
    blocks: [
      {
        title: 'Test VITE',
        level: 'danger',
        items: [
          'V — Visage : demander de sourire. La bouche est-elle déviée ?',
          'I — Incapacité : demander de lever les deux bras. Un bras tombe-t-il ?',
          'T — Trouble de la parole : faire répéter une phrase simple. Est-elle déformée ou incompréhensible ?',
          'E — En urgence : un seul signe positif suffit à alerter immédiatement.',
        ],
      },
      {
        title: 'Autres signes',
        level: 'warn',
        items: [
          'Trouble visuel brutal, perte d’un champ visuel, vision double.',
          'Vertige intense avec troubles de l’équilibre et de la marche.',
          'Céphalée brutale « en coup de tonnerre » (évoque une hémorragie méningée).',
          'Trouble de la déglutition, engourdissement unilatéral.',
        ],
      },
      {
        title: 'L’heure de début',
        level: 'danger',
        text:
          'Noter l’heure du DERNIER MOMENT où la victime a été vue normale — pas l’heure de découverte. Pour un AVC au réveil, c’est l’heure du coucher qui fait foi. Interroger l’entourage, vérifier l’heure du dernier appel téléphonique ou message si besoin.',
      },
      {
        title: 'Interdits',
        level: 'danger',
        items: [
          'Ne RIEN faire boire ni manger : les troubles de déglutition sont fréquents et invisibles.',
          'Ne pas administrer d’aspirine : le type d’AVC (ischémique ou hémorragique) n’est pas connu sans imagerie.',
          'Ne pas chercher à faire baisser la tension.',
          'Ne pas laisser marcher la victime.',
        ],
      },
      {
        title: 'Régression des signes',
        level: 'warn',
        text:
          'Des signes qui disparaissent en quelques minutes correspondent probablement à un accident ischémique transitoire. Ce n’est PAS rassurant : c’est un signal d’alarme majeur, avec un risque élevé d’AVC constitué dans les jours suivants. Le bilan hospitalier reste urgent.',
      },
    ],
    steps: [
      { title: 'Faire le test VITE', text: 'Visage, Incapacité, Trouble de la parole.' },
      { title: 'Déterminer l’heure', text: 'Dernier moment où la victime était normale. Interroger l’entourage.' },
      { title: 'Installer', text: 'Demi-assis à 30°, ou PLS du côté paralysé si troubles de conscience.' },
      { title: 'Mesurer la glycémie', text: 'Une hypoglycémie peut mimer parfaitement un AVC et se traite en 5 minutes.' },
      { title: 'Ne rien donner', text: 'Aucune boisson, aucun aliment, aucun médicament.' },
      { title: 'Transmettre immédiatement', text: 'Bilan précoce avec l’heure de début : l’orientation vers une unité neurovasculaire en dépend.' },
    ],
    redFlags: [
      'Heure de début inconnue',
      'Troubles de conscience',
      'Céphalée brutale en coup de tonnerre',
      'Vomissements en jet',
      'Trouble de déglutition',
      'Anisocorie',
    ],
    transmit: ['HEURE EXACTE de début ou du dernier moment normal', 'Résultat du test VITE', 'Glasgow', 'Glycémie', 'PA', 'Anticoagulants et antiagrégants', 'Autonomie habituelle'],
    related: ['glasgow', 'gly', 'pupilles', 'inconscience', 'pa'],
    source: 'Références techniques nationales PSE — accident vasculaire cérébral.',
  },

  {
    id: 'epilepsie',
    cat: 'neuro',
    title: 'Crise convulsive',
    abbr: 'Convulsion',
    icon: 'zap',
    severity: 'urgent',
    desc: 'Crise tonico-clonique : protéger sans contraindre, puis prendre en charge la phase post-critique.',
    tags: ['épilepsie', 'convulsion', 'crise', 'tonico-clonique', 'post-critique'],
    summary:
      'Pendant la crise, on ne fait presque rien : on protège la tête, on écarte les objets, on chronomètre. Tout le reste — et l’essentiel du soin — se joue après, pendant la phase post-critique.',
    blocks: [
      {
        title: 'Pendant la crise — ce qu’on NE fait PAS',
        level: 'danger',
        items: [
          'Ne RIEN mettre dans la bouche : ni doigts, ni objet, ni cale-dents. On ne « avale » pas sa langue.',
          'Ne pas maintenir ni contenir les mouvements : risque de fracture et de luxation.',
          'Ne pas tenter de déplacer la victime, sauf danger immédiat.',
          'Ne pas asperger d’eau, ne pas gifler.',
        ],
      },
      {
        title: 'Pendant la crise — ce qu’on fait',
        level: 'info',
        items: [
          'Protéger la tête avec quelque chose de souple.',
          'Écarter les objets dangereux et le mobilier.',
          'Desserrer col et ceinture.',
          'CHRONOMÉTRER : la durée est l’élément décisif.',
          'Préserver l’intimité, écarter les curieux.',
        ],
      },
      {
        title: 'Phase post-critique',
        level: 'warn',
        items: [
          'Confusion, somnolence, amnésie de la crise, céphalée, courbatures : normales, durent de quelques minutes à une heure.',
          'Mise en PLS dès la fin des convulsions.',
          'Perte d’urines et morsure latérale de langue : fréquentes, à noter.',
          'Rassurer : la victime se réveille désorientée et parfois agressive sans le vouloir.',
        ],
      },
      {
        title: 'Rechercher une cause',
        level: 'warn',
        items: [
          'Hypoglycémie — glycémie capillaire systématique.',
          'Fièvre, surtout chez l’enfant.',
          'Traumatisme crânien, arrêt d’un traitement antiépileptique.',
          'Sevrage alcoolique, intoxication, manque de sommeil.',
          'Première crise chez l’adulte : toujours un bilan hospitalier.',
        ],
      },
    ],
    steps: [
      { title: 'Noter l’heure', text: 'Début de la crise. Chronométrer.' },
      { title: 'Sécuriser', text: 'Écarter les objets, protéger la tête, ne pas contenir.' },
      { title: 'Attendre', text: 'Laisser la crise se dérouler. Rien dans la bouche.' },
      { title: 'PLS après la crise', text: 'Dès l’arrêt des convulsions, libérer les voies aériennes et mettre en PLS.' },
      { title: 'Glycémie', text: 'Systématique.' },
      { title: 'Surveiller', text: 'Conscience, respiration, récidive. Rester jusqu’à la reprise complète de conscience.' },
    ],
    redFlags: [
      'Crise de plus de 5 minutes',
      'Crises successives sans reprise de conscience',
      'Première crise',
      'Crise chez une femme enceinte',
      'Absence de reprise de conscience après 20 minutes',
      'Traumatisme pendant la crise',
    ],
    transmit: ['Heure de début et DURÉE', 'Description : type de mouvements, un ou deux côtés', 'Perte d’urines, morsure de langue', 'Épilepsie connue et traitement', 'Glycémie', 'État de conscience à l’arrivée'],
    related: ['etat-mal', 'gly', 'inconscience', 'glasgow', 'pedia-convulsion'],
    source: 'Références techniques nationales PSE — crise convulsive.',
  },

  {
    id: 'etat-mal',
    cat: 'neuro',
    title: 'État de mal épileptique',
    abbr: 'État de mal',
    icon: 'alert',
    severity: 'critical',
    desc: 'Crise prolongée ou crises répétées sans reprise de conscience : urgence vitale.',
    tags: ['état de mal', 'crise prolongée', 'épilepsie', 'urgence'],
    summary:
      'Au-delà de 5 minutes, une crise ne s’arrête plus seule et le cerveau commence à souffrir. L’état de mal est une urgence vitale qui nécessite un traitement médicamenteux urgent : le rôle du secouriste est de le reconnaître vite et de le dire clairement.',
    blocks: [
      {
        title: 'Définition opérationnelle',
        level: 'danger',
        items: [
          'Crise tonico-clonique qui dure plus de 5 minutes.',
          'OU crises successives sans reprise de conscience entre elles.',
        ],
      },
      {
        title: 'Conséquences',
        level: 'danger',
        items: [
          'Hypoxie par ventilation inefficace pendant la crise.',
          'Hyperthermie, acidose, souffrance neuronale.',
          'Risque d’inhalation, traumatismes liés aux convulsions.',
          'Mortalité et séquelles proportionnelles à la durée.',
        ],
      },
      {
        title: 'Formes trompeuses',
        level: 'warn',
        text:
          'L’état de mal peut devenir non convulsivant : les mouvements cessent mais la victime reste inconsciente ou confuse de façon prolongée. Une absence de réveil au-delà de 20 à 30 minutes après une crise doit faire évoquer cette forme et être transmise.',
      },
    ],
    steps: [
      { title: 'Chronométrer', text: 'Dès la première seconde. Au-delà de 5 minutes : annoncer un état de mal.' },
      { title: 'Alerter en urgence', text: 'Bilan immédiat à la régulation, demande de renfort médicalisé.' },
      { title: 'Protéger', text: 'Tête, voies aériennes, écarter les dangers, ne pas contenir.' },
      { title: 'Oxygéner', text: 'Dès que possible, à haute concentration.' },
      { title: 'Glycémie', text: 'Systématique — l’hypoglycémie prolongée donne le même tableau.' },
      { title: 'Préparer l’aspiration', text: 'Vomissements et hypersécrétion fréquents.' },
    ],
    redFlags: ['Durée > 5 minutes', 'Crises en salves', 'Cyanose pendant la crise', 'Hyperthermie', 'Femme enceinte (éclampsie)'],
    transmit: ['Heure de début et durée totale', 'Nombre de crises', 'Reprise de conscience entre les crises ou non', 'Traitement de fond', 'Glycémie', 'SpO₂'],
    related: ['epilepsie', 'gly', 'inconscience', 'accouchement'],
    source: 'Références techniques nationales PSE — crise convulsive prolongée.',
  },

  {
    id: 'trauma-cranien',
    cat: 'neuro',
    title: 'Traumatisme crânien',
    abbr: 'TC',
    icon: 'helmet',
    severity: 'urgent',
    desc: 'Surveillance neurologique et recherche de signes d’aggravation après un choc à la tête.',
    tags: ['traumatisme crânien', 'TC', 'commotion', 'hématome', 'anticoagulant', 'rachis'],
    summary:
      'Le danger du traumatisme crânien n’est pas toujours immédiat. Un saignement intracrânien peut se constituer progressivement : une victime qui va bien à H0 peut se dégrader à H2. La surveillance et la consigne de surveillance comptent autant que le bilan initial.',
    blocks: [
      {
        title: 'Signes d’alerte immédiats',
        level: 'danger',
        items: [
          'Perte de connaissance, même brève.',
          'Glasgow < 15 ou qui diminue.',
          'Vomissements répétés, en jet.',
          'Céphalée intense et croissante.',
          'Convulsion.',
          'Anisocorie ou déficit moteur.',
          'Écoulement de sang ou de liquide clair par le nez ou l’oreille.',
        ],
      },
      {
        title: 'Terrains à risque majeur',
        level: 'danger',
        items: [
          'Traitement anticoagulant ou antiagrégant : un saignement minime devient grave.',
          'Personne âgée : le cerveau atrophié laisse la place à un hématome qui s’exprime tardivement.',
          'Alcoolisation : masque les signes et augmente le risque.',
          'Enfant de moins de 2 ans.',
        ],
      },
      {
        title: 'Rachis cervical',
        level: 'warn',
        text:
          'Tout traumatisme crânien significatif fait suspecter une lésion du rachis cervical. Maintien de l’axe tête-cou-tronc, immobilisation selon le protocole, et pas de mobilisation inutile.',
      },
      {
        title: 'Mécanisme à faire préciser',
        level: 'info',
        items: [
          'Hauteur de chute, nature du sol.',
          'Vitesse en cas d’accident, port du casque ou de la ceinture.',
          'Chute provoquée par un malaise ? Chercher la cause avant le traumatisme.',
        ],
      },
    ],
    steps: [
      { title: 'Immobiliser', text: 'Maintien de l’axe tête-cou-tronc dès la prise en charge.' },
      { title: 'Évaluer', text: 'Glasgow détaillé, pupilles, motricité et sensibilité des quatre membres.' },
      { title: 'Rechercher', text: 'Plaie, hématome, écoulement nasal ou auriculaire, autres lésions.' },
      { title: 'Interroger', text: 'Perte de connaissance, amnésie, anticoagulants, alcool, circonstances.' },
      { title: 'Surveiller', text: 'Glasgow et pupilles toutes les 5 minutes ; noter chaque évaluation avec son heure.' },
      { title: 'Transmettre toute dégradation', text: 'Une baisse de 2 points de Glasgow est une urgence.' },
    ],
    redFlags: [
      'Glasgow qui diminue',
      'Anisocorie',
      'Vomissements répétés',
      'Convulsion',
      'Écoulement de liquide clair par le nez ou l’oreille',
      'Anticoagulant en cours',
    ],
    transmit: ['Mécanisme et énergie du choc', 'Perte de connaissance et durée', 'Glasgow initial ET évolution horodatée', 'Pupilles', 'Anticoagulants', 'Lésions associées'],
    related: ['glasgow', 'pupilles', 'inconscience', 'trauma', 'avp'],
    source: 'Références techniques nationales PSE — traumatisme crânien.',
  },
];
