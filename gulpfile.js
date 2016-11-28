const gulp = require('gulp');
const del = require('del');
const watch = require('gulp-watch');

gulp.task('copy', () => {
  const folders = ['src/pages/*.html', 'src/**/*.png'];
  // folders.map(function(folder) {
  //  return gulp.src(folder)
  //             .pipe(gulp.dest('./dist/'));
  gulp.src(folders[0])
      .pipe(gulp.dest('./dist/'));

  // gulp.src(folders[2])
  //     .pipe(gulp.dest('./dist/'));
});

gulp.task('copy-watch', () => {
  return watch('src/pages/*.html', { ignoreInitial: false })
    .pipe(gulp.dest('./dist/'));
});

gulp.task('clean', () => {
  return del.sync([
    './dist/**',
  ]);
});

gulp.task('build', ['clean', 'copy']);
gulp.task('dev', ['clean', 'copy-watch']);
