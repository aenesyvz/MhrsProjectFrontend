import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-generic-modal',
  templateUrl: './generic-modal.component.html',
  styleUrls: ['./generic-modal.component.css']
})
export class GenericModalComponent implements OnInit {
  @Output() closeModal = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

  close() {
    this.closeModal.emit();
  }

}
