import { State, regionesDataFeatureKey } from './regiones-data.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getRegionDataState = createFeatureSelector<State>(
  regionesDataFeatureKey
);

export const getRegion = createSelector(
  getRegionDataState,
  (state: State) => state.region
)
