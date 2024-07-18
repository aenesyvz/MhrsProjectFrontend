import { Component, ElementRef, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InputControl } from 'src/app/core/utilities/forms/inputControl';
import { SelectTagItemModel } from 'src/app/core/utilities/selectTagItemModel';
import { NotificationService } from 'src/app/services/notification.service';
import { PatientService } from 'src/app/services/patient.service';
import { ValidateSchema } from 'src/app/shared/validator/validate-schema';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-view',
  templateUrl: './register-view.component.html',
  styleUrls: ['./register-view.component.css']
})
export class RegisterViewComponent implements OnInit {

  constructor(
    private elementRef: ElementRef,
    private patientService: PatientService,
    private notificationService: NotificationService,
    private router: Router) { }

  validationSchema: ValidateSchema = new ValidateSchema();

  inputControl: InputControl = new InputControl();
  registerFormGroup1: FormGroup;
  registerFormGroup2: FormGroup;

  formStep: number = 1;

  //Group1
  nationalityNumber: string;
  firstName: string;
  lastName: string;
  gender: number;
  dateOfBirth: Date;

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
      nationalityNumber: new FormControl("", [Validators.required, Validators.minLength(11)]),
      firstName: new FormControl("", Validators.required),
      lastName: new FormControl("", Validators.required),
      gender: new FormControl(-1, [Validators.required, Validators.min(1)]),
      dateOfBirth: new FormControl("", Validators.required)
    })
  }

  createRegisterFormGroup2() {
    this.registerFormGroup2 = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      phoneNumber: new FormControl("", [Validators.required]),
      password: new FormControl("", Validators.required),
      // confirmPassword: new FormControl("", [Validators.required]),
    });
  }


  nextToFormGroup2() {
    if (!this.acceptUsageConditition) {
      this.notificationService.errorNotification("Üyelik ve Gizlilik Politikasını kabul etmelisiniz", "Dikkat!");
      return;
    }
    if (this.registerFormGroup1.valid) {
      let registerFormGroup1Value = Object.assign({}, this.registerFormGroup1.value);
      const formGroup = this.elementRef.nativeElement.querySelector('.steps__form');
      formGroup.style.marginLeft = `-${this.formStep * 100}%`
      const progressBar = this.elementRef.nativeElement.querySelector('.step__progress');
      progressBar.classList.add("active");
      this.formStep++;
      this.showError = false;
    }
    else {
      this.showError = true;
    }
  }

  register() {
    if (this.registerFormGroup2.valid) {
      let registerFormGroup1Value = Object.assign({}, this.registerFormGroup1.value);
      let registerFormGroup2Value = Object.assign({}, this.registerFormGroup2.value);
      let mergedFormValue = Object.assign({}, { ...registerFormGroup1Value, ...registerFormGroup2Value });

      console.log(mergedFormValue);

      this.patientService.add(mergedFormValue).subscribe((response) => {
        const step2 = this.elementRef.nativeElement.querySelector('.step-2');
        step2.style.backgroundColor = `hsl(190, 64%, 22%)`;
        step2.style.color = `white`;
        this.notificationService.successNotification("Kayıt oldunuz", "Tebrikler!");

        this.router.navigate(['/Login'])
      }, (error) => {

        console.log(error);


        this.notificationService.errorNotification((JSON.stringify(error.error["Errors"][0]["Errors"])).length > 0 ? JSON.stringify(error.error["Errors"][0]["Errors"][0]) : error.statusText, "Üzgünüz!");
      });

      this.showError = false;
    } else {
      this.notificationService.errorNotification("Adam akıllı doldur şunu", "Üzgünüz!");
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
