import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent {
  isLoginMode: boolean = true;
  isLoading: boolean = false;
  error: string = null;

  constructor(private authService: AuthService) {}
  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onLogin(form: NgForm) {
    // console.log(form.value);
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    this.isLoading = true;
    if (this.isLoginMode) {
      //
    } else {
      this.authService.signup(email, password).subscribe(
        (res) => {
          console.log(res);
          this.isLoading = false;
        },
        (errResponse) => {
          this.error = errResponse;
          this.isLoading = false;
          // switch(errResponse.error.error.message) {
          //   case 'EMAIL_EXISTS':
          //     this.error = 'Email already exists!';
          //     break;
          //   default:
          //     this.error = 'An error occurred!';
          //     break;
        
        }
      );
    }
    form.reset();
  }
}
