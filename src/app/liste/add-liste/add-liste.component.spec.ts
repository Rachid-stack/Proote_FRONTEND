import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddListeComponent } from './add-liste.component';

describe('AddListeComponent', () => {
  let component: AddListeComponent;
  let fixture: ComponentFixture<AddListeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddListeComponent]
    });
    fixture = TestBed.createComponent(AddListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
