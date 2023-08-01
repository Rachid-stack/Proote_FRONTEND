import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMoreInfoComponent } from './user-more-info.component';

describe('UserMoreInfoComponent', () => {
  let component: UserMoreInfoComponent;
  let fixture: ComponentFixture<UserMoreInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserMoreInfoComponent]
    });
    fixture = TestBed.createComponent(UserMoreInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
