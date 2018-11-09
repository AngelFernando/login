import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { RegistrerComponent } from './registrer/registrer.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { PrivadoComponent } from './privado/privado.component';
const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'login', component: LoginpageComponent},
  {path: 'registrer', component: RegistrerComponent},
  {path: 'privado', component: PrivadoComponent},
  {path: '**', component: NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
