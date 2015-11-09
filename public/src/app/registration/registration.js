angular.module("app").directive("registration", ["Registration", "$timeout",
  function (Registration, $timeout) {
    return {
      restrict: "E",
      templateUrl: "app/registration/registration.html",
      link: function ($scope, element, attrs) {

        $scope.cartNumber = "7777-7777-7777-7777";
        $scope.moneyOwner = "Don Joe";
        $scope.registerSuccess = false;


        $scope.form = {
          name: "",
          sname: "",
          email: "",
          phone: undefined,
          message: ""
        };

        $scope.submit = function (form, isValid) {
          //console.log("before");
          //$http.post("/register", JSON.stringify(form)).then(function (response) {
          //  console.log("post");
          //  console.log(response);
          //});

          //$http.get("/test").success(function (res) {
          //    console.log(res);
          //});

          if (isValid) {
            Registration(JSON.stringify(form)).then(function (data) {
              if (data.status === 2000) {
                $scope.form = {
                  name: "",
                  sname: "",
                  email: "",
                  phone: undefined,
                  message: ""
                };

                $timeout(function () {
                  $scope.registerSuccess = true;
                }, 4000)
              }
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
