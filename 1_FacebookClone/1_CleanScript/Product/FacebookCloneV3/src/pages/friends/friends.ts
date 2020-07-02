import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, ActionSheetController, IonicPage, ModalController, Content, Events } from 'ionic-angular';
import { AccountProvider } from '../../providers/account/account';
import { LoadingProvider } from "../../providers/loading/loading";
import { Account } from "../../models/account";

@IonicPage()
@Component({
	selector: 'page-friends',
	templateUrl: 'friends.html',
})
export class FriendsPage {
	@ViewChild(Content) content: Content;
	friendRequests: Account[] = [];
	userSearch: any;
	account: Account;
	searchUserList: any;
	users: any;
	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		private accountProvider: AccountProvider,
		public actionSheet: ActionSheetController,
		public modalCtrl: ModalController,
		public loading: LoadingProvider,
		private events: Events
	) {
		this.events.subscribe('scrollToTop', (time) => {
			console.log('scrollToTop', 'at', time);
			this.content.scrollToTop();
		});
		this.accountProvider.getAccount(null).subscribe((data) => {
			this.account = data;
			console.log(this.account);
			this.getFriendReqs()
		});
	}

	getFriendReqs() {
		this.loading.show();
		this.accountProvider.getUsers().subscribe((data: any) => {
			// console.log('All User data', data);
			this.users = data.filter((item: Account) => {
				if (this.account) {
					return item.uid != this.account.uid
				}
			});
			// console.log('All User except current user', this.users);
			if (this.account) {
				if (Object.keys(this.account.friendRequests).length > 0) {
					this.users.map((user: Account) => {
						if (this.account.friendRequests[user.uid]) {
							this.friendRequests.push(user)
						}
					})
				}
			}
			this.loading.hide();
		});
	}


	removeFromSearch(user: Account) {
		this.searchUserList = this.searchUserList.filter((item: Account) => {
			return item.uid != user.uid
		})
		this.loading.hide()
	}

	removeReq(user: Account) {
		delete this.account.friendRequests[user.uid];
		this.accountProvider.updateAccount(this.account)
		this.friendRequests = this.friendRequests.filter((item: Account) => {
			return item.uid != user.uid
		})
	}
	// Accept Friend Req and update both user
	acceptReq(user: Account) {
		this.loading.show()
		this.account.following = { ...this.account.following, [user.uid]: true }
		this.account.friends = { ...this.account.friends, [user.uid]: true }
		delete this.account.friendRequests[user.uid];
		this.friendRequests = this.friendRequests.filter((item: Account) => {
			return item.uid != user.uid
		})
		this.accountProvider.updateAccount(this.account).then((data) => {
			console.log('After Accept req data', data)
			user.following = { ...user.following, [this.account.uid]: true }
			user.friends = { ...user.friends, [this.account.uid]: true }
			this.accountProvider.updateOtherUser(user)
			this.loading.hide()
		})
	}

	sendReq(user: Account) {
		this.loading.show()
		if (Object.keys(user.friendRequests).length > 0) {
			user.friendRequests = { ...user.friendRequests, [this.account.uid]: true };
		}
		else {
			user.friendRequests = { [this.account.uid]: true }
		}
		this.accountProvider.updateOtherUser(user).then(() => {
			console.log('user after send req', user)
			this.removeFromSearch(user)
		})
	}

	removeFriend(user) {
		debugger;
		this.loading.show()
		delete this.account.friends[user.uid]
		delete this.account.following[user.uid]
		this.accountProvider.updateAccount(this.account).then((data) => {
			console.log('After Accept req data', data)
			delete user.friends[this.account.uid]
			delete user.following[this.account.uid]
			delete user.isFriend
			this.accountProvider.updateOtherUser(user)
			this.loading.hide()
		})
	}

	isReqSend(user: Account) {
		if (user.friendRequests[this.account.uid]) {
			return true
		}
		else {
			return false
		}
	}

	isFriend(user) {
		if (this.account.friends[user.uid]) {
			return true
		}
		else {
			return false
		}
	}

	gotoSearch() {
		this.modalCtrl.create('SearchPage').present()
	}

	//Goto User Profile
	goToProfile(userId) {
		this.navCtrl.push('ProfilePage', { userId: userId })
	}

	onSearchUser(ev: any) {
		console.log(ev.target.value)
		this.userSearch = ev.target.value
		if (this.userSearch && this.userSearch.trim() != '') {

			this.searchUserList = this.users.filter((item) => {
				if (this.account.friends && this.account.friends.hasOwnProperty(item.uid)) {
					item.isFriend = true
				}
				return (item.name.toLowerCase().indexOf(this.userSearch.toLowerCase()) > -1 ||
					item.username.toLowerCase().indexOf(this.userSearch.toLowerCase()) > -1);
			})
			console.log('Searchlist', this.searchUserList)
		}
	}

	gotoUers(data) {
		if (data === 'allfriends') {
			this.modalCtrl.create('SearchUserPage', { title: 'All Friends', chat: false }).present();
		}
		else if (data === 'allUsers') {
			this.modalCtrl.create('SearchUserPage', { title: 'All Users', chat: false }).present();
		}
	}

	gotoMessages() {
		this.navCtrl.push('MessagesPage')
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad FriendsPage');
	}

}
