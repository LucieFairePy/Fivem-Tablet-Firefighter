fx_version 'cerulean'
game 'gta5'
lua54 'yes'

name 'tablette-secourisme'
author 'LucieFairePy'
description 'Tablette de consultation secourisme : constantes vitales, conduites a tenir, aides au bilan.'
version '2.1.0'
repository 'https://github.com/LucieFairePy/Fivem-Tablet-Firefighter'

ui_page 'index.html'

client_scripts {
  'config.lua',
  'client.lua',
}

files {
  'index.html',
  'manifest.json',
  'sw.js',
  'css/*.css',
  'js/*.js',
  'js/data/*.js',
  'js/views/*.js',
  'assets/*.png',
}
