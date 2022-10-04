import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AreasService {

  private URL_SERVICIOS?: string = undefined;

  constructor(
    private httpClient: HttpClient,
  ) {
    this.URL_SERVICIOS = environment.URL_SERVICIOS;
  }
  
  obtenerTodasLasAreas() {
    return this.httpClient.get<any>(`${this.URL_SERVICIOS}/api/v1/areas/obtener`)
      .pipe(
        catchError(this.handleError),
      );
  }

  obtenerAreaPorId(id: number) {
    return this.httpClient.get<any>(`${this.URL_SERVICIOS}/api/v1/areas/obtener/${id}`)
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
