import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
// import { Geolocation } from '@ionic-native/geolocation/ngx';

import { NativeGeocoder } from '@ionic-native/native-geocoder';
// import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';

@Injectable()
export class LocationProvider {

	constructor(
		private geolocation: Geolocation,
		// private nativeGeocoder: NativeGeocoder<typeof NativeGeocoder | null>
		private nativeGeocoder: NativeGeocoder
	) {

	}


	getLocation() {
		return new Promise((resolve) => {

			this.geolocation.getCurrentPosition().then(position => {
				console.log('position', position);
				const res = { lat: position.coords.latitude, long: position.coords.longitude };
				resolve(res);
			}).catch((error) => {
				console.log('Error getting location', error);
			});

		});
	}

	getAddress(location) {
		return new Promise((resolve) => {
			debugger;
			this.nativeGeocoder.reverseGeocode(location.lat, location.long)
				.then((result) => {
					console.log('native geocoder result:: ', JSON.stringify(result));
					resolve(result[0]);
				}).catch((error: any) => console.log(error));
			resolve();
		});
	}
}
