(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _routes_start_start_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes/start/start.component */ "./src/app/routes/start/start.component.ts");
/* harmony import */ var _routes_playing_playing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes/playing/playing.component */ "./src/app/routes/playing/playing.component.ts");
/* harmony import */ var _routes_ranking_ranking_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routes/ranking/ranking.component */ "./src/app/routes/ranking/ranking.component.ts");






var routes = [
    { path: "", redirectTo: "/start", pathMatch: "full" },
    { path: "start", component: _routes_start_start_component__WEBPACK_IMPORTED_MODULE_3__["StartComponent"] },
    { path: "playing", component: _routes_playing_playing_component__WEBPACK_IMPORTED_MODULE_4__["PlayingComponent"] },
    { path: "ranking", component: _routes_ranking_ranking_component__WEBPACK_IMPORTED_MODULE_5__["RankingComponent"] }
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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = "memory-game";
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_card_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/card/card.component */ "./src/app/components/card/card.component.ts");
/* harmony import */ var _routes_start_start_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes/start/start.component */ "./src/app/routes/start/start.component.ts");
/* harmony import */ var _routes_ranking_ranking_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./routes/ranking/ranking.component */ "./src/app/routes/ranking/ranking.component.ts");
/* harmony import */ var _routes_playing_playing_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./routes/playing/playing.component */ "./src/app/routes/playing/playing.component.ts");
/* harmony import */ var _components_board_board_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/board/board.component */ "./src/app/components/board/board.component.ts");
/* harmony import */ var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/modal/modal.component */ "./src/app/components/modal/modal.component.ts");
/* harmony import */ var _components_button_button_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/button/button.component */ "./src/app/components/button/button.component.ts");
/* harmony import */ var _components_logo_logo_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/logo/logo.component */ "./src/app/components/logo/logo.component.ts");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_card_card_component__WEBPACK_IMPORTED_MODULE_6__["CardComponent"],
                _routes_start_start_component__WEBPACK_IMPORTED_MODULE_7__["StartComponent"],
                _routes_ranking_ranking_component__WEBPACK_IMPORTED_MODULE_8__["RankingComponent"],
                _routes_playing_playing_component__WEBPACK_IMPORTED_MODULE_9__["PlayingComponent"],
                _components_board_board_component__WEBPACK_IMPORTED_MODULE_10__["BoardComponent"],
                _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_11__["ModalComponent"],
                _components_button_button_component__WEBPACK_IMPORTED_MODULE_12__["ButtonComponent"],
                _components_logo_logo_component__WEBPACK_IMPORTED_MODULE_13__["LogoComponent"]
            ],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/board/board.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/board/board.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"board\">\n  <app-logo></app-logo>\n\n  <div class=\"board__cards\">\n    <app-card *ngFor=\"let card of gameService.cards\" [card]=\"card\"></app-card>\n  </div>\n\n  <div class=\"board__info\">\n    <p>Rodadas: {{ gameService.rounds }}</p>\n    <button class=\"cheat-btn\" (click)=\"gameService.toggleCheat()\">Cheat</button>\n    <p>Jogador: {{ gameService.playerName }}</p>\n  </div>\n\n  <app-modal [visible]=\"gameService.isGameOver\">\n    <div class=\"modal-content\">\n      <h2 class=\"modal-content__title\">Fim de jogo!</h2>\n\n      <app-button (click)=\"gameService.playAgain()\" type=\"button\">\n        Jogar novamente\n      </app-button>\n\n      <a class=\"modal-content__link\" routerLink=\"/ranking\">Ranking</a>\n    </div>\n  </app-modal>\n</div>\n"

/***/ }),

