import { Component, ViewChild } from '@angular/core';
import {
	NavController,
	ActionSheetController,
	NavParams,
	ViewController,
	IonicPage,
	ModalController,
	PopoverController,
	AlertController,
	Platform,
	Content
} from 'ionic-angular';
import { Post } from '../../data/Post';
import { Camera } from "@ionic-native/camera";
import { AccountProvider } from '../../providers/account/account';
import { TimelineProvider } from '../../providers/timeline/timeline';
import { LoadingProvider } from "../../providers/loading/loading";
import { ChatProvider } from "../../providers/chat/chat";
import { Account } from "../../models/account";
import { CommentsPage } from '../comments/comments';
import { ReactionsPopoverPage } from '../reactions-popover/reactions-popover';
import { ProfileAddDetailsPage } from "../profile-add-details/profile-add-details";
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';

@IonicPage()
@Component({
	selector: 'page-profile',
	templateUrl: 'profile.html',
})
export class ProfilePage {
	@ViewChild(Content) content: Content;
	@ViewChild('video') video: any;
	private userId: string = null;
	posts: Post[] = [];
	pictureCount: number = 0;
	account: Account;
	currentUser: any;
	view: string = "posts";
	timeline: any = []
	placeholder: string;
	photos: any[] = [];
	friends: any[] = [];
	constructor(
		public navCtrl: NavController,
		public actionSheetCtrl: ActionSheetController,
		public popoverCtrl: PopoverController,
		private timelineProvider: TimelineProvider,
		private accountProvider: AccountProvider,
		private modalCtrl: ModalController,
		private platform: Platform,
		public loadingProvider: LoadingProvider,
		private camera: Camera,
		private navParams: NavParams,
		public loadingController: LoadingProvider,
		private alertCtrl: AlertController,
		private chatProvider: ChatProvider
	) {
		debugger;
		this.userId = this.navParams.get('userId');
		if (!this.userId)
			this.userId = null;

		this.loadingController.show()
		this.accountProvider.getAccount(this.userId).subscribe((data) => {
			this.account = data;
			this.placeholder = "Write something to " + this.account.name;
			console.log('Account', this.account);
			this.accountProvider.getAccount(null).subscribe((user) => {
				this.currentUser = user;
				console.log('Cuurent User', this.currentUser);
				this.loadingController.hide();
				this.getFirends(this.account.friends);
			})
		});
	}

	getFirends(friends) {
		this.friends = []
		if (friends && Object.keys(friends).length > 0) {
			let index = 0
			for (var key in friends) {
				if (index < 3) {
					this.accountProvider.getAccount(key).subscribe((data) => {
						console.log('firends Account', data)
						this.friends.push(data)
						console.log('firends Account in varaible', this.friends)
						index++
					})
				}
			}
		}
	}


	ionViewDidLoad() {
		console.log('ionViewDidLoad ProfilePage');
		this.getPosts();
	}

	showPostComments(post: Post) {
		let commentsModal = this.modalCtrl.create(CommentsPage);
		commentsModal.present();
	}

