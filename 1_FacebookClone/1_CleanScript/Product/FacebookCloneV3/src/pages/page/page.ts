import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { PageProvider } from "../../providers/page/page";
import { LoadingProvider } from "../../providers/loading/loading";
import { Page } from "../../models/page";
import { AccountProvider } from "../../providers/account/account";
/**
 * Generated class for the Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-page',
	templateUrl: 'page.html',
})
export class PagesList {
	account: any
	pages: any[];  //Pages Array Objects
	is_likes: boolean;
	ownedPages: any[] = [];
	likedPages: any[] = []
	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		private modalCtrl: ModalController,
		private pageProvider: PageProvider,
		public loading: LoadingProvider,
		private accountProvider: AccountProvider
	) {
		this.is_likes = this.navParams.get('likePages')
		this.accountProvider.getAccount(null).subscribe((data) => {
			this.account = data
		})
	}

	ionViewWillEnter() {
		this.getOwnedPages()
		this.getLikePages()
		// if (this.is_likes) {
		//   this.getLikePages()
		// }
		// else {
		//   this.getAllPages()
		// }
	}

	getOwnedPages() {
		this.loading.show()
		this.pageProvider.getPages().subscribe((data) => {
			console.log('page Data', data)
			this.ownedPages = [];
			data.map(a => {
				var data: any = a.payload.doc.data();
				var uid = a.payload.doc.id;
				if (data.ownerId === this.account.uid) {
					this.ownedPages.push({ uid, ...data })
				}
			})
			this.loading.hide()
			console.log('All Owned Pages', this.ownedPages)
		})
	}


	getLikePages() {
		this.loading.show()
		this.pageProvider.getPages().subscribe((data) => {
			console.log('page Data', data)
			this.likedPages = []
			data.map(a => {
				var data: any = a.payload.doc.data();
				var uid = a.payload.doc.id;
				if (data.likes) {
					for (var i = 0; i < data.likes.length; i++) {
						if (data.likes[i].user === this.account.uid) {
							this.likedPages.push({ uid, ...data })
						}
					}
				}
			})
			this.loading.hide()
			console.log('All likedPages', this.likedPages)
		})
	}


	getAllPages() {
		this.loading.show()
		this.pageProvider.getPages().subscribe((data) => {
			console.log('page Data', data)
			this.pages = []
			data.map(a => {
				const data: any = a.payload.doc.data();
				const uid = a.payload.doc.id;

				this.pages.push({ uid, ...data })
			})
			this.loading.hide()
			console.log('All Pages', this.pages)
		})
	}

	goToPage(uid) {
		this.navCtrl.push('PageProfilePage', { pageId: uid })
	}


	ionViewDidLoad() {
		console.log('ionViewDidLoad PagesList');
	}

	createPage() {
		this.modalCtrl.create('PageFormPage').present()
	}


}
