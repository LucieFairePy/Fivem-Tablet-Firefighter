export const PATHOLOGIES_CARDS = [

  {
    id: 'malaise',
    cat: 'malaises',
    title: 'Malaise et perte de connaissance brève',
    abbr: 'Malaise',
    icon: 'user',
    severity: 'urgent',
    desc: 'Sensation pénible transitoire, avec ou sans perte de connaissance : chercher la cause grave.',
    tags: ['malaise', 'syncope', 'lipothymie', 'vagal', 'perte de connaissance'],
    summary:
      'Un malaise est un symptôme, pas un diagnostic. La question n’est jamais « est-ce grave ? » mais « quelle cause faut-il éliminer ? ». Un malaise vagal chez un jeune debout dans une file d’attente et une syncope à l’effort chez un quinquagénaire n’ont rien à voir.',
    blocks: [
      {
        title: 'Causes à éliminer en priorité',
        level: 'danger',
        items: [
          'Cardiaque : trouble du rythme, infarctus. Syncope à l’effort ou sans prodrome.',
          'Hypoglycémie : sueurs, confusion, faim. Glycémie systématique.',
          'Hémorragie interne : pâleur, tachycardie, douleur abdominale.',
          'Neurologique : AVC, crise convulsive.',
          'Embolie pulmonaire : dyspnée associée.',
        ],
      },
      {
        title: 'Malaise vagal — profil rassurant',
        level: 'ok',
        items: [
          'Prodromes : chaleur, nausées, vision qui se voile, bourdonnements.',
          'Circonstances : station debout prolongée, chaleur, douleur, émotion, vue du sang.',
          'Récupération rapide et complète en position allongée.',
          'Reste à confirmer par un avis médical : le diagnostic d’élimination se pose après.',
        ],
      },
      {
        title: 'Signes qui doivent inquiéter',
        level: 'danger',
        items: [
          'Syncope survenue à l’effort, ou en position allongée.',
          'Absence totale de prodrome (chute « comme une masse »).',
          'Traumatisme important lié à la chute, signe d’une perte de connaissance brutale.',
          'Douleur thoracique, dyspnée ou palpitations associées.',
          'Antécédents cardiaques ou mort subite dans la famille.',
          'Récupération lente ou incomplète.',
        ],
      },
      {
        title: 'Méthode SAMPLE',
        level: 'info',
        items: [
          'S — Signes et symptômes',
          'A — Allergies',
          'M — Médicaments',
          'P — Passé médical',
          'L — Last meal : dernier repas',
          'E — Événements ayant précédé',
        ],
      },
    ],
    steps: [
      { title: 'Allonger', text: 'Jambes surélevées si le malaise est vagal et qu’il n’y a pas de détresse respiratoire.' },
      { title: 'Constantes complètes', text: 'FC, PA, SpO₂, glycémie, température, Glasgow.' },
      { title: 'Interroger', text: 'SAMPLE complet et circonstances exactes du malaise.' },
      { title: 'Chercher un traumatisme', text: 'La chute a-t-elle causé une blessure ? Une plaie du cuir chevelu ?' },
      { title: 'Surveiller', text: 'Récidive, évolution des constantes, reprise complète de l’état antérieur.' },
    ],
    redFlags: [
      'Syncope à l’effort',
      'Absence de prodrome',
      'Douleur thoracique associée',
      'PAS < 90 mmHg',
      'Déficit neurologique persistant',
      'Récidive dans la même journée',
    ],
    transmit: ['Circonstances précises', 'Prodromes', 'Durée de la perte de connaissance', 'Constantes complètes', 'SAMPLE', 'Traumatisme lié à la chute'],
    related: ['gly', 'inconscience', 'douleur-thoracique', 'choc', 'avc'],
    source: 'Références techniques nationales PSE — malaise et aggravation d’une maladie.',
  },

  {
    id: 'anaphylaxie',
    cat: 'malaises',
    title: 'Réaction allergique et anaphylaxie',
    abbr: 'Anaphylaxie',
    icon: 'alertCircle',
    severity: 'critical',
    desc: 'De l’urticaire simple au choc anaphylactique : reconnaître le basculement.',
    tags: ['allergie', 'anaphylaxie', 'urticaire', 'œdème de Quincke', 'adrénaline', 'auto-injecteur'],
    summary:
      'Une allergie devient une anaphylaxie dès qu’un second système est atteint : peau ET respiration, ou peau ET circulation. À ce moment-là, l’adrénaline auto-injectable devient urgente et chaque minute compte.',
    blocks: [
      {
        title: 'Atteinte cutanée seule',
        level: 'warn',
        items: [
          'Urticaire, plaques rouges en relief, démangeaisons.',
          'Rougeur, sensation de chaleur.',
          'Surveillance rapprochée : la réaction peut s’étendre en quelques minutes.',
        ],
      },
      {
        title: 'Anaphylaxie — urgence vitale',
        level: 'danger',
        items: [
          'Respiratoire : gêne à la déglutition, voix modifiée, sifflements, œdème du visage, de la langue ou de la gorge.',
          'Circulatoire : hypotension, tachycardie, pâleur, malaise, perte de connaissance.',
          'Digestive : douleurs abdominales, vomissements, diarrhée.',
          'Deux systèmes atteints = anaphylaxie, même sans éruption cutanée visible.',
        ],
      },
      {
        title: 'Auto-injecteur d’adrénaline',
        level: 'danger',
        items: [
          'Face externe de la CUISSE, à travers le vêtement si nécessaire.',
          'Maintenir l’appareil appuyé selon la durée indiquée par le fabricant.',
          'Noter l’heure. Une seconde injection est possible après 5 à 15 minutes si les signes persistent.',
          'Conserver le dispositif utilisé et le remettre à l’équipe médicale.',
        ],
      },
      {
        title: 'Position',
        level: 'warn',
        text:
          'Allongé jambes surélevées en cas d’hypotension. Assis si la gêne respiratoire domine. Ne JAMAIS remettre brutalement debout une victime en anaphylaxie, même si elle se sent mieux : le retour veineux brutal peut provoquer un arrêt.',
      },
      {
        title: 'Réaction biphasique',
        level: 'warn',
        text:
          'Les signes peuvent réapparaître 4 à 12 heures après une première amélioration, sans nouvelle exposition. Une surveillance hospitalière est nécessaire même après une réponse spectaculaire à l’adrénaline.',
      },
    ],
    steps: [
      { title: 'Écarter l’allergène', text: 'Retirer le dard, arrêter la perfusion ou l’aliment, éloigner de la source.' },
      { title: 'Évaluer les systèmes', text: 'Peau, respiration, circulation, digestif. Deux atteints = anaphylaxie.' },
      { title: 'Adrénaline si anaphylaxie', text: 'Aider à l’auto-injection dans la cuisse, sans délai. Noter l’heure.' },
      { title: 'Installer', text: 'Allongé jambes surélevées, ou assis si détresse respiratoire.' },
      { title: 'Oxygéner', text: 'Selon SpO₂ et signes de détresse.' },
      { title: 'Surveiller sans relâche', text: 'L’aggravation peut être brutale. Préparer le matériel de réanimation.' },
    ],
    redFlags: [
      'Œdème du visage, de la langue ou de la gorge',
      'Modification de la voix, gêne à la déglutition',
      'Sifflements respiratoires',
      'Hypotension, malaise',
      'Antécédent d’anaphylaxie sévère',
    ],
    transmit: ['Allergène suspecté et heure d’exposition', 'Systèmes atteints', 'Heure d’injection de l’adrénaline', 'Nombre d’injections', 'Constantes et évolution'],
    related: ['choc', 'asthme', 'detresse-resp', 'medic'],
    source: 'Références techniques nationales PSE — réaction allergique grave.',
  },

  {
    id: 'douleur-abdo',
    cat: 'malaises',
    title: 'Douleur abdominale',
    abbr: 'Abdomen',
    icon: 'alertCircle',
    severity: 'urgent',
    desc: 'Orientation devant une douleur du ventre, et signes imposant une évacuation urgente.',
    tags: ['abdomen', 'ventre', 'péritonite', 'occlusion', 'appendicite', 'anévrisme'],
    summary:
      'Le ventre cache des urgences vasculaires, chirurgicales et gynécologiques. Un abdomen dur comme du bois, une douleur brutale « en coup de poignard », ou une douleur abdominale avec pâleur et tachycardie sont des urgences, quelle que soit l’intensité déclarée.',
    blocks: [
      {
        title: 'Signes de gravité',
        level: 'danger',
        items: [
          'Ventre dur, tendu, « de bois » : défense ou contracture.',
          'Douleur brutale et maximale d’emblée.',
          'Pâleur, sueurs, tachycardie, hypotension : hémorragie interne.',
          'Arrêt des gaz et des selles, vomissements répétés : occlusion.',
          'Masse abdominale battante chez une personne âgée : anévrisme de l’aorte.',
          'Sang dans les vomissements ou les selles.',
        ],
      },
      {
        title: 'Ne jamais oublier chez la femme',
        level: 'danger',
        text:
          'Toute douleur abdominale chez une femme en âge de procréer est une grossesse extra-utérine jusqu’à preuve du contraire. Demander la date des dernières règles. Douleur pelvienne + retard de règles + malaise = urgence vitale.',
      },
      {
        title: 'Interdits',
        level: 'warn',
        items: [
          'Ne rien faire boire ni manger : une intervention chirurgicale est possible.',
          'Ne pas administrer d’antalgique de sa propre initiative.',
          'Ne pas appliquer de chaleur sur le ventre.',
          'Ne pas donner de laxatif en cas de suspicion d’occlusion.',
        ],
      },
      {
        title: 'Douleurs trompeuses',
        level: 'info',
        items: [
          'Un infarctus inférieur se manifeste souvent par une douleur épigastrique avec nausées.',
          'Chez la personne âgée et le diabétique, la douleur peut être minime malgré une péritonite.',
          'Chez l’enfant, une appendicite peut débuter par une douleur péri-ombilicale banale.',
        ],
      },
    ],
    steps: [
      { title: 'Installer', text: 'Position antalgique choisie par la victime, souvent jambes repliées.' },
      { title: 'Caractériser', text: 'OPQRST, localisation précise, irradiation, facteurs déclenchants.' },
      { title: 'Interroger', text: 'Transit, vomissements, fièvre, dernières règles, antécédents chirurgicaux.' },
      { title: 'Constantes', text: 'FC, PA, TRC, température, glycémie. Rechercher un état de choc débutant.' },
      { title: 'Rien par la bouche', text: 'Ni eau, ni aliment, ni médicament.' },
      { title: 'Transmettre', text: 'Avec les éléments d’orientation, surtout en présence de signes de gravité.' },
    ],
    redFlags: [
      'Abdomen dur, défense',
      'Douleur brutale maximale d’emblée',
      'Pâleur et tachycardie',
      'Masse battante',
      'Retard de règles avec douleur pelvienne',
      'Vomissements sanglants',
    ],
    transmit: ['Localisation et irradiation', 'Heure et mode de début', 'Transit, vomissements, fièvre', 'Dernières règles', 'Antécédents chirurgicaux', 'Constantes'],
    related: ['choc', 'douleur', 'urgences-grossesse', 'douleur-thoracique'],
    source: 'Références techniques nationales PSE — malaise et aggravation d’une maladie.',
  },

  {
    id: 'trauma',
    cat: 'trauma',
    title: 'Traumatisme des membres',
    abbr: 'Trauma',
    icon: 'bone',
    severity: 'urgent',
    desc: 'Fractures, luxations et entorses : immobiliser, évaluer la vascularisation, ne pas réduire.',
    tags: ['fracture', 'luxation', 'entorse', 'immobilisation', 'attelle', 'membre'],
    summary:
      'Sur le terrain, on ne fait pas la différence entre une fracture et une entorse grave, et ce n’est pas le sujet. Le sujet est : le membre est-il correctement vascularisé, et l’immobilisation empêche-t-elle l’aggravation ?',
    blocks: [
      {
        title: 'Évaluation vasculo-nerveuse — avant ET après',
        level: 'danger',
        items: [
          'Pouls en aval de la lésion.',
          'Chaleur et coloration des extrémités.',
          'Temps de recoloration du doigt ou de l’orteil.',
          'Sensibilité et motricité distales.',
          'Toute anomalie est une urgence : le transmettre immédiatement.',
        ],
      },
      {
        title: 'Signes de fracture',
        level: 'warn',
        items: [
          'Déformation, raccourcissement, rotation anormale du membre.',
          'Impotence fonctionnelle totale.',
          'Douleur exquise à un point précis.',
          'Craquement perçu au moment du traumatisme.',
          'Œdème et hématome rapides.',
        ],
      },
      {
        title: 'Règles d’immobilisation',
        level: 'info',
        items: [
          'Immobiliser dans la position trouvée, sauf détresse vasculaire.',
          'Bloquer l’articulation sus-jacente ET sous-jacente.',
          'Ne JAMAIS tenter de réduire une fracture ou une luxation.',
          'Rembourrer les zones de contact pour éviter les points de compression.',
          'Retirer bagues et bijoux avant l’œdème.',
        ],
      },
      {
        title: 'Fracture ouverte',
        level: 'danger',
        text:
          'Plaie en regard du foyer de fracture, os visible ou non. Ne pas chercher à réintroduire l’os. Couvrir d’un pansement stérile humide, immobiliser, évacuation urgente : le risque infectieux est majeur et le délai compte.',
      },
      {
        title: 'Situations à part',
        level: 'warn',
        items: [
          'Fémur : hémorragie interne possible de 1 à 1,5 litre. Surveiller l’état de choc.',
          'Bassin : jusqu’à 3 litres. Ne pas mobiliser, ne pas tester la stabilité.',
          'Amputation : garrot, puis conserver le segment amputé au sec, dans un sac propre, lui-même placé au frais sans contact direct avec la glace.',
        ],
      },
    ],
    steps: [
      { title: 'Bilan vasculo-nerveux', text: 'Pouls, coloration, chaleur, sensibilité, motricité en aval. Noter le résultat.' },
      { title: 'Ne pas mobiliser', text: 'Immobiliser dans la position trouvée.' },
      { title: 'Immobiliser', text: 'Attelle adaptée, englobant les articulations sus- et sous-jacentes.' },
      { title: 'Refroidir', text: 'Froid indirect (jamais de glace au contact direct de la peau).' },
      { title: 'Recontrôler', text: 'Bilan vasculo-nerveux APRÈS immobilisation. Toute dégradation impose de desserrer.' },
      { title: 'Surélever', text: 'Le membre si possible, pour limiter l’œdème.' },
    ],
    redFlags: [
      'Pouls distal absent',
      'Extrémité froide, pâle ou cyanosée',
      'Perte de sensibilité ou de motricité',
      'Fracture ouverte',
      'Fracture du fémur ou du bassin',
      'Douleur sous plâtre ou attelle qui augmente',
    ],
    transmit: ['Mécanisme', 'Localisation', 'Déformation', 'Bilan vasculo-nerveux AVANT et APRÈS', 'Heure', 'Immobilisation réalisée'],
    related: ['rachis', 'plaie', 'hemorragie', 'douleur', 'avp'],
    source: 'Références techniques nationales PSE — traumatismes des membres.',
  },

  {
    id: 'rachis',
    cat: 'trauma',
    title: 'Traumatisme du rachis',
    abbr: 'Rachis',
    icon: 'bone',
    severity: 'critical',
    desc: 'Suspicion de lésion vertébrale ou médullaire : immobilisation stricte de l’axe tête-cou-tronc.',
    tags: ['rachis', 'colonne', 'cervical', 'médullaire', 'axe tête-cou-tronc', 'collier'],
    summary:
      'Une lésion médullaire ne se voit pas toujours au premier bilan. Elle peut être créée ou aggravée par une mobilisation maladroite. Devant un mécanisme à risque, on immobilise d’abord et on se pose les questions ensuite.',
    blocks: [
      {
        title: 'Mécanismes à risque',
        level: 'danger',
        items: [
          'Chute d’une hauteur supérieure à la taille de la victime.',
          'Accident de la circulation à cinétique élevée, éjection, tonneau.',
          'Plongeon en eau peu profonde.',
          'Traumatisme crânien significatif.',
          'Choc direct sur la colonne, écrasement.',
          'Toute victime traumatisée inconsciente.',
        ],
      },
      {
        title: 'Signes évocateurs',
        level: 'danger',
        items: [
          'Douleur spontanée ou à la palpation d’une vertèbre.',
          'Fourmillements, engourdissement, décharges électriques.',
          'Faiblesse ou paralysie d’un ou plusieurs membres.',
          'Perte du contrôle des sphincters.',
          'Priapisme chez l’homme : signe de lésion médullaire haute.',
          'Respiration exclusivement abdominale.',
        ],
      },
      {
        title: 'Choc neurogénique',
        level: 'warn',
        text:
          'Une lésion médullaire haute peut donner une hypotension AVEC bradycardie et une peau chaude et sèche — l’inverse du choc hémorragique. Ne pas conclure à l’absence de choc parce que le pouls est lent.',
      },
      {
        title: 'Principes de mobilisation',
        level: 'info',
        items: [
          'Maintien manuel de l’axe tête-cou-tronc dès le premier contact, sans interruption.',
          'Le maintien ne se relâche qu’une fois le dispositif d’immobilisation complet en place.',
          'Commandement unique : une seule personne dirige la manœuvre, celle qui tient la tête.',
          'Retrait du casque à deux secouristes, selon la technique enseignée.',
        ],
      },
      {
        title: 'Exception — dégagement d’urgence',
        level: 'danger',
        text:
          'En cas de danger vital immédiat (incendie, risque d’explosion, nécessité d’accéder à une détresse vitale), le dégagement d’urgence prime sur l’immobilisation parfaite. Le risque du danger dépasse alors le risque de la mobilisation.',
      },
    ],
    steps: [
      { title: 'Maintenir', text: 'Axe tête-cou-tronc manuellement, dès l’abord, sans lâcher.' },
      { title: 'Évaluer', text: 'Conscience, respiration, puis sensibilité et motricité des quatre membres.' },
      { title: 'Interroger', text: 'Douleur rachidienne, fourmillements, faiblesse. Noter précisément.' },
      { title: 'Immobiliser', text: 'Selon le protocole et le matériel du service, sans relâcher le maintien manuel avant la fin.' },
      { title: 'Relever à plusieurs', text: 'Manœuvre commandée par la personne qui tient la tête.' },
      { title: 'Réévaluer', text: 'Sensibilité et motricité après chaque mobilisation, et le noter.' },
    ],
    redFlags: [
      'Déficit sensitif ou moteur',
      'Douleur rachidienne à la palpation',
      'Priapisme',
      'Respiration abdominale isolée',
      'Hypotension avec bradycardie',
      'Victime traumatisée inconsciente',
    ],
    transmit: ['Mécanisme et cinétique', 'Déficit initial et son évolution', 'Niveau sensitif si identifiable', 'Constantes', 'Matériel d’immobilisation utilisé'],
    related: ['trauma-cranien', 'trauma', 'avp', 'degagement'],
    source: 'Références techniques nationales PSE — traumatismes du rachis.',
  },

  {
    id: 'plaie',
    cat: 'trauma',
    title: 'Plaies et corps étrangers',
    abbr: 'Plaie',
    icon: 'bandage',
    severity: 'standard',
    desc: 'Distinguer plaie simple et plaie grave, et conduite devant un corps étranger.',
    tags: ['plaie', 'corps étranger', 'pansement', 'tétanos', 'morsure'],
    summary:
      'Ce qui classe une plaie comme grave n’est pas sa taille mais sa localisation, son mécanisme et son aspect. Une plaie punctiforme au thorax est plus grave qu’une longue éraflure au bras.',
    blocks: [
      {
        title: 'Plaie grave — critères',
        level: 'danger',
        items: [
          'Localisation : thorax, abdomen, cou, œil, face, organes génitaux, articulation.',
          'Mécanisme : arme, outil, objet souillé, morsure, projection à haute pression.',
          'Aspect : profonde, étendue, délabrée, avec perte de substance.',
          'Saignement abondant ou impossible à contrôler.',
          'Terrain : diabétique, immunodéprimé, anticoagulant.',
        ],
      },
      {
        title: 'Corps étranger',
        level: 'danger',
        text:
          'Ne JAMAIS retirer un corps étranger pénétrant : il fait office de bouchon et son retrait peut déclencher une hémorragie massive ou aggraver la lésion. L’immobiliser en place, matelasser autour, et ne pas appuyer dessus.',
      },
      {
        title: 'Plaie du thorax',
        level: 'danger',
        text:
          'Une plaie soufflante du thorax fait entrer l’air dans la plèvre. Installer en position demi-assise, surveiller de très près l’apparition d’une détresse respiratoire, et appliquer le protocole du service concernant le pansement.',
      },
      {
        title: 'Plaie de l’abdomen',
        level: 'danger',
        text:
          'En cas d’éviscération, ne jamais tenter de réintroduire les organes. Les couvrir d’un pansement stérile humide, installer la victime à plat avec les jambes fléchies pour détendre la paroi.',
      },
      {
        title: 'Plaie simple',
        level: 'ok',
        items: [
          'Se laver les mains, mettre des gants.',
          'Nettoyer à l’eau et au savon, rincer.',
          'Protéger par un pansement adhésif.',
          'Vérifier la vaccination antitétanique et conseiller un avis médical si elle date de plus de 5 ans, ou en cas de plaie souillée.',
        ],
      },
    ],
    steps: [
      { title: 'Se protéger', text: 'Gants systématiques.' },
      { title: 'Classer', text: 'Plaie simple ou grave, selon localisation, mécanisme, aspect et terrain.' },
      { title: 'Arrêter le saignement', text: 'Compression directe si nécessaire.' },
      { title: 'Ne pas retirer', text: 'Aucun corps étranger pénétrant.' },
      { title: 'Protéger', text: 'Pansement adapté, sans compression sur un corps étranger.' },
      { title: 'Installer', text: 'Position adaptée à la localisation : demi-assis pour le thorax, jambes fléchies pour l’abdomen.' },
    ],
    redFlags: [
      'Plaie du thorax ou de l’abdomen',
      'Corps étranger pénétrant',
      'Saignement non contrôlé',
      'Plaie de l’œil',
      'Morsure animale ou humaine',
      'Signes d’infection (rougeur, chaleur, traînée rouge, fièvre)',
    ],
    transmit: ['Mécanisme', 'Localisation et taille', 'Corps étranger présent ou non', 'Saignement et moyens employés', 'Vaccination antitétanique', 'Heure de survenue'],
    related: ['hemorragie', 'brulure', 'trauma', 'garrot'],
    source: 'Références techniques nationales PSE — plaies.',
  },

  {
    id: 'brulure',
    cat: 'trauma',
    title: 'Brûlures',
    abbr: 'Brûlure',
    icon: 'flame',
    severity: 'urgent',
    desc: 'Refroidir, évaluer la surface et la profondeur, protéger, surveiller les voies aériennes.',
    tags: ['brûlure', 'refroidissement', 'règle des 9', 'Wallace', 'inhalation de fumées'],
    summary:
      'Deux gestes font tout : refroidir tôt et longtemps, puis protéger du froid. Le danger caché des brûlures de la face et des voies aériennes est l’œdème, qui se constitue en une à deux heures et peut fermer la trachée.',
    blocks: [
      {
        title: 'Refroidissement',
        level: 'danger',
        items: [
          'Eau tempérée, 15 à 25 °C, à faible pression, pendant 10 à 20 minutes.',
          'Commencer le plus tôt possible : au-delà de 30 minutes après la brûlure, le bénéfice devient faible.',
          'Ne pas refroidir au-delà de 20 % de surface corporelle chez l’adulte, ni de façon prolongée chez l’enfant : risque d’hypothermie.',
          'Retirer vêtements et bijoux non adhérents pendant le refroidissement ; laisser en place ce qui adhère.',
        ],
      },
      {
        title: 'Évaluer la surface — règle des 9 (Wallace, adulte)',
        level: 'info',
        items: [
          'Tête et cou : 9 %',
          'Chaque membre supérieur : 9 %',
          'Face avant du tronc : 18 % — face arrière : 18 %',
          'Chaque membre inférieur : 18 %',
          'Organes génitaux : 1 %',
          'Repère de terrain : la paume de la main de la victime, doigts compris, représente environ 1 % de sa surface corporelle.',
        ],
      },
      {
        title: 'Profondeur',
        level: 'info',
        items: [
          '1er degré : rouge, douloureux, sans cloque. Type coup de soleil.',
          '2e degré superficiel : cloques, très douloureux, peau rose sous la cloque.',
          '2e degré profond : cloques, peau pâle, douleur atténuée.',
          '3e degré : cartonné, blanc ou noir, INDOLORE — l’absence de douleur est un signe de gravité.',
        ],
      },
      {
        title: 'Brûlures graves',
        level: 'danger',
        items: [
          'Surface > 10 % chez l’adulte, > 5 % chez l’enfant.',
          'Localisation : face, cou, mains, pieds, plis de flexion, organes génitaux.',
          'Brûlure circulaire d’un membre ou du thorax : effet garrot.',
          'Électrique, chimique, ou par inhalation de fumées.',
          'Terrain : enfant, personne âgée, pathologie chronique.',
        ],
      },
      {
        title: 'Inhalation de fumées — le vrai tueur',
        level: 'danger',
        items: [
          'Suies autour du nez et de la bouche, vibrisses brûlées.',
          'Voix rauque, toux, expectoration noirâtre.',
          'Enfermement dans un local en feu.',
          'L’œdème des voies aériennes se constitue progressivement : une victime qui parle normalement peut s’obstruer une heure plus tard.',
          'Penser systématiquement au monoxyde de carbone et au cyanure.',
        ],
      },
      {
        title: 'Brûlure chimique',
        level: 'warn',
        text:
          'Rinçage abondant et prolongé à l’eau, au moins 20 minutes, en évitant de faire couler le produit sur des zones saines. Retirer les vêtements imprégnés en se protégeant. Ne jamais chercher à neutraliser un acide par une base ou l’inverse. Conserver l’étiquette du produit.',
      },
    ],
    steps: [
      { title: 'Supprimer la cause', text: 'Éteindre, écarter, retirer les vêtements imprégnés.' },
      { title: 'Refroidir', text: 'Eau tempérée 10 à 20 minutes, en surveillant la température de la victime.' },
      { title: 'Évaluer', text: 'Surface (règle des 9 ou paume), profondeur, localisation, mécanisme.' },
      { title: 'Protéger', text: 'Pansement stérile non adhérent ou champ propre. Ne pas percer les cloques.' },
      { title: 'Réchauffer', text: 'Couvrir : après refroidissement, le risque devient l’hypothermie.' },
      { title: 'Surveiller les voies aériennes', text: 'En particulier après inhalation de fumées ou brûlure de la face.' },
    ],
    redFlags: [
      'Brûlure de la face ou du cou',
      'Suies péribuccales, voix rauque',
      'Surface > 10 % adulte ou > 5 % enfant',
      'Brûlure circulaire',
      'Brûlure électrique ou chimique',
      'Brûlure indolore (3e degré)',
    ],
    transmit: ['Agent causal', 'Heure de la brûlure', 'Surface estimée en %', 'Profondeur et localisation', 'Notion d’enfermement ou de fumées', 'Durée du refroidissement', 'Constantes'],
    related: ['co', 'temp', 'detresse-resp', 'plaie', 'choc'],
    source: 'Références techniques nationales PSE — brûlures.',
  },

  {
    id: 'co',
    cat: 'circonst',
    title: 'Intoxication au monoxyde de carbone',
    abbr: 'CO',
    icon: 'cloud',
    severity: 'critical',
    desc: 'Gaz invisible et inodore : l’oxymètre ne le détecte pas, le contexte seul alerte.',
    tags: ['monoxyde', 'CO', 'intoxication', 'chauffage', 'groupe électrogène', 'céphalées'],
    summary:
      'Le CO se fixe sur l’hémoglobine 200 fois mieux que l’oxygène. La victime s’asphyxie avec une SpO₂ affichée à 100 %. Le seul indice fiable est le CONTEXTE : plusieurs personnes malades dans le même local, ou des animaux atteints.',
    blocks: [
      {
        title: 'Le signal d’alarme',
        level: 'danger',
        items: [
          'Plusieurs personnes présentant les mêmes symptômes dans le même lieu.',
          'Symptômes qui s’améliorent en sortant, et réapparaissent en rentrant.',
          'Animaux domestiques également malades ou morts.',
          'Appareil à combustion : chaudière, poêle, brasero, groupe électrogène, barbecue en intérieur.',
        ],
      },
      {
        title: 'Symptômes trompeurs',
        level: 'warn',
        items: [
          'Céphalées, nausées, vertiges, fatigue : souvent pris pour une grippe ou une intoxication alimentaire.',
          'Confusion, troubles du comportement, faiblesse musculaire.',
          'À forte concentration : perte de connaissance brutale, convulsions, arrêt cardiaque.',
          'La coloration « rouge cerise » classique est rare et tardive : ne pas l’attendre.',
        ],
      },
      {
        title: 'Sécurité de l’équipe',
        level: 'danger',
        items: [
          'Le CO tue aussi les secouristes. Ne pas pénétrer sans protection respiratoire adaptée.',
          'Ventiler largement, couper la source de combustion si possible sans risque.',
          'Ne pas créer d’étincelle en cas de suspicion de gaz combustible associé.',
          'Faire sortir toutes les personnes présentes, même asymptomatiques.',
        ],
      },
      {
        title: 'Oxygène',
        level: 'danger',
        text:
          'L’oxygène à haute concentration est LE traitement : il accélère l’élimination du CO. À l’air ambiant la demi-vie du CO est d’environ 4 heures, sous oxygène pur d’environ 1 heure. Administrer largement, même si la SpO₂ affiche 100 %, et maintenir pendant tout le transport.',
      },
      {
        title: 'Femme enceinte',
        level: 'danger',
        text:
          'Le CO traverse le placenta et se concentre chez le fœtus, qui est plus atteint que la mère. Toute femme enceinte exposée doit être évacuée et évaluée, même sans symptôme.',
      },
    ],
    steps: [
      { title: 'Protéger l’équipe', text: 'Protection respiratoire, pas d’entrée sans moyen adapté.' },
      { title: 'Extraire', text: 'Sortir toutes les victimes à l’air libre, y compris les personnes asymptomatiques.' },
      { title: 'Ventiler', text: 'Ouvrir largement, couper la source si l’accès est sûr.' },
      { title: 'Oxygéner', text: 'Haute concentration, sans se fier à la SpO₂ affichée.' },
      { title: 'Compter', text: 'Recenser toutes les personnes exposées, y compris celles qui ont quitté les lieux.' },
      { title: 'Transmettre', text: 'Nature de la source, durée d’exposition, nombre de victimes, présence de femmes enceintes ou d’enfants.' },
    ],
    redFlags: [
      'Perte de connaissance',
      'Troubles neurologiques',
      'Douleur thoracique',
      'Femme enceinte exposée',
      'Plusieurs victimes',
      'SpO₂ normale — ne jamais rassurer sur cette base',
    ],
    transmit: ['Source suspectée', 'Durée d’exposition', 'Nombre de personnes exposées', 'Symptômes de chacune', 'Mesure CO ambiant si disponible', 'Oxygénation débutée et heure'],
    related: ['spo2', 'o2', 'brulure', 'detresse-resp', 'intox'],
    source: 'Références techniques nationales PSE — intoxications par les gaz.',
  },

  {
    id: 'opioides',
    cat: 'circonst',
    title: 'Intoxication aux opioïdes',
    abbr: 'Opioïdes',
    icon: 'pill',
    severity: 'critical',
    desc: 'Triade myosis, bradypnée, coma : une des rares intoxications à antidote immédiat.',
    tags: ['opioïdes', 'overdose', 'morphine', 'héroïne', 'naloxone', 'myosis', 'fentanyl'],
    summary:
      'La triade est presque pathognomonique : pupilles en tête d’épingle, respiration lente ou absente, victime inconsciente. La mort survient par arrêt respiratoire, pas par arrêt cardiaque : ventiler est le geste qui sauve.',
    blocks: [
      {
        title: 'La triade',
        level: 'danger',
        items: [
          'Myosis serré bilatéral — pupilles en tête d’épingle.',
          'Bradypnée, respiration superficielle, ou apnée.',
          'Trouble de conscience allant de la somnolence au coma.',
        ],
      },
      {
        title: 'Contexte évocateur',
        level: 'warn',
        items: [
          'Matériel d’injection, seringues, traces de piqûres.',
          'Traitement antalgique morphinique, patch de fentanyl (chercher le patch sur la peau).',
          'Traitement de substitution : méthadone, buprénorphine.',
          'Antécédents connus, entourage informé.',
        ],
      },
      {
        title: 'Priorité absolue : la ventilation',
        level: 'danger',
        text:
          'C’est l’arrêt respiratoire qui tue. Libérer les voies aériennes et ventiler efficacement corrige l’hypoxie avant même l’antidote. Ne pas attendre la naloxone pour ventiler.',
      },
      {
        title: 'Naloxone',
        level: 'info',
        items: [
          'Antidote spécifique, administré selon le protocole du service et la régulation.',
          'Effet rapide mais de DURÉE PLUS COURTE que celle de la plupart des opioïdes.',
          'La victime peut se ré-endormir et refaire une détresse respiratoire après amélioration : surveillance obligatoire et transport systématique.',
          'Le réveil peut être brutal et agité : prévenir l’équipe, anticiper le syndrome de sevrage.',
        ],
      },
      {
        title: 'Sécurité de l’équipe',
        level: 'warn',
        items: [
          'Risque de piqûre accidentelle : inspecter avant de mobiliser, gants systématiques.',
          'Chercher les patchs de fentanyl et les retirer avec des gants.',
          'Ne jamais fouiller à l’aveugle dans les poches ou sous un matelas.',
        ],
      },
    ],
    steps: [
      { title: 'Sécuriser', text: 'Gants, inspection visuelle avant toute mobilisation, recherche de seringues.' },
      { title: 'Ventiler', text: 'Libération des voies aériennes et ventilation assistée si bradypnée ou apnée. Priorité absolue.' },
      { title: 'Oxygéner', text: 'Haute concentration.' },
      { title: 'Glycémie', text: 'Écarter une hypoglycémie associée.' },
      { title: 'Antidote', text: 'Selon protocole et régulation, sans retarder la ventilation.' },
      { title: 'Surveiller longtemps', text: 'Risque de rechute à la fin de l’effet de l’antidote. Transport systématique.' },
    ],
    redFlags: ['Apnée ou FR < 8/min', 'Cyanose', 'Coma profond', 'Rechute après amélioration', 'Association à d’autres toxiques'],
    transmit: ['Produit suspecté et voie', 'Heure de prise estimée', 'Myosis, FR, Glasgow', 'Antidote administré, dose et heure', 'Évolution après antidote', 'Matériel retrouvé sur place'],
    related: ['pupilles', 'inconscience', 'detresse-resp', 'intox', 'acr'],
    source: 'Références techniques nationales PSE — intoxications.',
  },

  {
    id: 'intox',
    cat: 'circonst',
    title: 'Intoxications',
    abbr: 'Intox',
    icon: 'vial',
    severity: 'urgent',
    desc: 'Conduite générale devant une intoxication médicamenteuse, alcoolique, toxique ou chimique.',
    tags: ['intoxication', 'médicaments', 'alcool', 'drogues', 'produit ménager', 'antipoison'],
    summary:
      'Quatre questions structurent tout : QUOI, COMBIEN, QUAND, PAR QUELLE VOIE. Sans ces éléments, la régulation et le centre antipoison travaillent à l’aveugle. Rapporter les emballages vaut mieux qu’un long récit.',
    blocks: [
      {
        title: 'Les quatre questions',
        level: 'danger',
        items: [
          'QUOI : nom exact du produit, ramener boîtes, flacons, étiquettes, blisters.',
          'COMBIEN : nombre de comprimés, volume, compter ce qui reste dans la plaquette.',
          'QUAND : heure de prise — elle conditionne les traitements possibles.',
          'PAR QUELLE VOIE : ingestion, inhalation, contact cutané, injection, projection oculaire.',
        ],
      },
      {
        title: 'Interdits',
        level: 'danger',
        items: [
          'Ne JAMAIS faire vomir : risque d’inhalation, et lésions aggravées par les produits caustiques.',
          'Ne rien faire boire, en particulier après ingestion de caustique ou de produit moussant.',
          'Ne pas chercher à neutraliser un produit par un autre.',
          'Ne pas donner de lait « pour tapisser l’estomac ».',
        ],
      },
      {
        title: 'Signes d’orientation',
        level: 'info',
        items: [
          'Myosis + bradypnée : opioïdes.',
          'Mydriase + tachycardie + agitation + sécheresse : atropiniques, certains antidépresseurs.',
          'Hypersalivation + sueurs + myosis + diarrhée : organophosphorés, pesticides.',
          'Haleine particulière : alcool, solvant, acétone.',
          'Brûlures péribuccales : caustique.',
        ],
      },
      {
        title: 'Intoxication alcoolique',
        level: 'warn',
        text:
          'Piège majeur : ne jamais attribuer un trouble de conscience à l’alcool sans avoir mesuré la glycémie et recherché un traumatisme crânien. L’alcoolisation favorise les chutes et masque les signes neurologiques. Risque d’hypothermie et d’inhalation.',
      },
      {
        title: 'Sécurité',
        level: 'danger',
        text:
          'En cas de produit chimique ou de gaz, la scène est dangereuse : ne pas entrer sans protection adaptée, ne pas se contaminer au contact de la victime, décontaminer avant prise en charge selon le protocole.',
      },
    ],
    steps: [
      { title: 'Sécuriser', text: 'Évaluer le risque pour l’équipe avant toute approche.' },
      { title: 'Recueillir', text: 'Emballages, blisters, flacons, étiquettes, lettre éventuelle.' },
      { title: 'Les quatre questions', text: 'Quoi, combien, quand, par quelle voie.' },
      { title: 'Constantes complètes', text: 'Dont glycémie, température, SpO₂, Glasgow, pupilles.' },
      { title: 'Installer', text: 'PLS si troubles de conscience et respiration présente.' },
      { title: 'Transmettre', text: 'Bilan détaillé à la régulation, qui sollicitera si besoin le centre antipoison.' },
    ],
    redFlags: [
      'Troubles de conscience',
      'Bradypnée',
      'Convulsions',
      'Troubles du rythme',
      'Produit caustique ingéré',
      'Intention suicidaire exprimée',
      'Plusieurs produits associés',
    ],
    transmit: ['Produit exact', 'Quantité', 'Heure de prise', 'Voie', 'Contexte (accidentel, volontaire)', 'Constantes', 'Emballages rapportés'],
    related: ['opioides', 'co', 'gly', 'inconscience', 'pupilles'],
    source: 'Références techniques nationales PSE — intoxications.',
  },

  {
    id: 'noyade',
    cat: 'circonst',
    title: 'Noyade',
    abbr: 'Noyade',
    icon: 'waves',
    severity: 'critical',
    desc: 'Asphyxie par immersion : ventiler en priorité, prévenir l’hypothermie, surveiller longtemps.',
    tags: ['noyade', 'immersion', 'submersion', 'hypothermie', 'insufflations'],
    summary:
      'La noyade est un arrêt d’origine respiratoire : d’où les 5 insufflations initiales, avant les compressions, chez toute victime en arrêt sortie de l’eau. La deuxième particularité est qu’une réanimation prolongée garde du sens en contexte d’eau froide.',
    blocks: [
      {
        title: 'Spécificités de la réanimation',
        level: 'danger',
        items: [
          '5 insufflations initiales avant les compressions, quel que soit l’âge.',
          'Ne pas chercher à vider l’eau des poumons : c’est inutile et cela retarde la réanimation.',
          'Vomissements très fréquents : prévoir l’aspiration et le retournement.',
          'Sortir la victime de l’eau horizontalement quand c’est possible.',
        ],
      },
      {
        title: 'Hypothermie associée',
        level: 'danger',
        items: [
          'Retirer les vêtements mouillés, sécher, isoler du sol et du vent.',
          'Mobiliser avec douceur : le cœur hypothermique déclenche facilement une fibrillation.',
          'En hypothermie profonde, la réanimation doit être poursuivie longuement : le refroidissement protège le cerveau.',
          'Le constat de décès ne peut se faire qu’après réchauffement, sur décision médicale.',
        ],
      },
      {
        title: 'Noyade secondaire',
        level: 'warn',
        text:
          'Une victime qui semble bien aller après avoir été sortie de l’eau peut développer une détresse respiratoire plusieurs heures plus tard. Toute personne ayant inhalé de l’eau doit être évaluée médicalement, même si elle se sent parfaitement bien.',
      },
      {
        title: 'Chercher la cause',
        level: 'info',
        items: [
          'Traumatisme du rachis cervical : plongeon, choc, vague. Immobiliser si le mécanisme est compatible.',
          'Malaise, crise convulsive, hypoglycémie, intoxication alcoolique à l’origine de la noyade.',
          'Hydrocution, épuisement, courant.',
        ],
      },
      {
        title: 'Sécurité des sauveteurs',
        level: 'danger',
        text: 'Ne jamais entrer dans l’eau sans en avoir les compétences, le matériel et l’ordre. Privilégier une aide depuis le bord : perche, bouée, corde.',
      },
    ],
    steps: [
      { title: 'Sortir de l’eau', text: 'Horizontalement si possible, avec maintien de l’axe si plongeon ou choc.' },
      { title: 'Évaluer', text: 'Conscience et respiration.' },
      { title: '5 insufflations', text: 'Si arrêt : 5 insufflations initiales avant les compressions.' },
      { title: 'RCP', text: 'Cycles standards ensuite ; prévoir l’aspiration des vomissements.' },
      { title: 'Lutter contre le froid', text: 'Déshabiller, sécher, isoler, couvrir. Manipuler avec douceur.' },
      { title: 'Évacuer systématiquement', text: 'Même en cas de récupération complète : risque de noyade secondaire.' },
    ],
    redFlags: [
      'Durée d’immersion prolongée',
      'Hypothermie profonde',
      'Toux persistante ou dyspnée après sortie de l’eau',
      'Mécanisme compatible avec un traumatisme du rachis',
      'Eau souillée',
    ],
    transmit: ['Durée estimée d’immersion', 'Température de l’eau', 'Eau douce ou salée', 'Heure de sortie', 'Gestes réalisés', 'Température corporelle', 'Cause suspectée'],
    related: ['acr', 'hypothermie', 'rachis', 'detresse-resp', 'rcp-pedia'],
    source: 'Références techniques nationales PSE — noyade.',
  },

  {
    id: 'elect',
    cat: 'circonst',
    title: 'Électrisation et électrocution',
    abbr: 'Élect.',
    icon: 'zap',
    severity: 'critical',
    desc: 'Couper le courant avant tout, puis rechercher les lésions internes invisibles.',
    tags: ['électrisation', 'électrocution', 'courant', 'foudre', 'haute tension', 'brûlure électrique'],
    summary:
      'La lésion cutanée visible est presque toujours dérisoire par rapport aux dégâts internes : le courant brûle sur tout son trajet entre le point d’entrée et le point de sortie. Une victime avec deux petites marques peut avoir des lésions musculaires et cardiaques majeures.',
    blocks: [
      {
        title: 'Sécurité — priorité absolue',
        level: 'danger',
        items: [
          'Ne JAMAIS toucher la victime avant d’avoir la certitude que le courant est coupé.',
          'Basse tension : couper au disjoncteur, débrancher.',
          'Haute tension : distance de sécurité d’au moins 5 mètres, attendre la consignation par l’exploitant. Aucun dégagement improvisé.',
          'Attention à la tension de pas au sol près d’un câble tombé : se déplacer à petits pas joints.',
        ],
      },
      {
        title: 'Risques cardiaques',
        level: 'danger',
        items: [
          'Fibrillation ventriculaire possible immédiatement ou de façon retardée.',
          'Le courant alternatif domestique est particulièrement arythmogène.',
          'Surveillance prolongée obligatoire, même chez une victime consciente et asymptomatique.',
        ],
      },
      {
        title: 'Lésions associées',
        level: 'warn',
        items: [
          'Brûlures aux points d’entrée et de sortie : toujours chercher les DEUX.',
          'Destruction musculaire profonde, pouvant conduire à une insuffisance rénale.',
          'Tétanisation : la victime ne peut pas lâcher la source.',
          'Projection et chute : traumatisme du rachis, fractures.',
          'Fracture par contraction musculaire violente, sans choc direct.',
        ],
      },
      {
        title: 'Foudroiement',
        level: 'info',
        text:
          'Particularité : en cas de victimes multiples foudroyées, on inverse le tri habituel et on s’occupe EN PRIORITÉ des victimes en arrêt cardiaque. Leur pronostic après réanimation immédiate est bon, alors que les autres sont par définition déjà stabilisées.',
      },
    ],
    steps: [
      { title: 'Couper le courant', text: 'Ou faire consigner l’installation. Aucun contact avant.' },
      { title: 'Évaluer', text: 'Conscience, respiration. RCP immédiate si arrêt.' },
      { title: 'Chercher entrée et sortie', text: 'Examiner tout le corps, y compris la plante des pieds.' },
      { title: 'Immobiliser si projection', text: 'Suspicion de traumatisme du rachis.' },
      { title: 'Refroidir les brûlures', text: 'Selon le protocole des brûlures.' },
      { title: 'Évacuer systématiquement', text: 'Même victime asymptomatique : surveillance cardiaque nécessaire.' },
    ],
    redFlags: [
      'Arrêt cardiaque',
      'Haute tension',
      'Passage du courant à travers le thorax (main à main, main à pied)',
      'Perte de connaissance initiale',
      'Urines foncées',
      'Traumatisme par projection',
    ],
    transmit: ['Tension et nature du courant', 'Durée du contact', 'Points d’entrée et de sortie', 'Perte de connaissance', 'Projection ou chute associée', 'Constantes'],
    related: ['acr', 'brulure', 'rachis', 'trauma'],
    source: 'Références techniques nationales PSE — accidents dus à l’électricité.',
  },

  {
    id: 'hypothermie',
    cat: 'circonst',
    title: 'Hypothermie',
    abbr: 'Hypothermie',
    icon: 'snowflake',
    severity: 'urgent',
    desc: 'Refroidissement corporel : réchauffer sans brusquer, et ne jamais conclure trop vite.',
    tags: ['hypothermie', 'froid', 'gelures', 'frissons', 'réchauffement'],
    summary:
      'Le froid ralentit tout : conscience, cœur, respiration. Une victime en hypothermie profonde peut paraître morte alors qu’elle est réanimable. D’où la règle : « on n’est pas mort tant qu’on n’est pas chaud et mort ».',
    blocks: [
      {
        title: 'Stades',
        level: 'info',
        items: [
          'Légère, 32–35 °C : frissons intenses, extrémités froides, confusion débutante, parole difficile.',
          'Modérée, 28–32 °C : DISPARITION des frissons, rigidité musculaire, somnolence, bradycardie.',
          'Sévère, < 28 °C : coma, pouls et respiration imperceptibles, risque de fibrillation.',
        ],
      },
      {
        title: 'Signe d’alerte majeur',
        level: 'danger',
        text:
          'L’arrêt des frissons chez une victime exposée au froid n’est PAS une amélioration : c’est l’épuisement des capacités de thermorégulation et le passage au stade modéré. C’est le moment où la situation devient grave.',
      },
      {
        title: 'Manipulation',
        level: 'danger',
        items: [
          'Mobiliser avec une extrême douceur : un cœur hypothermique passe facilement en fibrillation à la moindre secousse.',
          'Maintenir la victime à l’horizontale : la verticalisation peut provoquer un collapsus.',
          'Ne pas frictionner les membres : cela renvoie du sang froid vers le cœur.',
          'Ne pas donner d’alcool : il dilate les vaisseaux et accélère le refroidissement.',
        ],
      },
      {
        title: 'Réchauffement',
        level: 'info',
        items: [
          'Retirer les vêtements mouillés, sécher, isoler du sol et du vent.',
          'Couverture de survie, face argentée vers la victime.',
          'Réchauffer en priorité le tronc, pas les membres.',
          'Boisson chaude et sucrée uniquement si la victime est parfaitement consciente et capable de déglutir.',
        ],
      },
      {
        title: 'Gelures',
        level: 'warn',
        items: [
          'Ne pas frictionner ni masser la zone gelée.',
          'Ne pas réchauffer si un risque de regel existe avant la prise en charge définitive : un cycle gel-dégel-regel est très destructeur.',
          'Protéger, matelasser, ne pas percer les cloques.',
          'Retirer bagues et éléments serrants.',
        ],
      },
    ],
    steps: [
      { title: 'Soustraire au froid', text: 'Abri, véhicule chauffé, isolation du sol.' },
      { title: 'Déshabiller et sécher', text: 'Retirer tout vêtement humide, sécher la peau.' },
      { title: 'Isoler', text: 'Couverture de survie et couvertures, tête incluse.' },
      { title: 'Manipuler doucement', text: 'À l’horizontale, sans geste brusque.' },
      { title: 'Mesurer', text: 'Température si le matériel le permet, glycémie, constantes.' },
      { title: 'En cas d’arrêt', text: 'RCP prolongée. Le décès ne se conclut pas sur une victime froide.' },
    ],
    redFlags: [
      'Arrêt des frissons',
      'Troubles de conscience',
      'Bradycardie importante',
      'Rigidité musculaire',
      'Température < 32 °C',
    ],
    transmit: ['Température mesurée et méthode', 'Durée d’exposition estimée', 'Conditions (eau, vent, sol)', 'Présence ou disparition des frissons', 'Glasgow', 'Gestes de réchauffement'],
    related: ['temp', 'noyade', 'acr', 'gly'],
    source: 'Références techniques nationales PSE — atteintes liées au froid.',
  },

  {
    id: 'coup-chaleur',
    cat: 'circonst',
    title: 'Coup de chaleur et hyperthermie',
    abbr: 'Coup de chaleur',
    icon: 'sun',
    severity: 'critical',
    desc: 'Défaillance de la thermorégulation : urgence vitale nécessitant un refroidissement immédiat.',
    tags: ['coup de chaleur', 'hyperthermie', 'canicule', 'déshydratation', 'effort'],
    summary:
      'Le signe qui distingue le coup de chaleur de la simple insolation est neurologique : confusion, propos incohérents, agitation ou coma, avec une température supérieure à 40 °C. À ce stade, chaque minute au-dessus de 40 °C détruit des cellules.',
    blocks: [
      {
        title: 'Coup de chaleur — urgence vitale',
        level: 'danger',
        items: [
          'Température ≥ 40 °C.',
          'Troubles neurologiques : confusion, agitation, convulsion, coma.',
          'Peau souvent chaude et SÈCHE : la sudation s’est arrêtée.',
          'Tachycardie, hypotension, polypnée.',
        ],
      },
      {
        title: 'Épuisement à la chaleur — stade précédent',
        level: 'warn',
        items: [
          'Sueurs abondantes, peau moite.',
          'Fatigue intense, céphalées, nausées, crampes.',
          'Température modérément élevée, conscience normale.',
          'Réversible par mise à l’ombre, repos et hydratation — mais peut évoluer vers le coup de chaleur.',
        ],
      },
      {
        title: 'Refroidir vite et fort',
        level: 'danger',
        items: [
          'Déshabiller complètement.',
          'Asperger d’eau tiède sur tout le corps et ventiler énergiquement : l’évaporation est le mécanisme le plus efficace.',
          'Packs de froid aux plis de l’aine, aux aisselles et au cou.',
          'Objectif : faire baisser la température le plus vite possible, avant même le transport.',
          'Arrêter le refroidissement actif vers 38,5 °C pour éviter le rebond hypothermique.',
        ],
      },
      {
        title: 'Populations à risque',
        level: 'warn',
        items: [
          'Personnes âgées isolées, en particulier en période de canicule.',
          'Nourrissons et jeunes enfants — jamais laissés dans un véhicule.',
          'Sportifs et travailleurs en ambiance chaude.',
          'Personnes sous psychotropes, diurétiques ou anticholinergiques.',
        ],
      },
      {
        title: 'À ne pas faire',
        level: 'danger',
        items: [
          'Pas de bain glacé : vasoconstriction cutanée et frissons, qui freinent l’évacuation de la chaleur.',
          'Pas d’antipyrétique : inefficace, le thermostat central n’est pas en cause.',
          'Pas de boisson chez une victime aux troubles de conscience.',
        ],
      },
    ],
    steps: [
      { title: 'Sortir de l’ambiance chaude', text: 'Ombre, local frais, véhicule climatisé.' },
      { title: 'Déshabiller', text: 'Complètement, pour permettre l’évaporation.' },
      { title: 'Refroidir activement', text: 'Aspersion d’eau tiède et ventilation ; packs froids aux plis.' },
      { title: 'Mesurer', text: 'Température, constantes complètes, glycémie.' },
      { title: 'Hydrater si conscient', text: 'Par petites quantités, uniquement si la conscience est parfaitement normale.' },
      { title: 'Transmettre en urgence', text: 'Le coup de chaleur est une urgence vitale au même titre qu’un arrêt imminent.' },
    ],
    redFlags: [
      'Température ≥ 40 °C',
      'Troubles de conscience',
      'Peau chaude et sèche',
      'Convulsion',
      'Hypotension',
    ],
    transmit: ['Température et méthode', 'Heure de début des signes', 'Conditions d’exposition', 'État neurologique', 'Refroidissement entrepris et heure', 'Température après refroidissement'],
    related: ['temp', 'malaise', 'gly', 'geriatrie'],
    source: 'Références techniques nationales PSE — atteintes liées à la chaleur.',
  },

  {
    id: 'avp',
    cat: 'avp',
    title: 'Accident de la voie publique',
    abbr: 'AVP',
    icon: 'car',
    severity: 'critical',
    desc: 'Sécurisation, bilan de cinétique, relevage : méthode d’abord d’un accident de circulation.',
    tags: ['AVP', 'accident', 'circulation', 'cinétique', 'désincarcération', 'balisage'],
    summary:
      'Sur un AVP, l’ordre est invariable : protéger, alerter, secourir. Un secouriste qui se précipite sur la victime avant d’avoir sécurisé la zone devient la deuxième victime. La cinétique de l’accident vaut ensuite autant qu’un bilan clinique.',
    blocks: [
      {
        title: 'Sécurisation',
        level: 'danger',
        items: [
          'Baliser largement en amont, en tenant compte de la vitesse et de la visibilité.',
          'Gilet haute visibilité systématique, pour tous.',
          'Couper le contact, serrer le frein à main, caler les roues.',
          'Véhicule électrique ou hybride : couper l’alimentation selon la procédure, ne pas toucher les câbles orange.',
          'Chercher les fuites de carburant et les risques d’incendie.',
          'Ne pas oublier les airbags non déclenchés : ne pas se placer dans leur zone de déploiement.',
        ],
      },
      {
        title: 'Cinétique — éléments à recueillir',
        level: 'warn',
        items: [
          'Vitesse estimée, type de choc (frontal, latéral, arrière, tonneau).',
          'Déformation de l’habitacle, intrusion dans la zone des occupants.',
          'Éjection d’un occupant, décès d’un autre occupant du même véhicule.',
          'Port de la ceinture, déploiement des airbags, port du casque.',
          'Piéton, cycliste ou motard projeté : distance de projection.',
          'Durée d’incarcération.',
        ],
      },
      {
        title: 'Bilan des victimes',
        level: 'info',
        items: [
          'Compter les victimes et vérifier autour du véhicule : un occupant éjecté peut être à distance, de nuit, dans un fossé.',
          'Demander combien de personnes étaient à bord, sans se fier au nombre visible.',
          'Rechercher un siège auto vide, un cartable, un téléphone : indices d’une victime manquante.',
        ],
      },
      {
        title: 'Immobilisation',
        level: 'danger',
        text:
          'Toute victime d’AVP à cinétique significative est suspecte de lésion du rachis : maintien de l’axe tête-cou-tronc dès le premier contact, avant même le bilan complet.',
      },
      {
        title: 'Critères de gravité de la cinétique',
        level: 'danger',
        items: [
          'Éjection du véhicule.',
          'Décès d’un occupant du même véhicule.',
          'Tonneau.',
          'Chute de plus de 3 mètres.',
          'Piéton ou cycliste projeté.',
          'Incarcération de plus de 20 minutes.',
          'Ces critères imposent une évaluation médicale même sans lésion apparente.',
        ],
      },
    ],
    steps: [
      { title: 'Protéger', text: 'Baliser, sécuriser le véhicule, se rendre visible.' },
      { title: 'Alerter', text: 'Bilan initial : nombre de véhicules, nombre de victimes, incarcération, moyens nécessaires.' },
      { title: 'Compter', text: 'Toutes les victimes, y compris autour et à distance du véhicule.' },
      { title: 'Maintenir l’axe', text: 'Dès le premier contact avec chaque victime.' },
      { title: 'Bilan vital', text: 'Hémorragie, conscience, respiration, pour chaque victime.' },
      { title: 'Recueillir la cinétique', text: 'Elle oriente l’orientation hospitalière autant que la clinique.' },
    ],
    redFlags: [
      'Éjection',
      'Décès d’un autre occupant',
      'Tonneau',
      'Incarcération prolongée',
      'Déformation majeure de l’habitacle',
      'Victime manquante non retrouvée',
    ],
    transmit: ['Nombre et type de véhicules', 'Nombre de victimes et état de chacune', 'Cinétique détaillée', 'Incarcération et durée', 'Moyens de désincarcération nécessaires', 'Risques particuliers (feu, produit, électrique)'],
    related: ['rachis', 'degagement', 'trauma', 'hemorragie', 'trauma-cranien'],
    source: 'Références techniques nationales PSE — secours routier.',
  },

  {
    id: 'degagement',
    cat: 'avp',
    title: 'Dégagement d’urgence',
    abbr: 'Dégagement',
    icon: 'alert',
    severity: 'critical',
    desc: 'Soustraire une victime à un danger vital immédiat, au prix d’une mobilisation imparfaite.',
    tags: ['dégagement', 'danger', 'extraction', 'urgence', 'incendie'],
    summary:
      'Le dégagement d’urgence est une exception assumée aux règles d’immobilisation. On accepte un risque de lésion pour écarter une mort certaine. Il se décide vite, s’exécute vite, et se justifie toujours.',
    blocks: [
      {
        title: 'Indications — et seulement celles-là',
        level: 'danger',
        items: [
          'Danger vital immédiat et non maîtrisable : incendie, risque d’explosion, effondrement, noyade, électricité non coupée.',
          'Nécessité d’accéder à une détresse vitale impossible à traiter sur place.',
          'Nécessité de dégager une victime pour en atteindre une autre en détresse vitale.',
        ],
      },
      {
        title: 'Ce n’est PAS une indication',
        level: 'warn',
        items: [
          'Le confort de l’équipe ou la difficulté d’accès.',
          'La pluie, le froid, la position inconfortable.',
          'L’impatience ou la pression de l’entourage.',
          'Dans tous ces cas, on applique les techniques normales d’immobilisation et de relevage.',
        ],
      },
      {
        title: 'Principes d’exécution',
        level: 'info',
        items: [
          'Trajet reconnu à l’avance, le plus court et le plus sûr.',
          'Commandement unique et annoncé.',
          'Maintien de l’axe tête-cou-tronc autant que la situation le permet — sans que cela retarde le dégagement.',
          'Déplacement dans l’axe du corps, en tirant, jamais en tordant.',
          'Distance strictement nécessaire pour être hors du danger, pas davantage.',
        ],
      },
      {
        title: 'Après le dégagement',
        level: 'info',
        text:
          'Bilan complet immédiat, immobilisation selon les règles normales, et mention explicite du dégagement d’urgence dans la transmission : l’équipe médicale doit savoir que la victime a été mobilisée sans immobilisation préalable.',
      },
    ],
    steps: [
      { title: 'Confirmer le danger', text: 'Vital, immédiat, non maîtrisable. Sinon, ne pas dégager.' },
      { title: 'Choisir le trajet', text: 'Le plus court et le plus sûr, reconnu avant de commencer.' },
      { title: 'Annoncer', text: 'Commandement unique, rôle de chacun défini.' },
      { title: 'Dégager', text: 'Dans l’axe du corps, sans rotation, sur la distance strictement nécessaire.' },
      { title: 'Bilan complet', text: 'Dès la mise en sécurité.' },
      { title: 'Le mentionner', text: 'Explicitement dans la transmission.' },
    ],
    redFlags: ['Dégagement réalisé sans immobilisation', 'Suspicion de lésion du rachis', 'Détresse vitale associée'],
    transmit: ['Motif du dégagement', 'Technique employée', 'Distance et trajet', 'État avant et après', 'Heure'],
    related: ['rachis', 'avp', 'trauma'],
    source: 'Références techniques nationales PSE — dégagements d’urgence.',
  },
];
