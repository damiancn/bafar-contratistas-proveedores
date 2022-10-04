import { Visitante } from 'src/app/interfaces/visitantes/visitante.interface';

// editar
export class visitanteSetActive {
  static readonly type = '[Visitante] Set Active';
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
  constructor(public payload: string) { }
}