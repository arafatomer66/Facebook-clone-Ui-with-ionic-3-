import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, NavParams, App, Platform } from 'ionic-angular';
import { LoginPage } from "../login/login";
import { AngularFireAuth } from 'angularfire2/auth';
import { AccountProvider } from '../../providers/account/account';
import { LoadingProvider } from "../../providers/loading/loading";
import { Account } from "../../models/account";
import { Camera } from "@ionic-native/camera";
/**
 * Generated class for the ProfileAddDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile-add-details',
  templateUrl: 'profile-add-details.html',
})
export class ProfileAddDetailsPage {
  profileImage: any;
  coverImage: any

  account: any = {
    photoURL: '',
    coverPhotoURL: '',
    currentCity: '',
    workPlace: '',
    relationshipStatus: '',
    education: '',
    hometown: ''
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private accountProvider: AccountProvider,
    private alertCtrl: AlertController,
    public loading: LoadingProvider,
    private camera: Camera,
    private platform: Platform,
  ) {
    this.accountProvider.getAccount(null).subscribe((data) => {
      this.account = data;
      console.log(this.account);
    });
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
            });
          }
        }
      ]
    }).present();
  }





  updateProfile() {
    console.log('Updated Profile', this.account)
    this.loading.show()
    this.accountProvider.updateAccount(this.account).then((data) => {
      console.log('Updated data', data)
      this.loading.hide()
    })
  }



  changeCity() {
    let alert = this.alertCtrl.create({
      title: 'Change Current City',
      message: "Please enter your Current City",
      inputs: [
        {
          name: 'currentCity',
          placeholder: 'Your Cuurent City',
          value: this.account.currentCity,
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => { }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('data', data)
            this.account.currentCity = data.currentCity
          }
        }
      ]
    }).present();
  }


  changeWorkPlace() {
    let alert = this.alertCtrl.create({
      title: 'Change Your Work Place',
      message: "Please enter your Current Work Place",
      inputs: [
        {
          name: 'workPlace',
          placeholder: 'Your Current Work Place',
          value: this.account.workPlace,
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => { }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('data', data)
            this.account.workPlace = data.workPlace
          }
        }
      ]
    }).present();
  }

  changeEducation() {
    let alert = this.alertCtrl.create({
      title: 'Change Your Recent Education',
      message: "Please enter your Recent Education",
      inputs: [
        {
          name: 'education',
          placeholder: 'Your Recent Education',
          value: this.account.education,
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => { }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('data', data)
            this.account.education = data.education
          }
        }
      ]
    }).present();
  }


  changeHometown() {
    let alert = this.alertCtrl.create({
      title: 'Change Your Hometown',
      message: "Please enter your Hometown",
      inputs: [
        {
          name: 'hometown',
          placeholder: 'Your Hometown',
          value: this.account.hometown,
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => { }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('data', data)
            this.account.hometown = data.hometown
          }
        }
      ]
    }).present();
  }

  changeRelationshipStatus() {
    let alert = this.alertCtrl.create({
      title: 'Change Your Relationship Status',
      message: "Please enter your Status",
      inputs: [
        {
          name: 'relationshipStatus',
          placeholder: 'Your Relationship Status',
          value: this.account.relationshipStatus,
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => { }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('data', data)
            this.account.relationshipStatus = data.relationshipStatus
          }
        }
      ]
    }).present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfileAddDetailsPage');
  }

}
