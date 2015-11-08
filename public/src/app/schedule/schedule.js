angular.module("app").directive("schedule", [function () {
  return {
    restrict: "E",
    templateUrl: "app/schedule/schedule.html",
    link: function ($scope, element, attrs) {
      $scope.schedule = [
        {
          icon: "fa-pencil-square-o",
          text: "Реєстрація",
          bg_color: "#ffdd6a",
          //font_color: "#000",
          time: "9:00"
        },
        {
          icon: "fa-university",
          text: "Відкриття симпозіуму",
          bg_color: "#fff",
          //font_color: "#fec503",
          time: "9:45"
        },
        {
          icon: "fa-microphone",
          text: "Ι сесія",
          bg_color: "#ffdd6a",
          //font_color: "#fff",
          time: "10:00 - 11:30"
        },
        {
          icon: "fa-coffee",
          text: "Перерва на каву",
          bg_color: "#ffffff",
          //font_color: "#fec503",
          time: "11:30 - 12:00"
        }
        ,
        {
          icon: "fa-microphone",
          text: "ΙΙ сесія ",
          bg_color: "#ffdd6a",
          //font_color: "#fff",
          time: "12:00 - 13:45"
        }
        ,
        {
          icon: "fa-cutlery",
          text: "Обід",
          bg_color: "#fff",
          //font_color: "#fec503",
          time: "13:45 - 15:00"
        }
        ,
        {
          icon: "fa-microphone",
          text: "ΙΙΙ сесія",
          bg_color: "#ffdd6a",
          //font_color: "#fff",
          time: "15:00 - 16:30"
        }
        ,
        {
          icon: "fa-coffee",
          text: "Перерва на каву",
          bg_color: "#ffffff",
          //font_color: "#fec503",
          time: "16:30-17:00"
        }
        ,
        {
          icon: "fa-microphone",
          text: "ΙV сесія",
          bg_color: "#ffdd6a",
          //font_color: "#fff",
          time: "17:00-18:30 "
        }
        ,
        {
          icon: "fa-university",
          text: "Закриття симпозіуму",
          bg_color: "#fff",
          //font_color: "#fec503",
          time: "18:30-18:45"
        }
        ,
        {
          icon: "fa-glass",
          text: "Вечеря",
          bg_color: "#ffdd6a",
          //font_color: "#fff",
          time: "20:00"
        }
      ];
    }
  }
}]);
