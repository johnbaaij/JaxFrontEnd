import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BubbleLeftComponent } from './bubble-left.component';

describe('BubbleLeftComponent', () => {
  let component: BubbleLeftComponent;
  let fixture: ComponentFixture<BubbleLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BubbleLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BubbleLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
