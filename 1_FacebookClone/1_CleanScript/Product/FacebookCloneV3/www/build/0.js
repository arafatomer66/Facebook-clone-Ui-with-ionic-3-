webpackJsonp([0],{

/***/ 1159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepliesPageModule", function() { return RepliesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__replies__ = __webpack_require__(1166);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RepliesPageModule = /** @class */ (function () {
    function RepliesPageModule() {
    }
    RepliesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__replies__["a" /* RepliesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__replies__["a" /* RepliesPage */]),
            ],
        })
    ], RepliesPageModule);
    return RepliesPageModule;
}());

//# sourceMappingURL=replies.module.js.map

/***/ }),

/***/ 1166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RepliesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_Reply__ = __webpack_require__(1167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_Faker__ = __webpack_require__(1168);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RepliesPage = /** @class */ (function () {
    function RepliesPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.replies = [];
        for (var i = 0; i < 5; i++) {
            var reply = new __WEBPACK_IMPORTED_MODULE_2__data_Reply__["a" /* Reply */]();
            reply.name = __WEBPACK_IMPORTED_MODULE_3__data_Faker__["a" /* Faker */].names[i];
            reply.profilePicture = __WEBPACK_IMPORTED_MODULE_3__data_Faker__["a" /* Faker */].avatars[i];
            reply.content = "Minim proident et anderit fugiat nisi Lorem.";
            this.replies.push(reply);
        }
    }
    RepliesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RepliesPage');
    };
    RepliesPage.prototype.goBack = function () {
        this.viewCtrl.dismiss();
    };
    RepliesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-replies',template:/*ion-inline-start:"E:\1_FacebookClone\1_CleanScript\Product\FacebookCloneV3\src\pages\replies\replies.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-buttons left>\n      <ion-row>\n        <button ion-button icon-only clear (click)="goBack()">\n          <ion-icon name="ios-arrow-back"></ion-icon>\n        </button>\n      </ion-row>\n    </ion-buttons>\n\n    <ion-title>Replies</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list no-lines>\n    <ion-item *ngFor="let reply of replies">\n      <ion-row>\n        <ion-col col-2>\n          <ion-avatar>\n            <img src="{{reply.profilePicture}}">\n          </ion-avatar>\n        </ion-col>\n\n        <ion-col col-10>\n          <p></p>\n          <p class="comment-content line-break">\n            <strong>{{reply.name}}</strong>\n            <br> {{reply.content}}\n          </p>\n\n          <ion-row class="reply-row">\n            <ion-item>\n              <ion-row item-start>\n                <p>1h</p>\n                <p>\n                  <strong>Reply</strong>\n                </p>\n              </ion-row>\n            </ion-item>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n  </ion-list>\n</ion-content>\n\n<ion-footer>\n  <ion-item>\n    <button ion-button clear icon-only item-start>\n      <ion-icon name="md-camera"></ion-icon>\n    </button>\n\n    <ion-input placeholder="Write a reply..."></ion-input>\n\n    <div item-end>\n      <button ion-button clear>\n        <p>GIF</p>\n      </button>\n\n      <button ion-button clear icon-only>\n        <ion-icon name="md-happy"></ion-icon>\n      </button>\n    </div>\n  </ion-item>\n</ion-footer>'/*ion-inline-end:"E:\1_FacebookClone\1_CleanScript\Product\FacebookCloneV3\src\pages\replies\replies.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */]])
    ], RepliesPage);
    return RepliesPage;
}());

//# sourceMappingURL=replies.js.map

/***/ }),

/***/ 1167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Reply; });
var Reply = /** @class */ (function () {
    function Reply() {
    }
    return Reply;
}());

//# sourceMappingURL=Reply.js.map

/***/ }),

