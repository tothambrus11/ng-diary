import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthService} from './auth.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {RegisterComponent} from './register/register.component';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule, MatInputModule} from '@angular/material';
import {LoginComponent} from './login/login.component';
import {MyCommonModule} from '../common/common.module';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MyCommonModule,
    MatInputModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [
    AuthService,
    HttpClient,
  ],
})
export class AuthModule {
}
