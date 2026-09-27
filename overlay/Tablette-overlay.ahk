#Requires AutoHotkey v2.0
#SingleInstance Force

/*
===============================================================================
  Tablette secourisme — overlay de jeu
===============================================================================

  CE QUE FAIT CE SCRIPT
  ---------------------
  Il ouvre la tablette dans une fenêtre sans bordure, maintenue au-dessus du
  jeu, et la fait apparaître ou disparaître avec une touche.

  Ce n'est PAS un mod FiveM. Rien n'est injecté dans le jeu, aucun fichier du
  jeu n'est modifié : c'est une fenêtre indépendante posée par-dessus, au même
  titre que l'overlay Discord ou Steam. Il n'y a donc rien qu'un anticheat
  puisse détecter.

  PRÉREQUIS — LE POINT IMPORTANT
  ------------------------------
  FiveM doit tourner en « Fenêtré sans bordure ».

      Paramètres → Graphismes → Mode d'écran → Fenêtré sans bordure

  En PLEIN ÉCRAN EXCLUSIF, Windows donne au jeu le contrôle direct de
  l'affichage : aucune fenêtre ne peut se placer par-dessus, et le système
  réduit même les fenêtres d'arrière-plan. C'est une limite de Windows, pas
  du script — aucun overlay (Discord, Steam, celui-ci) ne fonctionne dans ce
  mode.

  Le fenêtré sans bordure a le même rendu visuel que le plein écran, pour un
  coût de performance négligeable sur un jeu comme FiveM.

  UTILISATION
  -----------
  Double-cliquer sur ce fichier. Puis :

     F4          afficher / masquer la tablette
     Ctrl+F4     fermer l'overlay et quitter le script

  Le script et Tablette-secourisme.html doivent rester dans le même dossier.

===============================================================================
*/

; ============================ RÉGLAGES ======================================

; Touche d'affichage. Formats AutoHotkey : "F4", "F2", "^F4" (Ctrl+F4),
; "!t" (Alt+T), "XButton2" (bouton latéral de souris)…
TOUCHE_AFFICHAGE := "F4"

; Touche pour quitter complètement l'overlay.
TOUCHE_QUITTER := "^F4"

; Proportion de l'écran occupée par la fenêtre. 0.86 laisse voir le jeu autour.
TAILLE := 0.86

; Opacité de 0 (invisible) à 255 (opaque). 255 = lecture la plus confortable ;
; descendre vers 230 permet de deviner le jeu derrière.
OPACITE := 255

; ============================ CHEMINS =======================================

PAGE := A_ScriptDir . "\Tablette-secourisme.html"

; Profil dédié : évite de mélanger cette fenêtre aux onglets habituels, et
; conserve les favoris de la tablette d'une session à l'autre. Rangé dans les
; données d'application plutôt qu'à côté du script, pour ne pas encombrer le
; dossier — et pour survivre à un déplacement du script.
PROFIL := EnvGet("LOCALAPPDATA") . "\TabletteSecourisme"

TITRE := "Tablette secourisme"

; ============================ DÉMARRAGE =====================================

if !FileExist(PAGE) {
    MsgBox(
        "Fichier introuvable :`n`n" . PAGE . "`n`n"
        . "Tablette-secourisme.html doit se trouver dans le même dossier que ce script.",
        "Tablette — overlay", "Iconx"
    )
    ExitApp
}

NAVIGATEUR := TrouverNavigateur()

if (NAVIGATEUR = "") {
    MsgBox(
        "Aucun navigateur compatible trouvé (Edge, Chrome ou Brave).`n`n"
        . "Ouvrez Tablette-secourisme.html directement, l'overlay ne pourra pas "
        . "se lancer sans l'un d'eux.",
        "Tablette — overlay", "Iconx"
    )
    ExitApp
}

LancerTablette()

; ============================ RACCOURCIS ====================================

Hotkey(TOUCHE_AFFICHAGE, (*) => BasculerAffichage())
Hotkey(TOUCHE_QUITTER, (*) => Quitter())

TrayTip("Tablette prête", "F4 : afficher / masquer`nCtrl+F4 : quitter")

; ============================ FONCTIONS =====================================

/**
 * Cherche un navigateur basé sur Chromium.
 * Edge est présent sur toute installation de Windows 10 et 11 ; Chrome et
 * Brave servent de repli si Edge a été retiré.
 */
TrouverNavigateur() {
    candidats := [
        A_ProgramFiles . " (x86)\Microsoft\Edge\Application\msedge.exe",
        A_ProgramFiles . "\Microsoft\Edge\Application\msedge.exe",
        A_ProgramFiles . "\Google\Chrome\Application\chrome.exe",
        A_ProgramFiles . " (x86)\Google\Chrome\Application\chrome.exe",
        A_ProgramFiles . "\BraveSoftware\Brave-Browser\Application\brave.exe",
    ]

    for chemin in candidats {
        ; A_ProgramFiles vaut déjà « Program Files (x86) » sur un AHK 32 bits :
        ; on évite alors le doublon « (x86) (x86) ».
        chemin := StrReplace(chemin, " (x86) (x86)", " (x86)")
        if FileExist(chemin)
            return chemin
    }

    return ""
}

