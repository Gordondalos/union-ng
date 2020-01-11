(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/about/about.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/about/about.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>О Нас</h3>\n\n<p>\n  Союз - компания, оказывающая услуги по обслуживанию ИТ-инфраструктуры,\n  а также созданию ИТ-инфраструктуры с нуля и ее модернизации.\n</p>\n\n<p>\n  Вы можете положиться на наш более чем десятилетний опыт работы и компетенции наших специалистов,\n  чтобы ваши компьютеры, серверы, сеть работали именно так, как было задумано.\n  Говоря о компетенциях, мы имеем в виду как многолетний опыт решения самых разнообразных проблем.\n</p>\n\n<p>\n  Мы регулярно интересуемся у клиентов, что именно способствует нашему долгому сотрудничеству с ними.\n</p>\n\n<p>\n  В результате этих опросов мы увидели, что главным для них являются те же факторы,\n  на которые и мы сами делаем основной упор в работе.\n</p>\n\n\n<h4>Как мы работаем</h4>\n\n<ul>\n  <li>Предварительное обследование.</li>\n  <li>Выясняем что конкретно нужно новому клиенту.</li>\n  <li>Выясняем, что и в каком режиме нужно обслуживать.</li>\n  <li>Проводим стартовый аудит.</li>\n  <li>Высылаем коммерческое предложение и договор на обслуживание.</li>\n  <li>Заключение договора.</li>\n  <li>Заключаем договор на обслуживание и соглашение о конфиденциальности.\n  </li>\n  <li>С этого момента все вопросы, связанные с ИТ, вы можете адресовать нам.\n  </li>\n</ul>\n\n\n<h4>Режим обслуживания.</h4>\n\n<p>\n  Назначаем ответственного менеджера и инженера, которые всегда в курсе текущей\n  ситуации у данного конкретного клиента.\n</p>\n<p>\n  Составляем подробное описание ИТ-инфраструктуры клиента.\n</p>\n<p>\n  Оперативно устраняем все возникающие инциденты.\n</p>\n\n<p>\n  Ведем полный журнал всех инцидентов и изменений в системе ServiceDesk.\n</p>\n\n\n<h4>Оптимизация работы.</h4>\n\n<p>\n  Уже в процессе стартового аудита мы получаем информацию для улучшения работы всех ИТ-систем.\n</p>\n\n<p>\n  В процессе обслуживания мы анализируем ИТ-инфраструктуру, оптимизируем ее, разрабатываем предложения по улучшению.\n\n</p>\n<p>\n  Изменения, согласованные с заказчиком, выполняются в рамках обслуживания либо в виде отдельных проектов.\n</p>\n\n<p>\n  Мы осуществляем информационную поддержку клиентов, рассказываем им о новых технологиях, которые могут помочь в ведении бизнеса.\n</p>\n\n<h4>Мы развиваемся</h4>\n\n<p>\n  Если в этом описании не указано вашей задачи - обратитесь к нашим специалистам. Возможно, будет решен и ваш вопрос.\n  Мы постоянно развиваемся, а идеи о взаимодействии по некоторым новым направлениям нам подсказывает сама жизнь и клиенты.\n</p>\n\n<h4>География наших услуг</h4>\nБольшинство наших клиентов, заключивших абонентский договор на услуги аутсорсинга ИТ-систем,\nнаходятся в Бишкеке и близлежащих к Бишкеку поселков.\nПри этом мы активно расширяем географию предоставления наших услуг.\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container\n  (backdropClick)=\"close()\">\n  <mat-sidenav #sidenav (keydown.escape)=\"close()\" disableClose>\n\n    <div class=\"side-bar-block\">\n      <div class=\"posr\">\n        <i class=\"fa fa-close\" (click)=\"close()\"></i>\n      </div>\n\n      <div class=\"w100 py8\">\n        <a (click)=\"close()\" routerLink=\"/\" class=\"p16 d-block  text-decoration-none\"><i class=\"fa fa-forward f12\"></i> Главная</a>\n        <a (click)=\"close()\" routerLink=\"/about\" class=\"p16 d-block  text-decoration-none\"><i class=\"fa fa-forward f12\"></i> Окомпании</a>\n        <a (click)=\"close()\" routerLink=\"/service\" class=\"p16 d-block  text-decoration-none\"><i class=\"fa fa-forward f12\"></i> Услуги</a>\n        <a (click)=\"close()\" routerLink=\"/price\" class=\"p16 d-block  text-decoration-none\"><i class=\"fa fa-forward f12\"></i> Прайс лист</a>\n      </div>\n\n    </div>\n\n\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <union-header></union-header>\n    <div class=\"container mt16\">\n      <div class=\"d-flex\">\n        <div class=\"w-30p\">\n          <union-side-bar></union-side-bar>\n        </div>\n        <div class=\"w-70p content p16\">\n          <router-outlet></router-outlet>\n        </div>\n      </div>\n    </div>\n\n    <union-footer></union-footer>\n\n\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/contact/contact.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/contact/contact.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>contact works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/footer/footer.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"w100 bg-secondary container\">\n    <div class=\"d-flex\">\n      <div class=\"w-30p p16\">\n        <a class=\"text-decoration-none text-white\" href=\"http://gordondalos.github.io/#/\">Копирайт gordondalos.github.io</a>\n      </div>\n      <div class=\"w-70p d-flex px16 bg-white pt16\">\n        <a class=\"text-gray text-decoration-none f14 mx16\" routerLink=\"/partner\">Партнеры</a>\n        |\n        <a class=\"text-gray text-decoration-none f14 mx16\" routerLink=\"/soft\">Софт</a>\n<!--        |-->\n<!--        <a class=\"text-gray text-decoration-none f14 mx16\" routerLink=\"/contact\">Контакты</a>-->\n\n      </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/header/header.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"d-flex flex-wrapper\">\r\n    <div class=\"left-side w-50p p16 posr\">\r\n      <div class=\"logo\"></div>\r\n      <i class=\"fa fa-bars text-white side-bar f24\" (click)=\"openSideBar()\" ></i>\r\n    </div>\r\n    <div class=\"right-side w-50p pt16 px32 pb16 support\">\r\n      <union-mini-menu></union-mini-menu>\r\n    </div>\r\n  </div>\r\n\r\n  <union-menu></union-menu>\r\n  <div class=\"d-flex\">\r\n    <union-slogan></union-slogan>\r\n    <div class=\"posr\">\r\n      <div class=\"company-face\">\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main-content/main-content.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main-content/main-content.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  Союз - компания, оказывающая услуги по обслуживанию\n  ИТ-инфраструктуры наших клиентов. Мы также проводим\n  работы по созданию и модернизации ИТ-инфраструктуры.\n  Вам нужно, чтобы компьютеры, серверы, сети в вашей компании работали\n  без сбоев – обратитесь к нам, и мы сделаем все, чтобы вы концентрировались только на бизнесе.\n</p>\n\n<div class=\"d-flex align-items-center mt16\">\n  <h3 class=\"mt16 mb16 mr16\">\n    Услуги компании\n  </h3>\n  <a  mat-raised-button routerLink=\"/service\">показать все</a >\n</div>\n\n<p class=\"mb16\">Мы вынесли самые востребованные услуги на главную страницу,\n  но у вас также есть возможность ознакомиться с полным перечнем предоставляемых услуг нашей IT-компании,\n  нажав на кнопку \"Показать все\".\n  Надеемся, что вы достойно оцените качество нашего сервиса!</p>\n\n<div class=\"d-flex cards mt32\">\n  <mat-card class=\"w-32p f14\">\n    <h5 class=\"mb16\"><i class=\"fa fa-cog\"></i> Компьютеры</h5>\n    Установка и настройка любых популярных операционных систем и ПО,\n    модернизация и замена компьютеров, обслуживание любой офисной техники.\n  </mat-card>\n  <mat-card class=\"w-32p f14\">\n\n    <h5 class=\"mb16\"><i class=\"fa fa-cog\"></i> Сети</h5>\n    Решим любые вопросы, связанные с настройкой, модернизацией и обслуживанием локальных сетей.\n  </mat-card>\n  <mat-card class=\"w-32p f14\">\n    <h5 class=\"mb16\"><i class=\"fa fa-cog\"></i> Сервера</h5>\n    Настройка и обслуживание виртуальных серверов, удаленное администрирование и постоянный мониторинг.\n  </mat-card>\n</div>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/menu/menu.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/menu/menu.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex w100 py8 bg-secondary menu\">\n  <a routerLink=\"/\" class=\"px16 text-white text-decoration-none\"><i class=\"fa fa-forward f12\"></i> Главная</a>\n  <a routerLink=\"/about\" class=\"px16 text-white text-decoration-none\"><i class=\"fa fa-forward f12\"></i> Окомпании</a>\n  <a routerLink=\"/service\" class=\"px16 text-white text-decoration-none\"><i class=\"fa fa-forward f12\"></i> Услуги</a>\n  <a routerLink=\"/price\" class=\"px16 text-white text-decoration-none\"><i class=\"fa fa-forward f12\"></i> Прайс лист</a>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/mini-menu/mini-menu.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/mini-menu/mini-menu.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"my8\">\n  <i class=\"fa fa-clock-o\"></i>\n  <span class=\"px8\">Часы работы: Пн-Пт 9:30-19:00</span>\n</div>\n\n<div class=\"my8\">\n  <i class=\"fa fa-phone\"></i>\n  <span class=\"px8\">0555 78-28-14, 0705 78-28-14</span>\n</div>\n\n<div class=\"my8\">\n  <i class=\"fa fa-map-marker\"></i>\n  <span class=\"px8\">г. Бишкек</span>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/partner/partner.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/partner/partner.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex cards\">\r\n  <mat-card class=\"w-32p f14\">\r\n    <img src=\"assets/img/Luxor.png\" alt=\"\">\r\n  </mat-card>\r\n  <mat-card fxLayoutAlign=\"center\" class=\"w-32p f14\">\r\n    <img src=\"assets/img/opt.png\" alt=\"\">\r\n  </mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/price/price.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/price/price.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>price works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/service/service.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/service/service.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 class=\"mb16\">\n  Наши услуги\n</h3>\n\n<div class=\"d-flex cards\">\n  <mat-card class=\"w-32p f14\">\n    <h5 class=\"mb16\"><i class=\"fa fa-cog\"></i> Расчёт, установка, настройка и ремонт\n      компьютеров и офисного оборудования</h5>\n    <ul>\n      <li>Смета на оборудование в зависимости от требований клиента</li>\n      <li>Закупка оборудования (выбор марок оборудования и поставщиков)</li>\n      <li>Сборка, установка ОС, подключение к сети компьютеров, принтеров сканеро</li>\n    </ul>\n\n\n  </mat-card>\n\n  <mat-card class=\"w-32p f14\">\n    <h5 class=\"mb16\"><i class=\"fa fa-cog\"></i> Расчёт, установка, настройка и ремонт серверов</h5>\n    <ul>\n      <li>Развертывание сервера для 1с и торгсофт</li>\n      <li>Бекап</li>\n      <li>Сервера баз данных</li>\n      <li>Сервер почты</li>\n      <li>Сервер документооборота и треккера задача)</li>\n      <li>Смета на оборудование в зависимости от требований клиента</li>\n      <li>Закупка оборудования (выбор марок оборудования и поставщиков)</li>\n      <li>Монтаж стоек и серверов, установка ОС и ПО.</li>\n      <li>Настройка ролевых моментов. Бэкап, БД, домен</li>\n    </ul>\n\n  </mat-card>\n\n  <mat-card class=\"w-32p f14\">\n    <h5 class=\"mb16\"><i class=\"fa fa-cog\"></i> Расчёт, установка, настройка и ремонт видеонаблюдения</h5>\n    <ul>\n      <li>Смета и карта систем видеонаблюдения</li>\n      <li>Закупка оборудования (выбор марок оборудования и поставщиков)</li>\n      <li>Прокладка кабелей, установка камер, установка регистраторов, блоков питания,\n        cетевого оборудования, щитов для оборудования</li>\n      <li>Настройка доступа через интернет.</li>\n    </ul>\n  </mat-card>\n\n  <mat-card class=\"w-32p f14\">\n    <h5 class=\"mb16\"><i class=\"fa fa-cog\"></i> Расчет монтаж эксплуатация энерго систем.</h5>\n    <ul>\n      <li>Смета на оборудование в зависимости от требований клиента</li>\n      <li>Закупка оборудования (выбор марок оборудования и поставщиков)</li>\n      <li>Монтаж инверторов, аккумуляторов, стабилизаторов, электрощитков, прокладка кабелей.</li>\n    </ul>\n  </mat-card>\n\n  <mat-card class=\"w-32p f14\">\n    <h5 class=\"mb16\"><i class=\"fa fa-cog\"></i> Расчёт, установка, настройка и ремонт сетей</h5>\n    <ul>\n      <li>Смета и карта сети</li>\n      <li>Закупка оборудования (выбор марок оборудования и поставщиков)</li>\n      <li>Прокладка кабелей, установка сетевого оборудования, розеток RJ-45, щитов для оборудования, настройка интернет.</li>\n    </ul>\n  </mat-card>\n\n\n  <mat-card class=\"w-32p f14\">\n\n    <h5 class=\"mb16\"><i class=\"fa fa-cog\"></i> Системный администратор</h5>\n    Решайте свои задачи с помощью выездного системного администратора от нашей компании.\n  </mat-card>\n\n  <mat-card class=\"w-32p f14\">\n    <h5 class=\"mb16\"><i class=\"fa fa-cog\"></i> Компьютерная помощь</h5>\n    <ul>\n      <li>Установим операционную систему и любые программы,</li>\n      <li>Настроим подключение к интернету, </li>\n      <li>Удалим вирусы, восстановим данные.</li>\n    </ul>\n  </mat-card>\n\n\n  <mat-card class=\"w-32p f14\">\n    <h5 class=\"mb16\"><i class=\"fa fa-cog\"></i> Ремонт торговой техники</h5>\n    <ul>\n      <li> Смета на оборудование в зависимости от требований клиента</li>\n      <li>Закупка оборудования (выбор марок оборудования и поставщиков)</li>\n      <li>Монтаж и подключение к сети весов принтеровг) настройка ТСД на работу с компьютером</li>\n    </ul>\n  </mat-card>\n\n  <mat-card class=\"w-32p f14\">\n    <h5 class=\"mb16\"><i class=\"fa fa-cog\"></i> Расчёт, установка, настройка и обслуживание ПО</h5>\n    <ul>\n      <li>Установка Торгсофт</li>\n      <li>Обучение Торгсофт</li>\n      <li>Дополнительные опции к программе, настройка по желанию клиента</li>\n    </ul>\n  </mat-card>\n\n\n  <mat-card class=\"w-32p f14\">\n    <h5 class=\"mb16\"><i class=\"fa fa-cog\"></i> Разработка оригинальных решений для бизнеса</h5>\n    <ul>\n      <li>Рассылка смс</li>\n      <li>Написание программного обеспечения</li>\n      <li>Наклейки</li>\n      <li>Уникальная печать</li>\n      <li>Безопасность</li>\n      <li>Одна машина несколько клиентов</li>\n    </ul>\n  </mat-card>\n\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/side-bar/side-bar.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/side-bar/side-bar.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img src=\"/assets/img/komp.jpg\" alt=\"профайл\">\r\n<!--<h5 class=\"text-uppercase text-white\">Профайл компании</h5>-->\r\n<!--<p class=\"text-white f14\">-->\r\n<!--  Союз – ваш надежный партнер по созданию, модернизации-->\r\n<!--  и обслуживанию IT инфраструктур любого объема и сложности-->\r\n<!--</p>-->\r\n\r\n\r\n<h5 class=\"text-uppercase text-white\">Последние проекты</h5>\r\n<p class=\"text-white f14 mb16\">\r\n  Сеть оптомаркетов \"Шекер\" - за последние 5 лет работы с нашими\r\n  добрыми партнерами мы прошли огонь, води и медные трубы.\r\n</p>\r\n\r\n<p class=\"text-white f14 mb16\">\r\n  Сеть бутиков брэндовой одежды \"Luxor\", настройка инфраструктуры компьютеров,\r\n  серверов, прокладка кабелей, установка настроек видеокамер.\r\n</p>\r\n\r\n<p class=\"text-white f14 mb16\">\r\n  Сеть бутиков обуви \"Nursace\"\r\n</p>\r\n\r\n<p class=\"text-white f14 mb16\">\r\n  Сеть микрокредитных компаний Фонте кредит\r\n</p>\r\n\r\n<p class=\"text-white f14 mb16\">\r\n  Дистрибьюторская фирма ViViCo\r\n</p>\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/slogan/slogan.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/slogan/slogan.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"slogan text-white py8 text-uppercase text-center\">Решения для цифрового мира</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/soft/soft.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/soft/soft.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n\r\n<!--<img src=\"assets/img/Luxor.png\" alt=\"\">-->\r\n<!--<img src=\"assets/img/opt.png\" alt=\"\">-->\r\n\r\n<div class=\"d-flex cards\">\r\n  <mat-card class=\"w-32p f14\">\r\n    <img src=\"assets/img/1c.png\" alt=\"\">\r\n  </mat-card>\r\n  <mat-card fxLayoutAlign=\"center\" class=\"w-32p f14\">\r\n    <img src=\"assets/img/mikro.svg\" alt=\"\">\r\n  </mat-card>\r\n  <mat-card class=\"w-32p f14\">\r\n    <img src=\"assets/img/torg.svg\" alt=\"\">\r\n  </mat-card>\r\n  <mat-card class=\"w-32p f14\">\r\n    <img src=\"assets/img/web.png\" alt=\"\">\r\n  </mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/about/about.component.scss":
/*!********************************************!*\
  !*** ./src/app/about/about.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'union-about',
            template: __webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/index.js!./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/about/about.component.scss")]
        })
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _main_content_main_content_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-content/main-content.component */ "./src/app/main-content/main-content.component.ts");
/* harmony import */ var _service_service_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service/service.component */ "./src/app/service/service.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _partner_partner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./partner/partner.component */ "./src/app/partner/partner.component.ts");
/* harmony import */ var _soft_soft_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./soft/soft.component */ "./src/app/soft/soft.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _price_price_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./price/price.component */ "./src/app/price/price.component.ts");










