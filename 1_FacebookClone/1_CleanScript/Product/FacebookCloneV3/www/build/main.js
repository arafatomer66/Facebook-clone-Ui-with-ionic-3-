webpackJsonp([15],{

/***/ 1111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_chat_chat__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_account_account__ = __webpack_require__(23);
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





/**
 * Generated class for the SearchHeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var SearchHeaderComponent = /** @class */ (function () {
    function SearchHeaderComponent(camera, navCtrl, modalCtrl, chatProvider, accountProvider) {
        var _this = this;
        this.camera = camera;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.chatProvider = chatProvider;
        this.accountProvider = accountProvider;
        this.totalUnreadChats = 0;
        this.accountProvider.getAccount(null).subscribe(function (data) {
            _this.account = data;
            console.log(_this.account);
        });
        console.log('Hello SearchHeaderComponent Component');
        this.getAllUnReadedMessages();
    }
    SearchHeaderComponent.prototype.openCamera = function () {
        var _this = this;
        this.camera.getPicture({
            quality: 100,
            // targetWidth: this.platform.width(),
            // targetHeight: this.platform.height(),
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            correctOrientation: true,
            sourceType: this.camera.PictureSourceType.CAMERA
        }).then(function (imageData) {
            console.log(imageData);
            _this.image = 'data:image/jpeg;base64,' + imageData;
        });
    };
    SearchHeaderComponent.prototype.gotoMessages = function () {
        this.navCtrl.push('MessagesPage');
    };
    SearchHeaderComponent.prototype.gotoSearch = function () {
        this.modalCtrl.create('SearchPage').present();
    };
    SearchHeaderComponent.prototype.unread = function (chat) {
        var _this = this;
        var res = [];
        if (chat.messages)
            res = chat.messages.filter(function (item) {
                if (item.unread && item.userId !== _this.account.uid)
                    return item;
            });
        return res.length > 0;
    };
    SearchHeaderComponent.prototype.getAllUnReadedMessages = function () {
        var _this = this;
        this.chatProvider.getChats().subscribe(function (data) {
            var chats = [];
            var unReadUsers = [];
            data.map(function (a) {
                var data = a.payload.doc.data();
                var uid = a.payload.doc.id;
                chats.push(__assign({ uid: uid }, data));
            });
            console.log('Chats', chats);
            for (var i = 0; i < chats.length; i++) {
                if (_this.unread(chats[i]))
                    if (unReadUsers.indexOf(chats[i].uid) === -1) {
                        unReadUsers.push(chats[i].uid);
                    }
            }
            _this.totalUnreadChats = unReadUsers.length;
            console.log('total unreaed ========>>>>>>>>>>>', _this.totalUnreadChats);
        });
    };
    SearchHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'search-header',template:/*ion-inline-start:"E:\1_FacebookClone\1_CleanScript\Product\FacebookCloneV3\src\components\search-header\search-header.html"*/'<ion-navbar>\n  <ion-buttons left>\n    <button ion-button icon-only (click)="openCamera()">\n      <ion-icon name="md-camera"></ion-icon>\n    </button>\n  </ion-buttons>\n  <div (click)="gotoSearch()">\n    <ion-searchbar [disabled]></ion-searchbar>\n  </div>\n\n  <ion-buttons right>\n    <button id="cart-btn" ion-button icon-only (click)="gotoMessages()">\n      <ion-icon name="ios-chatbubbles"></ion-icon>\n      <ion-badge *ngIf="totalUnreadChats > 0" id="cart-badge">{{ totalUnreadChats }}</ion-badge>\n    </button>\n  </ion-buttons>\n</ion-navbar>'/*ion-inline-end:"E:\1_FacebookClone\1_CleanScript\Product\FacebookCloneV3\src\components\search-header\search-header.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_chat_chat__["a" /* ChatProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_account_account__["a" /* AccountProvider */]])
    ], SearchHeaderComponent);
    return SearchHeaderComponent;
}());

//# sourceMappingURL=search-header.js.map

/***/ }),

/***/ 1112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_timeline_timeline__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_account_account__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_chat_chat__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_loading_loading__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_page_page__ = __webpack_require__(71);
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
 * Generated class for the PageListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var PageListComponent = /** @class */ (function () {
    function PageListComponent(navCtrl, timelineProvider, accountProvider, modalCtrl, viewCtrl, chatProvider, loading, pageProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.timelineProvider = timelineProvider;
        this.accountProvider = accountProvider;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.chatProvider = chatProvider;
        this.loading = loading;
        this.pageProvider = pageProvider;
        this.accountProvider.getAccount(null).subscribe(function (data) {
            _this.account = data;
            console.log(_this.account);
        });
    }
    PageListComponent.prototype.likePage = function (uid) {
        this.pageProvider.likeAndFollowPage(uid, this.account);
    };
    PageListComponent.prototype.isLikedPage = function (page) {
        var is_liked = false;
        if (page.followers && page.followers.length > 0) {
            for (var i = 0; i < page.followers.length; i++) {
                if (page.followers[i].user === this.account.uid) {
                    is_liked = true;
                }
            }
            return is_liked;
        }
    };
    PageListComponent.prototype.dislikePage = function (uid) {
        this.pageProvider.dislikeAndunFollowPage(uid, this.account);
    };
    PageListComponent.prototype.goToPage = function (uid) {
        this.navCtrl.push('PageProfilePage', { pageId: uid });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], PageListComponent.prototype, "pages", void 0);
    PageListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"E:\1_FacebookClone\1_CleanScript\Product\FacebookCloneV3\src\components\page-list\page-list.html"*/'<ion-list>\n	<ion-item *ngFor="let page of pages">\n		<ion-thumbnail item-start (click)="goToPage(page.uid)">\n			<img *ngIf="page.photoURL" src="{{ page.photoURL }}">\n			<img *ngIf="!page.photoURL" src="assets/imgs/Blue-BG.png">\n		</ion-thumbnail>\n\n		<h2>{{ page.pageName }}</h2>\n		<p>{{ page.description }}</p>\n		<button ion-button icon-only clear *ngIf="!isLikedPage(page)" (click)="likePage(page.uid)" item-end>\n			<ion-icon name="ios-thumbs-up-outline"></ion-icon>\n		</button>\n		<button ion-button icon-only clear *ngIf="isLikedPage(page)" (click)="dislikePage(page.uid)" item-end>\n			<ion-icon class="like-button" name="ios-thumbs-up"></ion-icon>\n		</button>\n	</ion-item>\n</ion-list>'/*ion-inline-end:"E:\1_FacebookClone\1_CleanScript\Product\FacebookCloneV3\src\components\page-list\page-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_timeline_timeline__["a" /* TimelineProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_account_account__["a" /* AccountProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_chat_chat__["a" /* ChatProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_page_page__["a" /* PageProvider */]])
    ], PageListComponent);
    return PageListComponent;
}());

//# sourceMappingURL=page-list.js.map

/***/ }),

/***/ 1113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagePostListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_timeline_timeline__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_account_account__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_comments_comments__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_reactions_popover_reactions_popover__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_loading_loading__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_moment__);
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









/**
 * Generated class for the PagePostListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var PagePostListComponent = /** @class */ (function () {
    function PagePostListComponent(navCtrl, actionSheetCtrl, popoverCtrl, timelineProvider, accountProvider, modalCtrl, events, platform, loadingProvider, camera, app) {
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
        console.log('Hi');
        this.accountProvider.getAccount().subscribe(function (data) {
            _this.account = data;
            console.log(_this.account);
        });
        console.log(this.timeline);
    }
    PagePostListComponent.prototype.updatePost = function (post) {
        console.log('Edit Post', post);
        this.modalCtrl.create('AddPostPage', {
            text: post.text,
            postId: post.uid,
            photoURL: post.photoURL || null,
            videoURL: post.videoURL || null,
            is_edit: true,
            post: post,
            pageId: post.pageId
        }).present();
    };
    PagePostListComponent.prototype.deletePost = function (postId) {
        this.timelineProvider.deletePost(postId);
    };
    PagePostListComponent.prototype.presentPostActionSheet = function (post) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            buttons: [
                {
                    text: 'Edit post',
                    handler: function () { _this.updatePost(post); }
                },
                {
                    text: 'Delete post',
                    handler: function () { _this.deletePost(post.uid); }
                },
            ]
        });
        actionSheet.present();
    };
    PagePostListComponent.prototype.showReactionsPopOver = function (event, post) {
        console.log('post', post);
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_5__pages_reactions_popover_reactions_popover__["a" /* ReactionsPopoverPage */], { post: post });
        popover.present({
            ev: event
        });
    };
    PagePostListComponent.prototype.like = function (uid) {
        this.timelineProvider.likePost(uid, 'like', this.account);
    };
    PagePostListComponent.prototype.dislike = function (uid) {
        this.timelineProvider.dislikePost(uid);
    };
    PagePostListComponent.prototype.addToBookmark = function (uid) {
        this.timelineProvider.addToBookmark(uid);
    };
    PagePostListComponent.prototype.removeFromBookmark = function (uid) {
        this.timelineProvider.removeFromBookmark(uid);
    };
    PagePostListComponent.prototype.addPost = function () {
        this.modalCtrl.create('AddPostPage').present();
    };
    PagePostListComponent.prototype.getDate = function (date) {
        if (date)
            return __WEBPACK_IMPORTED_MODULE_8_moment___default()(new Date(date.seconds * 1000)).fromNow();
        return __WEBPACK_IMPORTED_MODULE_8_moment___default()(new Date()).fromNow();
    };
    PagePostListComponent.prototype.likeState = function (likes) {
        if (likes) {
            var is_liked;
            for (var i = 0; i < likes.length; i++) {
                if (likes[i].user === this.account.uid) {
                    is_liked = true;
                }
                else {
                    is_liked = false;
                }
            }
            return is_liked;
        }
    };
    PagePostListComponent.prototype.bookmarkState = function (bookmark) {
        if (bookmark) {
            if (bookmark[this.account.uid])
                return true;
        }
        return false;
    };
    PagePostListComponent.prototype.commentState = function (comments) {
        if (comments) {
            //myArray.map(function(e) { return e.hello; }).indexOf('stevie');
            if (comments.map(function (e) { return e.commentBy; }).indexOf(this.account.uid) !== -1)
                return true;
        }
        return false;
    };
    PagePostListComponent.prototype.comment = function (postId) {
        console.log('PostId.Home', postId);
        this.modalCtrl.create('CommentPostPage', { postId: postId, account: this.account }).present();
    };
    PagePostListComponent.prototype.sharePost = function (post) {
        console.log('Sharing', post);
        this.modalCtrl.create('AddPostPage', {
            text: post.text,
            postOwner: post.user,
            postOwnerId: post.postBy,
            postId: post.uid,
            photoURL: post.photoURL || null,
            videoURL: post.videoURL || null,
            is_edit: false
        }).present();
    };
    //Current User Profile
    PagePostListComponent.prototype.openProfile = function () {
        this.modalCtrl.create('ProfilePage').present();
    };
    //Other User Profile
    PagePostListComponent.prototype.goToProfile = function (userId) {
        if (userId) {
            this.navCtrl.push('ProfilePage', { userId: userId });
        }
        else {
            this.navCtrl.push('ProfilePage', { userId: this.account.uid });
        }
    };
    PagePostListComponent.prototype.goToReactions = function (post) {
        this.navCtrl.push('PostReactionsPage', { post: post });
    };
    PagePostListComponent.prototype.showPostComments = function (post) {
        var commentsModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__pages_comments_comments__["a" /* CommentsPage */], { post: post, account: this.account });
        commentsModal.present();
    };
    PagePostListComponent.prototype.countEv = function (obj) {
        if (obj)
            return Object.keys(obj).length;
        return 0;
    };
    PagePostListComponent.prototype.viewPost = function (postId) {
        this.modalCtrl.create('ViewPostPage', { postId: postId }).present();
    };
    //Create text array
    PagePostListComponent.prototype.createStrArray = function (text) {
        var str = text;
        if (!str || str === '')
            return '';
        var res = str.split(/[ ]/);
        return res;
    };
    //Open Search
    PagePostListComponent.prototype.searchByTag = function (text) {
        console.log('searchStr', text);
        this.timelineProvider.searchStr = text;
        this.modalCtrl.create('SearchPage').present();
        // const nav = this.app.getActiveNav();
        // console.log('Active', this.navCtrl.getActive().name);
        // if ((this.navCtrl.getActive().name !== 'HomePage') && (this.navCtrl.getActive().name !== 'SearchPage'))
        //     this.navCtrl.pop();
        // if (this.navCtrl.getActive().name !== 'SearchPage')
        //     nav.parent.select(1);
    };
    PagePostListComponent.prototype.openProfileByQuote = function (quote) {
        return __awaiter(this, void 0, void 0, function () {
            var userId;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.accountProvider.getUserIdByUsername(quote)];
                    case 1:
                        userId = _a.sent();
                        console.log(userId);
                        if (userId) {
                            this.goToProfile(userId);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    PagePostListComponent.prototype.isURL = function (text) {
        var pattern = new RegExp('(?:(?:(?:ht|f)tp)s?://)?[\\w_-]+(?:\\.[\\w_-]+)+([\\w.,@?^=%&:/~+#-]*[\\w@?^=%&/~+#-])?'); // fragment locater
        if (!pattern.test(text)) {
            return false;
        }
        else {
            return true;
        }
    };
    PagePostListComponent.prototype.isLike = function (post, type) {
        var isLike = false;
        if (post.likes) {
            post.likes.map(function (item) {
                if (item.type === type) {
                    isLike = true;
                }
            });
        }
        return isLike;
    };
    PagePostListComponent.prototype.openBrowser = function (url) {
        if (!url.includes('//'))
            url = 'http://' + url;
        window.open(url);
    };
    PagePostListComponent.prototype.play = function (postId) {
        this.timeline[this.timeline.findIndex(function (x) { return x.uid == postId; })].views += 1;
    };
    PagePostListComponent.prototype.addView = function (postId) {
        this.timelineProvider.addView(postId);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], PagePostListComponent.prototype, "timeline", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], PagePostListComponent.prototype, "pageName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], PagePostListComponent.prototype, "pageOwner", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], PagePostListComponent.prototype, "pagePic", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('video'),
        __metadata("design:type", Object)
    ], PagePostListComponent.prototype, "video", void 0);
    PagePostListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-post-list',template:/*ion-inline-start:"E:\1_FacebookClone\1_CleanScript\Product\FacebookCloneV3\src\components\page-post-list\page-post-list.html"*/'<ion-list class="post-list">\n    <ion-card *ngFor="let post of timeline">\n        <ion-item>\n            <ion-avatar style="cursor: pointer" item-start (click)="goToProfile(post.postBy)">\n                <img *ngIf="post.userPhoto && pageOwner !== post.postBy" src="{{ post.userPhoto }}">\n                <img *ngIf="pageOwner === post.postBy && pagePic" src="{{ pagePic }}">\n                <img *ngIf="pageOwner === post.postBy && !pagePic" src="assets/imgs/buddy.png">\n                <!-- <img *ngIf="!post.userPhoto && pageOwner !== post.postBy" src="assets/imgs/buddy.png"> -->\n            </ion-avatar>\n\n            <ion-col>\n                <p class="post-author" (click)="viewPost(post.uid)" *ngIf="pageOwner === post.postBy">\n                    {{ pageName }}\n                </p>\n                <p class="post-author" (click)="viewPost(post.uid)" *ngIf="pageOwner !== post.postBy">\n                    {{ post.user }}\n                    <ion-icon ios="ios-play" md="md-play"></ion-icon>\n                    {{ pageName }}\n                    <!-- <br/>\n                      <span *ngIf="post.postOwner" style="color: #999">Shared\n                          <b style="color:gray">{{post.postOwner}}</b> post\n                      </span> -->\n                </p>\n\n                <ion-row>\n                    <ion-note>{{ getDate(post.createdAt) }}</ion-note>\n                    <ion-icon class="globe-icon" name="md-globe"></ion-icon>\n                </ion-row>\n            </ion-col>\n\n            <button *ngIf="account.uid === post.postBy" class="more-button" ion-button clear icon-only item-end (click)="presentPostActionSheet(post)">\n                <ion-icon name="ios-more"></ion-icon>\n            </button>\n        </ion-item>\n\n        <ion-card-content>\n            <div>\n                <span *ngFor="let text of createStrArray(post.text)">\n                    <br *ngIf="text === \'VK_RETURN\'" /> {{text.substring(0,1)==="#" || text.substring(0,1)==="@" || isURL(text) || text === \'VK_RETURN\'? "":\n                    " " +text}}\n                    <a (click)="searchByTag(text)" *ngIf="text.substring(0,1)===\'#\'" id="hashtagevt" class="hashtagevt">{{\' \' +text}}</a>\n                    <a (click)="openProfileByQuote(text)" *ngIf="text.substring(0,1)===\'@\'" id="hashtagevt" class="hashtagevt">{{\' \' +text}}</a>\n                    <a (click)="openBrowser(text)" *ngIf="isURL(text)">{{\' \' +text}}</a>\n                </span>\n            </div>\n            <div *ngIf="post.photoURL">\n                <img class="post-img" [src]="post.photoURL" />\n            </div>\n            <div class="video-paused " *ngIf="post.videoURL">\n                <div>\n                    <video #video width="100%" class="post-img" [src]="post.videoURL" poster="assets/imgs/poster.png" poster="" controls (play)="play(post.uid)"\n                        (pause)="addView(post.uid)" (ended)="addView(post.uid)"></video>\n                    <p *ngIf="post[\'views\'] && post.views > 0">{{post.views > 1? post.views+ \' views\': post.views+ \' view\'}}</p>\n                </div>\n            </div>\n\n        </ion-card-content>\n\n        <ion-row style="margin-top: 10px;">\n            <ion-col col-4>\n                <ion-row (click)="goToReactions(post)">\n                    <ion-avatar class="facebook-reaction-icon" *ngIf="isLike(post,\'like\')">\n                        <img src="assets/imgs/newsfeed/facebook-like.png">\n                    </ion-avatar>\n\n                    <ion-avatar class="facebook-reaction-icon" *ngIf="isLike(post,\'love\')">\n                        <img src="assets/imgs/newsfeed/facebook-love.png">\n                    </ion-avatar>\n\n                    <ion-avatar class="facebook-reaction-icon" *ngIf="isLike(post,\'laugh\')">\n                        <img src="assets/imgs/newsfeed/facebook-laugh.png">\n                    </ion-avatar>\n\n                    <ion-avatar class="facebook-reaction-icon" *ngIf="isLike(post,\'angry\')">\n                        <img src="assets/imgs/newsfeed/facebook-angry.png">\n                    </ion-avatar>\n\n                    <ion-avatar class="facebook-reaction-icon" *ngIf="isLike(post,\'sad\')">\n                        <img src="assets/imgs/newsfeed/facebook-sad.png">\n                    </ion-avatar>\n\n                    <ion-avatar class="facebook-reaction-icon" *ngIf="isLike(post,\'shock\')">\n                        <img src="assets/imgs/newsfeed/facebook-shock.png">\n                    </ion-avatar>\n\n                    <p class="reaction-count" *ngIf="post.likes && post.likes.length > 0">{{ post.likes.length }}</p>\n                </ion-row>\n            </ion-col>\n\n            <ion-col col-8 text-end>\n                <p (click)="showPostComments(post)">{{countEv(post.comments)}} Comments • {{countEv(post.shares) }} Shares</p>\n            </ion-col>\n        </ion-row>\n\n        <ion-row class="like-commment-share-row">\n            <ion-col center text-center>\n                <button class="like-button" *ngIf="!likeState(post.likes)" ion-button icon-only clear (click)="like(post.uid)" (press)="showReactionsPopOver($event,post)">\n                    <ion-icon name="ios-thumbs-up-outline"></ion-icon>\n                    <p>Like</p>\n                </button>\n                <button class="like-button" *ngIf="likeState(post.likes)" ion-button icon-only clear (click)="dislike(post.uid)">\n                    <ion-icon *ngIf="likeState(post.likes)" name="ios-thumbs-up"></ion-icon>\n                    <p>Liked</p>\n                </button>\n            </ion-col>\n\n            <ion-col center text-center>\n                <button ion-button icon-only clear (click)="showPostComments(post)">\n                    <ion-icon name="ios-text-outline"></ion-icon>\n                    <p>Comment</p>\n                </button>\n            </ion-col>\n\n            <ion-col center text-center>\n                <button ion-button icon-only clear (click)="sharePost(post)">\n                    <ion-icon name="ios-undo-outline"></ion-icon>\n                    <p>Share</p>\n                </button>\n            </ion-col>\n        </ion-row>\n    </ion-card>\n</ion-list>'/*ion-inline-end:"E:\1_FacebookClone\1_CleanScript\Product\FacebookCloneV3\src\components\page-post-list\page-post-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_timeline_timeline__["a" /* TimelineProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_account_account__["a" /* AccountProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_6__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]])
    ], PagePostListComponent);
    return PagePostListComponent;
}());

//# sourceMappingURL=page-post-list.js.map

/***/ }),

/***/ 1114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_chat_chat__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_account_account__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_loading_loading__ = __webpack_require__(18);
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





var MessagesDetailPage = /** @class */ (function () {
    function MessagesDetailPage(navCtrl, navParams, chatProvider, accountProvider, viewCtrl, loadingProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.chatProvider = chatProvider;
        this.accountProvider = accountProvider;
        this.viewCtrl = viewCtrl;
        this.loadingProvider = loadingProvider;
        this.text = '';
        this.chatId = this.navParams.get('chatId');
        this.accountProvider.getAccount(null).subscribe(function (data) {
            _this.account = data;
            console.log(_this.account);
        });
    }
    MessagesDetailPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.loadingProvider.show();
        this.chatProvider.getChat(this.chatId).subscribe(function (data) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.chatProvider.readMessage(this.chatId)];
                    case 1:
                        _a.sent();
                        this.chat = data;
                        console.log(this.chat);
                        return [4 /*yield*/, this.loadingProvider.hide()];
                    case 2:
                        _a.sent();
                        this.content.scrollToBottom(200);
                        return [2 /*return*/];
                }
            });
        }); });
    };
    MessagesDetailPage.prototype.sendMessage = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.chatProvider.sendMessage(this.chatId, this.text)];
                    case 1:
                        _a.sent();
                        this.content.scrollToBottom(200);
                        this.text = '';
                        return [2 /*return*/];
                }
            });
        });
    };
    MessagesDetailPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */])
    ], MessagesDetailPage.prototype, "content", void 0);
    MessagesDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-messages-detail',template:/*ion-inline-start:"E:\1_FacebookClone\1_CleanScript\Product\FacebookCloneV3\src\pages\messages-detail\messages-detail.html"*/'<ion-header>\n\n\n\n  <ion-toolbar>\n\n    <button (click)="close()" ion-button icon-only menuToggle>\n\n      <ion-icon name="arrow-back"></ion-icon>\n\n    </button>\n\n\n\n    <ion-title *ngIf="chat">\n\n      {{chat.createdBy == account.uid?chat.recipient: chat.sender}}\n\n    </ion-title>\n\n\n\n  </ion-toolbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list *ngIf="chat && account" no-lines>\n\n    <ion-item *ngFor="let message of chat.messages" class="chat-item">\n\n      <ion-avatar *ngIf="message.userId !== account.uid" item-left>\n\n        <img style="object-fit: cover" *ngIf="chat.createdBy == account.uid" [src]="chat.recipientPhoto? chat.recipientPhoto : \'assets/imgs/buddy.png\'"\n\n        />\n\n        <img style="object-fit: cover" *ngIf="chat.createdBy !== account.uid" [src]="chat.senderPhoto? chat.senderPhoto : \'assets/imgs/buddy.png\'"\n\n        />\n\n      </ion-avatar>\n\n      <div *ngIf="message.userId !== account.uid" class="bubble you">\n\n        <p>{{message.text}}</p>\n\n      </div>\n\n\n\n      <ion-avatar *ngIf="message.userId == account.uid" item-right>\n\n        <img style="object-fit: cover" [src]="account.photoURL? account.photoURL : \'assets/imgs/buddy.png\'" />\n\n      </ion-avatar>\n\n      <div *ngIf="message.userId == account.uid" class="bubble right me">\n\n        <p>{{message.text}}</p>\n\n      </div>\n\n\n\n\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n\n\n\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <ion-item>\n\n      <ion-input #input placeholder="Message" [(ngModel)]="text"></ion-input>\n\n      <button ion-button icon-only clear item-right (click)="sendMessage(); input.setFocus();">\n\n        <ion-icon name="send"></ion-icon>\n\n      </button>\n\n    </ion-item>\n\n  </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"E:\1_FacebookClone\1_CleanScript\Product\FacebookCloneV3\src\pages\messages-detail\messages-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_chat_chat__["a" /* ChatProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_account_account__["a" /* AccountProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_loading_loading__["a" /* LoadingProvider */]])
    ], MessagesDetailPage);
    return MessagesDetailPage;
}());

//# sourceMappingURL=messages-detail.js.map

/***/ }),

/***/ 1115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_chat_chat__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_account_account__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_loading_loading__ = __webpack_require__(18);
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





var MessagesPage = /** @class */ (function () {
    function MessagesPage(navCtrl, navParams, modalCtrl, chatProvider, accountProvider, loading) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.chatProvider = chatProvider;
        this.accountProvider = accountProvider;
        this.loading = loading;
        this.chats = [];
        this.accountProvider.getAccount(null).subscribe(function (data) {
            _this.account = data;
            console.log(_this.account);
        });
    }
    MessagesPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.loading.show();
        this.chatProvider.getChats().subscribe(function (data) {
            _this.chats = [];
            data.map(function (a) {
                var data = a.payload.doc.data();
                var uid = a.payload.doc.id;
                _this.chats.push(__assign({ uid: uid }, data));
            });
            console.log('Chats', _this.chats);
            _this.loading.hide();
        });
    };
    MessagesPage.prototype.searchUser = function () {
        this.modalCtrl.create('SearchUserPage', { title: 'Search User', chat: true }).present();
    };
    MessagesPage.prototype.goToChat = function (chatId) {
        this.modalCtrl.create('MessagesDetailPage', { chatId: chatId }).present();
    };
    MessagesPage.prototype.unread = function (chat) {
        var _this = this;
        var res = [];
        if (chat.messages)
            res = chat.messages.filter(function (item) {
                if (item.unread && item.userId !== _this.account.uid)
                    return item;
            });
        return res.length > 0;
    };
    MessagesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-messages',template:/*ion-inline-start:"E:\1_FacebookClone\1_CleanScript\Product\FacebookCloneV3\src\pages\messages\messages.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Messages</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only clear style="color: white" (click)="searchUser()">\n\n        <i class="fa fa-plus-circle"></i>\n\n        Add\n\n      </button>\n\n\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-card *ngFor="let chat of chats">\n\n    <ion-item (click)="goToChat(chat.uid)">\n\n      <ion-avatar [ngClass]="{\'unread\': unread(chat)}" item-start>\n\n        <img *ngIf="chat.createdBy == account.uid" [src]="chat.recipientPhoto? chat.recipientPhoto : \'assets/imgs/buddy.png\'" />\n\n        <img *ngIf="chat.createdBy !== account.uid" [src]="chat.senderPhoto? chat.senderPhoto : \'assets/imgs/buddy.png\'" />\n\n      </ion-avatar>\n\n      <h2>{{chat.createdBy == account.uid? chat.recipient: chat.sender}}</h2>\n\n      <b *ngIf="unread(chat)" item-end>Unread</b>\n\n    </ion-item>\n\n  </ion-card>\n\n\n\n</ion-content>'/*ion-inline-end:"E:\1_FacebookClone\1_CleanScript\Product\FacebookCloneV3\src\pages\messages\messages.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_chat_chat__["a" /* ChatProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_account_account__["a" /* AccountProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_loading_loading__["a" /* LoadingProvider */]])
    ], MessagesPage);
    return MessagesPage;
}());

//# sourceMappingURL=messages.js.map

/***/ }),

/***/ 1116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Consts; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_verify_account_verify_account__ = __webpack_require__(554);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_login_login__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_tabs_tabs__ = __webpack_require__(161);



var Consts;
(function (Consts) {
    Consts.verifyPage = __WEBPACK_IMPORTED_MODULE_0__pages_verify_account_verify_account__["a" /* VerifyAccountPage */];
    Consts.loginPage = __WEBPACK_IMPORTED_MODULE_1__pages_login_login__["a" /* LoginPage */];
    Consts.tabsPage = __WEBPACK_IMPORTED_MODULE_2__pages_tabs_tabs__["a" /* TabsPage */];
})(Consts || (Consts = {}));
//# sourceMappingURL=consts.js.map

/***/ }),

