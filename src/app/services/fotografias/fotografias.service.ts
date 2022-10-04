import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Empleado } from 'src/app/interfaces/empleado/empleado.interface';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FotografiasService {

  /* A private variable that is used to store the URL of the server. */
  private URL_SERVICIOS: string;

  /**
   * The constructor function is a special function that is called when an instance of a class is
   * created. 
   * The constructor function is used to initialize the instance. 
   * The constructor function is called automatically when you create a new instance of a class
   * @param {HttpClient} httpClient - The HttpClient is a built-in Angular service for making HTTP
   * requests.
   */
  constructor(private httpClient: HttpClient) {
    this.URL_SERVICIOS = environment.URL_SERVICIOS;
  }

  //  ! ERROR CON CORS:
  /**
   * It takes a URL of a photo and returns a base64 string of the photo.
   * @param {string} rutaFotoURL - string
   * @returns The observable is returning an array of objects.
   */
  urlToBase64(rutaFotoURL: string): Observable<any> {
    console.log(rutaFotoURL)
    return this.httpClient.get<any>(rutaFotoURL)
      .pipe(
        catchError(this.handleError),
      );
  }

  /**
   * @param {any} rutaFotoURL - the URL of the image to be sent to the server.
   * @returns The observable is returning an array of objects.
   */
  _SendToServerURLToBase64(rutaFotoURL: any): Observable<any> {
    return this.httpClient.post(`${this.URL_SERVICIOS}/api/v1/fotografias/foto-url`, [rutaFotoURL])
      .pipe(
        catchError(this.handleError),
      );
  }

  /**
   * Send the form group and the type of photo to the server
   * @param {FormGroup} citaFormGroup - FormGroup
   * @param {string} tipoFoto - string
   * @returns The observable is being returned.
   */
  _SendToServerToSnap(citaFormGroup: FormGroup, tipoFoto: string): Observable<any> {
    return this.httpClient.post(`${this.URL_SERVICIOS}/api/v1/snap/camara-ip`, [citaFormGroup, { tipoFoto }])
      .pipe(
        catchError(this.handleError),
      );
  }

  /**
   * It returns a stream of data from the server.
   * @param {any} rutaP - The object that contains the parameters for the request.
   * @returns The observable is returning a blob.
   */
  obtenerFotografiaP(rutaP: any) {
    console.warn("🚀 ~ file: fotografias.service.ts ~ line 75 ~ FotografiasService ~ obtenerFotografiaP ~ rutaP", rutaP)
    return this.httpClient.get(`${this.URL_SERVICIOS}/api/v1/fotografias/foto-p`, {
      params: {
        rutaP
      },
      responseType: 'blob'
    })
      .pipe(
        catchError(this.handleError),
      );
  }

  /**
   * It returns a stream of data from the server.
   * @param {any} rutaI - any
   * @returns The observable of http response. This is very similar to the response observable you
   * might have seen in the past.
   */
  obtenerFotografiaI(rutaI: any) {
    console.warn("🚀 ~ file: fotografias.service.ts ~ line 94 ~ FotografiasService ~ obtenerFotografiaI ~ rutaI", rutaI)
    return this.httpClient.get(`${this.URL_SERVICIOS}/api/v1/fotografias/foto-i`, {
      params: {
        rutaI
      },
      responseType: 'blob'
    })
      .pipe(
        catchError(this.handleError),
      );
  }

  /**
   * It updates the photo of the user.
   * @param {any} usuarioActivo - any
   * @returns The observable of http.put() returns an Observable of the body of the response.
   */
   updateProfilePicture(usuarioActivo: any) {
    console.warn(usuarioActivo);
    return this.httpClient.put<any>(`${this.URL_SERVICIOS}/api/v1/fotografias/fotos`, [usuarioActivo])
      .pipe(
        catchError(this.handleError),
      );
  }

  /**
   * It updates the photo of the person.
   * @param {any} citaActiva - any
   * @returns The observable of http.put() returns an Observable of tzhe body of the response.
   */
  actualizarFotoDePersona(citaActiva: any) {
    console.warn(citaActiva);
    return this.httpClient.put<any>(`${this.URL_SERVICIOS}/api/v1/fotografias/fotos`, [citaActiva])
      .pipe(
        catchError(this.handleError),
      );
  }

  /**
   * Update photo of the employee.
   * 
   */
  actualizarFotoDeEmpleado(employee: Empleado) {
    console.warn(employee);
    return this.httpClient.put<any>(`${this.URL_SERVICIOS}/api/v1/fotografias/foto-empleado`, employee, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }),

    })
      .pipe(
        catchError(this.handleError),
      );
  }

  getFrontLabelTag(employee: any) {
    return this.httpClient.get(`${this.URL_SERVICIOS}/api/v1/fotografias/employee/tag/front-label`, {
      params: employee,
      responseType: 'blob'
    })
      .pipe(
        catchError(this.handleError),
      );
  }

  getBackLabelTag(employee: any) {
    return this.httpClient.get(`${this.URL_SERVICIOS}/api/v1/fotografias/employee/tag/back-label`, {
      params: employee,
      responseType: 'blob'
    })
      .pipe(
        catchError(this.handleError),
      );
  }

  /* A method that is called when an error occurs. */
  private handleError(error: HttpErrorResponse) {
    /* Checking if the error is an instance of ErrorEvent. */
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      /* Logging the error message to the console. */
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      /* Logging the error message to the console. */
      console.error(
        `Backend returned code ${error.status}, ` +
        `message was: ${error.message}`
      );
    }
    // return an observable with a user-facing error message
    /* Returning an observable that will emit an error. */
    return throwError(
      error.error
    );
  }
}