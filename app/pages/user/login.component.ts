import { Component,OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/user/login.component.html'
})
export class LoginPage implements OnInit{
  userEmail:string;
  userPassword:string;
  constructor() {
  }
  ngOnInit(){
    this.userEmail="";
    this.userPassword="";
  }
  login(){
    
  }
}
