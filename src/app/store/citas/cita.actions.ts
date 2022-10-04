import { Cita } from './cita.model';
export class citaSetActive {
    static type = '[Citas] Set Active';
    constructor(public payload: Cita) { }
}

export class agregarNuevaCita {
    static readonly type = '[Citas] Agregar Nueva Cita';
    constructor(public payload: Cita) { }
}

export class agregarCitaConVisitantes {
    static readonly type = '[Citas] Agregar Cita Con Visitantes';
    constructor(public payload: Cita) { }
}

export class removerCitaActiva {
    static readonly type = '[Citas] Remover Cita Activa';
    constructor() { }
}

export class removerCitaConVisitantes {
    static readonly type = '[Citas] Remover Cita con Visitantes';
    constructor() { }
}

export class removerCita {
    static readonly type = '[Citas] Remover Cita';
    constructor(public payload: number) { }
}

export class removeAllCitas {
    static readonly type = '[Citas] Remover All Citas';
    constructor() { }
}

export class citasLoaded {
    static readonly type = '[Citas] Citas Cargadas';
    constructor(public payload: string) { }
}