/***/ "./src/app/components/board/board.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/board/board.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".board {\n  width: 600px;\n  max-width: 100%;\n  margin: 10px auto; }\n  .board__cards {\n    display: flex;\n    flex-flow: row wrap; }\n  .board__info {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 10px;\n    color: #ffffff; }\n  .board .modal-content__title {\n    font-weight: normal;\n    text-align: center;\n    margin-bottom: 15px;\n    color: #383838; }\n  .board .modal-content__link {\n    color: #4d8c22;\n    margin: 0 20px; }\n  .cheat-btn {\n  color: #5bbd7b;\n  background: none;\n  border: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VyaWMvc3R1ZHkvYW5ndWxhci9tZW1vcnktZ2FtZS9zcmMvYXBwL2NvbXBvbmVudHMvYm9hcmQvYm9hcmQuY29tcG9uZW50LnNjc3MiLCIvaG9tZS9lcmljL3N0dWR5L2FuZ3VsYXIvbWVtb3J5LWdhbWUvc3JjL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixpQkFBaUIsRUFBQTtFQUVqQjtJQUNFLGFBQWE7SUFDYixtQkFBbUIsRUFBQTtFQUdyQjtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLGFBQWE7SUFDYixjQ2ZXLEVBQUE7RURBZjtJQW9CTSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixjQ3JCUSxFQUFBO0VERmQ7SUEyQk0sY0M1QmM7SUQ2QmQsY0FBYyxFQUFBO0VBS3BCO0VBQ0UsY0FBMEI7RUFDMUIsZ0JBQWdCO0VBQ2hCLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYm9hcmQvYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwic3JjL3ZhcmlhYmxlc1wiO1xuXG4uYm9hcmQge1xuICB3aWR0aDogNjAwcHg7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAxMHB4IGF1dG87XG5cbiAgJl9fY2FyZHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgfVxuXG4gICZfX2luZm8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBjb2xvcjogJHdoaXRlO1xuICB9XG5cbiAgLm1vZGFsLWNvbnRlbnQge1xuICAgICZfX3RpdGxlIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgY29sb3I6ICRncmF5O1xuICAgIH1cblxuICAgICZfX2xpbmsge1xuICAgICAgY29sb3I6ICRkYXJrLWdyZWVuO1xuICAgICAgbWFyZ2luOiAwIDIwcHg7XG4gICAgfVxuICB9XG59XG5cbi5jaGVhdC1idG4ge1xuICBjb2xvcjogbGlnaHRlbigkZ3JlZW4sIDUlKTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xufVxuIiwiJGdyZWVuOiAjNDliNTZjO1xuJGRhcmstZ3JlZW46ICM0ZDhjMjI7XG4kd2hpdGU6ICNmZmZmZmY7XG4kYnJvd246ICNhOTYwMjY7XG4kZ3JheTogIzM4MzgzODtcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/board/board.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/board/board.component.ts ***!
  \*****************************************************/
/*! exports provided: BoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardComponent", function() { return BoardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/game.service */ "./src/app/services/game.service.ts");



var BoardComponent = /** @class */ (function () {
    function BoardComponent(gameService) {
        this.gameService = gameService;
    }
    BoardComponent.prototype.ngOnInit = function () { };
    BoardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-board",
            template: __webpack_require__(/*! ./board.component.html */ "./src/app/components/board/board.component.html"),
            styles: [__webpack_require__(/*! ./board.component.scss */ "./src/app/components/board/board.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"]])
    ], BoardComponent);
    return BoardComponent;
}());



/***/ }),

/***/ "./src/app/components/button/button.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/button/button.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"btn\" [type]=\"type\">\n  <ng-content></ng-content>\n</button>\n"

/***/ }),

/***/ "./src/app/components/button/button.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/button/button.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn {\n  background: #4d8c22;\n  border: 2px solid #ffffff;\n  padding: 10px 15px;\n  border-radius: 30px;\n  cursor: pointer;\n  color: #ffffff;\n  font-size: 16px;\n  transition: background 0.5s; }\n  .btn:hover {\n    background: #2b4e13; }\n  .btn:active {\n    background: #203a0e; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VyaWMvc3R1ZHkvYW5ndWxhci9tZW1vcnktZ2FtZS9zcmMvYXBwL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQuc2NzcyIsIi9ob21lL2VyaWMvc3R1ZHkvYW5ndWxhci9tZW1vcnktZ2FtZS9zcmMvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxtQkNGa0I7RURHbEIseUJDRmE7RURHYixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixjQ05hO0VET2IsZUFBZTtFQUNmLDJCQUEyQixFQUFBO0VBUjdCO0lBV0ksbUJBQW9DLEVBQUE7RUFYeEM7SUFlSSxtQkFBb0MsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzcmMvdmFyaWFibGVzXCI7XG5cbi5idG4ge1xuICBiYWNrZ3JvdW5kOiAkZGFyay1ncmVlbjtcbiAgYm9yZGVyOiAycHggc29saWQgJHdoaXRlO1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICR3aGl0ZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuNXM7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogZGFya2VuKCRkYXJrLWdyZWVuLCAxNSUpO1xuICB9XG5cbiAgJjphY3RpdmUge1xuICAgIGJhY2tncm91bmQ6IGRhcmtlbigkZGFyay1ncmVlbiwgMjAlKTtcbiAgfVxufVxuIiwiJGdyZWVuOiAjNDliNTZjO1xuJGRhcmstZ3JlZW46ICM0ZDhjMjI7XG4kd2hpdGU6ICNmZmZmZmY7XG4kYnJvd246ICNhOTYwMjY7XG4kZ3JheTogIzM4MzgzODtcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/button/button.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/button/button.component.ts ***!
  \*******************************************************/
