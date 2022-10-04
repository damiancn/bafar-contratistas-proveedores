import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { MotivosVisitaStateModel } from './motivosVisita.model';
import { agregarNuevoMotivoVisita, removerMotivoVisita, removerMotivoVisitaAll } from './motivosVisita.actions';

@Injectable()

@State<MotivosVisitaStateModel>({
  name: 'MotivosVisita',
  defaults: {
    motivosVisita: [],
    activeMotivoVisita: false,
    motivosVisitaLoaded: false,
  }
})

export class MotivosVisitaState {
  @Selector()
  static getMotivosVisita(state: MotivosVisitaStateModel) { return state.motivosVisita; }

  // Añade un nuevo post al estado
  @Action(agregarNuevoMotivoVisita)
  agregarNuevoMotivoVisita({ getState, patchState, setState }:
    StateContext<MotivosVisitaStateModel>, { payload }:
      agregarNuevoMotivoVisita): void {
    const motivosVisitaState = getState().motivosVisita;
    console.log('state', motivosVisitaState);
    patchState({
      motivosVisita: [
        ...motivosVisitaState,
        payload
      ],
    });
  }

  // Elimina TODOS los motivo de visita del estado
  @Action(removerMotivoVisitaAll)
  removeAll({ getState, patchState }:
    StateContext<MotivosVisitaStateModel>): void {
    // const motivosVisitaState = getState().motivosVisita;
    patchState({
      motivosVisita: [],
    });
  }


  // Elimina un motivo de visita del estado
  @Action(removerMotivoVisita)
  remove({ getState, patchState }: StateContext<MotivosVisitaStateModel>, { payload }: removerMotivoVisita) {
    patchState({
      motivosVisita: getState().motivosVisita.filter(motivoVisita => motivoVisita.pk_idMotivoVisita !== parseInt(payload))
    });
  }
}