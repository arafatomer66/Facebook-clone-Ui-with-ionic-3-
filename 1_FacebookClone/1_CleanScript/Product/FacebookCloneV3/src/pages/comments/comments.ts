import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { TimelineProvider } from '../../providers/timeline/timeline';
import { Comment } from '../../models/comment';
import moment from 'moment';
import { Account } from '../../models/account';

@IonicPage()
@Component({
	selector: 'page-comments',
	templateUrl: 'comments.html',
})
export class CommentsPage {
	postId: any;
	post: any;
	comments: any = null;
	text: string;
	account: Account;
	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		private timelineProvider: TimelineProvider,
		private viewCtrl: ViewController
	) {
		this.post = this.navParams.get('post');
		this.account = this.navParams.get('account');
		this.postId = this.post.uid
		console.log('PostId', this.postId);

	}


	ionViewWillEnter() {
		this.timelineProvider.getPost(this.postId).subscribe((res) => {
			this.post = res;
			console.log('Post', this.post);
			this.comments = this.post.comments
		});
	}


	isLiked() {
		var is_liked: Boolean
		if (this.post.likes && this.post.likes.length > 0) {
			for (var i = 0; i < this.post.likes.length; i++) {
				if (this.post.likes[i].user === this.account.uid) {
					is_liked = true
				}
				else {
					is_liked = false
				}
			}
			return is_liked
		}

	}



	postComment() {
		if (this.text) {
			const account = this.navParams.get('account');
			const comment: Comment = {
				user: account.name,
				photoURL: account.photoURL,
				commentBy: account.uid,
				text: this.text,
				createdAt: new Date()
			}
			console.log('New Comment', comment);
			this.timelineProvider.commentPost(this.postId, comment).then(() => {
				this.text = '';
			});
		}

	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad CommentsPage');
	}

	goBack() {
		this.viewCtrl.dismiss();
	}


	like() {
		this.timelineProvider.likePost(this.postId, 'like', this.account);
	}

	dislike() {
		this.timelineProvider.dislikePost(this.postId)
	}

	goToReplies() {
		this.navCtrl.push('RepliesPage');
	}
	getDate(date) {
		return moment(new Date(date.seconds * 1000)).fromNow();
	}
	goToReactions() {
		this.navCtrl.push('PostReactionsPage', { post: this.post });
	}
}
