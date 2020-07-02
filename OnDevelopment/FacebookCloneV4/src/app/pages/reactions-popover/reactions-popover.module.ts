import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReactionsPopoverPageRoutingModule } from './reactions-popover-routing.module';

import { ReactionsPopoverPage } from './reactions-popover.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactionsPopoverPageRoutingModule
  ],
  declarations: [ReactionsPopoverPage]
})
export class ReactionsPopoverPageModule {}
