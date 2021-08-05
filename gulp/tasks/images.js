// =============================================================================
// Gulp task: images
// Description: Optimizes all the images of the project
// =============================================================================
// Packages
//   gulp / gulp-imagemin / gulp-newer / gulp-load-plugins / imagemin-gifsicle
//   imagemin-mozjpeg / imagemin-pngquant / imagemin-svgo / imagemin-webp
//   browser-sync
// =============================================================================

module.exports = (gulp, packages, config) => {
  return () => {
// ------------------------------------------------------------------ Start Task
    if (process.env.NODE_ENV !== 'production') {
      var stream =
        gulp.src(config.images.glob.src)
        .pipe(packages.newer(config.images.dir.build))
        .pipe(packages.imagemin([
          // packages.imageminWebp({quality: 75, method: 6, metadata: 'all'}),
          packages.imageminMozjpeg({ quality: 75, progressive: true }),
          packages.imageminPngquant({ quality: [0.7, 0.9] }),
          packages.imageminGifsicle({ interlaced: true }),
          packages.imageminSvgo({
            packages: [
              { removeViewBox: true },
              { cleanupIDs: false }
            ]
          })
        ],
          { verbose: true }
        ))
        .pipe(gulp.dest(config.images.dir.build))
        .pipe(packages.browserSync.stream({ once: true }))
    } else {
      var stream =
        gulp.src(config.images.glob.build)
        .pipe(gulp.dest(config.images.dir.public))
    }
// -------------------------------------------------------------------- End Task
    return stream
  }
}