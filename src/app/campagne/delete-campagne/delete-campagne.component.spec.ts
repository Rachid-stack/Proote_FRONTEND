import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCampagneComponent } from './delete-campagne.component';

describe('DeleteCampagneComponent', () => {
  let component: DeleteCampagneComponent;
  let fixture: ComponentFixture<DeleteCampagneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteCampagneComponent]
    });
    fixture = TestBed.createComponent(DeleteCampagneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
