import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandableWidgetComponent } from './expandable-widget.component';

describe('ExpandableWidgetComponent', () => {
  let component: ExpandableWidgetComponent;
  let fixture: ComponentFixture<ExpandableWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpandableWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpandableWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
