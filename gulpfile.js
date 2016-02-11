var gulp = require('gulp');
var wrench = require('wrench');
var forever = require('forever-monitor');

wrench
  .readdirSyncRecursive('./gulp')
  .filter(function (file) {
    return (/\.(js|coffee)$/i).test(file);
  })
  .map(function (file) {
    require('./gulp/' + file);
  });

//gulp.task("default", ["clean", "build"], function () {
//});
//
gulp.task("production", ["clean", "build"], function () {
	console.log("build is complate");
});

gulp.task("start", function () {
  new forever.Monitor("app.js").start();
});
