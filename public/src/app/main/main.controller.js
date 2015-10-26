(function () {
  'use strict';

  angular
    .module('public')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope) {
    $scope.test = "test";
  }
})();
