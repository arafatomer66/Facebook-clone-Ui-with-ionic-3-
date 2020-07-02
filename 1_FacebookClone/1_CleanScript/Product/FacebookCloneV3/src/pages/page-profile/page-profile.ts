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
import { Account } from "../../models/account";
import { CommentsPage } from '../comments/comments';
import { ReactionsPopoverPage } from '../reactions-popover/reactions-popover';
import { ProfileAddDetailsPage } from "../profile-add-details/profile-add-details";
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { PageProvider } from "../../providers/page/page";
/**
 * Generated class for the PageProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-page-profile',
	templateUrl: 'page-profile.html',
})
export class PageProfilePage {

	@ViewChild(Content) content: Content;
	@ViewChild('video') video: any;
	private pageId: string = null;
	posts: Post[] = [];
	pictureCount: number = 0;
	pageDetails: any;
	currentUser: any;
	view: string = "posts";
	timeline: any = []
	placeholder: string;
	photos: any[] = []
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
		private pageProvider: PageProvider
	) {
		this.pageId = this.navParams.get('pageId');
		if (!this.pageId)
			this.pageId = null;

		this.loadingController.show()
		this.pageProvider.getPageDetail(this.pageId).subscribe((data) => {
			this.pageDetails = data;
			this.pageDetails.uid = this.pageId
			this.placeholder = "Write Someting to " + this.pageDetails.pageName
			console.log('pageDetails', this.pageDetails)
			this.accountProvider.getAccount(null).subscribe((user) => {
				this.currentUser = user
				console.log('Cuurent User', this.currentUser)
			})
			this.loadingController.hide()

		});
	}

	getPagePosts() {
		this.timelineProvider.getAllPosts().subscribe((data) => {
			this.timeline = []
			data.map(a => {
				const data: any = a.payload.doc.data();
				const uid = a.payload.doc.id;
				if (data.pageId && data.pageId === this.pageId) {
					debugger
					this.timeline.push({ uid, ...data })
				}
			})
			for (var i = 0; i < this.timeline.length; i++) {
				if (this.timeline[i].photoURL) {
					this.photos.push(this.timeline[i].photoURL)
				}
			}
			console.log('Photos', this.photos)
			console.log('page timeline', this.timeline)
		})
	}


	addPost() {
		this.modalCtrl.create('AddPostPage', { is_edit: false, pageId: this.pageId, pageName: this.pageDetails.pageName }).present();
	}


	editPage() {
		this.navCtrl.push('AddPageDetailsPage', { page: this.pageDetails })
	}

	ionViewDidLoad() {
	}

	showPostComments(post: Post) {
		let commentsModal = this.modalCtrl.create(CommentsPage);
		commentsModal.present();
	}


	ionViewWillEnter() {
		this.getPagePosts();
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

							this.pageDetails.photoURL = 'data:image/jpeg;base64,' + imageData;
							this.loadingController.show()
							this.pageProvider.updatePage(this.pageDetails, this.pageId).then(() => {
								console.log('Updated Page', this.pageDetails)
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

							this.pageDetails.photoURL = 'data:image/jpeg;base64,' + imageData;
							this.loadingController.show()
							this.pageProvider.updatePage(this.pageDetails, this.pageId).then(() => {
								console.log('Updated Page', this.pageDetails)
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

							this.pageDetails.coverPhotoURL = 'data:image/jpeg;base64,' + imageData;
							this.loadingController.show()
							this.pageProvider.updatePage(this.pageDetails, this.pageId).then(() => {
								console.log('Updated Page', this.pageDetails)
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

							this.pageDetails.coverPhotoURL = 'data:image/jpeg;base64,' + imageData;
							this.loadingController.show()
							this.pageProvider.updatePage(this.pageDetails, this.pageId).then(() => {
								console.log('Updated Page', this.pageDetails)
								this.loadingController.hide()
							})
						});
					}
				}
			]
		}).present();
	}


	addDetails() {
		// this.navCtrl.push(ProfileAddDetailsPage, { account: this.account })
	}



	isLikedPage(page) {
		var is_liked = false
		if (page.followers && page.followers.length > 0) {
			for (var i = 0; i < page.followers.length; i++) {
				if (page.followers[i].user === this.currentUser.uid) {
					is_liked = true
				}
			}
			return is_liked
		}
	}

	openBrowser(url: string) {
		if (!url.includes('//'))
			url = 'http://' + url;
		(<any>window).open(url);
	}


	postOnPage() {
		this.modalCtrl.create('PostOnPage', { is_edit: false, pageId: this.pageDetails.uid, pageDetails: this.pageDetails }).present()
	}


	likePage(uid) {
		this.pageProvider.likeAndFollowPage(uid, this.currentUser)
	}

	dislikePage(uid) {
		this.pageProvider.dislikeAndunFollowPage(uid, this.currentUser)
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
