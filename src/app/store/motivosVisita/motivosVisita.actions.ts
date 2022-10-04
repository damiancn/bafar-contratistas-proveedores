import { Cat_motivo_visita } from "src/app/interfaces/MotivosVisita/motivosVisita.model";

export class agregarNuevoMotivoVisita {
    static readonly type = '[MotivosVisita] Agregar Nuevo MotivoVisita';
    constructor(public payload: Cat_motivo_visita) { }
}

export class removerMotivoVisita {
    static readonly type = '[MotivosVisita] Remover MotivoVisita';
    constructor(public payload: string) { }
}

export class removerMotivoVisitaAll {
    static readonly type = '[MotivosVisita] Remover MotivoVisita';
    constructor() { }
}

export class motivosVisitaLoaded {
    static readonly type = '[MotivoVisita] MotivosVisita Loaded';
    constructor(public payload: string) { }
}