import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform} from 'ionic-angular';
import { LoginPage} from './login.component';
import { SignUpPage } from './signUp.component';
import { CameraViewPage } from '../main/cameraView';
import { Canvas } from '../main/canvas';
import { DomSanitizationService } from '@angular/platform-browser';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';

declare var cordova;
declare var firebase: any;
@Component({
  templateUrl: 'build/pages/user/homePage.html'
})
export class HomePage {
  testPic:any;
  public auth:any;
  public images:FirebaseListObservable<any>;
  constructor(private af:AngularFire,private nav:NavController, private platform:Platform, private domSanitizer:DomSanitizationService) {
    this.testPic="";
    this.auth = firebase.auth();
    this.images = this.af.database.list('images/');
    this.af.database.list('images/').subscribe((pics)=>{
      pics.forEach((pic)=>{
    console.log(pic.downloadURL);
      })
    });
 //console.log(this.auth);
  }
  navLogin(){
  	this.nav.push(LoginPage)
  }
  navSignUp(){
  	this.nav.push(SignUpPage)
  }
  navMain(){
  	this.nav.setRoot(CameraViewPage);
  }
  navCanvas() {
    this.nav.setRoot(Canvas);
  }
  preview(){
      localStorage.setItem('hasBeenHome', "true");

      let tapEnabled = false;
      let dragEnabled = false;
      let toBack = true;
      let rect = {
        x : 0,
        y : 0,
        width :  this.platform.width(),
        height: this.platform.height()
      };
      cordova.plugins.camerapreview.startCamera(rect, "rear", tapEnabled, dragEnabled,toBack);

      location.reload();

  }
}
