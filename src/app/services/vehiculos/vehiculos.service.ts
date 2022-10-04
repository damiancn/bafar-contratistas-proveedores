import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Vehiculo } from 'src/app/interfaces/vehiculo/vehiculo.interface';
import { VehiculoStateModel } from 'src/app/store/vehiculos/vehiculos.model';

// import { Visitante } from 'src/app/interfaces/visitantes/visitante.interface';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})

export class VehiculosService {

  private URL_SERVICIOS: string;
  // private SOCKET_ENDPOINT: string;

  constructor(private httpClient: HttpClient) {
    this.URL_SERVICIOS = environment.URL_SERVICIOS;
    // this.SOCKET_ENDPOINT = environment.SOCKET_ENDPOINT;
  }

  traerVehiculos() {
    return this.httpClient.get<VehiculoStateModel>(`${this.URL_SERVICIOS}/api/v1/vehiculos/obtener`)
      .pipe(
        catchError(this.handleError),
      );
  }

  traerVehiculosPorIdPersona(pk_idPersona: any) {
    return this.httpClient.get<any>(`${this.URL_SERVICIOS}/api/v1/vehiculos/obtenerVehiculosPorPersona/${pk_idPersona}`)
      .pipe(
        catchError(this.handleError),
      );
  }

  insertarVehiculo(vehiculo: Vehiculo, visitanteActivo: any) {
    console.log('Entrando a VehiculoService [ insertarVehiculo() ]...')
    console.log('Vehiculo en service', vehiculo)
    return this.httpClient.post<any>(`${this.URL_SERVICIOS}/api/v1/vehiculos/nuevo`, {
      vehiculo,
      visitanteActivo
    })
      .pipe(
        catchError(this.handleError),
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.error}, ` +
        `message was: ${error.message}`
      );
    }
    // return an observable with a user-facing error message
    return throwError(
      error.error.message
    );
  }
}
