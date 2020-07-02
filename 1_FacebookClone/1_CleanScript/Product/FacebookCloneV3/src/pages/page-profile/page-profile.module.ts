import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PageProfilePage } from './page-profile';
import { ComponentsModule } from "../../components/components.module";
@NgModule({
  declarations: [
    PageProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(PageProfilePage),
    ComponentsModule
  ],
})
export class PageProfilePageModule { }
