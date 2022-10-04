import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { ChangePasswordComponent } from 'src/app/auth/change-password/change-password.component';
import { ForgottenPasswordComponent } from 'src/app/auth/forgotten-password/forgotten-password.component';
import { LoginComponent } from 'src/app/auth/login/login.component';
import { RegisterComponent } from 'src/app/auth/register/register.component';
import { PagesModule } from 'src/app/Pages/pages.module';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgottenPasswordComponent,
    ChangePasswordComponent
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    PagesModule,
    ReactiveFormsModule,
    HttpClientModule,

    /**
     * Material Module
     */
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    
  ]
})
export class AuthModule { }
