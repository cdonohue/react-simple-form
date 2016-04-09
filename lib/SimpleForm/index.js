import React from "react";
import { Provider } from "react-redux";
import SimpleForm from "./SimpleForm";

import store from "./createStore";

const SimpleFormContainer = ({ questions }) => (
  <Provider store={store}>
    <SimpleForm questions={questions} />
  </Provider>
);

export default SimpleFormContainer;
