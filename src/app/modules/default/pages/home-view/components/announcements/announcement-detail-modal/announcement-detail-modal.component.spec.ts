import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnouncementDetailModalComponent } from './announcement-detail-modal.component';

describe('AnnouncementDetailModalComponent', () => {
  let component: AnnouncementDetailModalComponent;
  let fixture: ComponentFixture<AnnouncementDetailModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnouncementDetailModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnouncementDetailModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
