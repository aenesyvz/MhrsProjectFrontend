import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css']
})
export class DeleteModalComponent implements OnInit {
  @Input() message: string;
  @Input() buttonText: string;

  @Output() operation = new EventEmitter<void>();
  @Output() modalClosed = new EventEmitter<void>();


  constructor() { }

  ngOnInit(): void {
  }

  runOperation() {
    this.operation.emit();
  }

  closedModal() {
    this.modalClosed.emit();
  }

}
