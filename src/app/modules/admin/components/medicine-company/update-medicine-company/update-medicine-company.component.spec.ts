import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMedicineCompanyComponent } from './update-medicine-company.component';

describe('UpdateMedicineCompanyComponent', () => {
  let component: UpdateMedicineCompanyComponent;
  let fixture: ComponentFixture<UpdateMedicineCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMedicineCompanyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateMedicineCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
