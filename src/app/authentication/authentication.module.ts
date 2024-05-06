import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { SignInComponent } from './Pages/sign-in/sign-in.component';
import { SignUpComponent } from './Pages/sign-up/sign-up.component';
import { ForgotpasswordComponent } from './Pages/forgotpassword/forgotpassword.component';


@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
    ForgotpasswordComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule
  ]
})
export class AuthenticationModule { }
