angular.module("public").run(["$templateCache", function($templateCache) {$templateCache.put("app/countdown/countdown.html","<div class=\"countdown-wrapper hidden-sm hidden-xs\"><h1 class=\"text-center\">До початку залишилось</h1><div class=\"countdown countdown-container container\"><div class=\"clock row\"><div class=\"clock-item clock-days countdown-time-value col-sm-6 col-md-3\"><div class=\"wrap\"><div class=\"inner\"><div id=\"canvas-days\" class=\"clock-canvas\"></div><div class=\"text\"><p class=\"val\">0</p><p class=\"type-days type-time\">DAYS</p></div></div></div></div><div class=\"clock-item clock-hours countdown-time-value col-sm-6 col-md-3\"><div class=\"wrap\"><div class=\"inner\"><div id=\"canvas-hours\" class=\"clock-canvas\"></div><div class=\"text\"><p class=\"val\">0</p><p class=\"type-hours type-time\">HOURS</p></div></div></div></div><div class=\"clock-item clock-minutes countdown-time-value col-sm-6 col-md-3\"><div class=\"wrap\"><div class=\"inner\"><div id=\"canvas-minutes\" class=\"clock-canvas\"></div><div class=\"text\"><p class=\"val\">0</p><p class=\"type-minutes type-time\">MINUTES</p></div></div></div></div><div class=\"clock-item clock-seconds countdown-time-value col-sm-6 col-md-3\"><div class=\"wrap\"><div class=\"inner\"><div id=\"canvas-seconds\" class=\"clock-canvas\"></div><div class=\"text\"><p class=\"val\">0</p><p class=\"type-seconds type-time\">SECONDS</p></div></div></div></div></div></div></div>");
$templateCache.put("app/introduction/introduction.html","<div class=\"container\"><div class=\"row\"><div class=\"col-lg-5 col-md-6 col-sm-12 col-xs-12 speaker-wrap\"><img class=\"img-speaker\" src=\"assets/images/retina/novitskiy.png\" alt=\"Retina Lviv\"></div><div class=\"col-lg-7 col-md-6 col-sm-12 col-xs-12 intro-text\"><h3>Шановні колеги!</h3><p>Щиро запрошую Вас прийняти участь у симпозіумі «Ретіна-Львів 2016», присвячений другій річниці створення клініки «Oculus»! Зустріч відбудеться у місті Львові 2 квітня 2016 року.</p><p>Метою симпозіуму є пошук та вироблення спільних поглядів на стандартизацію вітрео-ретинальних операцій. Форма конференції передбачає широке обговорення питань, внесених у програму, як між доповідачами, так і з аудиторією.</p><p>Крім наукової програми, розроблено екскурсійний план для супроводжуючих осіб (у день конференції) та для всіх учасників конференції на наступний день (неділя, 3 квітня)<br><a href=\"http://lviv.travel/en/index\">lviv.travel</a><br><a href=\"http://lviv-online.com\">lviv-online.com</a><br><a href=\"http://www.lviv.ua\">lviv.ua</a></p><p>Ми зробимо все можливе, щоб наша зустріч була цікавою, корисною і залишила добру згадку про Ваше перебування у місті Лева!</p><p>З повагою,<br><strong class=\"text-strong\">Головний лікар клініки «Oculus»<br>Професор Ігор Новицький</strong></p></div></div></div>");
$templateCache.put("app/location/location.html","<div class=\"container-fluid lviv-location\"><div class=\"row\"><div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12 block location-bg\"></div><div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12 block\"><iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.2961108159507!2d24.015488097411463!3d49.8368934538947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add7a0904a91d%3A0x633df7b80b9d1cea!2z0LLRg9C7LiDQnNCw0YLQtdC50LrQsCDQry4sIDYsINCb0YzQstGW0LIsINCb0YzQstGW0LLRgdGM0LrQsCDQvtCx0LvQsNGB0YLRjCwgNzkwMDA!5e0!3m2!1suk!2sua!4v1446417093157\" width=\"100%\" height=\"600px\" frameborder=\"0\" style=\"border:0\" allowfullscreen=\"\"></iframe></div></div><div class=\"contact\"><div class=\"text-center map\"><i class=\"fa fa-map-marker\"></i></div><div class=\"text-center\">Готель «Premier Hotel Dnister»<hr>вул. Матейка, 6, Львів 79007, Україна<hr><i class=\"fa fa-phone\"></i> тел. +38 032 297 43 17<hr>Факс +38 032 297 10 21<br>dnister-hotel.phnr.com<br>reservation@dnister.lviv.ua</div></div></div>");
$templateCache.put("app/partners/partners.html","<aside class=\"clients\"><div class=\"container\"><div class=\"row\"><div class=\"col-md-3 col-sm-6\"><a href=\"#\"><img src=\"assets/images/logos/envato.jpg\" class=\"img-responsive img-centered\" alt=\"\"></a></div><div class=\"col-md-3 col-sm-6\"><a href=\"#\"><img src=\"assets/images/logos/designmodo.jpg\" class=\"img-responsive img-centered\" alt=\"\"></a></div><div class=\"col-md-3 col-sm-6\"><a href=\"#\"><img src=\"assets/images/logos/themeforest.jpg\" class=\"img-responsive img-centered\" alt=\"\"></a></div><div class=\"col-md-3 col-sm-6\"><a href=\"#\"><img src=\"assets/images/logos/creative-market.jpg\" class=\"img-responsive img-centered\" alt=\"\"></a></div></div></div></aside>");
$templateCache.put("app/registration/registration.html","<div class=\"container\"><div class=\"row registration-text\"><div class=\"col-lg-12 text-center conditions\"><h1 class=\"section-heading\">Умови участі</h1><br><br><h5>Для участі у симпозіумі «РЕТІНА-ЛЬВІВ 2016» необхідно зробити разовий внесок у розмірі:</h5><br><ul class=\"text-regist\"><li><i class=\"fa fa-ticket\"></i> <strong>до 15 грудня 2015 – 300 грн</strong></li><li><i class=\"fa fa-ticket\"></i> <strong>до 15 лютого 2015 – 400 грн</strong></li><li><i class=\"fa fa-ticket\"></i> <strong>у день проведення – 450 грн</strong></li></ul><br><h5>Для підтвердження своєї участі у симпозіумі Вам необхідно:</h5><br><p class=\"text-regist\">Заповнити форму реєстрації, яка знаходиться нижче.<br>Зробити грошовий внесок, перерахувавши певну суму на рахунок <i class=\"fa fa-credit-card\"></i> <strong>{{cartNumber}}</strong>, на ім’я {{ moneyOwner }}</p><br><p class=\"text-regist\">Після виконання наданих пунктів з Вами зв’яжеться наш менеджер, для остаточного підтвердження Вашої участі у симпозіумі «РЕТІНА-ЛЬВІВ 2016».<br></p></div></div><div class=\"row\"><div class=\"col-lg-12\"><h1 class=\"text-uppercase text-center form-title\">форма реєстрації</h1><form name=\"register\" id=\"contactForm\" ng-submit=\"submit(form)\" novalidate=\"\"><div class=\"row\"><div class=\"col-md-6\"><div class=\"form-group\"><input type=\"text\" name=\"name\" class=\"form-control\" ng-model=\"form.name\" placeholder=\"Ім’я\" id=\"name\" required=\"\"><p ng-if=\"register.name.$invalid && register.$submitted\" class=\"help-block text-danger\">Введіть ім’я</p></div><div class=\"form-group\"><input type=\"text\" name=\"sname\" class=\"form-control\" placeholder=\"Прізвище\" ng-model=\"form.sname\" required=\"\"><p ng-if=\"register.sname.$invalid && register.$submitted\" class=\"help-block text-danger\">Введіть прізвище</p></div><div class=\"form-group\"><input type=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Електрона адреса\" ng-model=\"form.email\" required=\"\"><p ng-if=\"register.email.$invalid && register.$submitted\" class=\"help-block text-danger\">Введіть електронну адресу</p></div><div class=\"form-group\"><input type=\"tel\" name=\"phone\" class=\"form-control\" ng-model=\"form.phone\" mask=\"(999) 999-99-99\" id=\"phone\" placeholder=\"Телефон\" required=\"\"><p ng-if=\"register.phone.$invalid && register.$submitted\" class=\"help-block text-danger\">Введіть номер телефону</p></div></div><div class=\"col-md-6\"><div class=\"form-group\"><textarea class=\"form-control\" placeholder=\"Ваше повідомлення\" id=\"message\" ng-model=\"form.message\" required=\"\" data-validation-required-message=\"Please enter a message.\"></textarea><p class=\"help-block text-danger\"></p></div></div><div class=\"clearfix\"></div><div class=\"col-lg-12 text-center\"><button type=\"submit\" class=\"btn btn-xl\">Зареєструватись</button></div></div></form></div></div></div>");
$templateCache.put("app/roadmap/roadmap.html","<div class=\"roadmap\"><div class=\"container\"><div class=\"row\"><div class=\"col-lg-12\"><h2 class=\"text-center\">Формат симпозіуму</h2><p class=\"road-text\">Симпозіум проходитиме у форматі коротких (1,5 год.) сесій з окремими темами. Доповіді тривалістю до 7 хвилин (включно зі слайдами і фільмами) бажано представити як питання для обговорення. Час на запитання становить орієнтовно 5 хвилин, і обговорення – ще 5 хвилин. В рамках симпозіуму також планується проведення кількох лекцій (до 30 хвилин), які будуть відбуватися одночасно в різних аудиторіях для слухачів згідно з їхніми інтересами.</p><h2 class=\"text-center\">Як стати доповідачем?</h2><p class=\"road-text\">Для формування сесій та детальної програми необхідно підтвердити Вашу участь як доповідача (лектора)</p><ul class=\"road-text\"><li><i class=\"fa fa-calendar\"></i> <strong>до 15 листопада 2015 року</strong> - надіслати тему доповіді (доповідей) або лекції</li><li><i class=\"fa fa-calendar\"></i> <strong>до 15 грудня 2015 року</strong> - надіслати текст виступу</li><li><i class=\"fa fa-calendar\"></i> <strong>до 15 лютого 2016 року</strong> - проводитиметься науково-організаційна робота з планування сесій з залученням доповідачів і модераторів відповідної сесії.</li><li><i class=\"fa fa-calendar\"></i> <strong>1 березня 2016 року</strong> - Вам буде надіслано остаточне підтвердження Вашої доповіді (доповідей) і (або) лекції на симпозіумі, а також програма конференції.</li></ul></div></div><a href=\"assets/program.pdf\"><button class=\"btn btn-primary btn-lg pull-right\">Завантажити</button></a></div></div>");
$templateCache.put("app/schedule/schedule.html","<div class=\"container\"><div class=\"row\"><div class=\"col-lg-12 text-center\"><h2 class=\"section-heading\">Розклад</h2></div></div><div class=\"schedule\"><div class=\"item\" ng-repeat=\"item in schedule\" style=\"background-color: {{item.bg_color}}; color: {{item.font_color}}\"><div class=\"row\"><div class=\"col-lg-2 col-md-2 col-sm-2 hidden-xs icon\"><i class=\"fa {{ item.icon}}\"></i></div><div class=\"col-lg-7 col-md-6 col-sm-6 col-xs-12 text-uppercase\">{{ item.text}}</div><div class=\"col-lg-3 col-md-4 col-sm-4 col-xs-12\">{{item.time}}</div></div></div></div><div class=\"row\"><div class=\"col-lg-8 col-lg-offset-2 text-center\"><p class=\"large text-muted\"></p></div></div></div>");
$templateCache.put("app/session/session.html","<div class=\"container\"><div class=\"row\"><div class=\"col-lg-12 text-center\"><h1 class=\"section-heading\">Теми сесій</h1><br><br></div></div><div class=\"row\"><div class=\"col-lg-12\"><ul class=\"timeline\"><li><div class=\"timeline-image\"><img class=\"img-circle img-responsive\" src=\"assets/images/about/1.jpg\" alt=\"\"></div><div class=\"timeline-panel\"><div class=\"timeline-heading\"><h4 class=\"subheading\">Відшарування сітківки</h4></div><div class=\"timeline-body\"><p class=\"text-muted\">Стандартна процедура (газ чи силікон – покази, переваги, недоліки). Ускладнені випадки (вітрео-ретинальна проліферація, техніка видалення епіретинальних і субретинальних мембран, ретінотомія, ретіноектомія). Видалення внутрішньої пограничної мембрани – за і проти. Фотоциркляж – за і проти. Силіконова глаукома – як часто?, як запобігти?, що робити?</p></div></div></li><li class=\"timeline-inverted\"><div class=\"timeline-image\"><img class=\"img-circle img-responsive\" src=\"assets/images/about/2.jpg\" alt=\"\"></div><div class=\"timeline-panel\"><div class=\"timeline-heading\"><h4 class=\"subheading\">Діабетична ретінопатія</h4></div><div class=\"timeline-body\"><p class=\"text-muted\">Покази до операції. Підготовка хворого до операції. Стандартна процедура (повітря, газ, силікон – переваги, недоліки). Видалення епіретинальних мембран. Чи можна щось лишати? Особливості лазерної коагуляції: де, скільки, як сильно? Ускладнені випадки, техніка. Видалення внутрішньої пограничної мембрани – за і проти, ФЕК – за і проти</p></div></div></li><li><div class=\"timeline-image\"><img class=\"img-circle img-responsive\" src=\"assets/images/about/3.jpg\" alt=\"\"></div><div class=\"timeline-panel\"><div class=\"timeline-heading\"><h4 class=\"subheading\">Макулярна дірка</h4></div><div class=\"timeline-body\"><p class=\"text-muted\">Стадії і покази. Техніка операції при довготривалих макулярних дірках. Механізм лікувальної дії видалення внутрішньої пограничної мембрани.</p></div></div></li><li class=\"timeline-inverted\"><div class=\"timeline-image\"><img class=\"img-circle img-responsive\" src=\"assets/images/about/4.jpg\" alt=\"\"></div><div class=\"timeline-panel\"><div class=\"timeline-heading\"><h4 class=\"subheading\">Травма і вітрео-ретинальна хірургія</h4></div><div class=\"timeline-body\"><p class=\"text-muted\">Гемофтальм – покази до операції. Стороннє тіло – покази до транссклерального і трансвітреального видалення стороннього тіла. Травматична катаракта з розривом задньої капсули – чи можна обійтися без вітрео-ретинальної операції? Люксація кришталика. Способи фіксації ІОЛ. Ендофтальміт. Коли антибіотик, коли операція? Коли пошкоджено все. Все і зразу?</p></div></div></li><li><div class=\"timeline-image\"><img class=\"img-circle img-responsive\" src=\"assets/images/about/5.jpg\" alt=\"\"></div><div class=\"timeline-panel\"><div class=\"timeline-heading\"><h4 class=\"subheading\">Дитяча патологія</h4></div><div class=\"timeline-body\"><p class=\"text-muted\">Що може вітрео-ретинальний хірург? Діагностика ретінопатії недоношених. Коли лазер? Коли операція?</p></div></div></li></ul></div></div></div>");}]);