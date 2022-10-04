import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LgEmployeesService {

  private URL_SERVICIOS?: string = undefined;

  constructor(
    private httpClient: HttpClient,
  ) {
    this.URL_SERVICIOS = environment.URL_SERVICIOS;
  }

  obtenerTodosLosLgEmployees() {
    return this.httpClient.get<any>(`${this.URL_SERVICIOS}/api/v1/lgemployees/obtener`)
      .pipe(
        catchError(this.handleError),
      );
  }

  getEmployeeFromId(idEmployees: number) {
    return this.httpClient.post<any>(`${this.URL_SERVICIOS}/api/v1/lgemployees/obtener/${idEmployees}`, { idEmployees })
    // return this.httpClient.get<any>(`${this.URL_SERVICIOS}/api/v1/lgemployees/obtener/${idEmployees}`)
      .pipe(
        catchError(this.handleError),
      );
  }

  /**
   * It returns an observable of type any, which is the result of an HTTP GET request to the
   * URL_SERVICIOS/api/v1/lgemployees/obtener/idSAP
   * @param {number} idSAP - number
   * @returns The employee data from SAP.
   */
  // obtenerLgEmployeePorIdFromSAP(idSAP: number) {
  //   return this.httpClient.get<any>(`${this.URL_SERVICIOS}/api/v1/lgemployees/obtener/${idSAP}`)
  //     .pipe(
  //       catchError(this.handleError),
  //     );
  // }

  obtenerLgEmployeePorIdFromSAP(idSAP: number) {
    // console.warn(JSON.stringify(object));
    return this.httpClient.post<any>(`${this.URL_SERVICIOS}/api/v1/lgemployees/obtener/${idSAP}/sap`, { idSAP })
    .pipe(
        catchError(this.handleError),
      );
  }

  guardarFoto(id: number, foto: string) {
    return this.httpClient.post<any>(`${this.URL_SERVICIOS}/api/v1/lgemployees/guardarFoto/${id}`, { foto })
      .pipe(
        catchError(this.handleError),
      );
  }

  guardarLgEmployee(lgEmployee: any) {
    console.warn(lgEmployee);
    return this.httpClient.post<any>(`${this.URL_SERVICIOS}/api/v1/lgemployees/insertar`, lgEmployee)
      .pipe(
        catchError(this.handleError),
      );
  }

  actualizarLgEmployee(lgEmployee: any) {
    return this.httpClient.put<any>(`${this.URL_SERVICIOS}/api/v1/lgemployees/actualizar`, lgEmployee)
      .pipe(
        catchError(this.handleError),
      );
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
        `message was: ${error.message}`
      );
      console.error(error);
    }
    // return an observable with a user-facing error message
    return throwError(
      error.error
    );
  }
}
