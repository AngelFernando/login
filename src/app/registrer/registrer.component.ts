import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicios/auth.service';
@Component({
  selector: 'app-registrer',
  templateUrl: './registrer.component.html',
  styleUrls: ['./registrer.component.scss']
})
export class RegistrerComponent implements OnInit {
  public email: string;
  public password: string;
  constructor(
    public authService : AuthService
    ) { }
 
  ngOnInit() {
  }
  onSumitAddUser(){
    this.authService.registreruser(this.email, this.password)
    .then( (res) => {
      console.log('Bien');
      console.log(res);
    }).catch( (err) => {
      console.log(err);
    });
  }
}