/**
 * Lance la tablette dans une fenêtre sans barre d'adresse ni onglets,
 * puis la place au-dessus des autres fenêtres.
 */
LancerTablette() {
    global NAVIGATEUR, PAGE, PROFIL, TITRE, TAILLE, OPACITE

    ; Le mode « application » retire onglets, barre d'adresse et menus :
    ; il ne reste que la page, ce qui donne l'aspect d'un vrai logiciel.
    url := "file:///" . StrReplace(StrReplace(PAGE, "\", "/"), " ", "%20")

    largeur := Round(A_ScreenWidth * TAILLE)
    hauteur := Round(A_ScreenHeight * TAILLE)
    gauche := Round((A_ScreenWidth - largeur) / 2)
    haut := Round((A_ScreenHeight - hauteur) / 2)

    arguments := '--app="' . url . '"'
        . ' --user-data-dir="' . PROFIL . '"'
        . ' --window-size=' . largeur . ',' . hauteur
        . ' --window-position=' . gauche . ',' . haut
        . ' --no-first-run --no-default-browser-check'
        . ' --disable-features=Translate,BackForwardCache'

    Run('"' . NAVIGATEUR . '" ' . arguments)

    ; La fenêtre met un instant à exister : on attend son titre.
    if !WinWait(TITRE, , 12) {
        MsgBox("La fenêtre de la tablette n'a pas pu être ouverte.",
               "Tablette — overlay", "Iconx")
        ExitApp
    }

    WinActivate(TITRE)

    /*
      Le navigateur remplace sa fenêtre pendant le démarrage : le handle
      obtenu juste après WinWait devient périmé, et le « toujours au-dessus »
      s'appliquerait à une fenêtre qui n'existe déjà plus.

      On ré-applique donc l'attribut plusieurs fois sur les premières
      secondes, en repartant à chaque fois du titre plutôt que d'un handle
      mémorisé.
    */
    AppliquerAuDessus()
    SetTimer(AppliquerAuDessus, -600)
    SetTimer(AppliquerAuDessus, -1500)
    SetTimer(AppliquerAuDessus, -3000)
}

/**
 * Place la fenêtre au-dessus de toutes les autres, la dimensionne, et
 * applique l'opacité. Repart du titre : c'est le seul repère stable pendant
 * le démarrage.
 *
 * Le redimensionnement est refait ici, et pas seulement via la ligne de
 * commande : le navigateur mémorise dans son profil la position et l'état de
 * la fenêtre, et les restaure au lancement suivant en ignorant
 * --window-size et --window-position. Sans ce replacement, une fenêtre
 * fermée alors qu'elle était réduite rouvrirait réduite.
 */
AppliquerAuDessus() {
    global TITRE, OPACITE, TAILLE

    if !WinExist(TITRE)
        return

    try {
        ; -1 = réduite, 1 = agrandie. Dans les deux cas on repasse en fenêtré.
        if (WinGetMinMax(TITRE) != 0)
            WinRestore(TITRE)

        largeur := Round(A_ScreenWidth * TAILLE)
        hauteur := Round(A_ScreenHeight * TAILLE)
        gauche := Round((A_ScreenWidth - largeur) / 2)
        haut := Round((A_ScreenHeight - hauteur) / 2)

        WinMove(gauche, haut, largeur, hauteur, TITRE)
        WinSetAlwaysOnTop(true, TITRE)

        if (OPACITE < 255)
            WinSetTransparent(OPACITE, TITRE)
    }
}

/**
 * Affiche ou masque la tablette.
 *
 * Masquer plutôt que fermer : la page reste chargée, donc le retour est
 * instantané et l'état (fiche ouverte, favoris) est conservé.
 */
BasculerAffichage() {
    global TITRE

    if !WinExist(TITRE) {
        LancerTablette()
        return
    }

    ; DetectHiddenWindows permet de retrouver une fenêtre déjà masquée.
    precedent := A_DetectHiddenWindows
    DetectHiddenWindows true

    if WinGetStyle(TITRE) & 0x10000000 {   ; WS_VISIBLE
        WinHide(TITRE)
    } else {
        WinShow(TITRE)
        WinActivate(TITRE)
        AppliquerAuDessus()
    }

    DetectHiddenWindows precedent
}

/** Ferme la fenêtre puis arrête le script. */
Quitter() {
    global TITRE

    precedent := A_DetectHiddenWindows
    DetectHiddenWindows true

    if WinExist(TITRE)
        WinClose(TITRE)

    DetectHiddenWindows precedent
    ExitApp
}
