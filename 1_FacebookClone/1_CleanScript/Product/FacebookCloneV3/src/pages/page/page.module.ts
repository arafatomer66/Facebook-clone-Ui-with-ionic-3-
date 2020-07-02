import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PagesList } from "./page";
import { ComponentsModule } from "../../components/components.module";
@NgModule({
  declarations: [
    PagesList
  ],
  imports: [
    IonicPageModule.forChild(PagesList),
    ComponentsModule
  ],
})
export class PageModule { }
