import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { CitaStateModel } from './cita.model';
import {
  agregarCitaConVisitantes,
  agregarNuevaCita,
  citaSetActive,
  removeAllCitas,
  removerCita,
  removerCitaActiva,
  removerCitaConVisitantes
} from './cita.actions';

@Injectable()

@State<CitaStateModel>({
  name: 'Citas',
  defaults: {
    citas: [],
    citaActiva: [],
    citaConVisitantes: [],
    citasCargadas: false,
  }
})

export class CitaState {
  @Selector()
  static getCitas(state: CitaStateModel) { return state.citas; }


  // * ESTABLECER UNA CITA
  @Action(agregarNuevaCita)
  add({ getState, patchState }: StateContext<CitaStateModel>, { payload }: agregarNuevaCita): void {
    const state = getState();
    patchState({
      citas: [
        ...state.citas,
        payload
      ]
    });
  }

  // * ESTABLECE UNA CITA ACTIVA 
  @Action(citaSetActive)
  visitanteSetActive(citaStateContect: StateContext<any>, { payload }: citaSetActive) {
    const state = citaStateContect.getState();
    console.log(state)
    citaStateContect.setState({
      ...state,
      citaActiva: [
        payload
      ]
    });
  }

  // * ESTABLECE UNA CITA CON VISITANTES
  @Action(agregarCitaConVisitantes)
  agregarCitaConVisitantes(citaStateContext: StateContext<any>, { payload }: agregarCitaConVisitantes) {
    const state = citaStateContext.getState();
    console.log(state)
    citaStateContext.setState({
      ...state,
      citaConVisitantes: [
        ...state.citaConVisitantes,
        payload
      ]
    });
  }

  // * ELIMINA UNA CITA POR ID
  @Action(removerCita)
  remove({ getState, patchState }: StateContext<CitaStateModel>, { payload }: removerCita) {
    patchState({
      citas: getState().citas.filter(cita => cita.pk_idCita !== payload)
    });
  }

  // * ELIMINA LA CITA CON VISITANTES
  @Action(removerCitaConVisitantes)
  removerCitaConVisitantes({ patchState }:
    StateContext<CitaStateModel>): void {
    patchState({
      citaConVisitantes: []
    });
  }

  // * ELIMINA LA CITA ACTIVA DEL ESTADO
  @Action(removerCitaActiva)
  removerCitaActiva({ patchState }:
    StateContext<CitaStateModel>): void {
    patchState({
      citaActiva: []
    });
  }

  // * ELIMINA TODAS LAS CITAS DEL ESTADO
  @Action(removeAllCitas)
  removeAllCitas({ patchState }:
    StateContext<CitaStateModel>): void {
    patchState({
      citas: []
    });
  }
}