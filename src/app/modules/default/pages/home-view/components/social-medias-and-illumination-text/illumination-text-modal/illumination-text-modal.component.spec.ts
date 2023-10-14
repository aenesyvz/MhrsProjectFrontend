import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IlluminationTextModalComponent } from './illumination-text-modal.component';

describe('IlluminationTextModalComponent', () => {
  let component: IlluminationTextModalComponent;
  let fixture: ComponentFixture<IlluminationTextModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IlluminationTextModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IlluminationTextModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
