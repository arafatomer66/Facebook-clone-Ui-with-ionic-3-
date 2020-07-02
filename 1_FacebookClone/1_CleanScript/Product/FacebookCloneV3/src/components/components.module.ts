import { NgModule } from '@angular/core';
import { ShrinkingSegmentHeaderComponent } from './shrinking-segment-header/shrinking-segment-header';
import { TimelineComponent } from "./timeline/timeline";
import { UserListComponent } from "./user-list/user-list";
import { IonicModule } from 'ionic-angular';
import { SearchHeaderComponent } from './search-header/search-header';
import { PageListComponent } from "./page-list/page-list";
import { PagePostListComponent } from './page-post-list/page-post-list';
@NgModule({
	declarations: [TimelineComponent, ShrinkingSegmentHeaderComponent, UserListComponent, SearchHeaderComponent, PageListComponent,
    PagePostListComponent],
	imports: [IonicModule],
	exports: [TimelineComponent, ShrinkingSegmentHeaderComponent, UserListComponent, SearchHeaderComponent, PageListComponent,
    PagePostListComponent]
})
export class ComponentsModule { }
