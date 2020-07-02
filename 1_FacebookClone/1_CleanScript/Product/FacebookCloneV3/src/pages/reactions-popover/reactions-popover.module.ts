import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReactionsPopoverPage } from './reactions-popover';

@NgModule({
  declarations: [
    ReactionsPopoverPage,
  ],
  imports: [
    IonicPageModule.forChild(ReactionsPopoverPage),
  ],
})
export class ReactionsPopoverPageModule {}
