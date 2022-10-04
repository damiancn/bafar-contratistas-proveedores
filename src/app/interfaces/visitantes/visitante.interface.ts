import { Persona } from 'src/app/interfaces/Persona/persona.model';

export interface Visitante extends Persona {
  pk_idVisitante?: number | null,
  fk_idPersona?: number | null,
  fk_idUsuarioRegistro?: number | null,
  codigo?: string | null,
  createdAt?: Date | null,
  updatedAt?: Date | null,
}
