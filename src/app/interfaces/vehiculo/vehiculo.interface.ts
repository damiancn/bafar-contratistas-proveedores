export interface Vehiculo {
  pk_idVehiculo?: number | null,
  marca?: string | null,
  modelo?: string | null,
  anio?: string | null,
  placas?: string | null,
  observaciones?: string | null,
  activo?: Number | null,
  createdAt?: Date | null,
  updatedAt?: Date | null,
}