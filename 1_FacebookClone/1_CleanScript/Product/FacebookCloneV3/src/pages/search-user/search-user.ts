import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { AccountProvider } from '../../providers/account/account';
import { LoadingProvider } from "../../providers/loading/loading";


@IonicPage()
@Component({
  selector: 'page-search-user',
  templateUrl: 'search-user.html',
})
export class SearchUserPage {

  users: any[] = [];
  userList: any[] = [];
  searchStr: string = '';
  account: any;
  chat: boolean = true;
  title: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private viewCtrl: ViewController,
    private accountProvider: AccountProvider,
    public loading: LoadingProvider
  ) {
    this.accountProvider.getAccount(null).subscribe((data) => {
      this.account = data;
      console.log(this.account);
      this.title = this.navParams.get('title')
      this.chat = this.navParams.get('chat')
    });
  }

  ionViewWillEnter() {
    this.loading.show()
    this.accountProvider.getUsers().subscribe((data: any) => {
      this.userList = [];
      this.users = [];
      this.userList = data;
      this.userList = this.userList.filter((item) => { return item.uid !== this.account.uid })
      if (this.title === 'All Users') {
        data.map((item) => {
          this.users.push(item)
        })
        console.log(this.users);
      }
      else {
        this.users = data.filter(item => this.account.following && this.account.following[item.uid] ? item : null);
        console.log(this.users);
      }
      this.users = this.users.filter((item) => { return item.uid !== this.account.uid })
      this.loading.hide()
    });
  }

  close() {
    this.viewCtrl.dismiss();
  }

  search(ev: any) {
    this.searchStr = ev.target.value;

    if (this.searchStr && this.searchStr.trim() != '') {

      this.users = this.userList.filter((item) => {
        return (item.name.toLowerCase().indexOf(this.searchStr.toLowerCase()) > -1 ||
          item.username.toLowerCase().indexOf(this.searchStr.toLowerCase()) > -1);
      })
    } else {
      this.users = this.userList.filter((item) =>
        this.account.following[item.uid] ? item : null
      );
    }
  }



}
