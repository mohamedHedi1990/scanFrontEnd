import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigureGlobalScanComponent } from './configure-global-scan.component';

describe('ConfigureGlobalScanComponent', () => {
  let component: ConfigureGlobalScanComponent;
  let fixture: ComponentFixture<ConfigureGlobalScanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigureGlobalScanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigureGlobalScanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
