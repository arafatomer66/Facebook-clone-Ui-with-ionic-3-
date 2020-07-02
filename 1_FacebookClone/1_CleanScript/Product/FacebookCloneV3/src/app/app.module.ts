import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

// Pages
import { LoginPage } from "../pages/login/login";
import { SignupPage } from "../pages/signup/signup";
import { VerifyAccountPage } from '../pages/verify-account/verify-account';
import { HomePage } from '../pages/home/home';
import { FriendsPage } from '../pages/friends/friends';
import { MarketPlacePage } from '../pages/market-place/market-place';
import { NotificationsPage } from '../pages/notifications/notifications';
import { MorePage } from '../pages/more/more';
import { TabsPage } from '../pages/tabs/tabs';
import { CommentsPage } from '../pages/comments/comments';
import { ReactionsPopoverPage } from '../pages/reactions-popover/reactions-popover';
import { RecoverAccountPage } from '../pages/recover-account/recover-account';
import { ProfileAddDetailsPage } from "../pages/profile-add-details/profile-add-details";
import { SearchPage } from "../pages/search/search";
import { MessagesPage } from "../pages/messages/messages";
import { SearchUserPage } from "../pages/search-user/search-user";
// Native Modules
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { MediaCapture } from '@ionic-native/media-capture';
import { Base64 } from '@ionic-native/base64';
import { FilePath } from '@ionic-native/file-path';

import { NativeGeocoder } from '@ionic-native/native-geocoder';

//config
import firebaseConfig from './firebaseConfig';

//AngularFire
import { AngularFireModule } from 'angularfire2';
// import { AngularFireModule } from '@angular/fire';
// import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
// import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AccountProvider } from '../providers/account/account';
import { AuthProvider } from '../providers/auth/auth';
import { LoadingProvider } from '../providers/loading/loading';
import { ImageProvider } from '../providers/image/image';

import { CDVPhotoLibraryPipe } from '../util/cdvphotolibrary.pipe';
import { TimelineProvider } from '../providers/timeline/timeline';
import { LocationProvider } from '../providers/location/location';
import { ChatProvider } from '../providers/chat/chat';
import { TabsProvider } from '../providers/tabs/tabs';
import { PageProvider } from '../providers/page/page';


// Import Components
import { ComponentsModule } from '../components/components.module';
import { ViewPostPageModule } from "../pages/view-post/view-post.module";
import { MessagesPageModule } from "../pages/messages/messages.module";
import { SearchPageModule } from "../pages/search/search.module";
import { SearchUserPageModule } from "../pages/search-user/search-user.module";
import { MessagesDetailPageModule } from "../pages/messages-detail/messages-detail.module";
import { PageModule } from "../pages/page/page.module";
import { PageFormPageModule } from "../pages/page-form/page-form.module";
import { ScrollingHeaderModule } from 'ionic-scrolling-header';
import { PageProfilePageModule } from "../pages/page-profile/page-profile.module";
import { PageProfilePage } from '../pages/page-profile/page-profile';
import { Geolocation } from '@ionic-native/geolocation';
@NgModule({
	declarations: [
		MyApp,
		LoginPage,
		SignupPage,
		VerifyAccountPage,
		RecoverAccountPage,
		HomePage,
		FriendsPage,
		MarketPlacePage,
		NotificationsPage,
		MorePage,
		TabsPage,
		CommentsPage,
		ReactionsPopoverPage,
		CDVPhotoLibraryPipe,
		ProfileAddDetailsPage,
	],
	imports: [
		AngularFireModule.initializeApp(firebaseConfig),
		AngularFirestoreModule,
		AngularFireAuthModule,
		BrowserModule,
		ComponentsModule,
		ViewPostPageModule,
		MessagesPageModule,
		SearchPageModule,
		SearchUserPageModule,
		MessagesDetailPageModule,
		PageModule,
		PageFormPageModule,
		ScrollingHeaderModule,
		PageProfilePageModule,
		IonicModule.forRoot(MyApp, {
			tabsHideOnSubPages: true
		}),
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		LoginPage,
		SignupPage,
		VerifyAccountPage,
		RecoverAccountPage,
		HomePage,
		FriendsPage,
		MarketPlacePage,
		NotificationsPage,
		MorePage,
		TabsPage,
		CommentsPage,
		ReactionsPopoverPage,
		ProfileAddDetailsPage,
	],
	providers: [
		StatusBar,
		SplashScreen,
		{ provide: ErrorHandler, useClass: IonicErrorHandler },
		AccountProvider,
		AuthProvider,
		LoadingProvider,
		ImageProvider,
		Camera,
		TimelineProvider,
		LocationProvider,
		ChatProvider,
		TabsProvider,
		InAppBrowser,
		MediaCapture,
		Base64,
		FilePath,
		PageProvider,
		Geolocation,
		NativeGeocoder
	]
})
export class AppModule { }
