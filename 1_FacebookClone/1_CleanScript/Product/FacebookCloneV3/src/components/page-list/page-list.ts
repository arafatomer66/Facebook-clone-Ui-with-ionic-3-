import { Component, Input } from '@angular/core';
import { NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { TimelineProvider } from '../../providers/timeline/timeline';
import { AccountProvider } from '../../providers/account/account';
import { ChatProvider } from '../../providers/chat/chat';
import { Post } from '../../models/post';
import moment from 'moment';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { LoadingProvider } from '../../providers/loading/loading';
import { Page } from '../../models/page';
import { PageProvider } from "../../providers/page/page";
/**
 * Generated class for the PageListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'page-list',
  templateUrl: 'page-list.html'
})
export class PageListComponent {

  @Input() pages: any[];

  account: any;
  constructor(
    public navCtrl: NavController,
    private timelineProvider: TimelineProvider,
    private accountProvider: AccountProvider,
    private modalCtrl: ModalController,
    private viewCtrl: ViewController,
    private chatProvider: ChatProvider,
    public loading: LoadingProvider,
    private pageProvider: PageProvider
  ) {
    this.accountProvider.getAccount(null).subscribe((data) => {
      this.account = data;
      console.log(this.account);

    });

  }

  likePage(uid) {
    this.pageProvider.likeAndFollowPage(uid, this.account)
  }


  isLikedPage(page) {
    var is_liked = false
    if (page.followers && page.followers.length > 0) {
      for (var i = 0; i < page.followers.length; i++) {
        if (page.followers[i].user === this.account.uid) {
          is_liked = true
        }
      }
      return is_liked
    }
  }


  dislikePage(uid) {
    this.pageProvider.dislikeAndunFollowPage(uid, this.account)
  }

  goToPage(uid) {
    this.navCtrl.push('PageProfilePage', { pageId: uid })
  }

}
