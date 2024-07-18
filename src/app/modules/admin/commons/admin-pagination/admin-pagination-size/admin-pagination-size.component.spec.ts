import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPaginationSizeComponent } from './admin-pagination-size.component';

describe('AdminPaginationSizeComponent', () => {
  let component: AdminPaginationSizeComponent;
  let fixture: ComponentFixture<AdminPaginationSizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPaginationSizeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPaginationSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
