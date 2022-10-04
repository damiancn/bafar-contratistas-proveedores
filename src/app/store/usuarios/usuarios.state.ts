import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { UsuarioStateModel } from './usuarios.model';
import {
  agregarAnfitrion,
  agregarNuevoUsuario,
  removerAllUsuarios,
  removerAnfitrionAction,
  removerUsuario,
  usuarioSetActive,
  removerUsariosAction,
} from './usuarios.action';

@Injectable()

@State<UsuarioStateModel>({
  name: 'Usuarios',
  defaults: {
    usuarios: [],
    usuarioActivo: [],
    anfitrion: [],
    usuariosCargados: false,
  }
})

export class UsuariosState {
  @Selector()
  static getMotivosVisita(state: UsuarioStateModel) { return state.usuarios; }

  // Añade un nuevo post al estado
  @Action(agregarNuevoUsuario)
  agregarNuevoUsuario({ getState, patchState }:
    StateContext<UsuarioStateModel>, { payload }:
      agregarNuevoUsuario): void {
        console.log(payload)
    const usuarioState = getState().usuarios;
    patchState({
      usuarios: [
        ...usuarioState,
        payload
      ],
    });
  }

  // AGREGAR EL ANFITRION SELECCIONADO
  @Action(agregarAnfitrion)
  agregarAnfitrion({ getState, patchState }:
    StateContext<UsuarioStateModel>, { payload }:
      agregarAnfitrion): void {
        console.log(payload)
    const usuarioState = getState().usuarios;
    patchState({
      anfitrion: [
        // ...usuarioState,
        payload
      ],
    });
  }

  // AGREGAR EL ANFITRION SELECCIONADO
  @Action(removerAnfitrionAction)
  removerAnfitrionAction({ getState, patchState }:
    StateContext<UsuarioStateModel>, { }:
    removerAnfitrionAction): void {
    const usuarioState = getState().usuarios;
    console.log(usuarioState)
    patchState({
      anfitrion: [
        // ...usuarioState,
      ],
    });
  }

  @Action(usuarioSetActive)
  usuarioSetActive(usuarioStateContect: StateContext<any>, { payload }: usuarioSetActive) {
    const state = usuarioStateContect.getState();
    usuarioStateContect.setState({
      ...state,
      usuarioActivo: [
        payload
      ]
    });
  }

  // Elimina TODOS los motivo de visita del estado
  @Action(removerAllUsuarios)
  removeAll({ getState, patchState }:
    StateContext<UsuarioStateModel>): void {
    // const motivosVisitaState = getState().motivosVisita;
    patchState({
      usuarios: [],
      usuarioActivo: [],
      anfitrion: [],
    });
  }

  // Eliminar los usuarios cargados
  @Action(removerUsariosAction)
  removerUsuarios({ patchState }: StateContext<UsuarioStateModel>) {
    patchState({
      usuarios: [],
    });
  }


  // Elimina un motivo de visita del estado
  @Action(removerUsuario)
  remove({ getState, patchState }: StateContext<UsuarioStateModel>, { payload }: removerUsuario) {
    patchState({
      usuarios: getState().usuarios.filter(usuario => usuario.pk_idUsuario !== parseInt(payload))
    });
  }
}