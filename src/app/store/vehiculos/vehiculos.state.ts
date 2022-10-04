import { Injectable } from '@angular/core';

import {
  State,
  Action,
  StateContext,
  Selector
} from '@ngxs/store';

import { VehiculoStateModel } from './vehiculos.model';

import {
  agregarNuevoVehiculo,
  agregarNuevoVehiculoPorId,
  agregarNuevoVehiculoPorVisitante,
  agregarVehiculoActivo,
  removerVehiculosAll,
  removerVehiculosPorId,
  VehiculoDeleted
} from './vehiculos.actions';

@Injectable()

@State<VehiculoStateModel>({
  name: 'Vehiculos',
  defaults: {
    vehiculos: [],
    vehiculosPorId: [],
    vehiculosPorVisitante: [],
    vehiculoActivo: [],
    vehiculosCargados: false,
  }
})

export class VehiculoState {

  @Selector()
  static getVehiculos(state: VehiculoStateModel) {
    console.log('vehiculosState:', state)
    return state.vehiculos;
  }

  @Selector()
  static getVehiculosPorVisitante(state: VehiculoStateModel) {
    console.log('vehiculosStatePorVisitante:', state)
    return state.vehiculosPorVisitante;
  }

  @Selector()
  static getVehiculosPorIdVisitante(state: VehiculoStateModel) {
    console.log('vehiculosStatePorIdVisitante:', state)
    return state.vehiculosPorId;
  }

  // Añade un nuevo vehiculo al estado
  @Action(agregarNuevoVehiculo)
  add({ getState, patchState }: StateContext<VehiculoStateModel>, { payload }: agregarNuevoVehiculo) {
    const state = getState();
    patchState({

      vehiculos: [
        ...state.vehiculos,
        payload
      ]
    });
  }

  // Añade un nuevo vehiculo al estado
  @Action(agregarVehiculoActivo)
  agregarVehiculoActivo({ getState, patchState }: StateContext<VehiculoStateModel>, { payload }: agregarVehiculoActivo) {
    const state = getState();
    patchState({
      vehiculoActivo: [
        ...state.vehiculosPorId,
        payload
      ]
    });
  }

  // Añade un nuevo vehiculo al estado
  @Action(agregarNuevoVehiculoPorId)
  addVehiculoPorId({ getState, patchState }: StateContext<VehiculoStateModel>, { payload }: agregarNuevoVehiculoPorId) {
    const state = getState();
    patchState({
      vehiculosPorId: [
        ...state.vehiculosPorId,
        payload
      ]
    });
  }

  // Añade un nuevo vehiculo al estado
  @Action(agregarNuevoVehiculoPorVisitante)
  addVehiculoPorNuevoVisitante({ getState, patchState }: StateContext<VehiculoStateModel>, { payload }: agregarNuevoVehiculoPorVisitante) {
    const state = getState();
    patchState({
      vehiculosPorVisitante: [
        ...state.vehiculosPorVisitante,
        payload
      ]
    });
  }

  // Elimina un vehiculo del estado
  @Action(VehiculoDeleted)
  remove({ getState, patchState }: StateContext<VehiculoStateModel>, { payload }: VehiculoDeleted) {
    patchState({
      vehiculos: getState().vehiculos.filter(vehiculo => vehiculo.pk_idVehiculo !== parseInt(payload))
    });
  }

  // Elimina TODOS los vehiculos del estado
  @Action(removerVehiculosAll)
  removeAll({ getState, patchState }:
    StateContext<VehiculoStateModel>): void {
    // const motivosVisitaState = getState().motivosVisita;
    patchState({
      vehiculos: [],
      vehiculosPorId: [],
      vehiculosPorVisitante: [],
      vehiculoActivo: []
    });
  }

  @Action(removerVehiculosPorId)
  removeAllPorId({ getState, patchState }:
    StateContext<VehiculoStateModel>): void {
    // const motivosVisitaState = getState().motivosVisita;
    patchState({
      vehiculosPorId: []
    });
  }

}