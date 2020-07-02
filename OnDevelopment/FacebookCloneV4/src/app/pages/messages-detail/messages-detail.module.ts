import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MessagesDetailPageRoutingModule } from './messages-detail-routing.module';

import { MessagesDetailPage } from './messages-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MessagesDetailPageRoutingModule
  ],
  declarations: [MessagesDetailPage]
})
export class MessagesDetailPageModule {}
