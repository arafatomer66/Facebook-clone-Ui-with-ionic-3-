import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { ComponentsModule } from '../../components/components.module';
import { ScrollingHeaderModule } from 'ionic-scrolling-header';

@NgModule({
	declarations: [
		HomePage
	],
	imports: [
		IonicPageModule.forChild(HomePage),
		ComponentsModule,
		ScrollingHeaderModule
	],
})
export class HomePageModule { }