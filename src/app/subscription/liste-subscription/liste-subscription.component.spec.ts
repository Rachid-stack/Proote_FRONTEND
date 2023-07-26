import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeSubscriptionComponent } from './liste-subscription.component';

describe('ListeSubscriptionComponent', () => {
  let component: ListeSubscriptionComponent;
  let fixture: ComponentFixture<ListeSubscriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeSubscriptionComponent]
    });
    fixture = TestBed.createComponent(ListeSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
