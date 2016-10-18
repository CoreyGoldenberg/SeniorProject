import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera } from 'ionic-native';
import { Platform } from 'ionic-angular';

declare var cordova;
@Component({
  templateUrl: 'build/pages/main/canvas.html'
})
export class Canvas {
  public myCanvas: HTMLCanvasElement;
  public context: CanvasRenderingContext2D;
  public isDrawing: boolean;
  constructor(public navCtrl: NavController, private platform:Platform) {
    console.log("inside canvas constructor");
  }
  ionViewDidEnter() {
    console.log("Initializing");
    this.myCanvas = <HTMLCanvasElement>document.getElementById('canvas');
    console.log("CANVAS " + this.myCanvas);
    this.context = this.myCanvas.getContext("2d");
    this.isDrawing = false;
    this.myCanvas.width = this.platform.width();
    this.myCanvas.height = this.platform.height();
    this.myCanvas.addEventListener("touchstart",this.start,false);
    this.myCanvas.addEventListener("touchmove",this.draw,false);
    this.myCanvas.addEventListener("touchend",this.stop,false);
    // this.context.beginPath();
    // this.context.arc(75,75,35,0,Math.PI);
    // this.context.stroke();
  }

  start(event) {
    console.log("START!!!!");
    this.isDrawing = true;
    console.log("isDrawing set to true");
    this.context.beginPath();
    console.log("Made it after begin path");
    var touchX = this.getX(event);
    var touchY = this.getY(event);
    console.log("TOUCH X: " + touchX);
    console.log("TOUCH Y: " + touchY);
    this.context.moveTo(touchX, touchY);
    event.preventDefault();
  }

  stop(event) {
    console.log("STOP!!!");
    if(this.isDrawing) {
       this.context.stroke();
       this.context.closePath();
       this.isDrawing = false;
    }
    event.preventDefault();
  }

  draw(event) {
    console.log("Draw");
    if(this.isDrawing) {
        this.context.lineTo(this.getX(event),this.getY(event));
        this.context.stroke();
    }
    event.preventDefault();
  }

  getX(event) {
    console.log("GETX");
    if(event.type.contains("touch")) {
        var touch = event.targetTouches[0];
        console.log("GETX: " + (touch.pageX-touch.target.offsetLeft));
        return touch.pageX-touch.target.offsetLeft;
    }
    else {
        return event.pageX;
    }
  }

  getY(event) {
    console.log("GETY");
    if(event.type.contains("touch")) {
      var touch = event.targetTouches[0];
      console.log("GETY: " + (touch.pageY-touch.target.offsetTop));
      return touch.pageY-touch.target.offsetTop;
    }
    else {
        return event.pageY;
    }
  }

}
