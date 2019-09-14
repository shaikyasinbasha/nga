import { Action } from '@ngrx/store'
import * as EncodeActions from './../actions/encode.actions'
import { IEncodeData } from '../models/decode.model';

const initialState: IEncodeData = {
    dispValue: ''
}

export function reducer(
    state: IEncodeData = initialState,
    action: EncodeActions.Actions
) {

    switch(action.type) {
        case EncodeActions.ADD_CHARECTER:
            return {
                ...state,
                dispValue: `${state.dispValue}${action.payload}`
            };
        case EncodeActions.REMOVE_CHARECTER:
            const {dispValue} = state;
            return {
                ...state,
                dispValue: `${dispValue.slice(0, -1)}`
            };
        default:
            return state;
    }
}
