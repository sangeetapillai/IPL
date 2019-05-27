import { Component } from '@angular/core';
import {AuthenticationService} from './authentication.service';
import { Router } from '@angular/router';
import {User} from './models/model'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  loggedIn = false;
  username = ''
  password = ''
  invalidLogin = false
  isloginloading = false;

  constructor(private router: Router, private authService:AuthenticationService) {}

  ngOnInit() {
   
   
   if (localStorage.getItem('username')) 
   {
     console.log(localStorage.getItem('username'))
   	this.loggedIn = true
   }
   else{
   	this.loggedIn = false;
   }

  }

  signup(){
    this.isloginloading   = true;
    let user = <User>{};
    user.userEmail = this.username;
    user.userPassword = this.password;
    this.authService.signup(user).subscribe
    (user_list => {
      this.isloginloading   = false;
      alert('An activation link has been sent to your email Id. Please use that to activiate your email.')
      console.log(user_list);
    });

  }


  logout(){
    this.authService.logout();
    this.loggedIn = false;
    window.location.reload();
  }

  login(){
    this.isloginloading   = true;
    let user = <User>{};
    user.userEmail = this.username;
    user.userPassword = this.password;
    this.authService.login(user).subscribe
    (user_list => {
      this.isloginloading   = false;;
      if (user_list.statusCode === 'FAILURE' || !user_list.users || !user_list.users[0]) {
        this.invalidLogin = true;
      } else {
         this.invalidLogin = false;
         this.authService.setUser(user_list.users[0]);
         this.loggedIn = true;
         this.router.navigate(['/dashboard']);
      }
    });
  

  }
  
}
