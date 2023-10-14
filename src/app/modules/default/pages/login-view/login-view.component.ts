import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent implements OnInit {

  constructor() {
  }

  loginForm: FormGroup;

  email: string;
  password: string;

  showError: boolean = false;
  errorMessageForEmail: Record<string, string> = {
    required: "Lazım",
    email: "Email gir lan",
  }

  errorMessageForPassword: Record<string, string> = {

    required: "Lazım Bilader"
  }

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", Validators.required),
    })
  }


  login() {


    if (this.loginForm.valid) {
      console.log("Hlla");

    } else {
      this.showError = true;
      console.log("Hatalı " + this.showError);

    }


  }
}
