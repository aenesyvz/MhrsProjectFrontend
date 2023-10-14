import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SelectTagItemModel } from 'src/app/core/utilities/selectTagItemModel';

@Component({
  selector: 'app-admin-form-select',
  templateUrl: './admin-form-select.component.html',
  styleUrls: ['./admin-form-select.component.css']
})
export class AdminFormSelectComponent implements OnInit {
  @Input() inputId: string;
  @Input() control: FormControl = new FormControl();
  @Input() label: string;
  @Input() errorMessage: Record<string, string>;
  @Input() showError: boolean = false;
  @Input() icon: string;
  @Input() placeholder: string = "";
  @Input() items: SelectTagItemModel[]

  constructor() { }

  ngOnInit(): void {
  }

  displayErrors() {

    if (this.showError) {
      return true;
    }

    const { touched, errors } = this.control;

    return touched && errors;
  }

}
