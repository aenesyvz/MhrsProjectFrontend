import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-default-view-input',
  templateUrl: './default-view-input.component.html',
  styleUrls: ['./default-view-input.component.css']
})
export class DefaultViewInputComponent implements OnInit {
  @Input() type: string = "text";
  @Input() inputId: string;
  @Input() control: FormControl = new FormControl();
  @Input() label: string;
  @Input() errorMessage: Record<string, string>;
  @Input() showError: boolean = false;
  @Input() icon: string;
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
