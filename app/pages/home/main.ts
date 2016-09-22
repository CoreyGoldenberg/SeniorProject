import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Camera} from 'ionic-native';
import { Platform} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/home/main.html'
})
export class MainPage {
  public base64Image: string;
  constructor(public navCtrl: NavController,private platform:Platform) {

  }
  takePic(){
  	alert(Camera);
    Camera.getPicture({
        destinationType: Camera.DestinationType.DATA_URL,
        targetWidth: 1000,
        targetHeight: 1000
    }).then((imageData) => {
      // imageData is a base64 encoded string
        this.base64Image = "data:image/jpeg;base64," + imageData;
    }, (err) => {
        console.log(err);
    });
  }
  test() {
    alert("Reloading");
    window['location'].reload();
  }
}
