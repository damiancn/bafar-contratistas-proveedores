import { Persona } from 'src/app/interfaces/Persona/persona.model';

export class CitaStateModel {
  error?: any = {};
  message?: any = {};
  citas: Cita[] = [];
  citaActiva: [] = [];
  citaConVisitantes: [] = [];
  citasCargadas: boolean = false;
}

export interface Cita extends Persona {
  pk_idCita?: number | null,
  fk_idMotivoVisita?: number | null,
  fk_idVehiculo?: number | null,
  fk_idAnfitrion?: number | null,
  fechaHoraInicio?: string | null,
  tiempoVisita?: number | null,
  fechaHoraFin?: Date | null,
  comentariosAcceso?: string | null,
  activo?: number | null,
  createdAt?: Date | null,
  updatedAt?: Date | null,
}