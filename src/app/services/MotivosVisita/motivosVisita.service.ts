import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

import { Cat_motivo_visita } from 'src/app/interfaces/MotivosVisita/motivosVisita.model';
import { MotivosVisitaStateModel } from 'src/app/store/motivosVisita/motivosVisita.model';

@Injectable({
  providedIn: 'root'
})

export class MotivosVisitaService {

  private URL_SERVICIOS: string;

  constructor(
    private httpClient: HttpClient,
  ) {
    this.URL_SERVICIOS = environment.URL_SERVICIOS;
  }

  fetchMotivosVisita() {
    return this.httpClient.get<MotivosVisitaStateModel>(`${this.URL_SERVICIOS}/api/v1/motivosVisita/get`)
      .pipe(
        catchError(this.handleError),
      );
  }

  insertarMotivoVisita(motivoVisita: Cat_motivo_visita) {
    return this.httpClient.post<any>(`${this.URL_SERVICIOS}/api/v1/motivosVisita/new`, motivoVisita)
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
        `message was: ${error.error.message}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      error.error.message);
  }
}
