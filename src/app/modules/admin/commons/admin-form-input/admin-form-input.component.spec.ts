import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFormInputComponent } from './admin-form-input.component';

describe('AdminFormInputComponent', () => {
  let component: AdminFormInputComponent;
  let fixture: ComponentFixture<AdminFormInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminFormInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminFormInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
