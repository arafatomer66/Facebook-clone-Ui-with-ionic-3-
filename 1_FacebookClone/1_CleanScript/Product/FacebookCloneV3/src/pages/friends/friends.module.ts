import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FriendsPage } from './friends';
import { ComponentsModule } from '../../components/components.module';
import { ScrollingHeaderModule } from 'ionic-scrolling-header';

@NgModule({
	declarations: [
		FriendsPage,
	],
	imports: [
		IonicPageModule.forChild(FriendsPage),
		ComponentsModule,
		ScrollingHeaderModule
	]
})
export class FriendsPageModule { }