/*! exports provided: ButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ButtonComponent = /** @class */ (function () {
    function ButtonComponent() {
    }
    ButtonComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ButtonComponent.prototype, "type", void 0);
    ButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-button",
            template: __webpack_require__(/*! ./button.component.html */ "./src/app/components/button/button.component.html"),
            styles: [__webpack_require__(/*! ./button.component.scss */ "./src/app/components/button/button.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ButtonComponent);
    return ButtonComponent;
}());



/***/ }),

/***/ "./src/app/components/card/card.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/card/card.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n  class=\"container\"\n  [class.show]=\"card.visible\"\n  (click)=\"gameService.showCard(card)\"\n>\n  <div class=\"card\">\n    <div class=\"card__face card__face--front\">\n      <img\n        class=\"card__image\"\n        [src]=\"card.image.path\"\n        [alt]=\"card.image.name\"\n      />\n    </div>\n\n    <div class=\"card__face card__face--back\">\n      <span *ngIf=\"gameService.isCheatActivated\">{{ card.id }}</span>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/card/card.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/card/card.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 100px;\n  height: 130px;\n  margin: 10px;\n  -webkit-perspective: 600px;\n          perspective: 600px;\n  cursor: pointer;\n  border-radius: 20px; }\n  .container:hover .card {\n    box-shadow: 5px 5px 10px 1px rgba(0, 0, 0, 0.3); }\n  .container.show .card {\n    -webkit-transform: rotateY(0);\n            transform: rotateY(0); }\n  .container .card {\n    width: 100%;\n    height: 100%;\n    -webkit-transform-style: preserve-3d;\n            transform-style: preserve-3d;\n    position: relative;\n    transition: box-shadow 0.25s, -webkit-transform 0.5s;\n    transition: transform 0.5s, box-shadow 0.25s;\n    transition: transform 0.5s, box-shadow 0.25s, -webkit-transform 0.5s;\n    -webkit-transform: rotateY(180deg);\n            transform: rotateY(180deg);\n    box-shadow: 5px 5px 10px -5px rgba(0, 0, 0, 0.3);\n    border-radius: 20px; }\n  .container .card__image {\n      max-width: 60%;\n      max-height: 60%; }\n  .container .card__face {\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      -webkit-backface-visibility: hidden;\n              backface-visibility: hidden;\n      border-radius: 20px;\n      background: #ffffff; }\n  .container .card__face--back {\n        -webkit-transform: rotateY(180deg);\n                transform: rotateY(180deg);\n        background: #a96026;\n        color: rgba(0, 0, 0, 0.15);\n        display: flex;\n        align-items: center;\n        justify-content: center; }\n  .container .card__face--front {\n        display: flex;\n        align-items: center;\n        justify-content: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VyaWMvc3R1ZHkvYW5ndWxhci9tZW1vcnktZ2FtZS9zcmMvYXBwL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvZXJpYy9zdHVkeS9hbmd1bGFyL21lbW9yeS1nYW1lL3NyYy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtFQUNaLDBCQUFrQjtVQUFsQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLG1CQUFtQixFQUFBO0VBTnJCO0lBU0ksK0NBQStDLEVBQUE7RUFUbkQ7SUFhSSw2QkFBcUI7WUFBckIscUJBQXFCLEVBQUE7RUFiekI7SUFpQkksV0FBVztJQUNYLFlBQVk7SUFDWixvQ0FBNEI7WUFBNUIsNEJBQTRCO0lBQzVCLGtCQUFrQjtJQUNsQixvREFBNEM7SUFBNUMsNENBQTRDO0lBQTVDLG9FQUE0QztJQUM1QyxrQ0FBMEI7WUFBMUIsMEJBQTBCO0lBQzFCLGdEQUFnRDtJQUNoRCxtQkFBbUIsRUFBQTtFQXhCdkI7TUEyQk0sY0FBYztNQUNkLGVBQWUsRUFBQTtFQTVCckI7TUFnQ00sa0JBQWtCO01BQ2xCLFdBQVc7TUFDWCxZQUFZO01BQ1osbUNBQTJCO2NBQTNCLDJCQUEyQjtNQUMzQixtQkFBbUI7TUFDbkIsbUJDckNTLEVBQUE7RURBZjtRQXdDUSxrQ0FBMEI7Z0JBQTFCLDBCQUEwQjtRQUMxQixtQkN4Q087UUR5Q1AsMEJBQTBCO1FBQzFCLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsdUJBQXVCLEVBQUE7RUE3Qy9CO1FBaURRLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsdUJBQXVCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NhcmQvY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzcmMvdmFyaWFibGVzXCI7XG5cbi5jb250YWluZXIge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTMwcHg7XG4gIG1hcmdpbjogMTBweDtcbiAgcGVyc3BlY3RpdmU6IDYwMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG5cbiAgJjpob3ZlciAuY2FyZCB7XG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIH1cblxuICAmLnNob3cgLmNhcmQge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgwKTtcbiAgfVxuXG4gIC5jYXJkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMsIGJveC1zaGFkb3cgMC4yNXM7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG5cbiAgICAmX19pbWFnZSB7XG4gICAgICBtYXgtd2lkdGg6IDYwJTtcbiAgICAgIG1heC1oZWlnaHQ6IDYwJTtcbiAgICB9XG5cbiAgICAmX19mYWNlIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcblxuICAgICAgJi0tYmFjayB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xuICAgICAgICBiYWNrZ3JvdW5kOiAkYnJvd247XG4gICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgJi0tZnJvbnQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIiRncmVlbjogIzQ5YjU2YztcbiRkYXJrLWdyZWVuOiAjNGQ4YzIyO1xuJHdoaXRlOiAjZmZmZmZmO1xuJGJyb3duOiAjYTk2MDI2O1xuJGdyYXk6ICMzODM4Mzg7XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/card/card.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/card/card.component.ts ***!
  \***************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_entities_card_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/entities/card.class */ "./src/app/entities/card.class.ts");
