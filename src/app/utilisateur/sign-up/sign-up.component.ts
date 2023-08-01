import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { SignUpService } from 'src/app/services/utilisateur/sign-up.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  signinForm!: FormGroup;
  data!:any;
  currentStep: number = 1;
  isParticulier: boolean = true;
  constructor(private router:Router,private fb:FormBuilder,private toastr: ToastrService,private auth:AuthService,private signApi:SignUpService){}
  ngOnInit() {
    this.signinForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
      entreprise: [''], // Not making it required as it's optional
      ville: [''], // Not making it required as it's optional
      telephone: ['', Validators.required],
      type:['Professionnel']
    });
    
  }


  showWarning(message:any) {
    this.toastr.warning(message, 'Warning',{
      timeOut:3000,
      progressBar:true,
      positionClass:'toast-top-left',
    });
  }
  showSuccess(message:any) {
    this.toastr.warning(message, 'success',{
      timeOut:3000,
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
  getStepState(){
    return this.currentStep;
  }
  // Convenience getter for easy access to form fields in the template
  get f() { return this.signinForm.controls; }

  nextStep() {
    this.currentStep++;
    if(this.currentStep===2){
      const data ={email:this.signinForm.value.email};
      if(data){
        localStorage.setItem('user',JSON.stringify(data));
      }
    }
    if(this.currentStep===3){
      if(this.signinForm.value.password!==this.signinForm.value.confirmPassword){
        this.currentStep=2;
        this.showWarning('Votre mot de passe ne correspond pas!!veuillez réessayer');
      }
      const user=localStorage.getItem('user');
      if(user){
        const data = JSON.parse(user);
        data.password= this.signinForm.value.password;
        data.confirmPassword= this.signinForm.value.confirmPassword;
        localStorage.setItem('user',JSON.stringify(data));
      }
     
    }
  }

  previousStep() {
    this.currentStep--;
  }
  isValidForm(): boolean {
   return true;
  }

}
