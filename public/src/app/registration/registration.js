angular.module("app").directive("registration", [function () {
  return {
    restrict: "E",
    templateUrl: "app/registration/registration.html",
    link: function ($scope, element, attrs) {

      $scope.form = {
        name: "",
        sname: "",
        email: "",
        phone: null,
        message: ""
      };

      $scope.submit = function (form, isValid) {
        console.log(form);
        if (isValid) {
          console.log(form);
          //$http.
          //  post("api/registration", {form: form}).
          //  then(function (response) {
          //    console.info("form submit successful");
          //  }).catch(function (err) {
          //    console.log(err);
          //  });
        }
      };


    }
  }
}]);
