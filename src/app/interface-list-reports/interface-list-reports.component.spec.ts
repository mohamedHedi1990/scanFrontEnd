import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceListReportsComponent } from './interface-list-reports.component';

describe('InterfaceListReportsComponent', () => {
  let component: InterfaceListReportsComponent;
  let fixture: ComponentFixture<InterfaceListReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterfaceListReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfaceListReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
