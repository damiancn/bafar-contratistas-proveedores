import { FormGroup } from "@angular/forms";
import { Vehiculo } from 'src/app/interfaces/vehiculo/vehiculo.interface';

export class VehiculoStateModel {
  error?: any = {};
  message?: any = {};
  vehiculos: Vehiculo[] = [];
  vehiculosPorId: Vehiculo[] = [];
  vehiculosPorVisitante: FormGroup[] = [];
  // Revisar
  vehiculoActivo: object = [];
  vehiculosCargados: boolean = false;
}
