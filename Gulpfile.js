const gulp = require('gulp');
const sass = require('gulp-sass');
const connect = require('connect');
const serve = require('serve-static');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const stringify = require('stringify');

gulp.task('styles', function() {
    gulp.src('src/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css/'));
});

gulp.task('watch',function() {
    gulp.watch('src/ass/**/*.scss',['styles']);
});

gulp.task('babel', () =>
    gulp.src('src/scripts/*')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(concat('application.js'))
        .pipe(gulp.dest('./dist/js/'))
);

gulp.task('browserify', function() {
    return browserify('./dist/js/application.js')
        .transform(stringify, {
            appliesTo: { includeExtensions: ['.html'] },
            minify: true
        })
        // bundles it and creates a file called main.js
        .bundle()
        .pipe(source('main.js'))
        // saves it the public/js/ directory
        .pipe(gulp.dest('./dist/js/'));
})


gulp.task('js', function() {
  return browserify({ 'entries': ['src/main.js'], 'debug' : env !== 'dev' })
    .transform(stringify, {
        appliesTo: { includeExtensions: ['.html'] },
        minify: true
    })
    .bundle()
    .pipe(source('main.js')) // gives streaming vinyl file object
    .pipe(gulp.dest(paths.build));
});


gulp.task('server', function() {
  return connect().use(serve(__dirname))
    .listen(8080)
    .on('listening', function() {
      console.log('Server Running: View at http://localhost:8080');
      });
});

gulp.task('default', ['styles', 'babel', 'watch', 'server']);
gulp.task('dist', ['styles', 'babel']);