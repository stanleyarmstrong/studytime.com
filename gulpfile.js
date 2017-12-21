var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var gulpStylelint = require('gulp-stylelint');
var browserSync = require('browser-sync').create();
var imagemin = require('gulp-imagemin');

// Compile Scss + refresh browser sync
gulp.task('styles', function() {
  return gulp.src('./scss/**/*.scss')
      .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
      .pipe(postcss(require('autoprefixer')))
      .pipe(gulp.dest('./css'))
      .pipe(browserSync.stream());
});

gulp.task('serve', ['assets', 'styles'], function() {
    browserSync.init({
        server: "./"
    });
    gulp.watch("./scss/**/*.scss", ['styles']);
    gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp.task('assets', function() {
  gulp.src('node_modules/assets/*')
    .pipe(imagemin())
    .pipe(gulp.dest('assets'));
});

gulp.task('lint', function () {
  return gulp.src(
        ['scss/**/*.scss',
        '!scss/bootstrap/**/*.scss']
      )
      .pipe(gulpStylelint({
        reporters: [
          {formatter: 'string', console: true}
        ]
      }));
});

// Watch task = updates SCSS and refreshes Browser Sync
gulp.task('default', ['serve']);
