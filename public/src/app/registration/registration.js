angular.module("app").directive("registration", ["$timeout", "$http", "$log",
  function ($timeout, $http, $log) {
    return {
      restrict: "E",
      templateUrl: "app/registration/registration.html",
      link: function ($scope, element, attrs) {

        $scope.cartNumber = "5168 7423 5260 8263 ";
        //$scope.moneyOwner = "CART_OWNER";
        $scope.btnText = "SUBMIT_BTN";


        $scope.form = {
          name: "",
          sname: "",
          email: "",
          phone: undefined,
          message: ""
        };

        $scope.submit = function (form, isValid) {
          if (isValid) {
            $log.info("form valid");
            console.log("form is valid");
            $http.post("/register", JSON.stringify(form)).then(function (response) {
              if (response.status === 200) {
                $log.info("request success");
                $scope.form = {
                  name: "",
                  sname: "",
                  email: "",
                  phone: undefined,
                  message: ""
                };
                $scope.btnText = "SUBMIT_BTN_SUCCESS";
              }
            });
          }


        }
      }
    }
  }]);
