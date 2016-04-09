import { applyMiddleware, createStore, compose } from "redux";
import logger from "redux-logger";

import reducer from "./reducers";

export default compose(
  applyMiddleware(
    logger({ collapsed: true, duration: true })
  )
)(createStore)(reducer);
