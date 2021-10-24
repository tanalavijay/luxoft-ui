import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise'; 


@Injectable()
export class LuxoftService {
  
  loginurl = "/userlogin";
  getusersurl = "/getusers/";
  getallusersurl ="/getallusers";
  logouturl = "/logout";

  headers = new Headers({
    'Content-Type': 'application/json'
  });
  
  constructor(private http: Http) { }
  
  getToken() {
    if (sessionStorage.getItem('luxoft_user_info')) {
      let currentUser = JSON.parse(sessionStorage.getItem('luxoft_user_info'));
      return currentUser.token;
    } else {
      return " ";
    }
  }

 //login api
  userLogin(uname, pswd): Promise<any> {
    var data = {
      email: uname,
      password: pswd
    }
    return this.http.post(this.loginurl, JSON.stringify(data), { headers: this.headers, withCredentials: true }).toPromise()
    .then(this.extractData)
    .catch(this.handleErrorPromise);
  }

//get single user api
  getUsersData(userId): Promise<any> {
    this.headers = new Headers({
      'Content-Type' : 'application/json',
      'Accept' : 'application/json',
      'Authorization' : 'Bearer ' + this.getToken()
    });
    return this.http.get(this.getusersurl+userId, {headers:this.headers, withCredentials: true}).toPromise()
    .then(this.extractData)
    .catch(this.handleErrorPromise)
  }

//get all users details api
getAllUsersData(): Promise<any> {
  this.headers = new Headers({
    'Content-Type' : 'application/json',
    'Accept' : 'application/json',
    'Authorization' : 'Bearer ' + this.getToken()
  });
  return this.http.get(this.getallusersurl, {headers:this.headers, withCredentials: true}).toPromise()
  .then(this.extractData)
  .catch(this.handleErrorPromise)
}

//logout api
  logOut(): Promise<any> {
    return this.http.post(this.logouturl, { headers: this.headers}).toPromise()
    .then(this.extractData)
    .catch(this.handleErrorPromise);
  }

  //json response
  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  //error handle
  private handleErrorPromise(error: Response | any) {
    return Promise.reject(error.message || error);
  }
  
}