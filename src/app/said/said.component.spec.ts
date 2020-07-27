import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaidComponent } from './said.component';

describe('SaidComponent', () => {
  let component: SaidComponent;
  let fixture: ComponentFixture<SaidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
