import { State, Action, StateContext, Selector } from '@ngxs/store';
import { TagStateModel } from './tag.model';
import {
  agregarNuevoTag,
  removerTag,
  removerTags,
  tagsLoaded,
 } from './tag.actions';
import { Injectable } from '@angular/core';

@Injectable()

@State<TagStateModel>({
  name: 'Tags',
  defaults: {
    tags: [],
    tagActivo: [],
    tagsCargados: false,
  }
})

export class TagState {
  /* A selector. It is a function that returns the state. (TagStateModel) */
  @Selector()
  static getTags(state: TagStateModel) { return state.tags; }

  // * Añade un nuevo tag al store
  /* A decorator that is used to register an action. */
  @Action(agregarNuevoTag)
  /* Adding a new tag to the store. */
  add({ getState, patchState }: StateContext<TagStateModel>, { payload }: agregarNuevoTag): void {
    const tagState = getState().tags;
    /* Updating the state. */
    patchState({
      tags: [
        ...tagState,
        payload
      ]
    });
  }

  /* A decorator that is used to register an action. */
  @Action(tagsLoaded)
  /**
   * It updates the state of the tagsCargados property in the TagStateModel.
   * @param  - getState: A function that returns the current state of the store.
   * @param {tagsLoaded}  - getState() is a function that returns the current state of the store.
   */
  tagsCargados({ patchState, }: StateContext<TagStateModel>, { payload }: tagsLoaded): void {
    patchState({
      tagsCargados: payload
    })
  }

  // * Elimina TODOS los tags del store
  /* A decorator that is used to register an action. */
  @Action(removerTags)
  /* Removing all the tags from the store. */
  removerEmpresas({ patchState, }:
    StateContext<TagStateModel>): void {
    patchState({
      tags: [],
    });
  }

  /* A decorator that is used to register an action. */
  @Action(removerTag)
  /* Removing the tag from the store. */
  remove({ getState, patchState }: StateContext<TagStateModel>, { payload }: removerTag) {
    patchState({
      tags: getState().tags.filter(tag => tag.pk_idTag !== parseInt(payload))
    });
  }
}