/***/ 1117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ([{ "name": "Israel", "dial_code": "+972", "code": "IL" }, { "name": "Afghanistan", "dial_code": "+93", "code": "AF" }, { "name": "Albania", "dial_code": "+355", "code": "AL" }, { "name": "Algeria", "dial_code": "+213", "code": "DZ" }, { "name": "AmericanSamoa", "dial_code": "+1 684", "code": "AS" }, { "name": "Andorra", "dial_code": "+376", "code": "AD" }, { "name": "Angola", "dial_code": "+244", "code": "AO" }, { "name": "Anguilla", "dial_code": "+1 264", "code": "AI" }, { "name": "Antigua and Barbuda", "dial_code": "+1268", "code": "AG" }, { "name": "Argentina", "dial_code": "+54", "code": "AR" }, { "name": "Armenia", "dial_code": "+374", "code": "AM" }, { "name": "Aruba", "dial_code": "+297", "code": "AW" }, { "name": "Australia", "dial_code": "+61", "code": "AU" }, { "name": "Austria", "dial_code": "+43", "code": "AT" }, { "name": "Azerbaijan", "dial_code": "+994", "code": "AZ" }, { "name": "Bahamas", "dial_code": "+1 242", "code": "BS" }, { "name": "Bahrain", "dial_code": "+973", "code": "BH" }, { "name": "Bangladesh", "dial_code": "+880", "code": "BD" }, { "name": "Barbados", "dial_code": "+1 246", "code": "BB" }, { "name": "Belarus", "dial_code": "+375", "code": "BY" }, { "name": "Belgium", "dial_code": "+32", "code": "BE" }, { "name": "Belize", "dial_code": "+501", "code": "BZ" }, { "name": "Benin", "dial_code": "+229", "code": "BJ" }, { "name": "Bermuda", "dial_code": "+1 441", "code": "BM" }, { "name": "Bhutan", "dial_code": "+975", "code": "BT" }, { "name": "Bosnia and Herzegovina", "dial_code": "+387", "code": "BA" }, { "name": "Botswana", "dial_code": "+267", "code": "BW" }, { "name": "Brazil", "dial_code": "+55", "code": "BR" }, { "name": "British Indian Ocean Territory", "dial_code": "+246", "code": "IO" }, { "name": "Bulgaria", "dial_code": "+359", "code": "BG" }, { "name": "Burkina Faso", "dial_code": "+226", "code": "BF" }, { "name": "Burundi", "dial_code": "+257", "code": "BI" }, { "name": "Cambodia", "dial_code": "+855", "code": "KH" }, { "name": "Cameroon", "dial_code": "+237", "code": "CM" }, { "name": "Canada", "dial_code": "+1", "code": "CA" }, { "name": "Cape Verde", "dial_code": "+238", "code": "CV" }, { "name": "Cayman Islands", "dial_code": "+ 345", "code": "KY" }, { "name": "Central African Republic", "dial_code": "+236", "code": "CF" }, { "name": "Chad", "dial_code": "+235", "code": "TD" }, { "name": "Chile", "dial_code": "+56", "code": "CL" }, { "name": "China", "dial_code": "+86", "code": "CN" }, { "name": "Christmas Island", "dial_code": "+61", "code": "CX" }, { "name": "Colombia", "dial_code": "+57", "code": "CO" }, { "name": "Comoros", "dial_code": "+269", "code": "KM" }, { "name": "Congo", "dial_code": "+242", "code": "CG" }, { "name": "Cook Islands", "dial_code": "+682", "code": "CK" }, { "name": "Costa Rica", "dial_code": "+506", "code": "CR" }, { "name": "Croatia", "dial_code": "+385", "code": "HR" }, { "name": "Cuba", "dial_code": "+53", "code": "CU" }, { "name": "Cyprus", "dial_code": "+537", "code": "CY" }, { "name": "Czech Republic", "dial_code": "+420", "code": "CZ" }, { "name": "Denmark", "dial_code": "+45", "code": "DK" }, { "name": "Djibouti", "dial_code": "+253", "code": "DJ" }, { "name": "Dominica", "dial_code": "+1 767", "code": "DM" }, { "name": "Dominican Republic", "dial_code": "+1 849", "code": "DO" }, { "name": "Ecuador", "dial_code": "+593", "code": "EC" }, { "name": "Egypt", "dial_code": "+20", "code": "EG" }, { "name": "El Salvador", "dial_code": "+503", "code": "SV" }, { "name": "Equatorial Guinea", "dial_code": "+240", "code": "GQ" }, { "name": "Eritrea", "dial_code": "+291", "code": "ER" }, { "name": "Estonia", "dial_code": "+372", "code": "EE" }, { "name": "Ethiopia", "dial_code": "+251", "code": "ET" }, { "name": "Faroe Islands", "dial_code": "+298", "code": "FO" }, { "name": "Fiji", "dial_code": "+679", "code": "FJ" }, { "name": "Finland", "dial_code": "+358", "code": "FI" }, { "name": "France", "dial_code": "+33", "code": "FR" }, { "name": "French Guiana", "dial_code": "+594", "code": "GF" }, { "name": "French Polynesia", "dial_code": "+689", "code": "PF" }, { "name": "Gabon", "dial_code": "+241", "code": "GA" }, { "name": "Gambia", "dial_code": "+220", "code": "GM" }, { "name": "Georgia", "dial_code": "+995", "code": "GE" }, { "name": "Germany", "dial_code": "+49", "code": "DE" }, { "name": "Ghana", "dial_code": "+233", "code": "GH" }, { "name": "Gibraltar", "dial_code": "+350", "code": "GI" }, { "name": "Greece", "dial_code": "+30", "code": "GR" }, { "name": "Greenland", "dial_code": "+299", "code": "GL" }, { "name": "Grenada", "dial_code": "+1 473", "code": "GD" }, { "name": "Guadeloupe", "dial_code": "+590", "code": "GP" }, { "name": "Guam", "dial_code": "+1 671", "code": "GU" }, { "name": "Guatemala", "dial_code": "+502", "code": "GT" }, { "name": "Guinea", "dial_code": "+224", "code": "GN" }, { "name": "Guinea-Bissau", "dial_code": "+245", "code": "GW" }, { "name": "Guyana", "dial_code": "+595", "code": "GY" }, { "name": "Haiti", "dial_code": "+509", "code": "HT" }, { "name": "Honduras", "dial_code": "+504", "code": "HN" }, { "name": "Hungary", "dial_code": "+36", "code": "HU" }, { "name": "Iceland", "dial_code": "+354", "code": "IS" }, { "name": "India", "dial_code": "+91", "code": "IN" }, { "name": "Indonesia", "dial_code": "+62", "code": "ID" }, { "name": "Iraq", "dial_code": "+964", "code": "IQ" }, { "name": "Ireland", "dial_code": "+353", "code": "IE" }, { "name": "Israel", "dial_code": "+972", "code": "IL" }, { "name": "Italy", "dial_code": "+39", "code": "IT" }, { "name": "Jamaica", "dial_code": "+1 876", "code": "JM" }, { "name": "Japan", "dial_code": "+81", "code": "JP" }, { "name": "Jordan", "dial_code": "+962", "code": "JO" }, { "name": "Kazakhstan", "dial_code": "+7 7", "code": "KZ" }, { "name": "Kenya", "dial_code": "+254", "code": "KE" }, { "name": "Kiribati", "dial_code": "+686", "code": "KI" }, { "name": "Kuwait", "dial_code": "+965", "code": "KW" }, { "name": "Kyrgyzstan", "dial_code": "+996", "code": "KG" }, { "name": "Latvia", "dial_code": "+371", "code": "LV" }, { "name": "Lebanon", "dial_code": "+961", "code": "LB" }, { "name": "Lesotho", "dial_code": "+266", "code": "LS" }, { "name": "Liberia", "dial_code": "+231", "code": "LR" }, { "name": "Liechtenstein", "dial_code": "+423", "code": "LI" }, { "name": "Lithuania", "dial_code": "+370", "code": "LT" }, { "name": "Luxembourg", "dial_code": "+352", "code": "LU" }, { "name": "Madagascar", "dial_code": "+261", "code": "MG" }, { "name": "Malawi", "dial_code": "+265", "code": "MW" }, { "name": "Malaysia", "dial_code": "+60", "code": "MY" }, { "name": "Maldives", "dial_code": "+960", "code": "MV" }, { "name": "Mali", "dial_code": "+223", "code": "ML" }, { "name": "Malta", "dial_code": "+356", "code": "MT" }, { "name": "Marshall Islands", "dial_code": "+692", "code": "MH" }, { "name": "Martinique", "dial_code": "+596", "code": "MQ" }, { "name": "Mauritania", "dial_code": "+222", "code": "MR" }, { "name": "Mauritius", "dial_code": "+230", "code": "MU" }, { "name": "Mayotte", "dial_code": "+262", "code": "YT" }, { "name": "Mexico", "dial_code": "+52", "code": "MX" }, { "name": "Monaco", "dial_code": "+377", "code": "MC" }, { "name": "Mongolia", "dial_code": "+976", "code": "MN" }, { "name": "Montenegro", "dial_code": "+382", "code": "ME" }, { "name": "Montserrat", "dial_code": "+1664", "code": "MS" }, { "name": "Morocco", "dial_code": "+212", "code": "MA" }, { "name": "Myanmar", "dial_code": "+95", "code": "MM" }, { "name": "Namibia", "dial_code": "+264", "code": "NA" }, { "name": "Nauru", "dial_code": "+674", "code": "NR" }, { "name": "Nepal", "dial_code": "+977", "code": "NP" }, { "name": "Netherlands", "dial_code": "+31", "code": "NL" }, { "name": "Netherlands Antilles", "dial_code": "+599", "code": "AN" }, { "name": "New Caledonia", "dial_code": "+687", "code": "NC" }, { "name": "New Zealand", "dial_code": "+64", "code": "NZ" }, { "name": "Nicaragua", "dial_code": "+505", "code": "NI" }, { "name": "Niger", "dial_code": "+227", "code": "NE" }, { "name": "Nigeria", "dial_code": "+234", "code": "NG" }, { "name": "Niue", "dial_code": "+683", "code": "NU" }, { "name": "Norfolk Island", "dial_code": "+672", "code": "NF" }, { "name": "Northern Mariana Islands", "dial_code": "+1 670", "code": "MP" }, { "name": "Norway", "dial_code": "+47", "code": "NO" }, { "name": "Oman", "dial_code": "+968", "code": "OM" }, { "name": "Pakistan", "dial_code": "+92", "code": "PK" }, { "name": "Palau", "dial_code": "+680", "code": "PW" }, { "name": "Panama", "dial_code": "+507", "code": "PA" }, { "name": "Papua New Guinea", "dial_code": "+675", "code": "PG" }, { "name": "Paraguay", "dial_code": "+595", "code": "PY" }, { "name": "Peru", "dial_code": "+51", "code": "PE" }, { "name": "Philippines", "dial_code": "+63", "code": "PH" }, { "name": "Poland", "dial_code": "+48", "code": "PL" }, { "name": "Portugal", "dial_code": "+351", "code": "PT" }, { "name": "Puerto Rico", "dial_code": "+1 939", "code": "PR" }, { "name": "Qatar", "dial_code": "+974", "code": "QA" }, { "name": "Romania", "dial_code": "+40", "code": "RO" }, { "name": "Rwanda", "dial_code": "+250", "code": "RW" }, { "name": "Samoa", "dial_code": "+685", "code": "WS" }, { "name": "San Marino", "dial_code": "+378", "code": "SM" }, { "name": "Saudi Arabia", "dial_code": "+966", "code": "SA" }, { "name": "Senegal", "dial_code": "+221", "code": "SN" }, { "name": "Serbia", "dial_code": "+381", "code": "RS" }, { "name": "Seychelles", "dial_code": "+248", "code": "SC" }, { "name": "Sierra Leone", "dial_code": "+232", "code": "SL" }, { "name": "Singapore", "dial_code": "+65", "code": "SG" }, { "name": "Slovakia", "dial_code": "+421", "code": "SK" }, { "name": "Slovenia", "dial_code": "+386", "code": "SI" }, { "name": "Solomon Islands", "dial_code": "+677", "code": "SB" }, { "name": "South Africa", "dial_code": "+27", "code": "ZA" }, { "name": "South Georgia and the South Sandwich Islands", "dial_code": "+500", "code": "GS" }, { "name": "Spain", "dial_code": "+34", "code": "ES" }, { "name": "Sri Lanka", "dial_code": "+94", "code": "LK" }, { "name": "Sudan", "dial_code": "+249", "code": "SD" }, { "name": "Suriname", "dial_code": "+597", "code": "SR" }, { "name": "Swaziland", "dial_code": "+268", "code": "SZ" }, { "name": "Sweden", "dial_code": "+46", "code": "SE" }, { "name": "Switzerland", "dial_code": "+41", "code": "CH" }, { "name": "Tajikistan", "dial_code": "+992", "code": "TJ" }, { "name": "Thailand", "dial_code": "+66", "code": "TH" }, { "name": "Togo", "dial_code": "+228", "code": "TG" }, { "name": "Tokelau", "dial_code": "+690", "code": "TK" }, { "name": "Tonga", "dial_code": "+676", "code": "TO" }, { "name": "Trinidad and Tobago", "dial_code": "+1 868", "code": "TT" }, { "name": "Tunisia", "dial_code": "+216", "code": "TN" }, { "name": "Turkey", "dial_code": "+90", "code": "TR" }, { "name": "Turkmenistan", "dial_code": "+993", "code": "TM" }, { "name": "Turks and Caicos Islands", "dial_code": "+1 649", "code": "TC" }, { "name": "Tuvalu", "dial_code": "+688", "code": "TV" }, { "name": "Uganda", "dial_code": "+256", "code": "UG" }, { "name": "Ukraine", "dial_code": "+380", "code": "UA" }, { "name": "United Arab Emirates", "dial_code": "+971", "code": "AE" }, { "name": "United Kingdom", "dial_code": "+44", "code": "GB" }, { "name": "United States", "dial_code": "+1", "code": "US" }, { "name": "Uruguay", "dial_code": "+598", "code": "UY" }, { "name": "Uzbekistan", "dial_code": "+998", "code": "UZ" }, { "name": "Vanuatu", "dial_code": "+678", "code": "VU" }, { "name": "Wallis and Futuna", "dial_code": "+681", "code": "WF" }, { "name": "Yemen", "dial_code": "+967", "code": "YE" }, { "name": "Zambia", "dial_code": "+260", "code": "ZM" }, { "name": "Zimbabwe", "dial_code": "+263", "code": "ZW" }, { "name": "land Islands", "dial_code": "", "code": "AX" }, { "name": "Antarctica", "dial_code": null, "code": "AQ" }, { "name": "Bolivia, Plurinational State of", "dial_code": "+591", "code": "BO" }, { "name": "Brunei Darussalam", "dial_code": "+673", "code": "BN" }, { "name": "Cocos (Keeling) Islands", "dial_code": "+61", "code": "CC" }, { "name": "Congo, The Democratic Republic of the", "dial_code": "+243", "code": "CD" }, { "name": "Cote d'Ivoire", "dial_code": "+225", "code": "CI" }, { "name": "Falkland Islands (Malvinas)", "dial_code": "+500", "code": "FK" }, { "name": "Guernsey", "dial_code": "+44", "code": "GG" }, { "name": "Holy See (Vatican City State)", "dial_code": "+379", "code": "VA" }, { "name": "Hong Kong", "dial_code": "+852", "code": "HK" }, { "name": "Iran, Islamic Republic of", "dial_code": "+98", "code": "IR" }, { "name": "Isle of Man", "dial_code": "+44", "code": "IM" }, { "name": "Jersey", "dial_code": "+44", "code": "JE" }, { "name": "Korea, Democratic People's Republic of", "dial_code": "+850", "code": "KP" }, { "name": "Korea, Republic of", "dial_code": "+82", "code": "KR" }, { "name": "Lao People's Democratic Republic", "dial_code": "+856", "code": "LA" }, { "name": "Libyan Arab Jamahiriya", "dial_code": "+218", "code": "LY" }, { "name": "Macao", "dial_code": "+853", "code": "MO" }, { "name": "Macedonia, The Former Yugoslav Republic of", "dial_code": "+389", "code": "MK" }, { "name": "Micronesia, Federated States of", "dial_code": "+691", "code": "FM" }, { "name": "Moldova, Republic of", "dial_code": "+373", "code": "MD" }, { "name": "Mozambique", "dial_code": "+258", "code": "MZ" }, { "name": "Palestinian Territory, Occupied", "dial_code": "+970", "code": "PS" }, { "name": "Pitcairn", "dial_code": "+872", "code": "PN" }, { "name": "Réunion", "dial_code": "+262", "code": "RE" }, { "name": "Russia", "dial_code": "+7", "code": "RU" }, { "name": "Saint Barthélemy", "dial_code": "+590", "code": "BL" }, { "name": "Saint Helena, Ascension and Tristan Da Cunha", "dial_code": "+290", "code": "SH" }, { "name": "Saint Kitts and Nevis", "dial_code": "+1 869", "code": "KN" }, { "name": "Saint Lucia", "dial_code": "+1 758", "code": "LC" }, { "name": "Saint Martin", "dial_code": "+590", "code": "MF" }, { "name": "Saint Pierre and Miquelon", "dial_code": "+508", "code": "PM" }, { "name": "Saint Vincent and the Grenadines", "dial_code": "+1 784", "code": "VC" }, { "name": "Sao Tome and Principe", "dial_code": "+239", "code": "ST" }, { "name": "Somalia", "dial_code": "+252", "code": "SO" }, { "name": "Svalbard and Jan Mayen", "dial_code": "+47", "code": "SJ" }, { "name": "Syrian Arab Republic", "dial_code": "+963", "code": "SY" }, { "name": "Taiwan, Province of China", "dial_code": "+886", "code": "TW" }, { "name": "Tanzania, United Republic of", "dial_code": "+255", "code": "TZ" }, { "name": "Timor-Leste", "dial_code": "+670", "code": "TL" }, { "name": "Venezuela, Bolivarian Republic of", "dial_code": "+58", "code": "VE" }, { "name": "Viet Nam", "dial_code": "+84", "code": "VN" }, { "name": "Virgin Islands, British", "dial_code": "+1 284", "code": "VG" }, { "name": "Virgin Islands, U.S.", "dial_code": "+1 340", "code": "VI" }]);
//# sourceMappingURL=countries.js.map

/***/ }),

/***/ 1118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageFormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_account_account__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_page_page__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_loading_loading__ = __webpack_require__(18);
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
 * Generated class for the PageFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PageFormPage = /** @class */ (function () {
    function PageFormPage(navCtrl, navParams, viewCtrl, camera, platform, alertCtrl, accountProvider, pageProvider, loading) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.camera = camera;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.accountProvider = accountProvider;
        this.pageProvider = pageProvider;
        this.loading = loading;
        this.data = {
            pageName: '',
            description: '',
            photoURL: null,
            coverPhotoURL: null,
            website: ''
        };
        this.step = 1;
        this.image = 'assets/imgs/profile/cover-photo.png';
        this.accountProvider.getAccount(null).subscribe(function (data) {
            _this.account = data;
            console.log(_this.account);
        });
    }
    PageFormPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PageFormPage');
    };
    PageFormPage.prototype.createPage = function () {
        var _this = this;
        if (this.step < 5) {
            this.step += 1;
        }
        else {
            this.loading.show();
            this.pageProvider.createPage(this.account, this.data).then(function (data) {
                _this.loading.hide();
                _this.viewCtrl.dismiss();
            });
        }
    };
    // Choose Page Picture
    PageFormPage.prototype.choosePagePicture = function () {
        var _this = this;
        // Ask if the user wants to take a photo or choose from photo gallery.
        var alert = this.alertCtrl.create({
            title: 'Select Page Picture',
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
                            _this.data.photoURL = 'data:image/jpeg;base64,' + imageData;
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
                            _this.data.photoURL = 'data:image/jpeg;base64,' + imageData;
                        });
                    }
                }
            ]
        }).present();
    };
    // Choose Page Cover Picture
    PageFormPage.prototype.choosePageCoverPicture = function () {
        var _this = this;
        // Ask if the user wants to take a photo or choose from photo gallery.
        var alert = this.alertCtrl.create({
            title: 'Select Page Cover Picture',
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
                            _this.data.coverPhotoURL = 'data:image/jpeg;base64,' + imageData;
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
                            _this.data.coverPhotoURL = 'data:image/jpeg;base64,' + imageData;
                        });
                    }
                }
            ]
        }).present();
    };
    PageFormPage.prototype.close = function () {
        if (this.step === 1) {
            this.viewCtrl.dismiss();
        }
        else {
            this.step -= 1;
        }
    };
    PageFormPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-page-form',template:/*ion-inline-start:"E:\1_FacebookClone\1_CleanScript\Product\FacebookCloneV3\src\pages\page-form\page-form.html"*/'<!--\n  Generated template for the PageFormPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-toolbar>\n    <button (click)="close()" ion-button icon-only menuToggle>\n      <ion-icon name="md-arrow-round-back"></ion-icon>\n    </button>\n\n    <ion-title>\n      Create Your Page\n    </ion-title>\n\n    <ion-buttons end>\n      <button *ngIf="step > 2" (click)="createPage()" ion-button>\n        Skip\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <div *ngIf="step === 1" class="step1-div" padding>\n    <h3>\n      Connect with your audience on Facebook\n    </h3>\n    <div class="text">\n      Businesses, brands and orginization can create a free Page in just a few steps\n    </div>\n    <img src="assets/imgs/connect-with-your-audience.png" />\n    <button ion-button block (click)="step = step + 1">GET STARTED</button>\n  </div>\n\n  <div *ngIf="step === 2" class="step2-div">\n    <img src="assets/imgs/Name-your-page.png" />\n    <div padding text-center>\n      <h3> Name your Page </h3>\n      <div>\n        Choose a name that reflects what your Page is about\n      </div>\n      <ion-item>\n        <ion-input placeholder="Page Name" [(ngModel)]="data.pageName" type="text"></ion-input>\n      </ion-item>\n      <button [disabled]="!data.pageName" ion-button block (click)="step = step + 1">NEXT</button>\n    </div>\n  </div>\n\n  <div *ngIf="step === 3" class="step3-div" text-center>\n    <img src="assets/imgs/add-your-website.png" style="max-width: 75%" />\n    <div padding text-center>\n      <div>\n        Send people to your website from your Page\n      </div>\n      <ion-item>\n        <ion-input placeholder="http://" [(ngModel)]="data.website" type="text"></ion-input>\n      </ion-item>\n      <p>You can skip this step if you dont have a website</p>\n      <button ion-button block (click)="createPage()">NEXT</button>\n    </div>\n  </div>\n\n  <div *ngIf="step === 4" class="step4-div">\n    <img *ngIf="!data.coverPhotoURL" src="assets/imgs/Blue-BG.png" style="object-fit: cover" />\n    <img *ngIf="data.coverPhotoURL" src="{{ data.coverPhotoURL }}" style="object-fit: cover" />\n    <div padding text-center>\n      <ion-list>\n        <ion-item>\n          <ion-thumbnail item-start>\n            <img *ngIf="!data.photoURL" src="assets/imgs/Blue-BG.png" width="70" height="70">\n            <img *ngIf="data.photoURL" src="{{ data.photoURL }}" width="70" height="70">\n          </ion-thumbnail>\n          <h2>{{ data.pageName }}</h2>\n        </ion-item>\n      </ion-list>\n      <div>\n        Pages with profile pictures show up higher in search results\n      </div>\n\n      <button ion-button block (click)="choosePagePicture()" outline>ADD A PROFILE PICTURE</button>\n\n      <p>A square photo or logo works well here</p>\n\n      <button ion-button block (click)="createPage()">NEXT</button>\n    </div>\n  </div>\n\n\n\n  <div *ngIf="step === 5" class="step5-div">\n    <img *ngIf="!data.coverPhotoURL" src="assets/imgs/Blue-BG.png" style="object-fit: cover" />\n    <img *ngIf="data.coverPhotoURL" src="{{ data.coverPhotoURL }}" style="object-fit: cover" />\n    <div padding text-center>\n      <ion-list>\n        <ion-item>\n          <ion-thumbnail item-start>\n            <img *ngIf="!data.photoURL" src="assets/imgs/Blue-BG.png" width="70" height="70">\n            <img *ngIf="data.photoURL" src="{{ data.photoURL }}" width="70" height="70">\n          </ion-thumbnail>\n          <h2>{{ data.pageName }}</h2>\n        </ion-item>\n      </ion-list>\n      <div>\n        Pages with cover pictures show up higher in search results\n      </div>\n\n      <button ion-button block (click)="choosePageCoverPicture()" outline>ADD A COVER PICTURE</button>\n\n      <p>High resolution horizontal images work well here</p>\n\n      <button ion-button block (click)="createPage()">Create Page</button>\n    </div>\n  </div>\n\n\n</ion-content>'/*ion-inline-end:"E:\1_FacebookClone\1_CleanScript\Product\FacebookCloneV3\src\pages\page-form\page-form.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_account_account__["a" /* AccountProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_page_page__["a" /* PageProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_loading_loading__["a" /* LoadingProvider */]])
    ], PageFormPage);
    return PageFormPage;
}());

//# sourceMappingURL=page-form.js.map

/***/ }),

/***/ 1119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_account_account__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_timeline_timeline__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_loading_loading__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__comments_comments__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__reactions_popover_reactions_popover__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_page_page__ = __webpack_require__(71);
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









/**
 * Generated class for the PageProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PageProfilePage = /** @class */ (function () {
    function PageProfilePage(navCtrl, actionSheetCtrl, popoverCtrl, timelineProvider, accountProvider, modalCtrl, platform, loadingProvider, camera, navParams, loadingController, alertCtrl, pageProvider) {
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
        this.pageProvider = pageProvider;
        this.pageId = null;
        this.posts = [];
        this.pictureCount = 0;
        this.view = "posts";
        this.timeline = [];
        this.photos = [];
        this.pageId = this.navParams.get('pageId');
        if (!this.pageId)
            this.pageId = null;
        this.loadingController.show();
        this.pageProvider.getPageDetail(this.pageId).subscribe(function (data) {
            _this.pageDetails = data;
            _this.pageDetails.uid = _this.pageId;
            _this.placeholder = "Write Someting to " + _this.pageDetails.pageName;
            console.log('pageDetails', _this.pageDetails);
            _this.accountProvider.getAccount(null).subscribe(function (user) {
                _this.currentUser = user;
                console.log('Cuurent User', _this.currentUser);
            });
            _this.loadingController.hide();
        });
    }
    PageProfilePage.prototype.getPagePosts = function () {
        var _this = this;
        this.timelineProvider.getAllPosts().subscribe(function (data) {
            _this.timeline = [];
            data.map(function (a) {
                var data = a.payload.doc.data();
                var uid = a.payload.doc.id;
                if (data.pageId && data.pageId === _this.pageId) {
                    debugger;
                    _this.timeline.push(__assign({ uid: uid }, data));
                }
            });
            for (var i = 0; i < _this.timeline.length; i++) {
                if (_this.timeline[i].photoURL) {
                    _this.photos.push(_this.timeline[i].photoURL);
                }
            }
            console.log('Photos', _this.photos);
            console.log('page timeline', _this.timeline);
        });
    };
    PageProfilePage.prototype.addPost = function () {
        this.modalCtrl.create('AddPostPage', { is_edit: false, pageId: this.pageId, pageName: this.pageDetails.pageName }).present();
    };
    PageProfilePage.prototype.editPage = function () {
        this.navCtrl.push('AddPageDetailsPage', { page: this.pageDetails });
    };
    PageProfilePage.prototype.ionViewDidLoad = function () {
    };
    PageProfilePage.prototype.showPostComments = function (post) {
        var commentsModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__comments_comments__["a" /* CommentsPage */]);
        commentsModal.present();
    };
    PageProfilePage.prototype.ionViewWillEnter = function () {
        this.getPagePosts();
    };
    // Update Profile Photo
    PageProfilePage.prototype.changeProfilePhoto = function () {
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
                            _this.pageDetails.photoURL = 'data:image/jpeg;base64,' + imageData;
                            _this.loadingController.show();
                            _this.pageProvider.updatePage(_this.pageDetails, _this.pageId).then(function () {
                                console.log('Updated Page', _this.pageDetails);
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
                            _this.pageDetails.photoURL = 'data:image/jpeg;base64,' + imageData;
                            _this.loadingController.show();
                            _this.pageProvider.updatePage(_this.pageDetails, _this.pageId).then(function () {
                                console.log('Updated Page', _this.pageDetails);
                                _this.loadingController.hide();
                            });
                        });
                    }
                }
            ]
        }).present();
    };
    // Update Cover Photo
    PageProfilePage.prototype.changeCoverPhoto = function () {
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
                            _this.pageDetails.coverPhotoURL = 'data:image/jpeg;base64,' + imageData;
                            _this.loadingController.show();
                            _this.pageProvider.updatePage(_this.pageDetails, _this.pageId).then(function () {
                                console.log('Updated Page', _this.pageDetails);
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
                            _this.pageDetails.coverPhotoURL = 'data:image/jpeg;base64,' + imageData;
                            _this.loadingController.show();
                            _this.pageProvider.updatePage(_this.pageDetails, _this.pageId).then(function () {
                                console.log('Updated Page', _this.pageDetails);
                                _this.loadingController.hide();
                            });
                        });
                    }
                }
            ]
        }).present();
    };
    PageProfilePage.prototype.addDetails = function () {
        // this.navCtrl.push(ProfileAddDetailsPage, { account: this.account })
    };
    PageProfilePage.prototype.isLikedPage = function (page) {
        var is_liked = false;
        if (page.followers && page.followers.length > 0) {
            for (var i = 0; i < page.followers.length; i++) {
                if (page.followers[i].user === this.currentUser.uid) {
                    is_liked = true;
                }
            }
            return is_liked;
        }
    };
    PageProfilePage.prototype.openBrowser = function (url) {
        if (!url.includes('//'))
            url = 'http://' + url;
        window.open(url);
    };
    PageProfilePage.prototype.postOnPage = function () {
        this.modalCtrl.create('PostOnPage', { is_edit: false, pageId: this.pageDetails.uid, pageDetails: this.pageDetails }).present();
    };
    PageProfilePage.prototype.likePage = function (uid) {
        this.pageProvider.likeAndFollowPage(uid, this.currentUser);
    };
    PageProfilePage.prototype.dislikePage = function (uid) {
        this.pageProvider.dislikeAndunFollowPage(uid, this.currentUser);
    };
    PageProfilePage.prototype.goToReactions = function () {
        this.navCtrl.push('PostReactionsPage');
    };
    PageProfilePage.prototype.showReactionsPopOver = function (event) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_7__reactions_popover_reactions_popover__["a" /* ReactionsPopoverPage */]);
        popover.present({
            ev: event
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */])
    ], PageProfilePage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('video'),
        __metadata("design:type", Object)
    ], PageProfilePage.prototype, "video", void 0);
    PageProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-page-profile',template:/*ion-inline-start:"E:\1_FacebookClone\1_CleanScript\Product\FacebookCloneV3\src\pages\page-profile\page-profile.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{ pageDetails ? pageDetails.pageName : \'\' }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding *ngIf="pageDetails && currentUser" class="has-header">\n  <div class="profile-picture-container">\n    <div>\n      <img *ngIf="pageDetails.coverPhotoURL" class="cover-img" src="{{ pageDetails.coverPhotoURL }}">\n      <img *ngIf="!pageDetails.coverPhotoURL" class="cover-img" style="height: 170px" src="assets/imgs/Blue-BG.png">\n      <p class="photo-button" *ngIf="pageDetails.ownerId === currentUser.uid && !pageDetails.coverPhotoURL" (click)="changeCoverPhoto()">\n        <ion-icon name="md-camera"></ion-icon> Add Cover Photo\n      </p>\n    </div>\n\n\n    <div text-center style="position: relative">\n      <img class="profile-picture" *ngIf="pageDetails.photoURL" src="{{ pageDetails.photoURL }}">\n      <img class="profile-picture" *ngIf="!pageDetails.photoURL" src="assets/imgs/buddy.png">\n      <p class="photo-button" style="top: 10px" *ngIf="pageDetails.ownerId === currentUser.uid && !pageDetails.photoURL" (click)="changeProfilePhoto()">\n        <ion-icon name="md-camera"></ion-icon> Photo\n      </p>\n    </div>\n  </div>\n\n  <ion-card class="profile-details-card">\n    <ion-col text-center>\n      <p class="username">{{ pageDetails.pageName }}</p>\n      <p class="page-description">{{ pageDetails.description }}</p>\n    </ion-col>\n\n    <ion-row style="margin-top: -20px;">\n      <ion-col text-center *ngIf="!isLikedPage(pageDetails)">\n        <button ion-button clear (click)="likePage(pageDetails.uid)">\n          <ion-icon name="ios-thumbs-up-outline" style="font-size: 2.5rem"></ion-icon>\n          <p style="margin-top: 10px;margin-left: 5px;color: #3b5998">{{ pageDetails && pageDetails.likes && pageDetails.likes.length\n            }}\n          </p>\n        </button>\n        <p>Like</p>\n      </ion-col>\n      <ion-col text-center *ngIf="isLikedPage(pageDetails)">\n        <button ion-button clear (click)="dislikePage(pageDetails.uid)">\n          <ion-icon name="ios-thumbs-up" style="font-size: 2.5rem">\n          </ion-icon>\n          <p style="margin-top: 10px;margin-left: 5px;color: #3b5998">{{ pageDetails && pageDetails.likes && pageDetails.likes.length\n            }}\n          </p>\n        </button>\n        <p style="color: #3b5998">Liked</p>\n      </ion-col>\n\n\n      <ion-col text-center *ngIf="!isLikedPage(pageDetails)">\n        <button ion-button icon-only clear (click)="likePage(pageDetails.uid)">\n          <ion-icon name="ios-add-outline"></ion-icon>\n        </button>\n        <p>Follow</p>\n      </ion-col>\n      <ion-col text-center *ngIf="isLikedPage(pageDetails)">\n        <button ion-button icon-only clear (click)="dislikePage(pageDetails.uid)">\n          <ion-icon style="color: #3b5998;font-size: 3em" name="ios-checkmark-outline"></ion-icon>\n        </button>\n        <p style="color: #3b5998">Following</p>\n      </ion-col>\n\n      <ion-col text-center *ngIf="pageDetails.ownerId === currentUser.uid" (click)="editPage()">\n        <button ion-button icon-only clear>\n          <ion-icon name="md-create"></ion-icon>\n        </button>\n        <p>Edit Page</p>\n      </ion-col>\n\n      <ion-col text-center (click)="addPost()" *ngIf="pageDetails.ownerId === currentUser.uid">\n        <button ion-button icon-only clear>\n          <ion-icon name="ios-create"></ion-icon>\n        </button>\n        <p>Post</p>\n      </ion-col>\n\n\n    </ion-row>\n\n    <ion-item style="padding: 10px;height: 50px" *ngIf="pageDetails.currentCity">\n      <ion-icon style="margin-bottom: 0px" name="ios-home-outline" item-start></ion-icon>\n      <p>Current City\n        <strong>{{ this.pageDetails.currentCity }}</strong>\n      </p>\n    </ion-item>\n\n    <ion-item style="padding: 10px;height: 50px" *ngIf="pageDetails.hometown">\n      <ion-icon style="margin-bottom: 0px" name="ios-home-outline" item-start></ion-icon>\n      <p>From\n        <strong>{{ this.pageDetails.hometown }}</strong>\n      </p>\n    </ion-item>\n\n    <ion-item style="padding: 10px;height: 50px" *ngIf="pageDetails.hometown">\n      <ion-icon style="margin-bottom: 0px" name="ios-home-outline" item-start></ion-icon>\n      <p>Lives in\n        <strong>{{ this.pageDetails.hometown }}</strong>\n      </p>\n    </ion-item>\n\n    <ion-item style="padding: 10px;height: 50px" *ngIf="pageDetails.education">\n      <ion-icon style="margin-bottom: 0px" name="ios-school-outline" item-start></ion-icon>\n      <p>Education\n        <strong>{{ this.pageDetails.education }}</strong>\n      </p>\n    </ion-item>\n\n    <ion-item style="padding: 10px;height: 50px" *ngIf="pageDetails.workPlace">\n      <ion-icon style="margin-bottom: 0px" name="ios-briefcase-outline" item-start></ion-icon>\n      <p>Work Place\n        <strong>{{ this.pageDetails.workPlace }}</strong>\n      </p>\n    </ion-item>\n\n\n    <ion-item style="padding: 10px;height: 50px" *ngIf="pageDetails.website">\n      <ion-icon style="margin-bottom: 0px" name="logo-chrome" item-start></ion-icon>\n      <p>Website\n        <strong (click)="openBrowser(pageDetails.website)">{{ this.pageDetails.website }}</strong>\n      </p>\n    </ion-item>\n\n    <ion-row>\n      <ion-col text-center>\n        <button ion-button icon-only clear>ABOUT</button>\n      </ion-col>\n\n      <ion-col text-center>\n        <button ion-button icon-only clear>PHOTOS</button>\n      </ion-col>\n\n      <!-- <ion-col text-center>\n        <button ion-button icon-only clear>FRIENDS</button>\n      </ion-col> -->\n    </ion-row>\n  </ion-card>\n\n  <ion-card class="write-post-card">\n    <ion-item (click)="addPost()">\n      <ion-avatar item-start>\n        <img *ngIf="pageDetails.photoURL" src="{{ pageDetails.photoURL }}">\n        <img *ngIf="!pageDetails.photoURL" src="assets/imgs/buddy.png">\n      </ion-avatar>\n\n      <span style="color: #999">{{ placeholder }}</span>\n    </ion-item>\n\n    <ion-row>\n      <ion-col text-center>\n        <button ion-button clear>\n          <ion-icon name="md-create" item-start></ion-icon>\n          <p>PHOTOS</p>\n        </button>\n      </ion-col>\n\n      <!-- <ion-col text-center>\n        <button ion-button clear>\n          <ion-icon name="md-images" item-start></ion-icon>\n          <p>FRIENDS</p>\n        </button>\n      </ion-col> -->\n    </ion-row>\n  </ion-card>\n\n  <ion-card class="photos-card">\n    <ion-item>\n      <ion-icon class="card-icon" name="md-images" item-start></ion-icon>\n      <p class="card-title">Photos</p>\n    </ion-item>\n\n    <ion-col *ngFor="let photo of photos">\n      <img class="top-picture" src="{{ photo }}" style="width: 50%;">\n    </ion-col>\n\n    <!-- <ion-col>\n        <img class="top-picture" src="https://res.cloudinary.com/cediim8/image/upload/v1521094006/newsfeed/pexels-photo-414171-min.jpg"\n          style="width: 100%;">\n      </ion-col> -->\n\n    <!-- <ion-row>\n      <ion-col>\n        <img class="bottom-picture" src="https://res.cloudinary.com/cediim8/image/upload/v1521094006/newsfeed/pexels-photo-462867-min.jpg"\n          style="width: 100%;">\n      </ion-col>\n\n      <ion-col>\n        <img class="bottom-picture" src="https://res.cloudinary.com/cediim8/image/upload/v1521094006/newsfeed/pexels-photo-704965-min.jpg"\n          style="width: 100%;">\n      </ion-col>\n\n      <ion-col>\n        <img class="bottom-picture" src="https://res.cloudinary.com/cediim8/image/upload/v1521094006/newsfeed/pexels-photo-736414-min.jpg"\n          style="width: 100%;">\n      </ion-col>\n    </ion-row> -->\n\n    <ion-row *ngIf="photos.length > 4">\n      <ion-col text-center>\n        <button class="card-footer" ion-button clear>\n          <p>See All Photos</p>\n          <ion-icon name="ios-arrow-forward" item-start></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-card class="posts-card">\n    <p class="card-title">Posts</p>\n  </ion-card>\n\n  <page-post-list [timeline]="timeline" [pageName]="pageDetails.pageName" [pageOwner]="pageDetails.ownerId" [pagePic]="pageDetails.photoURL"></page-post-list>\n</ion-content>'/*ion-inline-end:"E:\1_FacebookClone\1_CleanScript\Product\FacebookCloneV3\src\pages\page-profile\page-profile.html"*/,
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
            __WEBPACK_IMPORTED_MODULE_8__providers_page_page__["a" /* PageProvider */]])
    ], PageProfilePage);
    return PageProfilePage;
}());

