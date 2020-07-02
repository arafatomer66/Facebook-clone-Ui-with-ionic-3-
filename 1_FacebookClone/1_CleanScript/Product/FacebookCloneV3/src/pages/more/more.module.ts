import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MorePage } from './more';
import { ComponentsModule } from '../../components/components.module';
import { ScrollingHeaderModule } from 'ionic-scrolling-header';

@NgModule({
	declarations: [
		MorePage,
	],
	imports: [
		IonicPageModule.forChild(MorePage),
		ComponentsModule,
		ScrollingHeaderModule
	],
})
export class MorePageModule { }
