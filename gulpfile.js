var gulp = require('gulp');
var gutil = require('gulp-util');
var browserify = require('browserify');
var uglify = require('gulp-uglify');
var gulpif = require('gulp-if');
var del = require('del');

var browserSync = require('browser-sync');
var reload = browserSync.reload;
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');

var concat = require("gulp-concat");
var packageJson = require("./package.json");

var paths = {

  node: {
    all: './api/**/*.js',
  },

  scripts: {
    main: './views/index.js',
    all: './views/**/*.js',
    to: './.tmp/',
    tofile: 'index.js',
    server: '/api/utils'
  },

  styles: {
    main: './views/main.scss',
    all: './views/**/*.scss',
    to: './.tmp/'
  },

  templates: {
    all: './views/**/*.html'
  },

  assets: {
    all: './views/**/*.{js,png,gif,jpg,eot,svg,ttf,woff,woff2,css}',
    to: './.tmp/'
  },

  tests: 'test/unit/**/*.test.js'

};

gulp.task('scripts', function() {
  return gulp.src(paths.scripts.all)
    .pipe(concat(paths.scripts.tofile))
    .pipe(gulpif(process.env.NODE_ENV == 'production', uglify()))
    .pipe(gulp.dest(paths.scripts.to));
});

// copy assets
gulp.task('assets', function() {
  gulp.src(paths.assets.all)
    .pipe(gulp.dest(paths.assets.to))
});


// compile all sass files
gulp.task('styles', function () {
  return gulp.src(paths.styles.main)
    .pipe(plumber({ errorHandler: onError}))
    .pipe(sass())
    .pipe(autoprefixer({ browsers: ['last 3 version'] }))
    .pipe(plumber.stop())
    .pipe(gulp.dest(paths.styles.to))
    .pipe(reload({ stream: true })); // auto-inject into browsers
});


// Runs browsersync server on port 3000
gulp.task('browser-sync', function() {
  return browserSync({ proxy: "localhost:1337/", open: false });
});

// cleanup tmp files
gulp.task('clean', function(cb) {
  del('.tmp', cb);
});


// Reload all Browsers
gulp.task('bs-reload', function () {
  // if (!options['auto-reload']) return;
  return browserSync.reload();
});

// build to production
gulp.task('build', function(callback) {
  runSequence('clean', ['styles', 'scripts', 'assets'], callback);
});

// Default task to be run with `gulp`
gulp.task('default', ['styles', 'scripts', 'assets', 'browser-sync'], function () {
  gulp.watch(paths.styles.all, ['styles']);
  gulp.watch(paths.assets.all, ['assets']);
  gulp.watch(paths.templates.all, ['bs-reload']);
  gulp.watch(paths.scripts.all, ['scripts', 'bs-reload']);
});

// When an error occurs, display in red and beep
function onError(err) {
  gutil.beep();
  console.log(gutil.colors.red(err.message));
  this.emit('end');
}








