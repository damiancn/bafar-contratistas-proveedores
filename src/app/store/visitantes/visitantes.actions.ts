import { Visitante } from 'src/app/interfaces/visitantes/visitante.interface';

// editar
export class visitanteSetActive {
  static  type = '[Visitante] Set Active';
  constructor(public payload: Visitante) { }
}

export class visitanteClearActiveVehiculo {
  static readonly type = '[Visitante] Clear Active Visitante';
  constructor(public payload: Visitante) { }
}

export class visitanteStartAddNew {
  static readonly type = '[Visitante] Start Add New';
  constructor(public payload: Visitante) { }
}

export class agregarNuevoVisitante {
  static readonly type = '[Visitante] Add New';
  constructor(public payload: any) { }
}

export class agregarNuevoVisitanteConCitaDelDia {
  static readonly type = '[Visitante] Agregar nuevo visitante con cita del dia';
  constructor(public payload: Visitante) { }
}

export class visitanteUpdated {
  static readonly type = '[Visitante] Visitante Updated';
  constructor(public payload: Visitante) { }
}

export class visitanteDeleted {
  static readonly type = '[Visitante] Visitante Deleted'
  constructor(public payload: string) { }
}

export class visitantesLoaded {
  static readonly type = '[Visitante] Visitantes Loaded';
  constructor(public payload: boolean) { }
}

export class removerVisitanteActivo {
  static readonly type = '[Visitante] Remover Visitante Activo';
  constructor() { }
}

export class removeAllVisitantes {
  static readonly type = '[Visitante] Remover Visitante';
  constructor() { }
}

// remove visitante by id
export class removeVisitanteById {
  static readonly type = '[Visitante] Remove Visitante';
  constructor(public payload: string) { }
}