/* harmony import */ var src_app_services_game_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/game.service */ "./src/app/services/game.service.ts");




var CardComponent = /** @class */ (function () {
    function CardComponent(gameService) {
        this.gameService = gameService;
    }
    CardComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_entities_card_class__WEBPACK_IMPORTED_MODULE_2__["Card"])
    ], CardComponent.prototype, "card", void 0);
    CardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-card",
            template: __webpack_require__(/*! ./card.component.html */ "./src/app/components/card/card.component.html"),
            styles: [__webpack_require__(/*! ./card.component.scss */ "./src/app/components/card/card.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_game_service__WEBPACK_IMPORTED_MODULE_3__["GameService"]])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/components/logo/logo.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/logo/logo.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"title\">Jogo da Memória</h1>\n"

/***/ }),

/***/ "./src/app/components/logo/logo.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/logo/logo.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title {\n  font-weight: normal;\n  color: #ffffff;\n  margin: 15px 0;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VyaWMvc3R1ZHkvYW5ndWxhci9tZW1vcnktZ2FtZS9zcmMvYXBwL2NvbXBvbmVudHMvbG9nby9sb2dvLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvZXJpYy9zdHVkeS9hbmd1bGFyL21lbW9yeS1nYW1lL3NyYy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLG1CQUFtQjtFQUNuQixjQ0ZhO0VER2IsY0FBYztFQUNkLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2dvL2xvZ28uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwic3JjL3ZhcmlhYmxlc1wiO1xuXG4udGl0bGUge1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBjb2xvcjogJHdoaXRlO1xuICBtYXJnaW46IDE1cHggMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIiwiJGdyZWVuOiAjNDliNTZjO1xuJGRhcmstZ3JlZW46ICM0ZDhjMjI7XG4kd2hpdGU6ICNmZmZmZmY7XG4kYnJvd246ICNhOTYwMjY7XG4kZ3JheTogIzM4MzgzODtcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/logo/logo.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/logo/logo.component.ts ***!
  \***************************************************/
/*! exports provided: LogoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoComponent", function() { return LogoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LogoComponent = /** @class */ (function () {
    function LogoComponent() {
    }
    LogoComponent.prototype.ngOnInit = function () {
    };
    LogoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-logo',
            template: __webpack_require__(/*! ./logo.component.html */ "./src/app/components/logo/logo.component.html"),
            styles: [__webpack_require__(/*! ./logo.component.scss */ "./src/app/components/logo/logo.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LogoComponent);
    return LogoComponent;
}());



/***/ }),

