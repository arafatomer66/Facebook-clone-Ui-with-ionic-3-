webpackJsonp([5],{

/***/ 1145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPageDetailsPageModule", function() { return AddPageDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_page_details__ = __webpack_require__(1160);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddPageDetailsPageModule = /** @class */ (function () {
    function AddPageDetailsPageModule() {
    }
    AddPageDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_page_details__["a" /* AddPageDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_page_details__["a" /* AddPageDetailsPage */]),
            ],
        })
    ], AddPageDetailsPageModule);
    return AddPageDetailsPageModule;
}());

//# sourceMappingURL=add-page-details.module.js.map

/***/ }),

/***/ 1160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPageDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_loading_loading__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_page_page__ = __webpack_require__(71);
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
 * Generated class for the AddPageDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddPageDetailsPage = /** @class */ (function () {
    function AddPageDetailsPage(navCtrl, navParams, alertCtrl, loading, camera, platform, pageProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loading = loading;
        this.camera = camera;
        this.platform = platform;
        this.pageProvider = pageProvider;
        this.pageDetails = {
            photoURL: '',
            coverPhotoURL: '',
            currentCity: '',
            workPlace: '',
            education: '',
            hometown: '',
            website: ''
        };
        this.pageDetails = this.navParams.get('page');
    }
    // Update Profile Photo
    AddPageDetailsPage.prototype.changeProfilePhoto = function () {
    };
    // Update Cover Photo
    AddPageDetailsPage.prototype.changeCoverPhoto = function () {
    };
    AddPageDetailsPage.prototype.updatePage = function () {
        var _this = this;
        console.log('Updated Profile', this.pageDetails);
        this.loading.show();
        this.pageProvider.updatePage(this.pageDetails, this.pageDetails.uid).then(function (data) {
            console.log('Updated data', data);
            _this.loading.hide();
        });
    };
    AddPageDetailsPage.prototype.changeCity = function () {
    };
    AddPageDetailsPage.prototype.changeWorkPlace = function () {
    };
    AddPageDetailsPage.prototype.changeEducation = function () {
    };
    AddPageDetailsPage.prototype.changeHometown = function () {
    };
    AddPageDetailsPage.prototype.changeWebsite = function () {
    };
    AddPageDetailsPage.prototype.customize = function () {
    };
    AddPageDetailsPage.prototype.deletePage = function () {
        var _this = this;
        //Delete Page
        this.alertCtrl.create({
            title: "Delete Page",
            subTitle: "Are you sure you want to delete this Page?",
            buttons: [
                {
                    text: "No",
                    handler: function () { return console.log('cancel'); }
                },
                {
                    text: "Yes",
                    handler: function () {
                        _this.loading.show();
                        _this.pageProvider.deletePage(_this.pageDetails.uid).then(function () {
                            _this.loading.hide();
                            _this.navCtrl.popTo(_this.navCtrl.getByIndex(_this.navCtrl.length() - 3));
                        });
                    }
                }
            ]
        }).present();
    };
    AddPageDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddPageDetailsPage');
    };
    AddPageDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-page-details',template:/*ion-inline-start:"E:\1_FacebookClone\1_CleanScript\Product\FacebookCloneV3\src\pages\add-page-details\add-page-details.html"*/'<!--\n  Generated template for the ProfileAddDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Edit Page</ion-title>\n    <ion-buttons right>\n      <button ion-button (click)="updatePage()">\n        Update\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="content">\n  <div class="profilePic-div">\n    <h3>Profile Picture</h3>\n    <p>Choose a recent photo of yourself. This helps people see that they\'re getting in touch with the rigth person</p>\n    <div class="img-div" (click)="changeProfilePhoto()">\n      <img *ngIf="!pageDetails.photoURL" src="assets/imgs/profile/profile-placeholder.jpg" />\n      <img *ngIf="pageDetails.photoURL" src="{{ pageDetails.photoURL }}" />\n      <p>\n        <ion-icon name="md-camera"></ion-icon> ADD</p>\n    </div>\n  </div>\n  <div class="coverPic-div">\n    <h3>Cover Picture</h3>\n    <p>Choose a photo to appear at the top of your profile. It could be from a recent trip or something you\'re proud of.</p>\n    <div class="img-div" (click)="changeCoverPhoto()">\n      <img *ngIf="!pageDetails.coverPhotoURL" src="assets/imgs/Blue-BG.png" />\n      <img *ngIf="pageDetails.coverPhotoURL" src="{{ pageDetails.coverPhotoURL }}" />\n      <p>\n        <ion-icon name="md-camera"></ion-icon> ADD</p>\n    </div>\n  </div>\n\n  <div class="details-div">\n    <h3>Details</h3>\n    <p>Add your details to let people know more about who you are</p>\n    <div>\n      <ion-list>\n        <ion-item (click)="changeCity()">\n          <ion-icon name="ios-home-outline"></ion-icon>\n          <span class="details-text">{{ this.pageDetails.currentCity ? this.pageDetails.currentCity : \'Cuurent City\' }}</span>\n        </ion-item>\n        <ion-item (click)="changeWorkPlace()">\n          <ion-icon name="ios-briefcase-outline"></ion-icon>\n          <span class="details-text"> {{ this.pageDetails.workPlace ? this.pageDetails.workPlace : \'Work Place\' }}</span>\n        </ion-item>\n        <ion-item (click)="changeEducation()">\n          <ion-icon name="ios-school-outline"></ion-icon>\n          <span class="details-text">{{ this.pageDetails.education ? this.pageDetails.education : \'Education\' }} </span>\n        </ion-item>\n        <ion-item (click)="changeHometown()">\n          <ion-icon name="ios-pin-outline"></ion-icon>\n          <span class="details-text">{{ this.pageDetails.hometown ? this.pageDetails.hometown : \'Hometown\' }}</span>\n        </ion-item>\n        <ion-item (click)="changeWebsite()">\n          <ion-icon name="logo-chrome"></ion-icon>\n          <span class="details-text"> {{ this.pageDetails.website ? this.pageDetails.website : \'Website\' }}</span>\n        </ion-item>\n        <ion-item (click)="customize()">\n          <ion-icon name="ios-home-outline"></ion-icon>\n          <span class="details-text">{{ this.pageDetails.customiseField ? this.pageDetails.customiseField : \'Customise It\' }}</span>\n        </ion-item>\n      </ion-list>\n      <div style="margin: 15px">\n        <button ion-button block color="danger" class="add-buttons" (click)="deletePage()">\n          DELETE PAGE</button>\n      </div>\n\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"E:\1_FacebookClone\1_CleanScript\Product\FacebookCloneV3\src\pages\add-page-details\add-page-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__providers_page_page__["a" /* PageProvider */]])
    ], AddPageDetailsPage);
    return AddPageDetailsPage;
}());

//# sourceMappingURL=add-page-details.js.map

/***/ })

});
//# sourceMappingURL=5.js.map