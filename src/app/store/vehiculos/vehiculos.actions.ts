import { FormGroup } from '@angular/forms';
import { Vehiculo } from 'src/app/interfaces/vehiculo/vehiculo.interface';

// editar
export class vehiculoSetActive {
  static readonly type = '[Vehiculo] Set Active';
  constructor(public payload: Vehiculo) { }
}

export class vehiculoClearActiveVehiculo {
  static readonly type = '[Vehiculo] Clear Active Vehiculo';
  constructor(public payload: Vehiculo) { }
}

export class vehiculoStartAddNew {
  static readonly type = '[Vehiculo] Start Add New';
  constructor(public payload: Vehiculo) { }
}

export class agregarNuevoVehiculo {
  static readonly type = '[Vehiculo] Add New';
  constructor(public payload: Vehiculo) { }
}


export class agregarVehiculoActivo {
  static readonly type = '[Vehiculo] Add New Vehiculo Activo';
  constructor(public payload: Vehiculo) { }
}

export class agregarNuevoVehiculoPorId {
  static readonly type = '[Vehiculo] Add New Por Id';
  constructor(public payload: Vehiculo) { }
}

export class agregarNuevoVehiculoPorVisitante {
  static readonly type = '[Vehiculo] Agregar Nuevo Vehiculo Por Visitante';
  constructor(public payload: FormGroup) { }
}

export class removerVehiculosAll {
  static readonly type = '[Vehiculo] Remover Vehiculos';
  constructor() { }
}

export class vehiculoUpdated {
  static readonly type = '[Vehiculo] Vehiculo Updated';
  constructor(public payload: Vehiculo) { }
}

export class VehiculoDeleted {
  static readonly type = '[Vehiculo] Vehiculo Deleted'
  constructor(public payload: string) { }
}

export class vehiculosLoaded {
  static readonly type = '[Vehiculo] Vehiculos Loaded';
  constructor(public payload: string) { }
}

export class removerVehiculosPorId {
  static readonly type = '[Vehiculo] Eliminar Vehiculo Por Id';
  constructor() { }
}