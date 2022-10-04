import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

// import { Usuario } from 'src/app/store/usuarios/usuarios.model';
import { Usuario } from 'src/app/store/usuarios/usuarios.model';
import { FormGroup } from '@angular/forms';
import { usuarioSetActive } from 'src/app/store/usuarios/usuarios.action';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private URL_SERVICIOS: string;
  public usuario?: Usuario = undefined;

  get token(): any {
    return localStorage.getItem('token');
  }

  constructor(
    private http: HttpClient,
    private router: Router,
    private store: Store,
  ) {
    this.URL_SERVICIOS = environment.URL_SERVICIOS;
  }

  login(datosLogin: FormGroup): Observable<any> {
    return this.http.post<any>(`${this.URL_SERVICIOS}/api/v1/auth/sign-in`, datosLogin)
      .pipe(
        tap(resp => {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          // console.warn(resp);
          if (resp.ok) {
            localStorage.setItem('token', resp.token);
            localStorage.setItem('role', resp.usuario.permisos);
            this.usuario = resp.usuario;

            this.establecerUsuarioActivoEnStore(resp.usuario)
            this.router.navigateByUrl('/home');
          }
          return resp;
        }));
  }

  validarToken(): Observable<boolean> {
    const token = localStorage.getItem('token') || '';
    // console.warn("🚀 ~ file: authentication.service.ts ~ line 53 ~ AuthenticationService ~ validarToken ~ token", token)

    // console.warn(token);

    if (token.length === 0) {
      this.router.navigateByUrl('/login');
      // map(resp => false)
    }

    return this.http.get(`${this.URL_SERVICIOS}/api/v1/auth/renew`, {
      headers: {
        'x-token': token
      }
    }).pipe(
      tap((resp: any) => {
        this.usuario = resp.usuario;
        localStorage.setItem('token', resp.token);
        localStorage.setItem('role', resp.usuario[0].permisos)
        this.establecerUsuarioActivoEnStore(resp.usuario[0]);
        return resp.usuario;
      }),
      map(resp => true),
      catchError(error => of(false))
    );
  }

  logout() {
    // remove user from local storage and set current user to null
    this.router.navigateByUrl('/login');
    localStorage.removeItem('token');
    localStorage.removeItem('role');
  }

  establecerUsuarioActivoEnStore(usuario: any): any {
    this.store.dispatch(new usuarioSetActive(usuario));
  }

  /**
   * ! fiXME:  This function is not used.
   * ? PASAR LOS DATOS DEL FORMULARIO (password y confirmPassword) A LA FUNCION RESET PASSWORD
   * The resetPassword function takes a user object as an argument and returns an Observable of type
   * any. 
   * The function then uses the HttpClient.post method to send a post request to the API. 
   * The API endpoint is /api/v1/auth/reset-password. 
   * The function then uses the tap operator to log the response to the console. 
   * The function then returns the user object
   * @param {any} user - any
   * @returns The observable is returning the user object.
   */
  resetPassword(passwords: any = {}): Observable<any> {
    return this.http.post<any>(`${this.URL_SERVICIOS}/api/v1/auth/reset-password`, passwords)
      .pipe(
        tap(resp => {
          console.log(resp);
          // store user details and jwt token in local storage to keep user logged in between page refreshes

          // localStorage.setItem('token', user.token);
          // localStorage.setItem('role', user.usuario.permisos);
          // this.usuario = user.usuario;
          return resp;
        }));
  }

  sendMailToResetPassword(user: any): Observable<any> {
    return this.http.post<any>(`${this.URL_SERVICIOS}/api/v1/auth/request-password`, user)
      .pipe(
        tap(resp => {
          console.warn(resp);
          // store user details and jwt token in local storage to keep user logged in between page refreshes

          localStorage.setItem('token', resp.token);
          // localStorage.setItem('role', user.usuario.permisos);
          // this.usuario = user.usuario;
          return user;
        }));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `message was: ${error.message}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      error.error.message);
  }
}