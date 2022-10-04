import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

import { Tag } from 'src/app/interfaces/tag/tag';
import { TagStateModel } from 'src/app/store/tags/tag.model';

@Injectable({
  providedIn: 'root'
})
export class TagsService {

  private URL_SERVICIOS: string;
  // private SOCKET_ENDPOINT: string;

  constructor(private httpClient: HttpClient) {
    this.URL_SERVICIOS = environment.URL_SERVICIOS;
    // this.SOCKET_ENDPOINT = environment.SOCKET_ENDPOINT;
  }

  fetchTags() {
    return this.httpClient.get<TagStateModel>(`${this.URL_SERVICIOS}/api/v1/tags/obtener`)
      .pipe(
        catchError(this.handleError),
      );
  }

  insertarNuevoTag(tag: Tag) {
    console.warn(tag)
    return this.httpClient.post<any>(`${this.URL_SERVICIOS}/api/v1/tag/nuevo`, tag)
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
