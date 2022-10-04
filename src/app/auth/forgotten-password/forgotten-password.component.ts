import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2';

import { AuthenticationService } from 'src/app/services/auth/authentication.service';

import { Usuario } from 'src/app/store/usuarios/usuarios.model';

@Component({
  selector: 'app-forgotten-password',
  templateUrl: './forgotten-password.component.html',
  styleUrls: ['./forgotten-password.component.css']
})
export class ForgottenPasswordComponent implements OnInit {

  public forgottenPasswordFormGroup!: FormGroup;

  @ViewChild('deleteSwal')
  public readonly deleteSwal!: SwalComponent;

  usuario: Usuario = {
    usuario: '',
    contrasena: '',
  }

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.loginBuildForm();
  }

  sendMailToResetPassword(): void {
    this.authService.sendMailToResetPassword(this.forgottenPasswordFormGroup.value)
      .subscribe(resp => {
        console.warn(resp);
        if (resp.ok === false){
          Swal.fire('Error', 'Usuario no registrado!', 'error');
        } else {
          Swal.fire('Usuario correcto', 'Se ha enviado un correo electrónico con instrucciones para restablecer su contraseña!', 'success');
          // Swal.fire('Bienvenido', 'Inicio de sesión correcto!', 'success');
          // Navegar al Dashboard
          this.router.navigateByUrl('/change-password');
        }
      }, (err) => {
        console.log(err)
        Swal.fire('Error', err.error.msg, 'error');
      })
  }

  onSubmit() {
    // console.warn(this.loginFormGroup.value);
    // this.logearUsuario();
    console.log(this.forgottenPasswordFormGroup.value)
    this.sendMailToResetPassword();
  };

  private loginBuildForm() {
    this.forgottenPasswordFormGroup = this.formBuilder.group({
      usuario: [this.usuario.usuario, [Validators.required, Validators.email]],
    });

    return this.forgottenPasswordFormGroup.value;
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