//# sourceMappingURL=page-profile.js.map

/***/ }),

/***/ 1120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_page_page__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_loading_loading__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_account_account__ = __webpack_require__(23);
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





/**
 * Generated class for the Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PagesList = /** @class */ (function () {
    function PagesList(navCtrl, navParams, modalCtrl, pageProvider, loading, accountProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.pageProvider = pageProvider;
        this.loading = loading;
        this.accountProvider = accountProvider;
        this.ownedPages = [];
        this.likedPages = [];
        this.is_likes = this.navParams.get('likePages');
        this.accountProvider.getAccount(null).subscribe(function (data) {
            _this.account = data;
        });
    }
    PagesList.prototype.ionViewWillEnter = function () {
        this.getOwnedPages();
        this.getLikePages();
        // if (this.is_likes) {
        //   this.getLikePages()
        // }
        // else {
        //   this.getAllPages()
        // }
    };
    PagesList.prototype.getOwnedPages = function () {
        var _this = this;
        this.loading.show();
        this.pageProvider.getPages().subscribe(function (data) {
            console.log('page Data', data);
            _this.ownedPages = [];
            data.map(function (a) {
                var data = a.payload.doc.data();
                var uid = a.payload.doc.id;
                if (data.ownerId === _this.account.uid) {
                    _this.ownedPages.push(__assign({ uid: uid }, data));
                }
            });
            _this.loading.hide();
            console.log('All Owned Pages', _this.ownedPages);
        });
    };
    PagesList.prototype.getLikePages = function () {
        var _this = this;
        this.loading.show();
        this.pageProvider.getPages().subscribe(function (data) {
            console.log('page Data', data);
            _this.likedPages = [];
            data.map(function (a) {
                var data = a.payload.doc.data();
                var uid = a.payload.doc.id;
                if (data.likes) {
                    for (var i = 0; i < data.likes.length; i++) {
                        if (data.likes[i].user === _this.account.uid) {
                            _this.likedPages.push(__assign({ uid: uid }, data));
                        }
                    }
                }
            });
            _this.loading.hide();
            console.log('All likedPages', _this.likedPages);
        });
    };
    PagesList.prototype.getAllPages = function () {
        var _this = this;
        this.loading.show();
        this.pageProvider.getPages().subscribe(function (data) {
            console.log('page Data', data);
            _this.pages = [];
            data.map(function (a) {
                var data = a.payload.doc.data();
                var uid = a.payload.doc.id;
                _this.pages.push(__assign({ uid: uid }, data));
            });
            _this.loading.hide();
            console.log('All Pages', _this.pages);
        });
    };
    PagesList.prototype.goToPage = function (uid) {
        this.navCtrl.push('PageProfilePage', { pageId: uid });
    };
    PagesList.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PagesList');
    };
    PagesList.prototype.createPage = function () {
        this.modalCtrl.create('PageFormPage').present();
    };
    PagesList = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-page',template:/*ion-inline-start:"E:\1_FacebookClone\1_CleanScript\Product\FacebookCloneV3\src\pages\page\page.html"*/'<ion-header>\n\n	<ion-navbar>\n		<ion-title>{{ is_likes ? \'Like Pages\' : \'Pages\' }}</ion-title>\n	</ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="content">\n\n\n	<ion-card class="ownedPages-card">\n		<ion-row class="top-row">\n			<div style="display: flex">\n				<img src="assets/imgs/page-icon.jpg" style="width: 22px;height: 22px">\n				<p class="card-title">Owned Pages</p>\n			</div>\n			<div style="display: flex" (click)="createPage()">\n				<ion-icon name="add" style="font-size: 1.3em;color: #999"></ion-icon>\n				<p class="card-title">Create</p>\n			</div>\n		</ion-row>\n\n		<ion-list>\n			<ion-item *ngFor="let page of ownedPages">\n				<ion-thumbnail item-start (click)="goToPage(page.uid)" style="min-height: 50px;min-width: 50px">\n					<img *ngIf="page.photoURL" src="{{ page.photoURL }}" style="width: 50px;height: 50px">\n					<img *ngIf="!page.photoURL" src="assets/imgs/Blue-BG.png" style="width: 50px;height: 50px">\n				</ion-thumbnail>\n\n				<h2>{{ page.pageName }}</h2>\n			</ion-item>\n		</ion-list>\n		<ion-row>\n			<ion-col text-center>\n				<button class="card-footer" ion-button clear>\n					<p>See All</p>\n				</button>\n			</ion-col>\n		</ion-row>\n	</ion-card>\n\n	<ion-card class="likesPages-card">\n		<ion-row class="top-row">\n			<div style="display: flex">\n				<img src="assets/imgs/settings/like-pages.png" style="width: 22px;height: 22px">\n				<p class="card-title">Liked Pages</p>\n			</div>\n		</ion-row>\n\n		<ion-list>\n			<ion-item *ngFor="let page of likedPages">\n				<ion-thumbnail item-start (click)="goToPage(page.uid)" style="min-height: 50px;min-width: 50px">\n					<img *ngIf="page.photoURL" src="{{ page.photoURL }}" style="width: 50px;height: 50px">\n					<img *ngIf="!page.photoURL" src="assets/imgs/Blue-BG.png" style="width: 50px;height: 50px">\n				</ion-thumbnail>\n\n				<h2>{{ page.pageName }}</h2>\n			</ion-item>\n		</ion-list>\n		<ion-row>\n			<ion-col text-center>\n				<button class="card-footer" ion-button clear>\n					<p>See All</p>\n				</button>\n			</ion-col>\n		</ion-row>\n	</ion-card>\n\n</ion-content>'/*ion-inline-end:"E:\1_FacebookClone\1_CleanScript\Product\FacebookCloneV3\src\pages\page\page.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_page_page__["a" /* PageProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_account_account__["a" /* AccountProvider */]])
    ], PagesList);
    return PagesList;
}());

//# sourceMappingURL=page.js.map

/***/ }),

/***/ 1121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchUserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_account_account__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_loading_loading__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchUserPage = /** @class */ (function () {
    function SearchUserPage(navCtrl, navParams, viewCtrl, accountProvider, loading) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.accountProvider = accountProvider;
        this.loading = loading;
        this.users = [];
        this.userList = [];
        this.searchStr = '';
        this.chat = true;
        this.accountProvider.getAccount(null).subscribe(function (data) {
            _this.account = data;
            console.log(_this.account);
            _this.title = _this.navParams.get('title');
            _this.chat = _this.navParams.get('chat');
        });
    }
    SearchUserPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.loading.show();
        this.accountProvider.getUsers().subscribe(function (data) {
            _this.userList = [];
            _this.users = [];
            _this.userList = data;
            _this.userList = _this.userList.filter(function (item) { return item.uid !== _this.account.uid; });
            if (_this.title === 'All Users') {
                data.map(function (item) {
                    _this.users.push(item);
                });
                console.log(_this.users);
            }
            else {
                _this.users = data.filter(function (item) { return _this.account.following && _this.account.following[item.uid] ? item : null; });
                console.log(_this.users);
            }
            _this.users = _this.users.filter(function (item) { return item.uid !== _this.account.uid; });
            _this.loading.hide();
        });
    };
    SearchUserPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    SearchUserPage.prototype.search = function (ev) {
        var _this = this;
        this.searchStr = ev.target.value;
        if (this.searchStr && this.searchStr.trim() != '') {
            this.users = this.userList.filter(function (item) {
                return (item.name.toLowerCase().indexOf(_this.searchStr.toLowerCase()) > -1 ||
                    item.username.toLowerCase().indexOf(_this.searchStr.toLowerCase()) > -1);
            });
        }
        else {
            this.users = this.userList.filter(function (item) {
                return _this.account.following[item.uid] ? item : null;
            });
        }
    };
    SearchUserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search-user',template:/*ion-inline-start:"E:\1_FacebookClone\1_CleanScript\Product\FacebookCloneV3\src\pages\search-user\search-user.html"*/'<ion-header>\n\n\n\n  <ion-toolbar>\n\n    <button (click)="close()" ion-button icon-left menuToggle>\n\n      <ion-icon name="arrow-back"></ion-icon>\n\n    </button>\n\n\n\n    <ion-title>\n\n      {{ title }}\n\n    </ion-title>\n\n\n\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-searchbar placeholder="Search by name" (ionInput)="search($event)"></ion-searchbar>\n\n  <user-list [users]="users" [chat]="chat"></user-list>\n\n</ion-content>'/*ion-inline-end:"E:\1_FacebookClone\1_CleanScript\Product\FacebookCloneV3\src\pages\search-user\search-user.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_account_account__["a" /* AccountProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_loading_loading__["a" /* LoadingProvider */]])
    ], SearchUserPage);
    return SearchUserPage;
}());

//# sourceMappingURL=search-user.js.map

/***/ }),

/***/ 1122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_timeline_timeline__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_account_account__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_tabs_tabs__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_page_page__ = __webpack_require__(71);
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






var SearchPage = /** @class */ (function () {
    function SearchPage(navCtrl, navParams, timelineProvider, accountProvider, modalCtrl, tabsProvider, viewCtrl, pageProvide) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.timelineProvider = timelineProvider;
        this.accountProvider = accountProvider;
        this.modalCtrl = modalCtrl;
        this.tabsProvider = tabsProvider;
        this.viewCtrl = viewCtrl;
        this.pageProvide = pageProvide;
        this.view = "posts";
        this.searchStr = '';
        this.timeline = []; //Array<Post>;
        this.pages = [];
        this.imagePosts = [];
        this.list = [];
        this.users = [];
        this.userList = [];
        this.pagesList = [];
        this.accountProvider.getAccount(null).subscribe(function (data) {
            _this.account = data;
            console.log(_this.account);
        });
    }
    SearchPage.prototype.ngDoCheck = function () {
        this.searchStr = this.timelineProvider.searchStr;
    };
    SearchPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.searchStr = this.timelineProvider.searchStr;
        this.timelineProvider.getAllPosts().subscribe(function (data) {
            console.log(data);
            _this.timeline = [];
            _this.list = [];
            data.map(function (a) {
                var data = a.payload.doc.data();
                var uid = a.payload.doc.id;
                _this.list.push(__assign({ uid: uid }, data));
                if (_this.searchStr && _this.searchStr !== '')
                    _this.search({ target: { value: _this.searchStr } });
            });
        });
        this.pageProvide.getPages().subscribe(function (data) {
            data.map(function (a) {
                var data = a.payload.doc.data();
                var uid = a.payload.doc.id;
                _this.pages.push(__assign({ uid: uid }, data));
            });
            console.log('pages', _this.pages);
        });
        this.accountProvider.getUsers().subscribe(function (data) {
            _this.userList = data;
            _this.users = [];
            if (_this.searchStr && _this.searchStr !== '')
                _this.search({ target: { value: _this.searchStr } });
            console.log(_this.users);
        });
        console.log(this.timeline);
    };
    SearchPage.prototype.search = function (ev) {
        var _this = this;
        this.searchStr = ev.target.value;
        if (this.view === 'posts') {
            if (this.searchStr && this.searchStr.trim() != '') {
                this.timeline = this.list.filter(function (item) {
                    return (item.text ? item.text.toLowerCase().indexOf(_this.searchStr.toLowerCase()) > -1 : null);
                });
            }
            else {
                this.timeline = [];
                // this.list.filter((item) => {
                //   console.log(item);
                //   return (item);
                // });
            }
        }
        if (this.view === 'people') {
            if (this.searchStr && this.searchStr.trim() !== '') {
                this.users = this.userList.filter(function (item) {
                    return (item.name.toLowerCase().indexOf(_this.searchStr.toLowerCase()) > -1 ||
                        item.username.toLowerCase().indexOf(_this.searchStr.toLowerCase()) > -1);
                });
            }
            else {
                this.users = [];
                // this.userList.filter((item) => {
                //   return (item);
                // });
            }
        }
        if (this.view === 'pages') {
            if (this.searchStr && this.searchStr.trim() != '') {
                console.log('pages', this.pages);
                console.log('Search', this.searchStr);
                this.pagesList = this.pages.filter(function (item) {
                    return (item.pageName.toLowerCase().indexOf(_this.searchStr.toLowerCase()) > -1);
                });
            }
            else {
                this.pagesList = [];
                // this.list.filter((item) => {
                //   console.log(item);
                //   return (item);
                // }).sort((a, b) => {
                //   return (this.countEv(a.sharing) > this.countEv(b.sharing)) ? -1 :
                //     ((this.countEv(b.sharing) > this.countEv(a.sharing)) ? 1 : 0);
                // });
            }
        }
        if (this.view === 'photos') {
            if (this.searchStr && this.searchStr.trim() != '') {
                this.imagePosts = this.list.filter(function (item) {
                    return ((item.user.toLowerCase().indexOf(_this.searchStr.toLowerCase()) > -1 ||
                        item.text ? item.text.toLowerCase().indexOf(_this.searchStr.toLowerCase()) > -1 : null) &&
                        item.photoURL);
                });
            }
            else {
                this.imagePosts = [];
                // this.list.filter((item) => {
                //   console.log(item);
                //   return (item.photoURL);
                // });
            }
        }
    };
    //Other User Profile
    SearchPage.prototype.goToProfile = function (userId) {
        this.modalCtrl.create('ProfilePage', { userId: userId }).present();
    };
    SearchPage.prototype.countEv = function (obj) {
        if (obj)
            return Object.keys(obj).length;
        return 0;
    };
    SearchPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"E:\1_FacebookClone\1_CleanScript\Product\FacebookCloneV3\src\pages\search\search.html"*/'<!-- <ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Find {{view === \'posts\'? \'Posts\': \'People\'}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header> -->\n\n\n\n<ion-content>\n\n  <ion-toolbar>\n\n    <button (click)="close()" ion-button icon-only clear menuToggle>\n\n      <ion-icon name="arrow-back"></ion-icon>\n\n    </button>\n\n    <ion-searchbar [(ngModel)]="searchStr" (ionInput)="search($event)"></ion-searchbar>\n\n\n\n  </ion-toolbar>\n\n  <ion-segment [(ngModel)]="view">\n\n    <ion-segment-button (click)="search({target:{value: searchStr}})" value="pages">\n\n      Pages\n\n    </ion-segment-button>\n\n    <ion-segment-button (click)="search({target:{value: searchStr}})" value="posts">\n\n      Posts\n\n    </ion-segment-button>\n\n    <ion-segment-button (click)="search({target:{value: searchStr}})" value="people">\n\n      People\n\n    </ion-segment-button>\n\n    <ion-segment-button (click)="search({target:{value: searchStr}})" value="photos">\n\n      Photos\n\n    </ion-segment-button>\n\n  </ion-segment>\n\n\n\n  <div [ngSwitch]="view">\n\n    <div *ngSwitchCase="\'pages\'">\n\n      <page-list [pages]="pagesList"></page-list>\n\n\n\n    </div>\n\n    <div *ngSwitchCase="\'posts\'">\n\n      <timeline [timeline]="timeline"></timeline>\n\n\n\n    </div>\n\n    <div *ngSwitchCase="\'people\'">\n\n      <user-list [users]="users"></user-list>\n\n    </div>\n\n\n\n    <div *ngSwitchCase="\'photos\'">\n\n      <timeline [timeline]="imagePosts"></timeline>\n\n    </div>\n\n  </div>\n\n\n\n\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"E:\1_FacebookClone\1_CleanScript\Product\FacebookCloneV3\src\pages\search\search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_timeline_timeline__["a" /* TimelineProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_account_account__["a" /* AccountProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_tabs_tabs__["a" /* TabsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_page_page__["a" /* PageProvider */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 1123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewPostPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_timeline_timeline__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
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




var ViewPostPage = /** @class */ (function () {
    function ViewPostPage(navCtrl, navParams, timelineProvider, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.timelineProvider = timelineProvider;
        this.viewCtrl = viewCtrl;
        this.post = [];
        this.comments = null;
        this.postId = this.navParams.get('postId');
        console.log('PostId', this.postId);
    }
    ViewPostPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.timelineProvider.getPost(this.postId).subscribe(function (res) {
            _this.post = [];
            _this.post.push(__assign({ uid: _this.postId }, res));
            _this.comments = _this.post[0].comments;
        });
    };
    ViewPostPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    ViewPostPage.prototype.getDate = function (date) {
        return __WEBPACK_IMPORTED_MODULE_3_moment___default()(new Date(date.seconds * 1000)).fromNow();
    };
    ViewPostPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-view-post',template:/*ion-inline-start:"E:\1_FacebookClone\1_CleanScript\Product\FacebookCloneV3\src\pages\view-post\view-post.html"*/'<ion-header>\n\n\n\n  <ion-toolbar>\n\n    <button (click)="close()" ion-button icon-only menuToggle>\n\n      <ion-icon name="arrow-back"></ion-icon>\n\n    </button>\n\n\n\n    <ion-title>\n\n      Post\n\n    </ion-title>\n\n\n\n  </ion-toolbar>\n\n\n\n</ion-header>\n\n<ion-content>\n\n  <timeline class="post" [timeline]="post"></timeline>\n\n  <ion-list *ngIf="comments" padding>\n\n    <ion-item *ngFor="let comment of comments">\n\n      <ion-row>\n\n        <ion-col col-2>\n\n          <ion-avatar>\n\n            <img *ngIf="comment.photoURL" src="{{comment.photoURL}}">\n\n            <img *ngIf="!comment.photoURL" src="assets/imgs/buddy.png">\n\n          </ion-avatar>\n\n        </ion-col>\n\n\n\n        <ion-col col-10>\n\n          <p class="comment-content line-break">\n\n            <strong>{{comment.user}}</strong>\n\n            <br> {{comment.text}}\n\n          </p>\n\n\n\n          <ion-row class="like-reply-row">\n\n            <ion-item>\n\n              <ion-row item-start>\n\n                <p>{{ getDate(comment.createdAt) }}</p>\n\n                <!-- <p>\n\n                  <strong>Like</strong>\n\n                </p>\n\n                <p>\n\n                  <strong>Reply</strong>\n\n                </p> -->\n\n              </ion-row>\n\n\n\n              <!-- <ion-badge item-end (click)="goToReactions()">\n\n                <p>\n\n                  <ion-row>\n\n                    <ion-avatar class="facebook-reaction-icon">\n\n                      <img src="assets/imgs/newsfeed/facebook-like.png">\n\n                    </ion-avatar>\n\n\n\n                    <ion-avatar class="facebook-reaction-icon">\n\n                      <img src="assets/imgs/newsfeed/facebook-laugh.png">\n\n                    </ion-avatar>\n\n                    <p>{{comment.reactionsCount}}</p>\n\n                  </ion-row>\n\n                </p>\n\n              </ion-badge> -->\n\n            </ion-item>\n\n          </ion-row>\n\n\n\n          <!-- <ion-row class="more-replies-row">\n\n            <p (click)="goToReplies()">View {{comment.repliesCount}} more replies</p>\n\n          </ion-row> -->\n\n\n\n          <!-- <ion-row class="last-reply-row">\n\n            <ion-item>\n\n              <ion-avatar item-start>\n\n                <img src="{{comment.subReplyProfilePicture}}">\n\n              </ion-avatar>\n\n\n\n              <p item-end>\n\n                <strong>{{comment.subReplyName}}</strong>\n\n                {{comment.subReplyContent}}\n\n              </p>\n\n            </ion-item>\n\n          </ion-row> -->\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"E:\1_FacebookClone\1_CleanScript\Product\FacebookCloneV3\src\pages\view-post\view-post.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_timeline_timeline__["a" /* TimelineProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */]])
    ], ViewPostPage);
    return ViewPostPage;
}());

//# sourceMappingURL=view-post.js.map

/***/ }),

/***/ 1141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(602);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(603);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(159);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { TabsPage } from '../pages/tabs/tabs';

var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\1_FacebookClone\1_CleanScript\Product\FacebookCloneV3\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"E:\1_FacebookClone\1_CleanScript\Product\FacebookCloneV3\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 1143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    apiKey: "AIzaSyDyIjBhpRg7xGlNOBReEAJW-8DwfMzcIiQ",
    authDomain: "facebookclone-5e121.firebaseapp.com",
    databaseURL: "https://facebookclone-5e121.firebaseio.com",
    projectId: "facebookclone-5e121",
    storageBucket: "facebookclone-5e121.appspot.com",
    messagingSenderId: "848810118244"
});
//# sourceMappingURL=firebaseConfig.js.map

/***/ }),

/***/ 1144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CDVPhotoLibraryPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(76);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// cdvphotolibrary.pipe.ts


var CDVPhotoLibraryPipe = /** @class */ (function () {
    function CDVPhotoLibraryPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    CDVPhotoLibraryPipe.prototype.transform = function (url) {
        return url.startsWith('cdvphotolibrary://') ? this.sanitizer.bypassSecurityTrustUrl(url) : url;
    };
    CDVPhotoLibraryPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({ name: 'cdvphotolibrary' }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
    ], CDVPhotoLibraryPipe);
    return CDVPhotoLibraryPipe;
}());

//# sourceMappingURL=cdvphotolibrary.pipe.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_base64__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_path__ = __webpack_require__(416);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ImageProvider = /** @class */ (function () {
    function ImageProvider(camera, ngZone, base64, filePath) {
        this.camera = camera;
        this.ngZone = ngZone;
        this.base64 = base64;
        this.filePath = filePath;
        this.profilePhotoOptions = {
            quality: 50,
            targetWidth: 384,
            targetHeight: 384,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            correctOrientation: true
        };
        this.photoMessageOptions = {
            quality: 50,
            targetWidth: 300,
            targetHeight: 200,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            correctOrientation: true,
            allowEdit: true,
        };
        this.groupPhotoOptions = {
            quality: 50,
            targetWidth: 384,
            targetHeight: 384,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            correctOrientation: true
        };
        console.log('Hello ImageProvider Provider');
    }
    // Function to convert dataURI to Blob needed by Firebase
    ImageProvider.prototype.imgURItoBlob = function (dataURI) {
        debugger;
        var binary = atob(dataURI.split(',')[1]);
        var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
        var array = [];
        for (var i = 0; i < binary.length; i++) {
            array.push(binary.charCodeAt(i));
        }
        return new Blob([new Uint8Array(array)], {
            type: mimeString
        });
    };
    // Generate a random filename of length for the image to be uploaded
    ImageProvider.prototype.generateFilename = function () {
        var length = 8;
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text + ".jpg";
    };
    ImageProvider.prototype.generateVideoName = function () {
        var length = 8;
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text + ".ogg";
    };
    ImageProvider.prototype.uploadProfilePhoto = function (uid, imageData) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var imgBlob = _this.imgURItoBlob(imageData);
            var metadata = {
                'contentType': imgBlob.type
            };
            __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.storage().ref().child('images/' + uid + '/' + _this.generateFilename()).put(imgBlob, metadata).then(function (snapshot) {
                // Delete previous profile photo on Storage if it exists.
                console.log('Snapshot', snapshot);
                // URL of the uploaded image!
                var url = snapshot.metadata.downloadURLs[0];
                console.log('Photo URL', url);
                resolve(url);
            }).catch(function (error) {
                console.log('Error.up', error);
                reject(error);
            });
        });
    };
    ImageProvider.prototype.uploadPostPhoto = function (uid, imageData) {
        var _this = this;
        debugger;
        return new Promise(function (resolve, reject) {
            console.log(imageData);
            var imgBlob = _this.imgURItoBlob(imageData);
            var metadata = {
                'contentType': imgBlob.type
            };
            __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.storage().ref().child('images/posts/' + uid + '/' + _this.generateFilename()).put(imgBlob, metadata).then(function (snapshot) {
                // Delete previous profile photo on Storage if it exists.
                console.log('Snapshot', snapshot);
                // URL of the uploaded image!
                var url = snapshot.metadata.downloadURLs[0];
                console.log('Photo URL', url);
                resolve(url);
            }).catch(function (error) {
                console.log('Error.up', error);
                reject(error);
            });
        });
    };
    ImageProvider.prototype.uploadPostVideo = function (uid, videoData) {
        var _this = this;
        debugger;
        return new Promise(function (resolve, reject) {
            console.log('file://' + videoData);
            _this.filePath.resolveNativePath('file://' + videoData).then(function (file) {
                console.log(file);
                console.log(new Date().toString());
                _this.base64.encodeFile(file).then(function (base64File) {
                    var videoBlob = _this.imgURItoBlob(base64File);
                    var metadata = {
                        'contentType': "video/ogg"
                    };
                    __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.storage().ref().child('videos/posts/' + uid + '/' + _this.generateVideoName()).put(videoBlob, metadata).then(function (snapshot) {
                        // Delete previous profile photo on Storage if it exists.
                        console.log('Snapshot', snapshot);
                        console.log(new Date().toString());
                        // URL of the uploaded image!
                        var url = snapshot.metadata.downloadURLs[0];
                        console.log('Video URL', url);
                        resolve(url);
                    }).catch(function (error) {
                        console.log('Error.up', error);
                        reject(error);
                    });
                });
            }).catch(function (error) { return console.log('Unable to resolve file:' + error); });
        });
    };
    ImageProvider.prototype.uploadCoverPhoto = function (uid, imageData) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var imgBlob = _this.imgURItoBlob(imageData);
            var metadata = {
                'contentType': imgBlob.type
            };
            __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.storage().ref().child('images/cover/' + uid + '/' + _this.generateFilename()).put(imgBlob, metadata).then(function (snapshot) {
                // Delete previous profile photo on Storage if it exists.
                console.log('Snapshot', snapshot);
                // URL of the uploaded image!
                var url = snapshot.metadata.downloadURLs[0];
                console.log('Photo URL', url);
                resolve(url);
            }).catch(function (error) {
                console.log('Error.up', error);
                reject(error);
            });
        });
    };
    ImageProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_base64__["a" /* Base64 */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_path__["a" /* FilePath */]])
    ], ImageProvider);
    return ImageProvider;
}());

