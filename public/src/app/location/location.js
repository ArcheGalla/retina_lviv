angular.module("app").directive("location", [function () {
  return {
    restrict: "E",
    templateUrl: "app/location/location.html",
    link: function ($scope, element, attrs) {
      $scope.test = "location";
    }
  }
}]);
