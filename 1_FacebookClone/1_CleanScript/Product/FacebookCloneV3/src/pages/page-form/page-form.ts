import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Platform, AlertController } from 'ionic-angular';
import { Camera } from "@ionic-native/camera";
import { AccountProvider } from "../../providers/account/account";
import { Account } from '../../models/account';
import { PageProvider } from "../../providers/page/page";
import { LoadingProvider } from "../../providers/loading/loading";
/**
 * Generated class for the PageFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-page-form',
  templateUrl: 'page-form.html',
})
export class PageFormPage {

  pagePicture: any
  coverPicture: any
  account: Account

  data: any = {
    pageName: '',
    description: '',
    photoURL: null,
    coverPhotoURL: null,
    website: ''
  }
  step = 1
  image = 'assets/imgs/profile/cover-photo.png'
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private viewCtrl: ViewController,
    private camera: Camera,
    private platform: Platform,
    private alertCtrl: AlertController,
    private accountProvider: AccountProvider,
    private pageProvider: PageProvider,
    public loading: LoadingProvider
  ) {
    this.accountProvider.getAccount(null).subscribe((data) => {
      this.account = data
      console.log(this.account)
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PageFormPage');
  }


  createPage() {
    if (this.step < 5) {
      this.step += 1
    }
    else {
      this.loading.show()
      this.pageProvider.createPage(this.account, this.data).then((data) => {
        this.loading.hide()
        this.viewCtrl.dismiss()
      })
    }
  }



  // Choose Page Picture
  choosePagePicture() {
    // Ask if the user wants to take a photo or choose from photo gallery.
    let alert = this.alertCtrl.create({
      title: 'Select Page Picture',
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

              this.data.photoURL = 'data:image/jpeg;base64,' + imageData;
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

              this.data.photoURL = 'data:image/jpeg;base64,' + imageData;
            });
          }
        }
      ]
    }).present();
  }


  // Choose Page Cover Picture
  choosePageCoverPicture() {
    // Ask if the user wants to take a photo or choose from photo gallery.
    let alert = this.alertCtrl.create({
      title: 'Select Page Cover Picture',
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

              this.data.coverPhotoURL = 'data:image/jpeg;base64,' + imageData;
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

              this.data.coverPhotoURL = 'data:image/jpeg;base64,' + imageData;
            });
          }
        }
      ]
    }).present();
  }

  close() {
    if (this.step === 1) {
      this.viewCtrl.dismiss()
    }
    else {
      this.step -= 1
    }

  }


}