var routes = [
    {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full'
    },
    {
        path: 'main',
        component: _main_content_main_content_component__WEBPACK_IMPORTED_MODULE_3__["MainContentComponent"]
    },
    {
        path: 'service',
        component: _service_service_component__WEBPACK_IMPORTED_MODULE_4__["ServiceComponent"]
    },
    {
        path: 'about',
        component: _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"]
    },
    {
        path: 'partner',
        component: _partner_partner_component__WEBPACK_IMPORTED_MODULE_6__["PartnerComponent"]
    },
    {
        path: 'soft',
        component: _soft_soft_component__WEBPACK_IMPORTED_MODULE_7__["SoftComponent"]
    },
    {
        path: 'contact',
        component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"]
    },
    {
        path: 'price',
        component: _price_price_component__WEBPACK_IMPORTED_MODULE_9__["PriceComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  height: calc(100vh - 229px - 80px);\n  background-color: #fff;\n  display: block;\n  overflow: auto;\n}\n\n.side-bar-block {\n  min-width: 85vw;\n}\n\n.side-bar-block a {\n  color: #141b38;\n  outline: none !important;\n  border-bottom: 1px solid #cec8cf;\n}\n\n.fa-close {\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  font-size: 24px;\n}\n\n@media all and (max-width: 878px) {\n  .w-30p {\n    display: none;\n  }\n\n  .w-70p.content {\n    width: 100% !important;\n  }\n}\n\n@media all and (max-width: 878px) {\n  .content {\n    height: auto !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXHByb2plY3RcXHVuaW9uLW5nL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0Q6XFxwcm9qZWN0XFx1bmlvbi1uZy9zcmNcXGFwcFxcc3R5bGVzXFxfdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGtDQUFBO0VBQ0Esc0JDYU07RURaTixjQUFBO0VBQ0EsY0FBQTtBRURGOztBRklBO0VBQ0UsZUFBQTtBRURGOztBRkVFO0VBQ0UsY0NUVztFRFVYLHdCQUFBO0VBQ0EsZ0NBQUE7QUVBSjs7QUZHQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FFQUY7O0FGR0E7RUFFRTtJQUNFLGFBQUE7RUVERjs7RUZHQTtJQUNFLHNCQUFBO0VFQUY7QUFDRjs7QUZLQTtFQUVFO0lBQ0UsdUJBQUE7RUVKRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4vc3R5bGVzL3ZhcmlhYmxlc1wiO1xyXG5cclxuLmNvbnRlbnQge1xyXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDIyOXB4IC0gODBweCk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4uc2lkZS1iYXItYmxvY2sge1xyXG4gIG1pbi13aWR0aDogODV2dztcclxuICBhIHtcclxuICAgIGNvbG9yOiAkcHJpbWFyeS1kZWVwO1xyXG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRsaWdodC1ncmF5O1xyXG4gIH1cclxufVxyXG4uZmEtY2xvc2Uge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDE2cHg7XHJcbiAgcmlnaHQ6IDE2cHg7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA4NzhweCl7XHJcblxyXG4gIC53LTMwcHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC53LTcwcC5jb250ZW50e1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG5cclxufVxyXG5cclxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogODc4cHgpe1xyXG5cclxuICAuY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICB9XHJcblxyXG5cclxufVxyXG5cclxuXHJcbiIsIiRwcmltYXJ5OiAgIzJjM2U1MDtcclxuJGJsYWNrOiAgIzAwMDtcclxuJHByaW1hcnktZGFyazogICMyNDI4Mzg7XHJcbiRwcmltYXJ5LWRlZXA6ICMxNDFiMzg7XHJcbiRpbmZvOiAjMDM5YmU1O1xyXG4kc3VjY2VzczogICM0MmI5ODM7XHJcbiRzdWNjZXNzLWxpZ2h0OiByZ2JhKDgxLCAyNDgsIDE4MCwgMC4wOCk7XHJcbiRkYW5nZXI6ICNiOTEwMWM7XHJcbiRkYW5nZXItbGlnaHQ6IHJnYmEoMTg1LCAxNiwgMjgsIDAuMDgpO1xyXG4kd2FybmluZzogI2ZmNzAzNztcclxuJHNlY29uZGFyeTogI2NjNGI0NDtcclxuJHdhcm5pbmctbGlnaHQ6IHJnYmEoMjU1LCAxMTIsIDU1LCAwLjA4KTtcclxuJGxpZ250LWxpZ2h0LWdyYXk6ICNmNWY1ZjU7XHJcbiRsaWdodC1ncmF5OiAjY2VjOGNmO1xyXG4kdmlvbGV0ZTogIzY3Mjc4NztcclxuJHBpbms6ICNlOTFlNjM7XHJcbiRsaWdodC1ibHVlOiAjZTRmOWZmO1xyXG4kd2hpdGU6ICNmZmY7XHJcbiRncmF5LWRhcms6ICM3YzdlODA7XHJcbiIsIi5jb250ZW50IHtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjI5cHggLSA4MHB4KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4uc2lkZS1iYXItYmxvY2sge1xuICBtaW4td2lkdGg6IDg1dnc7XG59XG4uc2lkZS1iYXItYmxvY2sgYSB7XG4gIGNvbG9yOiAjMTQxYjM4O1xuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2VjOGNmO1xufVxuXG4uZmEtY2xvc2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTZweDtcbiAgcmlnaHQ6IDE2cHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogODc4cHgpIHtcbiAgLnctMzBwIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLnctNzBwLmNvbnRlbnQge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDg3OHB4KSB7XG4gIC5jb250ZW50IHtcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(appService) {
        var _this = this;
        this.appService = appService;
        this.appService.toggleSidebar.subscribe(function (res) {
            _this.sidenav.open();
        });
    }
    AppComponent.prototype.close = function () {
        this.sidenav.close();
    };
    AppComponent.ctorParameters = function () { return [
        { type: _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sidenav', { static: false })
    ], AppComponent.prototype, "sidenav", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _mini_menu_mini_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mini-menu/mini-menu.component */ "./src/app/mini-menu/mini-menu.component.ts");
/* harmony import */ var _slogan_slogan_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./slogan/slogan.component */ "./src/app/slogan/slogan.component.ts");
/* harmony import */ var _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./side-bar/side-bar.component */ "./src/app/side-bar/side-bar.component.ts");
/* harmony import */ var _main_content_main_content_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./main-content/main-content.component */ "./src/app/main-content/main-content.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _service_service_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./service/service.component */ "./src/app/service/service.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _soft_soft_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./soft/soft.component */ "./src/app/soft/soft.component.ts");
/* harmony import */ var _partner_partner_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./partner/partner.component */ "./src/app/partner/partner.component.ts");
/* harmony import */ var _price_price_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./price/price.component */ "./src/app/price/price.component.ts");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_6__["MenuComponent"],
                _mini_menu_mini_menu_component__WEBPACK_IMPORTED_MODULE_7__["MiniMenuComponent"],
                _slogan_slogan_component__WEBPACK_IMPORTED_MODULE_8__["SloganComponent"],
                _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_9__["SideBarComponent"],
                _main_content_main_content_component__WEBPACK_IMPORTED_MODULE_10__["MainContentComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"],
                _service_service_component__WEBPACK_IMPORTED_MODULE_15__["ServiceComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_16__["AboutComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_17__["ContactComponent"],
                _soft_soft_component__WEBPACK_IMPORTED_MODULE_18__["SoftComponent"],
                _partner_partner_component__WEBPACK_IMPORTED_MODULE_19__["PartnerComponent"],
                _price_price_component__WEBPACK_IMPORTED_MODULE_20__["PriceComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__["MatSidenavModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var AppService = /** @class */ (function () {
    function AppService() {
        this.toggleSidebar = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    AppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.scss":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'union-contact',
            template: __webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/index.js!./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/contact/contact.component.scss")]
        })
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  height: 68px;\n  display: block;\n}\n:host .bg-secondary {\n  height: 100%;\n}\n@media all and (max-width: 878px) {\n  .w-30p {\n    display: none;\n  }\n\n  .w-70p {\n    width: 100% !important;\n    max-width: 440px;\n    margin: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL0Q6XFxwcm9qZWN0XFx1bmlvbi1uZy9zcmNcXGFwcFxcZm9vdGVyXFxmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsY0FBQTtBQ0NGO0FEQUU7RUFDRSxZQUFBO0FDRUo7QURFQTtFQUNFO0lBQ0UsYUFBQTtFQ0NGOztFRENBO0lBQ0Usc0JBQUE7SUFDQSxnQkFBQTtJQUNBLFlBQUE7RUNFRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0e1xyXG4gIGhlaWdodDogNjhweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICAuYmctc2Vjb25kYXJ5IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDg3OHB4KXtcclxuICAudy0zMHAge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLnctNzBwIHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBtYXgtd2lkdGg6IDQ0MHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiOmhvc3Qge1xuICBoZWlnaHQ6IDY4cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuOmhvc3QgLmJnLXNlY29uZGFyeSB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogODc4cHgpIHtcbiAgLnctMzBwIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLnctNzBwIHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIG1heC13aWR0aDogNDQwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'union-footer',
            template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fa-bars {\n  display: none;\n}\n\n.logo {\n  background-image: url(\"/assets/img/logo.svg\");\n  background-size: contain;\n  width: 240px;\n  height: 100px;\n  background-repeat: no-repeat;\n}\n\n.left-side {\n  background-color: #141b38;\n}\n\n.support {\n  background-image: url(\"/assets/img/man.jpg\");\n  background-size: cover;\n  height: 132px;\n  background-repeat: no-repeat;\n  width: 100%;\n}\n\n.flex-wrapper {\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.flex-wrapper .left-side {\n  min-width: 440px;\n}\n\n.flex-wrapper .right-side {\n  min-width: 440px;\n}\n\n.side-bar {\n  position: absolute;\n  right: 16px;\n  top: 16px;\n}\n\n@media all and (max-width: 470px) {\n  .left-side, .right-side {\n    min-width: auto !important;\n    width: 100% !important;\n    font-size: 12px;\n  }\n}\n\n@media all and (max-width: 878px) {\n  .fa-bars {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0Q6XFxwcm9qZWN0XFx1bmlvbi1uZy9zcmNcXGFwcFxcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hlYWRlci9EOlxccHJvamVjdFxcdW5pb24tbmcvc3JjXFxhcHBcXHN0eWxlc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsYUFBQTtBQ0FGOztBREVBO0VBQ0UsNkNBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7QUNDRjs7QURFQTtFQUNFLHlCRVZhO0FEV2Y7O0FERUE7RUFDRSw0Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLHVCQUFBO0FDQ0Y7O0FEQUU7RUFDRSxnQkFBQTtBQ0VKOztBREFFO0VBQ0UsZ0JBQUE7QUNFSjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUNDRjs7QURHQTtFQUVFO0lBQ0UsMEJBQUE7SUFDQSxzQkFBQTtJQUNBLGVBQUE7RUNERjtBQUNGOztBRE1BO0VBRUU7SUFDRSxjQUFBO0VDTEY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vc3R5bGVzL3ZhcmlhYmxlc1wiO1xyXG4uZmEtYmFycyB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4ubG9nbyB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltZy9sb2dvLnN2ZycpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICB3aWR0aDogMjQwcHg7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcblxyXG4ubGVmdC1zaWRlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1kZWVwO1xyXG59XHJcblxyXG4uc3VwcG9ydCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltZy9tYW4uanBnJyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBoZWlnaHQ6IDEzMnB4O1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5mbGV4LXdyYXBwZXIge1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAubGVmdC1zaWRlIHtcclxuICAgIG1pbi13aWR0aDogNDQwcHg7XHJcbiAgfVxyXG4gIC5yaWdodC1zaWRlIHtcclxuICAgIG1pbi13aWR0aDogNDQwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uc2lkZS1iYXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMTZweDtcclxuICB0b3A6IDE2cHg7XHJcblxyXG59XHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA0NzBweCl7XHJcblxyXG4gIC5sZWZ0LXNpZGUsIC5yaWdodC1zaWRlIHtcclxuICAgIG1pbi13aWR0aDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcblxyXG5cclxufVxyXG5cclxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogODc4cHgpe1xyXG5cclxuICAuZmEtYmFycyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG5cclxufVxyXG4iLCIuZmEtYmFycyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5sb2dvIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWcvbG9nby5zdmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgd2lkdGg6IDI0MHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG4ubGVmdC1zaWRlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE0MWIzODtcbn1cblxuLnN1cHBvcnQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltZy9tYW4uanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBoZWlnaHQ6IDEzMnB4O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZsZXgtd3JhcHBlciB7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uZmxleC13cmFwcGVyIC5sZWZ0LXNpZGUge1xuICBtaW4td2lkdGg6IDQ0MHB4O1xufVxuLmZsZXgtd3JhcHBlciAucmlnaHQtc2lkZSB7XG4gIG1pbi13aWR0aDogNDQwcHg7XG59XG5cbi5zaWRlLWJhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE2cHg7XG4gIHRvcDogMTZweDtcbn1cblxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNDcwcHgpIHtcbiAgLmxlZnQtc2lkZSwgLnJpZ2h0LXNpZGUge1xuICAgIG1pbi13aWR0aDogYXV0byAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG59XG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA4NzhweCkge1xuICAuZmEtYmFycyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn0iLCIkcHJpbWFyeTogICMyYzNlNTA7XHJcbiRibGFjazogICMwMDA7XHJcbiRwcmltYXJ5LWRhcms6ICAjMjQyODM4O1xyXG4kcHJpbWFyeS1kZWVwOiAjMTQxYjM4O1xyXG4kaW5mbzogIzAzOWJlNTtcclxuJHN1Y2Nlc3M6ICAjNDJiOTgzO1xyXG4kc3VjY2Vzcy1saWdodDogcmdiYSg4MSwgMjQ4LCAxODAsIDAuMDgpO1xyXG4kZGFuZ2VyOiAjYjkxMDFjO1xyXG4kZGFuZ2VyLWxpZ2h0OiByZ2JhKDE4NSwgMTYsIDI4LCAwLjA4KTtcclxuJHdhcm5pbmc6ICNmZjcwMzc7XHJcbiRzZWNvbmRhcnk6ICNjYzRiNDQ7XHJcbiR3YXJuaW5nLWxpZ2h0OiByZ2JhKDI1NSwgMTEyLCA1NSwgMC4wOCk7XHJcbiRsaWdudC1saWdodC1ncmF5OiAjZjVmNWY1O1xyXG4kbGlnaHQtZ3JheTogI2NlYzhjZjtcclxuJHZpb2xldGU6ICM2NzI3ODc7XHJcbiRwaW5rOiAjZTkxZTYzO1xyXG4kbGlnaHQtYmx1ZTogI2U0ZjlmZjtcclxuJHdoaXRlOiAjZmZmO1xyXG4kZ3JheS1kYXJrOiAjN2M3ZTgwO1xyXG4iXX0= */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(appService) {
        this.appService = appService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.openSideBar = function () {
        this.appService.toggleSidebar.next(true);
    };
    HeaderComponent.ctorParameters = function () { return [
        { type: _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] }
    ]; };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'union-header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/main-content/main-content.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/main-content/main-content.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host p {\n  font-size: 14px;\n  line-height: 1.5em;\n}\n\n.cards {\n  justify-content: flex-start;\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1jb250ZW50L0Q6XFxwcm9qZWN0XFx1bmlvbi1uZy9zcmNcXGFwcFxcbWFpbi1jb250ZW50XFxtYWluLWNvbnRlbnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21haW4tY29udGVudC9tYWluLWNvbnRlbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUU7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUNESjs7QURLQTtFQUNFLDJCQUFBO0VBQ0EsZ0JBQUE7QUNGRiIsImZpbGUiOiJzcmMvYXBwL21haW4tY29udGVudC9tYWluLWNvbnRlbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vc3R5bGVzL3ZhcmlhYmxlc1wiO1xyXG46aG9zdCB7XHJcbiAgcCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS41ZW07XHJcbiAgfVxyXG59XHJcblxyXG4uY2FyZHMge1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbiIsIjpob3N0IHAge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbn1cblxuLmNhcmRzIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/main-content/main-content.component.ts":
/*!********************************************************!*\
  !*** ./src/app/main-content/main-content.component.ts ***!
  \********************************************************/
/*! exports provided: MainContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainContentComponent", function() { return MainContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainContentComponent = /** @class */ (function () {
    function MainContentComponent() {
    }
    MainContentComponent.prototype.ngOnInit = function () {
    };
    MainContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'union-main-content',
            template: __webpack_require__(/*! raw-loader!./main-content.component.html */ "./node_modules/raw-loader/index.js!./src/app/main-content/main-content.component.html"),
            styles: [__webpack_require__(/*! ./main-content.component.scss */ "./src/app/main-content/main-content.component.scss")]
        })
    ], MainContentComponent);
    return MainContentComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.scss":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n}\n\n.menu {\n  min-height: 40px;\n}\n\n@media all and (max-width: 878px) {\n  :host {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9EOlxccHJvamVjdFxcdW5pb24tbmcvc3JjXFxhcHBcXG1lbnVcXG1lbnUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUNDRjs7QURDQTtFQUNFLGdCQUFBO0FDRUY7O0FEQ0E7RUFFRTtJQUNFLGFBQUE7RUNDRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5tZW51IHtcclxuICBtaW4taGVpZ2h0OiA0MHB4O1xyXG59XHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA4NzhweCl7XHJcblxyXG4gIDpob3N0e1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG59XHJcbiIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5tZW51IHtcbiAgbWluLWhlaWdodDogNDBweDtcbn1cblxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogODc4cHgpIHtcbiAgOmhvc3Qge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'union-menu',
            template: __webpack_require__(/*! raw-loader!./menu.component.html */ "./node_modules/raw-loader/index.js!./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.scss */ "./src/app/menu/menu.component.scss")]
        })
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/mini-menu/mini-menu.component.scss":
/*!****************************************************!*\
  !*** ./src/app/mini-menu/mini-menu.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21pbmktbWVudS9taW5pLW1lbnUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/mini-menu/mini-menu.component.ts":
/*!**************************************************!*\
  !*** ./src/app/mini-menu/mini-menu.component.ts ***!
  \**************************************************/
/*! exports provided: MiniMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiniMenuComponent", function() { return MiniMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MiniMenuComponent = /** @class */ (function () {
    function MiniMenuComponent() {
    }
    MiniMenuComponent.prototype.ngOnInit = function () {
    };
    MiniMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'union-mini-menu',
            template: __webpack_require__(/*! raw-loader!./mini-menu.component.html */ "./node_modules/raw-loader/index.js!./src/app/mini-menu/mini-menu.component.html"),
            styles: [__webpack_require__(/*! ./mini-menu.component.scss */ "./src/app/mini-menu/mini-menu.component.scss")]
        })
    ], MiniMenuComponent);
    return MiniMenuComponent;
}());



