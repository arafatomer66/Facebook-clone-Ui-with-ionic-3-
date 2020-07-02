import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { Account } from '../../models/account';
import { ImageProvider } from '../image/image';
import { Page } from "../../models/page";
import { LoadingProvider } from "../../providers/loading/loading";
import { Post } from "../../models/post";
import { Notification } from "../../models/notification";
import { AlertController } from "ionic-angular";
/*
  Generated class for the PageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PageProvider {
  page: Observable<Page>

  constructor(
    private afs: AngularFirestore,
    private afa: AngularFireAuth,
    private imageProvider: ImageProvider,
    public loading: LoadingProvider,
    private alertCtrl: AlertController
  ) {
    console.log('Hello PageProvider Provider');
  }

  getPages() {
    return this.afs.collection('pages').snapshotChanges()
  }

  async createPage(owner: Account, pageObject) {
    if (pageObject.photoURL) {
      var photoURL: any = await this.imageProvider.uploadProfilePhoto(owner.uid, pageObject.photoURL)
        .catch(err => console.log(err));
    }
    if (pageObject.coverPhotoURL) {
      var coverPhotoURL: any = await this.imageProvider.uploadProfilePhoto(owner.uid, pageObject.photoURL)
        .catch(err => console.log(err));
    }
    const page: Page = {
      pageName: pageObject.pageName,
      description: pageObject.description,
      photoURL: photoURL ? photoURL : null,
      coverPhotoURL: coverPhotoURL ? coverPhotoURL : null,
      ownerId: owner.uid,
      ownerName: owner.name,
      OwnerEmail: owner.email,
      website: pageObject.website
    }
    return this.afs.collection('pages').add(page)
  }


  async likeAndFollowPage(pageId, userDetail) {
    var user: Account = userDetail
    let page: any;
    page = await new Promise((resolve) => {
      this.afs.doc('pages/' + pageId).valueChanges()
        .subscribe((page: Page) => {
          var likes: Array<any> = [];
          var followers: Array<any> = [];
          // Adding Likes
          if (page.likes) {
            likes = page.likes;
            let data = {
              user: user.uid,
              type: 'like',
              name: user.name,
              photoURL: user.photoURL
            }
            likes.push(data)
          }
          else {
            let data = {
              user: user.uid,
              type: 'like',
              name: user.name,
              photoURL: user.photoURL
            }
            likes.push(data)
          }
          page.likes = likes
          // Adding Followers
          if (page.followers) {
            followers = page.followers
            let follower = {
              user: user.uid,
              name: user.name,
              photoURL: user.photoURL
            }
            followers.push(follower)
          }
          else {
            let follower = {
              user: user.uid,
              name: user.name,
              photoURL: user.photoURL
            }
            followers.push(follower)
          }
          page.followers = followers
          resolve(page);
        })
    });

    await this.afs.doc('pages/' + pageId).update(page);
    // this.createNotification(postId, 'liked');

  }

  async dislikeAndunFollowPage(pageId, userDetail) {
    var user: Account = userDetail
    let page: any;
    page = await new Promise((resolve) => {
      this.afs.doc('pages/' + pageId).valueChanges()
        .subscribe((page: Page) => {
          // Removing Like
          var likes: Array<any> = page.likes;
          likes = likes.filter((item) => {
            return item.user !== userDetail.uid
          })
          page.likes = likes
          // Removing Followers
          var followers: Array<any> = page.followers
          followers = followers.filter((item) => {
            return item.user !== userDetail.uid
          })
          page.followers = followers
          resolve(page);
        })
    });

    await this.afs.doc('pages/' + pageId).update(page);
    // this.createNotification(postId, 'liked');

  }


  async updatePage(obj: Page, pageId) {
    const currentUser = this.afa.auth.currentUser.uid;
    try {
      if (obj.photoURL)
        obj.photoURL = <string>await this.imageProvider.uploadProfilePhoto(currentUser, obj.photoURL);

      if (obj.coverPhotoURL)
        obj.coverPhotoURL = <string>await this.imageProvider.uploadProfilePhoto(currentUser, obj.coverPhotoURL);
    } catch (e) {
      console.log(e);
    }

    return this.afs.doc('pages/' + pageId).update({ ...obj })
      .catch(err => console.log(err));
  }


  getAllPagesPost() {
    return this.afs.collection('pagesPosts', ref => ref.orderBy('createdAt', 'desc')/*.limit(this.limit)*/).snapshotChanges();
  }

  postOnPage(obj: Post) {
    return new Promise((resolve) => {
      const userId = this.afa.auth.currentUser.uid;
      obj.postBy = userId;
      console.log('post', obj);
      this.afs.doc('accounts/' + userId).valueChanges()
        .subscribe(async (user: any) => {
          console.log('post', user);

          obj.user = user.name;
          obj.username = user.username;
          if (user.photoURL)
            obj.userPhoto = user.photoURL;

          if (obj.photoURL && !obj.photoURL.includes('http')) {
            const photoURL: any = await this.imageProvider.uploadPostPhoto(userId, obj.photoURL);
            obj.photoURL = photoURL;
          }

          if (obj.videoURL && !obj.videoURL.includes('http')) {
            const videoURL: any = await this.imageProvider.uploadPostVideo(userId, obj.videoURL);
            obj.videoURL = videoURL;
          }

          this.afs.collection('pagesPosts').add(obj)
            .then(res => resolve(res))
            .catch(err => console.log(err));
          console.log("share", obj.postId);

          await this.afs.doc('pagesPosts/' + obj.postId).valueChanges()
            .subscribe((res: any) => {
              if (res) {
                let shares: any = res.shares;
                shares = { [userId]: true, ...shares };
                this.afs.doc('pagesPosts/' + obj.postId).update({ shares: shares });
              }
            })
        });
    });
  }

  updatePagePost(obj: Post) {
    const userId = this.afa.auth.currentUser.uid;
    obj.postBy = userId;
    console.log('post', obj);
    this.afs.doc('accounts/' + userId).valueChanges()
      .subscribe(async (user: any) => {
        console.log('post', user);

        obj.user = user.name;
        obj.username = user.username;
        if (user.photoURL)
          obj.userPhoto = user.photoURL;

        if (obj.photoURL && !obj.photoURL.includes('http')) {
          const photoURL: any = await this.imageProvider.uploadPostPhoto(userId, obj.photoURL);
          obj.photoURL = photoURL;
        }

        if (obj.videoURL && !obj.videoURL.includes('http')) {
          const videoURL: any = await this.imageProvider.uploadPostVideo(userId, obj.videoURL);
          obj.videoURL = videoURL;
        }
        this.afs.doc('pagesPosts/' + obj.postId).update(obj);
      });
  }

  async likePost(postId, type, userDetail) {
    var user: Account = userDetail
    let likes: any;
    likes = await new Promise((resolve) => {
      this.afs.doc('pagesPosts/' + postId).valueChanges()
        .subscribe((post: any) => {
          var likes: Array<any> = [];
          if (post.likes) {
            likes = post.likes;
            let data = {
              user: user.uid,
              type: type,
              name: user.name,
              photoURL: user.photoURL
            }
            likes.push(data)
          }
          else {
            let data = {
              user: user.uid,
              type: type,
              name: user.name,
              photoURL: user.photoURL
            }
            likes.push(data)
          }
          resolve(likes);
        })
    });

    await this.afs.doc('posts/' + postId).update({ "likes": likes });
    this.createNotification(postId, 'liked');

  }

  async dislikePost(postId) {
    const user = this.afa.auth.currentUser;
    let likes: any;
    likes = await new Promise((resolve) => {
      this.afs.doc('pagesPosts/' + postId).valueChanges()
        .subscribe((post: any) => {
          let likes = post.likes;
          likes = likes.filter((item) => {
            return item.user !== user.uid
          })
          resolve(likes);
        })
    });

    this.afs.doc('posts/' + postId).update({ "likes": likes });
  }

  async commentPost(postId, obj) {
    const userId = this.afa.auth.currentUser.uid;
    let comments: any;
    comments = await new Promise((resolve) => {
      this.afs.doc('posts/' + postId).valueChanges()
        .subscribe((post: any) => {
          let comments: any;
          if (post)
            comments = post.comments;
          const comment = {
            user: obj.user,
            photoURL: obj.photoURL ? obj.photoURL : null,
            createdAt: obj.createdAt,
            commentBy: obj.commentBy,
            text: obj.text
          };
          if (comments) {
            comments.push(comment);
          } else {
            comments = [comment];
          }
          resolve(comments);
        })
    });

    await this.afs.doc('posts/' + postId).update({ comments: comments });
    this.createNotification(postId, 'commented');
  }

  //Notifications
  async createNotification(postId, event) {
    const currentUser = this.afa.auth.currentUser.uid;
    let post: any = await new Promise((resolve) => {
      this.afs.doc('posts/' + postId).valueChanges()
        .subscribe(post => resolve(post));
    });

    let user: any = await new Promise((resolve) => {
      this.afs.doc('accounts/' + currentUser).valueChanges()
        .subscribe(user => resolve(user));
    });

    const notification: Notification = {
      event: event,
      userId: currentUser,
      user: user.name,
      userPhoto: user.photoURL,
      owner: post.user,
      postId: postId,
      createdAt: new Date(),
      text: post.text
    }

    await this.afs.collection('notifications').add(notification)
      .catch(err => console.log(err));

  }
  getPageDetail(uid) {
    return this.afs.doc('pages/' + uid).valueChanges()
  }
  deletePage(postId) {
    return this.afs.collection('pages').doc(postId).delete()
      .catch(err => console.log(err));
  }

  getPagePosts(pageId) {
    return this.afs.collection('posts', ref => ref.where('postBy', '==', pageId).orderBy('createdAt', 'desc')).snapshotChanges();
  }

  getPageByName(name) {
    return this.afs.collection('pages', ref => ref.where('pageName', '==', name).orderBy('createdAt', 'desc')).snapshotChanges();
  }




}
