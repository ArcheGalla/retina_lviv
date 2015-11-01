//angular
//  .module('public')
//  .config(config);
//
//
//function config($logProvider, toastr) {
//  // Enable log
//  $logProvider.debugEnabled(true);
//
//  // Set options third-party lib
//  toastr.options.timeOut = 3000;
//  toastr.options.positionClass = 'toast-top-right';
//  toastr.options.preventDuplicates = true;
//  toastr.options.progressBar = true;
//}
//
//
//angular
//  .module('public')
//  .constant('malarkey', malarkey)
//  .constant('toastr', toastr)
//  .constant('moment', moment);

angular
  .module('app', [
    'ngAnimate',
    'ngCookies',
    'ngTouch',
    'ngSanitize',
    'mgcrea.ngStrap']).
  controller('MainController', ["$scope", "$http", function ($scope, $http) {
    //'mgcrea.ngStrap.collapse

    $scope.form = {
      name: ""
    };

    $scope.submit = function (form, isValid) {
      if (isValid) {
        $http.
          post("api/registration", {form: form}).
          then(function (response) {
            console.info("form submit successful");
          }).catch(function (err) {
            console.log(err);
          });
      }
    };

  }]);


