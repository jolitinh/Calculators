var karma = require('gulp-karma');
var gulp = require('gulp');

gulp.task('test', function() {
  //src isn't really used here since files are taken from karma.conf.js
  return gulp.src('./foobar')
    .pipe(karma({
      configFile: 'karma.conf.js',
      action: 'run'
    }))
    .on('error', function(err) {
      console.log(err);
      this.emit('end');
    });
});
