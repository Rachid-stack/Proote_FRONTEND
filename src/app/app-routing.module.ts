import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './utilisateur/login/login.component';
import { SignUpComponent } from './utilisateur/sign-up/sign-up.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
const routes: Routes = [
  {path:'',redirectTo:'/acceuil',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'acceuil',component:AcceuilComponent},
  {path:'sign-up',component:SignUpComponent},
  {path:'dashboard',component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
