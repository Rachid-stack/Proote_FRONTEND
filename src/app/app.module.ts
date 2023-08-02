import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxSpinnerModule } from 'ngx-spinner'; // Import the NgxSpinnerModule
import { SignUpComponent } from './utilisateur/sign-up/sign-up.component';
import { LoginComponent } from './utilisateur/login/login.component';
import { ListUtilisateurComponent } from './utilisateur/list-utilisateur/list-utilisateur.component';
import { AddUtilisateurComponent } from './utilisateur/add-utilisateur/add-utilisateur.component';
import { ListeContactComponent } from './contacts/liste-contact/liste-contact.component';
import { EditContactComponent } from './contacts/edit-contact/edit-contact.component';
import { AddContactComponent } from './contacts/add-contact/add-contact.component';
import { DeleteContactComponent } from './contacts/delete-contact/delete-contact.component';
import { ImportContactComponent } from './contacts/import-contact/import-contact.component';
import { DashbordComponent } from './contacts/dashbord/dashbord.component';
import { ListeComponent } from './liste/liste/liste.component';
import { AddListeComponent } from './liste/add-liste/add-liste.component';
import { EditListeComponent } from './liste/edit-liste/edit-liste.component';
import { DeleteListeComponent } from './liste/delete-liste/delete-liste.component';
import { AddCampagneComponent } from './campagne/add-campagne/add-campagne.component';
import { ListeCampagneComponent } from './campagne/liste-campagne/liste-campagne.component';
import { EditCampagneComponent } from './campagne/edit-campagne/edit-campagne.component';
import { DeleteCampagneComponent } from './campagne/delete-campagne/delete-campagne.component';
import { DashboardComponent } from './campagne/dashboard/dashboard.component';
import { ListeSubscriptionComponent } from './subscription/liste-subscription/liste-subscription.component';
import { EditSubscriptionComponent } from './subscription/edit-subscription/edit-subscription.component';
import { ListePlanComponent } from './plan/liste-plan/liste-plan.component';
import { AddPlanComponent } from './plan/add-plan/add-plan.component';
import { EditPlanComponent } from './plan/edit-plan/edit-plan.component';
import { DeletePlanComponent } from './plan/delete-plan/delete-plan.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserMoreInfoComponent } from './user-more-info/user-more-info.component';
import { HeaderComponent } from './header/header.component';
import { Body1Component } from './body1/body1.component';
import { Body2Component } from './body2/body2.component';
import { Body3Component } from './body3/body3.component';
import { ComposantCombineComponent } from './composant-combine/composant-combine.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
    ListUtilisateurComponent,
    AddUtilisateurComponent,
    ListeContactComponent,
    EditContactComponent,
    AddContactComponent,
    DeleteContactComponent,
    ImportContactComponent,
    DashbordComponent,
    ListeComponent,
    AddListeComponent,
    EditListeComponent,
    DeleteListeComponent,
    AddCampagneComponent,
    ListeCampagneComponent,
    EditCampagneComponent,
    DeleteCampagneComponent,
    DashboardComponent,
    ListeSubscriptionComponent,
    EditSubscriptionComponent,
    ListePlanComponent,
    AddPlanComponent,
    EditPlanComponent,
    DeletePlanComponent,
    SidenavComponent,
    NavbarComponent,
    UserMoreInfoComponent,
    HeaderComponent,
    Body1Component,
    Body2Component,
    Body3Component,
    ComposantCombineComponent,
    AcceuilComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    NgxSpinnerModule,
    HttpClientModule,
    ToastrModule.forRoot(), // Add this line to import the ToastrModule
    AppRoutingModule, BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
