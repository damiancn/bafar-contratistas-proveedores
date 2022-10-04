import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DocumentosService {

  /* A private variable that is used to store the URL of the server. */
  private URL_SERVICIOS!: string;

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

  // * Base 64
  // saveDocument(base64File: string) {
  //   console.warn(base64File)
  //   return this.httpClient.post(`${this.URL_SERVICIOS}/api/v1/documentos/nuevo`, [base64File],
  //     {
  //       responseType: 'arraybuffer'
  //     })
  //     .pipe(
  //       catchError(this.handleError),
  //     );
  // }

  // * FormData
  saveDocument(file: any) {
    const formData: FormData = new FormData();

    formData.append('pagoImss', file)
    console.warn(file)
    return this.httpClient.post(`${this.URL_SERVICIOS}/api/v1/documentos/nuevo`, formData)
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
