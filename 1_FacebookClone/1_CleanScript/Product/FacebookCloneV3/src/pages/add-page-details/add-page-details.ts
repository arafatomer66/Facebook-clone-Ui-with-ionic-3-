import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, NavParams, Platform } from 'ionic-angular';
import { LoadingProvider } from "../../providers/loading/loading";
import { Camera } from "@ionic-native/camera";
import { PageProvider } from "../../providers/page/page";
/**
 * Generated class for the AddPageDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-add-page-details',
	templateUrl: 'add-page-details.html',
})
export class AddPageDetailsPage {
	profileImage: any;
	coverImage: any

	pageDetails: any = {
		photoURL: '',
		coverPhotoURL: '',
		currentCity: '',
		workPlace: '',
		education: '',
		hometown: '',
		website: ''
	};


	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		private alertCtrl: AlertController,
		public loading: LoadingProvider,
		private camera: Camera,
		private platform: Platform,
		private pageProvider: PageProvider
	) {
		this.pageDetails = this.navParams.get('page')
	}


	// Update Profile Photo
	changeProfilePhoto() {
	}



	// Update Cover Photo
	changeCoverPhoto() {
	}



	updatePage() {
		console.log('Updated Profile', this.pageDetails)
		this.loading.show()
		this.pageProvider.updatePage(this.pageDetails, this.pageDetails.uid).then((data) => {
			console.log('Updated data', data)
			this.loading.hide()
		})
	}


	changeCity() {
	}


	changeWorkPlace() {
	}

	changeEducation() {
	}


	changeHometown() {
	}

	changeWebsite() {
	}


	customize() {
	}


	deletePage() {
		//Delete Page
		this.alertCtrl.create({
			title: "Delete Page",
			subTitle: "Are you sure you want to delete this Page?",
			buttons: [
				{
					text: "No",
					handler: () => console.log('cancel')
				},
				{
					text: "Yes",
					handler: () => {
						this.loading.show()
						this.pageProvider.deletePage(this.pageDetails.uid).then(() => {
							this.loading.hide()
							this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length() - 3))
						})
					}
				}

			]
		}).present();
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad AddPageDetailsPage');
	}

}
