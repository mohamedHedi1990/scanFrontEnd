import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceListGlobalReportsComponent } from './interface-list-global-reports.component';

describe('InterfaceListGlobalReportsComponent', () => {
  let component: InterfaceListGlobalReportsComponent;
  let fixture: ComponentFixture<InterfaceListGlobalReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterfaceListGlobalReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfaceListGlobalReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