/***/ "./src/app/components/modal/modal.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/modal/modal.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\" [class.modal--visible]=\"visible\">\n  <div class=\"modal__content\">\n    <ng-content></ng-content>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/modal/modal.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/modal/modal.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.5);\n  right: 0;\n  bottom: 0;\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity 0.5s; }\n  .modal__content {\n    background: #ffffff;\n    width: 360px;\n    padding: 25px;\n    border-radius: 10px;\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%); }\n  .modal--visible {\n    opacity: 1;\n    visibility: visible; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VyaWMvc3R1ZHkvYW5ndWxhci9tZW1vcnktZ2FtZS9zcmMvYXBwL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwuY29tcG9uZW50LnNjc3MiLCIvaG9tZS9lcmljL3N0dWR5L2FuZ3VsYXIvbWVtb3J5LWdhbWUvc3JjL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsOEJBQThCO0VBQzlCLFFBQVE7RUFDUixTQUFTO0VBQ1QsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQix3QkFBd0IsRUFBQTtFQUV4QjtJQUNFLG1CQ1pXO0lEYVgsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxRQUFRO0lBQ1Isd0NBQWdDO1lBQWhDLGdDQUFnQyxFQUFBO0VBR2xDO0lBQ0UsVUFBVTtJQUNWLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tb2RhbC9tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzcmMvdmFyaWFibGVzXCI7XG5cbi5tb2RhbCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIG9wYWNpdHk6IDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzO1xuXG4gICZfX2NvbnRlbnQge1xuICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcbiAgICB3aWR0aDogMzYwcHg7XG4gICAgcGFkZGluZzogMjVweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIH1cblxuICAmLS12aXNpYmxlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIH1cbn1cbiIsIiRncmVlbjogIzQ5YjU2YztcbiRkYXJrLWdyZWVuOiAjNGQ4YzIyO1xuJHdoaXRlOiAjZmZmZmZmO1xuJGJyb3duOiAjYTk2MDI2O1xuJGdyYXk6ICMzODM4Mzg7XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/modal/modal.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/modal/modal.component.ts ***!
  \*****************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ModalComponent = /** @class */ (function () {
    function ModalComponent() {
    }
    ModalComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ModalComponent.prototype, "visible", void 0);
    ModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-modal",
            template: __webpack_require__(/*! ./modal.component.html */ "./src/app/components/modal/modal.component.html"),
            styles: [__webpack_require__(/*! ./modal.component.scss */ "./src/app/components/modal/modal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./src/app/config/images.config.ts":
/*!*****************************************!*\
  !*** ./src/app/config/images.config.ts ***!
  \*****************************************/
/*! exports provided: CARDS_IMAGES_PATHS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CARDS_IMAGES_PATHS", function() { return CARDS_IMAGES_PATHS; });
var CARDS_IMAGES_PATHS = [
    {
        name: "Angular",
        path: "assets/images/angular.svg"
    },
    {
        name: "Babel",
        path: "assets/images/babel.svg"
    },
    {
        name: "Ionic",
        path: "assets/images/ionic.svg"
    },
    {
        name: "Meteor",
        path: "assets/images/meteor.svg"
    },
    {
        name: "NodeJS",
        path: "assets/images/nodejs.svg"
    },
    {
        name: "NPM",
        path: "assets/images/npm.svg"
    },
    {
        name: "React",
        path: "assets/images/react.svg"
    },
    {
        name: "Redux",
        path: "assets/images/redux.svg"
    },
    {
        name: "V8",
        path: "assets/images/v8.svg"
    },
    {
        name: "VueJS",
        path: "assets/images/vuejs.svg"
    }
];


/***/ }),

/***/ "./src/app/entities/card.class.ts":
/*!****************************************!*\
  !*** ./src/app/entities/card.class.ts ***!
  \****************************************/
/*! exports provided: Card */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
var Card = /** @class */ (function () {
    function Card(id, image) {
        this.visible = false;
        this.id = id;
        this.image = image;
    }
    Card.prototype.show = function () {
        this.visible = true;
    };
    Card.prototype.hide = function () {
        this.visible = false;
    };
    return Card;
}());



/***/ }),

/***/ "./src/app/routes/playing/playing.component.html":
/*!*******************************************************!*\
  !*** ./src/app/routes/playing/playing.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-board></app-board>\n"

/***/ }),

/***/ "./src/app/routes/playing/playing.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/routes/playing/playing.component.ts ***!
  \*****************************************************/
/*! exports provided: PlayingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayingComponent", function() { return PlayingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/game.service */ "./src/app/services/game.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var PlayingComponent = /** @class */ (function () {
    function PlayingComponent(gameService, router) {
        this.gameService = gameService;
        this.router = router;
    }
    PlayingComponent.prototype.ngOnInit = function () {
        if (!this.gameService.playerName) {
            this.router.navigate(["start"]);
        }
    };
    PlayingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-playing",
            template: __webpack_require__(/*! ./playing.component.html */ "./src/app/routes/playing/playing.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], PlayingComponent);
    return PlayingComponent;
}());



/***/ }),

