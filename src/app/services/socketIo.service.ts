import { Injectable } from '@angular/core';

import { Observable, Observer } from 'rxjs';
import io from 'socket.io-client';

import { environment } from 'src/environments/environment';
import { Cita } from 'src/app/interfaces/Cita/cita.interface';

@Injectable({
  providedIn: 'root'
})
export class SocketIoService {

  private socket: any;

  /**
   * The constructor function is called when the class is instantiated. 
   * used to initialize the class.
   */
  constructor() {
    this.socket = io(environment.SOCKET_ENDPOINT)
  }

  /**
   * It creates an observable that emits an event when a new appointment is created.
   * @returns An Observable.
   */
  citaCreada() {
    return new Observable((observer: Observer<any>) => {
      this.socket.on('citaCreada', () => {
        observer.next('');
      });
    });
  }

  /**
   * Emit a message to the server.
   */
  emitirCitaCreada() {
    this.socket.emit("citaCreada");
  }

  /**
   * It creates an observable that emits an event when a citaCancelada event is received from the
   * server.
   * @returns An Observable.
   */
  citaCancelada() {
    return new Observable((observer: Observer<any>) => {
      this.socket.on('citaCancelada', () => {
        observer.next('');
      });
    });
  }

  /**
   * Emitting a message to the server.
   */
  emitirCitaCancelada(cita: Cita) {
    this.socket.emit("citaCancelada", cita);
  }

  visitanteLlegando() {
    return new Observable((observer: Observer<any>) => {
      this.socket.on('visitanteLlegando', (qr_code: string) => {
        console.log(qr_code);
        observer.next(qr_code);
      });
    });
  }

}
