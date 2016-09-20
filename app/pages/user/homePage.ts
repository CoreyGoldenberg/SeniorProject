import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage} from './login.component';
import { SignUpPage } from './signUp.component';
import { MainPage } from '../home/main';

@Component({
  templateUrl: 'build/pages/user/homePage.html'
})
export class HomePage {

  constructor(private nav:NavController) {
  }
  navLogin(){
  	this.nav.push(LoginPage)
  }
  navSignUp(){
  	this.nav.push(SignUpPage)
  }
  navMain(){
  	this.nav.setRoot(MainPage);
  }
}
