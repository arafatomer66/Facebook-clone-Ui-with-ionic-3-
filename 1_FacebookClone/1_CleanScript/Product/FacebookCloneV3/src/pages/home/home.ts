import { Component, ViewChild } from '@angular/core';
import { NavController, ActionSheetController, IonicPage, ModalController, PopoverController, InfiniteScroll, Content, Events, Platform, App } from 'ionic-angular';
import { TimelineProvider } from '../../providers/timeline/timeline';
import { AccountProvider } from '../../providers/account/account';
import { ChatProvider } from "../../providers/chat/chat";
import { Post } from '../../models/post';
import { LoadingProvider } from "../../providers/loading/loading";
import { Camera } from '@ionic-native/camera';
import moment from 'moment';

@IonicPage()
@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	@ViewChild(Content) content: Content;
	@ViewChild('video') video: any;
	limit: number = 10;
	timeline: any[] = []; //Array<Post>;
	account: any;
	ios: boolean;
	posts: Post[] = [];
	pictureCount: number = 0;
	image: any;
	search: any;
	totalUnreadChats: any;
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
		private chatProvider: ChatProvider
	) {
		this.totalUnreadChats = this.chatProvider.totalUnreadedMessages
		this.ios = this.platform.is('ios');
		this.events.subscribe('scrollToTop', (time) => {
			console.log('scrollToTop', 'at', time);
			this.content.scrollToTop();
		});
		this.accountProvider.getAccount(null).subscribe((data) => {
			debugger;
			this.account = data;
			console.log(this.account);
		});
	}

	getPosts() {
		this.loadingProvider.show();
		this.timelineProvider.getFollowingPosts().subscribe((data) => {
			debugger;
			console.log(data);
			this.timeline = [];
			if (this.account) {
				const userIds = { ...this.account.following, [this.account.uid]: true };
				data.map(a => {
					const data: any = a.payload.doc.data();
					const uid = a.payload.doc.id;
					console.log('ids', this.account.following);
					if ((Object.keys(userIds).indexOf(data.postBy) > -1)) {
						console.log(this.timeline.filter(a => a.uid === uid));
						console.log(this.timeline);
						this.timeline.push({ uid, ...data });
					}
				});
			}

			console.log('Timeline Post', this.timeline)
			// this.timeline = data;
			this.loadingProvider.hide();
		}, (err) => {
			debugger;
			console.log(err);
			this.loadingProvider.hide();
		});
	}



	addView(postId) {
		this.timelineProvider.addView(postId);
	}


	async ionViewWillEnter() {
		console.log("time=========>>>>>>>>", this.timeline);
		await this.getPosts();
	}

	ionViewDidEnter() {
		this.timelineProvider.readPosts();
	}

	//Current User Profile
	openProfile() {
		this.modalCtrl.create('ProfilePage', { userId: this.account.uid }).present();
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

	addPost() {
		debugger;
		// this.modalCtrl.create('AddPostPage', { is_edit: false, pageId: 2, pageName: 'dummy' }).present();
		this.modalCtrl.create('AddPostPage', { is_edit: false }).present();
	}

	getDate(date) {
		if (date)
			return moment(new Date(date.seconds * 1000)).fromNow();
		return moment(new Date()).fromNow();
	}

	countEv(obj) {
		if (obj)
			return Object.keys(obj).length;
		return 0;
	}

	openCamera() {
		this.camera.getPicture({
			quality: 100,
			destinationType: this.camera.DestinationType.DATA_URL,
			encodingType: this.camera.EncodingType.JPEG,
			correctOrientation: true,
			sourceType: this.camera.PictureSourceType.CAMERA
		}).then((imageData) => {
			console.log(imageData);

			this.image = 'data:image/jpeg;base64,' + imageData;
		});
	}

	onSearch(ev: any) {
		console.log(ev.target.value)
		this.search = ev.target.value;
		if (this.search && this.search.trim() != '') {

			this.timeline = this.timeline.filter((item) => {
				return (item.text ? item.text.toLowerCase().indexOf(this.search.toLowerCase()) > -1 : null);
			})
		} else {
			this.getPosts()
		}
	}

	gotoSearch() {
		this.modalCtrl.create('SearchPage').present()
	}

	gotoMessages() {
		this.navCtrl.push('MessagesPage')
	}


	unread(chat: any) {
		let res: any[] = [];
		if (chat.messages)
			res = chat.messages.filter(item => {
				if (item.unread && item.userId !== this.account.uid)
					return item;
			});

		return res.length > 0;

	}


	getAllUnReadedMessages() {
		this.chatProvider.getChats().subscribe((data) => {
			let chats = [];
			let unReadUsers = []
			data.map(a => {
				const data = a.payload.doc.data();
				const uid = a.payload.doc.id;
				chats.push({ uid, ...data });
			});
			console.log('Chats', chats);
			for (var i = 0; i < chats.length; i++) {
				if (this.unread(chats[i]))
					if (unReadUsers.indexOf(chats[i].uid) === -1) {
						unReadUsers.push(chats[i].uid)
					}
			}
			debugger
			this.totalUnreadChats = unReadUsers.length
			console.log('total unreaed ========>>>>>>>>>>>', this.totalUnreadChats)
		})
	}


	//infinite scroll
	doInfinite(infiniteScroll: InfiniteScroll) {
		console.log('Begin async operation');
		this.timelineProvider.limit += 10;
		setTimeout(async () => {
			await this.getPosts();
			console.log('Async operation has ended');
			infiniteScroll.complete();
		}, 500);
	}
}

