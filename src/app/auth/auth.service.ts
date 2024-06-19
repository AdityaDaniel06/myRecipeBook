import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}

  errorMessage: string;
  signup(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC-vVZgY7H73_Ti6mtnZ9btekk2NNpV_wc',
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(
        catchError((errResponse) => {
          this.errorMessage = 'errResponse.error.error.message';
          if(!errResponse.error || errResponse.error.error){
            return throwError(this.errorMessage)
          }
          switch (errResponse.error.error.message) {
            case 'EMAIL_EXISTS':
              this.errorMessage = 'Email already exists!';
              break;
            case 'INVALID_PASSWORD':
              this.errorMessage = 'Invalid password!';
              break;
            default:
              this.errorMessage = 'An error occurred!';
              break;
          }
          return throwError(this.errorMessage);
        })
      );
  }
}
