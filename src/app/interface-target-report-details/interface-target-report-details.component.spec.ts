import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceTargetReportDetailsComponent } from './interface-target-report-details.component';

describe('InterfaceTargetReportDetailsComponent', () => {
  let component: InterfaceTargetReportDetailsComponent;
  let fixture: ComponentFixture<InterfaceTargetReportDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterfaceTargetReportDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfaceTargetReportDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
