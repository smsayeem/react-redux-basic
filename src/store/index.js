import { createStore, combineReducers } from "redux";
import math from "./reducers/mathReducer";
import user from "./reducers/userReducer";

const rootReducer = combineReducers({ math, user });

// const store = createStore(rootReducer);
const store = createStore(
  rootReducer,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
