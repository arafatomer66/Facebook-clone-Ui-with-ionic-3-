import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';
import {
	AngularFirestore
} from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { Platform, App, NavController } from 'ionic-angular';
import firebase from 'firebase';
import { TabsPage } from '../../pages/tabs/tabs';

import { Account } from '../../models/account';
import { Consts } from '../../app/consts';
import { LoadingProvider } from '../../providers/loading/loading';
import { ImageProvider } from '../../providers/image/image';



@Injectable()
export class AuthProvider {

	private navCtrl: NavController;
	constructor(
		private afa: AngularFireAuth,
		private afs: AngularFirestore,
		private platform: Platform,
		private app: App,
		private loadingProvider: LoadingProvider,
		private imageProvider: ImageProvider,
		private toast: ToastController
	) {
		debugger;
		this.navCtrl = this.app.getRootNav();
		this.afa.authState.subscribe((user) => {
			console.log(user);

			if (user) {
				const { uid, email } = user;
				if (user.emailVerified || (!user.emailVerified && user.phoneNumber)) {
					this.navCtrl.setRoot(TabsPage);
				} else {
					this.navCtrl.push(Consts.verifyPage, { user: { uid, email } });
				}
			}
		});
	}

	signUpWithEmailAndPassword(obj) {
		debugger;
		this.loadingProvider.show();
		if (obj.password !== obj.password2) {
			this.loadingProvider.hide();
			let err = "Passwords doesn't match";
			console.log(err);
			this.toast.create({
				message: err,
				duration: 5000
			}).present();
		} else {
			this.afa.auth.createUserWithEmailAndPassword(obj.email, obj.password)
				.then(async (res) => {
					debugger;
					const uid = res.uid;
					const photoURL: any = await this.imageProvider.uploadProfilePhoto(uid, obj.photoURL)
						.catch(err => console.log(err));

					const user: Account = {
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
						.then(() => {
							this.afa.auth.currentUser.sendEmailVerification();
							this.loadingProvider.hide();
						});
				}, (err) => {
					debugger;
					this.loadingProvider.hide();
					console.log(err);
					this.toast.create({
						message: err.message,
						duration: 5000
					}).present();
				});
		}
	}

	signUpWithPhoneNumber(obj) {
		debugger;
		if (this.platform.is('cordova')) {
			let signInCredential: any = firebase.auth.PhoneAuthProvider.credential(obj.verificationId, obj.confirmationCode);
			firebase.auth().signInWithCredential(signInCredential).then(async (res) => {
				const { uid } = res.user;
				const photoURL: any = await this.imageProvider.uploadProfilePhoto(uid, obj.photoURL)
					.catch(err => console.log(err));
				const user: Account = {
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
					.then(() => {
						this.afa.auth.currentUser.sendEmailVerification();
					});

			});
		} else {
			console.log('function unavailable into browser');
		}
	}

	resendMailVerification() {
		return this.afa.auth.currentUser.sendEmailVerification();
	}

	resetPassword(user) {
		if (!user.includes('@')) {

			//get email from account collection
		}
		return this.afa.auth.sendPasswordResetEmail(user);
	}

	signInWithEmailAndPassword(obj) {
		if (!obj.user.includes('@')) {
			//get email from account collection
		}
		return this.afa.auth.signInWithEmailAndPassword(obj.user, obj.password);
	}

	signOut() {
		this.afa.auth.signOut();
	}



}
