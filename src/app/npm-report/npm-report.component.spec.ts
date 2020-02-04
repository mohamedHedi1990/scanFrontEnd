import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpmReportComponent } from './npm-report.component';

describe('NpmReportComponent', () => {
  let component: NpmReportComponent;
  let fixture: ComponentFixture<NpmReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpmReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpmReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
