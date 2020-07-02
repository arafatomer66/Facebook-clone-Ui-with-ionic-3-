import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VeerifyAccountPage } from './veerify-account.page';

describe('VeerifyAccountPage', () => {
  let component: VeerifyAccountPage;
  let fixture: ComponentFixture<VeerifyAccountPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeerifyAccountPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VeerifyAccountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
