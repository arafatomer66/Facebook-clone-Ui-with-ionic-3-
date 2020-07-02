webpackJsonp([2],{

/***/ 1156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(1165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 1165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_account_account__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_timeline_timeline__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_loading_loading__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_chat_chat__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__comments_comments__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__reactions_popover_reactions_popover__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__profile_add_details_profile_add_details__ = __webpack_require__(607);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, actionSheetCtrl, popoverCtrl, timelineProvider, accountProvider, modalCtrl, platform, loadingProvider, camera, navParams, loadingController, alertCtrl, chatProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.popoverCtrl = popoverCtrl;
        this.timelineProvider = timelineProvider;
        this.accountProvider = accountProvider;
        this.modalCtrl = modalCtrl;
        this.platform = platform;
        this.loadingProvider = loadingProvider;
        this.camera = camera;
        this.navParams = navParams;
        this.loadingController = loadingController;
        this.alertCtrl = alertCtrl;
        this.chatProvider = chatProvider;
        this.userId = null;
        this.posts = [];
        this.pictureCount = 0;
        this.view = "posts";
        this.timeline = [];
        this.photos = [];
        this.friends = [];
        debugger;
        this.userId = this.navParams.get('userId');
        if (!this.userId)
            this.userId = null;
        this.loadingController.show();
        this.accountProvider.getAccount(this.userId).subscribe(function (data) {
            _this.account = data;
            _this.placeholder = "Write something to " + _this.account.name;
            console.log('Account', _this.account);
            _this.accountProvider.getAccount(null).subscribe(function (user) {
                _this.currentUser = user;
                console.log('Cuurent User', _this.currentUser);
                _this.loadingController.hide();
                _this.getFirends(_this.account.friends);
            });
        });
    }
    ProfilePage.prototype.getFirends = function (friends) {
        var _this = this;
        this.friends = [];
        if (friends && Object.keys(friends).length > 0) {
            var index_1 = 0;
            for (var key in friends) {
                if (index_1 < 3) {
                    this.accountProvider.getAccount(key).subscribe(function (data) {
                        console.log('firends Account', data);
                        _this.friends.push(data);
                        console.log('firends Account in varaible', _this.friends);
                        index_1++;
                    });
                }
            }
        }
    };
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
        this.getPosts();
    };
    ProfilePage.prototype.showPostComments = function (post) {
        var commentsModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__comments_comments__["a" /* CommentsPage */]);
        commentsModal.present();
    };
    ProfilePage.prototype.addPost = function () {
        this.modalCtrl.create('AddPostPage', { is_edit: false }).present();
    };
    //Other User Profile
    ProfilePage.prototype.goToProfile = function (userId) {
        if (userId) {
            this.navCtrl.push('ProfilePage', { userId: userId });
        }
        else {
            this.navCtrl.push('ProfilePage', { userId: this.account.uid });
        }
    };
    ProfilePage.prototype.gotoSearch = function () {
        this.modalCtrl.create('SearchPage').present();
    };
    ProfilePage.prototype.getPosts = function () {
        var _this = this;
        debugger;
        this.timelineProvider.getUserPosts(this.userId).subscribe(function (data) {
            console.log(data);
            _this.timeline = [];
            _this.photos = [];
            data.map(function (a) {
                var data = a.payload.doc.data();
                var uid = a.payload.doc.id;
                _this.timeline.push(Object.assign({}, __assign({ uid: uid }, data)));
            });
            console.log('All Posts', _this.timeline);
            for (var i = 0; i < _this.timeline.length; i++) {
                if (_this.timeline[i].photoURL) {
                    if (_this.photos.length < 3) {
                        _this.photos.push(_this.timeline[i].photoURL);
                    }
                }
            }
            console.log('All Photos', _this.photos);
            _this.loadingController.hide();
        });
    };
    ProfilePage.prototype.messageUser = function () {
        var _this = this;
        var _a = this.account, uid = _a.uid, name = _a.name, photoURL = _a.photoURL;
        console.log('Add.Chat', { uid: uid, name: name, photoURL: photoURL });
        this.chatProvider.startChat({ uid: uid, name: name, photoURL: photoURL }, this.currentUser).then(function (chat) {
            console.log('Chat', chat);
            _this.modalCtrl.create('MessagesDetailPage', { chatId: chat.uid }).present();
        });
    };
    ProfilePage.prototype.isFriend = function () {
        if (this.currentUser.friends[this.account.uid]) {
            return true;
        }
        else {
            return false;
        }
    };
    ProfilePage.prototype.isReqSend = function () {
        if (this.currentUser.friendRequests[this.account.uid]) {
            return true;
        }
        else {
            return false;
        }
    };
    ProfilePage.prototype.sendReq = function () {
        var _this = this;
        this.loadingController.show();
        if (Object.keys(this.currentUser.friendRequests).length > 0) {
            this.currentUser.friendRequests = __assign({}, this.currentUser.friendRequests, (_a = {}, _a[this.account.uid] = true, _a));
        }
        else {
            this.currentUser.friendRequests = (_b = {}, _b[this.account.uid] = true, _b);
        }
        this.accountProvider.updateOtherUser(this.currentUser).then(function () {
            console.log('user after send req', _this.currentUser);
        });
        var _a, _b;
    };
    ProfilePage.prototype.removeFriend = function () {
        var _this = this;
        this.loadingController.show();
        delete this.account.friends[this.currentUser.uid];
        delete this.account.following[this.currentUser.uid];
        this.accountProvider.updateAccount(this.currentUser).then(function (data) {
            console.log('After Accept req data', data);
            delete _this.currentUser.friends[_this.account.uid];
            delete _this.currentUser.following[_this.account.uid];
            delete _this.currentUser.isFriend;
            _this.accountProvider.updateOtherUser(_this.account);
            _this.loadingController.hide();
        });
    };
    // Update Profile Photo
    ProfilePage.prototype.changeProfilePhoto = function () {
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
                            _this.account.photoURL = 'data:image/jpeg;base64,' + imageData;
                            _this.loadingController.show();
                            _this.accountProvider.updateAccount(_this.account).then(function () {
                                console.log('Updated Account', _this.account);
                                _this.loadingController.hide();
                            });
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
                            _this.account.photoURL = 'data:image/jpeg;base64,' + imageData;
                            _this.loadingController.show();
                            _this.accountProvider.updateAccount(_this.account).then(function () {
                                console.log('Updated Account', _this.account);
                                _this.loadingController.hide();
                            });
                        });
                    }
                }
            ]
        }).present();
    };
    // Update Cover Photo
    ProfilePage.prototype.changeCoverPhoto = function () {
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
                            _this.account.coverPhotoURL = 'data:image/jpeg;base64,' + imageData;
                            _this.loadingController.show();
                            _this.accountProvider.updateAccount(_this.account).then(function () {
                                console.log('Updated Account', _this.account);
                                _this.loadingController.hide();
                            });
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
                            _this.account.coverPhotoURL = 'data:image/jpeg;base64,' + imageData;
                            _this.loadingController.show();
                            _this.accountProvider.updateAccount(_this.account).then(function () {
                                console.log('Updated Account', _this.account);
                                _this.loadingController.hide();
                            });
                        });
                    }
                }
            ]
        }).present();
    };
    ProfilePage.prototype.addDetails = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__profile_add_details_profile_add_details__["a" /* ProfileAddDetailsPage */], { account: this.account });
    };
    ProfilePage.prototype.goToReactions = function () {
        this.navCtrl.push('PostReactionsPage');
    };
    ProfilePage.prototype.showReactionsPopOver = function (event) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_8__reactions_popover_reactions_popover__["a" /* ReactionsPopoverPage */]);
        popover.present({
            ev: event
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */])
    ], ProfilePage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('video'),
        __metadata("design:type", Object)
    ], ProfilePage.prototype, "video", void 0);
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"E:\1_FacebookClone\1_CleanScript\Product\FacebookCloneV3\src\pages\profile\profile.html"*/'<ion-header>\n\n	<ion-navbar>\n\n		<div (click)="gotoSearch()">\n\n			<ion-searchbar [disabled] placeholder="Search for posts, photos, etc..."></ion-searchbar>\n\n		</div>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding *ngIf="account && currentUser" class="has-header">\n\n	<div class="profile-picture-container">\n\n		<div>\n\n			<img *ngIf="account?.coverPhotoURL" class="cover-img" src="{{ account?.coverPhotoURL }}">\n\n			<img *ngIf="!account?.coverPhotoURL" class="cover-img" style="height: 170px"\n\n				src="assets/imgs/profile/cover-photo.png">\n\n			<p class="photo-button" *ngIf="currentUser?.uid === account?.uid && !account?.coverPhotoURL"\n\n				(click)="changeCoverPhoto()">\n\n				<ion-icon name="md-camera"></ion-icon> Add Cover Photo\n\n			</p>\n\n		</div>\n\n\n\n		<div text-center style="position: relative">\n\n			<img class="profile-picture" *ngIf="account?.photoURL" src="{{ account?.photoURL }}">\n\n			<img class="profile-picture" *ngIf="!account?.photoURL" src="assets/imgs/buddy.png">\n\n			<p class="photo-button" style="top: 10px" *ngIf="currentUser?.uid === account?.uid && !account?.photoURL"\n\n				(click)="changeProfilePhoto()">\n\n				<ion-icon name="md-camera"></ion-icon> Photo\n\n			</p>\n\n		</div>\n\n	</div>\n\n\n\n	<ion-card class="profile-details-card">\n\n		<ion-col text-center>\n\n			<p class="username">{{ account.name }}</p>\n\n		</ion-col>\n\n\n\n		<ion-row style="margin-top: -20px;" *ngIf="currentUser?.uid !== account?.uid">\n\n			<ion-col text-center *ngIf="isFriend()">\n\n				<button ion-button icon-only clear (click)="removeFriend()">\n\n					<ion-icon name="md-person"></ion-icon>\n\n				</button>\n\n				<p>UnFriend</p>\n\n			</ion-col>\n\n\n\n			<ion-col text-center *ngIf="isReqSend() && !isFriend()">\n\n				<button ion-button icon-only clear (click)="sendReq()">\n\n					<ion-icon name="person-add"></ion-icon>\n\n				</button>\n\n				<p>Add Friend</p>\n\n			</ion-col>\n\n\n\n			<ion-col text-center *ngIf="isReqSend() && !isFriend()">\n\n				<button ion-button icon-only clear>\n\n					<ion-icon name="ios-checkmark-outline"></ion-icon>\n\n				</button>\n\n				<p>Request Sent</p>\n\n			</ion-col>\n\n\n\n\n\n\n\n			<ion-col text-center (click)="messageUser()">\n\n				<button ion-button icon-only clear>\n\n					<ion-icon name="ios-chatbubbles-outline"></ion-icon>\n\n				</button>\n\n				<p>Message</p>\n\n			</ion-col>\n\n\n\n\n\n		</ion-row>\n\n\n\n		<ion-item style="padding: 10px;height: 50px" *ngIf="account?.education">\n\n			<ion-icon name="ios-school-outline" item-start></ion-icon>\n\n			<p>Studied at\n\n				<strong>{{ this.account?.education }}</strong>\n\n			</p>\n\n		</ion-item>\n\n\n\n		<ion-item style="padding: 10px;height: 50px" *ngIf="account?.workPlace">\n\n			<ion-icon name="ios-briefcase-outline" item-start></ion-icon>\n\n			<p>Works\n\n				<strong>{{ this.account?.workPlace }}</strong>\n\n			</p>\n\n		</ion-item>\n\n\n\n		<ion-item style="padding: 10px;height: 50px" *ngIf="account?.hometown">\n\n			<ion-icon name="ios-home-outline" item-start></ion-icon>\n\n			<p>Lives in\n\n				<strong>{{ this.account?.hometown }}</strong>\n\n			</p>\n\n		</ion-item>\n\n\n\n		<ion-item style="padding: 10px;height: 50px" *ngIf="account?.hometown">\n\n			<ion-icon name="ios-pin-outline" item-start></ion-icon>\n\n			<p>From\n\n				<strong>{{ this.account?.hometown }}</strong>\n\n			</p>\n\n		</ion-item>\n\n\n\n		<ion-item style="padding: 10px;height: 50px" *ngIf="account?.relationshipStatus">\n\n			<ion-icon name="ios-heart-outline" item-start></ion-icon>\n\n			<p>Relationship Status\n\n				<strong>{{ this.account?.relationshipStatus }}</strong>\n\n			</p>\n\n		</ion-item>\n\n\n\n\n\n		<div style="margin: 15px" *ngIf="currentUser?.uid === account?.uid">\n\n			<button ion-button block outline icon-start class="add-buttons" (click)="addDetails()">\n\n				<ion-icon name="add"></ion-icon>\n\n				ADD DETAILS ABOUT YOU\n\n			</button>\n\n\n\n		</div>\n\n\n\n\n\n		<ion-row>\n\n			<ion-col text-center>\n\n				<button ion-button icon-only clear>ABOUT</button>\n\n			</ion-col>\n\n\n\n			<ion-col text-center>\n\n				<button ion-button icon-only clear>PHOTOS</button>\n\n			</ion-col>\n\n\n\n			<ion-col text-center>\n\n				<button ion-button icon-only clear>FRIENDS</button>\n\n			</ion-col>\n\n		</ion-row>\n\n	</ion-card>\n\n\n\n	<ion-card class="write-post-card">\n\n		<ion-item (click)="addPost()">\n\n			<ion-avatar item-start>\n\n				<img *ngIf="account?.photoURL" src="{{ account?.photoURL }}">\n\n				<img *ngIf="!account?.photoURL" src="assets/imgs/buddy.png">\n\n			</ion-avatar>\n\n\n\n			<p>{{ placeholder }}</p>\n\n		</ion-item>\n\n\n\n		<ion-row>\n\n			<ion-col text-center>\n\n				<button ion-button clear>\n\n					<ion-icon name="md-create" item-start></ion-icon>\n\n					<p>TEXT</p>\n\n				</button>\n\n			</ion-col>\n\n\n\n			<ion-col text-center>\n\n				<button ion-button clear>\n\n					<ion-icon name="md-images" item-start></ion-icon>\n\n					<p>PHOTOS</p>\n\n				</button>\n\n			</ion-col>\n\n		</ion-row>\n\n	</ion-card>\n\n\n\n	<ion-card class="photos-card">\n\n		<ion-item>\n\n			<ion-icon class="card-icon" name="md-images" item-start></ion-icon>\n\n			<p class="card-title">Photos</p>\n\n		</ion-item>\n\n		<ion-row>\n\n			<ion-col *ngFor="let photo of photos" style="width: 30%;">\n\n				<img class="top-picture" src="{{ photo }}">\n\n			</ion-col>\n\n		</ion-row>\n\n\n\n		<ion-row *ngIf="photos.length > 3">\n\n			<ion-col text-center>\n\n				<button class="card-footer" ion-button clear>\n\n					<p>See All Photos</p>\n\n					<ion-icon name="ios-arrow-forward" item-start></ion-icon>\n\n				</button>\n\n			</ion-col>\n\n		</ion-row>\n\n	</ion-card>\n\n\n\n	<ion-card class="friends-card">\n\n		<ion-item>\n\n			<ion-icon class="card-icon" name="md-people" item-start></ion-icon>\n\n			<p class="card-title">Friends</p>\n\n		</ion-item>\n\n\n\n		<ion-row>\n\n			<ion-col *ngFor="let friend of friends" style="max-width: 32%; margin: 0px 5px">\n\n				<img *ngIf="friend?.photoURL" style="display: inline;" src="{{ friend?.photoURL }}"\n\n					(click)="goToProfile(friend.uid)">\n\n				<img *ngIf="!friend?.photoURL" style="display: inline;" src="assets/imgs/buddy.png"\n\n					(click)="goToProfile(friend.uid)">\n\n				<p class="friend-name">{{ friend.name }}</p>\n\n			</ion-col>\n\n		</ion-row>\n\n\n\n		<ion-row>\n\n			<ion-col text-center>\n\n				<button class="card-footer" ion-button clear *ngIf="friends.length > 3">\n\n					<p>See All Friends</p>\n\n					<ion-icon name="ios-arrow-forward" item-start></ion-icon>\n\n				</button>\n\n			</ion-col>\n\n		</ion-row>\n\n	</ion-card>\n\n\n\n	<ion-card class="posts-card">\n\n		<p class="card-title">Posts</p>\n\n	</ion-card>\n\n\n\n	<timeline [timeline]="timeline"></timeline>\n\n</ion-content>'/*ion-inline-end:"E:\1_FacebookClone\1_CleanScript\Product\FacebookCloneV3\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_timeline_timeline__["a" /* TimelineProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_account_account__["a" /* AccountProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_5__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_chat_chat__["a" /* ChatProvider */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ })

});
//# sourceMappingURL=2.js.map