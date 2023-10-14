import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFormTextAreaComponent } from './admin-form-text-area.component';

describe('AdminFormTextAreaComponent', () => {
  let component: AdminFormTextAreaComponent;
  let fixture: ComponentFixture<AdminFormTextAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminFormTextAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminFormTextAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
