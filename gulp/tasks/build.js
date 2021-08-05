// =============================================================================
// Gulp task: build
// Description: Building files for production
// =============================================================================
// Packages
//   gulp
// Tasks -----------------------------------------------------------------------
//   clean / images / copy / sass / scripts / views
// =============================================================================

module.exports = (gulp, packages, config) => {
  return (cb) => {
    let stream =
// ------------------------------------------------------------------ Start Task
      gulp.series('clean', 'images', 'copy', 'sass', 'scripts', 'views')
      cb()
// -------------------------------------------------------------------- End Task
    return stream(process.env.FOLDERS_TO_CLEAN = 'public', process.env.NODE_ENV = 'production')
  }
}