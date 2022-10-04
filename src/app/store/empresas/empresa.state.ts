import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import {
  agregarNuevaEmpresa,
  agregarNuevaEmpresaConCitaDelDia,
  removerEmpresa,
  removerEmpresas
} from './empresa.actions';
import { EmpresaStateModel } from './empresa.model';

@Injectable()

@State<EmpresaStateModel>({
  name: 'Empresa',
  defaults: {
    empresas: [],
    empresaActiva: [],
    empresasConCitasDelDia: [],
    empresasCargadas: false,
  }
})

export class EmpresaState {
  @Selector()
  static getEmpresas(state: EmpresaStateModel) { return state.empresas; }

  // Añade un nuevo post al estado
  @Action(agregarNuevaEmpresa)
  add({ getState, patchState }: StateContext<EmpresaStateModel>, { payload }: agregarNuevaEmpresa): void {
    const empresaState = getState().empresas;
    patchState({
      empresas: [
        ...empresaState,
        payload
      ]
    });
  }

  // Añade una nueva empresa con cita del dia
  @Action(agregarNuevaEmpresaConCitaDelDia)
  agregarNuevoVisitanteConCitaDelDia({ getState, patchState }: StateContext<EmpresaStateModel>, { payload }: agregarNuevaEmpresaConCitaDelDia) {
    const state = getState();
    patchState({
      empresasConCitasDelDia: [
        ...state.empresasConCitasDelDia,
        payload
      ]
    });
  }

  // Elimina TODAS las empresas del estado
  @Action(removerEmpresas)
  removerEmpresas({ getState, patchState }:
    StateContext<EmpresaStateModel>): void {
    // const empresasState = getState().empresas;
    patchState({
      empresas: [],
    });
  }

  // Eliminaa empresa del estado
  @Action(removerEmpresa)
  remove({ getState, patchState }: StateContext<EmpresaStateModel>, { payload }: removerEmpresa) {
    patchState({
      empresas: getState().empresas.filter(empresa => empresa.pk_idEmpresa !== parseInt(payload))
    });
  }
}