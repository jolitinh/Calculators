var karma = require('karma');
var gulp = require('gulp');

gulp.task('test', function (done) {
  var Server = require('karma').Server;

  new karma.Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start({}, function (exitStatus) {
    if (exitStatus) {
      handleError();
    }
  });
});
