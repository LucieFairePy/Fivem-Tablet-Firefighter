#!/usr/bin/env python3
"""
build-standalone.py — Génère une version autonome en UN SEUL fichier HTML.

POURQUOI
--------
FiveM n'autorise pas les mods côté client : une ressource NUI ne peut être
chargée que depuis un serveur. Pour un usage personnel — consulter la tablette
à côté du jeu, sur un second écran ou en alt-tab — il faut donc une page
ouvrable directement, sans serveur ni installation.

Or les modules ES ne se chargent pas en `file://` (le navigateur les bloque
pour des raisons d'origine). Ce script résout le problème en réunissant tout
dans un fichier unique :

  - les six feuilles de style sont insérées dans un <style>, dans l'ordre ;
  - les modules JavaScript sont assemblés dans un petit registre qui reproduit
    `import` / `export`, puis exécutés comme un script classique ;
  - l'icône est intégrée en data URI.

Le résultat s'ouvre d'un double-clic, se copie sur une clé USB, un téléphone
ou un second PC, et fonctionne hors ligne.

CE QUI REND L'ASSEMBLAGE SÛR ICI
--------------------------------
Le code n'utilise que deux formes de modules : `import { … } from '…'` et
`export const` / `export function`. Pas d'export par défaut, pas d'alias, pas
de dépendance circulaire. La réécriture est donc mécanique et sans ambiguïté :
le script vérifie ces hypothèses et s'arrête si elles ne tiennent plus.

USAGE
-----
    python build-standalone.py

Produit `Tablette-secourisme.html` à la racine du projet.
"""

from __future__ import annotations

import base64
import io
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
HTML = ROOT
OUTPUT = os.path.join(ROOT, 'Tablette-secourisme.html')

# Ordre imposé : les jetons d'abord, les adaptations par modèle de dalle en
# dernier. Le même ordre que dans index.html.
CSS_ORDER = [
    'css/tokens.css',
    'css/base.css',
    'css/layout.css',
    'css/components.css',
    'css/animations.css',
    'css/device.css',
    'css/responsive.css',
]

ENTRY = 'js/main.js'

IMPORT_RE = re.compile(r"^import\s*\{([^}]*)\}\s*from\s*'([^']+)'\s*;\s*$", re.M | re.S)
EXPORT_DECL_RE = re.compile(r"^export\s+(const|let|function|class)\s+([A-Za-z_$][\w$]*)", re.M)
FORBIDDEN_RE = re.compile(r"^export\s+default|^export\s*\{|\bimport\s*\(", re.M)


def read(path: str) -> str:
    with io.open(os.path.join(HTML, path), encoding='utf-8') as handle:
        return handle.read()


def resolve(importer: str, target: str) -> str:
    """Résout un chemin d'import relatif en identifiant de module."""
    base = os.path.dirname(importer)
    joined = os.path.normpath(os.path.join(base, target))
    return joined.replace(os.sep, '/')


def collect_modules(entry: str) -> list[str]:
    """
    Parcourt le graphe de dépendances en profondeur d'abord.

    L'ordre retourné garantit qu'un module apparaît après ceux dont il dépend,
    ce qui rend le registre inutile à la première exécution… mais il reste
    nécessaire pour les modules importés par plusieurs autres.
    """
    order: list[str] = []
    seen: set[str] = set()
    stack: list[str] = []

    def visit(module: str) -> None:
        if module in seen:
            return
        if module in stack:
            chain = ' -> '.join(stack[stack.index(module):] + [module])
            sys.exit(f'Dépendance circulaire détectée : {chain}')

        stack.append(module)
        source = read(module)

        if FORBIDDEN_RE.search(source):
            sys.exit(
                f'{module} : forme de module non gérée par cet assembleur '
                '(export default, export {{}} ou import dynamique).'
            )

        for _, target in IMPORT_RE.findall(source):
            visit(resolve(module, target))

        stack.pop()
        seen.add(module)
        order.append(module)

    visit(entry)
    return order


