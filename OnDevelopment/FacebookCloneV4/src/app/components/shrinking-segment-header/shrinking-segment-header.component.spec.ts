import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShrinkingSegmentHeaderComponent } from './shrinking-segment-header.component';

describe('ShrinkingSegmentHeaderComponent', () => {
  let component: ShrinkingSegmentHeaderComponent;
  let fixture: ComponentFixture<ShrinkingSegmentHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShrinkingSegmentHeaderComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShrinkingSegmentHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
