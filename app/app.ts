import { Component } from '@angular/core';
import { Platform, ionicBootstrap } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { HomePage } from './pages/user/homePage';
import { CameraViewPage } from './pages/main/cameraView';
import { UserService } from './pages/user/user.service';
import { MainService } from './pages/main/main.service';
import {Camera} from 'ionic-native'
import { FIREBASE_PROVIDERS,
         defaultFirebase,
         AuthMethods,
         AuthProviders,
        firebaseAuthConfig,AngularFire, AngularFireAuth, FirebaseAuth} from 'angularfire2';

declare var cordova;
@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  providers: [UserService,MainService]
})
export class MyApp {

  public rootPage: any;

  constructor(private platform: Platform, private userService: UserService) {

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();

      if(localStorage.getItem("hasBeenHome") == "true") {
        console.log("Tried to change rootPage to mainPage");
        this.rootPage = CameraViewPage;
        localStorage.setItem("hasBeenHome", "false");
      }
      else {
        this.rootPage = HomePage;
      }
    });
  }
}

ionicBootstrap(MyApp,[
    UserService,
    MainService,
    FIREBASE_PROVIDERS,
    firebaseAuthConfig({
      provider: AuthProviders.Password,
      method: AuthMethods.Password,
    }),
    defaultFirebase({
    apiKey: "AIzaSyDjxzurguIw3nIhrANP_CRr81o9uwT_q2o",
    authDomain: "seniorprojectadcg.firebaseapp.com",
    databaseURL: "https://seniorprojectadcg.firebaseio.com",
    storageBucket: "seniorprojectadcg.appspot.com",
  })
]);
