import { Component, NgZone } from '@angular/core';
import { NavController, AlertController, ToastController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { AuthProvider } from '../../providers/auth/auth';
import countries from '../../util/countries';
import { LoadingProvider } from '../../providers/loading/loading';

declare var window;

const avatar = 'assets/imgs/buddy.png';

@Component({
	selector: 'page-signup',
	templateUrl: 'signup.html',
})
export class SignupPage {
	date = new Date();
	data: any = {
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
	}

	image: any = avatar;

	step: number = 1;
	countries: any = countries;
	countryCode: any = '+55';
	private showAlert = false;

	constructor(
		public navCtrl: NavController,
		public authProvider: AuthProvider,
		private alertCtrl: AlertController,
		private camera: Camera,
		private zone: NgZone,
		private toast: ToastController,
		private loading: LoadingProvider
	) {
		debugger;
		console.log(this.data.birthday);
	}

	isValid(): boolean {
		const res = (this.data.name !== '' && this.data.username !== '' && this.data.birthday &&
			((this.data.email !== '' && this.data.password !== '' && this.data.password2 !== '' &&
				(this.data.password === this.data.password2)) ||
				this.data.phone !== ''));
		return res;
	}

	createAccount() {
		debugger;
		this.loading.show();
		const user: any = this.data;
		this.showAlert = true;
		user.phone = this.countryCode + user.phone;
		user.photoURL = this.image;
		if (this.data.email.trim() === '') {
			// email not provided by user, so signup will be done via phonenumber now
			debugger;
			(<any>window).FirebasePlugin.verifyPhoneNumber((credential) => {

				debugger;
				this.loading.hide();
				console.log(credential);
				// ask user to input verificationCode:
				const { verificationId } = credential;
				let prompt = this.alertCtrl.create({
					title: 'Enter the Confirmation code',
					inputs: [{ name: 'confirmationCode', placeholder: 'Confirmation Code' }],
					buttons: [
						{
							text: 'Cancel',
							handler: data => {

								console.log('Cancel clicked');
							}
						},
						{
							text: 'Send',
							handler: data => {
								this.authProvider.signUpWithPhoneNumber({
									verificationId,
									confirmationCode: data.confirmationCode,
									...user
								});

							}
						}
					]
				});
				if (this.showAlert)
					prompt.present().then(() => this.showAlert = false);
			}, (error) => {
				this.loading.hide();
				debugger;
				console.log(error);
				this.toast.create({
					message: error,
					duration: 5000
				}).present();
			}, user.phone, 60);

		} else {
			this.loading.hide();
			this.authProvider.signUpWithEmailAndPassword(user);
		}
	}

	choosePhoto() {
		// Ask if the user wants to take a photo or choose from photo gallery.
		let alert = this.alertCtrl.create({
			title: 'Set Profile Photo',
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
							quality: 50,
							targetWidth: 384,
							targetHeight: 384,
							destinationType: this.camera.DestinationType.DATA_URL,
							encodingType: this.camera.EncodingType.JPEG,
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
							quality: 50,
							targetWidth: 384,
							targetHeight: 384,
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



	ionViewDidLoad() {

	}

}
