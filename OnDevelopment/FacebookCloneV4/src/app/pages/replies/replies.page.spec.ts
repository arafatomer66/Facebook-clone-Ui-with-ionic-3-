import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RepliesPage } from './replies.page';

describe('RepliesPage', () => {
  let component: RepliesPage;
  let fixture: ComponentFixture<RepliesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepliesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RepliesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
