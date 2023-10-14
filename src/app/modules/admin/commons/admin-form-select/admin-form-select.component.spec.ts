import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFormSelectComponent } from './admin-form-select.component';

describe('AdminFormSelectComponent', () => {
  let component: AdminFormSelectComponent;
  let fixture: ComponentFixture<AdminFormSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminFormSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminFormSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
