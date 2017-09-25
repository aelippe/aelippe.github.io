webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".close-btn-container {\n  position: fixed;\n  z-index: 200;\n  left: 50%;\n  bottom: 0px;\n  margin-bottom: 35px;\n  margin-left: -25px;\n  width: 50px;\n  height: 50px;\n  background: rgba(17, 17, 17, 0.85);\n  border-radius: 50px;\n  display: table;\n  text-align: center;\n  vertical-align: middle;\n}\n\n.close-btn {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 50%;\n  left: 50%;\n  z-index: 10;\n  pointer-events: all;\n  cursor: pointer;\n  display: block;\n\n  transform: translateX(-50%) translateY(-50%) scale(1);\n  -webkit-transform: translateX(-50%) translateY(-50%) scale(1);\n  -ms-transform: translateX(-50%) translateY(-50%) scale(1);\n\n  -webkit-tap-highlight-color: transparent;\n}\n\n.close-btn-container .close-btn {\n  vertical-align: middle;\n  display: table-cell;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"side-form\" style=\"background-color: #fafafa;\">\n\n  <!--SECTION HERO-->\n  <section class=\"hero\" id=\"top\">\n    <h1 translate>ABOUT.NEW_ALPHABET</h1>\n    <h2 translate>ABOUT.NEW_ALPHABET_SPAN_1 <span translate>ABOUT.NEW_ALPHABET_SPAN_2</span> ABOUT.NEW_ALPHABET_SPAN_3</h2>\n    <p>\n      <!--(click)=\"scrollToHref('#quotes', null)\"-->\n      <a href=\"http://www.akorda.kz/kz/events/akorda_news/press_conferences/memleket-basshysynyn-bolashakka-bagdar-ruhani-zhangyru-atty-makalasy\"\n         class=\"btn button large\" target=\"_blank\"\n         translate>ABOUT.READ_MORE</a>\n    </p>\n  </section>\n\n    <!--SECTION QUOTES-->\n    <section id=\"quotes\" class=\"quotes block\">\n      <article>\n        <blockquote>\n          <p translate>ABOUT.QUOTE_1.TEXT</p>\n          <footer>\n            <cite translate>ABOUT.QUOTE_1.AUTHOR</cite>\n          </footer>\n        </blockquote>\n      </article>\n\n      <article>\n        <blockquote>\n          <p translate>ABOUT.QUOTE_2.TEXT</p>\n          <footer>\n            <cite translate>ABOUT.QUOTE_2.AUTHOR</cite>\n          </footer>\n        </blockquote>\n      </article>\n\n\n      <article>\n        <blockquote>\n          <p translate>ABOUT.QUOTE_3.TEXT</p>\n          <footer>\n            <cite translate>ABOUT.QUOTE_3.AUTHOR</cite>\n          </footer>\n        </blockquote>\n      </article>\n      <article>\n        <blockquote>\n          <p translate>ABOUT.QUOTE_4.TEXT</p>\n          <footer>\n            <cite translate>ABOUT.QUOTE_4.AUTHOR</cite>\n          </footer>\n        </blockquote>\n      </article>\n      <article>\n        <blockquote>\n          <p translate>ABOUT.QUOTE_5.TEXT</p>\n          <footer>\n            <cite translate>ABOUT.QUOTE_5.AUTHOR</cite>\n          </footer>\n        </blockquote>\n      </article>\n      <article>\n        <blockquote>\n          <p translate>ABOUT.QUOTE_6.TEXT</p>\n          <footer>\n            <cite translate>ABOUT.QUOTE_6.AUTHOR</cite>\n          </footer>\n        </blockquote>\n      </article>\n    </section>\n\n\n\n  <section class=\"welcome-home block\">\n    <h1 translate>ABOUT.SUGGESTED_ALPHABET</h1>\n    <p translate>ABOUT.SUGGESTED_ALPHABET_P</p>\n    <table class=\"table table-sm\" style=\"max-width: 500px; margin: 0 auto; font-size: 20px;\">\n      <tbody>\n      <tr>\n        <td><b>А</b></td>\n        <td>A</td>\n        <td><b>Қ</b></td>\n        <td>Q</td>\n        <td><b>Ф</b></td>\n        <td>F</td>\n      </tr>\n      <tr>\n        <td><b>Ә</b></td>\n        <td>Ae</td>\n        <td><b>Л</b></td>\n        <td>L</td>\n        <td><b>Х</b></td>\n        <td>H</td>\n      </tr>\n      <tr>\n        <td><b>Б</b></td>\n        <td>B</td>\n        <td><b>М</b></td>\n        <td>M</td>\n        <td><b>h</b></td>\n        <td>h</td>\n      </tr>\n      <tr>\n        <td><b>В</b></td>\n        <td>V</td>\n        <td><b>Н</b></td>\n        <td>N</td>\n        <td><mark><b>Ц</b></mark></td>\n        <td>Ts</td>\n      </tr>\n      <tr>\n        <td><b>Г</b></td>\n        <td>G</td>\n        <td><b>ң</b></td>\n        <td>ng</td>\n        <td><b>Ч</b></td>\n        <td>Ch</td>\n      </tr>\n      <tr>\n        <td><b>Ғ</b></td>\n        <td>Gh</td>\n        <td><b>О</b></td>\n        <td>O</td>\n        <td><b>Ш</b></td>\n        <td>Sh</td>\n      </tr>\n      <tr>\n        <td><b>Д</b></td>\n        <td>D</td>\n        <td><b>Ө</b></td>\n        <td>Oe</td>\n        <td><mark><b>Щ</b></mark></td>\n        <td>Sh</td>\n      </tr>\n      <tr>\n      <tr>\n        <td><b>Е</b></td>\n        <td>E</td>\n        <td><b>П</b></td>\n        <td>P</td>\n        <td><mark><b>ь</b></mark></td>\n        <td></td>\n      </tr>\n      <tr>\n      <tr>\n        <td><mark><b>Ё</b></mark></td>\n        <td>Io</td>\n        <td><b>Р</b></td>\n        <td>R</td>\n        <td><b>Ы</b></td>\n        <td>Y</td>\n      </tr>\n      <tr>\n        <td><b>Ж</b></td>\n        <td>Zh</td>\n        <td><b>С</b></td>\n        <td>C</td>\n        <td><b>I</b></td>\n        <td>I</td>\n      </tr>\n      <tr>\n        <td><b>З</b></td>\n        <td>Z</td>\n        <td><b>Т</b></td>\n        <td>T</td>\n        <td><mark><b>ъ</b></mark></td>\n        <td></td>\n      </tr>\n      <tr>\n        <td><b>И</b></td>\n        <td>I</td>\n        <td><b>У</b></td>\n        <td>W</td>\n        <td><mark><b>Э</b></mark></td>\n        <td>E</td>\n      </tr>\n      <tr>\n        <td><b>Й</b></td>\n        <td>J</td>\n        <td><b>Ұ</b></td>\n        <td>U</td>\n        <td><mark><b>Ю</b></mark></td>\n        <td>Iw</td>\n      </tr>\n      <tr>\n        <td><b>К</b></td>\n        <td>K</td>\n        <td><b>Ү</b></td>\n        <td>Ue</td>\n        <td><mark><b>Я</b></mark></td>\n        <td>Ia</td>\n      </tr>\n      </tbody>\n    </table>\n\n    <p><small translate>ABOUT.NOT_APPROVED</small></p>\n  </section>\n\n  <!--FOOTER-->\n\n  <footer class=\"footer\">\n    <h1 class=\"text-center\" style=\"padding-top: 96px;\" translate>ABOUT.ANTHEM_WITH_NEW_LETTERS</h1>\n    <div class=\"wrapper block\" style=\"padding: 48px 14px;\">\n      <ul>\n        <li>Soezin zhazghandar: Zhumeken Naezhimedenov, Nursultan Nazarbaev</li>\n        <li>Aenin zhazghan: Shaemshi Qaldaiaqov</li>\n      </ul>\n      <ul>\n        <li>Altyn kuen aspany,</li>\n        <li>Altyn daen dalasy,</li>\n        <li>Erlikting dastany,</li>\n        <li>Elime qarashy!</li>\n        <li>Ezhelden er degen,</li>\n        <li>Dangqymyz shyqty ghoj.</li>\n        <li>Namysyn bermegen,</li>\n        <li>Qazaghym myqty ghoj!</li>\n        <br>\n        <li>Qajyrmasy:</li>\n        <br>\n        <li>Mening elim, mening elim,</li>\n        <li>Gueling bolyp egilemin,</li>\n        <li>Zhyryng bolyp toegilemin, elim!</li>\n        <li>Twghan zherim mening - Qazaqstanym!</li>\n        <br>\n        <li>Urpaqqa zhol ashqan,</li>\n        <li>Keng bajtaq zherim bar.</li>\n        <li>Birligi zharasqan,</li>\n        <li>Taewelsiz elim bar.</li>\n        <li>Qarsy alghan waqytty,</li>\n        <li>Maenggilik dosyndaj,</li>\n        <li>Bizding el baqytty,</li>\n        <li>Bizding el osyndaj!</li>\n        <br>\n        <li>Qajyrmasy:</li>\n        <br>\n        <li>Mening elim, mening elim,</li>\n        <li>Gueling bolyp egilemin,</li>\n        <li>Zhyryng bolyp toegilemin, elim!</li>\n        <li>Twghan zherim mening - Qazaqstanym!</li>\n      </ul>\n    </div>\n    <div class=\"footer-label\">© 2017 aelippe.kz</div>\n  </footer>\n\n\n  <div [@flyUpAnimation]=\"state\" class=\"close-btn-container rounded-circle\">\n    <a (click)=\"close($event)\" class=\"close-btn\">\n      <svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\" viewBox=\"0 0 40 40\" style=\"enable-background:new 0 0 40 40;\" xml:space=\"preserve\">\n            <path fill=\"white\" stroke=\"none\" d=\"M14.6,27l5.4-5.4l5.4,5.4l1.6-1.6L21.6,20l5.4-5.4L25.4,13L20,18.4L14.6,13L13,14.6l5.4,5.4L13,25.4L14.6,27z\"></path>\n            </svg>\n    </a>\n  </div>\n\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fly_up_animation__ = __webpack_require__("../../../../../src/app/about/fly-up.animation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
/**
 * Yelnar Nauryzbayev
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutComponent = (function () {
    function AboutComponent() {
        this.toogleState = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent.prototype.close = function (event) {
        event.preventDefault();
        var self = this;
        /**
         * Temporary solution
         * ToDo: use core animations and avoid using jQuery
         */
        self.scrollToHref('#top', function () {
            self.toogleState.next();
        });
    };
    AboutComponent.prototype.scrollToHref = function (toHref, callback) {
        __WEBPACK_IMPORTED_MODULE_2_jquery__('html, body').animate({
            scrollTop: __WEBPACK_IMPORTED_MODULE_2_jquery__(toHref).offset().top
        }, 300).promise().then(function () {
            if (callback) {
                callback();
            }
        });
    };
    return AboutComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], AboutComponent.prototype, "state", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], AboutComponent.prototype, "toogleState", void 0);
AboutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-about',
        template: __webpack_require__("../../../../../src/app/about/about.component.html"),
        styles: [__webpack_require__("../../../../../src/app/about/about.component.css")],
        animations: [__WEBPACK_IMPORTED_MODULE_1__fly_up_animation__["a" /* flyUpAnimation */]]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/about/fly-up.animation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return flyUpAnimation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");

var flyUpAnimation = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* trigger */])('flyUpAnimation', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('inactive', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({
        opacity: 0
    })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('active', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({
        opacity: 1
    })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])('inactive => active', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('2s ease-in-out')
    ]),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])('active => inactive', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('2s ease-in-out')
    ])
]);
//# sourceMappingURL=fly-up.animation.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/**
 * Yelnar Nauryzbayev
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/**
 * Yelnar Nauryzbayev
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HttpLoaderFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_bs3_modal_ng2_bs3_modal__ = __webpack_require__("../../../../ng2-bs3-modal/ng2-bs3-modal.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_bs3_modal_ng2_bs3_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_bs3_modal_ng2_bs3_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_clipboard__ = __webpack_require__("../../../../ngx-clipboard/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_http_loader__ = __webpack_require__("../../../../@ngx-translate/http-loader/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
/**
 * Yelnar Nauryzbayev
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














// AoT requires an exported function for factories
function HttpLoaderFactory(http) {
    return new __WEBPACK_IMPORTED_MODULE_8__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http);
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_11__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_12__about_about_component__["a" /* AboutComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_4_ng2_bs3_modal_ng2_bs3_modal__["Ng2Bs3ModalModule"],
            __WEBPACK_IMPORTED_MODULE_5_ngx_clipboard__["a" /* ClipboardModule */],
            __WEBPACK_IMPORTED_MODULE_9__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                loader: {
                    provide: __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["a" /* TranslateLoader */],
                    useFactory: HttpLoaderFactory,
                    deps: [__WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClient */]]
                }
            })
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_13__app_service__["a" /* AppService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/**
 * Yelnar Nauryzbayev
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppService = (function () {
    function AppService() {
    }
    AppService.prototype.getAlphabet = function () {
        var cyrillic = {
            base: 'АаБбЦцДдЕеФфГгХхИиЙйКкЛлМмНнОоПпҚқРрСсТтҰұВвУуЫыІіЗз',
            vowels: 'ӘәӨөҮү',
            consonant: 'ҒғЧчШшЖж',
            lower: ['ң', 'h'],
            special: ['Ё', 'ё', 'Ц', 'ц', 'Щ', 'щ', 'Э', 'э', 'Ю', 'ю', 'Я', 'я', 'Ь', 'ь', 'Ъ', 'ъ']
        };
        var latin = {
            base: 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwYyIiZz',
            vowels: 'AaOoUu',
            consonant: 'GgCcSsZz',
            lower: ['ng', 'h'],
            special: ['Io', 'io', 'Ts', 'ts', 'Sh', 'sh', 'E', 'e', 'Iw', 'iw', 'Ia', 'ia', '', '', '', '']
        };
        var map = new Map();
        Object.keys(cyrillic).forEach(function (key) {
            var ending = '';
            if (key === 'vowels') {
                ending = 'e';
            }
            if (key === 'consonant') {
                ending = 'h';
            }
            for (var i = 0; i < cyrillic[key].length; i++) {
                map.set(cyrillic[key][i], latin[key][i] + ending);
            }
        });
        return map;
    };
    AppService.prototype.translate = function (text) {
        if (!this.alphabet) {
            this.alphabet = this.getAlphabet();
        }
        var result = '';
        for (var _i = 0, text_1 = text; _i < text_1.length; _i++) {
            var l = text_1[_i];
            if (this.alphabet.has(l)) {
                result += this.alphabet.get(l);
            }
            else {
                result += l;
            }
        }
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(result);
    };
    return AppService;
}());
AppService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], AppService);

//# sourceMappingURL=app.service.js.map

/***/ }),

