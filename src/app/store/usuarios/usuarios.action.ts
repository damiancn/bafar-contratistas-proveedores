import { Usuario } from 'src/app/store/usuarios/usuarios.model';

export class usuarioSetActive {
    static type = '[Usuario] Set Active';
    constructor(public payload: Usuario) { }
}

export class agregarNuevoUsuario {
    static readonly type = '[Usuario] Agregar Nuevo Usuario';
    constructor(public payload: Usuario) { }
}

export class agregarAnfitrion {
    static readonly type = '[Usuarios] Agregar anfitrion';
    constructor(public payload: Usuario) { }
}

export class removerAnfitrionAction {
    static readonly type = '[Usuarios] Remover Anfitrion';
    constructor() { }
}


export class removerUsuario {
    static readonly type = '[Usuarios] Remover Usuario';
    constructor(public payload: string) { }
}

export class removerAllUsuarios {
    static readonly type = '[Usuarios] Remover All Usuarios';
    constructor() { }
}

export class removerUsariosAction {
    static readonly type = '[Usuarios] Remover Usuarios';
    constructor() { }
}

export class usuariosLoaded {
    static readonly type = '[Usuarios] Usuarios Loaded';
    constructor(public payload: string) { }
}