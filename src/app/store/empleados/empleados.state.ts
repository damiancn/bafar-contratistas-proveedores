import { Injectable } from '@angular/core';
import {
  State,
  Action,
  StateContext,
  Selector
} from '@ngxs/store';

import {
  agregarNuevoEmpleado,
  removeAllEmpleados,
  removerEmpleadoActivo,
  empleadoDeleted,
  empleadoSetActive
} from './empleados.actions';

import { EmpleadoStateModel } from './empleados.model';

@Injectable()

@State<EmpleadoStateModel>({
  name: 'Empleados',
  defaults: {
    empleados: [],
    empleadoActivo: [],
    empleadosDeSistema: [],
    empleadosCargados: false,
  }
})

export class EmpleadoState {
  @Selector()
  static getEmpleados( state: EmpleadoStateModel ) { return state.empleados; }

  @Selector()
  static getEmpleadoActivo( state: EmpleadoStateModel ) { return state.empleadoActivo; }

  // Añade un nuevo empleado al estado
  @Action(agregarNuevoEmpleado)
  add({ getState, patchState }: StateContext<EmpleadoStateModel>, { payload }: agregarNuevoEmpleado) {
    const state = getState();
    patchState({
      empleados: [
        ...state.empleados,
        payload
      ]
    });
  }

  // Set the employee to active
  @Action(empleadoSetActive)
  empleadoSetActive(empleadoStateContect: StateContext<EmpleadoStateModel>, {payload}: empleadoSetActive) {
    const state = empleadoStateContect.getState();
    empleadoStateContect.setState({
      ...state,
      empleadoActivo: [
        payload
      ]
    });
  }

  // Elimina un empleado del estado
  @Action(empleadoDeleted)
  remove({ getState, patchState }: StateContext<EmpleadoStateModel>, { payload }: empleadoDeleted) {
    patchState({
      empleados: getState().empleados.filter(empleado =>
        empleado.Id !== parseInt(payload))
    });
  }

  // Remover el Empleado Activo
  @Action(removerEmpleadoActivo)
  removerEmpleadoActivo({ patchState }:
    StateContext<EmpleadoStateModel>): void {
    patchState({
      empleadoActivo: [],
    });
  }


  // Elimina TODOS los Empleados del estado
  @Action(removeAllEmpleados)
  removeAllEmpleados({ patchState }:
    StateContext<EmpleadoStateModel>): void {
    patchState({
      empleados: []
    });
  }

  // Remover Empleado por id
  @Action(empleadoDeleted)
  empleadoDeleted({ getState, patchState }: StateContext<EmpleadoStateModel>, { payload }: empleadoDeleted) {
    patchState({
      empleados: getState().empleados.filter(empleado =>
        empleado.Id !== parseInt(payload))
    });
  }
}