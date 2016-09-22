import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform} from 'ionic-angular';
import { LoginPage} from './login.component';
import { SignUpPage } from './signUp.component';
import { MainPage } from '../home/main';

declare var cordova;
@Component({
  templateUrl: 'build/pages/user/homePage.html'
})
export class HomePage {

  constructor(private nav:NavController, private platform:Platform) {
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
  preview(){
  	  // let tapEnabled = false;
      // let dragEnabled = false;
      // let toBack = true;
      // let rect = {
      //   x : 0,
      //   y : 0,
      //   width : this.platform.width(),
      //   height: this.platform.height()
      // };
      console.log("SHOWING");
      cordova.plugins.camerapreview.show();
      console.log("Reloading");
      window['location'].reload();
      console.log("done");
  }
}
