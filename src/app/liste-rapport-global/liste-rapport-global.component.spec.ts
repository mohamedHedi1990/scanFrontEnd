import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeRapportGlobalComponent } from './liste-rapport-global.component';

describe('ListeRapportGlobalComponent', () => {
  let component: ListeRapportGlobalComponent;
  let fixture: ComponentFixture<ListeRapportGlobalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeRapportGlobalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeRapportGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
