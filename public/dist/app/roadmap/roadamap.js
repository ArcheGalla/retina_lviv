angular.module("app").directive("roadMap", [function () {
  return {
    restrict: "E",
    templateUrl: "app/roadmap/roadmap.html",
    link: function ($scope, element, attrs) {
      $scope.mailForNewTheme = 'inovytskyy@gmail.com';
    }
  }
}]);
