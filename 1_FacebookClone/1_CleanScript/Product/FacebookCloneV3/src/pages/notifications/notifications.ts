import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Content, NavParams, ModalController, Events } from 'ionic-angular';
import moment from 'moment';
import { TimelineProvider } from '../../providers/timeline/timeline';
import { AccountProvider } from '../../providers/account/account';
import { Notification } from '../../models/notification';
import { LoadingProvider } from "../../providers/loading/loading";
/**
 * Generated class for the NotificationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html',
})
export class NotificationsPage {
  @ViewChild(Content) content: Content;
  account: any;
  notifications: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private accountProvider: AccountProvider,
    private timelineProvider: TimelineProvider,
    private modalCtrl: ModalController,
    public loadingProvider: LoadingProvider,
    private events: Events
  ) {
    this.events.subscribe('scrollToTop', (time) => {
      console.log('scrollToTop', 'at', time);
      this.content.scrollToTop();
    });
    this.accountProvider.getAccount(null).subscribe((data) => {
      this.account = data;
      console.log(this.account);
    });
  }

  ionViewDidEnter() {
    this.timelineProvider.readNotifications();
  }

  //Create text array
  createStrArray(text: String) {
    let str = text;
    if (!str || str === '')
      return '';

    let res = str.split(/[ ]/);
    return res;
  }
  
  ionViewWillEnter() {
    this.loadingProvider.show()
    this.timelineProvider.getNotifications()
      .subscribe((data: any) => {
        if (data.length > 0) {
          this.notifications = [];

          if (this.account.following) {
            this.notifications = data.filter(item => {
              // item.text = item.text.replace(/VK_RETURN/g, '');
              return this.account.following[item.userId] && item
            });
            this.loadingProvider.hide()
            console.log('All Notifications', this.notifications)
          }
        }
        if (!this.notifications)
          this.notifications = null;
        console.log('Notifications', this.notifications);
        this.loadingProvider.hide()
      });
  }


  getDate(date) {

    return moment(new Date(date.seconds * 1000)).fromNow();
  }

  openPost(postId) {
    this.modalCtrl.create('ViewPostPage', { postId: postId }).present();
    console.log('Opening:', postId);
  }

  gotoMessages() {
    this.navCtrl.push('MessagesPage')
  }

  viewPost(postId) {
    this.modalCtrl.create('ViewPostPage', { postId: postId }).present();
  }

  gotoSearch() {
    this.modalCtrl.create('SearchPage').present()
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationsPage');
  }

}
