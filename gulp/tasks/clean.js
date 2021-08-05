// =============================================================================
// Gulp task: clean
// Description: Delete all files and subfolders in build and public folders
// =============================================================================
// Packages
//   gulp / del / gulp-load-plugins
// =============================================================================

module.exports = (gulp, packages, config) => {
  return async () => {
// ------------------------------------------------------------------ Start Task
    switch (process.env.FOLDERS_TO_CLEAN) {
      case 'build':
        var promise = await packages.del(config.del.glob.build)
        break
      case 'public':
        var promise = await packages.del(config.del.glob.public)
        break
      default:
        var promise = await packages.del(config.del.glob.all)
    }
// -------------------------------------------------------------------- End Task
    return promise
  }
}