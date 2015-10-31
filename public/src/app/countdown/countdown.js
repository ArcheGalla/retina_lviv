angular.module("app").directive("countdown", function () {
  return {
    restrict: "E",
    templateUrl: "",
    link: function ($scope, element, attrs) {
      console.log("i am count down");
    }
  }
});
