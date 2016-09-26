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
  takePicture() {
    
  }
}
