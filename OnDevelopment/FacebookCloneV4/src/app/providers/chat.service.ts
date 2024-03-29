import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoadingService } from '../providers/loading.service';
import { Chat } from '../models/chat';
import { Message } from '../models/message';
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
	public totalUnreadedMessages = 0


  constructor(
    private afs: AngularFirestore,
		private afa: AngularFireAuth,
		private loadingProvider: LoadingService
  ) { }

  async openChat(viewCtrl: ModalController, recipient, sender) {
		console.log('Recipient', recipient);
		this.loadingProvider.show();
		let chat: any = await new Promise((resolve) => {
			this.afs.collection('messages', ref => ref
				.where('users.' + recipient.uid, '==', true)
				.where('users.' + sender.uid, '==', true))
				.snapshotChanges().subscribe(res => {
					let chat: any[] = [];
					res.map(a => {
						const data: any = a.payload.doc.data();
						const uid = a.payload.doc.id;
						chat.push({ uid, ...data });
					});
					resolve(chat);
				})
		});
		console.log('Chat', chat);

		if (chat.length > 0) {
			viewCtrl.dismiss();
			this.loadingProvider.hide();
		} else {
			const newChat: Chat = {
				users: {
					[sender.uid]: true,
					[recipient.uid]: true
				},
				recipient: recipient.name,
				recipientPhoto: recipient.photoURL,
				createdBy: sender.uid,
				sender: sender.name,
				senderPhoto: sender.photoURL
			}
			await this.afs.collection('messages').add(newChat);
			viewCtrl.dismiss();
			this.loadingProvider.hide();
		}
	}

	async startChat(recipient, sender) {
		return new Promise(async (resolve) => {
			console.log('Recipient', recipient);
			this.loadingProvider.show();
			let chat: any = await new Promise((resolve) => {
				this.afs.collection('messages', ref => ref
					.where('users.' + recipient.uid, '==', true)
					.where('users.' + sender.uid, '==', true))
					.snapshotChanges().subscribe(res => {
						let chat: any[] = [];
						res.map(a => {
							const data: any = a.payload.doc.data();
							const uid = a.payload.doc.id;
							chat.push({ uid, ...data });
						});
						resolve(chat);
					})
			});
			console.log('Chat', chat);

			if (chat.length > 0) {
				resolve(chat[0])
				this.loadingProvider.hide();
			}
			else {
				const newChat: Chat = {
					users: {
						[sender.uid]: true,
						[recipient.uid]: true
					},
					recipient: recipient.name,
					recipientPhoto: recipient.photoURL,
					createdBy: sender.uid,
					sender: sender.name,
					senderPhoto: sender.photoURL
				}
				this.afs.collection('messages').add(newChat).then((chat) => {
					this.loadingProvider.hide();
					resolve(chat)
				});
			}
		})
	}


	async sendMessage(chatId, text) {
		const currentUser = this.afa.auth.currentUser.uid;
		let messages = await new Promise((resolve) => {
			this.afs.collection('messages').doc(chatId).valueChanges()
				.subscribe((data: any) => {
					let messages: any[] = data.messages;
					let message: Message = {
						createdAt: new Date(),
						userId: currentUser,
						text: text,
						unread: true
					}

					if (messages) {
						messages.push(message);
					} else {
						messages = [message];
					}
					resolve(messages);
				});
		});
		await this.afs.collection('messages').doc(chatId).update({ messages: messages });
	}

	getChat(chatId) {
		return this.afs.collection('messages').doc(chatId).valueChanges();
	}

	async readMessage(chatId) {
		const currentUser = this.afa.auth.currentUser.uid;
		let messages = await new Promise((resolve) => {
			this.afs.collection('messages').doc(chatId).valueChanges()
				.subscribe((data: any) => {
					let messages: any[] = data.messages;

					if (messages) {
						for (let i = 0; i < messages.length; i++) {
							if (messages[i].userId !== currentUser)
								messages[i].unread = false;
						}
					}
					resolve(messages);
				});
		});
		if (messages)
			await this.afs.collection('messages').doc(chatId).update({ messages: messages });
	}

	getChats() {
		const currentUser = this.afa.auth.currentUser.uid;
		return this.afs.collection('messages', ref => ref.where('users.' + currentUser, '==', true)).snapshotChanges()
	}

	isUnread() {
		const currentUser = this.afa.auth.currentUser.uid;
		return this.afs.collection('messages', ref => ref
			.where('users.' + currentUser, '==', true))
			.valueChanges()
			.map((data: any) => {
				let res: any[] = [];
				data.forEach(chat => {
					if (chat.messages)
						chat.messages.forEach(item => {
							if (item.unread && item.userId !== currentUser)
								res.push(item);
						});

				});


				return res;
			});

	}

	getAllUnReadedMessages() {
		this.getChats().subscribe((data) => {
			let chats = [];
			data.map(a => {
				const data: any = a.payload.doc.data();
				const uid = a.payload.doc.id;
				chats.push({ uid, ...data });
			});
			console.log('Chats', chats);
			for (var i = 0; i < chats.length; i++) {
				if (chats[i].messages) {
					for (var j = 0; j < chats[i].messages.length; j++) {
						if (chats[i].messages[j].unread) {
							this.totalUnreadedMessages += 1
						}
					}
				}
			}
			console.log('total unreaed ========>>>>>>>>>>>', this.totalUnreadedMessages)
		})
	}

}
