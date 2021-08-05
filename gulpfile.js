// Gulp Commands ===============================================================

// $ gulp start  | Deploy project for development
// $ gulp build  | Building project for production
// $ gulp clean  | Delete all files and subfolders in build and public folders

// declares and initializes the environment variable NODE_ENV
if (typeof process.env.NODE_ENV === 'undefined' || process.env.NODE_ENV === null) {
  process.env.NODE_ENV = 'development'
}

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

// declares and initializes the config file and the rest of development tools
const CONFIG = require('./gulp/config')
const PATH = require('path')
const GULP = require('gulp')
const PACKAGE = require('gulp-load-plugins')({
  pattern: ['*','!cross-env','!dotenv'],
  scope: ['devDependencies'],
  rename: {
    'gulp-postcss': 'postCSS'
  }
})

// get the tasks from gulp/tasks
function getTask(task) {
  return require('./gulp/tasks/' + task)(GULP, PACKAGE, CONFIG, PATH)
}

// Gulp Tasks ==================================================================
module.exports.default = getTask('default')
module.exports.server = getTask('server')
module.exports.clean = getTask('clean')
module.exports.watch = getTask('watch')
module.exports.pug = getTask('pug')
module.exports.sass = getTask('sass')
module.exports.images = getTask('images')
module.exports.copy = getTask('copy')
module.exports.scripts = getTask('scripts')
module.exports.views = getTask('views')
module.exports.build = getTask('build')

// Gulp Tasks Description ======================================================
module.exports.default.description = 'Deploy project for development'
module.exports.server.description = 'Start browsers sync and server'
module.exports.clean.description = 'Delete all files and subfolders in build and public folders'
module.exports.watch.description = 'Monitor file changes'
module.exports.pug.description = 'Transpile all our Pug files to HTML'
module.exports.sass.description = 'Transpile all our SASS files to CSS'
module.exports.images.description = 'Optimizes all the images in the project'
module.exports.copy.description = 'Copy static files to build or public folder'
module.exports.scripts.description = 'Compress and convert all our ES6+ code to an ES5 compatible version'
module.exports.views.description = 'Move all our html files to the public folder and parse build blocks in HTML files to replace references to non-optimized scripts or stylesheets'
module.exports.build.description = 'Building files for production'