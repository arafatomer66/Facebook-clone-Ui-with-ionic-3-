import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostOnPage } from './post-on.page';

const routes: Routes = [
  {
    path: '',
    component: PostOnPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostOnPageRoutingModule {}
