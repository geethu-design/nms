import { createAction,props } from '@ngrx/store';

export const updatePunchinText = createAction(
    '[ Punchin] Update Punchin Text',
    props<{ text: string }>()
);

export const updateButtonText = createAction(
    '[ Punchin] Update Button Text',
    props<{ text: string }>()
)