/***/ "../../../../../src/app/home/fade-in-and-out.animation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fadeInAndOut; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");

var fadeInAndOut = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* trigger */])('fadeInAndOut', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('1', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ opacity: 1 })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('0', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ opacity: 0 })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])('1 => 0', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('500ms')),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])('0 => 1', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('500ms'))
]);
//# sourceMappingURL=fade-in-and-out.animation.js.map

/***/ }),

/***/ "../../../../../src/app/home/fade-in-out.animation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fadeInAnimation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");

var fadeInAnimation = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* trigger */])('fadeInAnimation', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('active', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ opacity: 1, transform: 'scale(1.0)' })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('inactive', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ opacity: 0.5, transform: 'scale(0.9)' })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])('active => inactive', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('400ms')),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])('inactive => active', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('400ms'))
]);
//# sourceMappingURL=fade-in-out.animation.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  height: 100%;\n}\n\n.header {\n  padding-top: 20px;\n  padding-bottom: 40px;\n}\n\n.header-text {\n  font-weight: 400;\n}\n\n.textarea-container {\n  width: 100%;\n  position: relative;\n  border: solid 1px #ccc;\n  margin-bottom: 20px;\n}\n\n.textarea-container.active {\n  border: 1px solid rgba(254, 197, 12, 0.54);\n}\n\n.textarea-top {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  color: #999;\n  font-size: 120%;\n  padding: 10px 10px 0px 10px;\n}\n\ni.icon-delete-o:hover {\n  cursor: pointer;\n  color: rgba(255, 0, 0, 0.51);\n}\n\ni.icon-copy:hover {\n  cursor: pointer;\n  color: rgba(0, 0, 0, 0.8);\n}\n\n.alphabet-name {\n  font-size: 12px;\n  padding-top: 8px;\n}\n\ntextarea {\n  margin-top: 45px;\n  margin-bottom: 30px;\n  padding-left: 15px;\n  padding-right: 10px;\n  border: none;\n  outline: none;\n  width: 100%;\n  resize: none;\n  min-height: 150px;\n  max-height: 500px;\n  font-size: 20px;\n  overflow-y: auto;\n}\n\ntextarea::-moz-selection {\n  background: rgba(255, 228, 72, 0.25); /* WebKit/Blink Browsers */\n}\n\ntextarea::selection {\n  background: rgba(255, 228, 72, 0.25); /* WebKit/Blink Browsers */\n}\n\ntextarea::-moz-selection {\n  background: rgba(255, 228, 72, 0.25); /* Gecko Browsers */\n}\n\n.textarea-bottom {\n  position: absolute;\n  bottom: 10px;\n  right: 10px;\n  color: #999;\n  font-size: 12px;\n}\n\n.footer {\n  margin-top: 30px;\n}\n\n.modal-header-text {\n  padding-bottom: 20px;\n}\n\n.smFont {\n  font-size: 16px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"width: 100%;\" [@fadeInAnimation]=\"getState()\">\n\n  <div class=\"container\">\n    <div class=\"header clearfix\">\n      <nav>\n        <ul class=\"nav nav-pills float-right\">\n          <li class=\"nav-item\">\n            <a href=\"#\" (click)=\"changeLanguage()\" style=\"color: #2E2F30;\">{{languages[curLang]}}</a>\n          </li>\n\n          <li class=\"nav-item\">\n            <a class=\"nav-link btn button text-uppercase\"\n               href=\"#\"\n               (click)=\"toggleState()\"\n               translate>HOME.ABOUT</a>\n          </li>\n        </ul>\n      </nav>\n      <h3 class=\"header-text\">\n        <b class=\"align-middle\">Aelippe</b>\n      </h3>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n\n        <div class=\"textarea-container\" [ngClass]=\"{'active': focused}\">\n\n          <div class=\"textarea-top\">\n            <i class=\"icon-delete-o control\"\n               (click)=\"inputBox.value = ''; clear();\"></i>\n            <span class=\"text-uppercase float-right alphabet-name\" style=\"padding-top: 7px;\" translate>HOME.CYRILLIC</span>\n          </div>\n\n          <textarea name=\"input\" maxlength=\"5000\"\n                    wrap=\"soft\" placeholder=\"{{ 'HOME.ENTER_TEXT' | translate }}\"\n                    #inputBox\n                    [(ngModel)] = \"inputModel\" (ngModelChange)=\"onTextChanged(inputBox.value)\"\n                    [ngClass] = \"{'smFont': inputBox.value.length > 150}\"\n                    (focus)=\"onFocus()\"\n                    (blur)=\"onBlur()\"\n          ></textarea>\n\n          <div class=\"textarea-bottom\">\n            {{inputBox.value.length + \" / \" + MAX_LENGTH}}\n          </div>\n\n        </div>\n\n      </div>\n\n      <div class=\"col-sm-6\">\n\n        <div class=\"textarea-container\">\n\n          <div class=\"textarea-top\">\n            <i class=\"icon-copy float-right control\"\n               ngxClipboard [cbContent]=\"translation | async\" (cbOnSuccess)=\"outputBox.select(); copied();\"></i>\n            <span class=\"text-uppercase alphabet-name\" translate>HOME.LATIN</span>\n            <span [@fadeInAndOut]=\"isCopied\"\n                  class=\"alphabet-name text-lowercase\"\n                  style=\"padding-left: 5px;\"\n                  translate>HOME.COPIED</span>\n          </div>\n\n          <textarea name=\"input\" readonly\n                    wrap=\"soft\"\n                    #outputBox\n                    [ngClass] = \"{'smFont': inputBox.value.length > 150}\"\n                    [value]=\"translation | async\"\n          ></textarea>\n\n        </div>\n\n      </div>\n    </div>\n  </div>\n\n  <!--SECTION HELLO-->\n  <section class=\"welcome-home block\">\n    <h1 translate>HOME.ABOUT_US</h1>\n    <p translate>HOME.ABOUT_US_P_1</p>\n    <p translate>HOME.ABOUT_US_P_2</p>\n    <p translate>HOME.ABOUT_US_P_3</p>\n    <p translate>HOME.ABOUT_US_P_4</p>\n\n    <a href=\"#\" class=\"btn button large\" translate>HOME.CONTACT_US</a>\n\n    <p><small>© 2017 aelippe.kz</small></p>\n  </section>\n\n</div>\n\n<app-about [@slideInOut]=\"state\" [state]=\"state\" (toogleState)=\"toggleState()\"></app-about>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__slide_in_out_animation__ = __webpack_require__("../../../../../src/app/home/slide-in-out.animation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__fade_in_out_animation__ = __webpack_require__("../../../../../src/app/home/fade-in-out.animation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__fade_in_and_out_animation__ = __webpack_require__("../../../../../src/app/home/fade-in-and-out.animation.ts");
/**
 * Yelnar Nauryzbayev
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var HomeComponent = (function () {
    function HomeComponent(appService, translate) {
        this.appService = appService;
        this.translate = translate;
        this.MAX_LENGTH = 5000;
        this.isCopied = 0;
        this.state = 'inactive';
        this.languages = ['kz', 'ru', 'en'];
        this.curLang = 0;
        this.subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        translate.setDefaultLang('en');
        translate.use(this.languages[this.curLang]);
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.focused = false;
        this.translation = this.subject
            .debounceTime(100)
            .distinctUntilChanged()
            .switchMap(function (text) { return text
            ? _this.appService.translate(text)
            : __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(''); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(error);
        });
    };
    HomeComponent.prototype.onTextChanged = function (text) {
        this.subject.next(text.slice(0, this.MAX_LENGTH));
    };
    HomeComponent.prototype.onBlur = function () {
        this.focused = false;
    };
    HomeComponent.prototype.onFocus = function () {
        this.focused = true;
    };
    HomeComponent.prototype.clear = function () {
        this.subject.next('');
    };
    HomeComponent.prototype.toggleState = function () {
        this.state === 'active' ? this.state = 'inactive' : this.state = 'active';
    };
    HomeComponent.prototype.getState = function () {
        return this.state === 'active' ? 'inactive' : 'active';
    };
    HomeComponent.prototype.copied = function () {
        var _this = this;
        this.isCopied = 1;
        setTimeout(function () {
            _this.isCopied = 0;
        }, 500);
    };
    HomeComponent.prototype.changeLanguage = function () {
        // const locale = this.locales[]
        this.curLang = (++this.curLang) % 3;
        this.translate.use(this.languages[this.curLang]);
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")],
        animations: [
            __WEBPACK_IMPORTED_MODULE_10__slide_in_out_animation__["a" /* slideInOut */],
            __WEBPACK_IMPORTED_MODULE_11__fade_in_out_animation__["a" /* fadeInAnimation */],
            __WEBPACK_IMPORTED_MODULE_12__fade_in_and_out_animation__["a" /* fadeInAndOut */]
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_9__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__app_service__["a" /* AppService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["c" /* TranslateService */]) === "function" && _b || Object])
], HomeComponent);

var _a, _b;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/slide-in-out.animation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return slideInOut; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");

var slideInOut = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* trigger */])('slideInOut', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('inactive', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({
        // opacity: 0,
        height: '0%',
        width: '100%',
        display: 'none',
        position: 'absolute',
        bottom: 0,
        left: 0
    })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('active', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({
        // opacity: 1,
        height: '100%',
        width: '100%',
        position: 'absolute',
        bottom: 0,
        left: 0
    })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])('inactive => active', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({
            // opacity: 0,
            height: '0%',
            display: 'none'
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.4s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({
            // opacity: 1,
            height: '100%',
            display: 'block'
        }))
    ]),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])('active => inactive', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({
            // opacity: 1,
            height: '100%',
            display: 'block'
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.4s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({
            // opacity: 0,
            height: '0%',
            display: 'none'
        }))
    ])
]);
//# sourceMappingURL=slide-in-out.animation.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map