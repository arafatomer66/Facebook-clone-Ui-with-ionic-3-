import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VeerifyAccountPageRoutingModule } from './veerify-account-routing.module';

import { VeerifyAccountPage } from './veerify-account.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VeerifyAccountPageRoutingModule
  ],
  declarations: [VeerifyAccountPage]
})
export class VeerifyAccountPageModule {}
