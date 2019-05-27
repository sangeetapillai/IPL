import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {UserData} from './models/model'



@Injectable()
export class AuthenticationService {

  private apiEndpoint = 'http://3.14.70.19:8080/betterapp/service/';
  constructor(private http: HttpClient, private _router: Router) {}
  signup(user) {
    const apiURL = this.apiEndpoint + 'createUser';
    const response = this.http.post<UserData>(apiURL, user);
    return response;
  }

  logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('useremail');
    console.log('removed user');
  }

  login(user) {
    const apiURL = this.apiEndpoint + 'authenticate';
    const response = this.http.post<UserData>(apiURL, user);
    return response;
  }

  setUser(user) {
    localStorage.setItem('username', user.userName);
    localStorage.setItem('useremail', user.userEmail);
  }

  isUserLoggedIn() {
    return !(localStorage.getItem('username') === null);

  }

  resetPassword(user) {
    const apiURL = this.apiEndpoint + 'resetPassword';
    const response = this.http.post<UserData>(apiURL, user);
    return response;
  }

}