def transform(module: str, source: str) -> str:
    """Réécrit les `import` / `export` d'un module en appels au registre."""

    def rewrite_import(match: re.Match) -> str:
        names = ' '.join(match.group(1).split())
        target = resolve(module, match.group(2))
        return f"const {{ {names} }} = __require('{target}');"

    source = IMPORT_RE.sub(rewrite_import, source)

    exported = [name for _, name in EXPORT_DECL_RE.findall(source)]
    source = re.sub(r'^export\s+', '', source, flags=re.M)

    if exported:
        assignments = ', '.join(exported)
        source += (
            '\n/* Exports du module, publiés une fois le corps exécuté. */\n'
            f'Object.assign(__exports, {{ {assignments} }});\n'
        )

    return source


def build_bundle() -> str:
    modules = collect_modules(ENTRY)
    parts = []

    for module in modules:
        body = transform(module, read(module))
        indented = '\n'.join(('  ' + line if line.strip() else line)
                             for line in body.split('\n'))
        parts.append(
            f"__define('{module}', function (__exports, __require) {{\n"
            f"{indented}\n"
            f"}});\n"
        )

    return (
        '(function () {\n'
        '  "use strict";\n\n'
        '  /*\n'
        '   * Registre de modules minimal : reproduit `import` / `export` pour\n'
        '   * permettre une exécution en `file://`, où les modules ES natifs\n'
        '   * sont refusés par le navigateur.\n'
        '   */\n'
        '  var __registry = {};\n\n'
        '  function __define(id, factory) {\n'
        '    __registry[id] = { factory: factory, exports: null };\n'
        '  }\n\n'
        '  function __require(id) {\n'
        '    var mod = __registry[id];\n'
        '    if (!mod) throw new Error("Module introuvable : " + id);\n'
        '    if (!mod.exports) {\n'
        '      mod.exports = {};\n'
        '      mod.factory(mod.exports, __require);\n'
        '    }\n'
        '    return mod.exports;\n'
        '  }\n\n'
        + '\n'.join(parts)
        + f"\n  __require('{ENTRY}');\n"
        '})();\n'
    )


def data_uri(path: str) -> str:
    with io.open(os.path.join(HTML, path), 'rb') as handle:
        return 'data:image/png;base64,' + base64.b64encode(handle.read()).decode('ascii')


def build_html() -> str:
    css = '\n'.join(f'/* ===== {name} ===== */\n' + read(name) for name in CSS_ORDER)
    bundle = build_bundle()
    icon = data_uri('assets/icon-192.png')

    return f'''<!doctype html>
<html lang="fr" data-theme="dark" data-motion="auto" data-contrast="normal">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <meta name="theme-color" content="#020a12">
  <meta name="color-scheme" content="dark light">
  <meta name="description"
        content="Tablette de secourisme : constantes vitales par tranche d'âge, conduites à tenir,
                 urgences vitales et aides au bilan. Version autonome, hors ligne.">

  <title>Tablette secourisme</title>
  <link rel="icon" href="{icon}">

  <script>
    /*
      Thème appliqué avant le premier rendu, pour éviter un passage du sombre
      au clair à l'ouverture. En `file://`, le stockage local peut être
      indisponible : l'accès est donc protégé.
    */
    try {{
      var saved = JSON.parse(localStorage.getItem('tablette-bspp:v1') || '{{}}');
      var root = document.documentElement;
      if (saved.theme) root.dataset.theme = saved.theme;
      if (saved.contrast) root.dataset.contrast = saved.contrast;
      if (saved.motion) root.dataset.motion = saved.motion;
    }} catch (e) {{
      /* Valeurs par défaut de l'attribut. */
    }}
  </script>

  <style>
{css}
  </style>
</head>

<body>
  <noscript>
    <div style="padding:2rem;font-family:system-ui;color:#eaf5fd;background:#020a12;min-height:100vh">
      <h1>JavaScript est nécessaire</h1>
      <p>Cette tablette construit ses fiches dynamiquement. Activez JavaScript pour l'utiliser.</p>
    </div>
  </noscript>

  <script>
{bundle}
  </script>
</body>
</html>
'''


def main() -> None:
    html = build_html()

    with io.open(OUTPUT, 'w', encoding='utf-8', newline='\n') as handle:
        handle.write(html)

    size = os.path.getsize(OUTPUT) / 1024
    print(f'Généré : {OUTPUT}')
    print(f'Taille : {size:.0f} Ko — fichier unique, aucune dépendance')


if __name__ == '__main__':
    main()
