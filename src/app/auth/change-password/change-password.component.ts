import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2';

import { AuthenticationService } from 'src/app/services/auth/authentication.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {


  @ViewChild('deleteSwal')
  public readonly deleteSwal!: SwalComponent;
  public resetPasswordFormGroup!: FormGroup;
  hidePassword = true;
  hideConfirmPassword = true;

  passwords: any = {
    password1: '',
    password2: '',
  }

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private router: Router,
  ) { }

  ngOnInit() {
    console.log(this.router.url);

    this.resetPasswordBuildForm();
  }

  resetPassword() {
    const url = this.router.url;
    const lastSegment = url.split("/").pop();

    console.log(lastSegment); // "playlist"
    this.resetPasswordFormGroup.value.token = lastSegment;

    console.log(this.resetPasswordFormGroup.value);

    console.log(this.resetPasswordFormGroup.value)
    this.authService.resetPassword(this.resetPasswordFormGroup.value)
      .subscribe(resp => {
        console.warn(resp);
        if (resp.ok === false) {
          Swal.fire('Error', 'Usuario no registrado!', 'error');
        } else {
          Swal.fire('Usuario correcto', 'Se ha reestablecido la contraseña con éxito', 'success');
          // Swal.fire('Bienvenido', 'Inicio de sesión correcto!', 'success');
          // Navegar al Login
          this.router.navigateByUrl('/login');

        }
      }, (err) => {
        console.log(err)
        Swal.fire('Error', err.error.data.errors, 'error');
      })
  }

  onSubmit() {
    // console.warn(this.loginFormGroup.value);
    // this.logearUsuario();
    console.log(this.resetPasswordFormGroup.value)
    this.resetPassword();
  };

  private resetPasswordBuildForm() {
    this.resetPasswordFormGroup = this.formBuilder.group({
      password1: [this.passwords.password1, [Validators.minLength(8), Validators.required]],
      password2: [this.passwords.password2, [Validators.minLength(8), Validators.required]],
    });

    return this.resetPasswordFormGroup.value;
  };

  public saveFile(fileName: string): void {
    // ... save file
  }

  public handleDenial(): void {
    // ... don't save file and quit
  }

  public handleDismiss(dismissMethod: string): void {
    // dismissMethod can be 'cancel', 'overlay', 'close', and 'timer'
    // ... do something
  }

}
