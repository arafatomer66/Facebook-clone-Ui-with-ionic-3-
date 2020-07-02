import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PostOnPage } from './post-on.page';

describe('PostOnPage', () => {
  let component: PostOnPage;
  let fixture: ComponentFixture<PostOnPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostOnPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PostOnPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
