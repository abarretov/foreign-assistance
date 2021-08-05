// =============================================================================
// Gulp task: sass
// Description: Transpile all our SASS files to CSS
// =============================================================================
// Packages
//   gulp / gulp-sass / browser-sync / gulp-postcss / postcss / autoprefixer
//   gulp-load-plugins / gulp-file-cache
// =============================================================================

module.exports = (gulp, packages, config) => {
  return () => {
// ------------------------------------------------------------------ Start Task
    let fileCache = new packages.fileCache('.scss-cache')
    if (process.env.NODE_ENV !== 'production') {
      var stream =
        gulp.src(config.sass.glob.src, { sourcemaps: true })
        .pipe(fileCache.filter())
        .pipe(packages.sass(config.sass.opts.dev).on('error', packages.sass.logError))
        .pipe(packages.postCSS())
        .pipe(fileCache.cache())
        .pipe(gulp.dest(config.sass.dir.build, { sourcemaps: '.' }))
        .pipe(packages.browserSync.stream({ once: true }))
    } else {
      var stream =
        gulp.src(config.sass.glob.src)
        .pipe(packages.sass(config.sass.opts.prod).on('error', packages.sass.logError))
        .pipe(packages.postCSS())
        .pipe(gulp.dest(config.sass.dir.build))
    }
// -------------------------------------------------------------------- End Task
    return stream
  }
}