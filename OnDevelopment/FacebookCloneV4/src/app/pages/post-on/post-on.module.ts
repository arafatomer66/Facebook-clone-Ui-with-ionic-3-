import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostOnPageRoutingModule } from './post-on-routing.module';

import { PostOnPage } from './post-on.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostOnPageRoutingModule
  ],
  declarations: [PostOnPage]
})
export class PostOnPageModule {}
