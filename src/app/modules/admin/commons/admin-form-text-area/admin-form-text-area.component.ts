import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-admin-form-text-area',
  templateUrl: './admin-form-text-area.component.html',
  styleUrls: ['./admin-form-text-area.component.css']
})
export class AdminFormTextAreaComponent implements OnInit {
  @Input() rows: number = 3;
  @Input() inputId: string;
  @Input() control: FormControl = new FormControl();
  @Input() label: string;
  @Input() errorMessage: Record<string, string>;
  @Input() showError: boolean = false;
  @Input() placeholder: string = "";
  @Output() change = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  runChange() {
    if (this.change === null) {
      return;
    }

    this.change.emit();
  }
  displayErrors() {

    if (this.showError) {
      return true;
    }

    const { touched, errors } = this.control;

    return touched && errors;
  }

  onInputUpperCaseChange(event: Event, control: FormControl): void {
    const inputElement = event.target as HTMLInputElement;
    const upperCaseValue = inputElement.value.toUpperCase();
    control.setValue(upperCaseValue); // FormControl'u güncelle
  }

  onInputNationalityIdChange(event: Event, control: FormControl): void {
    const inputElement = event.target as HTMLInputElement;
    const numericValue = inputElement.value.replace(/[^0-9]/g, '');

    // İlk 11 karakteri alın
    const trimmedValue = numericValue.substring(0, 11);
    control.setValue(trimmedValue); // FormControl'u güncelle
  }

}
