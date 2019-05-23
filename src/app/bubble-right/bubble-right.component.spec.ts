import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BubbleRightComponent } from './bubble-right.component';

describe('BubbleRightComponent', () => {
  let component: BubbleRightComponent;
  let fixture: ComponentFixture<BubbleRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BubbleRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BubbleRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
