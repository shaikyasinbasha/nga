import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { IEncodeData } from '../models/decode.model';

export const ADD_CHARECTER       = '[CHARECTER] Add'
export const REMOVE_CHARECTER    = '[CHARECTER] Remove'

export class AddCharecter implements Action {
    readonly type = ADD_CHARECTER;
    constructor(public payload: string) {}
}

export class RemoveCharecter implements Action {
    readonly type = REMOVE_CHARECTER
    constructor(public payload: string) {}
}


export type Actions = AddCharecter | RemoveCharecter