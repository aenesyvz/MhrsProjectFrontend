import { Component, Input, OnInit } from '@angular/core';
import { FormValidationError } from 'src/app/core/utilities/formValidationError';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css']
})
export class FormInputComponent implements OnInit {
  @Input() label: string;
  @Input() formControlName: any;
  @Input() formValidationError: FormValidationError[];
  @Input() ngModel: any;

  constructor() { }


  ngOnInit(): void {
  }

}