/***/ "./src/app/routes/ranking/ranking.component.html":
/*!*******************************************************!*\
  !*** ./src/app/routes/ranking/ranking.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-logo></app-logo>\n<div class=\"table-container\">\n  <table class=\"ranking-table\">\n    <thead>\n      <tr class=\"ranking-table__tr\">\n        <th class=\"ranking-table__th\">Jogador</th>\n        <th class=\"ranking-table__th\">Rodadas</th>\n      </tr>\n    </thead>\n\n    <tbody class=\"ranking-table__tbody\">\n      <tr\n        class=\"ranking-table__tr\"\n        *ngFor=\"let player of rankingService.getList()\"\n      >\n        <td class=\"ranking-table__td\">{{ player.name }}</td>\n        <td class=\"ranking-table__td\">{{ player.rounds }}</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n\n<app-button class=\"center\" type=\"submit\" (click)=\"gameService.playAgain()\">\n  Jogar!\n</app-button>\n"

/***/ }),

/***/ "./src/app/routes/ranking/ranking.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/routes/ranking/ranking.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table-container {\n  width: 500px;\n  max-width: 100%;\n  margin: 20px auto;\n  max-height: 420px;\n  overflow-y: scroll; }\n\n.ranking-table {\n  width: 100%;\n  text-align: center;\n  border-collapse: collapse;\n  color: #ffffff; }\n\n.ranking-table__tr {\n    background: rgba(255, 255, 255, 0.15); }\n\n.ranking-table__tr:nth-child(even) {\n      background: #4d8c22; }\n\n.ranking-table__td {\n    padding: 10px 0; }\n\n.ranking-table__th {\n    font-weight: normal;\n    background: #2b4e13;\n    padding: 10px 0; }\n\napp-button {\n  text-align: center;\n  display: block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VyaWMvc3R1ZHkvYW5ndWxhci9tZW1vcnktZ2FtZS9zcmMvYXBwL3JvdXRlcy9yYW5raW5nL3JhbmtpbmcuY29tcG9uZW50LnNjc3MiLCIvaG9tZS9lcmljL3N0dWR5L2FuZ3VsYXIvbWVtb3J5LWdhbWUvc3JjL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGNDWmEsRUFBQTs7QURjYjtJQUNFLHFDQUFxQyxFQUFBOztBQUR0QztNQUlHLG1CQ25CYyxFQUFBOztBRHVCbEI7SUFDRSxlQUFlLEVBQUE7O0FBR2pCO0lBQ0UsbUJBQW1CO0lBQ25CLG1CQUFvQztJQUNwQyxlQUFlLEVBQUE7O0FBSW5CO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3JvdXRlcy9yYW5raW5nL3JhbmtpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwic3JjL3ZhcmlhYmxlc1wiO1xuXG4udGFibGUtY29udGFpbmVyIHtcbiAgd2lkdGg6IDUwMHB4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xuICBtYXgtaGVpZ2h0OiA0MjBweDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG4ucmFua2luZy10YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGNvbG9yOiAkd2hpdGU7XG5cbiAgJl9fdHIge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XG5cbiAgICAmOm50aC1jaGlsZChldmVuKSB7XG4gICAgICBiYWNrZ3JvdW5kOiAkZGFyay1ncmVlbjtcbiAgICB9XG4gIH1cblxuICAmX190ZCB7XG4gICAgcGFkZGluZzogMTBweCAwO1xuICB9XG5cbiAgJl9fdGgge1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgYmFja2dyb3VuZDogZGFya2VuKCRkYXJrLWdyZWVuLCAxNSUpO1xuICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgfVxufVxuXG5hcHAtYnV0dG9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbiIsIiRncmVlbjogIzQ5YjU2YztcbiRkYXJrLWdyZWVuOiAjNGQ4YzIyO1xuJHdoaXRlOiAjZmZmZmZmO1xuJGJyb3duOiAjYTk2MDI2O1xuJGdyYXk6ICMzODM4Mzg7XG4iXX0= */"

/***/ }),

/***/ "./src/app/routes/ranking/ranking.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/routes/ranking/ranking.component.ts ***!
  \*****************************************************/
/*! exports provided: RankingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RankingComponent", function() { return RankingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_ranking_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/ranking.service */ "./src/app/services/ranking.service.ts");
/* harmony import */ var src_app_services_game_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/game.service */ "./src/app/services/game.service.ts");




