import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFilterDropdownComponent } from './admin-filter-dropdown.component';

describe('AdminFilterDropdownComponent', () => {
  let component: AdminFilterDropdownComponent;
  let fixture: ComponentFixture<AdminFilterDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminFilterDropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminFilterDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