//# sourceMappingURL=image.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_timeline_timeline__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CommentsPage = /** @class */ (function () {
    function CommentsPage(navCtrl, navParams, timelineProvider, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.timelineProvider = timelineProvider;
        this.viewCtrl = viewCtrl;
        this.comments = null;
        this.post = this.navParams.get('post');
        this.account = this.navParams.get('account');
        this.postId = this.post.uid;
        console.log('PostId', this.postId);
    }
    CommentsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.timelineProvider.getPost(this.postId).subscribe(function (res) {
            _this.post = res;
            console.log('Post', _this.post);
            _this.comments = _this.post.comments;
        });
    };
    CommentsPage.prototype.isLiked = function () {
        var is_liked;
        if (this.post.likes && this.post.likes.length > 0) {
            for (var i = 0; i < this.post.likes.length; i++) {
                if (this.post.likes[i].user === this.account.uid) {
                    is_liked = true;
                }
                else {
                    is_liked = false;
                }
            }
            return is_liked;
        }
    };
    CommentsPage.prototype.postComment = function () {
        var _this = this;
        if (this.text) {
            var account = this.navParams.get('account');
            var comment = {
                user: account.name,
                photoURL: account.photoURL,
                commentBy: account.uid,
                text: this.text,
                createdAt: new Date()
            };
            console.log('New Comment', comment);
            this.timelineProvider.commentPost(this.postId, comment).then(function () {
                _this.text = '';
            });
        }
    };
    CommentsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CommentsPage');
    };
    CommentsPage.prototype.goBack = function () {
        this.viewCtrl.dismiss();
    };
    CommentsPage.prototype.like = function () {
        this.timelineProvider.likePost(this.postId, 'like', this.account);
    };
    CommentsPage.prototype.dislike = function () {
        this.timelineProvider.dislikePost(this.postId);
    };
    CommentsPage.prototype.goToReplies = function () {
        this.navCtrl.push('RepliesPage');
    };
    CommentsPage.prototype.getDate = function (date) {
        return __WEBPACK_IMPORTED_MODULE_3_moment___default()(new Date(date.seconds * 1000)).fromNow();
    };
    CommentsPage.prototype.goToReactions = function () {
        this.navCtrl.push('PostReactionsPage', { post: this.post });
    };
    CommentsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-comments',template:/*ion-inline-start:"E:\1_FacebookClone\1_CleanScript\Product\FacebookCloneV3\src\pages\comments\comments.html"*/'<ion-header>\n	<ion-navbar>\n		<ion-buttons left>\n			<ion-row>\n				<button ion-button icon-only clear (click)="goBack()">\n					<ion-icon name="ios-arrow-back"></ion-icon>\n				</button>\n\n				<ion-row>\n					<button ion-button icon-only clear (click)="goToReactions()">\n						<ion-avatar class="facebook-reaction-icon">\n							<img src="assets/imgs/newsfeed/facebook-like.png">\n						</ion-avatar>\n					</button>\n\n					<button ion-button icon-only clear (click)="goToReactions()">\n						<ion-avatar class="facebook-reaction-icon">\n							<img src="assets/imgs/newsfeed/facebook-love.png">\n						</ion-avatar>\n					</button>\n\n					<button ion-button icon-only clear (click)="goToReactions()">\n						<ion-avatar class="facebook-reaction-icon">\n							<img src="assets/imgs/newsfeed/facebook-laugh.png">\n						</ion-avatar>\n					</button>\n				</ion-row>\n			</ion-row>\n		</ion-buttons>\n\n		<ion-buttons right>\n			<button ion-button icon-only clear *ngIf="!isLiked()" (click)="like()">\n				<ion-icon name="ios-thumbs-up-outline"></ion-icon>\n			</button>\n			<button ion-button icon-only clear *ngIf="isLiked()" (click)="dislike()">\n				<ion-icon class="like-button" name="ios-thumbs-up"></ion-icon>\n			</button>\n		</ion-buttons>\n	</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<ion-list no-lines>\n		<ion-item *ngFor="let comment of comments">\n			<ion-row>\n				<ion-col col-2>\n					<ion-avatar>\n						<img *ngIf="comment.photoURL" src="{{comment.photoURL}}">\n						<img *ngIf="!comment.photoURL" src="assets/imgs/buddy.png">\n					</ion-avatar>\n				</ion-col>\n\n				<ion-col col-10>\n					<p class="comment-content line-break">\n						<strong>{{comment.user}}</strong>\n						<br> {{comment.text}}\n					</p>\n\n					<ion-row class="like-reply-row">\n						<ion-item>\n							<ion-row item-start>\n								<p>{{ getDate(comment.createdAt) }}</p>\n\n							</ion-row>\n\n\n						</ion-item>\n					</ion-row>\n\n\n\n\n				</ion-col>\n			</ion-row>\n		</ion-item>\n	</ion-list>\n</ion-content>\n\n<ion-footer>\n	<ion-item>\n		<ion-input [(ngModel)]="text" placeholder="Write a comment..."></ion-input>\n		<div item-end>\n			<button ion-button clear icon-only (click)="postComment()">\n				<ion-icon name="md-send"></ion-icon>\n			</button>\n		</div>\n	</ion-item>\n</ion-footer>'/*ion-inline-end:"E:\1_FacebookClone\1_CleanScript\Product\FacebookCloneV3\src\pages\comments\comments.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_timeline_timeline__["a" /* TimelineProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */]])
    ], CommentsPage);
    return CommentsPage;
}());

//# sourceMappingURL=comments.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReactionsPopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_timeline_timeline__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_account_account__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_loading_loading__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ReactionsPopoverPage = /** @class */ (function () {
    function ReactionsPopoverPage(navCtrl, actionSheetCtrl, popoverCtrl, timelineProvider, accountProvider, modalCtrl, events, platform, loadingProvider, camera, app, navParams, viewCtrl) {
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
        this.viewCtrl = viewCtrl;
        this.post = this.navParams.get('post');
        console.log('post in reaction page', this.post);
        this.accountProvider.getAccount(null).subscribe(function (data) {
            _this.account = data;
            console.log('Account', _this.account);
        });
    }
    ReactionsPopoverPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReactionsPopoverPage');
    };
    ReactionsPopoverPage.prototype.selectReaction = function (type) {
        console.log('type', type);
        switch (type) {
            case 'like':
                this.timelineProvider.likePost(this.post.uid, type, this.account);
                break;
            case 'love':
                this.timelineProvider.likePost(this.post.uid, type, this.account);
                break;
            case 'laugh':
                this.timelineProvider.likePost(this.post.uid, type, this.account);
                break;
            case 'sad':
                this.timelineProvider.likePost(this.post.uid, type, this.account);
                break;
            case 'shock':
                this.timelineProvider.likePost(this.post.uid, type, this.account);
                break;
            case 'angry':
                this.timelineProvider.likePost(this.post.uid, type, this.account);
                break;
            default:
                this.timelineProvider.likePost(this.post.uid, 'like', this.account);
        }
        this.viewCtrl.dismiss();
    };
    ReactionsPopoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reactions-popover',template:/*ion-inline-start:"E:\1_FacebookClone\1_CleanScript\Product\FacebookCloneV3\src\pages\reactions-popover\reactions-popover.html"*/'<ion-content>\n    <ion-row>\n        <ion-avatar class="facebook-reaction-icon" (click)="selectReaction(\'like\')">\n            <img src="assets/imgs/newsfeed/facebook-like.png">\n        </ion-avatar>\n\n        <ion-avatar class="facebook-reaction-icon" (click)="selectReaction(\'love\')">\n            <img src="assets/imgs/newsfeed/facebook-love.png">\n        </ion-avatar>\n\n        <ion-avatar class="facebook-reaction-icon" (click)="selectReaction(\'laugh\')">\n            <img src="assets/imgs/newsfeed/facebook-laugh.png">\n        </ion-avatar>\n\n        <ion-avatar class="facebook-reaction-icon" (click)="selectReaction(\'sad\')">\n            <img src="assets/imgs/newsfeed/facebook-sad.png">\n        </ion-avatar>\n\n        <ion-avatar class="facebook-reaction-icon" (click)="selectReaction(\'shock\')">\n            <img src="assets/imgs/newsfeed/facebook-shock.png">\n        </ion-avatar>\n\n        <ion-avatar class="facebook-reaction-icon" (click)="selectReaction(\'angry\')">\n            <img src="assets/imgs/newsfeed/facebook-angry.png">\n        </ion-avatar>\n    </ion-row>\n</ion-content>'/*ion-inline-end:"E:\1_FacebookClone\1_CleanScript\Product\FacebookCloneV3\src\pages\reactions-popover\reactions-popover.html"*/,
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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */]])
    ], ReactionsPopoverPage);
    return ReactionsPopoverPage;
}());

//# sourceMappingURL=reactions-popover.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_signup_signup__ = __webpack_require__(555);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_recover_account_recover_account__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_loading_loading__ = __webpack_require__(18);
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






var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, authProvider, modalCtrl, loading) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authProvider = authProvider;
        this.modalCtrl = modalCtrl;
        this.loading = loading;
        this.data = {
            user: '',
            password: '',
            message: ''
        };
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.createAccount = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_signup_signup__["a" /* SignupPage */]);
    };
    LoginPage.prototype.signIn = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loading.show();
                        return [4 /*yield*/, this.authProvider.signInWithEmailAndPassword(this.data).then(function () {
                                _this.loading.hide();
                            })
                                .catch(function (e) {
                                _this.loading.hide();
                                _this.data.message = e.message;
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.resetPassword = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_recover_account_recover_account__["a" /* RecoverAccountPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"E:\1_FacebookClone\1_CleanScript\Product\FacebookCloneV3\src\pages\login\login.html"*/'<ion-content padding>\n	<div class="logo">\n		<img src="assets/imgs/logo.png" alt="" />\n	</div>\n\n	<ion-list>\n		<ion-item>\n			<ion-label floating>Email</ion-label>\n			<ion-input [(ngModel)]="data.user" type="text"></ion-input>\n		</ion-item>\n\n		<ion-item>\n			<ion-label floating>Password</ion-label>\n			<ion-input [(ngModel)]="data.password" type="password"></ion-input>\n		</ion-item>\n	</ion-list>\n	<p class="error">{{data.message}}</p>\n	<br />\n	<button [disabled]="!data.user || !data.password" ion-button (click)="signIn()" block\n		color="secondary">Login</button>\n	<br />\n	<p (click)="resetPassword()" class="forgot">Forgot your password? <strong>Click Here!</strong></p>\n	<br />\n	<p class="divider"><span>OR</span></p>\n	<br />\n	<button ion-button (click)="createAccount()" block>Create Account</button>\n	<br />\n</ion-content>'/*ion-inline-end:"E:\1_FacebookClone\1_CleanScript\Product\FacebookCloneV3\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_loading_loading__["a" /* LoadingProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_consts__ = __webpack_require__(1116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_loading_loading__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_image_image__ = __webpack_require__(121);
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










var AuthProvider = /** @class */ (function () {
    function AuthProvider(afa, afs, platform, app, loadingProvider, imageProvider, toast) {
        var _this = this;
        this.afa = afa;
        this.afs = afs;
        this.platform = platform;
        this.app = app;
        this.loadingProvider = loadingProvider;
        this.imageProvider = imageProvider;
        this.toast = toast;
        debugger;
        this.navCtrl = this.app.getRootNav();
        this.afa.authState.subscribe(function (user) {
            console.log(user);
            if (user) {
                var uid = user.uid, email = user.email;
                if (user.emailVerified || (!user.emailVerified && user.phoneNumber)) {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */]);
                }
                else {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__app_consts__["a" /* Consts */].verifyPage, { user: { uid: uid, email: email } });
                }
            }
        });
    }
    AuthProvider.prototype.signUpWithEmailAndPassword = function (obj) {
        var _this = this;
        debugger;
        this.loadingProvider.show();
        if (obj.password !== obj.password2) {
            this.loadingProvider.hide();
            var err = "Passwords doesn't match";
            console.log(err);
            this.toast.create({
                message: err,
                duration: 5000
            }).present();
        }
        else {
            this.afa.auth.createUserWithEmailAndPassword(obj.email, obj.password)
                .then(function (res) { return __awaiter(_this, void 0, void 0, function () {
                var _this = this;
                var uid, photoURL, user;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            debugger;
                            uid = res.uid;
                            return [4 /*yield*/, this.imageProvider.uploadProfilePhoto(uid, obj.photoURL)
                                    .catch(function (err) { return console.log(err); })];
                        case 1:
                            photoURL = _a.sent();
                            user = {
                                uid: uid,
                                name: obj.name,
                                username: '@' + obj.username,
                                email: obj.email,
                                phone: null,
                                photoURL: photoURL ? photoURL : null,
                                friendRequests: {},
                                currentCity: '',
                                relationshipStatus: 'Single',
                                workPlace: '',
                                education: '',
                                hometown: ''
                            };
                            this.afs.collection('accounts').doc(uid).set(user)
                                .then(function () {
                                _this.afa.auth.currentUser.sendEmailVerification();
                                _this.loadingProvider.hide();
                            });
                            return [2 /*return*/];
                    }
                });
            }); }, function (err) {
                debugger;
                _this.loadingProvider.hide();
                console.log(err);
                _this.toast.create({
                    message: err.message,
                    duration: 5000
                }).present();
            });
        }
    };
    AuthProvider.prototype.signUpWithPhoneNumber = function (obj) {
        var _this = this;
        debugger;
        if (this.platform.is('cordova')) {
            var signInCredential = __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth.PhoneAuthProvider.credential(obj.verificationId, obj.confirmationCode);
            __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().signInWithCredential(signInCredential).then(function (res) { return __awaiter(_this, void 0, void 0, function () {
                var _this = this;
                var uid, photoURL, user;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            uid = res.user.uid;
                            return [4 /*yield*/, this.imageProvider.uploadProfilePhoto(uid, obj.photoURL)
                                    .catch(function (err) { return console.log(err); })];
                        case 1:
                            photoURL = _a.sent();
                            user = {
                                uid: uid,
                                name: obj.name,
                                username: '@' + obj.username,
                                email: null,
                                phone: obj.phone,
                                photoURL: photoURL ? photoURL : null,
                                friendRequests: {},
                                currentCity: '',
                                relationshipStatus: 'Single',
                                workPlace: '',
                                hometown: '',
                                education: ''
                            };
                            this.afs.collection('accounts').doc(uid).set(user)
                                .then(function () {
                                _this.afa.auth.currentUser.sendEmailVerification();
                            });
                            return [2 /*return*/];
                    }
                });
            }); });
        }
        else {
            console.log('function unavailable into browser');
        }
    };
    AuthProvider.prototype.resendMailVerification = function () {
        return this.afa.auth.currentUser.sendEmailVerification();
    };
    AuthProvider.prototype.resetPassword = function (user) {
        if (!user.includes('@')) {
            //get email from account collection
        }
        return this.afa.auth.sendPasswordResetEmail(user);
    };
    AuthProvider.prototype.signInWithEmailAndPassword = function (obj) {
        if (!obj.user.includes('@')) {
            //get email from account collection
        }
        return this.afa.auth.signInWithEmailAndPassword(obj.user, obj.password);
    };
    AuthProvider.prototype.signOut = function () {
        this.afa.auth.signOut();
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_7__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_image_image__["a" /* ImageProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_chat_chat__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_timeline_timeline__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__friends_friends__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__market_place_market_place__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__notifications_notifications__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__more_more__ = __webpack_require__(270);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var TabsPage = /** @class */ (function () {
    function TabsPage(chatProvider, timelineProvider, events, renderer) {
        var _this = this;
        this.chatProvider = chatProvider;
        this.timelineProvider = timelineProvider;
        this.events = events;
        this.renderer = renderer;
        this.unreadMessages = [];
        this.unreadPosts = [];
        this.unreadNotifications = [];
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_5__friends_friends__["a" /* FriendsPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_6__market_place_market_place__["a" /* MarketPlacePage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_7__notifications_notifications__["a" /* NotificationsPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_8__more_more__["a" /* MorePage */];
        this.timelineProvider.isNotificationUnread().subscribe(function (data) {
            _this.unreadNotifications = data;
            console.log('UnRead Notifications', _this.unreadNotifications);
        });
    }
    TabsPage.prototype.scrollTop = function (ev) {
        console.log('TOP', ev);
        if (ev.center.x <= 65)
            this.events.publish('scrollToTop', Date.now());
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */])
    ], TabsPage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('mainTabs'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Tabs */])
    ], TabsPage.prototype, "mainTabs", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('homeBtn'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], TabsPage.prototype, "homeBtn", void 0);
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\1_FacebookClone\1_CleanScript\Product\FacebookCloneV3\src\pages\tabs\tabs.html"*/'<ion-tabs #mainTabs tabsPlacement="top" (tap)="scrollTop($event)">\n  <ion-tab [root]="tab1Root" tabIcon="md-browsers"></ion-tab>\n  <ion-tab [root]="tab2Root" tabIcon="md-contacts"></ion-tab>\n  <!-- <ion-tab [root]="tab3Root" tabIcon="md-home"></ion-tab> -->\n  <ion-tab [root]="tab4Root" tabIcon="md-notifications" tabBadge="{{unreadNotifications.length > 0 ? unreadNotifications.length : null}}"\n    tabBadgeStyle="danger"></ion-tab>\n  <ion-tab [root]="tab5Root" tabIcon="md-menu"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"E:\1_FacebookClone\1_CleanScript\Product\FacebookCloneV3\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_chat_chat__["a" /* ChatProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_timeline_timeline__["a" /* TimelineProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoadingProvider = /** @class */ (function () {
    function LoadingProvider(loadingController) {
        this.loadingController = loadingController;
        // Loading Provider
        // This is the provider class for most of the loading spinners screens on the app.
        // Set your spinner/loading indicator type here
        // List of Spinners: https://ionicframework.com/docs/v2/api/components/spinner/Spinner/
        this.spinner = {
            spinner: 'circles'
        };
        console.log("Initializing Loading Provider");
    }
    //Show loading
    LoadingProvider.prototype.show = function () {
        if (!this.loading) {
            this.loading = this.loadingController.create(this.spinner);
            this.loading.present();
        }
    };
    //Hide loading
    LoadingProvider.prototype.hide = function () {
        if (this.loading) {
            this.loading.dismiss();
            this.loading = null;
        }
    };
    LoadingProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */]])
    ], LoadingProvider);
    return LoadingProvider;
}());

//# sourceMappingURL=loading.js.map

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__image_image__ = __webpack_require__(121);
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




var AccountProvider = /** @class */ (function () {
    function AccountProvider(afs, afa, imageProvider) {
        this.afs = afs;
        this.afa = afa;
        this.imageProvider = imageProvider;
        console.log('Hello AccountProvider Provider');
    }
    AccountProvider.prototype.getAccount = function (userId) {
        if (userId === void 0) { userId = null; }
        debugger;
        if (this.afa.auth.currentUser) {
            var currentUser = userId ? userId : this.afa.auth.currentUser.uid;
            var doc = this.afs.doc('accounts/' + currentUser);
            return this.account = doc.valueChanges();
        }
    };
    AccountProvider.prototype.getUsers = function () {
        return this.afs.collection('accounts').valueChanges();
    };
    AccountProvider.prototype.getAccountEmailByUsername = function (username) {
        var currentUser = this.afa.auth.currentUser.uid;
        var doc = this.afs.collection('accounts', function (ref) { return ref.where('username', '==', username); });
        return doc.valueChanges();
    };
    AccountProvider.prototype.getUserIdByUsername = function (username) {
        var _this = this;
        console.log(username);
        return new Promise(function (resolve) {
            _this.afs.collection('accounts', function (ref) { return ref.where('username', '==', username); })
                .valueChanges().subscribe(function (data) {
                if (data.length > 0) {
                    console.log(data[0]);
                    resolve(data[0].uid);
                }
            });
        });
    };
    AccountProvider.prototype.updateAccount = function (obj) {
        return __awaiter(this, void 0, void 0, function () {
            var currentUser, doc, _a, _b, e_1;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        currentUser = this.afa.auth.currentUser.uid;
                        doc = this.afs.doc('accounts/' + currentUser);
                        obj.username = obj.username.substr(0, 1) !== '@' ? '@' + obj.username : obj.username.trim();
                        obj.username.replace(/\s/g, '').split(' ').join('').replace(/ /g, '').replace(/\s+/g, '');
                        console.log(obj.username);
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 6, , 7]);
                        if (!obj.photoURL) return [3 /*break*/, 3];
                        _a = obj;
                        return [4 /*yield*/, this.imageProvider.uploadProfilePhoto(currentUser, obj.photoURL)];
                    case 2:
                        _a.photoURL = (_c.sent());
                        _c.label = 3;
                    case 3:
                        if (!obj.coverPhotoURL) return [3 /*break*/, 5];
                        _b = obj;
                        return [4 /*yield*/, this.imageProvider.uploadProfilePhoto(currentUser, obj.coverPhotoURL)];
                    case 4:
                        _b.coverPhotoURL = (_c.sent());
                        _c.label = 5;
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        e_1 = _c.sent();
                        console.log(e_1);
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/, this.afs.doc('accounts/' + currentUser).update(__assign({}, obj))
                            .catch(function (err) { return console.log(err); })];
                }
            });
        });
    };
    AccountProvider.prototype.updateOtherUser = function (obj) {
        var otherUser = obj.uid;
        var doc = this.afs.doc('accounts/' + otherUser);
        obj.username = obj.username.substr(0, 1) !== '@' ? '@' + obj.username : obj.username.trim();
        obj.username.replace(/\s/g, '').split(' ').join('').replace(/ /g, '').replace(/\s+/g, '');
        return this.afs.doc('accounts/' + otherUser).update(__assign({}, obj)).then(function (user) {
            console.log('User Updated', user);
        })
            .catch(function (err) { return console.log(err); });
    };
    AccountProvider.prototype.follow = function (userId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var currentUser, following, followers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        currentUser = this.afa.auth.currentUser.uid;
                        return [4 /*yield*/, new Promise(function (resolve) {
                                _this.afs.doc('accounts/' + currentUser).valueChanges()
                                    .subscribe(function (user) {
                                    var following = user.following;
                                    following = __assign((_a = {}, _a[userId] = true, _a), following);
                                    resolve(following);
                                    var _a;
                                });
                            })];
                    case 1:
                        following = _a.sent();
                        console.log(following);
                        this.afs.doc('accounts/' + currentUser).update({ following: following });
                        return [4 /*yield*/, new Promise(function (resolve) {
                                _this.afs.doc('accounts/' + userId).valueChanges()
                                    .subscribe(function (user) {
                                    var followers = user.followers;
                                    followers = __assign((_a = {}, _a[currentUser] = true, _a), followers);
                                    resolve(followers);
                                    var _a;
                                });
                            })];
                    case 2:
                        followers = _a.sent();
                        this.afs.doc('accounts/' + userId).update({ followers: followers });
                        return [2 /*return*/];
                }
            });
        });
    };
    AccountProvider.prototype.unfollow = function (userId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var currentUser, following, followers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        currentUser = this.afa.auth.currentUser.uid;
                        return [4 /*yield*/, new Promise(function (resolve) {
                                _this.afs.doc('accounts/' + currentUser).valueChanges()
                                    .subscribe(function (user) {
                                    var following = user.following;
                                    delete following[userId];
                                    resolve(following);
                                });
                            })];
                    case 1:
                        following = _a.sent();
                        this.afs.doc('accounts/' + currentUser).update({ following: following });
                        return [4 /*yield*/, new Promise(function (resolve) {
                                _this.afs.doc('accounts/' + userId).valueChanges()
                                    .subscribe(function (user) {
                                    var followers = user.followers;
                                    delete followers[currentUser];
                                    resolve(followers);
                                });
                            })];
                    case 2:
                        followers = _a.sent();
                        this.afs.doc('accounts/' + userId).update({ followers: followers });
                        return [2 /*return*/];
                }
            });
        });
    };
    AccountProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_3__image_image__["a" /* ImageProvider */]])
    ], AccountProvider);
    return AccountProvider;
}());

//# sourceMappingURL=account.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_account_account__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_loading_loading__ = __webpack_require__(18);
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




var FriendsPage = /** @class */ (function () {
    function FriendsPage(navCtrl, navParams, accountProvider, actionSheet, modalCtrl, loading, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.accountProvider = accountProvider;
        this.actionSheet = actionSheet;
        this.modalCtrl = modalCtrl;
        this.loading = loading;
        this.events = events;
        this.friendRequests = [];
        this.events.subscribe('scrollToTop', function (time) {
            console.log('scrollToTop', 'at', time);
            _this.content.scrollToTop();
        });
        this.accountProvider.getAccount(null).subscribe(function (data) {
            _this.account = data;
            console.log(_this.account);
            _this.getFriendReqs();
        });
    }
    FriendsPage.prototype.getFriendReqs = function () {
        var _this = this;
        this.loading.show();
        this.accountProvider.getUsers().subscribe(function (data) {
            // console.log('All User data', data);
            _this.users = data.filter(function (item) {
                if (_this.account) {
                    return item.uid != _this.account.uid;
                }
            });
            // console.log('All User except current user', this.users);
            if (_this.account) {
                if (Object.keys(_this.account.friendRequests).length > 0) {
                    _this.users.map(function (user) {
                        if (_this.account.friendRequests[user.uid]) {
                            _this.friendRequests.push(user);
                        }
                    });
                }
            }
            _this.loading.hide();
        });
    };
    FriendsPage.prototype.removeFromSearch = function (user) {
        this.searchUserList = this.searchUserList.filter(function (item) {
            return item.uid != user.uid;
        });
        this.loading.hide();
    };
    FriendsPage.prototype.removeReq = function (user) {
        delete this.account.friendRequests[user.uid];
        this.accountProvider.updateAccount(this.account);
        this.friendRequests = this.friendRequests.filter(function (item) {
            return item.uid != user.uid;
        });
    };
    // Accept Friend Req and update both user
    FriendsPage.prototype.acceptReq = function (user) {
        var _this = this;
        this.loading.show();
        this.account.following = __assign({}, this.account.following, (_a = {}, _a[user.uid] = true, _a));
        this.account.friends = __assign({}, this.account.friends, (_b = {}, _b[user.uid] = true, _b));
        delete this.account.friendRequests[user.uid];
        this.friendRequests = this.friendRequests.filter(function (item) {
            return item.uid != user.uid;
        });
        this.accountProvider.updateAccount(this.account).then(function (data) {
            console.log('After Accept req data', data);
            user.following = __assign({}, user.following, (_a = {}, _a[_this.account.uid] = true, _a));
            user.friends = __assign({}, user.friends, (_b = {}, _b[_this.account.uid] = true, _b));
            _this.accountProvider.updateOtherUser(user);
            _this.loading.hide();
            var _a, _b;
        });
        var _a, _b;
    };
    FriendsPage.prototype.sendReq = function (user) {
        var _this = this;
        this.loading.show();
        if (Object.keys(user.friendRequests).length > 0) {
            user.friendRequests = __assign({}, user.friendRequests, (_a = {}, _a[this.account.uid] = true, _a));
        }
        else {
            user.friendRequests = (_b = {}, _b[this.account.uid] = true, _b);
        }
        this.accountProvider.updateOtherUser(user).then(function () {
            console.log('user after send req', user);
            _this.removeFromSearch(user);
        });
        var _a, _b;
    };
    FriendsPage.prototype.removeFriend = function (user) {
        var _this = this;
        debugger;
        this.loading.show();
        delete this.account.friends[user.uid];
        delete this.account.following[user.uid];
        this.accountProvider.updateAccount(this.account).then(function (data) {
            console.log('After Accept req data', data);
            delete user.friends[_this.account.uid];
            delete user.following[_this.account.uid];
            delete user.isFriend;
            _this.accountProvider.updateOtherUser(user);
            _this.loading.hide();
        });
    };
    FriendsPage.prototype.isReqSend = function (user) {
        if (user.friendRequests[this.account.uid]) {
            return true;
        }
        else {
            return false;
        }
    };
    FriendsPage.prototype.isFriend = function (user) {
        if (this.account.friends[user.uid]) {
            return true;
        }
        else {
            return false;
        }
    };
    FriendsPage.prototype.gotoSearch = function () {
        this.modalCtrl.create('SearchPage').present();
    };
    //Goto User Profile
    FriendsPage.prototype.goToProfile = function (userId) {
        this.navCtrl.push('ProfilePage', { userId: userId });
    };
    FriendsPage.prototype.onSearchUser = function (ev) {
        var _this = this;
        console.log(ev.target.value);
        this.userSearch = ev.target.value;
        if (this.userSearch && this.userSearch.trim() != '') {
            this.searchUserList = this.users.filter(function (item) {
                if (_this.account.friends && _this.account.friends.hasOwnProperty(item.uid)) {
                    item.isFriend = true;
                }
                return (item.name.toLowerCase().indexOf(_this.userSearch.toLowerCase()) > -1 ||
                    item.username.toLowerCase().indexOf(_this.userSearch.toLowerCase()) > -1);
            });
            console.log('Searchlist', this.searchUserList);
        }
    };
    FriendsPage.prototype.gotoUers = function (data) {
        if (data === 'allfriends') {
            this.modalCtrl.create('SearchUserPage', { title: 'All Friends', chat: false }).present();
        }
        else if (data === 'allUsers') {
            this.modalCtrl.create('SearchUserPage', { title: 'All Users', chat: false }).present();
        }
    };
    FriendsPage.prototype.gotoMessages = function () {
        this.navCtrl.push('MessagesPage');
    };
    FriendsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FriendsPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */])
    ], FriendsPage.prototype, "content", void 0);
    FriendsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-friends',template:/*ion-inline-start:"E:\1_FacebookClone\1_CleanScript\Product\FacebookCloneV3\src\pages\friends\friends.html"*/'<ion-header [scrollingHeader]=\'content\'>\n	<search-header></search-header>\n</ion-header>\n\n<ion-content padding>\n	<ion-fab right bottom>\n		<button ion-fab>\n			<ion-icon name="md-person-add"></ion-icon>\n		</button>\n\n		<ion-fab-list side="top">\n			<button ion-fab (click)="gotoUers(\'allfriends\')">\n				<ion-icon name="ios-person-outline"></ion-icon>\n				<ion-label>See All Friends</ion-label>\n			</button>\n\n			<button ion-fab (click)="gotoUers(\'allUsers\')">\n				<ion-icon name="md-search"></ion-icon>\n				<ion-label>Search for New Friends</ion-label>\n			</button>\n		</ion-fab-list>\n	</ion-fab>\n\n	<ion-card>\n		<ion-row>\n			<p class="item-title">FRIEND REQUESTS</p>\n		</ion-row>\n\n		<ion-row>\n			<ion-col text-center *ngIf="friendRequests.length === 0">\n				<p>No New Requests</p>\n			</ion-col>\n		</ion-row>\n		<ion-list>\n			<ion-item *ngFor="let friendRequest of friendRequests">\n				<ion-thumbnail item-start (click)="goToProfile(friendRequest.uid)">\n					<img *ngIf="friendRequest.picture" src="{{ friendRequest.picture }}">\n					<img *ngIf="!friendRequest.picture" src="assets/imgs/buddy.png">\n				</ion-thumbnail>\n\n				<h2>{{ friendRequest.name }}</h2>\n\n				<ion-col>\n					<button class="add-friend-button" ion-button clear (click)="acceptReq(friendRequest)">ADD\n						FRIEND</button>\n					<button class="remove-friend-button" ion-button outline\n						(click)="removeReq(friendRequest)">REMOVE</button>\n				</ion-col>\n			</ion-item>\n		</ion-list>\n	</ion-card>\n	<ion-card>\n		<ion-list>\n			<ion-item *ngFor="let searchUser of searchUserList">\n				<ion-thumbnail item-start (click)="goToProfile(searchUser.uid)">\n					<img *ngIf="searchUser.photoURL" src="{{ searchUser.photoURL }}">\n					<img *ngIf="!searchUser.photoURL" src="assets/imgs/buddy.png" />\n				</ion-thumbnail>\n				<h2>{{ searchUser.name }}</h2>\n				<ion-col>\n					<button class="add-friend-button" *ngIf="!isReqSend(searchUser) && !isFriend(searchUser)"\n						(click)="sendReq(searchUser)" ion-button clear>ADD FRIEND</button>\n					<button color="light" class="sended-req" *ngIf="isReqSend(searchUser) && !isFriend(searchUser)"\n						ion-button>REQUEST SEND</button>\n					<button class="add-friend-button" *ngIf="isFriend(searchUser)" (click)="removeFriend(searchUser)"\n						ion-button clear>UNFRIEND</button>\n					<button class="remove-friend-button" (click)="removeFromSearch(searchUser)" ion-button\n						outline>REMOVE</button>\n				</ion-col>\n			</ion-item>\n		</ion-list>\n	</ion-card>\n</ion-content>'/*ion-inline-end:"E:\1_FacebookClone\1_CleanScript\Product\FacebookCloneV3\src\pages\friends\friends.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_account_account__["a" /* AccountProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */]])
    ], FriendsPage);
    return FriendsPage;
}());

