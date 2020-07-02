import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PostReactionsPage } from './post-reactions.page';

describe('PostReactionsPage', () => {
  let component: PostReactionsPage;
  let fixture: ComponentFixture<PostReactionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostReactionsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PostReactionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
