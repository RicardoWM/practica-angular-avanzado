import { createAction, props } from '@ngrx/store';
import { Region } from './region.model';
import { Pais } from './pais.model';


export const loadRegionesData = createAction(
  '[RegionesData] Load RegionesDatas'
);


export const changeRegion = createAction(
  '[RegionesData] Change Region',
  props<{ selectRegion: Region }>()
);

export const loadPaises = createAction(
  '[RegionesData] Load Paises',
  props<{ listPaises: Pais[] }>()
);

export const changePais = createAction(
  '[RegionesData] Change Pais',
  props<{ selectPais: Pais }>()
);




