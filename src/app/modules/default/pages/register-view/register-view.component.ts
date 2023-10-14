import { Component, ElementRef, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InputControl } from 'src/app/core/utilities/forms/inputControl';
import { SelectTagItemModel } from 'src/app/core/utilities/selectTagItemModel';
import { ValidateSchema } from 'src/app/shared/validator/validate-schema';

@Component({
  selector: 'app-register-view',
  templateUrl: './register-view.component.html',
  styleUrls: ['./register-view.component.css']
})
export class RegisterViewComponent implements OnInit {

  constructor(private elementRef: ElementRef) { }

  validationSchema: ValidateSchema = new ValidateSchema();

  inputControl: InputControl = new InputControl();
  registerFormGroup1: FormGroup;
  registerFormGroup2: FormGroup;

  formStep: number = 1;

  //Group1
  natioanlityId: string;
  firstName: string;
  lastName: string;
  gender: number;
  dayOfBirth: Date;

  //Group2
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;

  acceptUsageConditition: boolean = false;
  openModal: boolean = false;

  validateSchema: ValidateSchema

  showError: boolean = false;
  genders: SelectTagItemModel[] = [
    { key: "Erkek", value: 1 },
    { key: "Kadın", value: 2 }
  ];




  ngOnInit(): void {
    this.createRegisterFormGroup1();
    this.createRegisterFormGroup2();
  }


  createRegisterFormGroup1() {
    this.registerFormGroup1 = new FormGroup({
      natioanlityId: new FormControl("", [Validators.required, Validators.minLength(11)]),
      firstName: new FormControl("", Validators.required),
      lastName: new FormControl("", Validators.required),
      gender: new FormControl(-1, [Validators.required, Validators.min(1)]),
      dayOfBirth: new FormControl("", Validators.required)
    })
  }

  createRegisterFormGroup2() {
    this.registerFormGroup2 = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      phoneNumber: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required),
      confirmPassword: new FormControl("", [Validators.required]),
    });
  }


  nextToFormGroup2() {
    if (this.registerFormGroup1.valid) {
      const formGroup = this.elementRef.nativeElement.querySelector('.form__group');
      formGroup.style.marginLeft = `-${this.formStep * 100}%`

      this.formStep++;
      this.showError = false;
    }
    else {
      this.showError = true;
    }
  }

  openUsageCondititionModal() {
    this.openModal = true;
  }

  closeUsageCondititionModal() {
    this.openModal = false;
  }
  acceptUsageConditionModal() {
    this.acceptUsageConditition = true;
    this.closeUsageCondititionModal();
  }

  checkboxChangeHandle() {
    this.acceptUsageConditition = !this.acceptUsageConditition
  }

}
