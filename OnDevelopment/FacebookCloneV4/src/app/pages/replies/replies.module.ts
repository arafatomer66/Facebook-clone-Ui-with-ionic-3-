import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RepliesPageRoutingModule } from './replies-routing.module';

import { RepliesPage } from './replies.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RepliesPageRoutingModule
  ],
  declarations: [RepliesPage]
})
export class RepliesPageModule {}
