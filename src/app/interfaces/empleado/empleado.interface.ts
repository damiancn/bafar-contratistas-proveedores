import { Area } from "src/app/interfaces/area/area.interface";

export interface Empleado {
  Id?: number | null,
  idEmployees?: number | null,
  NumCard?: string | null,
  Name?: string | null,
  enfermeria?: boolean | null,
  otro?: boolean | null,
  photo?: string | null,
  Status?: string | null,
  createdAt?: Date | null,
  updatedAt?: Date | null,
  areas?: [Area?] | null,

  dateOfEntryEmployee?: string | null,
  noIMSSEmployee?: string | null,
  puestoEmployee?: string | null,
  areaEmployee?: string | null,
  serialNumberEmployee?: string | null,
  noLabelEmployee?: string | null,
  modelEmployee?: string | null,
  WorkStation?: string | null,
}