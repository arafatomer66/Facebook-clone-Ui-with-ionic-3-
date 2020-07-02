import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReactionsPopoverPage } from './reactions-popover.page';

const routes: Routes = [
  {
    path: '',
    component: ReactionsPopoverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReactionsPopoverPageRoutingModule {}
