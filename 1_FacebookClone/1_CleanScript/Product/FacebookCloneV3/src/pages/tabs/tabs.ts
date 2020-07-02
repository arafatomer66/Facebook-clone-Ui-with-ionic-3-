import { Component, ViewChild, ElementRef, Renderer } from '@angular/core';
import { NavParams, Tabs, Content, Events } from 'ionic-angular';
import { ChatProvider } from '../../providers/chat/chat';
import { TimelineProvider } from '../../providers/timeline/timeline';

import { HomePage } from '../home/home';
import { FriendsPage } from '../friends/friends';
import { MarketPlacePage } from '../market-place/market-place';
import { NotificationsPage } from '../notifications/notifications';
import { MorePage } from '../more/more';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  @ViewChild(Content) content: Content;
  @ViewChild('mainTabs') mainTabs: Tabs;
  @ViewChild('homeBtn') homeBtn: ElementRef;

  unreadMessages: any[] = [];
  unreadPosts: any[] = [];
  unreadNotifications: any[] = [];


  tab1Root = HomePage;
  tab2Root = FriendsPage;
  tab3Root = MarketPlacePage;
  tab4Root = NotificationsPage;
  tab5Root = MorePage;

  constructor(
    private chatProvider: ChatProvider,
    private timelineProvider: TimelineProvider,
    private events: Events,
    private renderer: Renderer
  ) {
    this.timelineProvider.isNotificationUnread().subscribe(data => {
      this.unreadNotifications = data;
      console.log('UnRead Notifications', this.unreadNotifications)
    });
  }


  scrollTop(ev) {
    console.log('TOP', ev);
    if (ev.center.x <= 65)
      this.events.publish('scrollToTop', Date.now());
  }

}