	addPost() {
		this.modalCtrl.create('AddPostPage', { is_edit: false }).present()
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

	gotoSearch() {
		this.modalCtrl.create('SearchPage').present()
	}

	getPosts() {
		debugger
		this.timelineProvider.getUserPosts(this.userId).subscribe((data) => {
			console.log(data);
			this.timeline = []
			this.photos = []
			data.map(a => {
				const data = a.payload.doc.data();
				const uid = a.payload.doc.id;
				this.timeline.push(Object.assign({}, { uid, ...data }));
			});
			console.log('All Posts', this.timeline)
			for (var i = 0; i < this.timeline.length; i++) {
				if (this.timeline[i].photoURL) {
					if (this.photos.length < 3) {
						this.photos.push(this.timeline[i].photoURL)
					}
				}
			}
			console.log('All Photos', this.photos)
			this.loadingController.hide()
		});

	}


	messageUser() {
		const { uid, name, photoURL } = this.account;
		console.log('Add.Chat', { uid, name, photoURL });
		this.chatProvider.startChat({ uid, name, photoURL }, this.currentUser).then((chat: any) => {
			console.log('Chat', chat)
			this.modalCtrl.create('MessagesDetailPage', { chatId: chat.uid }).present();
		})
	}

	isFriend() {
		if (this.currentUser.friends[this.account.uid]) {
			return true
		}
		else {
			return false
		}
	}

	isReqSend() {
		if (this.currentUser.friendRequests[this.account.uid]) {
			return true
		}
		else {
			return false
		}
	}

	sendReq() {
		this.loadingController.show()
		if (Object.keys(this.currentUser.friendRequests).length > 0) {
			this.currentUser.friendRequests = { ...this.currentUser.friendRequests, [this.account.uid]: true };
		}
		else {
			this.currentUser.friendRequests = { [this.account.uid]: true }
		}
		this.accountProvider.updateOtherUser(this.currentUser).then(() => {
			console.log('user after send req', this.currentUser)
		})
	}

	removeFriend() {
		this.loadingController.show()
		delete this.account.friends[this.currentUser.uid]
		delete this.account.following[this.currentUser.uid]
		this.accountProvider.updateAccount(this.currentUser).then((data) => {
			console.log('After Accept req data', data)
			delete this.currentUser.friends[this.account.uid]
			delete this.currentUser.following[this.account.uid]
			delete this.currentUser.isFriend
			this.accountProvider.updateOtherUser(this.account)
			this.loadingController.hide()
		})
	}

	// Update Profile Photo
	changeProfilePhoto() {
		// Ask if the user wants to take a photo or choose from photo gallery.
		let alert = this.alertCtrl.create({
			title: 'Select Image',
			message: 'Do you want to take a photo or choose from your photo gallery?',
			buttons: [
				{
					text: 'Cancel',
					handler: data => { }
				},
				{
					text: 'Choose from Gallery',
					handler: () => {

						this.camera.getPicture({
							quality: 100,
							targetWidth: this.platform.width(),
							targetHeight: this.platform.height(),
							destinationType: this.camera.DestinationType.DATA_URL,
							encodingType: this.camera.EncodingType.JPEG,
							// mediaType: this.camera.MediaType.ALLMEDIA,
							correctOrientation: true,
							sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
						}).then((imageData) => {
							console.log(imageData);

							this.account.photoURL = 'data:image/jpeg;base64,' + imageData;
							this.loadingController.show()
							this.accountProvider.updateAccount(this.account).then(() => {
								console.log('Updated Account', this.account)
								this.loadingController.hide()
							})
						});
					}
				},
				{
					text: 'Take Photo',
					handler: () => {
						this.camera.getPicture({
							quality: 100,
							// targetWidth: this.platform.width(),
							// targetHeight: this.platform.height(),
							destinationType: this.camera.DestinationType.DATA_URL,
							encodingType: this.camera.EncodingType.JPEG,
							correctOrientation: true,
							sourceType: this.camera.PictureSourceType.CAMERA
						}).then((imageData) => {
							console.log(imageData);

							this.account.photoURL = 'data:image/jpeg;base64,' + imageData;
							this.loadingController.show()
							this.accountProvider.updateAccount(this.account).then(() => {
								console.log('Updated Account', this.account)
								this.loadingController.hide()
							})
						});
					}
				}
			]
		}).present();
	}



	// Update Cover Photo
	changeCoverPhoto() {
		// Ask if the user wants to take a photo or choose from photo gallery.
		let alert = this.alertCtrl.create({
			title: 'Select Image',
			message: 'Do you want to take a photo or choose from your photo gallery?',
			buttons: [
				{
					text: 'Cancel',
					handler: data => { }
				},
				{
					text: 'Choose from Gallery',
					handler: () => {

						this.camera.getPicture({
							quality: 100,
							targetWidth: this.platform.width(),
							targetHeight: this.platform.height(),
							destinationType: this.camera.DestinationType.DATA_URL,
							encodingType: this.camera.EncodingType.JPEG,
							// mediaType: this.camera.MediaType.ALLMEDIA,
							correctOrientation: true,
							sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
						}).then((imageData) => {
							console.log(imageData);

							this.account.coverPhotoURL = 'data:image/jpeg;base64,' + imageData;
							this.loadingController.show()
							this.accountProvider.updateAccount(this.account).then(() => {
								console.log('Updated Account', this.account)
								this.loadingController.hide()
							})
						});
					}
				},
				{
					text: 'Take Photo',
					handler: () => {
						this.camera.getPicture({
							quality: 100,
							// targetWidth: this.platform.width(),
							// targetHeight: this.platform.height(),
							destinationType: this.camera.DestinationType.DATA_URL,
							encodingType: this.camera.EncodingType.JPEG,
							correctOrientation: true,
							sourceType: this.camera.PictureSourceType.CAMERA
						}).then((imageData) => {
							console.log(imageData);

							this.account.coverPhotoURL = 'data:image/jpeg;base64,' + imageData;
							this.loadingController.show()
							this.accountProvider.updateAccount(this.account).then(() => {
								console.log('Updated Account', this.account)
								this.loadingController.hide()
							})
						});
					}
				}
			]
		}).present();
	}


	addDetails() {
		this.navCtrl.push(ProfileAddDetailsPage, { account: this.account })
	}


	goToReactions() {
		this.navCtrl.push('PostReactionsPage');
	}

	showReactionsPopOver(event) {
		let popover = this.popoverCtrl.create(ReactionsPopoverPage);

		popover.present({
			ev: event
		});
	}

}
