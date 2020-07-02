import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageFormPageRoutingModule } from './page-form-routing.module';

import { PageFormPage } from './page-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageFormPageRoutingModule
  ],
  declarations: [PageFormPage]
})
export class PageFormPageModule {}
