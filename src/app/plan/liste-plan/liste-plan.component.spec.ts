import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePlanComponent } from './liste-plan.component';

describe('ListePlanComponent', () => {
  let component: ListePlanComponent;
  let fixture: ComponentFixture<ListePlanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListePlanComponent]
    });
    fixture = TestBed.createComponent(ListePlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