/***/ }),

/***/ "./src/app/partner/partner.component.scss":
/*!************************************************!*\
  !*** ./src/app/partner/partner.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\n  justify-content: center;\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFydG5lci9EOlxccHJvamVjdFxcdW5pb24tbmcvc3JjXFxhcHBcXHBhcnRuZXJcXHBhcnRuZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhcnRuZXIvcGFydG5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFBO0VBQ0EsYUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFydG5lci9wYXJ0bmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNhcmQge1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuIiwibWF0LWNhcmQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/partner/partner.component.ts":
/*!**********************************************!*\
  !*** ./src/app/partner/partner.component.ts ***!
  \**********************************************/
/*! exports provided: PartnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartnerComponent", function() { return PartnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PartnerComponent = /** @class */ (function () {
    function PartnerComponent() {
    }
    PartnerComponent.prototype.ngOnInit = function () {
    };
    PartnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'union-partner',
            template: __webpack_require__(/*! raw-loader!./partner.component.html */ "./node_modules/raw-loader/index.js!./src/app/partner/partner.component.html"),
            styles: [__webpack_require__(/*! ./partner.component.scss */ "./src/app/partner/partner.component.scss")]
        })
    ], PartnerComponent);
    return PartnerComponent;
}());



/***/ }),

/***/ "./src/app/price/price.component.scss":
/*!********************************************!*\
  !*** ./src/app/price/price.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByaWNlL3ByaWNlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/price/price.component.ts":
/*!******************************************!*\
  !*** ./src/app/price/price.component.ts ***!
  \******************************************/
