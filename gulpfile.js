var gulp            = require('gulp');
var ghpages         = require('gh-pages');
var path            = require('path');

gulp.task('deploy', function (cb) {
  ghpages.publish(path.join(process.cwd(), 'dist'), {message: 'Publicado em: ' + new Date()}, cb);
});
