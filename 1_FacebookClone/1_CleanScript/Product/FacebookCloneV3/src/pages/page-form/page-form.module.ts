import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PageFormPage } from './page-form';

@NgModule({
  declarations: [
    PageFormPage,
  ],
  imports: [
    IonicPageModule.forChild(PageFormPage),
  ],
})
export class PageFormPageModule {}
