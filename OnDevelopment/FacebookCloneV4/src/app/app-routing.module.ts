import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'add-page-details',
    loadChildren: () => import('./pages/add-page-details/add-page-details.module').then( m => m.AddPageDetailsPageModule)
  },
  {
    path: 'add-post',
    loadChildren: () => import('./pages/add-post/add-post.module').then( m => m.AddPostPageModule)
  },
  {
    path: 'comments',
    loadChildren: () => import('./pages/comments/comments.module').then( m => m.CommentsPageModule)
  },
  {
    path: 'friends',
    loadChildren: () => import('./pages/friends/friends.module').then( m => m.FriendsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'market-place',
    loadChildren: () => import('./pages/market-place/market-place.module').then( m => m.MarketPlacePageModule)
  },
  {
    path: 'messages',
    loadChildren: () => import('./pages/messages/messages.module').then( m => m.MessagesPageModule)
  },
  {
    path: 'messages-detail',
    loadChildren: () => import('./pages/messages-detail/messages-detail.module').then( m => m.MessagesDetailPageModule)
  },
  {
    path: 'more',
    loadChildren: () => import('./pages/more/more.module').then( m => m.MorePageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./pages/notifications/notifications.module').then( m => m.NotificationsPageModule)
  },
  {
    path: 'page',
    loadChildren: () => import('./pages/page/page.module').then( m => m.PagePageModule)
  },
  {
    path: 'page-form',
    loadChildren: () => import('./pages/page-form/page-form.module').then( m => m.PageFormPageModule)
  },
  {
    path: 'page-profile',
    loadChildren: () => import('./pages/page-profile/page-profile.module').then( m => m.PageProfilePageModule)
  },
  {
    path: 'post-on',
    loadChildren: () => import('./pages/post-on/post-on.module').then( m => m.PostOnPageModule)
  },
  {
    path: 'post-reactions',
    loadChildren: () => import('./pages/post-reactions/post-reactions.module').then( m => m.PostReactionsPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'profile-add-details',
    loadChildren: () => import('./pages/profile-add-details/profile-add-details.module').then( m => m.ProfileAddDetailsPageModule)
  },
  {
    path: 'reactions-popover',
    loadChildren: () => import('./pages/reactions-popover/reactions-popover.module').then( m => m.ReactionsPopoverPageModule)
  },
  {
    path: 'recover-account',
    loadChildren: () => import('./pages/recover-account/recover-account.module').then( m => m.RecoverAccountPageModule)
  },
  {
    path: 'replies',
    loadChildren: () => import('./pages/replies/replies.module').then( m => m.RepliesPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./pages/search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'search-user',
    loadChildren: () => import('./pages/search-user/search-user.module').then( m => m.SearchUserPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'veerify-account',
    loadChildren: () => import('./pages/veerify-account/veerify-account.module').then( m => m.VeerifyAccountPageModule)
  },
  {
    path: 'verify-account',
    loadChildren: () => import('./pages/verify-account/verify-account.module').then( m => m.VerifyAccountPageModule)
  },
  {
    path: 'view-post',
    loadChildren: () => import('./pages/view-post/view-post.module').then( m => m.ViewPostPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
