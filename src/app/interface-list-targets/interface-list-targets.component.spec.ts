import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceListTargetsComponent } from './interface-list-targets.component';

describe('InterfaceListTargetsComponent', () => {
  let component: InterfaceListTargetsComponent;
  let fixture: ComponentFixture<InterfaceListTargetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterfaceListTargetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfaceListTargetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
