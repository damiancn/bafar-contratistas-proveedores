import { Vehiculo } from 'src/app/interfaces/vehiculo/vehiculo.interface';

export interface Persona extends Vehiculo {
  pk_idPersona?: number | null,
  fk_idTipoUsuario?: number | null,
  fk_idEmpresa?: number | null,
  nombreCompleto?: string | null,
  nombre?: string | null,
  apellidoPaterno?: string,
  apellidoMaterno?: string | null,
  celular?: string | null,
  correo?: string | null,
  numeroIdentificacion?: string | null,
  createdAt?: Date | null,
  updatedAt?: Date | null,
}