import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLogicComponent } from './edit-logic.component';

describe('EditLogicComponent', () => {
  let component: EditLogicComponent;
  let fixture: ComponentFixture<EditLogicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditLogicComponent]
    });
    fixture = TestBed.createComponent(EditLogicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
