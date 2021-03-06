angular
  .module('app', ['ngMask', 'pascalprecht.translate', 'angularModalService'])
  .controller('MainController', [
    '$scope', '$translate', '$window', '$rootScope',
    function ($scope, $translate, $rootScope) {

      $scope.changeLanguage = function () {
        $translate.use() === 'en' ? $translate.use('ua') : $translate.use('en');
      };

      $scope.currentLanguage = function (key) {
        return $translate.use() === key;
      };

      $rootScope.isLang = function (language) {
        return $translate.use() === language;
      };

      $scope.photo_report = 'https://www.facebook.com/pg/oculus.medicalcenter/photos/?tab=album&album_id=1026821807388372';
      $scope.video_report = 'https://www.youtube.com/watch?v=yRpVqQC6Phc';
      $scope.video_record = 'https://www.youtube.com/watch?v=X_kEYRAqH14';

    }
  ])
  .controller('TezyModalController', ['$scope', '$http', function ($scope, $http) {

    $scope.submit = function () {
      var form = {
        name: 'qweqwe123',
        sname: 'qweqwewer'
      };

      $http
        .post('/v1/topic', form)
        .then(function (response) {

        })
        .catch(function (err) {
          console.log('err ', err);
        })
    }
  }])
  .controller('TezyController', ['$scope', 'ModalService', function ($scope, ModalService) {

    $scope.openTezyModal = function () {
      console.log('Open method ');

      ModalService
        .showModal({
          //templateUrl: 'app/tezy/tezy.html',
          template: '<div>Hello from modal</div>',
          controller: "TezyModalController",
          // appendElement: document.querySelector('div')
        })
        .then(function (modal) {
          console.log('then ');
          //modal.element.modal();
          //modal.close.then(function (result) {
          //
          //});
        });
    }
  }])
  .config(function ($translateProvider) {
    $translateProvider
      .translations('en', {
        "CHOOSE_LANG": "UKR",
        "NAV_ABOUT": "About",
        "NAV_SCHEDULE": "Timetable",
        "NAV_REGISTRATION": "Registration",
        "NAV_PARTNERS": "Partners",
        "NAV_CONTACTS": "Contacts",
        "MAIN_DESCRIPTION": "The second Ukrainian conference of vitreoretinal surgeons",
        "MAIN_DESCRIPTION_PREVIOUS": "Retina Lviv 2016",
        "BTN_REGISTRATION": "Registration",
        "DEAR_COLLEAGUES": "Dear colleagues",
        "INTRO_TEXT_1": "I cordially invite you to take participation in the second conference \"Retina Lviv 2018\" (innovations and controversies in vitrеoretinal surgery).",
        "INTRO_TEXT_2": "The Сonference will be held May 4-5, 2018 in the city of Lviv, Ukraine.",

        "INTRO_TEXT_3": "Topics of the conference:",
        "INTRO_TEXT_4": "Controversies in vitreoretinal surgery \n New surgical techniques, innovations \n Laser coagulation in retina diseases \n Complications of vitreoretinal surgery, retinal complications of anterior segment surgery Inferior retinal detachments. \n Causes and management of recurrences. \n Vitreoretinal surgery for eye injury",
        "INTRO_TEXT_5": "",
        "INTRO_TEXT_6": "",

        "INTRO_TEXT_7": "Prof. Igor Novytskyy",
        "COUNTER_TITLE": "before start",
        "ROAD_TITLE": "The format of the сonference",
        "ROAD_TEXT": "The сonference will take place in the form of short (1.5 hrs.) sessions with individual topics. Reports of up to 7 minutes (including the slides and movies) preferably present as an issue for discussion. Question Time is approximately 5 minutes and discussion - 5 minutes. As part of the сonference are also scheduled several lectures (30 minutes) which will take place simultaneously in different classrooms for the audience according to its  interests.",
        "ROAD_HOW_TO": "How to become a speaker?",
        "ROAD_HOW_ANS": "Organization of the sessions and detailed program  requires  confirmation of your participation as a speaker (lecturer)",
        "ROAD_DATE_1": "Till November 15, 2016",
        "ROAD_DATE_TEXT_1": "send the topic and full text of the report or lecture to the ",
        "ROAD_DATE_2": "Till December 15, 2016",
        "ROAD_DATE_TEXT_2": "scientific and organizational work on session planning involving speakers and moderators of corresponding session will be held.",
        "ROAD_DATE_3": "March 1, 2016",
        "ROAD_DATE_TEXT_3": "final program of the conference will be approved.",
        "DOWNLOAD_BTN": "Downloads program",
        "SESSIONS": "Topics sessions",
        "SESSION_TITLE_1": "Controversies in vitreoretinal surgery",
        "SESSION_TEXT_1": "Standard procedure (gas or silicone - indications, advantages, disadvantages). Complicated cases. (vitreo-retinal proliferation, technique of removing  epiretinal and subretinal membranes retinotomy, retinectomy). Removing the inner limiting membrane - advantages, disadvantages. Silicon glaucoma – occurrence, prevention methods, treatment.",
        "SESSION_TITLE_2": "New surgical techniques, innovations",
        "SESSION_TEXT_2": "Indications for surgery. Preparing the patient for surgery. Standard procedure. Complicated cases. ",
        "SESSION_TITLE_3": "Laser coagulation in retina diseases",
        "SESSION_TEXT_3": "Long standing macular holes. The mechanism of therapeutic action of inner limiting membrane removing.",
        "SESSION_TITLE_4": "Complications of vitreoretinal surgery, retinal complications of anterior segment surgery",
        "SESSION_TEXT_4": "Hemophthalm - indications for surgery. Intraocular foreign body. Lens luxation, IOL fixation. Endophthalmitis: when an antibiotic and when surgery? If damaged everething - all at once?",
        "SESSION_TITLE_6": "Lower retinal detachments. Relapses: causes, management",
        "SESSION_TEXT_6": "What vitreo-retinal surgeon can do?",
        "SESSION_TITLE_5": "Features of vitreoretinal surgery for eye injury",
        "SESSION_TEXT_5": "or a separate report",
        "SCHEDULE": "timetable",
        "SCHEDULE_1": "Registration",
        "SCHEDULE_2": "Opening the сonference",
        "SCHEDULE_3": "Ι session",
        "SCHEDULE_4": "Coffee break",
        "SCHEDULE_5": "ΙΙ session",
        "SCHEDULE_6": "Lunch Break",
        "SCHEDULE_7": "Lecture",
        "SCHEDULE_8": "ΙΙΙ session",
        "SCHEDULE_9": "Coffee break",
        "SCHEDULE_10": "ΙV session",
        "SCHEDULE_11": "Closing the сonference",
        "SCHEDULE_12": "Dinner",
        "REGISTRATION_CRITERIA": "Conditions of participation",
        "FREE_PLACES": "20 tickets left !",
        "REGISTRATION_STEP_1": "Step 1: Register",
        "NAME_PLACEHOLDER": "Name",
        "NAME_ERROR_MESSAGE": "Enter your name",
        "SNAME_PLACEHOLDER": "Surname",
        "SNAME_ERROR_MESSAGE": "Enter your surname",
        "EMAIL_PLACEHOLDER": "E-mail address",
        "INTERN_PLACEHOLDER": "Are you intern ?",
        "EMAIL_ERROR_PLACEHOLDER": "Enter your email address",
        "EMAIL_INTERN_PLACEHOLDER": "Please choose is you intern ?",
        "INTERN_ERROR_PLACEHOLDER": "Choose one",
        "PHONE_PLACEHOLDER": "Phone",
        "CITY_PLACEHOLDER": "City",
        "CITY_ERROR_PLACEHOLDER": "Enter city name",
        "PHONE_ERROR_PLACEHOLDER": "Enter your phone number",
        "MESSAGE_PLACEHOLDER": "Your message",
        "SUBMIT_BTN": "Register",
        "SUBMIT_BTN_SUCCESS": "You registered",
        "REGISTRATION_STEP_2": "Step 2: Payment for participation",
        "REGISTRATION_PARTICIPATION_1": "For all participating",
        "REGISTRATION_PARTICIPATION_2": "For  interns",
        "PAY_1": "Till January, 2015 – 300 UAH",
        "PAY_INTERN_1": "Till January, 2015 – 200 UAH",
        "PAY_2": "Till March, 2015 – 400 UAH",
        "PAY_INTERN_2": "Till March, 2015 – 300 UAH",
        "PAY_3": "On the day of сonference - 500 UAH",
        "PAY_INTERN_3": "On the day of сonference - 400 UAH",
        "PAY_OPTIONS_1": "Make a monetary contribution by transferring a certain amount to the account",
        "PAY_OPTIONS_2": "addressed",
        "CART_OWNER": "Revych Andrei V.",
        "PAY_OPTIONS_1_3": "",
        "PAY_OPTIONS_3": "After you pass Step 1, our manager will contact you and send a payment document on your e-mail. You should print it and make payment in the bank. After completing the given items our manager will contact you once more for final confirmation of your participation in the сonference ",
        "LOCATION_PLACE": "Hotel \"Sonata\"",
        "LOCATION_PLACE_STREET": "Ukraine, Lviv, Morozna str. 14",
        "LOCATION_PLACE_PHONE": " +38 (032) 232 50 00",
        "ORG_GROUP": "Organizational group",
        "ORG_NAME_ONE": "Andriy Revich",
        // "ORG_NAME_SMETANA": "Vira Vavilova",
        "FOOTER_ORG": "Organizers",
        "BTN_RESULT_PHOTO": "Photo Report",
        "BTN_RESULT_VIDEO": "Video Report",
        "BTN_RESULT_RECORD": "Video Record",
        "PARTNER_LINK_1": "Click to visit Oculus web site",
        "PARTNER_LINK_2": "Click to visit WWWWWW web site",
        "PARTNER_LINK_3": "Click to visit WWWWWW web site",
        "PARTNER_LINK_4": "Click to visit WWWWWW web site",
        "YES": "Yes",
        "No": "No ",
        "REGISTER_COMPLETE": "Registration is	closed.	"
      }).translations('ua', {
      "REGISTER_COMPLETE": "Реєстрація закрита",
      "PARTNER_LINK_1": "Натисніть щоб відвідати інтернет сторінку медичного центру Oculus",
      "PARTNER_LINK_2": "Натисніть щоб відвідати інтернет сторінку медичного центру Oculus",
      "PARTNER_LINK_3": "Натисніть щоб відвідати інтернет сторінку медичного центру Oculus",
      "PARTNER_LINK_4": "Натисніть щоб відвідати інтернет сторінку медичного центру Oculus",
      "CHOOSE_LANG": "ENG",
      "NAV_ABOUT": "про симпозіум",
      "NAV_SCHEDULE": "розклад",
      "NAV_REGISTRATION": "реєстрація",
      "NAV_PARTNERS": "партнери",
      "NAV_CONTACTS": "контакти",
      "MAIN_DESCRIPTION": "Друга всеукраїнська конференція офтальмологів",
      "MAIN_DESCRIPTION_PREVIOUS": "Retina Lviv 2016",
      "BTN_REGISTRATION": "Реєстрація",
      "BTN_RESULT_PHOTO": "Фотозвіт",
      "BTN_RESULT_VIDEO": "Відеозвіт",
      "BTN_RESULT_RECORD": "Запис Конференції",
      "DEAR_COLLEAGUES": "Шановні колеги!",
      "INTRO_TEXT_1": "Ми щиро запрошуємо Вас прийняти участь у другому конференції«Ретіна-Львів 2018» (іновації та контроверсії у вітреоретинальній хірургії).",
      "INTRO_TEXT_2": "Конференція відбудеться 4-5 травня 2018 року у місті Львів, Україна.",
      "INTRO_TEXT_3": "Крім наукової програми, пропонуємо екскурсійний план для супроводжуючих осіб (у день конференції) та для всіх учасників конференції на наступний день (неділя, 6 травня)",
      "INTRO_TEXT_4": "Ми зробимо все можливе, щоб наша зустріч була цікавою, корисною і залишила добру згадку про Ваше перебування у місті Лева!",
      "INTRO_TEXT_5": "З повагою,",
      "INTRO_TEXT_6": "Головний лікар МЦ «Oculus»",
      "INTRO_TEXT_7": "Професор Ігор Новицький",
      "COUNTER_TITLE": "До початку залишилось",
      "ROAD_TITLE": "Формат симпозіуму",
      "ROAD_TEXT": "Конференція проходитиме у форматі коротких (1,5 год.) сесій з окремими темами. Доповіді тривалістю до 7 хвилин (включно зі слайдами і фільмами) бажано представити як питання для обговорення. Час на запитання становить орієнтовно 5 хвилин, і обговорення – ще 5 хвилин. В рамках симпозіуму також планується проведення кількох лекцій (до 30 хвилин), які будуть відбуватися одночасно в різних аудиторіях для слухачів згідно з їхніми інтересами.",
      "ROAD_HOW_TO": "Як стати доповідачем?",
      "ROAD_HOW_ANS": "Для формування сесій та детальної програми необхідно підтвердити Вашу участь як доповідача (лектора)",
      "ROAD_DATE_1": "до 15 грудня 2015 року",
      "ROAD_DATE_TEXT_1": "надіслати тему та текст доповіді або лекції на адресу: ",
      "ROAD_DATE_2": "до 15 лютого 2016 року",
      "ROAD_DATE_TEXT_2": "проводитиметься науково-організаційна робота з планування сесій з залученням доповідачів і модераторів відповідної сесії.",
      "ROAD_DATE_3": "1 березня 2016 року",
      "ROAD_DATE_TEXT_3": "буде сформована остаточна програма симпозіуму.",
      "DOWNLOAD_BTN": "завантажити програму",
      "SESSIONS": "ПРОГРАМА КОНФЕРЕНЦІЇ",
      "SESSION_TITLE_1": "Контроверсії у вітреоретинальній хірургії",
      "SESSION_TEXT_1": "Стандартна процедура (газ чи силікон – покази, переваги, недоліки). Ускладнені випадки.",
      "SESSION_TITLE_2": "Нові прийоми хірургічної техніки, іновації",
      "SESSION_TEXT_2": "Покази до операції. Підготовка хворого до операції. Стандартна процедура. Видалення внутрішньої пограничної мембрани – переваги, недоліки.",
      "SESSION_TITLE_3": "Лазерна коагуляція при захворюваннях сітківки",
      "SESSION_TEXT_3": "Довготривала макулярна дірка, особливості хірургії. Механізм дії видалення внутрішньої пограничної мембрани.",
      "SESSION_TITLE_4": "Ускладнення вітреоретинальної хірургії, ретинальні ускладнення хірургії переднього відрізку",
      "SESSION_TEXT_4": "Гемофтальм – покази до операції. Внутрішньоочне стороннє тіло – покази до трансвітреального видалення. Вивих кришталика, фіксація ІОЛ. Ендофтальміт, антибіотикотерапія, покази до закритої вітректомії.",
      "SESSION_TITLE_6": "Нижні відшарування. Рецидиви: причини, тактика",
      "SESSION_TEXT_6": "Що може вітреоретинальний хірург?",
      "SESSION_TITLE_5": "Можливості вітреоретинальної хірургії при травмі ока",
      "SESSION_TEXT_5": "або окрема доповідь",
      "SCHEDULE": "Розклад",
      "SCHEDULE_1": "Реєстрація",
      "SCHEDULE_2": "Відкриття симпозіуму",
      "SCHEDULE_3": "Ι сесія",
      "SCHEDULE_4": "Перерва на каву",
      "SCHEDULE_5": "ΙΙ сесія ",
      "SCHEDULE_6": "Обід",
      "SCHEDULE_7": "Лекція",
      "SCHEDULE_8": "ΙΙΙ сесія",
      "SCHEDULE_9": "Перерва на каву",
      "SCHEDULE_10": "ΙV сесія",
      "SCHEDULE_11": "Закриття симпозіуму",
      "SCHEDULE_12": "Вечеря",
      "REGISTRATION_CRITERIA": "Умови участі",
      "FREE_PLACES": "Залишилось 20 вільних місць !",
      "REGISTRATION_STEP_1": "Крок 1: Реєстрація",
      "NAME_PLACEHOLDER": "Ім’я",
      "NAME_ERROR_MESSAGE": "Введіть ім’я",
      "SNAME_PLACEHOLDER": "Прізвище",
      "SNAME_ERROR_MESSAGE": "Введіть прізвище",
      "EMAIL_PLACEHOLDER": "Електронна адреса",
      "INTERN_PLACEHOLDER": "Ви інтерн ?",
      "EMAIL_ERROR_PLACEHOLDER": "Введіть електронну адресу",
      "EMAIL_INTERN_PLACEHOLDER": "Вкажіть чи вляєтесь ви інтерном",
      "PHONE_PLACEHOLDER": "Телефон",
      "CITY_PLACEHOLDER": "Місто",
      "PHONE_ERROR_PLACEHOLDER": "Введіть номер телефону",
      "CITY_ERROR_PLACEHOLDER": "Введіть назву міста",
      "MESSAGE_PLACEHOLDER": "Ваше повідомлення",
      "SUBMIT_BTN": "Зареєструватись",
      "SUBMIT_BTN_SUCCESS": "Ви зареєструвались",
      "REGISTRATION_STEP_2": "Крок 2: Оплата участі",
      "REGISTRATION_PARTICIPATION_1": "Для учасників",
      "REGISTRATION_PARTICIPATION_2": "Для лікарів - інтернів",
      "PAY_1": "до 1 січня 2016 – 300 грн",
      "PAY_INTERN_1": "до 1 січня 2016 – 200 грн",
      "PAY_2": "до 1 березня 2016 – 400 грн",
      "PAY_INTERN_2": "до 1 березня 2016 – 300 грн",
      "PAY_3": "у день проведення – 500 грн",
      "PAY_INTERN_3": "у день проведення – 400 грн",
      "PAY_OPTIONS_1": "Після реєстрації через сайт (Крок 1), з Вами зв’яжеться наш представник та надішле квитанцію для оплати. Вам потрібно буде роздрукувати квитанцію та здійснити грошовий переказ, звернувшись у банк.",
      "CART_OWNER": "Ревич Андрій Васильович",
      "PAY_OPTIONS_1_3": "З вами зв’яжеться наш представник та надішле квитанцію для оплати. Вам потрібно буде роздрукувати квитанцію та здійснити оплату, звернувшись у банк.",
      "PAY_OPTIONS_3": " Після виконання вищезгаданих пунктів з Вами ще раз сконтактується наш представник для остаточного підтвердження Вашої участі у конференції«РЕТІНА-ЛЬВІВ 2016».",
      "LOCATION_PLACE": "Готель «Sonata»",
      "LOCATION_PLACE_STREET": "Україна, м.Львів,вул.Морозна, 14",
      "LOCATION_PLACE_PHONE": "тел. +38 (032) 232 50 00",
      "ORG_GROUP": "Організаційна група",
      "ORG_NAME_ONE": "Андрій Ревич",
      // "ORG_NAME_SMETANA": "Вавілова Віра",
      "FOOTER_ORG": "Організатори",
      "YES": "Так",
      "NO": "Ні"
    });

    $translateProvider.preferredLanguage('ua');
    $translateProvider.useSanitizeValueStrategy(null);

  })
  .directive('animate', function () {
    return function (scope, element) {
      element.on('click', function (event) {
        event.stopPropagation();
        event.preventDefault();

        var $anchor = $(this);

        $('html, body').stop().animate({
          scrollTop: $($anchor.attr('href')).offset().top,
        }, 1500, 'easeInOutExpo');
      });
    };
  });
