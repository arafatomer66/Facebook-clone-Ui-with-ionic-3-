webpackJsonp([4],{

/***/ 1146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPostPageModule", function() { return AddPostPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_post__ = __webpack_require__(1161);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// import { Geolocation } from '@ionic-native/geolocation/ngx';
// import { Geolocation } from '@ionic-native/geolocation';
// import { LocationProvider } from '../../providers/location/location';
// import { NativeGeocoder } from '@ionic-native/native-geocoder';
var AddPostPageModule = /** @class */ (function () {
    function AddPostPageModule() {
    }
    AddPostPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_post__["a" /* AddPostPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_post__["a" /* AddPostPage */])
            ],
            providers: []
        })
    ], AddPostPageModule);
    return AddPostPageModule;
}());

//# sourceMappingURL=add-post.module.js.map

/***/ }),

/***/ 1161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPostPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_location_location__ = __webpack_require__(605);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_timeline_timeline__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_account_account__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_loading_loading__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_media_capture__ = __webpack_require__(606);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var AddPostPage = /** @class */ (function () {
    function AddPostPage(navCtrl, navParams, camera, alertCtrl, viewCtrl, locationProvider, timelineProvider, platform, loadingProvider, accountProvider, mediaCapture) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.alertCtrl = alertCtrl;
        this.viewCtrl = viewCtrl;
        this.locationProvider = locationProvider;
        this.timelineProvider = timelineProvider;
        this.platform = platform;
        this.loadingProvider = loadingProvider;
        this.accountProvider = accountProvider;
        this.mediaCapture = mediaCapture;
        this.image = null;
        this.video = null;
        this.location = false;
        this.text = '';
        this.selectingUser = false;
        this.is_edit = false;
        debugger;
    }
    AddPostPage.prototype.ionViewWillEnter = function () {
        debugger;
        this.text = this.navParams.get('text');
        if (this.text) {
            this.text = this.text.replace(new RegExp(' VK_RETURN ', 'g'), "\n");
        }
        this.postOwner = this.navParams.get('postOwner');
        this.postOwnerId = this.navParams.get('postOwnerId');
        this.uid = this.navParams.get('postId');
        this.image = this.navParams.get('photoURL');
        this.video = this.navParams.get('videoURL');
        console.log('videoUrl', this.video);
        this.is_edit = this.navParams.get('is_edit');
        this.postDetails = this.navParams.get('post');
        this.pageId = this.navParams.get('pageId');
        this.pageName = this.navParams.get('pageName');
    };
    AddPostPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        debugger;
        this.accountProvider.getUsers().subscribe(function (data) {
            _this.users = data;
            _this.userList = data;
        });
    };
    AddPostPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    AddPostPage.prototype.resize = function () {
        console.log(this.postText);
        var element = this.postText['_elementRef'].nativeElement.getElementsByClassName("text-input")[0];
        var scrollHeight = element.scrollHeight;
        element.style.height = scrollHeight + 'px';
        this.postText['_elementRef'].nativeElement.style.height = (scrollHeight + 16) + 'px';
    };
    AddPostPage.prototype.chooseImage = function () {
        var _this = this;
        // Ask if the user wants to take a photo or choose from photo gallery.
        var alert = this.alertCtrl.create({
            title: 'Select Image',
            message: 'Do you want to take a photo or choose from your photo gallery?',
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) { }
                },
                {
                    text: 'Choose from Gallery',
                    handler: function () {
                        _this.camera.getPicture({
                            quality: 100,
                            targetWidth: _this.platform.width(),
                            targetHeight: _this.platform.height(),
                            destinationType: _this.camera.DestinationType.DATA_URL,
                            encodingType: _this.camera.EncodingType.JPEG,
                            // mediaType: this.camera.MediaType.ALLMEDIA,
                            correctOrientation: true,
                            sourceType: _this.camera.PictureSourceType.PHOTOLIBRARY
                        }).then(function (imageData) {
                            console.log(imageData);
                            _this.image = 'data:image/jpeg;base64,' + imageData;
                        });
                    }
                },
                {
                    text: 'Take Photo',
                    handler: function () {
                        _this.camera.getPicture({
                            quality: 100,
                            // targetWidth: this.platform.width(),
                            // targetHeight: this.platform.height(),
                            destinationType: _this.camera.DestinationType.DATA_URL,
                            encodingType: _this.camera.EncodingType.JPEG,
                            correctOrientation: true,
                            sourceType: _this.camera.PictureSourceType.CAMERA
                        }).then(function (imageData) {
                            console.log(imageData);
                            _this.image = 'data:image/jpeg;base64,' + imageData;
                        });
                    }
                }
            ]
        }).present();
    };
    AddPostPage.prototype.chooseVideo = function () {
        var _this = this;
        // Ask if the user wants to take a photo or choose from photo gallery.
        var alert = this.alertCtrl.create({
            title: 'Select Video',
            message: 'Do you want to record a video or choose from your gallery?',
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) { }
                },
                {
                    text: 'Choose from Gallery',
                    handler: function () {
                        _this.camera.getPicture({
                            quality: 100,
                            targetHeight: 500,
                            targetWidth: 500,
                            destinationType: _this.camera.DestinationType.FILE_URI,
                            mediaType: _this.camera.MediaType.VIDEO,
                            correctOrientation: true,
                            sourceType: _this.camera.PictureSourceType.PHOTOLIBRARY
                        }).then(function (videoData) {
                            console.log(videoData);
                            _this.video = videoData;
                        });
                    }
                },
                {
                    text: 'Record Video',
                    handler: function () {
                        var options = { duration: 60, limit: 1 };
                        _this.mediaCapture.captureVideo(options)
                            .then(function (videoData) {
                            console.log(videoData);
                            _this.video = videoData[0].fullPath.replace('file://', '');
                            console.log(_this.video);
                        }, function (err) { return console.error(err); });
                    }
                }
            ]
        }).present();
    };
    AddPostPage.prototype.post = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var post, location_1, address;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        debugger;
                        if (!(this.text || this.image || this.video)) return [3 /*break*/, 4];
                        this.loadingProvider.show();
                        post = {
                            user: '',
                            userPhoto: '',
                            postBy: '',
                            createdAt: new Date(),
                            postOwner: this.postOwner ? this.postOwner : null,
                            postOwnerId: this.postOwnerId ? this.postOwnerId : null,
                            postId: this.uid ? this.uid : null,
                            pageId: this.pageId ? this.pageId : null,
                            pageName: this.pageName ? this.pageName : null
                        };
                        console.log('post::', post);
                        debugger;
                        if (!(this.platform.is('cordova') && this.location)) return [3 /*break*/, 3];
                        debugger;
                        return [4 /*yield*/, this.locationProvider.getLocation()];
                    case 1:
                        location_1 = _a.sent();
                        console.log('location::', location_1);
                        return [4 /*yield*/, this.locationProvider.getAddress(location_1)];
                    case 2:
                        address = _a.sent();
                        if (this.location && address) {
                            post.location = location_1;
                            post.address = address.locality + ", " + address.countryCode;
                        }
                        _a.label = 3;
                    case 3:
                        if (this.text) {
                            post.text = this.text;
                            post.text = post.text.replace(new RegExp('\n', 'g'), " VK_RETURN ");
                        }
                        if (this.image) {
                            post.photoURL = this.image;
                        }
                        if (this.video) {
                            post.videoURL = this.video;
                        }
                        console.log(post);
                        this.timelineProvider.addPost(post).then(function () {
                            debugger;
                            _this.loadingProvider.hide();
                            _this.viewCtrl.dismiss();
                        }, function (err) {
                            debugger;
                            console.log('Error in posting', err);
                            _this.loadingProvider.hide();
                            _this.viewCtrl.dismiss();
                        });
                        return [3 /*break*/, 5];
                    case 4:
                        console.log('no post');
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    AddPostPage.prototype.updatePost = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var post, location_2, address;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        debugger;
                        this.loadingProvider.show();
                        post = {
                            user: '',
                            userPhoto: '',
                            postBy: '',
                            createdAt: this.postDetails.createdAt,
                            postOwner: this.postOwner ? this.postOwner : null,
                            postOwnerId: this.postOwnerId ? this.postOwnerId : null,
                            postId: this.uid ? this.uid : null,
                            pageId: this.pageId ? this.pageId : null,
                            pageName: this.pageName ? this.pageName : null
                        };
                        if (!(this.platform.is('cordova') && this.location)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.locationProvider.getLocation()];
                    case 1:
                        location_2 = _a.sent();
                        return [4 /*yield*/, this.locationProvider.getAddress(location_2)];
                    case 2:
                        address = _a.sent();
                        if (this.location) {
                            post.location = location_2;
                            post.address = address.locality + ", " + address.countryCode;
                        }
                        _a.label = 3;
                    case 3:
                        if (this.text)
                            post.text = this.text;
                        if (this.image)
                            post.photoURL = this.image;
                        if (this.video)
                            post.videoURL = this.video;
                        console.log(post);
                        post.text = post.text.replace(new RegExp('\n', 'g'), " VK_RETURN ");
                        this.timelineProvider.updatePOst(post).then(function () {
                            _this.loadingProvider.hide();
                            _this.viewCtrl.dismiss();
                        })
                            .catch(function () {
                            _this.loadingProvider.hide();
                            _this.viewCtrl.dismiss();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    AddPostPage.prototype.quote = function (ev) {
        var _this = this;
        console.log(ev);
        if (ev === 64 && !this.selectingUser) {
            this.selectingUser = true;
            this.search = String.fromCharCode(ev);
        }
        if (this.text.length === 0 || this.search === '') {
            this.search = '';
            this.selectingUser = false;
            this.users = this.userList;
        }
        if (ev === 0) {
            this.search = this.search.slice(0, -1);
        }
        if (this.selectingUser) {
            console.log(this.search);
            if (ev !== 0)
                this.search += String.fromCharCode(ev);
            this.users = this.userList;
            this.users = this.users.filter(function (user) { return user.username.includes(_this.search); });
        }
    };
    AddPostPage.prototype.quoteUser = function (username) {
        this.selectingUser = false;
        this.text += username.replace(this.search, '');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('postText'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], AddPostPage.prototype, "postText", void 0);
    AddPostPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-post',template:/*ion-inline-start:"E:\1_FacebookClone\1_CleanScript\Product\FacebookCloneV3\src\pages\add-post\add-post.html"*/'<ion-header>\n\n\n\n  <ion-toolbar>\n\n    <button (click)="close()" ion-button icon-only menuToggle>\n\n      <ion-icon name="close"></ion-icon>\n\n    </button>\n\n\n\n    <ion-title *ngIf="is_edit" text-center>\n\n      Edit Post\n\n    </ion-title>\n\n    <ion-title *ngIf="!is_edit" text-center>\n\n      New Post\n\n    </ion-title>\n\n\n\n    <ion-buttons end>\n\n      <button *ngIf="is_edit" (click)="updatePost()" ion-button icon-right>\n\n        Edit\n\n        <ion-icon name="send"></ion-icon>\n\n      </button>\n\n      <button *ngIf="!is_edit" (click)="post()" ion-button icon-right>\n\n        Post\n\n        <ion-icon name="send"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-textarea #postText (keyup)="resize()" (keydown.backspace)="quote(0)" (keypress)="quote($event.keyCode)" [disabled]="postOwner && !is_edit" [(ngModel)]="text" placeholder="What\'s happening?"></ion-textarea>\n\n    </ion-item>\n\n    \n\n  </ion-list>\n\n  <div *ngIf="users && selectingUser">\n\n    <ion-card *ngFor="let user of users">\n\n      <ion-item (click)="quoteUser(user.username)">\n\n        <ion-avatar item-start>\n\n          <img [src]="user.photoURL">\n\n        </ion-avatar>\n\n        <h2>{{user.name}}</h2>\n\n        <p>{{user.username}}</p>\n\n      </ion-item>\n\n    </ion-card>\n\n  </div>\n\n\n\n  <div *ngIf="image" class="media">\n\n    <img [src]="image" alt="img" />\n\n  </div>\n\n\n\n  <div *ngIf="video" class="media">\n\n    <video [src]="video" alt="video" width="180" height="180" autoplay="false"></video>\n\n  </div>\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-item class="addons">\n\n    <button *ngIf="!postOwner || is_edit" (click)="chooseImage()" ion-button icon-only clear color="dark">\n\n      <ion-icon name="camera"></ion-icon>\n\n    </button>\n\n\n\n    <button *ngIf="!postOwner || is_edit" (click)="chooseVideo()" ion-button icon-only clear color="dark">\n\n      <ion-icon name="videocam"></ion-icon>\n\n    </button>\n\n\n\n    <button [ngClass]="{\'active\': location}" ion-button icon-only clear color="dark" (click)="location = !location">\n\n      <ion-icon name="pin"></ion-icon>\n\n    </button>\n\n  </ion-item>\n\n</ion-footer>'/*ion-inline-end:"E:\1_FacebookClone\1_CleanScript\Product\FacebookCloneV3\src\pages\add-post\add-post.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_location_location__["a" /* LocationProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_timeline_timeline__["a" /* TimelineProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_6__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_account_account__["a" /* AccountProvider */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_media_capture__["a" /* MediaCapture */]])
    ], AddPostPage);
    return AddPostPage;
}());

//# sourceMappingURL=add-post.js.map

/***/ })

});
//# sourceMappingURL=4.js.map