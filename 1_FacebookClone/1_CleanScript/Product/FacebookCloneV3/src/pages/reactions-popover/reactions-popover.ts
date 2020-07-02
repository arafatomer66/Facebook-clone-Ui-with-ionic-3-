import { Component, ViewChild } from '@angular/core';
import { NavController, ActionSheetController, IonicPage, NavParams, ViewController, ModalController, PopoverController, InfiniteScroll, Content, Events, Platform, App } from 'ionic-angular';
import { TimelineProvider } from '../../providers/timeline/timeline';
import { AccountProvider } from '../../providers/account/account';
import { Post } from '../../models/post';
import { CommentsPage } from '../comments/comments';
import { LoadingProvider } from "../../providers/loading/loading";
import { Camera } from '@ionic-native/camera';
import moment from 'moment';
import { Account } from '../../models/account';

@IonicPage()
@Component({
  selector: 'page-reactions-popover',
  templateUrl: 'reactions-popover.html',
})
export class ReactionsPopoverPage {

  post: any;
  account: Account;

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
    public navParams: NavParams,
    public viewCtrl: ViewController
  ) {
    this.post = this.navParams.get('post')
    console.log('post in reaction page', this.post)

    this.accountProvider.getAccount(null).subscribe((data: Account) => {
      this.account = data;
      console.log('Account', this.account)
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReactionsPopoverPage');
  }

  selectReaction(type) {
    console.log('type', type)
    switch (type) {
      case 'like':
        this.timelineProvider.likePost(this.post.uid, type, this.account)
        break;

      case 'love':
        this.timelineProvider.likePost(this.post.uid, type, this.account)
        break;

      case 'laugh':
        this.timelineProvider.likePost(this.post.uid, type, this.account)
        break;

      case 'sad':
        this.timelineProvider.likePost(this.post.uid, type, this.account)
        break;

      case 'shock':
        this.timelineProvider.likePost(this.post.uid, type, this.account)
        break;

      case 'angry':
        this.timelineProvider.likePost(this.post.uid, type, this.account)
        break;

      default:
        this.timelineProvider.likePost(this.post.uid, 'like', this.account)

    }
    this.viewCtrl.dismiss();
  }
}

