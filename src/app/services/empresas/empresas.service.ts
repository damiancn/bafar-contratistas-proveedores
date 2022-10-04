import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

import { Empresa } from 'src/app/interfaces/empresa/empresa.interface';
import { EmpresaStateModel } from 'src/app/store/empresas/empresa.model';

@Injectable({
  providedIn: 'root',
})
export class EmpresasService {

  private URL_SERVICIOS: string;
  // private SOCKET_ENDPOINT: string;

  constructor(private httpClient: HttpClient) {
    this.URL_SERVICIOS = environment.URL_SERVICIOS;
    // this.SOCKET_ENDPOINT = environment.SOCKET_ENDPOINT;
  }

  fetchEmpresas() {
    return this.httpClient.get<EmpresaStateModel>(`${this.URL_SERVICIOS}/api/v1/empresas/obtener`)
      .pipe(
        catchError(this.handleError),
      );
  }

  insertarNuevaEmpresa(nuevaEmpresa: Empresa) {
    return this.httpClient.post<any>(`${this.URL_SERVICIOS}/api/v1/empresas/nueva`, nuevaEmpresa)
      .pipe(
        catchError(this.handleError),
      );
  }

  obtenerTodasLasEmpresasConCitaDelDia() {
    return this.httpClient.get<any>(`${this.URL_SERVICIOS}/api/v1/empresas/obtenerTodasLasEmpresasConCitaDelDia`)
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
    }
    // return an observable with a user-facing error message
    return throwError(
      error.error
    );
  }
}
