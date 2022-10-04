import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { AuthenticationService } from 'src/app/services/auth/authentication.service';
import { Usuario } from 'src/app/store/usuarios/usuarios.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginFormGroup!: FormGroup;

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

  logearUsuario(): void {
    this.authService.login(this.loginFormGroup.value)
      .subscribe({
        next: (resp) => {
          console.warn("🚀 ~ file: login.component.ts ~ line 39 ~ LoginComponent ~ logearUsuario ~ resp", resp)
          if (resp.msg! === 'Contraseña no válida') {
            // Swal.fire('Error', 'Contraseña no válida!', 'error');
            Swal.fire('Error', 'Usuario y/o contraseña incorrectos!', 'error');
          } else if (resp.ok === false) {
            Swal.fire('Error', 'Usuario y/o contraseña incorrectos!', 'error');
          } else {
            // this.router.navigateByUrl('/');
            Swal.fire('Bienvenido', 'Inicio de sesión correcto!', 'success');
            // console.log('navegar');
            this.router.navigateByUrl('/home/registro');
          }
        },
        error: (errorMessage) => {
          console.log(errorMessage)
          Swal.fire('Error', errorMessage.error.msg, 'error');
        },
        complete: () => {
          // this.router.navigateByUrl('/agenda');
        },
      }
        //   resp => {
        //   console.warn("🚀 ~ file: login.component.ts ~ line 39 ~ LoginComponent ~ logearUsuario ~ resp", resp)
        //   if (resp.msg! === 'Contraseña no válida') {
        //     Swal.fire('Error', 'Contraseña no válida!', 'error');
        //   } else if (resp.ok === false) {
        //     Swal.fire('Error', 'Usuario y/o contraseña incorrectos!', 'error');
        //   } else {
        //     Swal.fire('Bienvenido', 'Inicio de sesión correcto!', 'success');
        //     // console.log('navegar');
        //     // this.router.navigateByUrl('/');
        //   }
        // }, (err) => {
        //   console.log(err)
        //   Swal.fire('Error', err.error.msg, 'error');
      );
  }

  onSubmit() {
    // console.warn(this.loginFormGroup.value);
    this.logearUsuario();
  };

  private loginBuildForm() {
    this.loginFormGroup = this.formBuilder.group({
      usuario: [this.usuario.usuario, [Validators.required, Validators.email]],
      contrasena: [this.usuario.contrasena, [Validators.required, Validators.minLength(5)]]
    });

    return this.loginFormGroup.value;
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
