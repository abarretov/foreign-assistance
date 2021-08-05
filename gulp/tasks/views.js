// =============================================================================
// Gulp task: views
// Description: Move all our html files to the public folder and parse build
// blocks in HTML files to replace references to non-optimized scripts or
// stylesheets
// =============================================================================
// Packages
//   gulp / gulp-useref / gulp-terser / gulp-cssnano / gulp-load-plugins
//   gulp-if
// =============================================================================

module.exports = (gulp, packages, config) => {
  return () => {
    let stream =
// ------------------------------------------------------------------ Start Task
      gulp.src(config.views.glob.build)
      .pipe(packages.useref())
      .pipe(packages.if('*.js', packages.terser()))
      .pipe(packages.if('*.css', packages.cssnano()))
      .pipe(gulp.dest(config.views.dir.public))
// -------------------------------------------------------------------- End Task
    return stream
  }
}