import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserRole } from 'src/app/core/entities/userRole';
import { AuthService } from 'src/app/services/auth.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private notificationService: NotificationService,
    private router: Router
  ) {
  }

  loginForm: FormGroup;
  userRoles: UserRole[] = [];
  isAuthenticated: boolean = false;
  jwtHelper: JwtHelperService = new JwtHelperService;

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
      authenticatorCode: new FormControl("0"),
    })
  }


  login() {
    if (this.loginForm.valid) {
      let value = Object.assign({}, this.loginForm.value);
      console.log(value);

      this.authService.login(value).subscribe((res) => {
        this.notificationService.successNotification("Helall lan", "Yaptın sanırım");
        this.authService.setToken(res.accessToken);
        this.refresh();
        this.navigate();
      }, ((error) => {
        console.log(error);
        this.notificationService.errorNotification("Hata", "Beceremedin:))");
      }))
    } else {
      this.showError = true;
      this.notificationService.errorNotification("Dikkat!", "Lütfen formu düzgün doldurun");
    }
  }

  refresh() {
    // this.isAuthenticated = this.authService.isAuthenticated();
    if (this.authService.getToken()) {
      let token = this.authService.getToken();
      let decode = this.jwtHelper.decodeToken(token!);
      console.log(decode);

      let userId = Object.keys(decode).filter(x => x.endsWith("/nameidentifier"))[0];
      this.authService.userId = decode[userId];

      let operationClaims = Object.keys(decode).filter(x => x.endsWith("/role"))[0];
      this.authService.userRole = [...decode[operationClaims]];
    }
  }

  navigate() {
    if (this.authService.userRole.filter((e) => e.role === "Admin")) {
      this.router.navigate(["/Admin/Polyclinics"]);
    } else if (this.authService.userRole.filter((e) => e.role === "Patient")) {
      this.router.navigate(["/Patient/Home"]);
    } else {
      this.notificationService.errorNotification("Oturum Süreniz Bitti", "Oturum açın");
      this.router.navigate(['Register']);
    }
  }
}
