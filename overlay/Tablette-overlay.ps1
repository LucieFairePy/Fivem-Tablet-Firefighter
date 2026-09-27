<#
===============================================================================
  Tablette secourisme — overlay de jeu (version sans installation)
===============================================================================

  POURQUOI CETTE VERSION
  ----------------------
  Identique à la version AutoHotkey, mais n'utilise QUE des composants déjà
  présents dans Windows : PowerShell et l'API Win32. Rien à installer.

  Le navigateur est lancé en mode « application » (--app) : pas d'onglets,
  pas de barre d'adresse, juste la page — l'aspect d'un vrai logiciel. La
  fenêtre est ensuite épinglée au-dessus des autres, et une touche globale
  l'affiche ou la masque.

  CE N'EST PAS UN MOD FIVEM. Rien n'est injecté dans le jeu, aucun fichier du
  jeu n'est touché : c'est une fenêtre indépendante posée par-dessus, comme
  l'overlay Discord ou Steam. Il n'y a rien qu'un anticheat puisse détecter.

  PRÉREQUIS — LE POINT IMPORTANT
  ------------------------------
  FiveM doit tourner en « Fenêtré sans bordure » :

      Paramètres → Graphismes → Mode d'écran → Fenêtré sans bordure

  En plein écran exclusif, Windows donne au jeu le contrôle direct de
  l'affichage : aucune fenêtre ne peut s'afficher par-dessus, et le système
  réduit les fenêtres d'arrière-plan. C'est une limite de Windows — aucun
  overlay ne fonctionne dans ce mode.

  UTILISATION
  -----------
  Lancer Tablette-overlay.bat (double-clic).

      F4          afficher / masquer la tablette
      Ctrl+F4     fermer l'overlay

  Tablette-secourisme.html doit se trouver dans le même dossier.
===============================================================================
#>

# ============================ RÉGLAGES ======================================

# Touche d'affichage. Codes courants : F1=0x70, F2=0x71, F3=0x72, F4=0x73,
# F5=0x74, F6=0x75, F7=0x76, F8=0x77. Liste complète : « Virtual-Key Codes ».
$TOUCHE_AFFICHAGE = 0x73          # F4

# Proportion de l'écran occupée par la fenêtre.
$TAILLE = 0.86

# ============================ PRÉPARATION ==================================

$ErrorActionPreference = 'Stop'

$Dossier = Split-Path -Parent $MyInvocation.MyCommand.Path
$Page = Join-Path $Dossier 'Tablette-secourisme.html'
$Profil = Join-Path $env:LOCALAPPDATA 'TabletteSecourisme'
$Titre = 'Tablette secourisme'

if (-not (Test-Path $Page)) {
    Add-Type -AssemblyName System.Windows.Forms
    [System.Windows.Forms.MessageBox]::Show(
        "Fichier introuvable :`n`n$Page`n`n" +
        "Tablette-secourisme.html doit se trouver dans le même dossier que ce script.",
        'Tablette — overlay', 'OK', 'Error') | Out-Null
    exit 1
}

# Edge est présent sur toute installation de Windows 10 et 11. Chrome et Brave
# servent de repli s'il a été retiré.
$Candidats = @(
    "${env:ProgramFiles(x86)}\Microsoft\Edge\Application\msedge.exe"
    "$env:ProgramFiles\Microsoft\Edge\Application\msedge.exe"
    "$env:ProgramFiles\Google\Chrome\Application\chrome.exe"
    "${env:ProgramFiles(x86)}\Google\Chrome\Application\chrome.exe"
    "$env:ProgramFiles\BraveSoftware\Brave-Browser\Application\brave.exe"
)

$Navigateur = $Candidats | Where-Object { Test-Path $_ } | Select-Object -First 1

if (-not $Navigateur) {
    Add-Type -AssemblyName System.Windows.Forms
    [System.Windows.Forms.MessageBox]::Show(
        "Aucun navigateur compatible trouvé (Edge, Chrome ou Brave).`n`n" +
        "Ouvrez Tablette-secourisme.html directement : l'overlay ne peut pas " +
        "se lancer sans l'un d'eux.",
        'Tablette — overlay', 'OK', 'Error') | Out-Null
    exit 1
}

# ============================ API WINDOWS ==================================

Add-Type -AssemblyName System.Windows.Forms

Add-Type @'
using System;
using System.Text;
using System.Collections.Generic;
using System.Runtime.InteropServices;

public static class Fenetre
{
    public delegate bool Rappel(IntPtr h, IntPtr l);

