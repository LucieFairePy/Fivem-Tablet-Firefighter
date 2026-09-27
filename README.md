# Tablette Secourisme — FiveM

Tablette de consultation pour le jeu de rôle sapeur-pompier : constantes
vitales par tranche d'âge, conduites à tenir, urgences vitales et aides au
bilan, présentées dans un châssis de tablette durcie.

### ▶ Démo en ligne

**https://luciefairepy.github.io/Fivem-Tablet-Firefighter/**

La tablette arrive éteinte : appuyez sur le bouton **⏻** en haut à droite du
châssis pour l'allumer.

---

## Sommaire

- [Aperçu](#aperçu)
- [Installation FiveM](#installation-fivem)
- [Usage personnel hors serveur](#usage-personnel-hors-serveur)
- [Compatibilité toutes résolutions](#compatibilité-toutes-résolutions)
- [Structure du dépôt](#structure-du-dépôt)
- [Choix techniques](#choix-techniques)
- [Modifier le contenu](#modifier-le-contenu)
- [Contenu médical](#contenu-médical)
- [Licence](#licence)

---

## Aperçu

| | |
|---|---|
| **57 fiches** | urgences vitales, respiration, circulation, neurologie, traumatologie, pédiatrie, obstétrique, gériatrie… |
| **11 constantes** | valeurs par tranche d'âge : adulte, enfant, nourrisson |
| **15 catégories** | toutes accessibles depuis le menu, aucune fiche orpheline |
| **3 outils** | calculateur de Glasgow, métronome RCP, repères pédiatriques |
| **0 dépendance** | ni CDN, ni police distante, ni bibliothèque d'icônes |

Recherche insensible aux accents, palette de commandes, favoris, historique,
thème sombre et clair, contraste renforcé, mode mouvement réduit, impression
d'une fiche, fonctionnement hors ligne intégral.

### Le cycle en jeu

```
  Touche F4
      │
      ▼
  ANIMATION IN ─────── la tablette monte dans le champ, dalle ÉTEINTE
      │
      ▼
  Bouton POWER ─────── balayage lumineux + logo, la tablette s'allume
      │
      ▼
  Consultation
      │
      ▼
  POWER, Échap ou F4
      │
      ▼
  EXTINCTION ───────── la dalle se referme sur une ligne
      │
      ▼
  ANIMATION OUT ────── la tablette redescend hors champ
```

Les deux séquences ne se chevauchent jamais : le rangement attend la fin de
l'extinction.

---

## Installation FiveM

1. Copier ce dépôt dans `resources/` du serveur, sous le nom
   `tablette-secourisme` :

   ```
   git clone https://github.com/LucieFairePy/Fivem-Tablet-Firefighter.git tablette-secourisme
   ```

2. Ajouter à `server.cfg` :

   ```
   ensure tablette-secourisme
   ```

3. En jeu : touche **F4**, ou commande `/tablette`.

> Le dossier de la ressource doit porter exactement le nom utilisé dans
> `server.cfg`, sinon FiveM ne trouvera pas `fxmanifest.lua`.

### Configuration

Tout se règle dans `config.lua` :

| Option | Rôle |
|---|---|
| `Config.Command` | commande de chat qui ouvre la tablette |
| `Config.DefaultKey` | touche par défaut proposée aux joueurs |
| `Config.AllowedJobs` | restriction par métier (vide = aucune restriction) |
| `Config.StartRoute` | page affichée à l'ouverture |
| `Config.BlockWhileInVehicleDriving` | interdit l'ouverture au volant |

La touche est enregistrée via `RegisterKeyMapping` : **chaque joueur peut la
réassigner** dans `Paramètres → Affectation des touches → FiveM`, et son choix
l'emporte sur `Config.DefaultKey`.

La restriction par métier dépend du framework : compléter `IsPlayerAllowed()`
dans `client.lua`.

### Ouvrir sur une fiche depuis une autre ressource

```lua
exports['tablette-secourisme']:OpenAt('#/fiche/acr')
exports['tablette-secourisme']:IsOpen()
```

---

## Usage personnel hors serveur

FiveM n'autorise pas les ressources côté client : elles viennent uniquement du
serveur. Pour un usage personnel — consulter la tablette à côté du jeu — deux
options sans serveur.

### Fichier unique

```
python tools/build-standalone.py
```

Produit `Tablette-secourisme.html` à la racine : **un seul fichier**, ouvrable
d'un double-clic, copiable sur une clé USB, un téléphone ou un second écran.
Fonctionne hors ligne, sans installation.

> Les modules ES ne se chargent pas en `file://`. Le script réunit donc CSS et
> JavaScript dans un fichier unique, avec un registre de modules minimal qui
> reproduit `import` / `export`.

### Overlay de jeu

Le dossier `overlay/` contient de quoi afficher la tablette **par-dessus le
jeu**, comme l'overlay Discord ou Steam. Rien n'est injecté dans le jeu : c'est
une fenêtre indépendante.

| Fichier | Prérequis |
|---|---|
| `Tablette-overlay.bat` | aucun — PowerShell et Edge suffisent |
| `Tablette-overlay.ahk` | AutoHotkey v2 |

Générer d'abord le fichier unique, le placer à côté du lanceur, puis :

| Touche | Effet |
|---|---|
| **F4** | affiche / masque |
| **Ctrl+F4** | ferme l'overlay |

> **FiveM doit tourner en « Fenêtré sans bordure ».** En plein écran exclusif,
> Windows empêche toute fenêtre de s'afficher par-dessus le jeu et réduit les
> fenêtres d'arrière-plan. Cette limite vaut pour tous les overlays.

---

## Compatibilité toutes résolutions

La dalle a une **taille logique fixe**, choisie parmi une gamme de modèles. Le
plus grand modèle qui tient dans la fenêtre est retenu, puis mis à l'échelle.

| Modèle | Dalle | Mise en page |
|---|---|---|
| `xl` | 1680 × 944 | menu + contenu + rail, 3 constantes par ligne |
| `lg` | 1440 × 810 | idem, 2 constantes par ligne |
| `md` | 1280 × 720 | idem, resserré |
| `sm` | 1120 × 640 | le rail passe sous le contenu |
| `xs` | 960 × 560 | menu en tiroir, rail sous le contenu |

Conséquences : à modèle égal, le rendu est **rigoureusement identique** d'un
joueur à l'autre, et le texte reste lisible partout — on change de modèle
plutôt que de réduire indéfiniment une dalle unique.

### Matrice vérifiée

| Résolution | Modèle | Échelle | Texte |
|---|---|---|---|
| 1024 × 768 | `xs` | 89 % | 10,6 px |
| 1280 × 720 | `sm` | 95 % | 11,4 px |
| 1366 × 768 | `sm` | 101 % | 12,2 px |
| 1440 × 900 | `md` | 97 % | 11,6 px |
| 1600 × 900 | `lg` | 97 % | 11,6 px |
| 1920 × 1080 | `xl` | 101 % | 12,1 px |
| 2560 × 1080 | `xl` | 101 % | 12,1 px |
| 2560 × 1440 | `xl` | 135 % | 16,1 px |
| 3440 × 1440 | `xl` | 135 % | 16,1 px |
| 3840 × 2160 | `xl` | 202 % | 24,2 px |
| 5120 × 1440 | `xl` | 135 % | 16,1 px |

16 résolutions mesurées : aucun débordement, aucun dépassement du cadre,
texte jamais sous 10,6 px.

Les **Réglages** affichent en direct la résolution détectée, le modèle retenu
et l'échelle appliquée, ainsi qu'un test de compatibilité du moteur.

### Moteur requis

FiveM embarque sa propre version de Chromium. L'interface a besoin de
**Chromium 111 ou plus récent** (`color-mix()`, unités `dvh`). Les
fonctionnalités non critiques — transitions de vue, `inert`, `ResizeObserver` —
ont un repli automatique.

---

## Structure du dépôt

```
├── fxmanifest.lua          déclaration de la ressource FiveM
├── config.lua              réglages
├── client.lua              ouverture, fermeture, focus NUI
│
├── index.html              coque minimale ; tout le reste est construit en JS
├── manifest.json
├── sw.js                   service worker (navigateur uniquement)
│
├── css/
│   ├── tokens.css          couleurs, typo, espacements, durées
│   ├── base.css            reset, primitives, accessibilité
│   ├── layout.css          sidebar, topbar, contenu, rail
│   ├── components.css      composants
│   ├── animations.css      transitions de vue, cascades
│   ├── device.css          châssis, mise à l'échelle, allumage
│   └── responsive.css      mise en page par modèle de dalle
│
├── js/
│   ├── main.js             point d'entrée
│   ├── router.js           routage par hash, historique, transitions
│   ├── store.js            état et persistance locale
│   ├── search.js           index, scoring, surlignage
│   ├── icons.js            63 icônes SVG, injectées en sprite
│   ├── device.js           gamme de dalles, échelle, boutons physiques
│   ├── nui.js              pont FiveM
│   ├── data/               taxonomie, constantes, fiches, validation
│   └── views/              tableau de bord, fiche, listes, outils
│
├── overlay/                lanceurs d'overlay de jeu
└── tools/
    └── build-standalone.py génère le fichier unique
```

---

## Choix techniques

**Aucun framework, aucune étape de build.** Les fichiers servis sont ceux
écrits. Un `fxmanifest.lua` liste des fichiers statiques ; ajouter un bundler
imposerait une compilation avant chaque déploiement, pour un gain nul à cette
échelle.

**L'application est à la racine du dépôt**, pas dans un sous-dossier : GitHub
Pages sert la racine sans configuration, et `ui_page` accepte n'importe quel
chemin.

**Routage par hash** plutôt que `history.pushState` : en NUI, la page est
servie sous un schéma propre à FiveM où `pushState` n'est pas fiable. Le hash
fonctionne partout et donne des liens directs (`#/fiche/acr`).

**Icônes dessinées à la main.** Un CDN casse l'interface hors ligne ; une
police d'icônes ou des emoji dépendent du système du joueur et affichent des
carrés vides dans CEF. Un sprite SVG inline se colore avec `currentColor` et
s'anime en CSS.

**Taille logique fixe plutôt que mise en page fluide.** Une interface fluide
devrait être testée pour chaque rapport d'aspect ; une dalle de taille fixe
mise à l'échelle est correcte par construction.

**Source unique pour les valeurs chiffrées.** Les constantes vivent uniquement
dans `js/data/vitals.js`. Le tableau de bord et les fiches lisent la même
source, ce qui rend une divergence impossible.

---

## Modifier le contenu

1. Ouvrir le fichier `js/data/cards.*.js` correspondant au domaine.
2. Ajouter un objet respectant le schéma des fiches existantes.
3. Si la catégorie n'existe pas, la déclarer dans `js/data/taxonomy.js`.
4. Recharger : la page **Référentiels** affiche le rapport d'intégrité.

### Validation automatique au démarrage

| Contrôle | Défaut évité |
|---|---|
| Une fiche par constante de `vitals.js` | cartes du tableau de bord qui ne s'ouvrent pas |
| Catégorie déclarée dans `taxonomy.js` | fiches inaccessibles depuis le menu |
| Liens `related` valides | liens morts |
| Identifiants uniques | fiche masquée par une autre |
| Champs obligatoires présents | affichage incomplet |

Les anomalies sont signalées en console **et** sur la page Référentiels. En cas
d'anomalie l'application continue de fonctionner : un guide dégradé vaut mieux
qu'un écran blanc en intervention.

### Raccourcis clavier

| Touches | Action |
|---|---|
| `Ctrl` + `K` ou `/` | ouvrir la recherche |
| `↑` `↓` | parcourir les résultats |
| `Entrée` | ouvrir le résultat sélectionné |
| `Alt` + `←` | revenir en arrière |
| `Échap` | fermer la surcouche, puis ranger la tablette |
| `?` | afficher les raccourcis |

---

## Contenu médical

Base : Références techniques nationales PSE, code de la santé publique
(articles R.6311-18 à R.6311-18-4), et recommandations HAS pour les points non
fixés par le PSE. Échelles citées : Glasgow, RASS, FPS-R, EVENDOL, Apgar,
règle des 9 de Wallace.

> **Ce support n'est pas un protocole de service.** Il est destiné à un usage
> en jeu de rôle. La formation reçue, les procédures en vigueur et la
> régulation médicale priment en toutes circonstances.

---

## Licence

MIT — voir [LICENSE](LICENSE).
