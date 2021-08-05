// =============================================================================
// Gulp task: pug
// Description: Transpile all our Pug files to HTML
// =============================================================================
// Packages
//   gulp / gulp-prettier / gulp-load-plugins / browser-sync / pug
// =============================================================================

module.exports = (gulp, packages, config) => {
  return () => {
    let stream =
// ------------------------------------------------------------------ Start Task
      gulp.src(config.pug.glob.transpile) 
      .pipe(packages.pug(config.pug.opts))
      .pipe(packages.prettier(config.prettier.opts))
      .pipe(gulp.dest(config.pug.dir.build))
      .pipe(packages.browserSync.stream({ once: true }))
// -------------------------------------------------------------------- End Task
    return stream
  }
}