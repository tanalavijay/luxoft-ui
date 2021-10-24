import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AppSettings } from "../app.settings";
import { Settings } from "../app.settings.model";
import { AlertService } from "../shared/services/alert.service";
import { LuxoftService } from "../luxoft/luxoft.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
  providers: [AlertService],
})
export class LoginComponent {

  public TypeString: string = "password";
  public isPassword: boolean = true;
  public form: FormGroup;
  public settings: Settings;

  constructor(public appSettings: AppSettings,public fb: FormBuilder, public router: Router,public alertService: AlertService,public luxoftService: LuxoftService) {
    this.settings = this.appSettings.settings;
    this.form = this.fb.group({
      email: [null, Validators.compose([Validators.required])],
      password: [
        null,
        Validators.compose([Validators.required, Validators.minLength(6)]),
      ],
    });
  }

 // api service call
  public onSubmit(values) {
    if (this.form.valid || values)  {
      this.luxoftService.userLogin(values.email,values.password).then(data => {
        console.log(data);
        if (data.auth) {
          if (sessionStorage.getItem('luxoft_user_info')) {
              sessionStorage.removeItem('luxoft_user_info');
          }
           sessionStorage.setItem('luxoft_user_info', JSON.stringify({ userId: data.id, userName: data.name, userRole: data.role, userEmail: data.email,token: data.auth_token}));
           if(data.role == 'EMPLOYEE'){
            this.router.navigate(['luxoft/profile/']);
           }else if(data.role == 'ADMIN'){
            this.router.navigate(['luxoft/admin/']);
           }
        }
        else {
          this.alertService.createAlert(data.message, 0);
        }
      })
    }
  }

//view and hide password
  public ChangetextType(isPassword) {
    if (isPassword) {
      this.TypeString = "password";
    } else {
      this.TypeString = "text";
    }
  }

  ngAfterViewInit() {
    setInterval(() => {
      this.settings.loadingSpinner = false;
    }, 500);
  }
}
