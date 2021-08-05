// =============================================================================
// Gulp task: server
// Description: Start browsers sync and server
// =============================================================================
// Packages
//   gulp / gulp-load-plugins / browser-sync
// =============================================================================

module.exports = (gulp, packages, config) => {
  return () => {
// ------------------------------------------------------------------ Start Task
    if (process.env.NODE_ENV !== 'production') {
      var stream = packages.browserSync.init(config.browsersync.opts.dev)
    } else {
      var stream = packages.browserSync.init(config.browsersync.opts.prod)
    }
// -------------------------------------------------------------------- End Task
    return stream
  }
}