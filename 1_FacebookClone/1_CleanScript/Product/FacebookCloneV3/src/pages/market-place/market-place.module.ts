import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MarketPlacePage } from './market-place';

@NgModule({
  declarations: [
    MarketPlacePage,
  ],
  imports: [
    IonicPageModule.forChild(MarketPlacePage),
  ],
})
export class MarketPlacePageModule {}
