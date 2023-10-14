import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-and-update-modal',
  templateUrl: './add-and-update-modal.component.html',
  styleUrls: ['./add-and-update-modal.component.css']
})
export class AddAndUpdateModalComponent implements OnInit {
  @Output() modalClosed = new EventEmitter<void>();
  @Output() operation = new EventEmitter<void>();
  @Input() title: string;
  @Input() buttonText: string;

  constructor() { }

  ngOnInit(): void {
  }

  runOperation() {
    this.operation.emit();
  }

  closeModal() {
    this.modalClosed.emit();
  }

}
