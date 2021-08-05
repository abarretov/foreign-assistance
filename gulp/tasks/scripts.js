// =============================================================================
// Gulp task: scripts
// Description: Compress all our ES6+ to ES5
// =============================================================================
// Packages
//   gulp / gulp-babel / gulp-load-plugins / browser-sync / @babel/preset-env
//   @babel/core / gulp-file-cache
// =============================================================================

module.exports = (gulp, packages, config) => {
  return () => {
// ------------------------------------------------------------------ Start Task
    let fileCache = new packages.fileCache('.js-cache')
    if (process.env.NODE_ENV !== 'production') {
      var stream = 
      gulp.src(config.scripts.glob.src, { sourcemaps: true })
        .pipe(fileCache.filter())
        .pipe(packages.babel())
        .pipe(fileCache.cache())
        .pipe(gulp.dest(config.scripts.dir.build, { sourcemaps: '.' }))
        .pipe(packages.browserSync.stream({ once: true }))
    } else {
      var stream =
        gulp.src(config.scripts.glob.src) 
        .pipe(packages.babel())
        .pipe(gulp.dest(config.scripts.dir.build))
    }
// -------------------------------------------------------------------- End Task
    return stream
  }
}