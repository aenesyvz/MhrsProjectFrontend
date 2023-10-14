import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MhrsInfoComponent } from './mhrs-info.component';

describe('MhrsInfoComponent', () => {
  let component: MhrsInfoComponent;
  let fixture: ComponentFixture<MhrsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MhrsInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MhrsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
