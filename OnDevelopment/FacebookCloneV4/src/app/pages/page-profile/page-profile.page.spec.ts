import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PageProfilePage } from './page-profile.page';

describe('PageProfilePage', () => {
  let component: PageProfilePage;
  let fixture: ComponentFixture<PageProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageProfilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PageProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