//# sourceMappingURL=friends.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_timeline_timeline__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_account_account__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_chat_chat__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_loading_loading__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_moment__);
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








var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, actionSheetCtrl, popoverCtrl, timelineProvider, accountProvider, modalCtrl, events, platform, loadingProvider, camera, chatProvider) {
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
        this.chatProvider = chatProvider;
        this.limit = 10;
        this.timeline = []; //Array<Post>;
        this.posts = [];
        this.pictureCount = 0;
        this.totalUnreadChats = this.chatProvider.totalUnreadedMessages;
        this.ios = this.platform.is('ios');
        this.events.subscribe('scrollToTop', function (time) {
            console.log('scrollToTop', 'at', time);
            _this.content.scrollToTop();
        });
        this.accountProvider.getAccount(null).subscribe(function (data) {
            debugger;
            _this.account = data;
            console.log(_this.account);
        });
    }
    HomePage.prototype.getPosts = function () {
        var _this = this;
        this.loadingProvider.show();
        this.timelineProvider.getFollowingPosts().subscribe(function (data) {
            debugger;
            console.log(data);
            _this.timeline = [];
            if (_this.account) {
                var userIds_1 = __assign({}, _this.account.following, (_a = {}, _a[_this.account.uid] = true, _a));
                data.map(function (a) {
                    var data = a.payload.doc.data();
                    var uid = a.payload.doc.id;
                    console.log('ids', _this.account.following);
                    if ((Object.keys(userIds_1).indexOf(data.postBy) > -1)) {
                        console.log(_this.timeline.filter(function (a) { return a.uid === uid; }));
                        console.log(_this.timeline);
                        _this.timeline.push(__assign({ uid: uid }, data));
                    }
                });
            }
            console.log('Timeline Post', _this.timeline);
            // this.timeline = data;
            _this.loadingProvider.hide();
            var _a;
        }, function (err) {
            debugger;
            console.log(err);
            _this.loadingProvider.hide();
        });
    };
    HomePage.prototype.addView = function (postId) {
        this.timelineProvider.addView(postId);
    };
    HomePage.prototype.ionViewWillEnter = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("time=========>>>>>>>>", this.timeline);
                        return [4 /*yield*/, this.getPosts()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.ionViewDidEnter = function () {
        this.timelineProvider.readPosts();
    };
    //Current User Profile
    HomePage.prototype.openProfile = function () {
        this.modalCtrl.create('ProfilePage', { userId: this.account.uid }).present();
    };
    //Other User Profile
    HomePage.prototype.goToProfile = function (userId) {
        if (userId) {
            this.navCtrl.push('ProfilePage', { userId: userId });
        }
        else {
            this.navCtrl.push('ProfilePage', { userId: this.account.uid });
        }
    };
    HomePage.prototype.addPost = function () {
        debugger;
        // this.modalCtrl.create('AddPostPage', { is_edit: false, pageId: 2, pageName: 'dummy' }).present();
        this.modalCtrl.create('AddPostPage', { is_edit: false }).present();
    };
    HomePage.prototype.getDate = function (date) {
        if (date)
            return __WEBPACK_IMPORTED_MODULE_7_moment___default()(new Date(date.seconds * 1000)).fromNow();
        return __WEBPACK_IMPORTED_MODULE_7_moment___default()(new Date()).fromNow();
    };
    HomePage.prototype.countEv = function (obj) {
        if (obj)
            return Object.keys(obj).length;
        return 0;
    };
    HomePage.prototype.openCamera = function () {
        var _this = this;
        this.camera.getPicture({
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            correctOrientation: true,
            sourceType: this.camera.PictureSourceType.CAMERA
        }).then(function (imageData) {
            console.log(imageData);
            _this.image = 'data:image/jpeg;base64,' + imageData;
        });
    };
    HomePage.prototype.onSearch = function (ev) {
        var _this = this;
        console.log(ev.target.value);
        this.search = ev.target.value;
        if (this.search && this.search.trim() != '') {
            this.timeline = this.timeline.filter(function (item) {
                return (item.text ? item.text.toLowerCase().indexOf(_this.search.toLowerCase()) > -1 : null);
            });
        }
        else {
            this.getPosts();
        }
    };
    HomePage.prototype.gotoSearch = function () {
        this.modalCtrl.create('SearchPage').present();
    };
    HomePage.prototype.gotoMessages = function () {
        this.navCtrl.push('MessagesPage');
    };
    HomePage.prototype.unread = function (chat) {
        var _this = this;
        var res = [];
        if (chat.messages)
            res = chat.messages.filter(function (item) {
                if (item.unread && item.userId !== _this.account.uid)
                    return item;
            });
        return res.length > 0;
    };
    HomePage.prototype.getAllUnReadedMessages = function () {
        var _this = this;
        this.chatProvider.getChats().subscribe(function (data) {
            var chats = [];
            var unReadUsers = [];
            data.map(function (a) {
                var data = a.payload.doc.data();
                var uid = a.payload.doc.id;
                chats.push(__assign({ uid: uid }, data));
            });
            console.log('Chats', chats);
            for (var i = 0; i < chats.length; i++) {
                if (_this.unread(chats[i]))
                    if (unReadUsers.indexOf(chats[i].uid) === -1) {
                        unReadUsers.push(chats[i].uid);
                    }
            }
            debugger;
            _this.totalUnreadChats = unReadUsers.length;
            console.log('total unreaed ========>>>>>>>>>>>', _this.totalUnreadChats);
        });
    };
    //infinite scroll
    HomePage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        console.log('Begin async operation');
        this.timelineProvider.limit += 10;
        setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getPosts()];
                    case 1:
                        _a.sent();
                        console.log('Async operation has ended');
                        infiniteScroll.complete();
                        return [2 /*return*/];
                }
            });
        }); }, 500);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */])
    ], HomePage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('video'),
        __metadata("design:type", Object)
    ], HomePage.prototype, "video", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"E:\1_FacebookClone\1_CleanScript\Product\FacebookCloneV3\src\pages\home\home.html"*/'<ion-header [scrollingHeader]=\'content\'>\n\n	<search-header></search-header>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n	<ion-card class="stories-card" *ngIf="!search">\n\n		<ion-item>\n\n			<p class="stories-title" item-start>Stories</p>\n\n\n\n			<ion-row item-end>\n\n				<button ion-button clear icon-only small>\n\n					<ion-icon name="md-play"></ion-icon>\n\n					<p>Play All</p>\n\n				</button>\n\n			</ion-row>\n\n		</ion-item>\n\n\n\n		<ion-scroll scrollX="true" scroll-avatar>\n\n			<ion-col class="scroll-item" text-center>\n\n				<img src="assets/imgs/buddy.png">\n\n				<p>You</p>\n\n			</ion-col>\n\n\n\n			<ion-col class="scroll-item" text-center>\n\n				<ion-avatar>\n\n					<img\n\n						src="https://res.cloudinary.com/cediim8/image/upload/v1521091160/avatars/pexels-photo-375880-min.jpg">\n\n				</ion-avatar>\n\n				<p>Adam</p>\n\n			</ion-col>\n\n\n\n			<ion-col class="scroll-item" text-center>\n\n				<ion-avatar>\n\n					<img\n\n						src="https://res.cloudinary.com/cediim8/image/upload/v1521091160/avatars/pexels-photo-372042-min.jpg">\n\n				</ion-avatar>\n\n				<p>Susie</p>\n\n			</ion-col>\n\n\n\n			<ion-col class="scroll-item" text-center>\n\n				<ion-avatar>\n\n					<img\n\n						src="https://res.cloudinary.com/cediim8/image/upload/v1521091160/avatars/pexels-photo-428338-min.jpg">\n\n				</ion-avatar>\n\n				<p>Katie</p>\n\n			</ion-col>\n\n\n\n			<ion-col class="scroll-item" text-center>\n\n				<ion-avatar>\n\n					<img\n\n						src="https://res.cloudinary.com/cediim8/image/upload/v1521091162/avatars/pexels-photo-428339-min.jpg">\n\n				</ion-avatar>\n\n				<p>Ronald</p>\n\n			</ion-col>\n\n\n\n			<ion-col class="scroll-item" text-center>\n\n				<ion-avatar>\n\n					<img\n\n						src="https://res.cloudinary.com/cediim8/image/upload/v1521091162/avatars/pexels-photo-733872-min.jpg">\n\n				</ion-avatar>\n\n				<p>Jaimie</p>\n\n			</ion-col>\n\n\n\n			<ion-col class="scroll-item" text-center>\n\n				<ion-avatar>\n\n					<img\n\n						src="https://res.cloudinary.com/cediim8/image/upload/v1521091161/avatars/pexels-photo-428341-min.jpg">\n\n				</ion-avatar>\n\n				<p>Kirk</p>\n\n			</ion-col>\n\n\n\n			<ion-col class="scroll-item" text-center>\n\n				<ion-avatar>\n\n					<img\n\n						src="https://res.cloudinary.com/cediim8/image/upload/v1521091163/avatars/pexels-photo-573299-min.jpg">\n\n				</ion-avatar>\n\n				<p>Sammy</p>\n\n			</ion-col>\n\n\n\n			<ion-col class="scroll-item" text-center>\n\n				<ion-avatar>\n\n					<img\n\n						src="https://res.cloudinary.com/cediim8/image/upload/v1521091163/avatars/pexels-photo-462680-min.jpg">\n\n				</ion-avatar>\n\n				<p>Karl</p>\n\n			</ion-col>\n\n\n\n			<ion-col class="scroll-item" text-center>\n\n				<ion-avatar>\n\n					<img\n\n						src="https://res.cloudinary.com/cediim8/image/upload/v1521091163/avatars/pexels-photo-601317-min.jpg">\n\n				</ion-avatar>\n\n				<p>Susan</p>\n\n			</ion-col>\n\n		</ion-scroll>\n\n	</ion-card>\n\n\n\n	<ion-card class="status-card" *ngIf="!search">\n\n		<ion-item text-center>\n\n			<ion-avatar item-start (click)="goToProfile()">\n\n				<img style="object-fit: cover" *ngIf="account && account.photoURL" src="{{ account.photoURL }}">\n\n				<img *ngIf="account && !account.photoURL" src="assets/imgs/buddy.png">\n\n			</ion-avatar>\n\n\n\n			<button class="whats-on-your-mind" ion-button full round (click)="addPost()">\n\n				<p>What\'s on your mind?</p>\n\n			</button>\n\n\n\n			<div item-end>\n\n				<button class="image-button" ion-button clear icon-only (click)="addPost()">\n\n					<ion-icon name="md-images"></ion-icon>\n\n				</button>\n\n				<p>Photo</p>\n\n			</div>\n\n		</ion-item>\n\n	</ion-card>\n\n\n\n	<timeline [timeline]="timeline"></timeline>\n\n</ion-content>'/*ion-inline-end:"E:\1_FacebookClone\1_CleanScript\Product\FacebookCloneV3\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_timeline_timeline__["a" /* TimelineProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_account_account__["a" /* AccountProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_5__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_4__providers_chat_chat__["a" /* ChatProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarketPlacePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
 * Generated class for the MarketPlacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MarketPlacePage = /** @class */ (function () {
    function MarketPlacePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MarketPlacePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MarketPlacePage');
    };
    MarketPlacePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-market-place',template:/*ion-inline-start:"E:\1_FacebookClone\1_CleanScript\Product\FacebookCloneV3\src\pages\market-place\market-place.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button icon-only>\n        <ion-icon name="md-camera"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-searchbar placeholder="Search Marketplace"></ion-searchbar>\n\n    <ion-buttons right>\n      <button ion-button icon-only>\n        <ion-icon name="ios-chatbubbles"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card>\n    <ion-scroll scrollX="true" scroll-avatar>\n      <button ion-button round outline>\n        <ion-avatar item-start>\n          <img src="assets/imgs/current-user-photo.jpg">\n        </ion-avatar>\n        <p>You</p>\n      </button>\n\n      <button ion-button round outline>\n        <p>Saved</p>\n      </button>\n\n      <button ion-button round outline>\n        <p>For Sale</p>\n      </button>\n\n      <button ion-button round outline>\n        <p>Vehicles</p>\n      </button>\n\n      <button ion-button round outline>\n        <p>Rentals</p>\n      </button>\n\n      <button ion-button round outline>\n        <p>Home Sales</p>\n      </button>\n\n      <button ion-button round outline>\n        <p>Top Sellers</p>\n      </button>\n\n      <button ion-button round outline>\n        <p>Search</p>\n      </button>\n    </ion-scroll>\n  </ion-card>\n\n  <ion-card class="listing-card">\n    <ion-item text-center>\n      <ion-avatar item-start>\n        <img src="assets/imgs/current-user-photo.jpg">\n      </ion-avatar>\n\n      <p>What are you listing?</p>\n\n      <div item-end>\n        <button ion-button clear icon-only>\n          <ion-icon name="md-camera"></ion-icon>\n        </button>\n      </div>\n    </ion-item>\n  </ion-card>\n\n  <ion-card class="filters-card">\n    <button ion-button clear>\n      <p>BRISBANE - 60 KM</p>\n      <ion-icon name="ios-arrow-down"></ion-icon>\n    </button>\n\n    <button ion-button clear>\n      <p>CATEGORY</p>\n      <ion-icon name="ios-arrow-down"></ion-icon>\n    </button>\n\n    <button ion-button clear>\n      <p>PRICE</p>\n      <ion-icon name="ios-arrow-down"></ion-icon>\n    </button>\n  </ion-card>\n\n  <ion-card class="top-picks-card">\n    <p>Top Picks in Your Area</p>\n\n    <ion-row>\n      <ion-col>\n        <img src="https://res.cloudinary.com/cediim8/image/upload/v1521094586/market%20place/pexels-photo-175690-min.jpg">\n      </ion-col>\n\n      <ion-col>\n        <img src="https://res.cloudinary.com/cediim8/image/upload/v1521094586/market%20place/pexels-photo-147641-min.jpg">\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <img src="https://res.cloudinary.com/cediim8/image/upload/v1521094586/market%20place/pexels-photo-139167-min.jpg">\n      </ion-col>\n\n      <ion-col>\n        <img src="https://res.cloudinary.com/cediim8/image/upload/v1521094586/market%20place/pexels-photo-100582-min.jpg">\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <img src="https://res.cloudinary.com/cediim8/image/upload/v1521094586/market%20place/pexels-photo-248528-min.jpg">\n      </ion-col>\n\n      <ion-col>\n        <img src="https://res.cloudinary.com/cediim8/image/upload/v1521094585/market%20place/pexels-photo-109371-min.jpg">\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <img src="https://res.cloudinary.com/cediim8/image/upload/v1521094585/market%20place/pexels-photo-433636-min.jpg">\n      </ion-col>\n\n      <ion-col>\n        <img src="https://res.cloudinary.com/cediim8/image/upload/v1521094585/market%20place/pexels-photo-914940-min.jpg">\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <img src="https://res.cloudinary.com/cediim8/image/upload/v1521094585/market%20place/pexels-photo-595808-min.jpg">\n      </ion-col>\n\n      <ion-col>\n        <img src="https://res.cloudinary.com/cediim8/image/upload/v1521094585/market%20place/pexels-photo-724643-min.jpg">\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <img src="https://res.cloudinary.com/cediim8/image/upload/v1521094585/market%20place/pexels-photo-276534-min.jpg">\n      </ion-col>\n\n      <ion-col>\n        <img src="https://res.cloudinary.com/cediim8/image/upload/v1521094585/market%20place/pexels-photo-775219-min.jpg">\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <img src="https://res.cloudinary.com/cediim8/image/upload/v1521094586/market%20place/pexels-photo-175690-min.jpg">\n      </ion-col>\n\n      <ion-col>\n        <img src="https://res.cloudinary.com/cediim8/image/upload/v1521094586/market%20place/pexels-photo-147641-min.jpg">\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <img src="https://res.cloudinary.com/cediim8/image/upload/v1521094586/market%20place/pexels-photo-139167-min.jpg">\n      </ion-col>\n\n      <ion-col>\n        <img src="https://res.cloudinary.com/cediim8/image/upload/v1521094586/market%20place/pexels-photo-100582-min.jpg">\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <img src="https://res.cloudinary.com/cediim8/image/upload/v1521094586/market%20place/pexels-photo-248528-min.jpg">\n      </ion-col>\n\n      <ion-col>\n        <img src="https://res.cloudinary.com/cediim8/image/upload/v1521094585/market%20place/pexels-photo-109371-min.jpg">\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <img src="https://res.cloudinary.com/cediim8/image/upload/v1521094585/market%20place/pexels-photo-433636-min.jpg">\n      </ion-col>\n\n      <ion-col>\n        <img src="https://res.cloudinary.com/cediim8/image/upload/v1521094585/market%20place/pexels-photo-914940-min.jpg">\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <img src="https://res.cloudinary.com/cediim8/image/upload/v1521094585/market%20place/pexels-photo-595808-min.jpg">\n      </ion-col>\n\n      <ion-col>\n        <img src="https://res.cloudinary.com/cediim8/image/upload/v1521094585/market%20place/pexels-photo-724643-min.jpg">\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <img src="https://res.cloudinary.com/cediim8/image/upload/v1521094585/market%20place/pexels-photo-276534-min.jpg">\n      </ion-col>\n\n      <ion-col>\n        <img src="https://res.cloudinary.com/cediim8/image/upload/v1521094585/market%20place/pexels-photo-775219-min.jpg">\n      </ion-col>\n    </ion-row>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"E:\1_FacebookClone\1_CleanScript\Product\FacebookCloneV3\src\pages\market-place\market-place.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], MarketPlacePage);
    return MarketPlacePage;
}());

//# sourceMappingURL=market-place.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_account_account__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MorePage = /** @class */ (function () {
    function MorePage(navCtrl, navParams, alertCtrl, afa, accountProvider, app, modalCtrl, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.afa = afa;
        this.accountProvider = accountProvider;
        this.app = app;
        this.modalCtrl = modalCtrl;
        this.events = events;
        this.account = {
            name: '',
            photoURL: null,
            uid: '',
            email: ''
        };
        this.events.subscribe('scrollToTop', function (time) {
            console.log('scrollToTop', 'at', time);
            _this.content.scrollToTop();
        });
        this.accountProvider.getAccount(null).subscribe(function (data) {
            if (data) {
                _this.account = data;
            }
            console.log(_this.account);
        });
    }
    MorePage.prototype.ionViewWillEnter = function () {
    };
    MorePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MorePage');
    };
    MorePage.prototype.goToProfile = function () {
        debugger;
        if (this.account) {
            this.navCtrl.push('ProfilePage', { userId: this.account.uid });
        }
    };
    MorePage.prototype.signOut = function () {
        var _this = this;
        this.alertCtrl.create({
            title: 'Sign Out',
            subTitle: 'Would you like to sign out?',
            buttons: [
                {
                    text: 'No',
                    handler: function () { return console.log('cancel'); }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        _this.afa.auth.signOut();
                        _this.afa.auth.currentUser.reload();
                        _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
                    }
                }
            ]
        }).present();
    };
    MorePage.prototype.gotoUers = function (data) {
        if (data === 'allfriends') {
            this.modalCtrl.create('SearchUserPage', { title: 'All Friends', chat: false }).present();
        }
        else if (data === 'allUsers') {
            this.modalCtrl.create('SearchUserPage', { title: 'All Users', chat: false }).present();
        }
    };
    MorePage.prototype.openBrowser = function (url) {
        if (!url.includes('//'))
            url = 'http://' + url;
        window.open(url);
    };
    MorePage.prototype.mailto = function () {
        window.open("mailto:contact@socodeur.com", '_system');
    };
    MorePage.prototype.gotoSearch = function () {
        this.modalCtrl.create('SearchPage').present();
    };
    MorePage.prototype.gotoPagesList = function (like) {
        this.navCtrl.push('PagesList', { likePages: like });
    };
    MorePage.prototype.reportBug = function () {
    };
    MorePage.prototype.gotoMessages = function () {
        this.navCtrl.push('MessagesPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */])
    ], MorePage.prototype, "content", void 0);
    MorePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-more',template:/*ion-inline-start:"E:\1_FacebookClone\1_CleanScript\Product\FacebookCloneV3\src\pages\more\more.html"*/'<ion-header [scrollingHeader]=\'content\'>\n	<search-header></search-header>\n</ion-header>\n\n<ion-content padding>\n	<ion-item (click)="goToProfile()">\n		<ion-avatar item-start>\n			<img style="object-fit: cover" *ngIf="account.photoURL" src="{{ account.photoURL }}">\n			<img style="object-fit: cover" *ngIf="!account.photoURL" src="assets/imgs/buddy.png">\n		</ion-avatar>\n\n		<p class="user-name">{{ account.name }}</p>\n		<p class="view-profile">View your profile</p>\n	</ion-item>\n\n	<p class="item-title">Favorites</p>\n\n	<ion-list no-lines>\n		<ion-item (click)="gotoUers(\'allUsers\')">\n			<ion-avatar item-start>\n				<img src="assets/imgs/settings/discover-people.png">\n			</ion-avatar>\n\n			<p>Discover People</p>\n		</ion-item>\n		<ion-item (click)="gotoUers(\'allfriends\')">\n			<ion-avatar item-start>\n				<img src="assets/imgs/settings/friends.png">\n			</ion-avatar>\n\n			<p>Friends</p>\n		</ion-item>\n\n		<ion-item>\n			<!-- because this link is down for now -->\n			<!-- <ion-item (click)="openBrowser(\'https://socodeur.com/downloads/instagram-clone/\')"> -->\n			<ion-avatar item-start>\n				<img src="assets/imgs/settings/instagram.png">\n			</ion-avatar>\n\n			<p>Instagram</p>\n		</ion-item>\n\n\n		<ion-item>\n			<ion-avatar item-start>\n				<img src="assets/imgs/settings/saved.png">\n			</ion-avatar>\n\n			<p>Saved</p>\n\n			<ion-badge item-end>11</ion-badge>\n		</ion-item>\n\n\n	</ion-list>\n\n\n	<ion-list no-lines>\n\n		<ion-item (click)="gotoPagesList(true)">\n			<ion-avatar item-start>\n				<img src="assets/imgs/settings/like-pages.png">\n			</ion-avatar>\n\n			<p>Like Pages</p>\n		</ion-item>\n\n\n		<ion-item (click)="gotoPagesList(false)">\n			<ion-avatar item-start>\n				<img src="assets/imgs/page-icon.jpg">\n			</ion-avatar>\n\n			<p>Pages</p>\n		</ion-item>\n\n\n		<ion-item (click)="gotoUers(\'allUsers\')">\n			<ion-avatar item-start>\n				<img src="assets/imgs/settings/find-friends.png">\n			</ion-avatar>\n\n			<p>Find Friends</p>\n		</ion-item>\n\n\n	</ion-list>\n\n\n\n	<p class="item-title top-border">Feeds</p>\n\n	<ion-list no-lines>\n		<ion-item>\n			<ion-avatar item-start>\n				<img src="assets/imgs/settings/most-recent.png">\n			</ion-avatar>\n\n			<p>Most Recent</p>\n		</ion-item>\n\n\n	</ion-list>\n\n	<p class="item-title top-border">Interests</p>\n\n	<ion-list no-lines>\n		<ion-item>\n			<ion-avatar item-start>\n				<img src="assets/imgs/settings/following.png">\n			</ion-avatar>\n\n			<p>Following</p>\n		</ion-item>\n\n\n	</ion-list>\n\n	<p class="item-title top-border">HELP & SETTINGS</p>\n\n	<ion-list no-lines>\n		<ion-item>\n			<ion-avatar item-start>\n				<img src="assets/imgs/settings/app-settings.png">\n			</ion-avatar>\n			<p>App Settings</p>\n		</ion-item>\n		<ion-item>\n			<ion-avatar item-start>\n				<img src="assets/imgs/settings/account-settings.png">\n			</ion-avatar>\n			<p>Account Settings</p>\n		</ion-item>\n		<ion-item>\n			<ion-avatar item-start>\n				<img src="assets/imgs/settings/help-center.png">\n			</ion-avatar>\n\n			<p>Help Center</p>\n		</ion-item>\n		<ion-item>\n			<ion-avatar item-start>\n				<img src="assets/imgs/settings/terms-policies.png">\n			</ion-avatar>\n\n			<p>Terms and Policies</p>\n		</ion-item>\n\n		<ion-item (click)="mailto()">\n			<ion-avatar item-start>\n				<img src="assets/imgs/settings/report-problem.png">\n			</ion-avatar>\n\n			<p>Report a Problem</p>\n		</ion-item>\n\n		<ion-item>\n			<ion-avatar item-start>\n				<img src="assets/imgs/settings/about.png">\n			</ion-avatar>\n\n			<p>About</p>\n		</ion-item>\n\n		<ion-item>\n			<ion-avatar item-start>\n				<img src="assets/imgs/settings/mobile-data.png">\n			</ion-avatar>\n\n			<p>Mobile Data</p>\n		</ion-item>\n\n		<ion-item (click)=\'signOut()\'>\n			<ion-avatar item-start>\n				<img src="assets/imgs/settings/log-out.png">\n			</ion-avatar>\n\n			<p>Log Out</p>\n		</ion-item>\n	</ion-list>\n</ion-content>'/*ion-inline-end:"E:\1_FacebookClone\1_CleanScript\Product\FacebookCloneV3\src\pages\more\more.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_4__providers_account_account__["a" /* AccountProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */]])
    ], MorePage);
    return MorePage;
}());

//# sourceMappingURL=more.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_timeline_timeline__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_account_account__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_loading_loading__ = __webpack_require__(18);
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
 * Generated class for the NotificationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NotificationsPage = /** @class */ (function () {
    function NotificationsPage(navCtrl, navParams, accountProvider, timelineProvider, modalCtrl, loadingProvider, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.accountProvider = accountProvider;
        this.timelineProvider = timelineProvider;
        this.modalCtrl = modalCtrl;
        this.loadingProvider = loadingProvider;
        this.events = events;
        this.events.subscribe('scrollToTop', function (time) {
            console.log('scrollToTop', 'at', time);
            _this.content.scrollToTop();
        });
        this.accountProvider.getAccount(null).subscribe(function (data) {
            _this.account = data;
            console.log(_this.account);
        });
    }
    NotificationsPage.prototype.ionViewDidEnter = function () {
        this.timelineProvider.readNotifications();
    };
    //Create text array
    NotificationsPage.prototype.createStrArray = function (text) {
        var str = text;
        if (!str || str === '')
            return '';
        var res = str.split(/[ ]/);
        return res;
    };
    NotificationsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.loadingProvider.show();
        this.timelineProvider.getNotifications()
            .subscribe(function (data) {
            if (data.length > 0) {
                _this.notifications = [];
                if (_this.account.following) {
                    _this.notifications = data.filter(function (item) {
                        // item.text = item.text.replace(/VK_RETURN/g, '');
                        return _this.account.following[item.userId] && item;
                    });
                    _this.loadingProvider.hide();
                    console.log('All Notifications', _this.notifications);
                }
            }
            if (!_this.notifications)
                _this.notifications = null;
            console.log('Notifications', _this.notifications);
            _this.loadingProvider.hide();
        });
    };
    NotificationsPage.prototype.getDate = function (date) {
        return __WEBPACK_IMPORTED_MODULE_2_moment___default()(new Date(date.seconds * 1000)).fromNow();
    };
    NotificationsPage.prototype.openPost = function (postId) {
        this.modalCtrl.create('ViewPostPage', { postId: postId }).present();
        console.log('Opening:', postId);
    };
    NotificationsPage.prototype.gotoMessages = function () {
        this.navCtrl.push('MessagesPage');
    };
    NotificationsPage.prototype.viewPost = function (postId) {
        this.modalCtrl.create('ViewPostPage', { postId: postId }).present();
    };
    NotificationsPage.prototype.gotoSearch = function () {
        this.modalCtrl.create('SearchPage').present();
    };
    NotificationsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NotificationsPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */])
    ], NotificationsPage.prototype, "content", void 0);
    NotificationsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notifications',template:/*ion-inline-start:"E:\1_FacebookClone\1_CleanScript\Product\FacebookCloneV3\src\pages\notifications\notifications.html"*/'<ion-header [scrollingHeader]=\'content\'>\n	<search-header></search-header>\n</ion-header>\n\n<ion-content padding>\n\n\n	<ion-card>\n\n		<ion-list *ngIf="notifications">\n			<ion-item *ngFor="let item  of notifications">\n				<ion-avatar item-start>\n					<img [src]="item.userPhoto? item.userPhoto : \'assets/imgs/buddy.png\'" />\n				</ion-avatar>\n\n				<p class="line-break notification" (click)="viewPost(item.postId)">\n					<b *ngIf="item.user">{{item.user}} </b>\n					{{item.event}} a post from\n					<b> {{item.owner}}</b>\n					<br />\n					<ion-note>\n						<span *ngFor="let text of createStrArray(item.text)">\n							<br *ngIf="text === \'VK_RETURN\'" /> {{text === \'VK_RETURN\'? "": " " +text}}\n						</span>\n					</ion-note>\n				</p>\n				<p class="time">{{getDate(item.createdAt)}}</p>\n\n\n			</ion-item>\n		</ion-list>\n	</ion-card>\n</ion-content>'/*ion-inline-end:"E:\1_FacebookClone\1_CleanScript\Product\FacebookCloneV3\src\pages\notifications\notifications.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_account_account__["a" /* AccountProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_timeline_timeline__["a" /* TimelineProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */]])
    ], NotificationsPage);
    return NotificationsPage;
}());

//# sourceMappingURL=notifications.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecoverAccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(160);
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
 * Generated class for the RecoverAccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RecoverAccountPage = /** @class */ (function () {
    function RecoverAccountPage(navCtrl, navParams, authProvider, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authProvider = authProvider;
        this.toast = toast;
        this.email = '';
        this.error = '';
    }
    RecoverAccountPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RecoverAccountPage');
    };
    RecoverAccountPage.prototype.sendEmail = function () {
        var _this = this;
        if (!this.email.includes('@') || !this.email.includes('.')) {
            this.error = 'Email badly formatted!';
        }
        else {
            this.authProvider.resetPassword(this.email)
                .then(function () {
                _this.toast.create({
                    message: 'A reset password link was sent to ' + _this.email,
                    duration: 5000
                }).present().then(function () { return _this.navCtrl.pop(); });
            })
                .catch(function (err) {
                _this.toast.create({
                    message: err.message,
                    duration: 5000
                }).present();
            });
        }
    };
    RecoverAccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-recover-account',template:/*ion-inline-start:"E:\1_FacebookClone\1_CleanScript\Product\FacebookCloneV3\src\pages\recover-account\recover-account.html"*/'<ion-header>\n\n\n\n	<ion-navbar>\n\n		<ion-title>Account Recovery</ion-title>\n\n	</ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n	<ion-list>\n\n		<ion-item>\n\n			<ion-label floating>Enter your Email</ion-label>\n\n			<ion-input [(ngModel)]="email" type="text"></ion-input>\n\n		</ion-item>\n\n	</ion-list>\n\n	<button (click)="sendEmail()" ion-button block>Send Recovery Email</button>\n\n\n\n</ion-content>'/*ion-inline-end:"E:\1_FacebookClone\1_CleanScript\Product\FacebookCloneV3\src\pages\recover-account\recover-account.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */]])
    ], RecoverAccountPage);
    return RecoverAccountPage;
}());

//# sourceMappingURL=recover-account.js.map

/***/ }),

/***/ 305:
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
webpackEmptyAsyncContext.id = 305;

/***/ }),

