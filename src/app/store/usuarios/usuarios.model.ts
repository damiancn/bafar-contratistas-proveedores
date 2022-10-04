export class UsuarioStateModel {
  
  error?: any = {};
  message?: any = {};

  usuarios: Usuario[] = [];
  usuarioActivo: Usuario[] = [];
  anfitrion: Usuario[] = [];
  usuariosCargados: boolean = false;
}

export interface Usuario {
  pk_idUsuario?: number;
  fk_idPersona?: number;
  fk_idTipoUsuario?: string;
  usuario?: string;
  contrasena?: string;
  codigoContrasena?: string;
  codigoEmpleado?: string;
  fechaAlta?: Date;
  fechaBaja?: Date;
  activo?: boolean;
  permisos?: string;
  token?: string;
  createdAt?: Date;
  updatedAt?: Date;
}