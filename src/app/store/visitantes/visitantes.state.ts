import { Injectable } from '@angular/core';
import {
  State,
  Action,
  StateContext,
  Selector
} from '@ngxs/store';

import {
  agregarNuevoVisitante,
  agregarNuevoVisitanteConCitaDelDia,
  removeAllVisitantes,
  removerVisitanteActivo,
  visitanteDeleted,
  visitanteSetActive
} from './visitantes.actions';

import { VisitanteStateModel } from './visitantes.model';

@Injectable()

@State<VisitanteStateModel>({
  name: 'Visitantes',
  defaults: {
    visitantes: [],
    visitanteActivo: [],
    visitantesConCitaDelDia: [],
    visitantesCargados: false,
  }
})

export class VisitanteState {
  @Selector()
  static getVisitantes( state: VisitanteStateModel ) { return state.visitantes; }

  @Selector()
  static getVisitanteActivo( state: VisitanteStateModel ) { return state.visitanteActivo; }

  // Añade un nuevo visitante al estado
  @Action(agregarNuevoVisitante)
  add({ getState, patchState }: StateContext<VisitanteStateModel>, { payload }: agregarNuevoVisitante) {
    const state = getState();
    patchState({
      visitantes: [
        ...state.visitantes,
        payload
      ]
    });
  }

  // Añade un nuevo visitante con cita del dia
  @Action(agregarNuevoVisitanteConCitaDelDia)
  agregarNuevoVisitanteConCitaDelDia({ getState, patchState }: StateContext<VisitanteStateModel>, { payload }: agregarNuevoVisitante) {
    const state = getState();
    patchState({
      visitantesConCitaDelDia: [
        ...state.visitantesConCitaDelDia,
        payload
      ]
    });
  }

  @Action(visitanteSetActive)
  visitanteSetActive(visitanteStateContect: StateContext<VisitanteStateModel>, {payload}: visitanteSetActive) {
    const state = visitanteStateContect.getState();
    console.log(state)
    visitanteStateContect.setState({
      ...state,
      visitanteActivo: [
        payload
      ]
    });
  }

  // Elimina un visitante del estado
  @Action(visitanteDeleted)
  remove({ getState, patchState }: StateContext<VisitanteStateModel>, { payload }: visitanteDeleted) {
    patchState({
      visitantes: getState().visitantes.filter(visitante =>
        visitante.pk_idVisitante !== parseInt(payload))
    });
  }

  // Remover el Visitante Activo
  @Action(removerVisitanteActivo)
  removerVisitanteActivo({ getState, patchState }:
    StateContext<VisitanteStateModel>): void {
    // const motivosVisitaState = getState().motivosVisita;
    patchState({
      visitanteActivo: [],
    });
  }

  // Elimina TODOS los Visitantes del estado
  @Action(removeAllVisitantes)
  removeAllVisitantes({ patchState }:
    StateContext<VisitanteStateModel>): void {
    patchState({
      visitantes: []
    });
  }

  // Remove Visitante por id
  @Action(visitanteDeleted)
  visitanteDeleted({ getState, patchState }: StateContext<VisitanteStateModel>, { payload }: visitanteDeleted) {
    patchState({
      visitantes: getState().visitantes.filter(visitante =>
        visitante.pk_idPersona !== parseInt(payload))
    });
  }
}