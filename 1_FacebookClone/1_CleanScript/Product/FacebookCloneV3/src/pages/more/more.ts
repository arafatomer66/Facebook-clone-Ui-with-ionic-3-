import { Component, ViewChild } from '@angular/core';
import { IonicPage, Events, NavController, ModalController, AlertController, NavParams, App, Content } from 'ionic-angular';
import { LoginPage } from "../login/login";
import { AngularFireAuth } from 'angularfire2/auth';
import { AccountProvider } from '../../providers/account/account';

@IonicPage()
@Component({
	selector: 'page-more',
	templateUrl: 'more.html',
})
export class MorePage {
	@ViewChild(Content) content: Content;
	account = {
		name: '',
		photoURL: null,
		uid: '',
		email: ''
	};
	reportText;
	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public alertCtrl: AlertController,
		public afa: AngularFireAuth,
		private accountProvider: AccountProvider,
		private app: App,
		private modalCtrl: ModalController,
		private events: Events) {
		this.events.subscribe('scrollToTop', (time) => {
			console.log('scrollToTop', 'at', time);
			this.content.scrollToTop();
		});
		this.accountProvider.getAccount(null).subscribe((data) => {
			if (data) {
				this.account = data;
			}
			console.log(this.account);
		});
	}

	ionViewWillEnter() {

	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad MorePage');
	}

	goToProfile() {
		debugger;
		if (this.account) {
			this.navCtrl.push('ProfilePage', { userId: this.account.uid });
		}
	}

	signOut() {
		this.alertCtrl.create({
			title: 'Sign Out',
			subTitle: 'Would you like to sign out?',
			buttons: [
				{
					text: 'No',
					handler: () => console.log('cancel')
				},
				{
					text: 'Yes',
					handler: () => {
						this.afa.auth.signOut()
						this.afa.auth.currentUser.reload();
						this.app.getRootNav().setRoot(LoginPage);
					}
				}
			]

		}).present();
	}

	gotoUers(data) {
		if (data === 'allfriends') {
			this.modalCtrl.create('SearchUserPage', { title: 'All Friends', chat: false }).present();
		}
		else if (data === 'allUsers') {
			this.modalCtrl.create('SearchUserPage', { title: 'All Users', chat: false }).present();
		}
	}

	openBrowser(url: string) {
		if (!url.includes('//'))
			url = 'http://' + url;
		(<any>window).open(url);
	}
	mailto() {
		window.open(`mailto:contact@socodeur.com`, '_system');
	}

	gotoSearch() {
		this.modalCtrl.create('SearchPage').present()
	}

	gotoPagesList(like) {
		this.navCtrl.push('PagesList', { likePages: like })
	}


	reportBug() {
	}


	gotoMessages() {
		this.navCtrl.push('MessagesPage')
	}

}
