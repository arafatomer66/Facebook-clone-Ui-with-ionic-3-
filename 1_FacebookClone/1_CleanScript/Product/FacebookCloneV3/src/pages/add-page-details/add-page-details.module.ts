import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddPageDetailsPage } from './add-page-details';

@NgModule({
  declarations: [
    AddPageDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(AddPageDetailsPage),
  ],
})
export class AddPageDetailsPageModule {}
