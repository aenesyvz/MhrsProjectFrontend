import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediasAndIlluminationTextComponent } from './social-medias-and-illumination-text.component';

describe('SocialMediasAndIlluminationTextComponent', () => {
  let component: SocialMediasAndIlluminationTextComponent;
  let fixture: ComponentFixture<SocialMediasAndIlluminationTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialMediasAndIlluminationTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialMediasAndIlluminationTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
