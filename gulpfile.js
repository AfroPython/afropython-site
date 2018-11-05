const gulp = require('gulp');
const ghpages = require('gh-pages');
const path = require('path');

gulp.task('deploy', (cb) => {
  ghpages.publish(path.join(process.cwd(), 'dist'), { message: `Publicado em: ${new Date()}` }, cb);
});
