import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddPageDetailsPage } from './add-page-details.page';

const routes: Routes = [
  {
    path: '',
    component: AddPageDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddPageDetailsPageRoutingModule {}
