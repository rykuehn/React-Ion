const gulp = require('gulp');
const del = require('del');
const sass = require('gulp-sass');

gulp.task('copy', function() {
  const folders = ['src/**/*.html', 'src/lib/**/*', 'src/**/*.png'];
  // folders.map(function(folder) {
  //  return gulp.src(folder)
  //             .pipe(gulp.dest('./dist/'));
  gulp.src(folders[0])
      .pipe(gulp.dest('./dist/'));

  gulp.src(folders[1])
      .pipe(gulp.dest('./dist/lib'));

  gulp.src(folders[2])
      .pipe(gulp.dest('./dist/'));
});

gulp.task('clean', function() {
  return del.sync([
    './dist/**',
  ]);
});

gulp.task('clear-user', function() {
  return del.sync([
    './user/**',
  ]);
});

gulp.task('sass', function () {
  return gulp.src('./src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./src/scss/**/*.scss', ['sass']);
});

gulp.task('build', ['clean', 'copy']);
