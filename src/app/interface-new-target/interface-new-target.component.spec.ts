import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceNewTargetComponent } from './interface-new-target.component';

describe('InterfaceNewTargetComponent', () => {
  let component: InterfaceNewTargetComponent;
  let fixture: ComponentFixture<InterfaceNewTargetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterfaceNewTargetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfaceNewTargetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