    [DllImport("user32.dll")] public static extern bool EnumWindows(Rappel cb, IntPtr l);
    [DllImport("user32.dll")] public static extern int GetWindowText(IntPtr h, StringBuilder s, int n);
    [DllImport("user32.dll")] public static extern bool IsWindowVisible(IntPtr h);
    [DllImport("user32.dll")] public static extern bool SetWindowPos(IntPtr h, IntPtr apres, int x, int y, int cx, int cy, uint f);
    [DllImport("user32.dll")] public static extern bool ShowWindow(IntPtr h, int cmd);
    [DllImport("user32.dll")] public static extern bool SetForegroundWindow(IntPtr h);
    [DllImport("user32.dll")] public static extern int GetWindowLong(IntPtr h, int i);
    [DllImport("user32.dll")] public static extern bool RegisterHotKey(IntPtr h, int id, uint mod, uint vk);
    [DllImport("user32.dll")] public static extern bool UnregisterHotKey(IntPtr h, int id);
    [DllImport("user32.dll")] public static extern uint GetWindowThreadProcessId(IntPtr h, out uint pid);

    static readonly IntPtr HWND_TOPMOST = new IntPtr(-1);

    const uint SWP_NOACTIVATE = 0x0010;
    const uint SWP_SHOWWINDOW = 0x0040;

    public const int SW_HIDE = 0;
    public const int SW_SHOW = 5;
    public const int SW_RESTORE = 9;

    /*
      Recherche de la fenêtre de l'overlay.

      Le titre seul ne suffit PAS : si l'utilisateur a déjà ouvert la tablette
      dans son navigateur habituel, ces fenêtres portent exactement le même
      titre, et l'overlay épinglerait ou masquerait la mauvaise.

      On restreint donc aux processus lancés avec notre profil dédié, dont la
      liste est fournie par PowerShell. C'est le seul critère fiable.
    */
    public static IntPtr Trouver(string titre, uint[] processus, bool visibleUniquement)
    {
        IntPtr trouvee = IntPtr.Zero;

        EnumWindows((h, l) =>
        {
            if (visibleUniquement && !IsWindowVisible(h)) return true;

            uint pid;
            GetWindowThreadProcessId(h, out pid);

            bool connu = false;
            for (int i = 0; i < processus.Length; i++)
                if (processus[i] == pid) { connu = true; break; }

            if (!connu) return true;

            StringBuilder sb = new StringBuilder(300);
            GetWindowText(h, sb, 300);

            if (sb.ToString().Contains(titre)) { trouvee = h; return false; }
            return true;
        }, IntPtr.Zero);

        return trouvee;
    }

    public static bool EstVisible(IntPtr h) { return IsWindowVisible(h); }

    /// Épingle la fenêtre au-dessus des autres, à la position voulue.
    public static void Epingler(IntPtr h, int x, int y, int cx, int cy)
    {
        ShowWindow(h, SW_RESTORE);
        SetWindowPos(h, HWND_TOPMOST, x, y, cx, cy, SWP_SHOWWINDOW);
    }

    public static void Masquer(IntPtr h) { ShowWindow(h, SW_HIDE); }

    public static void Afficher(IntPtr h, int x, int y, int cx, int cy)
    {
        ShowWindow(h, SW_SHOW);
        Epingler(h, x, y, cx, cy);
        SetForegroundWindow(h);
    }
}

/// Fenêtre invisible dont le seul rôle est de recevoir les touches globales.
public class Ecouteur : System.Windows.Forms.Form
{
    const int WM_HOTKEY = 0x0312;

    public Action<int> SurTouche;

    public Ecouteur()
    {
        this.ShowInTaskbar = false;
        this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.None;
        this.Width = 0;
        this.Height = 0;
        this.Opacity = 0;
    }

    protected override void SetVisibleCore(bool value)
    {
        // Ne jamais s'afficher : c'est un simple récepteur de messages.
        base.SetVisibleCore(false);
    }

    protected override void WndProc(ref System.Windows.Forms.Message m)
    {
        if (m.Msg == WM_HOTKEY && SurTouche != null)
            SurTouche(m.WParam.ToInt32());

        base.WndProc(ref m);
    }
}
'@ -ReferencedAssemblies System.Windows.Forms, System.Drawing

# ============================ GÉOMÉTRIE ====================================

$Ecran = [System.Windows.Forms.Screen]::PrimaryScreen.Bounds
$Largeur = [int]($Ecran.Width * $TAILLE)
$Hauteur = [int]($Ecran.Height * $TAILLE)
$Gauche = [int](($Ecran.Width - $Largeur) / 2)
$Haut = [int](($Ecran.Height - $Hauteur) / 2)

# ============================ LANCEMENT ====================================

$Url = 'file:///' + ($Page -replace '\\', '/' -replace ' ', '%20')

$Arguments = @(
    "--app=`"$Url`""
    "--user-data-dir=`"$Profil`""
    "--window-size=$Largeur,$Hauteur"
    "--window-position=$Gauche,$Haut"
    '--no-first-run'
    '--no-default-browser-check'
    '--disable-features=Translate,BackForwardCache'
) -join ' '

Start-Process -FilePath $Navigateur -ArgumentList $Arguments | Out-Null

