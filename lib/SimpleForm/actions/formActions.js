import { createAction } from "redux-actions";

export const advanceFormStep = createAction("ADVANCE_FORM_STEP");

export const saveFormValue = createAction("SAVE_FORM_VALUE", (key, value) => ({ key, value }));
