const { reload } = require('browser-sync');

const { src, dest, parallel, series, watch } = require('gulp'),
   sass = require('gulp-sass'),
   browserSync = require('browser-sync').create(),
   autoprefixer = require('gulp-autoprefixer'),
   babel = require('gulp-babel'),
   uglify = require('gulp-uglify'),
   rename = require("gulp-rename"),
   sourcemaps = require('gulp-sourcemaps');
sass.compiler = require('node-sass');


function styles() {
   return src('./assets/scss/**/*.scss')
      .pipe(sourcemaps.init())
      .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
      .pipe(autoprefixer({ overrideBrowserlist: ['last 10 versions'], grid: true }))
      .pipe(sourcemaps.write())
      .pipe(dest('./assets/css'))
      .pipe(browserSync.stream());
}

function scripts() {
   return src('./assets/js/main.js')
      .pipe(babel({
         presets: ['@babel/env']
      }))
      .pipe(uglify())
      .pipe(rename({ suffix: '.min' }))
      .pipe(dest('./assets/js'))
}

function browsersync() {
   browserSync.init({
      server: {
         baseDir: "./"
      },

   });
}

function startwatch() {
   watch('./assets/scss/**/*.scss', styles)
   watch('./*.html').on('change', browserSync.reload)
}

exports.styles = styles;
exports.browsersync = browsersync;



exports.default = parallel(styles, scripts, browsersync, startwatch)