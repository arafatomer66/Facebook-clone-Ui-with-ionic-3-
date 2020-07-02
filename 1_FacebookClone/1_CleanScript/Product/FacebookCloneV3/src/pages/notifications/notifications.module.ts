import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NotificationsPage } from './notifications';
import { ComponentsModule } from '../../components/components.module';
import { ScrollingHeaderModule } from 'ionic-scrolling-header';

@NgModule({
	declarations: [
		NotificationsPage,
	],
	imports: [
		IonicPageModule.forChild(NotificationsPage),
		ComponentsModule,
		ScrollingHeaderModule
	],
})
export class NotificationsPageModule { }