/*! exports provided: PriceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriceComponent", function() { return PriceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PriceComponent = /** @class */ (function () {
    function PriceComponent() {
    }
    PriceComponent.prototype.ngOnInit = function () {
    };
    PriceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'union-price',
            template: __webpack_require__(/*! raw-loader!./price.component.html */ "./node_modules/raw-loader/index.js!./src/app/price/price.component.html"),
            styles: [__webpack_require__(/*! ./price.component.scss */ "./src/app/price/price.component.scss")]
        })
    ], PriceComponent);
    return PriceComponent;
}());



/***/ }),

/***/ "./src/app/service/service.component.scss":
/*!************************************************!*\
  !*** ./src/app/service/service.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\n  padding: 8px;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmljZS9EOlxccHJvamVjdFxcdW5pb24tbmcvc3JjXFxhcHBcXHNlcnZpY2VcXHNlcnZpY2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NlcnZpY2Uvc2VydmljZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLFlBQUE7RUFDQSxTQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9zZXJ2aWNlL3NlcnZpY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbnVsIHtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcbiIsInVsIHtcbiAgcGFkZGluZzogOHB4O1xuICBtYXJnaW46IDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/service/service.component.ts":
/*!**********************************************!*\
  !*** ./src/app/service/service.component.ts ***!
  \**********************************************/
