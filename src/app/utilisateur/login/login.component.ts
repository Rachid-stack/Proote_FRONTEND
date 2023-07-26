import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { NgxSpinnerComponent, NgxSpinnerService } from 'ngx-spinner'; // Import the NgxSpinnerService
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  showPassword: boolean = false;
  isLoggingIn=false;
  errorMessage?: string;
  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }
  constructor(private fb: FormBuilder,private spiner:NgxSpinnerService, private authService: AuthService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onLogin() {
    this.errorMessage='';
    if (this.loginForm.valid) {
      this.isLoggingIn=true;
      console.log(this.loginForm)
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;
      this.spiner.show();
      this.authService.login(email, password).subscribe(
        (response) => {
          // Handle successful login (e.g., store token and redirect to dashboard)
          console.log('Login success:', response);
          this.isLoggingIn=false;
          this.spiner.hide();
        },
        (error) => {
          // Handle login error (e.g., display error message)
          console.error('Login error:', error);
          this.isLoggingIn=false;
          this.spiner.hide();
          this.errorMessage='Mot de passe ou Email incorrect';
        }
      );
    }
  }
}
