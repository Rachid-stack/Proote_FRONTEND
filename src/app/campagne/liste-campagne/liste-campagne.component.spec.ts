import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCampagneComponent } from './liste-campagne.component';

describe('ListeCampagneComponent', () => {
  let component: ListeCampagneComponent;
  let fixture: ComponentFixture<ListeCampagneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeCampagneComponent]
    });
    fixture = TestBed.createComponent(ListeCampagneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
