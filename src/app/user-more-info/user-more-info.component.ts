
import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { SignUpService } from 'src/app/services/utilisateur/sign-up.service';
import *  as intlTelInput from 'intl-tel-input';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-more-info',
  templateUrl: './user-more-info.component.html',
  styleUrls: ['./user-more-info.component.css']
})
export class UserMoreInfoComponent {
  signinForm!: FormGroup;
  isParticulier: boolean = true;
  data: any;
   constructor(private router:Router,private fb:FormBuilder, private toastr: ToastrService,private auth:AuthService,private signApi:SignUpService){}
   ngOnInit(){
    this.signinForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      entreprise: [''], // Not making it required as it's optional
      ville: [''], // Not making it required as it's optional
      telephone: ['', Validators.required],
      type:['Professionnel']
    });
      //const input = document.querySelector('.telephone2');
      const inputElement=document.getElementById('phone');
      console.log(inputElement);
      if(inputElement){
        intlTelInput(inputElement,{
          initialCountry:'bf',
          separateDialCode:true,
          utilsScript:'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/11.0.0/js/utils.js'
        })
      }
   }
   showSuccess(message:any) {
    this.toastr.success(message, 'Inscription reuissie!',{
      timeOut:4000,
      progressBar:true,
      positionClass:'toast-top-left',
    });
  }
  showDanger(message:any) {
    this.toastr.warning(message, 'danger',{
      timeOut:3000,
      progressBar:true,
      positionClass:'toast-top-left',
    });
  }
  submitForm() {
    const userN=localStorage.getItem('user');
    if(userN){
      const data = JSON.parse(userN);
        data.nom= this.signinForm.value.nom;
        data.prenom= this.signinForm.value.prenom;
        data.telephone= this.signinForm.value.telephone;
        data.ville= this.signinForm.value.ville;
        data.entreprise= this.signinForm.value.entreprise;
        data.type= this.signinForm.value.type;
        console.log(data);
        
        //on verifie la disponibilité de l'email
        this.signApi.checkEmail(data.email).then(
          (response)=>{
            console.log(response);
          }
        );

        this.signApi.signup(data).subscribe(
          (response)=>{
            this.router.navigate(['/login'])
            this.showSuccess('Inscription effectué avec success!! Un mail vous a été envoyer pour la confirmation de votre email!');
            console.log(response);
          },(error)=>{
            this.showDanger('Une erreur est arrivée');
          }
        )
        //localStorage.setItem('user',JSON.stringify(data));
    }
    
  }
}
