angular.module("app").directive("registration", ["Registration", function (Registration) {
  return {
    restrict: "E",
    templateUrl: "app/registration/registration.html",
    link: function ($scope, element, attrs) {

      $scope.form = {
        name: "",
        sname: "",
        email: "",
        phone: undefined,
        message: ""
      };

      $scope.submit = function (form, isValid) {
        console.log(form);
        if (isValid) {
          Registration($scope.form).then(function () {
            console.info("success");
          }).catch(function (err) {
            console.log(err);
          });
        }
      };


    }
  }
}]);

angular.module("app").factory("Registration", ["$http", function ($http) {
  return function (param) {
    return $http.post("api/registration", param).then(function (response) {
      return response.data
    })
  }
}]);
