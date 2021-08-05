// =============================================================================
// Gulp task: default
// Description: Deploy project for development
// =============================================================================
// Packages
//   gulp
// Tasks -----------------------------------------------------------------------
//   clean / copy / images / pug / sass / scripts / server / watch
// =============================================================================

module.exports = (gulp) => {
  return () => {
    let stream =
// ------------------------------------------------------------------ Start Task
      gulp.series(
        'clean',
        'copy',
        'images',
        'pug',
        'sass',
        'scripts',
        gulp.parallel('server', 'watch')
      )
// -------------------------------------------------------------------- End Task
    return stream(process.env.FOLDERS_TO_CLEAN = 'build')
  }
}