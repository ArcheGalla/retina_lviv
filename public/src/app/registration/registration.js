angular.module("app").directive("registration", ["$timeout", "$http",
  function ($timeout, $http) {
    return {
      restrict: "E",
      templateUrl: "app/registration/registration.html",
      link: function ($scope, element, attrs) {

        $scope.cartNumber = "7777-7777-7777-7777";
        $scope.moneyOwner = "Don Joe";
        $scope.btnText = "Зареєструватись";


        $scope.form = {
          name: "",
          sname: "",
          email: "",
          phone: undefined,
          message: ""
        };

        $scope.submit = function (form, isValid) {
          $http.post("/register", JSON.stringify(form)).then(function (response) {
            if (response.status === 200) {
              $scope.form = {
                name: "",
                sname: "",
                email: "",
                phone: undefined,
                message: ""
              };
            }
            $scope.btnText = "Ви зареєструвались";
          });
        };

      }
    }
  }]);
