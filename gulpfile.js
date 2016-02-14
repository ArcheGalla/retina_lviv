var gulp = require('gulp');
var wrench = require('wrench');

wrench
  .readdirSyncRecursive('./gulp')
  .filter(function (file) {
    return (/\.(js|coffee)$/i).test(file);
  })
  .map(function (file) {
    require('./gulp/' + file);
  });

gulp.task("production", ["clean", "build"], function () {
  console.log("build is complate");
});

