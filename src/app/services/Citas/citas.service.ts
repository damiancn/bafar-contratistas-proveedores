import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Cita } from 'src/app/interfaces/Cita/cita.interface';
import { CitaStateModel } from 'src/app/store/citas/cita.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class CitasService {

  private URL_SERVICIOS: string;

  private socket: any;

  constructor(
    private httpClient: HttpClient,
  ) {
    this.URL_SERVICIOS = environment.URL_SERVICIOS;
  }

  /**
   * It returns an Observable of type CitaStateModel.
   * @returns The observable of the CitaStateModel.
   */
  traerCitas() {
    return this.httpClient.get<CitaStateModel>(`${this.URL_SERVICIOS}/api/v1/citas/obtener`)
      .pipe(
        catchError(this.handleError),
      );
  }

  /**
   * It returns an Observable of type CitaStateModel.
   * @param {number} idPersona - The id of the user whose appointments you want to retrieve.
   * @returns The method returns an Observable of type CitaStateModel.
   */
  fetchCitasPorIdPersona(idPersona: number) {
    console.log(idPersona)
    return this.httpClient.get<CitaStateModel>(`${this.URL_SERVICIOS}/api/v1/citas/obtenerCitasPorIdUsuario/${idPersona}`)
      .pipe(
        catchError(this.handleError),
      );
  }

  /**
   * This function returns a CitaStateModel object
   * @param {any} cita - The primary key of the appointment.
   * @returns The CitaStateModel
   */
  obtenerCitaConAcompanantes(cita: any) {
    return this.httpClient.get<CitaStateModel>(`${this.URL_SERVICIOS}/api/v1/citas/obtenerCitaConVisitantes`, {
      params: cita
    })
      .pipe(
        catchError(this.handleError),
      );
  }

  /**
   * This function returns an array of all the appointment that matches the given person's name'
   * @param {any} cita - The primary key of the appointment.
   * @returns The CitaStateModel
   */
  obtenerCitasPorNombreVisitante(cita: any) {
    return this.httpClient.get<CitaStateModel>(`${this.URL_SERVICIOS}/api/v1/citas/obtenerCitaPorNombreVisitante`, {
      params: cita
    })
      .pipe(
        catchError(this.handleError),
      );
  }

  /**
   * This function returns an array of all the appointment that matches the given company's name
   * @param {any} empresa - The primary key of the appointment.
   * @returns The CitaStateModel
   */
  obtenerCitasPorNombreEmpresa(empresa: any) {
    return this.httpClient.get<CitaStateModel>(`${this.URL_SERVICIOS}/api/v1/citas/obtenerCitasPorNombreEmpresa`, {
      params: empresa
    })
      .pipe(
        catchError(this.handleError),
      );
  }

  /**
   * It returns a list of appointments for a given date.
   * @param {string} fecha - string
   * @returns The return type is a `CitaStateModel` which is an object that contains the following
   * properties:
   */
  obtenerCitasPorFecha(fecha: string) {
    return this.httpClient.get<CitaStateModel>(`${this.URL_SERVICIOS}/api/v1/citas/obtenerCitasPorFecha/${fecha}`)
      .pipe(
        catchError(this.handleError),
      );
  }

  /**
   * It returns a list of appointments for a given date and host.
   * @param {string} fecha - string, idAnfitrion: string
   * @param {string} idAnfitrion - The id of the host.
   * @returns The method returns an Observable of type CitaStateModel.
   */
  obtenerCitasPorFechaYAnfitrion(fecha: string, idAnfitrion: string) {
    return this.httpClient.get<CitaStateModel>(`${this.URL_SERVICIOS}/api/v1/citas/obtenerCitasPorFechaYAnfitrion/${idAnfitrion}/${fecha}`)
      .pipe(
        catchError(this.handleError),
      );
  }

  /**
   * It gets all the appointments that are between the start and end dates.
   * @param {any} fechas - {
   * @returns The method returns a `CitaStateModel` object.
   */
  obtenerCitasPorFechaInicioYFechaFin(fechas: any) {
    return this.httpClient.get<CitaStateModel>(`${this.URL_SERVICIOS}/api/v1/citas/obtenerCitasPorFechaInicioYFechaFin`, {
      params: fechas
    })
      .pipe(
        catchError(this.handleError),
      );
  }

  /**
   * This function returns a list of all the active appointments
   * @param {any} cita - any
   * @returns The response of the request.
   */
  obtenerCitasPorId(cita: any) {
    // console.warn(cita)
    return this.httpClient.get<any>(`${this.URL_SERVICIOS}/api/v1/citas/citaActiva`, {
      params: cita
    }).pipe(
      catchError(this.handleError),
    );
  }

  /**
   * Insert a new appointment into the database
   * @param {any} cita - any
   * @returns The observable of the HTTP response.
   */
  insertarCita(cita: any) {
    return this.httpClient.post<Cita>(`${this.URL_SERVICIOS}/api/v1/citas/nueva`, cita)
      .pipe(
        catchError(this.handleError),
      );
  }

  /**
   * It creates a new visit and saves it to the database.
   * @param {any} cita - any
   * @returns The observable of the http request.
   */
  guardarVisita(cita: any) {
    return this.httpClient.post<Cita>(`${this.URL_SERVICIOS}/api/v1/citas/nueva-visita`, cita)
      .pipe(
        catchError(this.handleError),
      );
  }

  asignarAcompanante(cita: any) {
    return this.httpClient.post<Cita>(`${this.URL_SERVICIOS}/api/v1/citas/asignar-acompanante`, cita)
      .pipe(
        catchError(this.handleError),
      );
  }

  /**
   * It updates a Cita.
   * @param {any} body - any
   * @returns The observable of http.put() returns an Observable of the response, in this case an
   * instance of Cita.
   */
  actualizarCita(body: any) {
    return this.httpClient.put<Cita>(`${this.URL_SERVICIOS}/api/v1/citas/actualizar`, body)
      .pipe(
        catchError(this.handleError),
      );
  }

  /**
   * It updates the date and time of a specific appointment.
   * @param {any} body - any
   * @returns The observable of http.put() returns an Observable of the body of the response.
   */
  actualizarFechaHoraCita(body: any) {
    console.log(body)
    return this.httpClient.put<Cita>(`${this.URL_SERVICIOS}/api/v1/citas/actualizar-fecha-hora`, body)
      .pipe(
        catchError(this.handleError),
      );
  }

  /**
   * It cancels a cita.
   * @param {any} cita - The Cita object that we want to cancel.
   * @returns The observable of the HTTP response.
   */
  cancelarCita(cita: any) {
    return this.httpClient.put<Cita>(`${this.URL_SERVICIOS}/api/v1/citas/cancelar-cita`, cita)
      .pipe(
        catchError(this.handleError),
      );
  }

  /**
   * It assigns a tag to a given appointment.
   * @param {any} cita - any
   * @returns The response of the request.
   */
  asignarTag(cita: any) {
    return this.httpClient.put<any>(`${this.URL_SERVICIOS}/api/v1/citas/asignar-tag`, cita)
      .pipe(
        catchError(this.handleError),
      );
  }

  /**
   * It unassigns a tag to a given appointment.
   * @param {any} cita - any
   * @returns The response of the request.
   */
  desasignarTag(cita: any) {
    return this.httpClient.put<any>(`${this.URL_SERVICIOS}/api/v1/citas/desasignar-tag`, cita)
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
        `message was: ${error.message}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      error.error.message);
  }
}
