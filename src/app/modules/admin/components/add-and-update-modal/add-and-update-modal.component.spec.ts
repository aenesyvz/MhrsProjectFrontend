import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAndUpdateModalComponent } from './add-and-update-modal.component';

describe('AddAndUpdateModalComponent', () => {
  let component: AddAndUpdateModalComponent;
  let fixture: ComponentFixture<AddAndUpdateModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAndUpdateModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAndUpdateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
