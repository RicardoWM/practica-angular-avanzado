import { createAction, props } from '@ngrx/store';
import { Region } from './region.model';


export const loadRegionesData = createAction(
  '[RegionesData] Load RegionesDatas'
);


export const changeRegion = createAction(
  '[RegionesData] Change Region',
  props<{ selectRegion: Region }>()
);




