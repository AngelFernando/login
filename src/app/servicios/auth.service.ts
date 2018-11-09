import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public afauth: AngularFireAuth
  ) { }

  registreruser(email: string, pass: string){
    return new Promise((resolve, reject) =>{
      this.afauth.auth.createUserWithEmailAndPassword(email, pass)
      .then( userData => resolve(userData),
      err => reject (err));
    });
  }

  loginEmail(email: string, pass: string){
    return new Promise((resolve, reject) =>{
      this.afauth.auth.signInWithEmailAndPassword(email, pass)
      .then( userData => resolve(userData),
      err => reject (err));
    });
  }

  getAuth(){
    return this.afauth.authState.map( auth => auth);
  }

  logout(){
    return this.afauth.auth.signOut();
  }

}