/*! exports provided: ServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceComponent", function() { return ServiceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ServiceComponent = /** @class */ (function () {
    function ServiceComponent() {
    }
    ServiceComponent.prototype.ngOnInit = function () {
    };
    ServiceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'union-service',
            template: __webpack_require__(/*! raw-loader!./service.component.html */ "./node_modules/raw-loader/index.js!./src/app/service/service.component.html"),
            styles: [__webpack_require__(/*! ./service.component.scss */ "./src/app/service/service.component.scss")]
        })
    ], ServiceComponent);
    return ServiceComponent;
}());



/***/ }),

/***/ "./src/app/side-bar/side-bar.component.scss":
/*!**************************************************!*\
  !*** ./src/app/side-bar/side-bar.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  width: 100%;\n  background-color: #141b38;\n  height: calc(100vh - 229px - 80px);\n  padding: 16px;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZS1iYXIvRDpcXHByb2plY3RcXHVuaW9uLW5nL3NyY1xcYXBwXFxzaWRlLWJhclxcc2lkZS1iYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NpZGUtYmFyL0Q6XFxwcm9qZWN0XFx1bmlvbi1uZy9zcmNcXGFwcFxcc3R5bGVzXFxfdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3NpZGUtYmFyL3NpZGUtYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSx5QkNGYTtFREdiLGtDQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUVERiIsImZpbGUiOiJzcmMvYXBwL3NpZGUtYmFyL3NpZGUtYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uL3N0eWxlcy92YXJpYWJsZXNcIjtcclxuXHJcbjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1kZWVwO1xyXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDIyOXB4IC0gODBweCk7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG4iLCIkcHJpbWFyeTogICMyYzNlNTA7XHJcbiRibGFjazogICMwMDA7XHJcbiRwcmltYXJ5LWRhcms6ICAjMjQyODM4O1xyXG4kcHJpbWFyeS1kZWVwOiAjMTQxYjM4O1xyXG4kaW5mbzogIzAzOWJlNTtcclxuJHN1Y2Nlc3M6ICAjNDJiOTgzO1xyXG4kc3VjY2Vzcy1saWdodDogcmdiYSg4MSwgMjQ4LCAxODAsIDAuMDgpO1xyXG4kZGFuZ2VyOiAjYjkxMDFjO1xyXG4kZGFuZ2VyLWxpZ2h0OiByZ2JhKDE4NSwgMTYsIDI4LCAwLjA4KTtcclxuJHdhcm5pbmc6ICNmZjcwMzc7XHJcbiRzZWNvbmRhcnk6ICNjYzRiNDQ7XHJcbiR3YXJuaW5nLWxpZ2h0OiByZ2JhKDI1NSwgMTEyLCA1NSwgMC4wOCk7XHJcbiRsaWdudC1saWdodC1ncmF5OiAjZjVmNWY1O1xyXG4kbGlnaHQtZ3JheTogI2NlYzhjZjtcclxuJHZpb2xldGU6ICM2NzI3ODc7XHJcbiRwaW5rOiAjZTkxZTYzO1xyXG4kbGlnaHQtYmx1ZTogI2U0ZjlmZjtcclxuJHdoaXRlOiAjZmZmO1xyXG4kZ3JheS1kYXJrOiAjN2M3ZTgwO1xyXG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE0MWIzODtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjI5cHggLSA4MHB4KTtcbiAgcGFkZGluZzogMTZweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59Il19 */"

