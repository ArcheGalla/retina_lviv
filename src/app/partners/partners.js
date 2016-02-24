angular
  .module("app")
  .directive("partners", [function () {
    return {
      restrict: "E",
      templateUrl: "app/partners/partners.html"
    }
  }])
  .directive('partnerScroll', function () {
    return function (scope, element) {
      $(element).carouFredSel({
        items: 4,
        //width: null,
        height: 240,
        direction: "left",
        transition: true,
        scroll: {
          items: 2,
          easing: "elastic",
          duration: 500,
          pauseOnHover: true
        }
      });
    }
  });
