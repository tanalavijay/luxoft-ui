import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/shared/services/alert.service';
import { LuxoftService } from '../luxoft.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})

export class AdminComponent implements OnInit {

  public showEmpty: boolean = false;
  public users: any;
  userId = null;
  constructor(public alertService: AlertService,public luxoftService: LuxoftService) { }

  ngOnInit() {
    this.getAllUsers();
  }
  //get users api
  public getAllUsers() {
    this.luxoftService.getAllUsersData().then(data => {
      if (data.success) {
        this.users = data.results;
        if (data.results) {
          if (!data.results.length) {
            this.showEmpty = true;
          }
          else {
            this.showEmpty = false;
          }
        }
        else {
          this.showEmpty = true;
        }
      }
      else {
        this.alertService.createAlert(data.message, 0);
      }
    });
  }
}

