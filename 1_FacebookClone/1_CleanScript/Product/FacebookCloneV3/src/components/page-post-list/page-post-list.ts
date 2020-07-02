import { Component, ViewChild, Input } from '@angular/core';
import { NavController, ActionSheetController, IonicPage, ModalController, PopoverController, InfiniteScroll, Content, Events, Platform, App } from 'ionic-angular';
import { TimelineProvider } from '../../providers/timeline/timeline';
import { AccountProvider } from '../../providers/account/account';
import { Post } from '../../models/post';
import { CommentsPage } from '../../pages/comments/comments';
import { ReactionsPopoverPage } from '../../pages/reactions-popover/reactions-popover';
import { LoadingProvider } from "../../providers/loading/loading";
import { Camera } from '@ionic-native/camera';
import moment from 'moment';

/**
 * Generated class for the PagePostListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
	selector: 'page-post-list',
	templateUrl: 'page-post-list.html'
})
export class PagePostListComponent {

	@Input() timeline: any[];
	@Input() pageName: String;
	@Input() pageOwner: String;
	@Input() pagePic: String;
	@ViewChild('video') video: any;

	account: any;

	constructor(
		public navCtrl: NavController,
		public actionSheetCtrl: ActionSheetController,
		public popoverCtrl: PopoverController,
		private timelineProvider: TimelineProvider,
		private accountProvider: AccountProvider,
		private modalCtrl: ModalController,
		private events: Events,
		private platform: Platform,
		public loadingProvider: LoadingProvider,
		private camera: Camera,
		private app: App

	) {
		console.log('Hi');
		this.accountProvider.getAccount().subscribe((data) => {
			this.account = data;
			console.log(this.account);
		});
		console.log(this.timeline);
	}

	updatePost(post) {
		console.log('Edit Post', post);
		this.modalCtrl.create('AddPostPage',
			{
				text: post.text,
				postId: post.uid,
				photoURL: post.photoURL || null,
				videoURL: post.videoURL || null,
				is_edit: true,
				post: post,
				pageId: post.pageId
			}).present();
	}

	deletePost(postId) {
		this.timelineProvider.deletePost(postId);
	}

	presentPostActionSheet(post) {
		let actionSheet = this.actionSheetCtrl.create({
			buttons: [
				{
					text: 'Edit post',
					handler: () => { this.updatePost(post) }
				},
				{
					text: 'Delete post',
					handler: () => { this.deletePost(post.uid) }
				},
			]
		});

		actionSheet.present();
	}

	showReactionsPopOver(event, post) {
		console.log('post', post)
		let popover = this.popoverCtrl.create(ReactionsPopoverPage, { post: post });

		popover.present({
			ev: event
		});
	}

	like(uid) {
		this.timelineProvider.likePost(uid, 'like', this.account);
	}

	dislike(uid) {
		this.timelineProvider.dislikePost(uid);
	}

	addToBookmark(uid) {
		this.timelineProvider.addToBookmark(uid);
	}

	removeFromBookmark(uid) {
		this.timelineProvider.removeFromBookmark(uid);
	}

	addPost() {
		this.modalCtrl.create('AddPostPage').present();
	}

	getDate(date) {
		if (date)
			return moment(new Date(date.seconds * 1000)).fromNow();
		return moment(new Date()).fromNow();
	}

	likeState(likes: any) {
		if (likes) {
			var is_liked: boolean;
			for (var i = 0; i < likes.length; i++) {
				if (likes[i].user === this.account.uid) {
					is_liked = true
				}
				else {
					is_liked = false
				}
			}
			return is_liked
		}
	}

	bookmarkState(bookmark: any) {
		if (bookmark) {
			if (bookmark[this.account.uid])
				return true;
		}
		return false;
	}


	commentState(comments: any) {
		if (comments) {
			//myArray.map(function(e) { return e.hello; }).indexOf('stevie');
			if (comments.map((e) => e.commentBy).indexOf(this.account.uid) !== -1)
				return true;
		}
		return false;
	}

	comment(postId) {
		console.log('PostId.Home', postId);
		this.modalCtrl.create('CommentPostPage', { postId: postId, account: this.account }).present();
	}
	sharePost(post) {
		console.log('Sharing', post);
		this.modalCtrl.create('AddPostPage',
			{
				text: post.text,
				postOwner: post.user,
				postOwnerId: post.postBy,
				postId: post.uid,
				photoURL: post.photoURL || null,
				videoURL: post.videoURL || null,
				is_edit: false
			}).present();
	}

	//Current User Profile
	openProfile() {
		this.modalCtrl.create('ProfilePage').present();
	}

	//Other User Profile
	goToProfile(userId) {
		if (userId) {
			this.navCtrl.push('ProfilePage', { userId: userId });
		}
		else {
			this.navCtrl.push('ProfilePage', { userId: this.account.uid });
		}
	}

	goToReactions(post) {
		this.navCtrl.push('PostReactionsPage', { post: post });
	}

	showPostComments(post: Post) {
		let commentsModal = this.modalCtrl.create(CommentsPage, { post: post, account: this.account });
		commentsModal.present();
	}

	countEv(obj) {
		if (obj)
			return Object.keys(obj).length;
		return 0;
	}
	viewPost(postId) {
		this.modalCtrl.create('ViewPostPage', { postId: postId }).present();
	}

	//Create text array
	createStrArray(text: String) {
		let str = text;
		if (!str || str === '')
			return '';

		let res = str.split(/[ ]/);
		return res;
	}
	//Open Search
	searchByTag(text) {
		console.log('searchStr', text);
		this.timelineProvider.searchStr = text;
		this.modalCtrl.create('SearchPage').present()
		// const nav = this.app.getActiveNav();

		// console.log('Active', this.navCtrl.getActive().name);
		// if ((this.navCtrl.getActive().name !== 'HomePage') && (this.navCtrl.getActive().name !== 'SearchPage'))
		//     this.navCtrl.pop();
		// if (this.navCtrl.getActive().name !== 'SearchPage')
		//     nav.parent.select(1);
	}
	async openProfileByQuote(quote) {
		let userId = await this.accountProvider.getUserIdByUsername(quote);
		console.log(userId);
		if (userId) {
			this.goToProfile(userId);
		}
	}
	isURL(text) {
		var pattern = new RegExp('(?:(?:(?:ht|f)tp)s?://)?[\\w_-]+(?:\\.[\\w_-]+)+([\\w.,@?^=%&:/~+#-]*[\\w@?^=%&/~+#-])?'); // fragment locater
		if (!pattern.test(text)) {
			return false;
		} else {
			return true;
		}
	}

	isLike(post, type) {
		var isLike = false
		if (post.likes) {
			post.likes.map((item) => {
				if (item.type === type) {
					isLike = true
				}
			})
		}
		return isLike
	}
	openBrowser(url: string) {
		if (!url.includes('//'))
			url = 'http://' + url;
		(<any>window).open(url);
	}

	play(postId) {
		this.timeline[this.timeline.findIndex(x => x.uid == postId)].views += 1;
	}

	addView(postId) {
		this.timelineProvider.addView(postId);
	}

}
