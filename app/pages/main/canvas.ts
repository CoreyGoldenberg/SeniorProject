// import { Component } from '@angular/core';
// import { NavController } from 'ionic-angular';
// import { Camera } from 'ionic-native';
// import { Platform } from 'ionic-angular';
//
// declare var cordova;
// @Component({
//   templateUrl: 'build/pages/main/canvas.html'
// })
// export class Canvas {
//   public canvasElement: HTMLCanvasElement;
//   public context: CanvasRenderingContext2D;
//   public isDrawing: boolean;
//   constructor(public navCtrl: NavController,private platform:Platform) {
//     console.log("inside canvas constructor");
//     document.addEventListener('DOMContentLoaded', this.init, false);
//     console.log("CONSTRUCTOR END");
//   }
//
//   init() {
//     console.log("INITIALIZING CANVAS");
//     this.canvasElement = <HTMLCanvasElement>document.getElementById("canvas");
//     console.log("CANVAS: " + this.canvasElement);
//     console.log("1");
//     this.context = this.canvasElement.getContext("2d");
//     console.log("2");
//     this.isDrawing = false;
//     console.log("3");
//     this.canvasElement.width = this.platform.width();
//     console.log("4");
//     this.canvasElement.height = this.platform.height();
//     console.log("5");
//
//     console.log("ADDING EVENT LISTENERS");
//     this.canvasElement.addEventListener("touchstart", this.start, false);
//     this.canvasElement.addEventListener("touchmove", this.draw,false);
//     this.canvasElement.addEventListener("touchend", this.stop,false);
//   }
//
//   draw(event) {
//     if(this.isDrawing) {
//         this.context.lineTo(this.getX(event),this.getY(event));
//         this.context.stroke();
//     }
//     event.preventDefault();
//   }
//
//   start(event) {
//     console.log("TOUCH STARTED!!!!");
//     this.isDrawing = true;
//     this.context.beginPath();
//     this.context.moveTo(this.getX(event),this.getY(event));
//     event.preventDefault();
//   }
//
//   stop(event) {
//     console.log("TOUCH STOPPED!!!");
//     if(this.isDrawing) {
//         this.context.stroke();
//         this.context.closePath();
//         this.isDrawing = false;
//     }
//     event.preventDefault();
//   }
//
//   getX(event) {
//     if(event.type.contains("touch")) {
//         return event.targetTouches[0].pageX;
//     }
//     else {
//         return event.pageX;
//     }
//   }
//
//   getY(event) {
//     if(event.type.contains("touch")) {
//         return event.targetTouches[0].pageY;
//     }
//     else {
//         return event.pageY;
//     }
//   }
//
// }
