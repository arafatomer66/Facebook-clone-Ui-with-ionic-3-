import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfileAddDetailsPage } from './profile-add-details';

@NgModule({
  declarations: [
    ProfileAddDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfileAddDetailsPage),
  ],
})
export class ProfileAddDetailsPageModule {}
