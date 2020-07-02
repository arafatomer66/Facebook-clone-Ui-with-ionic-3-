webpackJsonp([1],{

/***/ 1154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostReactionsPageModule", function() { return PostReactionsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__post_reactions__ = __webpack_require__(1163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PostReactionsPageModule = /** @class */ (function () {
    function PostReactionsPageModule() {
    }
    PostReactionsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__post_reactions__["a" /* PostReactionsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__post_reactions__["a" /* PostReactionsPage */]),
            ],
        })
    ], PostReactionsPageModule);
    return PostReactionsPageModule;
}());

//# sourceMappingURL=post-reactions.module.js.map

/***/ }),

/***/ 1163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostReactionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_timeline_timeline__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_account_account__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_loading_loading__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__data_Reaction__ = __webpack_require__(1164);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PostReactionsPage = /** @class */ (function () {
    function PostReactionsPage(navCtrl, actionSheetCtrl, popoverCtrl, timelineProvider, accountProvider, modalCtrl, events, platform, loadingProvider, camera, app, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.popoverCtrl = popoverCtrl;
        this.timelineProvider = timelineProvider;
        this.accountProvider = accountProvider;
        this.modalCtrl = modalCtrl;
        this.events = events;
        this.platform = platform;
        this.loadingProvider = loadingProvider;
        this.camera = camera;
        this.app = app;
        this.navParams = navParams;
        this.totalReactions = [];
        this.reactionsSegment = "like";
        this.likeReactions = [];
        this.loveReactions = [];
        this.laughReactions = [];
        this.sadReactions = [];
        this.shockReactions = [];
        this.angryReactions = [];
        this.post = this.navParams.get('post');
        this.accountProvider.getAccount(null).subscribe(function (data) {
            _this.account = data;
            console.log(_this.account);
        });
        if (this.post.likes && this.post.likes.length > 0) {
            console.log('Total Reactions', this.post.likes);
            for (var i = 0; i < this.post.likes.length; i++) {
                var likeReaction = new __WEBPACK_IMPORTED_MODULE_6__data_Reaction__["a" /* Reaction */]();
                if (this.post.likes[i].type === 'like') {
                    likeReaction = this.post.likes[i];
                    this.likeReactions.push(likeReaction);
                }
            }
            for (var i = 0; i < this.post.likes.length; i++) {
                var loveReaction = new __WEBPACK_IMPORTED_MODULE_6__data_Reaction__["a" /* Reaction */]();
                if (this.post.likes[i].type === 'love') {
                    loveReaction = this.post.likes[i];
                    this.loveReactions.push(loveReaction);
                }
            }
            for (var i = 0; i < this.post.likes.length; i++) {
                var laughReaction = new __WEBPACK_IMPORTED_MODULE_6__data_Reaction__["a" /* Reaction */]();
                if (this.post.likes[i].type === 'laugh') {
                    laughReaction = this.post.likes[i];
                    this.laughReactions.push(laughReaction);
                }
            }
            for (var i = 0; i < this.post.likes.length; i++) {
                var sadReaction = new __WEBPACK_IMPORTED_MODULE_6__data_Reaction__["a" /* Reaction */]();
                if (this.post.likes[i].type === 'sad') {
                    sadReaction = this.post.likes[i];
                    this.sadReactions.push(sadReaction);
                }
            }
            for (var i = 0; i < this.post.likes.length; i++) {
                var shockReaction = new __WEBPACK_IMPORTED_MODULE_6__data_Reaction__["a" /* Reaction */]();
                if (this.post.likes[i].type === 'shock') {
                    shockReaction = this.post.likes[i];
                    this.shockReactions.push(shockReaction);
                }
            }
            for (var i = 0; i < this.post.likes.length; i++) {
                var angryReaction = new __WEBPACK_IMPORTED_MODULE_6__data_Reaction__["a" /* Reaction */]();
                if (this.post.likes[i].type === 'angry') {
                    angryReaction = this.post.likes[i];
                    this.angryReactions.push(angryReaction);
                }
            }
        }
    }
    PostReactionsPage.prototype.isFriend = function (likedUser) {
        if (likedUser.user === this.account.uid) {
            return false;
        }
        else if (this.account.friends[likedUser.user]) {
            return false;
        }
        else {
            return true;
        }
    };
    PostReactionsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PostReactionsPage');
    };
    PostReactionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-post-reactions',template:/*ion-inline-start:"E:\1_FacebookClone\1_CleanScript\Product\FacebookCloneV3\src\pages\post-reactions\post-reactions.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>People who reacted</ion-title>\n\n    <ion-buttons right>\n      <button ion-button icon-only clear>\n        <ion-icon name="md-search"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content text-center padding>\n  <div padding>\n    <ion-segment [(ngModel)]="reactionsSegment">\n      <ion-segment-button value="like">\n        <ion-avatar class="facebook-reaction-icon">\n          <img src="assets/imgs/newsfeed/facebook-like.png">\n        </ion-avatar>\n        <span *ngIf="likeReactions.length > 0"> {{ likeReactions.length }} </span>\n      </ion-segment-button>\n\n      <ion-segment-button value="love">\n        <ion-avatar class="facebook-reaction-icon">\n          <img src="assets/imgs/newsfeed/facebook-love.png">\n        </ion-avatar>\n        <span *ngIf="loveReactions.length > 0"> {{ loveReactions.length }} </span>\n      </ion-segment-button>\n\n      <ion-segment-button value="laugh">\n        <ion-avatar class="facebook-reaction-icon">\n          <img src="assets/imgs/newsfeed/facebook-laugh.png">\n        </ion-avatar>\n        <span *ngIf="laughReactions.length > 0"> {{ laughReactions.length }} </span>\n      </ion-segment-button>\n\n      <ion-segment-button value="sad">\n        <ion-avatar class="facebook-reaction-icon">\n          <img src="assets/imgs/newsfeed/facebook-sad.png">\n        </ion-avatar>\n        <span *ngIf="sadReactions.length > 0"> {{ sadReactions.length }} </span>\n      </ion-segment-button>\n\n      <ion-segment-button value="shock">\n        <ion-avatar class="facebook-reaction-icon">\n          <img src="assets/imgs/newsfeed/facebook-shock.png">\n        </ion-avatar>\n        <span *ngIf="shockReactions.length > 0"> {{ shockReactions.length }} </span>\n      </ion-segment-button>\n\n      <ion-segment-button value="angry">\n        <ion-avatar class="facebook-reaction-icon">\n          <img src="assets/imgs/newsfeed/facebook-angry.png">\n        </ion-avatar>\n        <span *ngIf="angryReactions.length > 0"> {{ angryReactions.length }} </span>\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n\n  <div [ngSwitch]="reactionsSegment" *ngIf="account">\n    <div *ngSwitchCase="\'like\'">\n      <ion-list>\n        <ion-item *ngFor="let reaction of likeReactions">\n          <ion-avatar item-start>\n            <img *ngIf="reaction.photoURL" src="{{reaction.photoURL}}">\n            <img *ngIf="!reaction.photoURL" src="assets/imgs/buddy.png">\n            <img class="reaction" src="assets/imgs/newsfeed/facebook-like.png">\n          </ion-avatar>\n\n          <p>{{reaction.name}}</p>\n\n          <!-- <button ion-button item-end *ngIf="isFriend(reaction)">Add Friend</button> -->\n        </ion-item>\n      </ion-list>\n    </div>\n\n    <div *ngSwitchCase="\'love\'">\n      <ion-list>\n        <ion-item *ngFor="let reaction of loveReactions">\n          <ion-avatar item-start>\n            <img *ngIf="reaction.photoURL" src="{{reaction.photoURL}}">\n            <img *ngIf="!reaction.photoURL" src="assets/imgs/buddy.png">\n            <img class="reaction" src="assets/imgs/newsfeed/facebook-love.png">\n          </ion-avatar>\n\n          <p>{{reaction.name}}</p>\n\n          <!-- <button ion-button item-end *ngIf="isFriend(reaction)">Add Friend</button> -->\n        </ion-item>\n      </ion-list>\n    </div>\n\n    <div *ngSwitchCase="\'laugh\'">\n      <ion-list>\n        <ion-item *ngFor="let reaction of laughReactions">\n          <ion-avatar item-start>\n            <img *ngIf="reaction.photoURL" src="{{reaction.photoURL}}">\n            <img *ngIf="!reaction.photoURL" src="assets/imgs/buddy.png">\n            <img class="reaction" src="assets/imgs/newsfeed/facebook-laugh.png">\n          </ion-avatar>\n\n          <p>{{reaction.name}}</p>\n\n          <!-- <button ion-button item-end *ngIf="isFriend(reaction)">Add Friend</button> -->\n        </ion-item>\n      </ion-list>\n    </div>\n\n    <div *ngSwitchCase="\'sad\'">\n      <ion-list>\n        <ion-item *ngFor="let reaction of sadReactions">\n          <ion-avatar item-start>\n            <img *ngIf="reaction.photoURL" src="{{reaction.photoURL}}">\n            <img *ngIf="!reaction.photoURL" src="assets/imgs/buddy.png">\n            <img class="reaction" src="assets/imgs/newsfeed/facebook-sad.png">\n          </ion-avatar>\n\n          <p>{{reaction.name}}</p>\n\n          <!-- <button ion-button item-end *ngIf="isFriend(reaction)">Add Friend</button> -->\n        </ion-item>\n      </ion-list>\n    </div>\n\n    <div *ngSwitchCase="\'shock\'">\n      <ion-list>\n        <ion-item *ngFor="let reaction of shockReactions">\n          <ion-avatar item-start>\n            <img *ngIf="reaction.photoURL" src="{{reaction.photoURL}}">\n            <img *ngIf="!reaction.photoURL" src="assets/imgs/buddy.png">\n            <img class="reaction" src="assets/imgs/newsfeed/facebook-shock.png">\n          </ion-avatar>\n\n          <p>{{reaction.name}}</p>\n\n          <!-- <button ion-button item-end *ngIf="isFriend(reaction)">Add Friend</button> -->\n        </ion-item>\n      </ion-list>\n    </div>\n\n    <div *ngSwitchCase="\'angry\'">\n      <ion-list>\n        <ion-item *ngFor="let reaction of angryReactions">\n          <ion-avatar item-start>\n            <img *ngIf="reaction.photoURL" src="{{reaction.photoURL}}">\n            <img *ngIf="!reaction.photoURL" src="assets/imgs/buddy.png">\n            <img class="reaction" src="assets/imgs/newsfeed/facebook-angry.png">\n          </ion-avatar>\n\n          <p>{{reaction.name}}</p>\n\n          <!-- <button ion-button item-end *ngIf="isFriend(reaction)">Add Friend</button> -->\n        </ion-item>\n      </ion-list>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"E:\1_FacebookClone\1_CleanScript\Product\FacebookCloneV3\src\pages\post-reactions\post-reactions.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_timeline_timeline__["a" /* TimelineProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_account_account__["a" /* AccountProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], PostReactionsPage);
    return PostReactionsPage;
}());

//# sourceMappingURL=post-reactions.js.map

/***/ }),

/***/ 1164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Reaction; });
var Reaction = /** @class */ (function () {
    function Reaction() {
    }
    return Reaction;
}());

//# sourceMappingURL=Reaction.js.map

/***/ })

});
//# sourceMappingURL=1.js.map