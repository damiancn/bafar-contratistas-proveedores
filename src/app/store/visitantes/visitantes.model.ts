import { Visitante } from "src/app/interfaces/visitantes/visitante.interface";

export class VisitanteStateModel {
  error?: any = {};
  message?: any = {};
  visitantes: Visitante[] = [];
  visitantesConCitaDelDia: Visitante[] = [];
  visitanteActivo?: any = {};
  visitantesCargados?: boolean = false;
}
