import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewConditionComponent } from './new-condition.component';

describe('NewConditionComponent', () => {
  let component: NewConditionComponent;
  let fixture: ComponentFixture<NewConditionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewConditionComponent]
    });
    fixture = TestBed.createComponent(NewConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
