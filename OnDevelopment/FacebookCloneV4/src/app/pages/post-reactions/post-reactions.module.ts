import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostReactionsPageRoutingModule } from './post-reactions-routing.module';

import { PostReactionsPage } from './post-reactions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostReactionsPageRoutingModule
  ],
  declarations: [PostReactionsPage]
})
export class PostReactionsPageModule {}
