const gulp = require('gulp');
const wrench = require('wrench');
// var forever = require('forever-monitor');

wrench.readdirSyncRecursive('./gulp').
  filter((file) => (/\.(js|coffee)$/i).test(file)).
  map((file) => require('./gulp/' + file));

gulp.task('default', ['clean', 'build'], function() { });
gulp.task('build_production', ['clean', 'build'], function() { });
// gulp.task("start",function () { new forever.Monitor("app.js").start(); });