/***/ 348:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-page-details/add-page-details.module": [
		1145,
		5
	],
	"../pages/add-post/add-post.module": [
		1146,
		4
	],
	"../pages/comments/comments.module": [
		1147,
		14
	],
	"../pages/friends/friends.module": [
		1148,
		13
	],
	"../pages/home/home.module": [
		1149,
		12
	],
	"../pages/market-place/market-place.module": [
		1150,
		11
	],
	"../pages/messages-detail/messages-detail.module": [
		552
	],
	"../pages/messages/messages.module": [
		553
	],
	"../pages/more/more.module": [
		1151,
		10
	],
	"../pages/notifications/notifications.module": [
		1152,
		9
	],
	"../pages/page-form/page-form.module": [
		556
	],
	"../pages/page-profile/page-profile.module": [
		557
	],
	"../pages/page/page.module": [
		558
	],
	"../pages/post-on/post-on.module": [
		1153,
		3
	],
	"../pages/post-reactions/post-reactions.module": [
		1154,
		1
	],
	"../pages/profile-add-details/profile-add-details.module": [
		1155,
		8
	],
	"../pages/profile/profile.module": [
		1156,
		2
	],
	"../pages/reactions-popover/reactions-popover.module": [
		1157,
		7
	],
	"../pages/recover-account/recover-account.module": [
		1158,
		6
	],
	"../pages/replies/replies.module": [
		1159,
		0
	],
	"../pages/search-user/search-user.module": [
		559
	],
	"../pages/search/search.module": [
		560
	],
	"../pages/view-post/view-post.module": [
		562
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 348;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimelineProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_image_image__ = __webpack_require__(121);
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





var TimelineProvider = /** @class */ (function () {
    function TimelineProvider(afs, afa, imageProvider, alertCtrl) {
        this.afs = afs;
        this.afa = afa;
        this.imageProvider = imageProvider;
        this.alertCtrl = alertCtrl;
        this.limit = 10;
        this.searchStr = '';
    }
    TimelineProvider.prototype.addPost = function (obj) {
        var _this = this;
        debugger;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            var userId;
            return __generator(this, function (_a) {
                userId = this.afa.auth.currentUser.uid;
                // test: hardcoding for now to check 
                // userId = "381kSiZmmzTMyvjhJhdKhLC84Xy2";
                obj.postBy = userId;
                console.log('post', obj);
                this.afs.doc('accounts/' + userId).valueChanges()
                    .subscribe(function (user) { return __awaiter(_this, void 0, void 0, function () {
                    var _this = this;
                    var photoURL, videoURL;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                console.log('post', user);
                                obj.user = user.name;
                                obj.username = user.username;
                                if (user.photoURL)
                                    obj.userPhoto = user.photoURL;
                                if (!(obj.photoURL && !obj.photoURL.includes('http'))) return [3 /*break*/, 2];
                                return [4 /*yield*/, this.imageProvider.uploadPostPhoto(userId, obj.photoURL)];
                            case 1:
                                photoURL = _a.sent();
                                obj.photoURL = photoURL;
                                _a.label = 2;
                            case 2:
                                if (!(obj.videoURL && !obj.videoURL.includes('http'))) return [3 /*break*/, 4];
                                return [4 /*yield*/, this.imageProvider.uploadPostVideo(userId, obj.videoURL)];
                            case 3:
                                videoURL = _a.sent();
                                obj.videoURL = videoURL;
                                _a.label = 4;
                            case 4:
                                this.afs.collection('posts').add(obj)
                                    .then(function (res) { return resolve(res); })
                                    .catch(function (err) { return console.log(err); });
                                console.log("share", obj.postId);
                                return [4 /*yield*/, this.afs.doc('posts/' + obj.postId).valueChanges()
                                        .subscribe(function (res) {
                                        if (res) {
                                            var shares = res.shares;
                                            shares = __assign((_a = {}, _a[userId] = true, _a), shares);
                                            _this.afs.doc('posts/' + obj.postId).update({ shares: shares });
                                        }
                                        var _a;
                                    })];
                            case 5:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        }); });
    };
    TimelineProvider.prototype.updatePOst = function (obj) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var userId = _this.afa.auth.currentUser.uid;
            obj.postBy = userId;
            console.log('post', obj);
            _this.afs.doc('accounts/' + userId).valueChanges()
                .subscribe(function (user) { return __awaiter(_this, void 0, void 0, function () {
                var photoURL, videoURL;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            console.log('post', user);
                            obj.user = user.name;
                            obj.username = user.username;
                            if (user.photoURL)
                                obj.userPhoto = user.photoURL;
                            if (!(obj.photoURL && !obj.photoURL.includes('http'))) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.imageProvider.uploadPostPhoto(userId, obj.photoURL)];
                        case 1:
                            photoURL = _a.sent();
                            obj.photoURL = photoURL;
                            _a.label = 2;
                        case 2:
                            if (!(obj.videoURL && !obj.videoURL.includes('http'))) return [3 /*break*/, 4];
                            return [4 /*yield*/, this.imageProvider.uploadPostVideo(userId, obj.videoURL)];
                        case 3:
                            videoURL = _a.sent();
                            obj.videoURL = videoURL;
                            _a.label = 4;
                        case 4:
                            this.afs.doc('posts/' + obj.postId).update(obj).then(function (post) {
                                resolve();
                            })
                                .catch(function (err) {
                                reject(err);
                            });
                            return [2 /*return*/];
                    }
                });
            }); });
        });
    };
    TimelineProvider.prototype.sharePost = function (obj) {
        var _this = this;
        return new Promise(function (resolve) {
            var userId = _this.afa.auth.currentUser.uid;
            obj.postBy = userId;
            console.log('post', obj);
            _this.afs.doc('accounts/' + userId).valueChanges()
                .subscribe(function (user) { return __awaiter(_this, void 0, void 0, function () {
                var _this = this;
                var photoURL;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            console.log('post', user);
                            obj.user = user.name;
                            if (user.photoURL)
                                obj.userPhoto = user.photoURL;
                            if (!obj.photoURL) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.imageProvider.uploadPostPhoto(userId, obj.photoURL)];
                        case 1:
                            photoURL = _a.sent();
                            obj.photoURL = photoURL;
                            _a.label = 2;
                        case 2: return [4 /*yield*/, this.afs.collection('posts').add(obj)
                                .then(function (res) { return resolve(res); })
                                .catch(function (err) { return console.log(err); })];
                        case 3:
                            _a.sent();
                            console.log("share", obj.postId);
                            return [4 /*yield*/, this.afs.doc('posts/' + obj.postId).valueChanges()
                                    .subscribe(function (res) {
                                    if (res.sharing) {
                                        var sharing = res.sharing;
                                        sharing = __assign((_a = {}, _a[userId] = true, _a), sharing);
                                        _this.afs.doc('posts/' + obj.postId).update({ shares: sharing });
                                    }
                                    else {
                                        var sharing = (_b = {}, _b[userId] = true, _b);
                                        _this.afs.doc('posts/' + obj.postId).update({ shares: sharing });
                                    }
                                    var _a, _b;
                                })];
                        case 4:
                            _a.sent();
                            this.createNotification(obj.uid, 'shared');
                            return [2 /*return*/];
                    }
                });
            }); });
        });
    };
    TimelineProvider.prototype.deletePost = function (postId) {
        var _this = this;
        //remove Post
        this.alertCtrl.create({
            title: "Delete Post",
            subTitle: "Are you sure you want to delete this post?",
            buttons: [
                {
                    text: "No",
                    handler: function () { return console.log('cancel'); }
                },
                {
                    text: "Yes",
                    handler: function () {
                        _this.afs.collection('posts').doc(postId).delete()
                            .catch(function (err) { return console.log(err); });
                    }
                }
            ]
        }).present();
    };
    TimelineProvider.prototype.likePost = function (postId, type, userDetail) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var user, likes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        debugger;
                        user = userDetail;
                        return [4 /*yield*/, new Promise(function (resolve) {
                                _this.afs.doc('posts/' + postId).valueChanges()
                                    .subscribe(function (post) {
                                    var likes = [];
                                    if (post.likes) {
                                        likes = post.likes;
                                        var data = {
                                            user: user.uid,
                                            type: type,
                                            name: user.name,
                                            photoURL: user.photoURL
                                        };
                                        likes.push(data);
                                    }
                                    else {
                                        var data = {
                                            user: user.uid,
                                            type: type,
                                            name: user.name,
                                            photoURL: user.photoURL
                                        };
                                        likes.push(data);
                                    }
                                    resolve(likes);
                                });
                            })];
                    case 1:
                        likes = _a.sent();
                        return [4 /*yield*/, this.afs.doc('posts/' + postId).update({ "likes": likes })];
                    case 2:
                        _a.sent();
                        this.createNotification(postId, 'liked');
                        return [2 /*return*/];
                }
            });
        });
    };
    TimelineProvider.prototype.dislikePost = function (postId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var user, likes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        user = this.afa.auth.currentUser;
                        return [4 /*yield*/, new Promise(function (resolve) {
                                _this.afs.doc('posts/' + postId).valueChanges()
                                    .subscribe(function (post) {
                                    debugger;
                                    var likes = post.likes;
                                    likes = likes.filter(function (item) {
                                        return item.user !== user.uid;
                                    });
                                    resolve(likes);
                                });
                            })];
                    case 1:
                        likes = _a.sent();
                        this.afs.doc('posts/' + postId).update({ "likes": likes });
                        return [2 /*return*/];
                }
            });
        });
    };
    TimelineProvider.prototype.addToBookmark = function (postId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var userId, bookmark;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userId = this.afa.auth.currentUser.uid;
                        return [4 /*yield*/, new Promise(function (resolve) {
                                _this.afs.doc('posts/' + postId).valueChanges()
                                    .subscribe(function (post) {
                                    var bookmark = post.bookmark;
                                    bookmark = __assign((_a = {}, _a[userId] = true, _a), bookmark);
                                    resolve(bookmark);
                                    var _a;
                                });
                            })];
                    case 1:
                        bookmark = _a.sent();
                        this.afs.doc('posts/' + postId).update({ bookmark: bookmark });
                        return [2 /*return*/];
                }
            });
        });
    };
    TimelineProvider.prototype.removeFromBookmark = function (postId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var userId, bookmark;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userId = this.afa.auth.currentUser.uid;
                        return [4 /*yield*/, new Promise(function (resolve) {
                                _this.afs.doc('posts/' + postId).valueChanges()
                                    .subscribe(function (post) {
                                    var bookmark = post.bookmark;
                                    delete bookmark[userId];
                                    resolve(bookmark);
                                });
                            })];
                    case 1:
                        bookmark = _a.sent();
                        this.afs.doc('posts/' + postId).update({ bookmark: bookmark });
                        return [2 /*return*/];
                }
            });
        });
    };
    TimelineProvider.prototype.commentPost = function (postId, obj) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var userId, comments;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userId = this.afa.auth.currentUser.uid;
                        return [4 /*yield*/, new Promise(function (resolve) {
                                _this.afs.doc('posts/' + postId).valueChanges()
                                    .subscribe(function (post) {
                                    var comments;
                                    if (post)
                                        comments = post.comments;
                                    var comment = {
                                        user: obj.user,
                                        photoURL: obj.photoURL ? obj.photoURL : null,
                                        createdAt: obj.createdAt,
                                        commentBy: obj.commentBy,
                                        text: obj.text
                                    };
                                    if (comments) {
                                        comments.push(comment);
                                    }
                                    else {
                                        comments = [comment];
                                    }
                                    resolve(comments);
                                });
                            })];
                    case 1:
                        comments = _a.sent();
                        return [4 /*yield*/, this.afs.doc('posts/' + postId).update({ comments: comments })];
                    case 2:
                        _a.sent();
                        this.createNotification(postId, 'commented');
                        return [2 /*return*/];
                }
            });
        });
    };
    //Notifications
    TimelineProvider.prototype.createNotification = function (postId, event) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var currentUser, post, user, notification;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        currentUser = this.afa.auth.currentUser.uid;
                        return [4 /*yield*/, new Promise(function (resolve) {
                                _this.afs.doc('posts/' + postId).valueChanges()
                                    .subscribe(function (post) { return resolve(post); });
                            })];
                    case 1:
                        post = _a.sent();
                        return [4 /*yield*/, new Promise(function (resolve) {
                                _this.afs.doc('accounts/' + currentUser).valueChanges()
                                    .subscribe(function (user) { return resolve(user); });
                            })];
                    case 2:
                        user = _a.sent();
                        notification = {
                            event: event,
                            userId: currentUser,
                            user: user.name,
                            userPhoto: user.photoURL,
                            owner: post.user,
                            postId: postId,
                            createdAt: new Date(),
                            text: post.text
                        };
                        return [4 /*yield*/, this.afs.collection('notifications').add(notification)
                                .catch(function (err) { return console.log(err); })];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TimelineProvider.prototype.readPosts = function () {
        var _this = this;
        var currentUser = this.afa.auth.currentUser.uid;
        this.afs.collection('posts')
            .snapshotChanges()
            .subscribe(function (data) {
            data.map(function (a) {
                var data = a.payload.doc.data();
                var uid = a.payload.doc.id;
                console.log('reading', data);
                if (!data.users || !data.users[currentUser] || data.users[currentUser] === false) {
                    var users = __assign({}, data.users, (_a = {}, _a[currentUser] = true, _a));
                    _this.afs.doc("posts/" + uid).update({
                        users: users
                    });
                }
                var _a;
            });
        });
    };
    TimelineProvider.prototype.addView = function (postId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var post, views;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('Adding views');
                        return [4 /*yield*/, new Promise(function (resolve) {
                                _this.afs.doc("posts/" + postId).valueChanges().subscribe(function (res) { return resolve(res); });
                            })];
                    case 1:
                        post = _a.sent();
                        views = 1;
                        console.log(post);
                        if (post && ('views' in post)) {
                            views = post.views + 1;
                        }
                        console.log('views', views);
                        return [4 /*yield*/, this.afs.doc("posts/" + postId).update({
                                views: views
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TimelineProvider.prototype.isPostUnread = function () {
        var currentUser = this.afa.auth.currentUser.uid;
        return this.afs.collection('posts')
            .valueChanges()
            .map(function (data) {
            console.log('Unread POsts', data);
            var res = [];
            data.forEach(function (post) {
                if (!post.users || !post.users[currentUser])
                    res.push(post);
            });
            return res;
        });
    };
    TimelineProvider.prototype.readNotifications = function () {
        var _this = this;
        var currentUser = this.afa.auth.currentUser.uid;
        this.afs.collection('notifications')
            .snapshotChanges()
            .subscribe(function (data) {
            data.map(function (a) {
                var data = a.payload.doc.data();
                var uid = a.payload.doc.id;
                console.log('reading', data);
                if (!data.users || !data.users[currentUser] || data.users[currentUser] === false) {
                    var users = __assign({}, data.users, (_a = {}, _a[currentUser] = true, _a));
                    _this.afs.doc("notifications/" + uid).update({
                        users: users
                    });
                }
                var _a;
            });
        });
    };
    TimelineProvider.prototype.isNotificationUnread = function () {
        var currentUser = this.afa.auth.currentUser.uid;
        return this.afs.collection('notifications')
            .valueChanges()
            .map(function (data) {
            console.log('Unread Notifications', data);
            var res = [];
            data.forEach(function (notification) {
                if (!notification.users || !notification.users[currentUser])
                    res.push(notification);
            });
            return res;
        });
    };
    TimelineProvider.prototype.getNotifications = function () {
        return this.afs.collection('notifications', function (ref) { return ref.orderBy('createdAt', 'desc'); }).valueChanges();
    };
    //Timelines
    TimelineProvider.prototype.getAllPosts = function () {
        return this.afs.collection('posts', function (ref) { return ref.orderBy('createdAt', 'desc'); } /*.limit(this.limit)*/).snapshotChanges();
    };
    TimelineProvider.prototype.getUserPosts = function (userId) {
        return this.afs.collection('posts', function (ref) { return ref.where('postBy', '==', userId).orderBy('createdAt', 'desc'); }).snapshotChanges();
    };
    TimelineProvider.prototype.getLikedPosts = function (userId) {
        return this.afs.collection('posts', function (ref) { return ref.where('likes.', '==', userId); }).snapshotChanges();
    };
    TimelineProvider.prototype.getBookmarkedPosts = function (userId) {
        return this.afs.collection('posts', function (ref) { return ref.where('bookmark.' + userId, '==', true); }).snapshotChanges();
    };
    TimelineProvider.prototype.getFollowingPosts = function () {
        return this.afs.collection('posts', function (ref) { return ref.orderBy('createdAt', 'desc'); }).snapshotChanges();
    };
    TimelineProvider.prototype.getPost = function (postId) {
        return this.afs.collection('posts').doc(postId).valueChanges();
    };
    TimelineProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_4__providers_image_image__["a" /* ImageProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], TimelineProvider);
    return TimelineProvider;
}());

//# sourceMappingURL=timeline.js.map

/***/ }),

/***/ 552:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesDetailPageModule", function() { return MessagesDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__messages_detail__ = __webpack_require__(1114);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MessagesDetailPageModule = /** @class */ (function () {
    function MessagesDetailPageModule() {
    }
    MessagesDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__messages_detail__["a" /* MessagesDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__messages_detail__["a" /* MessagesDetailPage */]),
            ],
        })
    ], MessagesDetailPageModule);
    return MessagesDetailPageModule;
}());

//# sourceMappingURL=messages-detail.module.js.map

/***/ }),

/***/ 553:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesPageModule", function() { return MessagesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__messages__ = __webpack_require__(1115);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MessagesPageModule = /** @class */ (function () {
    function MessagesPageModule() {
    }
    MessagesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__messages__["a" /* MessagesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__messages__["a" /* MessagesPage */]),
            ],
        })
    ], MessagesPageModule);
    return MessagesPageModule;
}());

//# sourceMappingURL=messages.module.js.map

/***/ }),

/***/ 554:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerifyAccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_loading_loading__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var VerifyAccountPage = /** @class */ (function () {
    function VerifyAccountPage(navCtrl, navParams, afa, afs, alertCtrl, loadingProvider, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afa = afa;
        this.afs = afs;
        this.alertCtrl = alertCtrl;
        this.loadingProvider = loadingProvider;
        this.toast = toast;
        this.message = '';
        var _a = this.navParams.get('user'), uid = _a.uid, email = _a.email;
        this.user = { uid: uid, email: email };
    }
    VerifyAccountPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        debugger;
        // var that = this;
        this.checkVerified = setInterval(function () {
            if (_this.afa.auth.currentUser) {
                _this.afa.auth.currentUser.reload();
                if (_this.afa.auth.currentUser.emailVerified) {
                    clearInterval(_this.checkVerified);
                    _this.emailVerified = true;
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */]);
                }
            }
        }, 1000);
    };
    VerifyAccountPage.prototype.sendEmailVerification = function () {
        var _this = this;
        this.afa.auth.currentUser.sendEmailVerification()
            .then(function () {
            _this.message = "Email verification sent!";
        });
    };
    VerifyAccountPage.prototype.setEmail = function () {
        var _this = this;
        this.alertCtrl.create({
            title: 'Change Email Address',
            message: "Please enter a new email address.",
            inputs: [
                {
                    name: 'email',
                    placeholder: 'Your Email Address',
                    value: this.user.email
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) { }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        var email = data["email"];
                        // Check if entered email is different from the current email
                        if (email !== _this.user.email) {
                            _this.loadingProvider.show();
                            // Update email on Firebase
                            _this.afa.auth.currentUser.updateEmail(email)
                                .then(function (res) {
                                //Update UserData
                                _this.afa.auth.currentUser.sendEmailVerification();
                                _this.afs.collection('accounts').doc(_this.user.uid).update({ email: email });
                                _this.ionViewDidLoad();
                                _this.loadingProvider.hide();
                                _this.toast.create({
                                    message: 'Email changed successfully',
                                    duration: 5000
                                }).present();
                            })
                                .catch(function (err) {
                                _this.loadingProvider.hide();
                                _this.toast.create({
                                    message: 'Invelid Email',
                                    duration: 5000
                                }).present();
                            });
                        }
                    }
                }
            ]
        }).present();
    };
    VerifyAccountPage.prototype.logout = function () {
        debugger;
        this.afa.auth.signOut();
        this.navCtrl.popToRoot();
    };
    VerifyAccountPage.prototype.emailVerification = function () {
    };
    VerifyAccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-verify-account',template:/*ion-inline-start:"E:\1_FacebookClone\1_CleanScript\Product\FacebookCloneV3\src\pages\verify-account\verify-account.html"*/'<ion-content padding>\n\n  <p>An email confirmation has been sent to:\n\n    <span>{{user.email}}</span>.</p>\n\n  <!-- Verification Menu -->\n\n  <ion-list>\n\n    <ion-item no-lines tappable (click)="sendEmailVerification()">\n\n      Resend Confirmation Email\n\n      <ion-icon name="md-contact" item-right></ion-icon>\n\n    </ion-item>\n\n    <ion-item no-lines tappable (click)="setEmail()">\n\n      Change your Email Address\n\n      <ion-icon name="md-mail-open" item-right></ion-icon>\n\n    </ion-item>\n\n    <ion-item no-lines tappable (click)="logout()">\n\n      Logout\n\n      <ion-icon name="md-log-out" item-right></ion-icon>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n</ion-content>'/*ion-inline-end:"E:\1_FacebookClone\1_CleanScript\Product\FacebookCloneV3\src\pages\verify-account\verify-account.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */]])
    ], VerifyAccountPage);
    return VerifyAccountPage;
}());

//# sourceMappingURL=verify-account.js.map

/***/ }),

/***/ 555:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_countries__ = __webpack_require__(1117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_loading_loading__ = __webpack_require__(18);
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






var avatar = 'assets/imgs/buddy.png';
var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, authProvider, alertCtrl, camera, zone, toast, loading) {
        this.navCtrl = navCtrl;
        this.authProvider = authProvider;
        this.alertCtrl = alertCtrl;
        this.camera = camera;
        this.zone = zone;
        this.toast = toast;
        this.loading = loading;
        this.date = new Date();
        this.data = {
            name: '',
            username: '',
            email: '',
            phone: '',
            photo: null,
            password: '',
            password2: '',
            // birthday: `${(this.date.getMonth() + 1)}/${this.date.getDate()}/${this.date.getFullYear()}`
            // birthday: `03-21-2020`
            birthday: this.date.toISOString()
        };
        this.image = avatar;
        this.step = 1;
        this.countries = __WEBPACK_IMPORTED_MODULE_4__util_countries__["a" /* default */];
        this.countryCode = '+55';
        this.showAlert = false;
        debugger;
        console.log(this.data.birthday);
    }
    SignupPage.prototype.isValid = function () {
        var res = (this.data.name !== '' && this.data.username !== '' && this.data.birthday &&
            ((this.data.email !== '' && this.data.password !== '' && this.data.password2 !== '' &&
                (this.data.password === this.data.password2)) ||
                this.data.phone !== ''));
        return res;
    };
    SignupPage.prototype.createAccount = function () {
        var _this = this;
        debugger;
        this.loading.show();
        var user = this.data;
        this.showAlert = true;
        user.phone = this.countryCode + user.phone;
        user.photoURL = this.image;
        if (this.data.email.trim() === '') {
            // email not provided by user, so signup will be done via phonenumber now
            debugger;
            window.FirebasePlugin.verifyPhoneNumber(function (credential) {
                debugger;
                _this.loading.hide();
                console.log(credential);
                // ask user to input verificationCode:
                var verificationId = credential.verificationId;
                var prompt = _this.alertCtrl.create({
                    title: 'Enter the Confirmation code',
                    inputs: [{ name: 'confirmationCode', placeholder: 'Confirmation Code' }],
                    buttons: [
                        {
                            text: 'Cancel',
                            handler: function (data) {
                                console.log('Cancel clicked');
                            }
                        },
                        {
                            text: 'Send',
                            handler: function (data) {
                                _this.authProvider.signUpWithPhoneNumber(__assign({ verificationId: verificationId, confirmationCode: data.confirmationCode }, user));
                            }
                        }
                    ]
                });
                if (_this.showAlert)
                    prompt.present().then(function () { return _this.showAlert = false; });
            }, function (error) {
                _this.loading.hide();
                debugger;
                console.log(error);
                _this.toast.create({
                    message: error,
                    duration: 5000
                }).present();
            }, user.phone, 60);
        }
        else {
            this.loading.hide();
            this.authProvider.signUpWithEmailAndPassword(user);
        }
    };
    SignupPage.prototype.choosePhoto = function () {
        var _this = this;
        // Ask if the user wants to take a photo or choose from photo gallery.
        var alert = this.alertCtrl.create({
            title: 'Set Profile Photo',
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
                            quality: 50,
                            targetWidth: 384,
                            targetHeight: 384,
                            destinationType: _this.camera.DestinationType.DATA_URL,
                            encodingType: _this.camera.EncodingType.JPEG,
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
                            quality: 50,
                            targetWidth: 384,
                            targetHeight: 384,
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
    SignupPage.prototype.ionViewDidLoad = function () {
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"E:\1_FacebookClone\1_CleanScript\Product\FacebookCloneV3\src\pages\signup\signup.html"*/'<ion-header>\n	<ion-navbar>\n		<ion-title>New Account</ion-title>\n	</ion-navbar>\n\n</ion-header>\n<ion-content padding>\n\n	<div *ngIf="step === 1">\n		<div class="logo">\n			<img [src]="image | cdvphotolibrary" alt="">\n			<br />\n			<button (click)="choosePhoto()" ion-button small icon-left color="light">\n				<ion-icon name="camera"></ion-icon>\n				Select Picture\n			</button>\n		</div>\n\n\n		<ion-list>\n			<ion-item>\n				<ion-label floating>Name</ion-label>\n				<ion-input [(ngModel)]="data.name" type="text"></ion-input>\n			</ion-item>\n\n			<ion-item>\n				<ion-label floating>Userame</ion-label>\n				<ion-input [(ngModel)]="data.username" type="text"></ion-input>\n			</ion-item>\n\n			<ion-item>\n				<ion-label floating>Birthday</ion-label>\n				<ion-datetime displayFormat="DD-MM-YYYY" [(ngModel)]="data.birthday"></ion-datetime>\n				<!-- <ion-input [(ngModel)]="data.birthday" type="date"></ion-input> -->\n			</ion-item>\n\n		</ion-list>\n		<button (click)="step = step + 1" ion-button block>Next Step</button>\n	</div>\n\n	<div *ngIf="step === 2">\n		<ion-list>\n			<ion-item>\n				<ion-label floating>Your Email</ion-label>\n				<ion-input [(ngModel)]="data.email" type="text"></ion-input>\n\n			</ion-item>\n			<ion-item>\n				<ion-label floating>Password</ion-label>\n				<ion-input [(ngModel)]="data.password" type="password"></ion-input>\n			</ion-item>\n			<ion-item>\n				<ion-label floating>Password Confirmation</ion-label>\n				<ion-input [(ngModel)]="data.password2" type="password"></ion-input>\n			</ion-item>\n		</ion-list>\n		<br />\n		<p class="divider">\n			<span>OR</span>\n		</p>\n		<br />\n		<ion-list class="phone">\n			<div class="item row">\n				<div class="col">\n					<label class="item-input item-select">\n						<div class="input-label">\n						</div>\n						<ion-select [(ngModel)]="countryCode">\n							<ion-option *ngFor="let country of countries" [value]="country.dial_code">{{country.code}}\n								{{country.dial_code}}</ion-option>\n						</ion-select>\n					</label>\n				</div>\n				<div class="col">\n					<div class="item-input-inset">\n						<label class="item-input-wrapper">\n							<ion-input [(ngModel)]="data.phone" type="number" placeholder="Phone"></ion-input>\n						</label>\n					</div>\n				</div>\n			</div>\n		</ion-list>\n		<button (click)="step = step - 1" ion-button block color="danger">Go Back</button>\n		<button (click)="createAccount()" [disabled]="!isValid()" ion-button block color="secondary">Create\n			Account</button>\n	</div>\n\n</ion-content>'/*ion-inline-end:"E:\1_FacebookClone\1_CleanScript\Product\FacebookCloneV3\src\pages\signup\signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_loading_loading__["a" /* LoadingProvider */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 556:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageFormPageModule", function() { return PageFormPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page_form__ = __webpack_require__(1118);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PageFormPageModule = /** @class */ (function () {
    function PageFormPageModule() {
    }
    PageFormPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__page_form__["a" /* PageFormPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__page_form__["a" /* PageFormPage */]),
            ],
        })
    ], PageFormPageModule);
    return PageFormPageModule;
}());

//# sourceMappingURL=page-form.module.js.map

/***/ }),

/***/ 557:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageProfilePageModule", function() { return PageProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page_profile__ = __webpack_require__(1119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PageProfilePageModule = /** @class */ (function () {
    function PageProfilePageModule() {
    }
    PageProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__page_profile__["a" /* PageProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__page_profile__["a" /* PageProfilePage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], PageProfilePageModule);
    return PageProfilePageModule;
}());

//# sourceMappingURL=page-profile.module.js.map

/***/ }),

/***/ 558:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageModule", function() { return PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page__ = __webpack_require__(1120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PageModule = /** @class */ (function () {
    function PageModule() {
    }
    PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__page__["a" /* PagesList */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__page__["a" /* PagesList */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], PageModule);
    return PageModule;
}());

//# sourceMappingURL=page.module.js.map

/***/ }),

/***/ 559:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchUserPageModule", function() { return SearchUserPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_user__ = __webpack_require__(1121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SearchUserPageModule = /** @class */ (function () {
    function SearchUserPageModule() {
    }
    SearchUserPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__search_user__["a" /* SearchUserPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__search_user__["a" /* SearchUserPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], SearchUserPageModule);
    return SearchUserPageModule;
}());

//# sourceMappingURL=search-user.module.js.map

/***/ }),

/***/ 560:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageModule", function() { return SearchPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search__ = __webpack_require__(1122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SearchPageModule = /** @class */ (function () {
    function SearchPageModule() {
    }
    SearchPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__search__["a" /* SearchPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__search__["a" /* SearchPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], SearchPageModule);
    return SearchPageModule;
}());

//# sourceMappingURL=search.module.js.map

/***/ }),

/***/ 561:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Declare TabsService as a provider in app.module.ts
// Inject TabsService in your class: constructor(public tabs: TabsService){}
// Use the this.tabs.hide() or this.tabs.show() methods wherever you want
var TabsProvider = /** @class */ (function () {
    function TabsProvider() {
        this.tabs = document.querySelectorAll('.tabbar');
    }
    TabsProvider.prototype.hide = function () {
        var _this = this;
        // let 
        var scrollContent = document.querySelectorAll('.scroll-content');
        if (this.tabs !== null) {
            Object.keys(this.tabs).map(function (key) {
                _this.tabs[key].style.display = 'none';
            });
            // fix for removing the margin if you got scorllable content
            // setTimeout(() =>{
            //   Object.keys(scrollContent).map((key) => {
            //     scrollContent[key].style.marginBottom = '0';
            //   });
            // })
        }
    };
    TabsProvider.prototype.show = function () {
        var _this = this;
        // let tabs = document.querySelectorAll('.tabbar');
        if (this.tabs !== null) {
            Object.keys(this.tabs).map(function (key) {
                _this.tabs[key].style.display = 'flex';
            });
        }
    };
    TabsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], TabsProvider);
    return TabsProvider;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 562:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewPostPageModule", function() { return ViewPostPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_post__ = __webpack_require__(1123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ViewPostPageModule = /** @class */ (function () {
    function ViewPostPageModule() {
    }
    ViewPostPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__view_post__["a" /* ViewPostPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__view_post__["a" /* ViewPostPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], ViewPostPageModule);
    return ViewPostPageModule;
}());

//# sourceMappingURL=view-post.module.js.map

/***/ }),

/***/ 605:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_geocoder__ = __webpack_require__(418);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { Geolocation } from '@ionic-native/geolocation/ngx';

