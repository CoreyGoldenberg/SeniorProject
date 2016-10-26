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
  // public context: CanvasRenderingContext2D;
  // public isDrawing: boolean;
  constructor(public navCtrl: NavController, private platform:Platform) {
    console.log("inside canvas constructor");
  }
  ionViewDidEnter() {
    console.log("Initializing");
    this.myCanvas = <HTMLCanvasElement>document.getElementById('canvas');
    var canvas = this.myCanvas;
    var context = canvas.getContext("2d");
    var isDrawing = false;
    canvas.width = this.platform.width();
    canvas.height = this.platform.height();
    console.log("Canvas Width: " + canvas.width);
    console.log("Canvas Height: " + canvas.height);
    init();

    function start(event) {
      console.log("START!!!!");
      isDrawing = true;
      console.log("isDrawing:" + isDrawing);
      console.log("Context inside start: " + context);
      context.beginPath();
      console.log("Made it after begin path");
      var touchX = getX(event);
      var touchY = getY(event);
      console.log("TOUCH X: " + touchX);
      console.log("TOUCH Y: " + touchY);
      context.moveTo(touchX, touchY);
      event.preventDefault();
    }

    function draw(event) {
      console.log("Draw");
      if(isDrawing) {
          console.log("Draw if statement");
          context.lineTo(getX(event),getY(event));
          context.stroke();
      }
      event.preventDefault();
    }

    function stop(event) {
      console.log("STOP!!!");
      if(isDrawing) {
         console.log("Inside stop statement");
         context.stroke();
         context.closePath();
         isDrawing = false;
      }
      event.preventDefault();
    }

    function getX(event) {
      var touch = event.targetTouches[0];
      console.log("GETX: " + (touch.pageX-touch.target.offsetLeft));
      return touch.pageX-touch.target.offsetLeft;
    }

    function getY(event) {
      var touch = event.targetTouches[0];
      console.log("GETY: " + (touch.pageY-touch.target.offsetTop));
      return touch.pageY-touch.target.offsetTop;
    }

    function init() {
      canvas.addEventListener("touchstart",start,false);
      canvas.addEventListener("touchmove",draw,false);
      canvas.addEventListener("touchend",stop,false);
    }
  }
    // this.DrawingUtil(this.myCanvas);
    // console.log("CANVAS " + this.myCanvas);
    // this.context = this.myCanvas.getContext("2d");
    // console.log("Context: " + this.context);
    // this.isDrawing = false;
    // this.myCanvas.width = this.platform.width();
    // this.myCanvas.height = this.platform.height();
    // console.log("Width: " + this.myCanvas.width);
    // console.log("Height: " + this.myCanvas.height);
    // this.myCanvas.addEventListener("touchstart",this.start,false);
    // this.myCanvas.addEventListener("touchmove",this.draw,false);
    // this.myCanvas.addEventListener("touchend",this.stop,false);
    // this.context.beginPath();
    // this.context.arc(75,75,35,0,Math.PI);
    // this.context.stroke();
  // }


  // start(event) {
  //   console.log("START!!!!");
  //   console.log("THIS: " + this);
  //   this.isDrawing = true;
  //   console.log("isDrawing:" + this.isDrawing);
  //   console.log("Context inside start: " + this.context)
  //   this.context.beginPath();
  //   console.log("Made it after begin path");
  //   var touchX = this.getX(event);
  //   var touchY = this.getY(event);
  //   console.log("TOUCH X: " + touchX);
  //   console.log("TOUCH Y: " + touchY);
  //   this.context.moveTo(touchX, touchY);
  //   event.preventDefault();
  // }

  // stop(event) {
  //   console.log("STOP!!!");
  //   if(this.isDrawing) {
  //      console.log("Inside stop statement");
  //      this.context.stroke();
  //      this.context.closePath();
  //      this.isDrawing = false;
  //   }
  //   event.preventDefault();
  // }

  // draw(event) {
  //   console.log("Draw");
  //   if(this.isDrawing) {
  //       console.log("Draw if statement");
  //       this.context.lineTo(this.getX(event),this.getY(event));
  //       this.context.stroke();
  //   }
  //   event.preventDefault();
  // }

  // getX(event) {
  //   console.log("GETX");
  //   if(event.type.contains("touch")) {
  //       var touch = event.targetTouches[0];
  //       console.log("GETX: " + (touch.pageX-touch.target.offsetLeft));
  //       return touch.pageX-touch.target.offsetLeft;
  //   }
  //   else {
  //       return event.pageX;
  //   }
  // }

//   getY(event) {
//     console.log("GETY");
//     if(event.type.contains("touch")) {
//       var touch = event.targetTouches[0];
//       console.log("GETY: " + (touch.pageY-touch.target.offsetTop));
//       return touch.pageY-touch.target.offsetTop;
//     }
//     else {
//         return event.pageY;
//     }
//   }
//
}
