import { createReducer,on } from '@ngrx/store';
import { updatePunchinText, updateButtonText } from './text.action';

export interface TextState{
    punchinText:string;
    buttonText:string;
}

export const initialState:TextState={
    punchinText :'You are punched out',
    buttonText:'Punch in'
}

export const textReducer = createReducer(
    initialState,
    on(updatePunchinText,(state,{text})=>({...state, punchinText:text})),
    on(updateButtonText,(state,{text})=>({...state, buttonText:text}))
);