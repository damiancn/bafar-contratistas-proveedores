import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ResponseFromSAP } from 'src/app/interfaces/empleado/empleadoDelSAP';


@Injectable({
  providedIn: 'root'
})
export class SapServiceService {

  // private URL_SAP = 'http://svgwpap0.grupobafar.com:8000/neptune/api/Control/Acceso' // URL produccion
  // private URL_SAP = "http://svgwdap0.grupobafar.com:8000/neptune/api/Control/Acceso"
  private URL_SAP = 'http://localhost:64900'
  private options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa("SY_USERCA:Inicio.01")
    })
  }

  constructor(
    private httpClient: HttpClient,
  ) { }

  getEmployeeInfoFromSAP(body: any) {
    return this.httpClient.post(`${this.URL_SAP}`, body, this.options)
      .pipe(
        catchError(this.handleError),
      );
  }

  obtenerLgEmployeePorIdFromSAP(body: any) {
    return this.httpClient.post<ResponseFromSAP>(`${this.URL_SAP}/api/v1/lgemployees/obtener/925`, body)
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
