angular.module("app").directive("registration", ["$timeout", "$http", "$log",
  function ($timeout, $http, $log) {
    return {
      restrict: "E",
      templateUrl: "app/registration/registration.html",
      link: function ($scope, element, attrs) {
        //console.log("$cookie",cookies);
        //$scope.cartNumber = "5168 7423 5260 8263 ";
        $scope.btnText = "SUBMIT_BTN";

        $scope.form = {
          name: "",
          sname: "",
          email: "",
          phone: undefined,
          message: "",
          intern: "NO"
        };
        $scope.isActive = function () {
          return $scope.form === 'yes';
        };
        $scope.submit = function (form, isValid) {
          if (isValid) {
            var params = {
              name: form.name,
              sname: form.sname,
              email: form.email,
              phone: form.phone,
              message: form.message,
              intern: form.intern
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

          } // end if valid


        }
      }
    }
  }]);