/***/ }),

/***/ "./src/app/side-bar/side-bar.component.ts":
/*!************************************************!*\
  !*** ./src/app/side-bar/side-bar.component.ts ***!
  \************************************************/
/*! exports provided: SideBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideBarComponent", function() { return SideBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SideBarComponent = /** @class */ (function () {
    function SideBarComponent() {
    }
    SideBarComponent.prototype.ngOnInit = function () {
    };
    SideBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'union-side-bar',
            template: __webpack_require__(/*! raw-loader!./side-bar.component.html */ "./node_modules/raw-loader/index.js!./src/app/side-bar/side-bar.component.html"),
            styles: [__webpack_require__(/*! ./side-bar.component.scss */ "./src/app/side-bar/side-bar.component.scss")]
        })
    ], SideBarComponent);
    return SideBarComponent;
}());



/***/ }),

/***/ "./src/app/slogan/slogan.component.scss":
/*!**********************************************!*\
  !*** ./src/app/slogan/slogan.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  width: 100%;\n  border-top: 1px solid #fff;\n  border-bottom: 1px solid #fff;\n  margin-top: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2xvZ2FuL0Q6XFxwcm9qZWN0XFx1bmlvbi1uZy9zcmNcXGFwcFxcc2xvZ2FuXFxzbG9nYW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Nsb2dhbi9zbG9nYW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvc2xvZ2FuL3Nsb2dhbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi9zdHlsZXMvdmFyaWFibGVzXCI7XHJcbjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgJHdoaXRlO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkd2hpdGU7XHJcbiAgbWFyZ2luLXRvcDogMTZweDtcclxufVxyXG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmZmY7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/slogan/slogan.component.ts":
/*!********************************************!*\
  !*** ./src/app/slogan/slogan.component.ts ***!
  \********************************************/
