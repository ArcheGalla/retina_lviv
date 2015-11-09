angular.module("app").directive("schedule", [function () {
  return {
    restrict: "E",
    templateUrl: "app/schedule/schedule.html",
    link: function ($scope, element, attrs) {
      $scope.schedule = [
        {
          icon: "fa-pencil-square-o",
          text: "Реєстрація",
          time: "9:00"
        },
        {
          icon: "fa-university",
          text: "Відкриття симпозіуму",
          time: "9:45"
        },
        {
          icon: "fa-microphone",
          text: "Ι сесія",
          time: "10:00 - 11:30"
        },
        {
          icon: "fa-coffee",
          text: "Перерва на каву",
          time: "11:30 - 12:00"
        }
        ,
        {
          icon: "fa-microphone",
          text: "ΙΙ сесія ",
          time: "12:00 - 13:45"
        }
        ,
        {
          icon: "fa-cutlery",
          text: "Обід",
          time: "13:45 - 14:45"
        }
        ,
        {
          icon: "fa-microphone",
          text: "Лекція",
          time: "14:45 - 15:15"
        }
        ,
        {
          icon: "fa-microphone",
          text: "ΙΙΙ сесія",
          time: "15:30 - 17:00"
        }
        ,
        {
          icon: "fa-coffee",
          text: "Перерва на каву",
          time: "17:00 - 17:30"
        }
        ,
        {
          icon: "fa-microphone",
          text: "ΙV сесія",
          time: "17:30-19:00 "
        }
        ,
        {
          icon: "fa-university",
          text: "Закриття симпозіуму",
          time: "19:00-19:15"
        }
        ,
        {
          icon: "fa-glass",
          text: "Вечеря",
          time: "20:30"
        }
      ];
    }
  }
}]);
