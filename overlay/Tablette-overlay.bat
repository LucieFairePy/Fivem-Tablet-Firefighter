@echo off
REM ===========================================================================
REM  Tablette secourisme - overlay de jeu
REM
REM  Double-cliquer ce fichier. Rien a installer : PowerShell est deja present
REM  sur Windows.
REM
REM     F4        afficher / masquer la tablette
REM     Ctrl+F4   fermer l'overlay
REM
REM  Tablette-secourisme.html doit se trouver dans ce meme dossier.
REM
REM  FiveM doit tourner en "Fenetre sans bordure" : en plein ecran exclusif,
REM  Windows empeche tout overlay de s'afficher (Discord et Steam compris).
REM ===========================================================================

REM -ExecutionPolicy Bypass : evite le blocage des scripts non signes, sans
REM rien modifier durablement sur la machine.
REM -WindowStyle Hidden     : pas de console visible.
start "" /b powershell.exe -NoProfile -ExecutionPolicy Bypass -WindowStyle Hidden -File "%~dp0Tablette-overlay.ps1"
