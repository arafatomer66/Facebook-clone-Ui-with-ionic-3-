import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PageFormPage } from './page-form.page';

describe('PageFormPage', () => {
  let component: PageFormPage;
  let fixture: ComponentFixture<PageFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PageFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
