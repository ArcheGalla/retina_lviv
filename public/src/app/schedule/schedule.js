angular.module("app").directive("schedule", [function () {
  return {
    restrict: "E",
    templateUrl: "app/schedule/schedule.html",
    link: function ($scope, element, attrs) {
      $scope.schedule = [
        {
          icon: "fa-anchor",
          text: "Реєстрація",
          time: {
            start: "9:00",
            end: ""
          }
        },
        {
          icon: "fa-anchor",
          text: "Відкриття симпозіуму",
          time: {
            start: "9:45",
            end: ""
          }
        },
        {
          icon: "fa-anchor",
          text: "Ι сесія",
          time: {
            start: "10:00",
            end: "11:30"
          }
        },
        {
          icon: "fa-anchor",
          text: "Перерва на каву",
          time: {
            start: "11:30",
            end: "12:00"
          }
        },
        {
          icon: "fa-anchor",
          text: "ΙΙ сесія ",
          time: {
            start: "12:00",
            end: "13:45"
          }
        },
        {
          icon: "fa-anchor",
          text: "Обід",
          time: {
            start: "13:45",
            end: "15:00"
          }
        },
        {
          icon: "fa-anchor",
          text: "ΙΙΙ сесія",
          time: {
            start: "15:00",
            end: "16:30"
          }
        },
        {
          icon: "fa-anchor",
          text: "Перерва на каву",
          time: {
            start: "16:30",
            end: "17:00"
          }
        },
        {
          icon: "fa-anchor",
          text: "ΙV сесія",
          time: {
            start: "17:00",
            end: "18:30"
          }
        },
        {
          icon: "fa-anchor",
          text: "Закриття симпозіуму",
          time: {
            start: "18:30",
            end: "18:45"
          }
        },
        {
          icon: "fa-anchor",
          text: "Вечеря",
          time: {
            start: "",
            end: "20:00"
          }
        }];

    }
  }
}]);
