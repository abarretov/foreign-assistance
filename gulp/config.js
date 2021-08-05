// =============================================================================
// Config file
// Description: Contain all the options, globs and routes of the packages
// =============================================================================
// - del
// - browsersync
// - pug
// - prettier
// - sass
// - images
// - copy
// - scripts
// - views
// - watch

module.exports = {

// ------------------------------------------------------------------------- del
  del: {
    glob: {
      build: ['./build/**', '!./build', '.js-cache', '.scss-cache'],
      public: ['./public/**', '!./public', '.js-cache', '.scss-cache'],
      all: ['./build/**', './public/**', '!./build', '!./public', '.js-cache', '.scss-cache']
    }
  },
// ----------------------------------------------------------------- browsersync
  browsersync: {
    opts: {
      dev: {
        browser: 'chrome',
        server: {
          baseDir: './build/'
        }
      },
      prod: {
        browser: 'chrome',
        server: {
          baseDir: './public/'
        }
      }
    }
  },
// ------------------------------------------------------------------------- pug
  pug: {
    dir: {
      build: './build/',
      public: './public/'
    },
    glob: {
      src: './src/pug/**/*.pug',
      transpile: ['./src/pug/**/*.pug', '!./src/pug/partials/**']
    },
    opts: {
      doctype: 'html'
    }
  },
// -------------------------------------------------------------------- prettier
  prettier: {
    opts: {
      printWidth: 90,
      parser: 'html',
      htmlWhitespaceSensitivity: 'ignore'
    }
  },
// ------------------------------------------------------------------------ sass
  sass: {
    dir: {
      build: './build/css/',
      public:'./public/css/'
    },
    glob: {
      root: './src/sass/*.scss',
      src: './src/sass/**/*.scss'
    },
    opts: {
      dev: {
        outputStyle: 'expanded'
      },
      prod: {
        outputStyle: 'compressed'
      }
    }
  },
// ---------------------------------------------------------------------- images
  images: {
    dir: {
      build: './build/assets/images/',
      public: './public/assets/images/'
    },
    glob: {
      src: [
        './src/assets/images/**',
        '!./src/assets/images/**/*.+(orig|copy).+(webp|png|jpg|jpeg|gif|svg|ico)'
      ],
      build: './build/assets/images/**'
    }
  },
// ------------------------------------------------------------------------ copy
  copy: {
    dir: {
      build: './build/',
      public: './public/'
    },
    glob: {
      src: [
        './src/assets/fonts/**',
        './src/js/lib/**'
      ],
      build: [
        './build/assets/fonts/**',
        './build/js/lib/**'
      ]
    }
  },
// --------------------------------------------------------------------- scripts
  scripts: {
    dir: {
      src: './src/js/',
      build: './build/js/',
      public:'./public/js/'
    },
    glob: {
      src: [
        './src/js/**/*.js',
        '!./src/js/lib/**'
      ]
    }
  },
// ----------------------------------------------------------------------- views
  views: {
    dir: {
      public: './public/'
    },
    glob: {
      build: './build/**/*.+(php|html)'
    }
  },
// ----------------------------------------------------------------------- watch
  watch: {
    glob: {
      src: [
        './src/js/**/*.js',
        './src/assets/fonts/**',
        './src/assets/images/**',
        '!./src/assets/images/**/*.+(orig).+(webp|png|jpg|jpeg|gif|svg|ico)'
      ]
    }
  }
}