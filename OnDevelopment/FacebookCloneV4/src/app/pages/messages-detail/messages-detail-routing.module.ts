import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MessagesDetailPage } from './messages-detail.page';

const routes: Routes = [
  {
    path: '',
    component: MessagesDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MessagesDetailPageRoutingModule {}
