angular.module("app").directive("location", [function () {
  return {
    restrict: "E",
    templateUrl: "app/location/location.html",
    link: function ($scope, element, attrs) {
      $scope.phone_one = "+38(067)-849-48-02";
      $scope.phone_two = " +38(063)-626-13-61";
      $scope.email = "retinalviv@gmail.com";
      $scope.facebook = "https://www.facebook.com/retinalviv/";
    }
  }
}]);
