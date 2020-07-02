import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PagePostListComponent } from './page-post-list.component';

describe('PagePostListComponent', () => {
  let component: PagePostListComponent;
  let fixture: ComponentFixture<PagePostListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagePostListComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PagePostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
