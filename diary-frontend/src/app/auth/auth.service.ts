import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {catchError, map} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import {UnauthorizedError} from '../common/app-errors/UnauthorizedError';
import {UnexpectedError} from '../common/app-errors/UnexpectedError';
import {BadInputError} from '../common/app-errors/BadInputError';
import {ILoginData} from './login/interfaces/ILoginData';
import {IRegisterData} from './register/interfaces/IRegisterData';
import {EmailAlreadyExistsError} from '../common/app-errors/EmailAlreadyExistsError';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  login(loginData: ILoginData) {
    return this.http.post(environment.serverURI + 'auth/login', loginData)
      .pipe(map(
        (response: { token?: string }) => {
          if (response && response.token) {
            localStorage.setItem('token', response.token);
            return true;
          } else {
            return throwError(new UnexpectedError());
          }
        }))
      .pipe(catchError((err: HttpErrorResponse) => {
        if (err.status === 401) {
          return throwError(new UnauthorizedError(err));
        } else if (err.status === 400) {
          return throwError(new BadInputError(err));
        } else {
          return throwError(new UnexpectedError(err));
        }
      }));
  }

  register(registerData: IRegisterData): Observable<object> {
    return this.http.post(environment.serverURI + 'auth/register', registerData)
      .pipe(catchError(((err: HttpErrorResponse) => {
        if (err.status === 400) {
          alert(JSON.stringify(err));
          if (err.error.message === 'email_already_exists') {
            return throwError(new EmailAlreadyExistsError(err));
          }
          return throwError(new BadInputError(err));
        }
        return throwError(new UnexpectedError(err));
      })));
  }

  isLoggedIn() {
    return true; // tokenNotExpired();
  }
}
