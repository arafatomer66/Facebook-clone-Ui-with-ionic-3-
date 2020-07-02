import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostOnPage } from "./post-on";
import { LocationProvider } from '../../providers/location/location';
// import { Geolocation } from '@ionic-native/geolocation';
// import { NativeGeocoder } from '@ionic-native/native-geocoder';

@NgModule({
	declarations: [
		PostOnPage,
	],
	imports: [
		IonicPageModule.forChild(PostOnPage),
	],
	providers: [
		LocationProvider,
		// NativeGeocoder
	]
})
export class AddPostPageModule { }
