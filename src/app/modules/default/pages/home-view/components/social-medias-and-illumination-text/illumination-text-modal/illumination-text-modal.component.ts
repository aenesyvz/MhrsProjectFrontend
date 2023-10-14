import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-illumination-text-modal',
  templateUrl: './illumination-text-modal.component.html',
  styleUrls: ['./illumination-text-modal.component.css']
})
export class IlluminationTextModalComponent implements OnInit {
  @Output() closeModal = new EventEmitter<void>();

  title: string = "T.C. SAĞLIK BAKANLIĞI MHRS AYDINLATMA METNİ";
  constructor() { }



  modalClose() {
    this.closeModal.emit();
  }
  ngOnInit(): void {

  }


  onModalClick(event: Event) {
    // Modalın içine tıklanınca modalın kapanmasını engelle
    event.stopPropagation();
  }
}
