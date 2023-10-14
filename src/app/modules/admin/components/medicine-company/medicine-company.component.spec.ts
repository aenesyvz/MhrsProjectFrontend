import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicineCompanyComponent } from './medicine-company.component';

describe('MedicineCompanyComponent', () => {
  let component: MedicineCompanyComponent;
  let fixture: ComponentFixture<MedicineCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicineCompanyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicineCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
