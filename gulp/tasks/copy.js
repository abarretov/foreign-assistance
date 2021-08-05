// =============================================================================
// Gulp task: copy
// Description: Copy static files to build or public folder
// =============================================================================
// Packages
//   gulp / gulp-newer / browser-sync
// =============================================================================

module.exports = (gulp, packages, config) => {
  return () => {
// ------------------------------------------------------------------ Start Task
    if (process.env.NODE_ENV !== 'production') {
      var stream =
        gulp.src(config.copy.glob.src, { base: './src/' })
        .pipe(packages.newer(config.copy.dir.build))
        .pipe(gulp.dest(config.copy.dir.build))
    } else {
      var stream =
        gulp.src(config.copy.glob.build, { base: './build/' })
        .pipe(gulp.dest(config.copy.dir.public))
    }
// -------------------------------------------------------------------- End Task
    return stream
  }
}