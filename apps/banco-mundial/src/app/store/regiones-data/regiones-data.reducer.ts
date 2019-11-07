import { Action, createReducer, on } from '@ngrx/store';
import * as RegionesDataActions from './regiones-data.actions';
import { Region } from './region.model';
import { Pais } from './pais.model';
import { loadPaises } from './regiones-data.actions';

export const regionesDataFeatureKey = 'regionesData';

export interface State {
  region: Region,
  paises: Pais[],
  pais: Pais
}

export const initialState: State = {
  region: null,
  paises: [],
  pais: null
};


const regionesDataReducer = createReducer(
  initialState,

  on(RegionesDataActions.loadRegionesData, state => state),
  on(RegionesDataActions.changeRegion, (state, { selectRegion }) => {
    return {
      ...state,
      region: selectRegion
    };
  }),
  on(RegionesDataActions.loadPaises, (state, {listPaises}) => {
    return {
      ...state,
      paises: listPaises
    };
  }),
  on(RegionesDataActions.changePais, (state, { selectPais }) => {
    return {
      ...state,
      pais: selectPais
    }
  })
);

export function reducer(state: State | undefined, action: Action) {
  return regionesDataReducer(state, action);
}
