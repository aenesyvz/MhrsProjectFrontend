import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMedicineCompanyComponent } from './add-medicine-company.component';

describe('AddMedicineCompanyComponent', () => {
  let component: AddMedicineCompanyComponent;
  let fixture: ComponentFixture<AddMedicineCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMedicineCompanyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMedicineCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
