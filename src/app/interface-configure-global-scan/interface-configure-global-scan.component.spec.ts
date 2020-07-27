import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceConfigureGlobalScanComponent } from './interface-configure-global-scan.component';

describe('InterfaceConfigureGlobalScanComponent', () => {
  let component: InterfaceConfigureGlobalScanComponent;
  let fixture: ComponentFixture<InterfaceConfigureGlobalScanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterfaceConfigureGlobalScanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfaceConfigureGlobalScanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
