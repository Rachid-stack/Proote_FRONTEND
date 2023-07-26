import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePlanComponent } from './delete-plan.component';

describe('DeletePlanComponent', () => {
  let component: DeletePlanComponent;
  let fixture: ComponentFixture<DeletePlanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeletePlanComponent]
    });
    fixture = TestBed.createComponent(DeletePlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
