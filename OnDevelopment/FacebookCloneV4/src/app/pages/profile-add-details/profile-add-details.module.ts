import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileAddDetailsPageRoutingModule } from './profile-add-details-routing.module';

import { ProfileAddDetailsPage } from './profile-add-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileAddDetailsPageRoutingModule
  ],
  declarations: [ProfileAddDetailsPage]
})
export class ProfileAddDetailsPageModule {}
