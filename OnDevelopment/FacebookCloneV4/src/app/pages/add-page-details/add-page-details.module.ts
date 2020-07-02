import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddPageDetailsPageRoutingModule } from './add-page-details-routing.module';

import { AddPageDetailsPage } from './add-page-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddPageDetailsPageRoutingModule
  ],
  declarations: [AddPageDetailsPage]
})
export class AddPageDetailsPageModule {}
