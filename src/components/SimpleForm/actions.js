import store from "./store";

const advanceForm = (state) => {
  const newState = {
    ...state,
    currentStep: state.currentStep + 1,
  };

  return store.updateState(newState);
}

export default advanceForm;
