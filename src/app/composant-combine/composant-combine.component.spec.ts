import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposantCombineComponent } from './composant-combine.component';

describe('ComposantCombineComponent', () => {
  let component: ComposantCombineComponent;
  let fixture: ComponentFixture<ComposantCombineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComposantCombineComponent]
    });
    fixture = TestBed.createComponent(ComposantCombineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