/***/ 1168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Faker; });
var Faker = /** @class */ (function () {
    function Faker() {
    }
    Faker.names = ["Adam Stevens", "Susie Doherty", "Katie Plum", "Ronald Jacks", "Jaimie Starling",
        "Kirk Bornetto", "Sammy Cronk", "Karl Smith", "Susan Kyler", "Jeremy Butler"];
    Faker.avatars = [
        "https://res.cloudinary.com/cediim8/image/upload/v1521091160/avatars/pexels-photo-375880-min.jpg",
        "https://res.cloudinary.com/cediim8/image/upload/v1521091160/avatars/pexels-photo-372042-min.jpg",
        "https://res.cloudinary.com/cediim8/image/upload/v1521091160/avatars/pexels-photo-428338-min.jpg",
        "https://res.cloudinary.com/cediim8/image/upload/v1521091162/avatars/pexels-photo-428339-min.jpg",
        "https://res.cloudinary.com/cediim8/image/upload/v1521091162/avatars/pexels-photo-733872-min.jpg",
        "https://res.cloudinary.com/cediim8/image/upload/v1521091161/avatars/pexels-photo-428341-min.jpg",
        "https://res.cloudinary.com/cediim8/image/upload/v1521091163/avatars/pexels-photo-573299-min.jpg",
        "https://res.cloudinary.com/cediim8/image/upload/v1521091163/avatars/pexels-photo-462680-min.jpg",
        "https://res.cloudinary.com/cediim8/image/upload/v1521091163/avatars/pexels-photo-601317-min.jpg",
        "https://res.cloudinary.com/cediim8/image/upload/v1521091162/avatars/pexels-photo-736716-min.jpg"
    ];
    Faker.pictures = [
        "https://res.cloudinary.com/cediim8/image/upload/v1521094006/newsfeed/pexels-photo-170894-min.jpg",
        "https://res.cloudinary.com/cediim8/image/upload/v1521094006/newsfeed/pexels-photo-414171-min.jpg",
        "https://res.cloudinary.com/cediim8/image/upload/v1521094006/newsfeed/pexels-photo-462867-min.jpg",
        "https://res.cloudinary.com/cediim8/image/upload/v1521094006/newsfeed/pexels-photo-704965-min.jpg",
        "https://res.cloudinary.com/cediim8/image/upload/v1521094006/newsfeed/pexels-photo-736414-min.jpg",
    ];
    Faker.marketPlacePictures = [
        "https://res.cloudinary.com/cediim8/image/upload/v1521094586/market%20place/pexels-photo-175690-min.jpg",
        "https://res.cloudinary.com/cediim8/image/upload/v1521094586/market%20place/pexels-photo-147641-min.jpg",
        "https://res.cloudinary.com/cediim8/image/upload/v1521094586/market%20place/pexels-photo-139167-min.jpg",
        "https://res.cloudinary.com/cediim8/image/upload/v1521094586/market%20place/pexels-photo-100582-min.jpg",
        "https://res.cloudinary.com/cediim8/image/upload/v1521094586/market%20place/pexels-photo-248528-min.jpg",
        "https://res.cloudinary.com/cediim8/image/upload/v1521094585/market%20place/pexels-photo-109371-min.jpg",
        "https://res.cloudinary.com/cediim8/image/upload/v1521094585/market%20place/pexels-photo-433636-min.jpg",
        "https://res.cloudinary.com/cediim8/image/upload/v1521094585/market%20place/pexels-photo-914940-min.jpg",
        "https://res.cloudinary.com/cediim8/image/upload/v1521094585/market%20place/pexels-photo-595808-min.jpg",
        "https://res.cloudinary.com/cediim8/image/upload/v1521094585/market%20place/pexels-photo-724643-min.jpg",
        "https://res.cloudinary.com/cediim8/image/upload/v1521094585/market%20place/pexels-photo-276534-min.jpg",
        "https://res.cloudinary.com/cediim8/image/upload/v1521094585/market%20place/pexels-photo-775219-min.jpg"
    ];
    return Faker;
}());

//# sourceMappingURL=Faker.js.map

/***/ })

});
//# sourceMappingURL=0.js.map