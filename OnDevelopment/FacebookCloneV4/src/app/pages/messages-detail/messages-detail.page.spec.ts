import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MessagesDetailPage } from './messages-detail.page';

describe('MessagesDetailPage', () => {
  let component: MessagesDetailPage;
  let fixture: ComponentFixture<MessagesDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagesDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MessagesDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
