import { Action, createReducer, on } from '@ngrx/store';
import * as RegionesDataActions from './regiones-data.actions';
import { Region } from './region.model';

export const regionesDataFeatureKey = 'regionesData';

export interface State {
  region: Region
}

export const initialState: State = {
  region: {
    id: '',
    code: '',
    iso2code: '',
    name: ''
  }
};


const regionesDataReducer = createReducer(
  initialState,

  on(RegionesDataActions.loadRegionesData, state => state),
  on(RegionesDataActions.changeRegion, (state, { selectRegion }) => {
    return {
      ...state,
      region: selectRegion
    }
  })
);

export function reducer(state: State | undefined, action: Action) {
  return regionesDataReducer(state, action);
}
