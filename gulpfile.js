/* eslint-env node */

var autoprefixer = require('gulp-autoprefixer');
// var bootlint  = require('gulp-bootlint');
var browserSync = require('browser-sync');
var concat = require('gulp-concat');
// var changed = require('gulp-changed');
var del = require('del');
var flatten = require('gulp-flatten');
var gulp = require('gulp');
// var htmlhint = require('gulp-htmlhint');
// var include = require('gulp-file-include');
var less = require('gulp-less');
// var minifyCSS = require('gulp-minify-css');
var plumber = require('gulp-plumber');
// var prettify = require('gulp-prettify');
// var rename = require('gulp-rename');
var runSequence = require('run-sequence');
var w3cjs = require('gulp-w3cjs');
// var base64 = require('gulp-base64');
// var imagemin = require('gulp-imagemin');
// var sourcemaps = require('gulp-sourcemaps');
// var uglify = require('gulp-uglify');
var webpack = require('gulp-webpack');

// Cleaning
gulp.task('clean', function(callback) {
  del('dist', callback);
});

// HTML development
gulp.task('html', function() {
  return gulp.src(['src/**/*.html'])
    .pipe(plumber())
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.stream());
});

// JSON
gulp.task('json', function() {
  return gulp.src(['task/json/*.json'])
    .pipe(plumber())
    .pipe(gulp.dest('dist/json'))
    .pipe(browserSync.stream());
});

// LESS
gulp.task('less', function() {
  return gulp.src([
    'src/less/app.less'
  ])
  .pipe(plumber())
  .pipe(less())
  .pipe(autoprefixer('last 2 version', 'ie 9'))
  .pipe(concat('app.css'))
  .pipe(gulp.dest('dist/css'))
  .pipe(browserSync.stream());
});

// Vendor CSS
gulp.task('vendor-css', function() {
  return gulp.src([
    'node_modules/jquery-ui/themes/smoothness/jquery-ui.min.css'
  ])
  .pipe(gulp.dest('dist/css'));
});

// Vendor Images
gulp.task('vendor-images', function() {
  return gulp.src([
    'node_modules/jquery-ui/themes/smoothness/images/**/*',
  ])
  .pipe(gulp.dest('dist/css/images'));
});

// Images
gulp.task('images', function() {
  return gulp.src(['src/**/*.+(gif|jpg|png)'])
    .pipe(flatten())
    .pipe(gulp.dest('dist/images'))
    .pipe(browserSync.stream());
});

// Webpack
gulp.task('webpack', function() {
  return gulp.src('src/js/app.js')
  .pipe(webpack(require('./webpack.config.js')))
  .pipe(gulp.dest('dist/js'));
});

// Live reload
gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: 'dist'
    },
    logLevel: 'info',
    host: 'st',
    notify: false,
    open: false,
    reloadOnRestart: true
  });
});

// Watch
gulp.task('watch', function() {
  gulp.watch('src/**/*.html', ['html']);
  gulp.watch('src/**/*.less', ['less']);
  gulp.watch('src/**/*.js', ['webpack']);
  gulp.watch('src/**/*.+(gif|jpg|png|swf)', ['images']);
});

// Default
gulp.task('default', function(callback) {
  runSequence(
    'clean',
    [
      'webpack',
      'html',
      'json',
      'less',
      'vendor-css',
      'vendor-images',
      'images'
    ],
    'watch',
    'browserSync',
    callback
  );
});

// Validates html against w3cjs.
gulp.task('w3cjs', function() {
  return gulp.src('dist/*.html')
    .pipe(plumber())
    .pipe(w3cjs());
});

// Can generate HTML Warning after a lot of validation requests.
gulp.task('validate', function(callback) {
  runSequence(
    'clean',
    'html',
    'w3cjs',
    callback
  );
});
