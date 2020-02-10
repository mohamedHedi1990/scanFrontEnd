import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceTargetReportComponent } from './interface-target-report.component';

describe('InterfaceTargetReportComponent', () => {
  let component: InterfaceTargetReportComponent;
  let fixture: ComponentFixture<InterfaceTargetReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterfaceTargetReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfaceTargetReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
