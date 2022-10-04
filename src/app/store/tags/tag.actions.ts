import { Tag } from 'src/app/interfaces/tag/tag'

export class agregarNuevoTag {
    static readonly type = '[Tags] Agregar Nuevo Tag';
    constructor(public payload: Tag) { }
}

export class removerTag {
    static readonly type = '[Tag] Remover Tag';
    constructor(public payload: string) { }
}

export class removerTags {
    static readonly type = '[Tags] Remover Tags';
    constructor() { }
}

export class tagsLoaded {
    static readonly type = '[Tags] Tags cargados';
    constructor(public payload: boolean) { }
}