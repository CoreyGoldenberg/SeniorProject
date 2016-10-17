import {Injectable,OnInit} from '@angular/core';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable,FirebaseAuth} from 'angularfire2';


@Injectable()
export class MainService implements OnInit{
    public cameraViewPicture: string;
    public cameraPicture: string;
    constructor(private af:AngularFire){
    }
    ngOnInit(){
    }
}