var RankingComponent = /** @class */ (function () {
    function RankingComponent(rankingService, gameService) {
        this.rankingService = rankingService;
        this.gameService = gameService;
    }
    RankingComponent.prototype.ngOnInit = function () { };
    RankingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-ranking",
            template: __webpack_require__(/*! ./ranking.component.html */ "./src/app/routes/ranking/ranking.component.html"),
            styles: [__webpack_require__(/*! ./ranking.component.scss */ "./src/app/routes/ranking/ranking.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_ranking_service__WEBPACK_IMPORTED_MODULE_2__["RankingService"],
            src_app_services_game_service__WEBPACK_IMPORTED_MODULE_3__["GameService"]])
    ], RankingComponent);
    return RankingComponent;
}());



/***/ }),

/***/ "./src/app/routes/start/start.component.html":
/*!***************************************************!*\
  !*** ./src/app/routes/start/start.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"start-form\" action=\"#\" (ngSubmit)=\"startGame()\">\n  <app-logo></app-logo>\n\n  <input\n    type=\"text\"\n    placeholder=\"Seu nome\"\n    required\n    [(ngModel)]=\"gameService.playerName\"\n    name=\"playerName\"\n    class=\"input\"\n  />\n\n  <div class=\"buttons-container\">\n    <app-button type=\"submit\">Jogar!</app-button>\n    <a class=\"link\" routerLink=\"/ranking\">Ranking</a>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/routes/start/start.component.scss":
/*!***************************************************!*\
  !*** ./src/app/routes/start/start.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".start-form {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  width: 270px;\n  max-width: 90%; }\n\n.input {\n  padding: 10px 20px;\n  border: none;\n  border-radius: 20px;\n  width: 100%;\n  margin: 10px 0;\n  color: #4d8c22; }\n\n.link {\n  color: #ffffff;\n  margin: 0 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VyaWMvc3R1ZHkvYW5ndWxhci9tZW1vcnktZ2FtZS9zcmMvYXBwL3JvdXRlcy9zdGFydC9zdGFydC5jb21wb25lbnQuc2NzcyIsIi9ob21lL2VyaWMvc3R1ZHkvYW5ndWxhci9tZW1vcnktZ2FtZS9zcmMvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCx3Q0FBZ0M7VUFBaEMsZ0NBQWdDO0VBQ2hDLFlBQVk7RUFDWixjQUFjLEVBQUE7O0FBR2hCO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGNBQWM7RUFDZCxjQ2hCa0IsRUFBQTs7QURtQnBCO0VBQ0UsY0NuQmE7RURvQmIsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcm91dGVzL3N0YXJ0L3N0YXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInNyYy92YXJpYWJsZXNcIjtcblxuLnN0YXJ0LWZvcm0ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB3aWR0aDogMjcwcHg7XG4gIG1heC13aWR0aDogOTAlO1xufVxuXG4uaW5wdXQge1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMTBweCAwO1xuICBjb2xvcjogJGRhcmstZ3JlZW47XG59XG5cbi5saW5rIHtcbiAgY29sb3I6ICR3aGl0ZTtcbiAgbWFyZ2luOiAwIDE1cHg7XG59XG4iLCIkZ3JlZW46ICM0OWI1NmM7XG4kZGFyay1ncmVlbjogIzRkOGMyMjtcbiR3aGl0ZTogI2ZmZmZmZjtcbiRicm93bjogI2E5NjAyNjtcbiRncmF5OiAjMzgzODM4O1xuIl19 */"

/***/ }),

/***/ "./src/app/routes/start/start.component.ts":
/*!*************************************************!*\
  !*** ./src/app/routes/start/start.component.ts ***!
  \*************************************************/
/*! exports provided: StartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartComponent", function() { return StartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/game.service */ "./src/app/services/game.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var StartComponent = /** @class */ (function () {
    function StartComponent(gameService, router) {
        this.gameService = gameService;
        this.router = router;
    }
    StartComponent.prototype.startGame = function () {
        if (this.gameService.playerName && this.gameService.playerName.trim()) {
            this.router.navigate(["playing"]);
        }
    };
    StartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-start",
            template: __webpack_require__(/*! ./start.component.html */ "./src/app/routes/start/start.component.html"),
            styles: [__webpack_require__(/*! ./start.component.scss */ "./src/app/routes/start/start.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], StartComponent);
    return StartComponent;
}());



/***/ }),

/***/ "./src/app/services/card.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/card.service.ts ***!
  \******************************************/
/*! exports provided: CardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardService", function() { return CardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _entities_card_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../entities/card.class */ "./src/app/entities/card.class.ts");
/* harmony import */ var _config_images_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/images.config */ "./src/app/config/images.config.ts");




