import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Reply } from '../../data/Reply';
import { Faker } from '../../data/Faker';

@IonicPage()
@Component({
  selector: 'page-replies',
  templateUrl: 'replies.html',
})
export class RepliesPage {
  replies: Reply[] = [];  

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    for (var i = 0; i < 5; i++) {
      var reply = new Reply();

      reply.name = Faker.names[i];
      reply.profilePicture = Faker.avatars[i];
      reply.content = "Minim proident et anderit fugiat nisi Lorem.";

      this.replies.push(reply);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RepliesPage');
  }

  goBack() {
    this.viewCtrl.dismiss();
  }

}
