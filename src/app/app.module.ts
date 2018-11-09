import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegistrerComponent } from './registrer/registrer.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { PrivadoComponent } from './privado/privado.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { AuthService } from './servicios/auth.service';
import { AngularFireModule} from 'angularfire2';
import { AngularFireAuthModule} from 'angularfire2/auth';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    RegistrerComponent,
    LoginpageComponent,
    PrivadoComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
