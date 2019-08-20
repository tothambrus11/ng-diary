import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {NgForm} from '@angular/forms';
import {AppError} from '../../common/app-errors/app-error';
import {UnauthorizedError} from '../../common/app-errors/UnauthorizedError';
import {UnexpectedError} from '../../common/app-errors/UnexpectedError';
import {BadInputError} from '../../common/app-errors/BadInputError';
import {Router} from '@angular/router';
import {ILoginData} from './interfaces/ILoginData';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  loginData: ILoginData;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {
    this.loginData = {
      email: '',
      password: '',
    };
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.authService.login(this.loginData)
        .subscribe((token) => {
          alert('Sikeres bejelentkezés!');
          this.router.navigateByUrl('browse');
        }, (error: AppError) => {
          if (error instanceof UnauthorizedError) {
            alert('Hibás email/jelszó');
          }
          if (error instanceof BadInputError) {
            alert('Érvénytelen adatokat adtál meg!');
          }
          if (error instanceof UnexpectedError) {
            alert('Váratlan hiba történt!');
          }
        });
    } else {
      alert('Érvénytelen adatok!');
    }
  }
}