// import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
var LocationProvider = /** @class */ (function () {
    function LocationProvider(geolocation, 
        // private nativeGeocoder: NativeGeocoder<typeof NativeGeocoder | null>
        nativeGeocoder) {
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
    }
    LocationProvider.prototype.getLocation = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.geolocation.getCurrentPosition().then(function (position) {
                console.log('position', position);
                var res = { lat: position.coords.latitude, long: position.coords.longitude };
                resolve(res);
            }).catch(function (error) {
                console.log('Error getting location', error);
            });
        });
    };
    LocationProvider.prototype.getAddress = function (location) {
        var _this = this;
        return new Promise(function (resolve) {
            debugger;
            _this.nativeGeocoder.reverseGeocode(location.lat, location.long)
                .then(function (result) {
                console.log('native geocoder result:: ', JSON.stringify(result));
                resolve(result[0]);
            }).catch(function (error) { return console.log(error); });
            resolve();
        });
    };
    LocationProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_geocoder__["a" /* NativeGeocoder */]])
    ], LocationProvider);
    return LocationProvider;
}());

//# sourceMappingURL=location.js.map

/***/ }),

/***/ 607:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileAddDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_account_account__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_loading_loading__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(49);
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
 * Generated class for the ProfileAddDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfileAddDetailsPage = /** @class */ (function () {
    function ProfileAddDetailsPage(navCtrl, navParams, accountProvider, alertCtrl, loading, camera, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.accountProvider = accountProvider;
        this.alertCtrl = alertCtrl;
        this.loading = loading;
        this.camera = camera;
        this.platform = platform;
        this.account = {
            photoURL: '',
            coverPhotoURL: '',
            currentCity: '',
            workPlace: '',
            relationshipStatus: '',
            education: '',
            hometown: ''
        };
        this.accountProvider.getAccount(null).subscribe(function (data) {
            _this.account = data;
            console.log(_this.account);
        });
    }
    // Update Profile Photo
    ProfileAddDetailsPage.prototype.changeProfilePhoto = function () {
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
                        });
                    }
                }
            ]
        }).present();
    };
    // Update Cover Photo
    ProfileAddDetailsPage.prototype.changeCoverPhoto = function () {
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
                        });
                    }
                }
            ]
        }).present();
    };
    ProfileAddDetailsPage.prototype.updateProfile = function () {
        var _this = this;
        console.log('Updated Profile', this.account);
        this.loading.show();
        this.accountProvider.updateAccount(this.account).then(function (data) {
            console.log('Updated data', data);
            _this.loading.hide();
        });
    };
    ProfileAddDetailsPage.prototype.changeCity = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Change Current City',
            message: "Please enter your Current City",
            inputs: [
                {
                    name: 'currentCity',
                    placeholder: 'Your Cuurent City',
                    value: this.account.currentCity,
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) { }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        console.log('data', data);
                        _this.account.currentCity = data.currentCity;
                    }
                }
            ]
        }).present();
    };
    ProfileAddDetailsPage.prototype.changeWorkPlace = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Change Your Work Place',
            message: "Please enter your Current Work Place",
            inputs: [
                {
                    name: 'workPlace',
                    placeholder: 'Your Current Work Place',
                    value: this.account.workPlace,
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) { }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        console.log('data', data);
                        _this.account.workPlace = data.workPlace;
                    }
                }
            ]
        }).present();
    };
    ProfileAddDetailsPage.prototype.changeEducation = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Change Your Recent Education',
            message: "Please enter your Recent Education",
            inputs: [
                {
                    name: 'education',
                    placeholder: 'Your Recent Education',
                    value: this.account.education,
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) { }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        console.log('data', data);
                        _this.account.education = data.education;
                    }
                }
            ]
        }).present();
    };
    ProfileAddDetailsPage.prototype.changeHometown = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Change Your Hometown',
            message: "Please enter your Hometown",
            inputs: [
                {
                    name: 'hometown',
                    placeholder: 'Your Hometown',
                    value: this.account.hometown,
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) { }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        console.log('data', data);
                        _this.account.hometown = data.hometown;
                    }
                }
            ]
        }).present();
    };
    ProfileAddDetailsPage.prototype.changeRelationshipStatus = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Change Your Relationship Status',
            message: "Please enter your Status",
            inputs: [
                {
                    name: 'relationshipStatus',
                    placeholder: 'Your Relationship Status',
                    value: this.account.relationshipStatus,
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) { }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        console.log('data', data);
                        _this.account.relationshipStatus = data.relationshipStatus;
                    }
                }
            ]
        }).present();
    };
    ProfileAddDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfileAddDetailsPage');
    };
    ProfileAddDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile-add-details',template:/*ion-inline-start:"E:\1_FacebookClone\1_CleanScript\Product\FacebookCloneV3\src\pages\profile-add-details\profile-add-details.html"*/'<!--\n  Generated template for the ProfileAddDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Edit Profile</ion-title>\n    <ion-buttons right>\n      <button ion-button (click)="updateProfile()">\n        Update\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="content">\n  <div class="profilePic-div">\n    <h3>Profile Picture</h3>\n    <p>Choose a recent photo of yourself. This helps people see that they\'re getting in touch with the rigth person</p>\n    <div class="img-div" (click)="changeProfilePhoto()">\n      <img *ngIf="!account.photoURL" src="assets/imgs/profile/profile-placeholder.jpg" />\n      <img *ngIf="account.photoURL" src="{{ account.photoURL }}" />\n      <p>\n        <ion-icon name="md-camera"></ion-icon> ADD</p>\n    </div>\n  </div>\n  <div class="coverPic-div">\n    <h3>Cover Picture</h3>\n    <p>Choose a photo to appear at the top of your profile. It could be from a recent trip or something you\'re proud of.</p>\n    <div class="img-div" (click)="changeCoverPhoto()">\n      <img *ngIf="!account.coverPhotoURL" src="assets/imgs/profile/cover-photo.png" />\n      <img *ngIf="account.coverPhotoURL" src="{{ account.coverPhotoURL }}" />\n      <p>\n        <ion-icon name="md-camera"></ion-icon> ADD</p>\n    </div>\n  </div>\n\n  <div class="details-div">\n    <h3>Details</h3>\n    <p>Add your details to let people know more about who you are</p>\n    <div>\n      <ion-list>\n        <ion-item (click)="changeCity()">\n          <ion-icon name="ios-home-outline"></ion-icon>\n          <span class="details-text">{{ this.account.currentCity ? this.account.currentCity : \'Current City\' }}</span>\n        </ion-item>\n        <ion-item (click)="changeWorkPlace()">\n          <ion-icon name="ios-briefcase-outline"></ion-icon>\n          <span class="details-text"> {{ this.account.workPlace ? this.account.workPlace : \'Work Place\' }}</span>\n        </ion-item>\n        <ion-item (click)="changeEducation()">\n          <ion-icon name="ios-school-outline"></ion-icon>\n          <span class="details-text">{{ this.account.education ? this.account.education : \'Education\' }} </span>\n        </ion-item>\n        <ion-item (click)="changeHometown()">\n          <ion-icon name="ios-pin-outline"></ion-icon>\n          <span class="details-text">{{ this.account.hometown ? this.account.hometown : \'Hometown\' }}</span>\n        </ion-item>\n        <ion-item (click)="changeRelationshipStatus()">\n          <ion-icon name="ios-heart-outline"></ion-icon>\n          <span class="details-text"> {{ this.account.relationshipStatus ? this.account.relationshipStatus : \'Relationship Status\' }}</span>\n        </ion-item>\n      </ion-list>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"E:\1_FacebookClone\1_CleanScript\Product\FacebookCloneV3\src\pages\profile-add-details\profile-add-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_account_account__["a" /* AccountProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]])
    ], ProfileAddDetailsPage);
    return ProfileAddDetailsPage;
}());

//# sourceMappingURL=profile-add-details.js.map

/***/ }),

/***/ 608:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(609);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(715);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__loading_loading__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(889);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
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




// import 'rxjs/add/operator/map'

var ChatProvider = /** @class */ (function () {
    function ChatProvider(afs, afa, loadingProvider) {
        this.afs = afs;
        this.afa = afa;
        this.loadingProvider = loadingProvider;
        this.totalUnreadedMessages = 0;
    }
    ChatProvider.prototype.openChat = function (viewCtrl, recipient, sender) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var chat, newChat, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.log('Recipient', recipient);
                        this.loadingProvider.show();
                        return [4 /*yield*/, new Promise(function (resolve) {
                                _this.afs.collection('messages', function (ref) { return ref
                                    .where('users.' + recipient.uid, '==', true)
                                    .where('users.' + sender.uid, '==', true); })
                                    .snapshotChanges().subscribe(function (res) {
                                    var chat = [];
                                    res.map(function (a) {
                                        var data = a.payload.doc.data();
                                        var uid = a.payload.doc.id;
                                        chat.push(__assign({ uid: uid }, data));
                                    });
                                    resolve(chat);
                                });
                            })];
                    case 1:
                        chat = _b.sent();
                        console.log('Chat', chat);
                        if (!(chat.length > 0)) return [3 /*break*/, 2];
                        viewCtrl.dismiss();
                        this.loadingProvider.hide();
                        return [3 /*break*/, 4];
                    case 2:
                        newChat = {
                            users: (_a = {},
                                _a[sender.uid] = true,
                                _a[recipient.uid] = true,
                                _a),
                            recipient: recipient.name,
                            recipientPhoto: recipient.photoURL,
                            createdBy: sender.uid,
                            sender: sender.name,
                            senderPhoto: sender.photoURL
                        };
                        return [4 /*yield*/, this.afs.collection('messages').add(newChat)];
                    case 3:
                        _b.sent();
                        viewCtrl.dismiss();
                        this.loadingProvider.hide();
                        _b.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ChatProvider.prototype.startChat = function (recipient, sender) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                        var _this = this;
                        var chat, newChat, _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    console.log('Recipient', recipient);
                                    this.loadingProvider.show();
                                    return [4 /*yield*/, new Promise(function (resolve) {
                                            _this.afs.collection('messages', function (ref) { return ref
                                                .where('users.' + recipient.uid, '==', true)
                                                .where('users.' + sender.uid, '==', true); })
                                                .snapshotChanges().subscribe(function (res) {
                                                var chat = [];
                                                res.map(function (a) {
                                                    var data = a.payload.doc.data();
                                                    var uid = a.payload.doc.id;
                                                    chat.push(__assign({ uid: uid }, data));
                                                });
                                                resolve(chat);
                                            });
                                        })];
                                case 1:
                                    chat = _b.sent();
                                    console.log('Chat', chat);
                                    if (chat.length > 0) {
                                        resolve(chat[0]);
                                        this.loadingProvider.hide();
                                    }
                                    else {
                                        newChat = {
                                            users: (_a = {},
                                                _a[sender.uid] = true,
                                                _a[recipient.uid] = true,
                                                _a),
                                            recipient: recipient.name,
                                            recipientPhoto: recipient.photoURL,
                                            createdBy: sender.uid,
                                            sender: sender.name,
                                            senderPhoto: sender.photoURL
                                        };
                                        this.afs.collection('messages').add(newChat).then(function (chat) {
                                            _this.loadingProvider.hide();
                                            resolve(chat);
                                        });
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    ChatProvider.prototype.sendMessage = function (chatId, text) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var currentUser, messages;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        currentUser = this.afa.auth.currentUser.uid;
                        return [4 /*yield*/, new Promise(function (resolve) {
                                _this.afs.collection('messages').doc(chatId).valueChanges()
                                    .subscribe(function (data) {
                                    var messages = data.messages;
                                    var message = {
                                        createdAt: new Date(),
                                        userId: currentUser,
                                        text: text,
                                        unread: true
                                    };
                                    if (messages) {
                                        messages.push(message);
                                    }
                                    else {
                                        messages = [message];
                                    }
                                    resolve(messages);
                                });
                            })];
                    case 1:
                        messages = _a.sent();
                        return [4 /*yield*/, this.afs.collection('messages').doc(chatId).update({ messages: messages })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ChatProvider.prototype.getChat = function (chatId) {
        return this.afs.collection('messages').doc(chatId).valueChanges();
    };
    ChatProvider.prototype.readMessage = function (chatId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var currentUser, messages;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        currentUser = this.afa.auth.currentUser.uid;
                        return [4 /*yield*/, new Promise(function (resolve) {
                                _this.afs.collection('messages').doc(chatId).valueChanges()
                                    .subscribe(function (data) {
                                    var messages = data.messages;
                                    if (messages) {
                                        for (var i = 0; i < messages.length; i++) {
                                            if (messages[i].userId !== currentUser)
                                                messages[i].unread = false;
                                        }
                                    }
                                    resolve(messages);
                                });
                            })];
                    case 1:
                        messages = _a.sent();
                        if (!messages) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.afs.collection('messages').doc(chatId).update({ messages: messages })];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ChatProvider.prototype.getChats = function () {
        var currentUser = this.afa.auth.currentUser.uid;
        return this.afs.collection('messages', function (ref) { return ref.where('users.' + currentUser, '==', true); }).snapshotChanges();
    };
    ChatProvider.prototype.isUnread = function () {
        var currentUser = this.afa.auth.currentUser.uid;
        return this.afs.collection('messages', function (ref) { return ref
            .where('users.' + currentUser, '==', true); })
            .valueChanges()
            .map(function (data) {
            var res = [];
            data.forEach(function (chat) {
                if (chat.messages)
                    chat.messages.forEach(function (item) {
                        if (item.unread && item.userId !== currentUser)
                            res.push(item);
                    });
            });
            return res;
        });
    };
    ChatProvider.prototype.getAllUnReadedMessages = function () {
        var _this = this;
        this.getChats().subscribe(function (data) {
            var chats = [];
            data.map(function (a) {
                var data = a.payload.doc.data();
                var uid = a.payload.doc.id;
                chats.push(__assign({ uid: uid }, data));
            });
            console.log('Chats', chats);
            for (var i = 0; i < chats.length; i++) {
                if (chats[i].messages) {
                    for (var j = 0; j < chats[i].messages.length; j++) {
                        if (chats[i].messages[j].unread) {
                            _this.totalUnreadedMessages += 1;
                        }
                    }
                }
            }
            console.log('total unreaed ========>>>>>>>>>>>', _this.totalUnreadedMessages);
        });
    };
    ChatProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_3__loading_loading__["a" /* LoadingProvider */]])
    ], ChatProvider);
    return ChatProvider;
}());

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__image_image__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_loading_loading__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(10);
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






/*
  Generated class for the PageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var PageProvider = /** @class */ (function () {
    function PageProvider(afs, afa, imageProvider, loading, alertCtrl) {
        this.afs = afs;
        this.afa = afa;
        this.imageProvider = imageProvider;
        this.loading = loading;
        this.alertCtrl = alertCtrl;
        console.log('Hello PageProvider Provider');
    }
    PageProvider.prototype.getPages = function () {
        return this.afs.collection('pages').snapshotChanges();
    };
    PageProvider.prototype.createPage = function (owner, pageObject) {
        return __awaiter(this, void 0, void 0, function () {
            var photoURL, coverPhotoURL, page;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!pageObject.photoURL) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.imageProvider.uploadProfilePhoto(owner.uid, pageObject.photoURL)
                                .catch(function (err) { return console.log(err); })];
                    case 1:
                        photoURL = _a.sent();
                        _a.label = 2;
                    case 2:
                        if (!pageObject.coverPhotoURL) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.imageProvider.uploadProfilePhoto(owner.uid, pageObject.photoURL)
                                .catch(function (err) { return console.log(err); })];
                    case 3:
                        coverPhotoURL = _a.sent();
                        _a.label = 4;
                    case 4:
                        page = {
                            pageName: pageObject.pageName,
                            description: pageObject.description,
                            photoURL: photoURL ? photoURL : null,
                            coverPhotoURL: coverPhotoURL ? coverPhotoURL : null,
                            ownerId: owner.uid,
                            ownerName: owner.name,
                            OwnerEmail: owner.email,
                            website: pageObject.website
                        };
                        return [2 /*return*/, this.afs.collection('pages').add(page)];
                }
            });
        });
    };
    PageProvider.prototype.likeAndFollowPage = function (pageId, userDetail) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var user, page;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        user = userDetail;
                        return [4 /*yield*/, new Promise(function (resolve) {
                                _this.afs.doc('pages/' + pageId).valueChanges()
                                    .subscribe(function (page) {
                                    var likes = [];
                                    var followers = [];
                                    // Adding Likes
                                    if (page.likes) {
                                        likes = page.likes;
                                        var data = {
                                            user: user.uid,
                                            type: 'like',
                                            name: user.name,
                                            photoURL: user.photoURL
                                        };
                                        likes.push(data);
                                    }
                                    else {
                                        var data = {
                                            user: user.uid,
                                            type: 'like',
                                            name: user.name,
                                            photoURL: user.photoURL
                                        };
                                        likes.push(data);
                                    }
                                    page.likes = likes;
                                    // Adding Followers
                                    if (page.followers) {
                                        followers = page.followers;
                                        var follower = {
                                            user: user.uid,
                                            name: user.name,
                                            photoURL: user.photoURL
                                        };
                                        followers.push(follower);
                                    }
                                    else {
                                        var follower = {
                                            user: user.uid,
                                            name: user.name,
                                            photoURL: user.photoURL
                                        };
                                        followers.push(follower);
                                    }
                                    page.followers = followers;
                                    resolve(page);
                                });
                            })];
                    case 1:
                        page = _a.sent();
                        return [4 /*yield*/, this.afs.doc('pages/' + pageId).update(page)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PageProvider.prototype.dislikeAndunFollowPage = function (pageId, userDetail) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var user, page;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        user = userDetail;
                        return [4 /*yield*/, new Promise(function (resolve) {
                                _this.afs.doc('pages/' + pageId).valueChanges()
                                    .subscribe(function (page) {
                                    // Removing Like
                                    var likes = page.likes;
                                    likes = likes.filter(function (item) {
                                        return item.user !== userDetail.uid;
                                    });
                                    page.likes = likes;
                                    // Removing Followers
                                    var followers = page.followers;
                                    followers = followers.filter(function (item) {
                                        return item.user !== userDetail.uid;
                                    });
                                    page.followers = followers;
                                    resolve(page);
                                });
                            })];
                    case 1:
                        page = _a.sent();
                        return [4 /*yield*/, this.afs.doc('pages/' + pageId).update(page)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PageProvider.prototype.updatePage = function (obj, pageId) {
        return __awaiter(this, void 0, void 0, function () {
            var currentUser, _a, _b, e_1;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        currentUser = this.afa.auth.currentUser.uid;
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 6, , 7]);
                        if (!obj.photoURL) return [3 /*break*/, 3];
                        _a = obj;
                        return [4 /*yield*/, this.imageProvider.uploadProfilePhoto(currentUser, obj.photoURL)];
                    case 2:
                        _a.photoURL = (_c.sent());
                        _c.label = 3;
                    case 3:
                        if (!obj.coverPhotoURL) return [3 /*break*/, 5];
                        _b = obj;
                        return [4 /*yield*/, this.imageProvider.uploadProfilePhoto(currentUser, obj.coverPhotoURL)];
                    case 4:
                        _b.coverPhotoURL = (_c.sent());
                        _c.label = 5;
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        e_1 = _c.sent();
                        console.log(e_1);
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/, this.afs.doc('pages/' + pageId).update(__assign({}, obj))
                            .catch(function (err) { return console.log(err); })];
                }
            });
        });
    };
    PageProvider.prototype.getAllPagesPost = function () {
        return this.afs.collection('pagesPosts', function (ref) { return ref.orderBy('createdAt', 'desc'); } /*.limit(this.limit)*/).snapshotChanges();
    };
    PageProvider.prototype.postOnPage = function (obj) {
        var _this = this;
        return new Promise(function (resolve) {
            var userId = _this.afa.auth.currentUser.uid;
            obj.postBy = userId;
            console.log('post', obj);
            _this.afs.doc('accounts/' + userId).valueChanges()
                .subscribe(function (user) { return __awaiter(_this, void 0, void 0, function () {
                var _this = this;
                var photoURL, videoURL;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            console.log('post', user);
                            obj.user = user.name;
                            obj.username = user.username;
                            if (user.photoURL)
                                obj.userPhoto = user.photoURL;
                            if (!(obj.photoURL && !obj.photoURL.includes('http'))) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.imageProvider.uploadPostPhoto(userId, obj.photoURL)];
                        case 1:
                            photoURL = _a.sent();
                            obj.photoURL = photoURL;
                            _a.label = 2;
                        case 2:
                            if (!(obj.videoURL && !obj.videoURL.includes('http'))) return [3 /*break*/, 4];
                            return [4 /*yield*/, this.imageProvider.uploadPostVideo(userId, obj.videoURL)];
                        case 3:
                            videoURL = _a.sent();
                            obj.videoURL = videoURL;
                            _a.label = 4;
                        case 4:
                            this.afs.collection('pagesPosts').add(obj)
                                .then(function (res) { return resolve(res); })
                                .catch(function (err) { return console.log(err); });
                            console.log("share", obj.postId);
                            return [4 /*yield*/, this.afs.doc('pagesPosts/' + obj.postId).valueChanges()
                                    .subscribe(function (res) {
                                    if (res) {
                                        var shares = res.shares;
                                        shares = __assign((_a = {}, _a[userId] = true, _a), shares);
                                        _this.afs.doc('pagesPosts/' + obj.postId).update({ shares: shares });
                                    }
                                    var _a;
                                })];
                        case 5:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
        });
    };
    PageProvider.prototype.updatePagePost = function (obj) {
        var _this = this;
        var userId = this.afa.auth.currentUser.uid;
        obj.postBy = userId;
        console.log('post', obj);
        this.afs.doc('accounts/' + userId).valueChanges()
            .subscribe(function (user) { return __awaiter(_this, void 0, void 0, function () {
            var photoURL, videoURL;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('post', user);
                        obj.user = user.name;
                        obj.username = user.username;
                        if (user.photoURL)
                            obj.userPhoto = user.photoURL;
                        if (!(obj.photoURL && !obj.photoURL.includes('http'))) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.imageProvider.uploadPostPhoto(userId, obj.photoURL)];
                    case 1:
                        photoURL = _a.sent();
                        obj.photoURL = photoURL;
                        _a.label = 2;
                    case 2:
                        if (!(obj.videoURL && !obj.videoURL.includes('http'))) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.imageProvider.uploadPostVideo(userId, obj.videoURL)];
                    case 3:
                        videoURL = _a.sent();
                        obj.videoURL = videoURL;
                        _a.label = 4;
                    case 4:
                        this.afs.doc('pagesPosts/' + obj.postId).update(obj);
                        return [2 /*return*/];
                }
            });
        }); });
    };
    PageProvider.prototype.likePost = function (postId, type, userDetail) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var user, likes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        user = userDetail;
                        return [4 /*yield*/, new Promise(function (resolve) {
                                _this.afs.doc('pagesPosts/' + postId).valueChanges()
                                    .subscribe(function (post) {
                                    var likes = [];
                                    if (post.likes) {
                                        likes = post.likes;
                                        var data = {
                                            user: user.uid,
                                            type: type,
                                            name: user.name,
                                            photoURL: user.photoURL
                                        };
                                        likes.push(data);
                                    }
                                    else {
                                        var data = {
                                            user: user.uid,
                                            type: type,
                                            name: user.name,
                                            photoURL: user.photoURL
                                        };
                                        likes.push(data);
                                    }
                                    resolve(likes);
                                });
                            })];
                    case 1:
                        likes = _a.sent();
                        return [4 /*yield*/, this.afs.doc('posts/' + postId).update({ "likes": likes })];
                    case 2:
                        _a.sent();
                        this.createNotification(postId, 'liked');
                        return [2 /*return*/];
                }
            });
        });
    };
    PageProvider.prototype.dislikePost = function (postId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var user, likes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        user = this.afa.auth.currentUser;
                        return [4 /*yield*/, new Promise(function (resolve) {
                                _this.afs.doc('pagesPosts/' + postId).valueChanges()
                                    .subscribe(function (post) {
                                    var likes = post.likes;
                                    likes = likes.filter(function (item) {
                                        return item.user !== user.uid;
                                    });
                                    resolve(likes);
                                });
                            })];
                    case 1:
                        likes = _a.sent();
                        this.afs.doc('posts/' + postId).update({ "likes": likes });
                        return [2 /*return*/];
                }
            });
        });
    };
    PageProvider.prototype.commentPost = function (postId, obj) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var userId, comments;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userId = this.afa.auth.currentUser.uid;
                        return [4 /*yield*/, new Promise(function (resolve) {
                                _this.afs.doc('posts/' + postId).valueChanges()
                                    .subscribe(function (post) {
                                    var comments;
                                    if (post)
                                        comments = post.comments;
                                    var comment = {
                                        user: obj.user,
                                        photoURL: obj.photoURL ? obj.photoURL : null,
                                        createdAt: obj.createdAt,
                                        commentBy: obj.commentBy,
                                        text: obj.text
                                    };
                                    if (comments) {
                                        comments.push(comment);
                                    }
                                    else {
                                        comments = [comment];
                                    }
                                    resolve(comments);
                                });
                            })];
                    case 1:
                        comments = _a.sent();
                        return [4 /*yield*/, this.afs.doc('posts/' + postId).update({ comments: comments })];
                    case 2:
                        _a.sent();
                        this.createNotification(postId, 'commented');
                        return [2 /*return*/];
                }
            });
        });
    };
    //Notifications
    PageProvider.prototype.createNotification = function (postId, event) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var currentUser, post, user, notification;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        currentUser = this.afa.auth.currentUser.uid;
                        return [4 /*yield*/, new Promise(function (resolve) {
                                _this.afs.doc('posts/' + postId).valueChanges()
                                    .subscribe(function (post) { return resolve(post); });
                            })];
                    case 1:
                        post = _a.sent();
                        return [4 /*yield*/, new Promise(function (resolve) {
                                _this.afs.doc('accounts/' + currentUser).valueChanges()
                                    .subscribe(function (user) { return resolve(user); });
                            })];
                    case 2:
                        user = _a.sent();
                        notification = {
                            event: event,
                            userId: currentUser,
                            user: user.name,
                            userPhoto: user.photoURL,
                            owner: post.user,
                            postId: postId,
                            createdAt: new Date(),
                            text: post.text
                        };
                        return [4 /*yield*/, this.afs.collection('notifications').add(notification)
                                .catch(function (err) { return console.log(err); })];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PageProvider.prototype.getPageDetail = function (uid) {
        return this.afs.doc('pages/' + uid).valueChanges();
    };
    PageProvider.prototype.deletePage = function (postId) {
        return this.afs.collection('pages').doc(postId).delete()
            .catch(function (err) { return console.log(err); });
    };
    PageProvider.prototype.getPagePosts = function (pageId) {
        return this.afs.collection('posts', function (ref) { return ref.where('postBy', '==', pageId).orderBy('createdAt', 'desc'); }).snapshotChanges();
    };
    PageProvider.prototype.getPageByName = function (name) {
        return this.afs.collection('pages', function (ref) { return ref.where('pageName', '==', name).orderBy('createdAt', 'desc'); }).snapshotChanges();
    };
    PageProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_3__image_image__["a" /* ImageProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["b" /* AlertController */]])
    ], PageProvider);
    return PageProvider;
}());

//# sourceMappingURL=page.js.map

/***/ }),