/*! exports provided: SloganComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SloganComponent", function() { return SloganComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SloganComponent = /** @class */ (function () {
    function SloganComponent() {
    }
    SloganComponent.prototype.ngOnInit = function () {
    };
    SloganComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'union-slogan',
            template: __webpack_require__(/*! raw-loader!./slogan.component.html */ "./node_modules/raw-loader/index.js!./src/app/slogan/slogan.component.html"),
            styles: [__webpack_require__(/*! ./slogan.component.scss */ "./src/app/slogan/slogan.component.scss")]
        })
    ], SloganComponent);
    return SloganComponent;
}());



/***/ }),

/***/ "./src/app/soft/soft.component.scss":
/*!******************************************!*\
  !*** ./src/app/soft/soft.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\n  justify-content: center;\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc29mdC9EOlxccHJvamVjdFxcdW5pb24tbmcvc3JjXFxhcHBcXHNvZnRcXHNvZnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NvZnQvc29mdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFBO0VBQ0EsYUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvc29mdC9zb2Z0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNhcmQge1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuIiwibWF0LWNhcmQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/soft/soft.component.ts":
/*!****************************************!*\
  !*** ./src/app/soft/soft.component.ts ***!
  \****************************************/
/*! exports provided: SoftComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoftComponent", function() { return SoftComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SoftComponent = /** @class */ (function () {
    function SoftComponent() {
    }
    SoftComponent.prototype.ngOnInit = function () {
    };
    SoftComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'union-soft',
            template: __webpack_require__(/*! raw-loader!./soft.component.html */ "./node_modules/raw-loader/index.js!./src/app/soft/soft.component.html"),
            styles: [__webpack_require__(/*! ./soft.component.scss */ "./src/app/soft/soft.component.scss")]
        })
    ], SoftComponent);
    return SoftComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\project\union-ng\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map