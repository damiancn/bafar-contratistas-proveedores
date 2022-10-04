import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

import { Persona } from 'src/app/interfaces/Persona/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  private URL_SERVICIOS?: string = undefined;

  constructor(private httpClient: HttpClient) {
    this.URL_SERVICIOS = environment.URL_SERVICIOS;
  }

  fetchPersonas() {
    return this.httpClient.get<Persona>(`${this.URL_SERVICIOS}/api/v1/personas/obtener`)
      .pipe(
        catchError(this.handleError),
      );
  }

  obtenerTodosLosVisitantesConCitaDelDia() {
    return this.httpClient.get<any>(`${this.URL_SERVICIOS}/api/v1/personas/obtenerTodosLosVisitantesConCitaDelDia`)
      .pipe(
        catchError(this.handleError),
      );
  }

  obtenerTodosLosEmpleados() {
    return this.httpClient.get<any>(`${this.URL_SERVICIOS}/api/v1/personas/obtenerTodosLosEmpleados`)
      .pipe(
        catchError(this.handleError),
      );
  }

  obtenerTodosLosVisitantesConCitasPorFechaInicioYFechaFin(fechas: any) {
    return this.httpClient.get<any>(`${this.URL_SERVICIOS}/api/v1/personas/obtenerTodosLosVisitantesConCitasPorFechaInicioYFechaFin`, {
      params: fechas
    })
      .pipe(
        catchError(this.handleError),
      );
  }

  fetchPersonasPorTipoUsuarioEmpleado() {
    return this.httpClient.get<any>(`${this.URL_SERVICIOS}/api/v1/personas/obtenerPersonasPorTipoUsuarioEmpleado`)
      .pipe(
        catchError(this.handleError),
      );
  }

  insertarNuevaPersona(nuevaPersona: Persona) {
    console.warn(nuevaPersona)
    return this.httpClient.post<any>(`${this.URL_SERVICIOS}/api/v1/personas/nueva`, nuevaPersona)
      .pipe(
        catchError(this.handleError),
      );
  }

  actualizarPersona(persona: any) {
    console.warn(persona);
    return this.httpClient.put<any>(`${this.URL_SERVICIOS}/api/v1/personas/actualizar`, persona)
      .pipe(
        catchError(this.handleError),
      );
  }

  // actualizarFotoDePersona(persona: any) {
  //   console.warn(persona);
  //   return this.httpClient.put<any>(`${this.URL_SERVICIOS}/api/v1/personas/foto-perfil`, persona)
  //     .pipe(
  //       catchError(this.handleError),
  //     );
  // }

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
