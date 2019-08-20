import {Component, OnInit} from '@angular/core';
import {NgForm, ValidationErrors} from '@angular/forms';
import {AuthService} from '../auth.service';
import {IRegisterData} from './interfaces/IRegisterData';
import {AppError} from '../../common/app-errors/app-error';
import {BadInputError} from '../../common/app-errors/BadInputError';
import {EmailAlreadyExistsError} from '../../common/app-errors/EmailAlreadyExistsError';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerData: IRegisterData;

  constructor(private authService: AuthService) {
    this.registerData = {
      displayName: '',
      email: '',
      password: '',
    };
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      alert('Adj meg érvényes adatokat!');
    } else {
      this.authService.register(this.registerData).subscribe(
        value => {
          alert('ok');
        },
        (error: AppError) => {
          if (error instanceof BadInputError) {
            alert('Adj meg érvényes adatokat! Most már a szerver szól!');
          } else if (error instanceof EmailAlreadyExistsError) {
            alert('emailrossz');
            form.controls.email.setErrors({takenEmail: 'Ez az email ciim már foglalt.'});

          }
        },
      );
    }
  }

  toString(errors: ValidationErrors) {
    return JSON.stringify(errors, null, '    ');
  }
}