var CardService = /** @class */ (function () {
    function CardService() {
    }
    CardService.prototype.getCards = function () {
        var cards = [];
        for (var i = 0; i < _config_images_config__WEBPACK_IMPORTED_MODULE_3__["CARDS_IMAGES_PATHS"].length; i++) {
            cards.push(new _entities_card_class__WEBPACK_IMPORTED_MODULE_2__["Card"](i, _config_images_config__WEBPACK_IMPORTED_MODULE_3__["CARDS_IMAGES_PATHS"][i]));
            cards.push(new _entities_card_class__WEBPACK_IMPORTED_MODULE_2__["Card"](i, _config_images_config__WEBPACK_IMPORTED_MODULE_3__["CARDS_IMAGES_PATHS"][i]));
        }
        this.shuffleArray(cards);
        return cards;
    };
    CardService.prototype.shuffleArray = function (elements) {
        var _a;
        for (var i = elements.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            _a = [elements[j], elements[i]], elements[i] = _a[0], elements[j] = _a[1];
        }
    };
    CardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CardService);
    return CardService;
}());



/***/ }),

/***/ "./src/app/services/game.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/game.service.ts ***!
  \******************************************/
/*! exports provided: GameService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameService", function() { return GameService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _card_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card.service */ "./src/app/services/card.service.ts");
/* harmony import */ var _ranking_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ranking.service */ "./src/app/services/ranking.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var GameService = /** @class */ (function () {
    function GameService(cardService, rankingService, router) {
        this.cardService = cardService;
        this.rankingService = rankingService;
        this.router = router;
        this.cards = [];
        this.activeCards = [];
        this.isBoardLocked = false;
        this.isCheatActivated = false;
        this.rounds = 0;
        this.cards = this.cardService.getCards();
    }
    Object.defineProperty(GameService.prototype, "isGameOver", {
        get: function () {
            return this.cards.every(function (card) { return card.visible === true; });
        },
        enumerable: true,
        configurable: true
    });
    GameService.prototype.showCard = function (card) {
        if (!this.isMoveValid())
            return;
        if (this.isCardValid(card)) {
            this.activeCards.push(card);
            card.show();
        }
        if (this.activeCards.length === 2) {
            this.runRound();
        }
        if (this.isGameOver) {
            this.addPlayerInRanking();
        }
    };
    GameService.prototype.playAgain = function () {
        this.router.navigate(["playing"]);
        this.cards = this.cardService.getCards();
        this.activeCards = [];
        this.rounds = 0;
        this.isBoardLocked = false;
    };
    GameService.prototype.toggleCheat = function () {
        this.isCheatActivated = !this.isCheatActivated;
    };
    GameService.prototype.isMoveValid = function () {
        return !this.isGameOver && !this.isBoardLocked;
    };
    GameService.prototype.runRound = function () {
        var _this = this;
        this.lockBoard();
        if (this.isMatch()) {
            this.activeCards = [];
            this.unlockBoard();
        }
        else {
            setTimeout(function () {
                _this.hideSelectedCards();
                _this.unlockBoard();
            }, 500);
        }
        this.rounds++;
    };
    GameService.prototype.isCardValid = function (card) {
        return this.activeCards.length < 2 && !card.visible;
    };
    GameService.prototype.lockBoard = function () {
        this.isBoardLocked = true;
    };
    GameService.prototype.unlockBoard = function () {
        this.isBoardLocked = false;
    };
    GameService.prototype.isMatch = function () {
        return this.activeCards[0].id === this.activeCards[1].id;
    };
    GameService.prototype.hideSelectedCards = function () {
        this.activeCards[0].hide();
        this.activeCards[1].hide();
        this.activeCards = [];
    };
    GameService.prototype.addPlayerInRanking = function () {
        this.rankingService.addPlayer({
            name: this.playerName,
            rounds: this.rounds
        });
    };
    GameService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_card_service__WEBPACK_IMPORTED_MODULE_2__["CardService"],
            _ranking_service__WEBPACK_IMPORTED_MODULE_3__["RankingService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], GameService);
    return GameService;
}());



/***/ }),

/***/ "./src/app/services/ranking.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/ranking.service.ts ***!
  \*********************************************/
/*! exports provided: RankingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RankingService", function() { return RankingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RankingService = /** @class */ (function () {
    function RankingService() {
    }
    RankingService.prototype.getList = function () {
        var stringRanking = localStorage.getItem("memory-game/ranking") || JSON.stringify([]);
        var list = JSON.parse(stringRanking);
        list.sort(function (a, b) { return a.rounds - b.rounds; });
        return list;
    };
    RankingService.prototype.addPlayer = function (player) {
        var list = this.getList();
        list.push(player);
        localStorage.setItem("memory-game/ranking", JSON.stringify(list));
    };
    RankingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        })
    ], RankingService);
    return RankingService;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/eric/study/angular/memory-game/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map