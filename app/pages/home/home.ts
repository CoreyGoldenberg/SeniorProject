import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Camera} from 'ionic-native';
import { Platform} from 'ionic-angular';

declare var cordova;
@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {  
  public base64Image: string;
  constructor(public navCtrl: NavController,private platform:Platform) {

  }
  refresh() {
    window['location'].reload();
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
  preview(){
  	  let tapEnabled = false;
      let dragEnabled = false;
      let toBack = true;
      let rect = {
        x : 0,
        y : 0,
        width : this.platform.width(),
        height: this.platform.height()
      };
      alert(cordova);
      cordova.plugins.camerapreview.startCamera(rect, "rear", tapEnabled, dragEnabled,toBack);
  }
}
