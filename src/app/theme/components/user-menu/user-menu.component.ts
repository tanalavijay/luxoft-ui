import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AlertService } from '../../../shared/services/alert.service';
import { Router } from '@angular/router';
import { LuxoftService } from 'src/app/luxoft/luxoft.service';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers:[AlertService]
})

export class UserMenuComponent implements OnInit {
  
  constructor(public dialog: MatDialog,public alertService:AlertService,public luxoftService :LuxoftService,public router: Router) { }
  public userData: any;

  ngOnInit() {
     this.loadData();
  }

//get stored user info
  loadData() {
    var currentUser = JSON.parse(sessionStorage.getItem('luxoft_user_info'));
    this.userData = currentUser;
   }

//logout user function
  logoutUser() {
    this.luxoftService.logOut().then(res => {
      if (res.success) {
        localStorage.removeItem('luxoft_user_info');
        sessionStorage.clear();
        this.router.navigate(['/login']);
        this.alertService.createAlert(res.message, 1);
      }
      else {
        this.alertService.createAlert(res.message, 0);
      }
    }).catch(e => {
      console.log(e);
    });
  }
}
