var target          = 'public/';
var resources       = 'src/';
var gulp            = require('gulp');
var autoprefixer    = require('autoprefixer');
var babelify        = require('babelify');
var browserify      = require('browserify');
var browserSync     = require('browser-sync').create();
var buffer          = require('vinyl-buffer');
var concat          = require('gulp-concat');
var cssImport       = require('postcss-import');
var imagemin        = require('gulp-imagemin');
var path            = require('path');
var plumber         = require('gulp-plumber');
var postcss         = require('gulp-postcss');
var rename          = require('gulp-rename');
var sass            = require('gulp-sass');
var source          = require('vinyl-source-stream');
var sourcemaps      = require('gulp-sourcemaps');
var uglify          = require('gulp-uglify');
var uglifycss       = require('gulp-uglifycss');

var cssPlugins = [
  autoprefixer({ remove: false, browsers: '> 1%, last 2 versions, ie 9'}),
  cssImport
];

var onError = function (err) {
    console.log(err);
    this.emit('end');
};

gulp.task('serve', ['build'], function () {

    browserSync.init({
      server: './public'
    });

    gulp.watch(resources + 'scss/**/*.scss', ['css-minify']);
    gulp.watch(resources + 'img/**/*', ['image-minify']);
    gulp.watch(resources + 'js/*.js', ['js-minify']);

});

gulp.task('build', ['css-minify', 'js-minify', 'image-minify']);

gulp.task('css-compile', function() {
  return gulp.src([resources + 'scss/**/*.scss', '!' + resources + 'scss/**/_*.scss'])
    .pipe(plumber({ errorHandler: onError }))
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(postcss(cssPlugins))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(target + 'css'))
    .pipe(browserSync.stream());
});

gulp.task('css-minify', ['css-compile'], function() {
  return gulp.src([target + 'css/*.css', '!' + target + 'css/*.min.css'])
    .pipe(uglifycss())
    .pipe(rename(function (path) {
      path.extname = '.min.css';
    }))
    .pipe(gulp.dest(target + 'css'));
});

gulp.task('js-compile', function() {
  return gulp.src(resources + 'js/**/*.js')
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest(target + 'js'))
    .pipe(browserSync.stream());
});

gulp.task('js-minify', ['js-compile'], function() {
  return gulp.src([target + 'js/*.js', '!' + target + 'js/*.min.js'])
    .pipe(uglify())
    .pipe(rename(function (path) {
      path.extname = '.min.js';
    }))
    .pipe(gulp.dest(target + 'js'))
});

gulp.task('image-minify', function () {
  return gulp.src(resources + 'images/**/*')
    .pipe(imagemin({
      progressive: true,
      interlaced: true
    }))
    .pipe(gulp.dest(target + 'img'));
});

gulp.task('default', ['serve']);
