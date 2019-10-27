import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

import * as RegionesDataActions from './regiones-data.actions';


@Injectable()
export class RegionesDataEffects {


  loadRegionesDatas$ = createEffect(() => this.actions$.pipe(
    ofType(RegionesDataActions.loadRegionesData),
    /** An EMPTY observable only emits completion. Replace with your own observable API request */
    concatMap(() => EMPTY)
  ));


  constructor(private actions$: Actions) {}

}
