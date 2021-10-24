import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/shared/services/alert.service';
import { LuxoftService } from '../luxoft.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public userData: any;
  public username : any;
  public useremail : any;
  public userrole : any;
  public userId : any;
  
  constructor(public alertService: AlertService,public luxoftService: LuxoftService) { }

  ngOnInit() {
      var currentUser = JSON.parse(sessionStorage.getItem('luxoft_user_info'));
      this.userId = currentUser.userId;
      this.getUserData(this.userId);
  }

  //get users api
  public getUserData(userId) {
    this.luxoftService.getUsersData(userId).then(data => {
      if (data.success) {
        this.useremail = data.results[0].user_email;
        this.username = data.results[0].user_name;
        this.userrole = data.results[0].user_role;
      }
      else {
        this.alertService.createAlert(data.message, 0);
      }
    });
  }
}
