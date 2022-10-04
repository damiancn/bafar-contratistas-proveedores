import { Empleado } from "src/app/interfaces/empleado/empleado.interface";


export class EmpleadoStateModel {
  error?: any = {};
  message?: any = {};
  empleados: Empleado[] = [];
  empleadosDeSistema: Empleado[] = [];
  empleadoActivo?: any = {};
  empleadosCargados?: boolean = false;
}
