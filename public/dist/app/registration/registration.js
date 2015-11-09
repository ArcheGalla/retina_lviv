angular.module("app").directive("registration", ["Registration", function (Registration) {
  return {
    restrict: "E",
    templateUrl: "app/registration/registration.html",
    link: function ($scope, element, attrs) {

      $scope.cartNumber = "7777-7777-7777-7777";
      $scope.moneyOwner = "Don Joe";

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
          //$http.post("/register", JSON.stringify(form)).then(function (response) {
          //    console.log(response);
          //});
          Registration(form).then(function () {
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
    return $http.post("/register", param).then(function (response) {
      return response.data
    })
  }
}]);
