import { Cat_motivo_visita } from "src/app/interfaces/MotivosVisita/motivosVisita.model";

export class MotivosVisitaStateModel {
  motivosVisita: Cat_motivo_visita[] = [];

  error?: any = {};
  message?: any = {};

  activeMotivoVisita?: boolean;
  motivosVisitaLoaded?: boolean;
}
