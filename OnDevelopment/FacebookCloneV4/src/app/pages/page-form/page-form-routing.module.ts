import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageFormPage } from './page-form.page';

const routes: Routes = [
  {
    path: '',
    component: PageFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageFormPageRoutingModule {}
