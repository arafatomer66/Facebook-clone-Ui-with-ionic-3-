import { Component, ViewChild, ElementRef } from '@angular/core';
import {
	IonicPage,
	NavController,
	NavParams,
	AlertController,
	ViewController,
	Platform
} from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { LocationProvider } from '../../providers/location/location';
import { PageProvider } from '../../providers/page/page';
import { AccountProvider } from '../../providers/account/account';
import { LoadingProvider } from '../../providers/loading/loading';
import { Post } from '../../models/post';
import { MediaCapture, MediaFile, CaptureError, CaptureVideoOptions } from '@ionic-native/media-capture';
import { Account } from '../../models/account';
/**
 * Generated class for the PostOnPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-post-on',
	templateUrl: 'post-on.html',
})
export class PostOnPage {

	@ViewChild('postText') postText: ElementRef;

	image: any = null;
	video: any = null;
	location: boolean = false;
	text: string = '';
	postOwner: string;
	postOwnerId: any;
	uid: any;
	users: any;
	userList: any;
	search: string;
	selectingUser: boolean = false;
	is_edit: Boolean = false;
	postDetails: Post;
	pageId: any;
	pageDetails: any;
	account: Account;
	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		private camera: Camera,
		private alertCtrl: AlertController,
		private viewCtrl: ViewController,
		private locationProvider: LocationProvider,
		private pageProvider: PageProvider,
		private platform: Platform,
		private loadingProvider: LoadingProvider,
		private accountProvider: AccountProvider,
		private mediaCapture: MediaCapture
	) {
		this.accountProvider.getAccount(null).subscribe((data) => {
			this.account = data
			console.log('Account', this.account)
		})
	}

	ionViewWillEnter() {

		this.text = this.navParams.get('text');
		this.postOwner = this.navParams.get('postOwner');
		this.postOwnerId = this.navParams.get('postOwnerId');
		this.uid = this.navParams.get('postId');
		this.image = this.navParams.get('photoURL');
		this.video = this.navParams.get('videoURL');
		console.log('videoUrl', this.video);
		this.is_edit = this.navParams.get('is_edit')
		this.postDetails = this.navParams.get('post')
		this.pageId = this.navParams.get('pageId');
		this.pageDetails = this.navParams.get('pageDetails')

		console.log('pageDetails', this.pageDetails)
	}


	close() {
		this.viewCtrl.dismiss();
	}

	resize() {
		console.log(this.postText);
		var element = this.postText['_elementRef'].nativeElement.getElementsByClassName("text-input")[0];
		var scrollHeight = element.scrollHeight;
		element.style.height = scrollHeight + 'px';
		this.postText['_elementRef'].nativeElement.style.height = (scrollHeight + 16) + 'px';

	}

	chooseImage() {
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

							this.image = 'data:image/jpeg;base64,' + imageData;
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

							this.image = 'data:image/jpeg;base64,' + imageData;
						});
					}
				}
			]
		}).present();
	}

	chooseVideo() {
		// Ask if the user wants to take a photo or choose from photo gallery.
		let alert = this.alertCtrl.create({
			title: 'Select Video',
			message: 'Do you want to record a video or choose from your gallery?',
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
							targetHeight: 500,
							targetWidth: 500,
							destinationType: this.camera.DestinationType.FILE_URI,
							mediaType: this.camera.MediaType.VIDEO,
							correctOrientation: true,
							sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
						}).then((videoData) => {
							console.log(videoData);
							this.video = videoData;
						});
					}
				},
				{
					text: 'Record Video',
					handler: () => {
						let options: CaptureVideoOptions = { duration: 60, limit: 1 };
						this.mediaCapture.captureVideo(options)
							.then(
								(videoData: MediaFile[]) => {
									console.log(videoData);
									this.video = videoData[0].fullPath.replace('file://', '');
									console.log(this.video);
								},
								(err: CaptureError) => console.error(err)
							);
					}
				}
			]
		}).present();
	}




	async post() {
		debugger;
		this.loadingProvider.show();
		let post: Post = {
			user: '',
			userPhoto: '',
			postBy: '',
			createdAt: new Date(),
			postOwner: this.account.name,
			postOwnerId: this.account.uid,
			postId: this.uid ? this.uid : null,
			pageId: this.pageId,
			pageName: this.pageDetails.pageName
		}
		//Verify which data will be sent to the collection
		if (this.platform.is('cordova') && this.location) {
			const location = await this.locationProvider.getLocation();
			const address: any = await this.locationProvider.getAddress(location);
			if (this.location) {
				post.location = location;
				post.address = address.locality + ", " + address.countryCode;
			}
		}

		if (this.text)
			post.text = this.text;

		if (this.image)
			post.photoURL = this.image;

		if (this.video)
			post.videoURL = this.video;



		console.log(post);
		// post.text = post.text.replace(new RegExp('\n', 'g'), " VK_RETURN ");
		await this.pageProvider.postOnPage(post);
		this.loadingProvider.hide();
		this.viewCtrl.dismiss();

	}

	async updatePost() {
		debugger;
		this.loadingProvider.show();
		let post: Post = {
			user: '',
			userPhoto: '',
			postBy: '',
			createdAt: this.postDetails.createdAt,
			postOwner: this.postOwner ? this.postOwner : null,
			postOwnerId: this.postOwnerId ? this.postOwnerId : null,
			postId: this.uid ? this.uid : null,
			pageId: this.pageId,
			pageName: this.pageDetails.pageName
		}
		//Verify which data will be sent to the collection
		if (this.platform.is('cordova') && this.location) {
			const location = await this.locationProvider.getLocation();
			const address: any = await this.locationProvider.getAddress(location);
			if (this.location) {
				post.location = location;
				post.address = address.locality + ", " + address.countryCode;
			}
		}

		if (this.text)
			post.text = this.text;

		if (this.image)
			post.photoURL = this.image;

		if (this.video)
			post.videoURL = this.video;



		console.log(post);
		// post.text = post.text.replace(new RegExp('\n', 'g'), " VK_RETURN ");
		await this.pageProvider.updatePagePost(post);
		this.loadingProvider.hide();
		this.viewCtrl.dismiss();

	}


	quote(ev) {
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
			this.users = this.users.filter(user => user.username.includes(this.search));
		}

	}

	quoteUser(username) {
		this.selectingUser = false;
		this.text += username.replace(this.search, '');
	}


}
