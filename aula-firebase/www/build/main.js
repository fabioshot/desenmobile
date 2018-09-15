webpackJsonp([1],{

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImcService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ImcService = /** @class */ (function () {
    function ImcService(afs) {
        this.afs = afs;
        this.itemsCollection = this.afs.collection('imc');
    }
    ImcService.prototype.getImcs = function () {
        return this.itemsCollection;
    };
    ImcService.prototype.addImc = function (imc) {
        var id = this.afs.createId();
        imc.key = id;
        this.itemsCollection.doc(id).set(JSON.parse(JSON.stringify(imc)));
    };
    ImcService.prototype.updateImc = function (imc) {
        return this.itemsCollection.doc(imc.key).update(imc);
    };
    ImcService.prototype.removeImc = function (imc) {
        return this.itemsCollection.doc(imc.key).delete();
    };
    ImcService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["AngularFirestore"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["AngularFirestore"]) === "function" && _a || Object])
    ], ImcService);
    return ImcService;
    var _a;
}());

//# sourceMappingURL=imc.service.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditarImcPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_imc__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_imc_service__ = __webpack_require__(128);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the EditarImcPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditarImcPage = /** @class */ (function () {
    function EditarImcPage(navCtrl, navParams, imcService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.imcService = imcService;
        this.imc = new __WEBPACK_IMPORTED_MODULE_2__model_imc__["a" /* Imc */]();
        this.imc = this.navParams.get("imc");
    }
    EditarImcPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditarImcPage');
    };
    EditarImcPage.prototype.converterNumber = function (numero) {
        return parseFloat(numero);
    };
    EditarImcPage.prototype.alterarImc = function () {
        this.imcService.updateImc(this.imc);
        this.navCtrl.pop();
    };
    EditarImcPage.prototype.removerImc = function () {
        this.imcService.removeImc(this.imc);
        this.navCtrl.pop();
    };
    EditarImcPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-editar-imc',template:/*ion-inline-start:"/home/aluno/Imagens/desenmobile/aula-firebase/src/pages/editar-imc/editar-imc.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>editar-imc</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item>\n      <ion-label floating="">Nome</ion-label>\n      <ion-input type="text" [(ngModel)]="this.imc.nome"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating="">Altura</ion-label>\n      <ion-input type="number" (ngModelChange)="imc.altura = converterNumber($event)" [(ngModel)]="imc.altura"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating="">Peso</ion-label>\n      <ion-input type="number" (ngModelChange)="imc.peso = converterNumber($event)" [(ngModel)]="imc.peso"></ion-input>\n    </ion-item>\n\n  </ion-list>\n\n    <button ion-button full round (click)="alterarImc()">Alterar Imc</button>\n    <button ion-button full round (click)="removerImc()">Remover Imc</button>\n\n  </ion-content>\n'/*ion-inline-end:"/home/aluno/Imagens/desenmobile/aula-firebase/src/pages/editar-imc/editar-imc.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__service_imc_service__["a" /* ImcService */]])
    ], EditarImcPage);
    return EditarImcPage;
}());

//# sourceMappingURL=editar-imc.js.map

/***/ }),

/***/ 192:
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
webpackEmptyAsyncContext.id = 192;

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/editar-imc/editar-imc.module": [
		484,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 233;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Imc; });
var Imc = /** @class */ (function () {
    function Imc() {
        this.usuario = '32155123321';
    }
    return Imc;
}());

//# sourceMappingURL=imc.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_imc__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__editar_imc_editar_imc__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_imc_service__ = __webpack_require__(128);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, imcService) {
        this.navCtrl = navCtrl;
        this.imcService = imcService;
        this.imc = new __WEBPACK_IMPORTED_MODULE_2__model_imc__["a" /* Imc */]();
        this.items = this.imcService.getImcs().valueChanges();
    }
    HomePage.prototype.converterNumber = function (numero) {
        return parseFloat(numero);
    };
    HomePage.prototype.cadastrarImc = function () {
        this.imcService.addImc(this.imc);
    };
    HomePage.prototype.editarRemover = function (imcEditarRemover) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__editar_imc_editar_imc__["a" /* EditarImcPage */], { imc: imcEditarRemover });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/aluno/Imagens/desenmobile/aula-firebase/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Calculadora IMC\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item>\n      <ion-label floating="">Nome</ion-label>\n      <ion-input type="text" [(ngModel)]="this.imc.nome"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating="">Altura</ion-label>\n      <ion-input type="number" (ngModelChange)="imc.altura = converterNumber($event)" [(ngModel)]="imc.altura"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating="">Peso</ion-label>\n      <ion-input type="number" (ngModelChange)="imc.peso = converterNumber($event)" [(ngModel)]="imc.peso"></ion-input>\n    </ion-item>\n\n  </ion-list>\n  \n  <button ion-button full round (click)="cadastrarImc()">\n     Cadastrar Imc</button>\n\n  <ion-list>\n    <ion-item *ngFor="let im of items | async" (click)="editarRemover(im)">\n      <h3>{{im.nome}}</h3>\n      <h2>{{im.altura}}</h2>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/aluno/Imagens/desenmobile/aula-firebase/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__service_imc_service__["a" /* ImcService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(416);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_firestore__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__service_imc_service__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_editar_imc_editar_imc__ = __webpack_require__(154);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var config = {
    apiKey: "AIzaSyDtZOTHybFItn7uX-2JGPwIb74XNcGNCtE",
    authDomain: "aula-f8e18.firebaseapp.com",
    databaseURL: "https://aula-f8e18.firebaseio.com",
    projectId: "aula-f8e18",
    storageBucket: "aula-f8e18.appspot.com",
    messagingSenderId: "18690152435"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_editar_imc_editar_imc__["a" /* EditarImcPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5_angularfire2__["AngularFireModule"].initializeApp(config),
                __WEBPACK_IMPORTED_MODULE_6_angularfire2_firestore__["AngularFirestoreModule"].enablePersistence(),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/editar-imc/editar-imc.module#EditarImcPageModule', name: 'EditarImcPage', segment: 'editar-imc', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_editar_imc_editar_imc__["a" /* EditarImcPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_9__service_imc_service__["a" /* ImcService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(282);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/aluno/Imagens/desenmobile/aula-firebase/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/aluno/Imagens/desenmobile/aula-firebase/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[283]);
//# sourceMappingURL=main.js.map