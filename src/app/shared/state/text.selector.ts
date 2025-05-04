import {createFeatureSelector, createSelector } from '@ngrx/store';
import {TextState } from './text.reducer';

export const selectTextState = createFeatureSelector<TextState>('Text');

export const selectPunchinText = createSelector(
    selectTextState,
    (state:TextState)=> state?.punchinText
);

export const selectButtonState = createSelector(
    selectTextState,
    (state:TextState)=> state?.buttonText
);






