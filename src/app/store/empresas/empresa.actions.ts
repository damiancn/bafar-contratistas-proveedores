import { Empresa } from 'src/app/interfaces/empresa/empresa.interface';

export class agregarNuevaEmpresa {
    static readonly type = '[Empresas] Agregar Nueva Empresa';
    constructor(public payload: Empresa) { }
}

export class removerEmpresa {
    static readonly type = '[Empresas] Remover Empresa';
    constructor(public payload: string) { }
}

export class removerEmpresas {
    static readonly type = '[Empresas] Remover Empresas';
    constructor() { }
}

export class empresasLoaded {
    static readonly type = '[Empresas] Remover Empresa';
    constructor(public payload: string) { }
}

export class agregarNuevaEmpresaConCitaDelDia {
    static readonly type = '[Empresas] Agregar nueva emrpesa con cita del dia';
    constructor(public payload: Empresa) { }
  }