import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteListeComponent } from './delete-liste.component';

describe('DeleteListeComponent', () => {
  let component: DeleteListeComponent;
  let fixture: ComponentFixture<DeleteListeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteListeComponent]
    });
    fixture = TestBed.createComponent(DeleteListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
