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

            var params = {
              name: form.name,
              sname: form.sname,
              email: form.email,
              phone: form.phone,
              message: form.message
            };

            $http.post("/register", params).then(function (response) {
              if (response.status === 200) {
                $scope.form = {
                  name: "",
                  sname: "",
                  email: "",
                  phone: undefined,
                  message: ""
                };
                $scope.btnText = "SUBMIT_BTN_SUCCESS";
                $log.info("request success");
              }
            }).catch(function (err) {
              $log.error(err)
            });
          }
        }
      }
    }
  }]);
