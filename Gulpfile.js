const gulp = require('gulp');
const sass = require('gulp-sass');
const connect = require('connect');
const serve = require('serve-static');
const concat = require('gulp-concat');
const babel = require('gulp-babel');

gulp.task('styles', function() {
    gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css/'));
});

gulp.task('watch',function() {
    gulp.watch('sass/**/*.scss',['styles']);
});

gulp.task('babel', () =>
    gulp.src('src/scripts/*')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(concat('application.js'))
        .pipe(gulp.dest('./dist/js/'))
);

gulp.task('server', function() {
  return connect().use(serve(__dirname))
    .listen(8080)
    .on('listening', function() {
      console.log('Server Running: View at http://localhost:8080');
      });
});

gulp.task('default', ['styles', 'babel', 'watch']);