<#
  Liste les processus du navigateur lancés avec NOTRE profil.

  Indispensable : si la tablette est déjà ouverte dans le navigateur habituel,
  ces fenêtres portent le même titre. Sans ce filtre, l'overlay épinglerait ou
  masquerait une fenêtre appartenant à l'utilisateur.
#>
function Get-ProcessusOverlay {
    $nom = [System.IO.Path]::GetFileName($Navigateur)

    @(Get-CimInstance Win32_Process -Filter "Name='$nom'" -ErrorAction SilentlyContinue |
        Where-Object { $_.CommandLine -and $_.CommandLine.Contains($Profil) } |
        ForEach-Object { [uint32]$_.ProcessId })
}

# Recherche de la fenêtre, restreinte à nos propres processus.
function Find-FenetreOverlay([bool]$visibleUniquement = $true) {
    $processus = Get-ProcessusOverlay
    if ($processus.Count -eq 0) { return [IntPtr]::Zero }

    [Fenetre]::Trouver($Titre, $processus, $visibleUniquement)
}

# La fenêtre met un instant à exister ; le navigateur la remplace parfois
# pendant le démarrage, d'où la recherche répétée plutôt qu'une seule attente.
$Cible = [IntPtr]::Zero
for ($i = 0; $i -lt 60; $i++) {
    Start-Sleep -Milliseconds 250
    $Cible = Find-FenetreOverlay $true
    if ($Cible -ne [IntPtr]::Zero) { break }
}

if ($Cible -eq [IntPtr]::Zero) {
    [System.Windows.Forms.MessageBox]::Show(
        "La fenêtre de la tablette n'a pas pu être ouverte.",
        'Tablette — overlay', 'OK', 'Error') | Out-Null
    exit 1
}

<#
  Le navigateur mémorise dans son profil la géométrie de la fenêtre et la
  restaure au démarrage, en ignorant --window-size et --window-position. Cette
  restauration est ASYNCHRONE : elle peut arriver plusieurs secondes après
  l'ouverture, donc après un épinglage unique.

  On ré-applique donc la géométrie à intervalle régulier pendant la phase de
  démarrage, puis on arrête : au-delà, un redimensionnement est une décision
  de l'utilisateur, qu'il ne faut pas contrarier.
#>
$DUREE_STABILISATION_MS = 12000
$INTERVALLE_MS = 750

$debut = [Environment]::TickCount

$Stabilisateur = New-Object System.Windows.Forms.Timer
$Stabilisateur.Interval = $INTERVALLE_MS

$Stabilisateur.Add_Tick({
    $h = Find-FenetreOverlay $true

    if ($h -ne [IntPtr]::Zero) {
        [Fenetre]::Epingler($h, $Gauche, $Haut, $Largeur, $Hauteur)
    }

    if (([Environment]::TickCount - $debut) -gt $DUREE_STABILISATION_MS) {
        $Stabilisateur.Stop()
    }
}.GetNewClosure())

$Stabilisateur.Start()

# ============================ TOUCHES GLOBALES =============================

$ID_AFFICHAGE = 1
$ID_QUITTER = 2
$MOD_CONTROL = 0x0002

$Ecouteur = New-Object Ecouteur
$null = $Ecouteur.Handle    # force la création du handle avant l'inscription

$okAffichage = [Fenetre]::RegisterHotKey($Ecouteur.Handle, $ID_AFFICHAGE, 0, $TOUCHE_AFFICHAGE)
$okQuitter = [Fenetre]::RegisterHotKey($Ecouteur.Handle, $ID_QUITTER, $MOD_CONTROL, $TOUCHE_AFFICHAGE)

if (-not $okAffichage) {
    [System.Windows.Forms.MessageBox]::Show(
        "La touche d'affichage est déjà utilisée par un autre programme.`n`n" +
        "L'overlay reste ouvert, mais sans raccourci. Modifiez " +
        "`$TOUCHE_AFFICHAGE en haut du script pour en choisir une autre.",
        'Tablette — overlay', 'OK', 'Warning') | Out-Null
}

$Ecouteur.SurTouche = {
    param($id)

    if ($id -eq $ID_QUITTER) {
        $h = Find-FenetreOverlay $false
        if ($h -ne [IntPtr]::Zero) { [Fenetre]::Afficher($h, $Gauche, $Haut, $Largeur, $Hauteur) }
        $Ecouteur.Close()
        return
    }

    $h = Find-FenetreOverlay $false
    if ($h -eq [IntPtr]::Zero) { return }

    if ([Fenetre]::EstVisible($h)) {
        [Fenetre]::Masquer($h)
    } else {
        [Fenetre]::Afficher($h, $Gauche, $Haut, $Largeur, $Hauteur)
    }
}.GetNewClosure()

try {
    [System.Windows.Forms.Application]::Run($Ecouteur)
} finally {
    [void][Fenetre]::UnregisterHotKey($Ecouteur.Handle, $ID_AFFICHAGE)
    [void][Fenetre]::UnregisterHotKey($Ecouteur.Handle, $ID_QUITTER)
}
