import { handleActions } from "redux-actions";

export default handleActions({
  ADVANCE_FORM_STEP: (state, payload) => {
    return {
      ...state,
      currentStep: state.currentStep + 1,
    }
  },

  SAVE_FORM_VALUE: (state, { payload: { key, value }}) => {
    return {
      ...state,
      data: {
        ...state.data,
        [key]: value,
      }
    }
  }
}, {
  currentStep: 1,
  data: {},
});
