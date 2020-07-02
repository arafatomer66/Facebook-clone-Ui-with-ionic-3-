import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostReactionsPage } from './post-reactions.page';

const routes: Routes = [
  {
    path: '',
    component: PostReactionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostReactionsPageRoutingModule {}
