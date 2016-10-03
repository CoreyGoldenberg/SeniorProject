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
  constructor(public navCtrl: NavController,private platform:Platform,private domSanitizer:DomSanitizationService,private mainService:MainService) {
    CameraPreview.setOnPictureTakenHandler().subscribe((result) => {
      this.base64Image = result[0];
      this.mainService.cameraViewPicture = this.base64Image;
      this.navCtrl.push(DrawMessagePage);
    });
  }
  takePicture() {
    CameraPreview.takePicture({
      maxWidth: this.platform.width(),
      maxHeight: this.platform.height()
    });
  }
}
