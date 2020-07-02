import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileAddDetailsPage } from './profile-add-details.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileAddDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileAddDetailsPageRoutingModule {}
