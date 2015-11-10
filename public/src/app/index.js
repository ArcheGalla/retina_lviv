angular.module("app", ["ngAnimate", "ngMask", "pascalprecht.translate"]).controller("MainController", ["$scope", "$translate", function ($scope, $translate) {

  $scope.changeLanguage = function (langKey) {
    $translate.use(langKey);
  };

}]).config(function ($translateProvider) {

  //CHOOSE_LANG_EN: 'english',
  //  CHOOSE_LANG_UA: 'мова'
  $translateProvider.useSanitizeValueStrategy(null);
  $translateProvider
    .translations('en', {
      NAV_ABOUT: 'About',
      NAV_SCHEDULE: 'Timetable',
      NAV_REGISTRATION: 'Registration',
      NAV_PARTNERS: 'Partners',
      NAV_CONTACTS: 'Contacts',

      MAIN_DESCRIPTION: 'Ukrainian symposium of ophthalmologists',
      BTN_REGISTRATION: 'Registration',
      DEAR_COLLEAGUES: 'Dear colleagues',
      INTRO_TEXT_1: 'We are inviting you to participate in the symposium "Retina-Lviv 2016" dedicated to the second anniversary of the «Oculus»! The meeting will be held on  the  2nd of April, 2016 in Lviv.',
      INTRO_TEXT_2: 'The purpose of the symposium is to find and develop common views on standardization of  vitreo-retinal surgery. The Symposium form provides a broad discussion of the program issues among the speakers and the audience.',
      INTRO_TEXT_3: ' empty ',
      INTRO_TEXT_4: ' empty ',
      INTRO_TEXT_5: ' empty ',
      INTRO_TEXT_6: ' empty ',
      INTRO_TEXT_7: ' empty ',
      COUNTER_TITLE: ' Prior to the left ',
      ROAD_TITLE: 'The format of the symposium',
      ROAD_TEXT: 'The symposium will take place in the form of short (1.5 hrs.) sessions with individual topics. Reports of up to 7 minutes (including the slides and movies) preferably present as an issue for discussion. Question Time is approximately 5 minutes and discussion - 5 minutes. As part of the symposium are also scheduled several lectures (30 minutes) which will take place simultaneously in different classrooms for the audience according to its  interests.',
      ROAD_HOW_TO: 'How to become a speaker?',
      ROAD_HOW_ANS: 'Organization of the sessions and detailed program  requires  confirmation of your participation as a speaker (lecturer)',
      ROAD_DATE_1: 'Till November 15, 2015',
      ROAD_DATE_TEXT_1: 'send the topic of the report (reports) or lecture',
      ROAD_DATE_2: 'Till December 15, 2015',
      ROAD_DATE_TEXT_2: ' empty ',
      ROAD_DATE_3: ' empty ',
      ROAD_DATE_TEXT_3: ' empty ',
      DOWNLOAD_BTN: 'Downloads'

    })
    .translations('ua', {
      NAV_ABOUT: 'про симпозіум',
      NAV_SCHEDULE: 'розклад',
      NAV_REGISTRATION: 'реєстрація',
      NAV_PARTNERS: 'партнери',
      NAV_CONTACTS: 'контакти',

      MAIN_DESCRIPTION: 'Всеукраїнський симпозіум офтальмологів',
      BTN_REGISTRATION: 'Реєстрація',
      DEAR_COLLEAGUES: 'Шановні колеги!',
      INTRO_TEXT_1: 'Щиро запрошую Вас прийняти участь у симпозіумі «Ретіна-Львів 2016», присвячений другій річниці створення Медичного Центру «Oculus»! Зустріч відбудеться у місті Львові 2 квітня 2016 року.',
      INTRO_TEXT_2: 'Метою симпозіуму є пошук та вироблення спільних поглядів на стандартизацію вітрео-ретинальних операцій. Форма конференції передбачає широке обговорення питань, внесених у програму, як між доповідачами, так і з аудиторією.',
      INTRO_TEXT_3: 'Крім наукової програми, розроблено екскурсійний план для супроводжуючих осіб (у день конференції) та для всіх учасників конференції на наступний день (неділя, 3 квітня)',
      INTRO_TEXT_4: 'Ми зробимо все можливе, щоб наша зустріч була цікавою, корисною і залишила добру згадку про Ваше перебування у місті Лева!',
      INTRO_TEXT_5: 'З повагою,',
      INTRO_TEXT_6: 'Головний лікар МЦ «Oculus»',
      INTRO_TEXT_7: 'Професор Ігор Новицький',
      COUNTER_TITLE: 'До початку залишилось',
      ROAD_TITLE: 'Формат симпозіуму',
      ROAD_TEXT: 'Симпозіум проходитиме у форматі коротких (1,5 год.) сесій з окремими темами. Доповіді тривалістю до 7 хвилин (включно зі слайдами і фільмами) бажан представити як питання для обговорення. Час на запитання становить орієнтовно 5 хвилин, і обговорення – ще 5 хвилин. В рамках симпозіуму також планується проведення кількох лекцій (до 30 хвилин), які будуть відбуватися одночасно в різних аудиторіях для слухачів згідно з їхніми інтересами.',
      ROAD_HOW_TO: 'Як стати доповідачем?',
      ROAD_HOW_ANS: 'Для формування сесій та детальної програми необхідно підтвердити Вашу участь як доповідача (лектора)',
      ROAD_DATE_1: 'до 15 грудня 2015 року',
      ROAD_DATE_TEXT_1: 'надіслати тему та текст доповіді або лекції.',
      ROAD_DATE_2: 'до 15 лютого 2016 року',
      ROAD_DATE_TEXT_2: 'проводитиметься науково-організаційна робота з планування сесій з залученням доповідачів і модераторів відповідної сесії.',
      ROAD_DATE_3: '1 березня 2016 року',
      ROAD_DATE_TEXT_3: 'буде сформована остаточна програма симпозіуму.',
      DOWNLOAD_BTN: 'Завантажити',


    });

  $translateProvider.preferredLanguage('ua');
});


