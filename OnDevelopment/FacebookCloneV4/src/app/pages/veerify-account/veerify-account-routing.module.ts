import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VeerifyAccountPage } from './veerify-account.page';

const routes: Routes = [
  {
    path: '',
    component: VeerifyAccountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VeerifyAccountPageRoutingModule {}
