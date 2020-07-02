import { Component, Input } from '@angular/core';
import { NavController, ModalController, ViewController } from 'ionic-angular';
import { TimelineProvider } from '../../providers/timeline/timeline';
import { AccountProvider } from '../../providers/account/account';
import { ChatProvider } from '../../providers/chat/chat';
import { LoadingProvider } from '../../providers/loading/loading';



@Component({
	selector: 'user-list',
	templateUrl: 'user-list.html'
})

export class UserListComponent {

	@Input() users: any[];
	@Input() chat: boolean = false;


	account: any;
	constructor(
		public navCtrl: NavController,
		private accountProvider: AccountProvider,
		private viewCtrl: ViewController,
		private chatProvider: ChatProvider,
		public loading: LoadingProvider
	) {
		this.accountProvider.getAccount(null).subscribe((data) => {
			this.account = data;
			console.log(this.account);

		});

	}

	followingStatus(userId) {
		if (this.account.following) {
			if (this.account.following[userId])
				return true;
		}
		return false;
	}

	follow(userId) {
		this.accountProvider.follow(userId);
	}

	removeFromSearch(user) {
		this.users = this.users.filter((item) => {
			return item.uid != user.uid
		})
		this.loading.hide()
	}


	isReqSend(user) {
		if (user.friendRequests[this.account.uid]) {
			return true
		}
		else {
			return false
		}
	}

	sendReq(user) {
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

	isFriend(user) {
		if (this.account.friends && this.account.friends[user.uid]) {
			return true
		}
		else {
			return false
		}
	}


	unfollow(userId) {
		this.accountProvider.unfollow(userId);
	}

	//Goto User Profile
	goToProfile(userId) {
		this.navCtrl.push('ProfilePage', { userId: userId })
	}

	async startChat(user) {
		const { uid, name, photoURL } = user;
		console.log('Add.Chat', { uid, name, photoURL });

		await this.chatProvider.openChat(this.viewCtrl, { uid, name, photoURL }, this.account);
	}

}
