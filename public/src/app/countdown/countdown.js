angular.module("app").directive("countdown", function () {
  return {
    restrict: "E",
    replace: true,
    templateUrl: "app/countdown/countdown.html",
    link: function ($scope, element, attrs) {

      var start = new Date();
      var end = new Date("April 4, 2015 9:00:00").getMilliseconds();

      //todo : don't work with init venues
      $(".countdown").final_countdown({
        //start: start,
        //end: end,
        // now: Date now()
      }, function () {
        console.log("finish call back");
      });
    }
  }
});
