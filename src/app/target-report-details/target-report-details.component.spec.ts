import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetReportDetailsComponent } from './target-report-details.component';

describe('TargetReportDetailsComponent', () => {
  let component: TargetReportDetailsComponent;
  let fixture: ComponentFixture<TargetReportDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TargetReportDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TargetReportDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