/***/ 715:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(1141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_signup_signup__ = __webpack_require__(555);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_verify_account_verify_account__ = __webpack_require__(554);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_friends_friends__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_market_place_market_place__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_notifications_notifications__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_more_more__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_comments_comments__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_reactions_popover_reactions_popover__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_recover_account_recover_account__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_profile_add_details_profile_add_details__ = __webpack_require__(607);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__ = __webpack_require__(602);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__ = __webpack_require__(603);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_camera__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_in_app_browser__ = __webpack_require__(1142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_media_capture__ = __webpack_require__(606);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_base64__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_file_path__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_native_geocoder__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__firebaseConfig__ = __webpack_require__(1143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_angularfire2__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_angularfire2_firestore__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_angularfire2_auth__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_account_account__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_auth_auth__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__providers_loading_loading__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__providers_image_image__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__util_cdvphotolibrary_pipe__ = __webpack_require__(1144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__providers_timeline_timeline__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__providers_location_location__ = __webpack_require__(605);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__providers_chat_chat__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__providers_tabs_tabs__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__providers_page_page__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__components_components_module__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_view_post_view_post_module__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_messages_messages_module__ = __webpack_require__(553);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_search_search_module__ = __webpack_require__(560);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_search_user_search_user_module__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_messages_detail_messages_detail_module__ = __webpack_require__(552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_page_page_module__ = __webpack_require__(558);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_page_form_page_form_module__ = __webpack_require__(556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47_ionic_scrolling_header__ = __webpack_require__(604);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_page_profile_page_profile_module__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__ionic_native_geolocation__ = __webpack_require__(417);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// Pages













// Native Modules








//config

//AngularFire

// import { AngularFireModule } from '@angular/fire';
// import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
// import { AngularFireAuthModule } from '@angular/fire/auth';












// Import Components











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_verify_account_verify_account__["a" /* VerifyAccountPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_recover_account_recover_account__["a" /* RecoverAccountPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_friends_friends__["a" /* FriendsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_market_place_market_place__["a" /* MarketPlacePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_notifications_notifications__["a" /* NotificationsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_more_more__["a" /* MorePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_comments_comments__["a" /* CommentsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_reactions_popover_reactions_popover__["a" /* ReactionsPopoverPage */],
                __WEBPACK_IMPORTED_MODULE_33__util_cdvphotolibrary_pipe__["a" /* CDVPhotoLibraryPipe */],
                __WEBPACK_IMPORTED_MODULE_16__pages_profile_add_details_profile_add_details__["a" /* ProfileAddDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_26_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_25__firebaseConfig__["a" /* default */]),
                __WEBPACK_IMPORTED_MODULE_27_angularfire2_firestore__["b" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_28_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_39__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_40__pages_view_post_view_post_module__["ViewPostPageModule"],
                __WEBPACK_IMPORTED_MODULE_41__pages_messages_messages_module__["MessagesPageModule"],
                __WEBPACK_IMPORTED_MODULE_42__pages_search_search_module__["SearchPageModule"],
                __WEBPACK_IMPORTED_MODULE_43__pages_search_user_search_user_module__["SearchUserPageModule"],
                __WEBPACK_IMPORTED_MODULE_44__pages_messages_detail_messages_detail_module__["MessagesDetailPageModule"],
                __WEBPACK_IMPORTED_MODULE_45__pages_page_page_module__["PageModule"],
                __WEBPACK_IMPORTED_MODULE_46__pages_page_form_page_form_module__["PageFormPageModule"],
                __WEBPACK_IMPORTED_MODULE_47_ionic_scrolling_header__["a" /* ScrollingHeaderModule */],
                __WEBPACK_IMPORTED_MODULE_48__pages_page_profile_page_profile_module__["PageProfilePageModule"],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                    tabsHideOnSubPages: true
                }, {
                    links: [
                        { loadChildren: '../pages/add-page-details/add-page-details.module#AddPageDetailsPageModule', name: 'AddPageDetailsPage', segment: 'add-page-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-post/add-post.module#AddPostPageModule', name: 'AddPostPage', segment: 'add-post', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/comments/comments.module#CommentsPageModule', name: 'CommentsPage', segment: 'comments', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/friends/friends.module#FriendsPageModule', name: 'FriendsPage', segment: 'friends', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/market-place/market-place.module#MarketPlacePageModule', name: 'MarketPlacePage', segment: 'market-place', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/messages-detail/messages-detail.module#MessagesDetailPageModule', name: 'MessagesDetailPage', segment: 'messages-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/messages/messages.module#MessagesPageModule', name: 'MessagesPage', segment: 'messages', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/more/more.module#MorePageModule', name: 'MorePage', segment: 'more', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notifications/notifications.module#NotificationsPageModule', name: 'NotificationsPage', segment: 'notifications', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/page-form/page-form.module#PageFormPageModule', name: 'PageFormPage', segment: 'page-form', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/page-profile/page-profile.module#PageProfilePageModule', name: 'PageProfilePage', segment: 'page-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/page/page.module#PageModule', name: 'PagesList', segment: 'page', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/post-on/post-on.module#AddPostPageModule', name: 'PostOnPage', segment: 'post-on', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/post-reactions/post-reactions.module#PostReactionsPageModule', name: 'PostReactionsPage', segment: 'post-reactions', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile-add-details/profile-add-details.module#ProfileAddDetailsPageModule', name: 'ProfileAddDetailsPage', segment: 'profile-add-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reactions-popover/reactions-popover.module#ReactionsPopoverPageModule', name: 'ReactionsPopoverPage', segment: 'reactions-popover', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/recover-account/recover-account.module#RecoverAccountPageModule', name: 'RecoverAccountPage', segment: 'recover-account', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/replies/replies.module#RepliesPageModule', name: 'RepliesPage', segment: 'replies', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search-user/search-user.module#SearchUserPageModule', name: 'SearchUserPage', segment: 'search-user', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/view-post/view-post.module#ViewPostPageModule', name: 'ViewPostPage', segment: 'view-post', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_verify_account_verify_account__["a" /* VerifyAccountPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_recover_account_recover_account__["a" /* RecoverAccountPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_friends_friends__["a" /* FriendsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_market_place_market_place__["a" /* MarketPlacePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_notifications_notifications__["a" /* NotificationsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_more_more__["a" /* MorePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_comments_comments__["a" /* CommentsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_reactions_popover_reactions_popover__["a" /* ReactionsPopoverPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_profile_add_details_profile_add_details__["a" /* ProfileAddDetailsPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_29__providers_account_account__["a" /* AccountProvider */],
                __WEBPACK_IMPORTED_MODULE_30__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_31__providers_loading_loading__["a" /* LoadingProvider */],
                __WEBPACK_IMPORTED_MODULE_32__providers_image_image__["a" /* ImageProvider */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_34__providers_timeline_timeline__["a" /* TimelineProvider */],
                __WEBPACK_IMPORTED_MODULE_35__providers_location_location__["a" /* LocationProvider */],
                __WEBPACK_IMPORTED_MODULE_36__providers_chat_chat__["a" /* ChatProvider */],
                __WEBPACK_IMPORTED_MODULE_37__providers_tabs_tabs__["a" /* TabsProvider */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_media_capture__["a" /* MediaCapture */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_base64__["a" /* Base64 */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_file_path__["a" /* FilePath */],
                __WEBPACK_IMPORTED_MODULE_38__providers_page_page__["a" /* PageProvider */],
                __WEBPACK_IMPORTED_MODULE_49__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_native_geocoder__["a" /* NativeGeocoder */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shrinking_segment_header_shrinking_segment_header__ = __webpack_require__(886);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__timeline_timeline__ = __webpack_require__(887);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_list_user_list__ = __webpack_require__(888);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_header_search_header__ = __webpack_require__(1111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__page_list_page_list__ = __webpack_require__(1112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__page_post_list_page_post_list__ = __webpack_require__(1113);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__timeline_timeline__["a" /* TimelineComponent */], __WEBPACK_IMPORTED_MODULE_1__shrinking_segment_header_shrinking_segment_header__["a" /* ShrinkingSegmentHeaderComponent */], __WEBPACK_IMPORTED_MODULE_3__user_list_user_list__["a" /* UserListComponent */], __WEBPACK_IMPORTED_MODULE_5__search_header_search_header__["a" /* SearchHeaderComponent */], __WEBPACK_IMPORTED_MODULE_6__page_list_page_list__["a" /* PageListComponent */],
                __WEBPACK_IMPORTED_MODULE_7__page_post_list_page_post_list__["a" /* PagePostListComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* IonicModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__timeline_timeline__["a" /* TimelineComponent */], __WEBPACK_IMPORTED_MODULE_1__shrinking_segment_header_shrinking_segment_header__["a" /* ShrinkingSegmentHeaderComponent */], __WEBPACK_IMPORTED_MODULE_3__user_list_user_list__["a" /* UserListComponent */], __WEBPACK_IMPORTED_MODULE_5__search_header_search_header__["a" /* SearchHeaderComponent */], __WEBPACK_IMPORTED_MODULE_6__page_list_page_list__["a" /* PageListComponent */],
                __WEBPACK_IMPORTED_MODULE_7__page_post_list_page_post_list__["a" /* PagePostListComponent */]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 885:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 419,
	"./af.js": 419,
	"./ar": 420,
	"./ar-dz": 421,
	"./ar-dz.js": 421,
	"./ar-kw": 422,
	"./ar-kw.js": 422,
	"./ar-ly": 423,
	"./ar-ly.js": 423,
	"./ar-ma": 424,
	"./ar-ma.js": 424,
	"./ar-sa": 425,
	"./ar-sa.js": 425,
	"./ar-tn": 426,
	"./ar-tn.js": 426,
	"./ar.js": 420,
	"./az": 427,
	"./az.js": 427,
	"./be": 428,
	"./be.js": 428,
	"./bg": 429,
	"./bg.js": 429,
	"./bm": 430,
	"./bm.js": 430,
	"./bn": 431,
	"./bn.js": 431,
	"./bo": 432,
	"./bo.js": 432,
	"./br": 433,
	"./br.js": 433,
	"./bs": 434,
	"./bs.js": 434,
	"./ca": 435,
	"./ca.js": 435,
	"./cs": 436,
	"./cs.js": 436,
	"./cv": 437,
	"./cv.js": 437,
	"./cy": 438,
	"./cy.js": 438,
	"./da": 439,
	"./da.js": 439,
	"./de": 440,
	"./de-at": 441,
	"./de-at.js": 441,
	"./de-ch": 442,
	"./de-ch.js": 442,
	"./de.js": 440,
	"./dv": 443,
	"./dv.js": 443,
	"./el": 444,
	"./el.js": 444,
	"./en-SG": 445,
	"./en-SG.js": 445,
	"./en-au": 446,
	"./en-au.js": 446,
	"./en-ca": 447,
	"./en-ca.js": 447,
	"./en-gb": 448,
	"./en-gb.js": 448,
	"./en-ie": 449,
	"./en-ie.js": 449,
	"./en-il": 450,
	"./en-il.js": 450,
	"./en-nz": 451,
	"./en-nz.js": 451,
	"./eo": 452,
	"./eo.js": 452,
	"./es": 453,
	"./es-do": 454,
	"./es-do.js": 454,
	"./es-us": 455,
	"./es-us.js": 455,
	"./es.js": 453,
	"./et": 456,
	"./et.js": 456,
	"./eu": 457,
	"./eu.js": 457,
	"./fa": 458,
	"./fa.js": 458,
	"./fi": 459,
	"./fi.js": 459,
	"./fo": 460,
	"./fo.js": 460,
	"./fr": 461,
	"./fr-ca": 462,
	"./fr-ca.js": 462,
	"./fr-ch": 463,
	"./fr-ch.js": 463,
	"./fr.js": 461,
	"./fy": 464,
	"./fy.js": 464,
	"./ga": 465,
	"./ga.js": 465,
	"./gd": 466,
	"./gd.js": 466,
	"./gl": 467,
	"./gl.js": 467,
	"./gom-latn": 468,
	"./gom-latn.js": 468,
	"./gu": 469,
	"./gu.js": 469,
	"./he": 470,
	"./he.js": 470,
	"./hi": 471,
	"./hi.js": 471,
	"./hr": 472,
	"./hr.js": 472,
	"./hu": 473,
	"./hu.js": 473,
	"./hy-am": 474,
	"./hy-am.js": 474,
	"./id": 475,
	"./id.js": 475,
	"./is": 476,
	"./is.js": 476,
	"./it": 477,
	"./it-ch": 478,
	"./it-ch.js": 478,
	"./it.js": 477,
	"./ja": 479,
	"./ja.js": 479,
	"./jv": 480,
	"./jv.js": 480,
	"./ka": 481,
	"./ka.js": 481,
	"./kk": 482,
	"./kk.js": 482,
	"./km": 483,
	"./km.js": 483,
	"./kn": 484,
	"./kn.js": 484,
	"./ko": 485,
	"./ko.js": 485,
	"./ku": 486,
	"./ku.js": 486,
	"./ky": 487,
	"./ky.js": 487,
	"./lb": 488,
	"./lb.js": 488,
	"./lo": 489,
	"./lo.js": 489,
	"./lt": 490,
	"./lt.js": 490,
	"./lv": 491,
	"./lv.js": 491,
	"./me": 492,
	"./me.js": 492,
	"./mi": 493,
	"./mi.js": 493,
	"./mk": 494,
	"./mk.js": 494,
	"./ml": 495,
	"./ml.js": 495,
	"./mn": 496,
	"./mn.js": 496,
	"./mr": 497,
	"./mr.js": 497,
	"./ms": 498,
	"./ms-my": 499,
	"./ms-my.js": 499,
	"./ms.js": 498,
	"./mt": 500,
	"./mt.js": 500,
	"./my": 501,
	"./my.js": 501,
	"./nb": 502,
	"./nb.js": 502,
	"./ne": 503,
	"./ne.js": 503,
	"./nl": 504,
	"./nl-be": 505,
	"./nl-be.js": 505,
	"./nl.js": 504,
	"./nn": 506,
	"./nn.js": 506,
	"./pa-in": 507,
	"./pa-in.js": 507,
	"./pl": 508,
	"./pl.js": 508,
	"./pt": 509,
	"./pt-br": 510,
	"./pt-br.js": 510,
	"./pt.js": 509,
	"./ro": 511,
	"./ro.js": 511,
	"./ru": 512,
	"./ru.js": 512,
	"./sd": 513,
	"./sd.js": 513,
	"./se": 514,
	"./se.js": 514,
	"./si": 515,
	"./si.js": 515,
	"./sk": 516,
	"./sk.js": 516,
	"./sl": 517,
	"./sl.js": 517,
	"./sq": 518,
	"./sq.js": 518,
	"./sr": 519,
	"./sr-cyrl": 520,
	"./sr-cyrl.js": 520,
	"./sr.js": 519,
	"./ss": 521,
	"./ss.js": 521,
	"./sv": 522,
	"./sv.js": 522,
	"./sw": 523,
	"./sw.js": 523,
	"./ta": 524,
	"./ta.js": 524,
	"./te": 525,
	"./te.js": 525,
	"./tet": 526,
	"./tet.js": 526,
	"./tg": 527,
	"./tg.js": 527,
	"./th": 528,
	"./th.js": 528,
	"./tl-ph": 529,
	"./tl-ph.js": 529,
	"./tlh": 530,
	"./tlh.js": 530,
	"./tr": 531,
	"./tr.js": 531,
	"./tzl": 532,
	"./tzl.js": 532,
	"./tzm": 533,
	"./tzm-latn": 534,
	"./tzm-latn.js": 534,
	"./tzm.js": 533,
	"./ug-cn": 535,
	"./ug-cn.js": 535,
	"./uk": 536,
	"./uk.js": 536,
	"./ur": 537,
	"./ur.js": 537,
	"./uz": 538,
	"./uz-latn": 539,
	"./uz-latn.js": 539,
	"./uz.js": 538,
	"./vi": 540,
	"./vi.js": 540,
	"./x-pseudo": 541,
	"./x-pseudo.js": 541,
	"./yo": 542,
	"./yo.js": 542,
	"./zh-cn": 543,
	"./zh-cn.js": 543,
	"./zh-hk": 544,
	"./zh-hk.js": 544,
	"./zh-tw": 545,
	"./zh-tw.js": 545
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 885;

/***/ }),

/***/ 886:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShrinkingSegmentHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShrinkingSegmentHeaderComponent = /** @class */ (function () {
    function ShrinkingSegmentHeaderComponent(element, renderer) {
        this.element = element;
        this.renderer = renderer;
    }
    ShrinkingSegmentHeaderComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.renderer.setElementStyle(this.element.nativeElement, 'height', this.headerHeight + 'px');
        this.scrollArea.ionScroll.subscribe(function (ev) {
            _this.resizeHeader(ev);
        });
    };
    ShrinkingSegmentHeaderComponent.prototype.resizeHeader = function (ev) {
        var _this = this;
        ev.domWrite(function () {
            _this.newHeaderHeight = _this.headerHeight - ev.scrollTop;
            if (_this.newHeaderHeight < 0) {
                _this.newHeaderHeight = 0;
            }
            _this.renderer.setElementStyle(_this.element.nativeElement, 'height', _this.newHeaderHeight + 'px');
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('scrollArea'),
        __metadata("design:type", Object)
    ], ShrinkingSegmentHeaderComponent.prototype, "scrollArea", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('headerHeight'),
        __metadata("design:type", Number)
    ], ShrinkingSegmentHeaderComponent.prototype, "headerHeight", void 0);
    ShrinkingSegmentHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'shrinking-segment-header',template:/*ion-inline-start:"E:\1_FacebookClone\1_CleanScript\Product\FacebookCloneV3\src\components\shrinking-segment-header\shrinking-segment-header.html"*/'<ng-content></ng-content>'/*ion-inline-end:"E:\1_FacebookClone\1_CleanScript\Product\FacebookCloneV3\src\components\shrinking-segment-header\shrinking-segment-header.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */]])
    ], ShrinkingSegmentHeaderComponent);
    return ShrinkingSegmentHeaderComponent;
}());

//# sourceMappingURL=shrinking-segment-header.js.map

/***/ }),

/***/ 887:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimelineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_timeline_timeline__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_account_account__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_comments_comments__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_reactions_popover_reactions_popover__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_loading_loading__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_page_page__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_moment__);
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










var TimelineComponent = /** @class */ (function () {
    function TimelineComponent(navCtrl, actionSheetCtrl, popoverCtrl, timelineProvider, accountProvider, modalCtrl, events, platform, loadingProvider, camera, app, pageProvider) {
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
        this.pageProvider = pageProvider;
        this.accountProvider.getAccount().subscribe(function (data) {
            _this.account = data;
            console.log(_this.account);
        });
        console.log(this.timeline);
    }
    TimelineComponent.prototype.updatePost = function (post) {
        console.log('Edit Post', post);
        this.modalCtrl.create('AddPostPage', {
            text: post.text,
            postId: post.uid,
            photoURL: post.photoURL || null,
            videoURL: post.videoURL || null,
            is_edit: true,
            post: post,
            pageId: post.pageId
        }).present();
    };
    TimelineComponent.prototype.deletePost = function (postId) {
        this.timelineProvider.deletePost(postId);
    };
    TimelineComponent.prototype.getPageName = function (id) {
        var pageName = '';
        this.pageProvider.getPageDetail(id).subscribe(function (data) {
            pageName = data.pageName;
        });
        return pageName;
    };
    TimelineComponent.prototype.presentPostActionSheet = function (post) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            buttons: [
                {
                    text: 'Edit post',
                    handler: function () { _this.updatePost(post); }
                },
                {
                    text: 'Delete post',
                    handler: function () { _this.deletePost(post.uid); }
                },
            ]
        });
        actionSheet.present();
    };
    TimelineComponent.prototype.showReactionsPopOver = function (event, post) {
        console.log('post', post);
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_5__pages_reactions_popover_reactions_popover__["a" /* ReactionsPopoverPage */], { post: post });
        popover.present({
            ev: event
        });
    };
    TimelineComponent.prototype.like = function (post) {
        console.log('post', post);
        debugger;
        this.timelineProvider.likePost(post.uid, 'like', this.account);
    };
    TimelineComponent.prototype.dislike = function (post) {
        console.log('post', post);
        debugger;
        this.timelineProvider.dislikePost(post.uid);
    };
    TimelineComponent.prototype.addToBookmark = function (uid) {
        this.timelineProvider.addToBookmark(uid);
    };
    TimelineComponent.prototype.removeFromBookmark = function (uid) {
        this.timelineProvider.removeFromBookmark(uid);
    };
    TimelineComponent.prototype.addPost = function () {
        this.modalCtrl.create('AddPostPage').present();
    };
    TimelineComponent.prototype.getDate = function (date) {
        if (date)
            return __WEBPACK_IMPORTED_MODULE_9_moment___default()(new Date(date.seconds * 1000)).fromNow();
        return __WEBPACK_IMPORTED_MODULE_9_moment___default()(new Date()).fromNow();
    };
    TimelineComponent.prototype.likeState = function (likes) {
        if (likes) {
            var is_liked;
            for (var i = 0; i < likes.length; i++) {
                if (likes[i].user === this.account.uid) {
                    is_liked = true;
                }
                else {
                    is_liked = false;
                }
            }
            return is_liked;
        }
    };
    TimelineComponent.prototype.bookmarkState = function (bookmark) {
        if (bookmark) {
            if (bookmark[this.account.uid])
                return true;
        }
        return false;
    };
    TimelineComponent.prototype.commentState = function (comments) {
        if (comments) {
            //myArray.map(function(e) { return e.hello; }).indexOf('stevie');
            if (comments.map(function (e) { return e.commentBy; }).indexOf(this.account.uid) !== -1)
                return true;
        }
        return false;
    };
    TimelineComponent.prototype.comment = function (postId) {
        console.log('PostId.Home', postId);
        this.modalCtrl.create('CommentPostPage', { postId: postId, account: this.account }).present();
    };
    TimelineComponent.prototype.sharePost = function (post) {
        console.log('Sharing', post);
        this.modalCtrl.create('AddPostPage', {
            text: post.text,
            postOwner: post.user,
            postOwnerId: post.postBy,
            postId: post.uid,
            photoURL: post.photoURL || null,
            videoURL: post.videoURL || null,
            is_edit: false
        }).present();
    };
    //Current User Profile
    TimelineComponent.prototype.openProfile = function () {
        this.modalCtrl.create('ProfilePage').present();
    };
    //Other User Profile
    TimelineComponent.prototype.goToProfile = function (userId) {
        if (userId) {
            this.navCtrl.push('ProfilePage', { userId: userId });
        }
        else {
            this.navCtrl.push('ProfilePage', { userId: this.account.uid });
        }
    };
    TimelineComponent.prototype.goToReactions = function (post) {
        this.navCtrl.push('PostReactionsPage', { post: post });
    };
    TimelineComponent.prototype.showPostComments = function (post) {
        var commentsModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__pages_comments_comments__["a" /* CommentsPage */], { post: post, account: this.account });
        commentsModal.present();
    };
    TimelineComponent.prototype.countEv = function (obj) {
        if (obj)
            return Object.keys(obj).length;
        return 0;
    };
    TimelineComponent.prototype.viewPost = function (postId) {
        this.modalCtrl.create('ViewPostPage', { postId: postId }).present();
    };
    //Create text array
    TimelineComponent.prototype.createStrArray = function (text) {
        var str = text;
        if (!str || str === '')
            return '';
        var res = str.split(/[ ]/);
        return res;
    };
    //Open Search
    TimelineComponent.prototype.searchByTag = function (text) {
        console.log('searchStr', text);
        this.timelineProvider.searchStr = text;
        this.modalCtrl.create('SearchPage').present();
        // const nav = this.app.getActiveNav();
        // console.log('Active', this.navCtrl.getActive().name);
        // if ((this.navCtrl.getActive().name !== 'HomePage') && (this.navCtrl.getActive().name !== 'SearchPage'))
        //     this.navCtrl.pop();
        // if (this.navCtrl.getActive().name !== 'SearchPage')
        //     nav.parent.select(1);
    };
    TimelineComponent.prototype.openProfileByQuote = function (quote) {
        return __awaiter(this, void 0, void 0, function () {
            var userId;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.accountProvider.getUserIdByUsername(quote)];
                    case 1:
                        userId = _a.sent();
                        console.log(userId);
                        if (userId) {
                            this.goToProfile(userId);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    TimelineComponent.prototype.isURL = function (text) {
        var pattern = new RegExp('(?:(?:(?:ht|f)tp)s?://)?[\\w_-]+(?:\\.[\\w_-]+)+([\\w.,@?^=%&:/~+#-]*[\\w@?^=%&/~+#-])?'); // fragment locater
        if (!pattern.test(text)) {
            return false;
        }
        else {
            return true;
        }
    };
    TimelineComponent.prototype.isLike = function (post, type) {
        var isLike = false;
        if (post.likes) {
            for (var i = 0; i < post.likes.length; i++) {
                if (post.likes[i].type === type) {
                    isLike = true;
                }
            }
        }
        return isLike;
    };
    TimelineComponent.prototype.openBrowser = function (url) {
        if (!url.includes('//'))
            url = 'http://' + url;
        window.open(url);
    };
    TimelineComponent.prototype.play = function (postId) {
        this.timeline[this.timeline.findIndex(function (x) { return x.uid == postId; })].views += 1;
    };
    TimelineComponent.prototype.addView = function (postId) {
        this.timelineProvider.addView(postId);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], TimelineComponent.prototype, "timeline", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('video'),
        __metadata("design:type", Object)
    ], TimelineComponent.prototype, "video", void 0);
    TimelineComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'timeline',template:/*ion-inline-start:"E:\1_FacebookClone\1_CleanScript\Product\FacebookCloneV3\src\components\timeline\timeline.html"*/'<ion-list class="post-list">\n    <ion-card *ngFor="let post of timeline">\n        <ion-item>\n            <ion-avatar style="cursor: pointer" item-start (click)="goToProfile(post.postBy)">\n                <img *ngIf="post.userPhoto" src="{{ post.userPhoto }}">\n                <img *ngIf="!post.userPhoto" src="assets/imgs/buddy.png">\n            </ion-avatar>\n\n            <ion-col>\n                <p class="post-author" (click)="viewPost(post.uid)">\n                    <b style="color:gray"> {{ post.user }}</b>\n                    <ion-icon ios="ios-play" md="md-play" *ngIf="post.pageName"></ion-icon>\n                    <b style="color:gray" *ngIf="post.pageName"> {{ post.pageName }}</b>\n                    <!-- <span style="color: #999">{{ post.username }}</span> -->\n                    <br />\n                    <span *ngIf="post.postOwner" style="color: #999">Shared\n                        <b style="color:gray">{{post.postOwner}}</b> post\n                    </span>\n                </p>\n\n                <ion-row>\n                    <ion-note>{{ getDate(post.createdAt) }}</ion-note>\n                    <ion-icon class="globe-icon" name="md-globe"></ion-icon>\n                </ion-row>\n            </ion-col>\n\n            <button *ngIf="account && account.uid === post.postBy" class="more-button" ion-button clear icon-only\n                item-end (click)="presentPostActionSheet(post)">\n                <ion-icon name="ios-more"></ion-icon>\n            </button>\n        </ion-item>\n\n        <ion-card-content>\n            <div>\n                <span *ngFor="let text of createStrArray(post.text)">\n                    <br *ngIf="text === \'VK_RETURN\'" /> {{text.substring(0,1)==="#" || text.substring(0,1)==="@" ||\n                    isURL(text) || text === \'VK_RETURN\'? "":\n                    " " +text}}\n                    <a (click)="searchByTag(text)" *ngIf="text.substring(0,1)===\'#\'" id="hashtagevt" class="hashtagevt">{{\'\n                        \' +text}}</a>\n                    <a (click)="openProfileByQuote(text)" *ngIf="text.substring(0,1)===\'@\'" id="hashtagevt" class="hashtagevt">{{\'\n                        \' +text}}</a>\n                    <a (click)="openBrowser(text)" *ngIf="isURL(text)">{{\' \' +text}}</a>\n                </span>\n            </div>\n            <div *ngIf="post.photoURL">\n                <img class="post-img" [src]="post.photoURL" />\n            </div>\n            <div class="video-paused " *ngIf="post.videoURL">\n                <div>\n                    <video #video width="100%" class="post-img" [src]="post.videoURL" poster="assets/imgs/poster.png"\n                        poster="" controls (play)="play(post.uid)" (pause)="addView(post.uid)" (ended)="addView(post.uid)"></video>\n                    <p *ngIf="post[\'views\'] && post.views > 0">{{post.views > 1? post.views+ \' views\': post.views+ \'\n                        view\'}}</p>\n                </div>\n            </div>\n\n        </ion-card-content>\n\n        <ion-row style="margin-top: 10px;">\n            <ion-col col-4>\n                <ion-row (click)="goToReactions(post)">\n                    <ion-avatar class="facebook-reaction-icon" *ngIf="isLike(post,\'like\')">\n                        <img src="assets/imgs/newsfeed/facebook-like.png">\n                    </ion-avatar>\n\n                    <ion-avatar class="facebook-reaction-icon" *ngIf="isLike(post,\'love\')">\n                        <img src="assets/imgs/newsfeed/facebook-love.png">\n                    </ion-avatar>\n\n                    <ion-avatar class="facebook-reaction-icon" *ngIf="isLike(post,\'laugh\')">\n                        <img src="assets/imgs/newsfeed/facebook-laugh.png">\n                    </ion-avatar>\n\n                    <ion-avatar class="facebook-reaction-icon" *ngIf="isLike(post,\'angry\')">\n                        <img src="assets/imgs/newsfeed/facebook-angry.png">\n                    </ion-avatar>\n\n                    <ion-avatar class="facebook-reaction-icon" *ngIf="isLike(post,\'sad\')">\n                        <img src="assets/imgs/newsfeed/facebook-sad.png">\n                    </ion-avatar>\n\n                    <ion-avatar class="facebook-reaction-icon" *ngIf="isLike(post,\'shock\')">\n                        <img src="assets/imgs/newsfeed/facebook-shock.png">\n                    </ion-avatar>\n\n                    <p class="reaction-count" *ngIf="post.likes && post.likes.length > 0">{{ post.likes.length }}</p>\n                </ion-row>\n            </ion-col>\n\n            <ion-col col-8 text-end>\n                <p (click)="showPostComments(post)">{{countEv(post.comments)}} Comments • {{countEv(post.shares) }}\n                    Shares</p>\n            </ion-col>\n        </ion-row>\n\n        <ion-row class="like-commment-share-row">\n            <ion-col center text-center>\n                <button class="like-button" *ngIf="!likeState(post.likes)" ion-button icon-only clear (click)="like(post)"\n                    (press)="showReactionsPopOver($event,post)">\n                    <ion-icon name="ios-thumbs-up-outline"></ion-icon>\n                    <p>Like</p>\n                </button>\n                <button class="like-button" *ngIf="likeState(post.likes)" ion-button icon-only clear (click)="dislike(post)">\n                    <ion-icon *ngIf="likeState(post.likes)" name="ios-thumbs-up"></ion-icon>\n                    <p>Liked</p>\n                </button>\n            </ion-col>\n\n            <ion-col center text-center>\n                <button ion-button icon-only clear (click)="showPostComments(post)">\n                    <ion-icon name="ios-text-outline"></ion-icon>\n                    <p>Comment</p>\n                </button>\n            </ion-col>\n\n            <ion-col center text-center>\n                <button ion-button icon-only clear (click)="sharePost(post)">\n                    <ion-icon name="ios-undo-outline"></ion-icon>\n                    <p>Share</p>\n                </button>\n            </ion-col>\n        </ion-row>\n    </ion-card>\n</ion-list>'/*ion-inline-end:"E:\1_FacebookClone\1_CleanScript\Product\FacebookCloneV3\src\components\timeline\timeline.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_timeline_timeline__["a" /* TimelineProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_account_account__["a" /* AccountProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_6__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_7__providers_page_page__["a" /* PageProvider */]])
    ], TimelineComponent);
    return TimelineComponent;
}());

//# sourceMappingURL=timeline.js.map

/***/ }),

/***/ 888:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_account_account__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_chat_chat__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_loading_loading__ = __webpack_require__(18);
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





var UserListComponent = /** @class */ (function () {
    function UserListComponent(navCtrl, accountProvider, viewCtrl, chatProvider, loading) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.accountProvider = accountProvider;
        this.viewCtrl = viewCtrl;
        this.chatProvider = chatProvider;
        this.loading = loading;
        this.chat = false;
        this.accountProvider.getAccount(null).subscribe(function (data) {
            _this.account = data;
            console.log(_this.account);
        });
    }
    UserListComponent.prototype.followingStatus = function (userId) {
        if (this.account.following) {
            if (this.account.following[userId])
                return true;
        }
        return false;
    };
    UserListComponent.prototype.follow = function (userId) {
        this.accountProvider.follow(userId);
    };
    UserListComponent.prototype.removeFromSearch = function (user) {
        this.users = this.users.filter(function (item) {
            return item.uid != user.uid;
        });
        this.loading.hide();
    };
    UserListComponent.prototype.isReqSend = function (user) {
        if (user.friendRequests[this.account.uid]) {
            return true;
        }
        else {
            return false;
        }
    };
    UserListComponent.prototype.sendReq = function (user) {
        var _this = this;
        this.loading.show();
        if (Object.keys(user.friendRequests).length > 0) {
            user.friendRequests = __assign({}, user.friendRequests, (_a = {}, _a[this.account.uid] = true, _a));
        }
        else {
            user.friendRequests = (_b = {}, _b[this.account.uid] = true, _b);
        }
        this.accountProvider.updateOtherUser(user).then(function () {
            console.log('user after send req', user);
            _this.removeFromSearch(user);
        });
        var _a, _b;
    };
    UserListComponent.prototype.removeFriend = function (user) {
        var _this = this;
        this.loading.show();
        delete this.account.friends[user.uid];
        delete this.account.following[user.uid];
        this.accountProvider.updateAccount(this.account).then(function (data) {
            console.log('After Accept req data', data);
            delete user.friends[_this.account.uid];
            delete user.following[_this.account.uid];
            delete user.isFriend;
            _this.accountProvider.updateOtherUser(user);
            _this.loading.hide();
        });
    };
    UserListComponent.prototype.isFriend = function (user) {
        if (this.account.friends && this.account.friends[user.uid]) {
            return true;
        }
        else {
            return false;
        }
    };
    UserListComponent.prototype.unfollow = function (userId) {
        this.accountProvider.unfollow(userId);
    };
    //Goto User Profile
    UserListComponent.prototype.goToProfile = function (userId) {
        this.navCtrl.push('ProfilePage', { userId: userId });
    };
    UserListComponent.prototype.startChat = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var uid, name, photoURL;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uid = user.uid, name = user.name, photoURL = user.photoURL;
                        console.log('Add.Chat', { uid: uid, name: name, photoURL: photoURL });
                        return [4 /*yield*/, this.chatProvider.openChat(this.viewCtrl, { uid: uid, name: name, photoURL: photoURL }, this.account)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], UserListComponent.prototype, "users", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], UserListComponent.prototype, "chat", void 0);
    UserListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'user-list',template:/*ion-inline-start:"E:\1_FacebookClone\1_CleanScript\Product\FacebookCloneV3\src\components\user-list\user-list.html"*/'<ion-list *ngIf="account">\n\n  <ion-item *ngFor="let user of users">\n\n    <ion-thumbnail item-start (click)="goToProfile(user.uid)">\n\n      <img *ngIf="user.photoURL" src="{{ user.photoURL }}">\n\n      <img *ngIf="!user.photoURL" src="assets/imgs/buddy.png">\n\n    </ion-thumbnail>\n\n\n\n    <h2>{{ user.name }}</h2>\n\n    <p>{{user.username}}</p>\n\n\n\n    <ion-col *ngIf="account.uid !== user.uid && !chat">\n\n      <button class="add-friend-button" *ngIf="!isReqSend(user) && !isFriend(user)" (click)="sendReq(user)" ion-button clear>ADD FRIEND</button>\n\n      <button color="light" class="sended-req" *ngIf="isReqSend(user) && !isFriend(user)" ion-button>REQUEST SEND</button>\n\n      <button class="add-friend-button" *ngIf="isFriend(user)" (click)="removeFriend(user)" ion-button clear>UNFRIEND</button>\n\n      <button class="remove-friend-button" (click)="removeFromSearch(user)" ion-button outline>REMOVE</button>\n\n    </ion-col>\n\n    <button (click)="startChat(user)" *ngIf="chat" ion-button icon-only clear color="dark" item-end>\n\n      <ion-icon name="chatbubbles" style="color: #3b5998"></ion-icon>\n\n    </button>\n\n  </ion-item>\n\n</ion-list>'/*ion-inline-end:"E:\1_FacebookClone\1_CleanScript\Product\FacebookCloneV3\src\components\user-list\user-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_account_account__["a" /* AccountProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_chat_chat__["a" /* ChatProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_loading_loading__["a" /* LoadingProvider */]])
    ], UserListComponent);
    return UserListComponent;
}());

//# sourceMappingURL=user-list.js.map

/***/ })

},[608]);
//# sourceMappingURL=main.js.map