import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BubbleWrapperComponent } from './bubble-wrapper.component';

describe('BubbleWrapperComponent', () => {
  let component: BubbleWrapperComponent;
  let fixture: ComponentFixture<BubbleWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BubbleWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BubbleWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
