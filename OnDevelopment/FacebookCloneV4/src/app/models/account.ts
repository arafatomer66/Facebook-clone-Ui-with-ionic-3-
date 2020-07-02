export interface Account {
	uid: string,
	name: string,
	username: string,
	description?: string,
	email: string,
	phone: string,
	photoURL: string,
	coverPhotoURL?: string,
	following?: Object,
	followers?: Object,
	friends?: Object,
	bookmark?: Object,
	friendRequests: Object
	currentCity: String,
	workPlace: String,
	relationshipStatus: String,
	education: String,
	hometown: String,
	picture?: String
}
