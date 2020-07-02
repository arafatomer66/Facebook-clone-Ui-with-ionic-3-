import { Component } from '@angular/core';
import { NavController, ModalController } from "ionic-angular";
import { Camera } from "@ionic-native/camera";
import { ChatProvider } from "../../providers/chat/chat";
import { AccountProvider } from "../../providers/account/account";
/**
 * Generated class for the SearchHeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'search-header',
  templateUrl: 'search-header.html'
})
export class SearchHeaderComponent {

  image: any
  account: any;
  totalUnreadChats = 0
  constructor(
    private camera: Camera,
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public chatProvider: ChatProvider,
    public accountProvider: AccountProvider
  ) {
    this.accountProvider.getAccount(null).subscribe((data) => {
      this.account = data;
      console.log(this.account);
    });
    console.log('Hello SearchHeaderComponent Component');
    this.getAllUnReadedMessages()
  }

  openCamera() {
    this.camera.getPicture({
      quality: 100,
      // targetWidth: this.platform.width(),
      // targetHeight: this.platform.height(),
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      correctOrientation: true,
      sourceType: this.camera.PictureSourceType.CAMERA
    }).then((imageData) => {
      console.log(imageData);

      this.image = 'data:image/jpeg;base64,' + imageData;
    });
  }

  gotoMessages() {
    this.navCtrl.push('MessagesPage')
  }

  gotoSearch() {
    this.modalCtrl.create('SearchPage').present()
  }


  unread(chat: any) {
    let res: any[] = [];
    if (chat.messages)
      res = chat.messages.filter(item => {
        if (item.unread && item.userId !== this.account.uid)
          return item;
      });

    return res.length > 0;

  }


  getAllUnReadedMessages() {
    this.chatProvider.getChats().subscribe((data) => {
      let chats = [];
      let unReadUsers = []
      data.map(a => {
        const data = a.payload.doc.data();
        const uid = a.payload.doc.id;
        chats.push({ uid, ...data });
      });
      console.log('Chats', chats);
      for (var i = 0; i < chats.length; i++) {
        if (this.unread(chats[i]))
          if (unReadUsers.indexOf(chats[i].uid) === -1) {
            unReadUsers.push(chats[i].uid)
          }
      }
      this.totalUnreadChats = unReadUsers.length
      console.log('total unreaed ========>>>>>>>>>>>', this.totalUnreadChats)
    })
  }


}
