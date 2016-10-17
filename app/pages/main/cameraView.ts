import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera } from 'ionic-native';
import { Platform } from 'ionic-angular';
import { CameraPreview } from 'ionic-native'
import { DomSanitizationService } from '@angular/platform-browser';
import { File } from 'ionic-native';
import { MainService } from './main.service';
import { DrawMessagePage } from './drawMessage';
declare var cordova;
@Component({
  templateUrl: 'build/pages/main/cameraView.html'
})
export class CameraViewPage {
  public base64Image: string;
  public cameraPreviewImage: string;
  constructor(public navCtrl: NavController,private platform:Platform,private domSanitizer:DomSanitizationService,private mainService:MainService) {
    CameraPreview.setOnPictureTakenHandler().subscribe((result) => {
      this.cameraPreviewImage = result[0];
      this.mainService.cameraViewPicture = this.cameraPreviewImage;
      this.navCtrl.push(DrawMessagePage);
    });
  }
  takePicture() {
    if(this.platform.is('android')) {
      CameraPreview.takePicture({
        maxWidth: this.platform.width(),
        maxHeight: this.platform.height()
      });
    }
    else {
      Camera.getPicture({
        destinationType: Camera.DestinationType.DATA_URL,
        targetWidth: this.platform.width(),
        targetHeight: this.platform.height()
      }).then((imageData) => {
      // imageData is a base64 encoded string
        console.log("GETTING THE PICTURE");
        this.base64Image = "data:image/jpeg;base64," + imageData;
        console.log("BASE64 IMAGE: " + this.base64Image);
        this.mainService.cameraPicture = this.base64Image;
        console.log("NAVIGATING TO DRAW MESSAGE");
        this.navCtrl.push(DrawMessagePage);
      }, (err) => {
        console.log("UH OH THAT DID NOT WORK " + err);
      });
    }
  }
}
