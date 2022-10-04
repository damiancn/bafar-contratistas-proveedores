import { Empleado } from "src/app/interfaces/empleado/empleado.interface";

// editar
export class empleadoSetActive {
  static  type = '[Empleado] Set Active';
  constructor(public payload: Empleado) { }
}

export class empleadoClearActiveVehiculo {
  static readonly type = '[Empleado] Clear Active Empleado';
  constructor(public payload: Empleado) { }
}

export class empleadoStartAddNew {
  static readonly type = '[Empleado] Start Add New';
  constructor(public payload: Empleado) { }
}

export class agregarNuevoEmpleado {
  static readonly type = '[Empleado] Add New';
  constructor(public payload: any) { }
}

export class empleadoUpdated {
  static readonly type = '[Empleado] Empleado Updated';
  constructor(public payload: Empleado) { }
}

export class empleadoDeleted {
  static readonly type = '[Empleado] Empleado Deleted'
  constructor(public payload: string) { }
}

export class empleadosLoaded {
  static readonly type = '[Empleado] Empleados Loaded';
  constructor(public payload: boolean) { }
}

export class removerEmpleadoActivo {
  static readonly type = '[Empleado] Remover Empleado Activo';
  constructor() { }
}

export class removeAllEmpleados {
  static readonly type = '[Empleado] Remover Empleado';
  constructor() { }
}

// remove empleado by id
export class removeEmpleadoById {
  static readonly type = '[Empleado] Remove Empleado';
  constructor(public payload: string) { }
}
