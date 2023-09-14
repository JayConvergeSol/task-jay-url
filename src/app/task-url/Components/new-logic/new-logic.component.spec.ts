import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLogicComponent } from './new-logic.component';

describe('NewLogicComponent', () => {
  let component: NewLogicComponent;
  let fixture: ComponentFixture<NewLogicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewLogicComponent]
    });
    fixture = TestBed.createComponent(NewLogicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
