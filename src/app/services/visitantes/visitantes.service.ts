import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { VisitanteStateModel } from 'src/app/store/visitantes/visitantes.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class VisitantesService {

  private URL_SERVICIOS: string;
  // private SOCKET_ENDPOINT: string;

  constructor(private httpClient: HttpClient) {
    this.URL_SERVICIOS = environment.URL_SERVICIOS;
    // this.SOCKET_ENDPOINT = environment.SOCKET_ENDPOINT;
  }

  obtenerVisitantes() {
    console.warn('Entrando a [visiatnes.service (obtenerVisitantes())] para obtener los visitantes');
    return this.httpClient.get<VisitanteStateModel>(`${this.URL_SERVICIOS}/api/v1/visitantes/obtener`)
      .pipe(
        catchError(this.handleError),
      );
  }

  /**
   * 
   * @returns visitante filtrado por correo
   */
  obtenerVisitantesPorCorreo() {
    return this.httpClient.get<VisitanteStateModel>(`${this.URL_SERVICIOS}/api/v1/visitantes/visitantePorCorreo/obtener`)
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
        `message was: ${error.error.message}`
      );
    }
    // return an observable with a user-facing error message
    return throwError( () => {
      console.error(error);
      console.error(error.error.message);
    }
    );
  }
}
