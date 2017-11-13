'use strict'

// import plugins from 'gulp-load-plugins'
// import yargs from 'yargs'
import gulp from 'gulp'
import panini from 'panini'
import rimraf from 'rimraf'
import sherpa from 'style-sherpa'
import yaml from 'js-yaml'
import fs from 'fs'

// Load all Gulp plugins into one variable
// const $ = plugins()

// Check for --production flag
// const PRODUCTION = !!(yargs.argv.production)

// Load settings from settings.yml
const {PATHS} = loadConfig()

function loadConfig () {
  let ymlFile = fs.readFileSync('config.yml', 'utf8')
  return yaml.load(ymlFile)
}

// Build the "dist" folder by running all of the below tasks
gulp.task('build',
  gulp.series(clean, pages, styleGuide))

// Build the site, run the server, and watch for file changes
gulp.task('default',
  gulp.series('build', watch))

gulp.task('clean',
  gulp.series(clean))

gulp.task('watch',
  gulp.series(watch))

gulp.task('style',
  gulp.series(styleGuide))

// Generate a style guide from the Markdown content and HTML template in styleguide/
function styleGuide (done) {
  sherpa('src/styleguide/index.md', {
    output: PATHS.dist + '/styleguide.html',
    template: 'src/styleguide/template.html'
  }, done)
}

// Delete the "dist" folder
// This happens every time a build starts
function clean (done) {
  rimraf(PATHS.dist, done)
}

// Copy page templates into finished HTML files
function pages () {
  return gulp.src('src/panini/pages/**/*.{html,hbs,handlebars}')
    .pipe(panini({
      root: 'src/panini/pages/',
      layouts: 'src/panini/layouts/',
      partials: 'src/panini/partials/',
      data: 'src/panini/data/',
      helpers: 'src/panini/helpers/'
    }))
    .pipe(gulp.dest(PATHS.dist))
}

// Load updated HTML templates and partials into Panini
function resetPages (done) {
  panini.refresh()
  done()
}

// Watch for changes to static assets, pages, Sass, and JavaScript
function watch () {
  gulp.watch('src/panini/pages/**/*.html').on('all', gulp.series(pages))
  gulp.watch('src/panini/{layouts,partials}/**/*.html').on('all', gulp.series(resetPages, pages))
}
