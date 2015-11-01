angular.module("app").directive("countdown", function () {
  return {
    restrict: "E",
    replace: true,
    templateUrl: "app/countdown/countdown.html",
    link: function ($scope, element, attrs) {

      var start = Date.now();
      var end = new Date(15, 4, 2, 9, 0);

      $(".countdown").final_countdown({},function () {
          console.log("finish call back");
      });
    }
  }
});
