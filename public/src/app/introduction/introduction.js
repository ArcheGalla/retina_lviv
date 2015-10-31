angular.module("app").directive("introduction", [function () {
  return {
    restrict: "E",
    templateUrl: "app/introduction/introduction.html",
    link: function ($scope, element, attrs) {
      console.log(" i am introduction directive ");
    }
  }
}]);



