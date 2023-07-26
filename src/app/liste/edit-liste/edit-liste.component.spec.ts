import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditListeComponent } from './edit-liste.component';

describe('EditListeComponent', () => {
  let component: EditListeComponent;
  let fixture: ComponentFixture<EditListeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditListeComponent]
    });
    fixture = TestBed.createComponent(EditListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
