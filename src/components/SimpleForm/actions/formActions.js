import { createAction } from "redux-actions";

const types = {
  ADVANCE_FORM_STEP: "ADVANCE_FORM_STEP"
}

export const advanceFormStep = createAction("ADVANCE_FORM_STEP");

export const saveFormValue = createAction("SAVE_FORM_VALUE", (key, value) => {
  return {
    key,
    value
  }
});
