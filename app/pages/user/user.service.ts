import {Injectable,OnInit} from '@angular/core';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable,FirebaseAuth} from 'angularfire2';


@Injectable()
export class UserService implements OnInit{
    uid: string;
    //user: FirebaseObjectObservable<any[]>;
    users: FirebaseListObservable<any[]>;
    constructor(private af:AngularFire){
        console.log("here")
        this.users=this.af.database.list('users/');
        this.users.subscribe((user)=>console.log(user));
        console.log(this.users);      
    }
    ngOnInit(){        
    }
    createUser(email, password){
    }
    logout(){
    }
    loginUser(email, password){
    }
}