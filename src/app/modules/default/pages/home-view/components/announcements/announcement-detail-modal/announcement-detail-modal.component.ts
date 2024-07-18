import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Announcement } from 'src/app/models/DTOs/announcementDtos';

@Component({
  selector: 'app-announcement-detail-modal',
  templateUrl: './announcement-detail-modal.component.html',
  styleUrls: ['./announcement-detail-modal.component.css']
})
export class AnnouncementDetailModalComponent implements OnInit {

  @Input() selectAnnouncement: Announcement | null;
  @Output() closeModal = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  closeAnnouncementDetailModal() {
    this.closeModal.emit();
  }

}
