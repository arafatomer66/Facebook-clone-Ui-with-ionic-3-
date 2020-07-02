import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, ActionSheetController, IonicPage, ModalController, PopoverController, InfiniteScroll, Content, Events, Platform, App } from 'ionic-angular';
import { TimelineProvider } from '../../providers/timeline/timeline';
import { AccountProvider } from '../../providers/account/account';
import { Post } from '../../models/post';
import { CommentsPage } from '../comments/comments';
import { ReactionsPopoverPage } from '../reactions-popover/reactions-popover';
import { LoadingProvider } from "../../providers/loading/loading";
import { Camera } from '@ionic-native/camera';
import moment from 'moment';
import { Reaction } from '../../data/Reaction';
import { Faker } from '../../data/Faker';

@IonicPage()
@Component({
  selector: 'page-post-reactions',
  templateUrl: 'post-reactions.html',
})
export class PostReactionsPage {

  post: Post;
  totalReactions: any = []
  account: any;

  reactionsSegment: string = "like";

  likeReactions: Reaction[] = [];
  loveReactions: Reaction[] = [];
  laughReactions: Reaction[] = [];
  sadReactions: Reaction[] = [];
  shockReactions: Reaction[] = [];
  angryReactions: Reaction[] = [];

  constructor(
    public navCtrl: NavController,
    public actionSheetCtrl: ActionSheetController,
    public popoverCtrl: PopoverController,
    private timelineProvider: TimelineProvider,
    private accountProvider: AccountProvider,
    private modalCtrl: ModalController,
    private events: Events,
    private platform: Platform,
    public loadingProvider: LoadingProvider,
    private camera: Camera,
    private app: App,
    private navParams: NavParams
  ) {

    this.post = this.navParams.get('post')

    this.accountProvider.getAccount(null).subscribe((data) => {
      this.account = data;
      console.log(this.account);
    });

    if (this.post.likes && this.post.likes.length > 0) {
      console.log('Total Reactions', this.post.likes)

      for (var i = 0; i < this.post.likes.length; i++) {
        var likeReaction = new Reaction();
        if (this.post.likes[i].type === 'like') {
          likeReaction = this.post.likes[i]
          this.likeReactions.push(likeReaction)
        }
      }

      for (var i = 0; i < this.post.likes.length; i++) {
        var loveReaction = new Reaction();
        if (this.post.likes[i].type === 'love') {
          loveReaction = this.post.likes[i]
          this.loveReactions.push(loveReaction)
        }
      }


      for (var i = 0; i < this.post.likes.length; i++) {
        var laughReaction = new Reaction();
        if (this.post.likes[i].type === 'laugh') {
          laughReaction = this.post.likes[i]
          this.laughReactions.push(laughReaction)
        }
      }


      for (var i = 0; i < this.post.likes.length; i++) {
        var sadReaction = new Reaction();
        if (this.post.likes[i].type === 'sad') {
          sadReaction = this.post.likes[i]
          this.sadReactions.push(sadReaction)
        }
      }

      for (var i = 0; i < this.post.likes.length; i++) {
        var shockReaction = new Reaction();
        if (this.post.likes[i].type === 'shock') {
          shockReaction = this.post.likes[i]
          this.shockReactions.push(shockReaction)
        }
      }

      for (var i = 0; i < this.post.likes.length; i++) {
        var angryReaction = new Reaction();
        if (this.post.likes[i].type === 'angry') {
          angryReaction = this.post.likes[i]
          this.angryReactions.push(angryReaction)
        }
      }
    }
  }


  isFriend(likedUser) {
    if (likedUser.user === this.account.uid) {
      return false
    }
    else if (this.account.friends[likedUser.user]) {
      return false
    }
    else {
      return true
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostReactionsPage');
  }

}
