var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('connect');
var serve = require('serve-static');

gulp.task('styles', function() {
    gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css/'));
});

gulp.task('watch',function() {
    gulp.watch('sass/**/*.scss',['styles']);
});

gulp.task('server', function() {
  return connect().use(serve(__dirname))
    .listen(8080)
    .on('listening', function() {
      console.log('Server Running: View at http://localhost:8080');
      });
});

gulp.task('default', ['styles', 'watch']);