import { createStore, combineReducers } from "redux";
import tilesReducer from "../reducers/tilesReducer";
// import profile from "../reducers/profileReducer";
// import settings from "../reducers/settingsReducer";

var allReducers = combineReducers(
  {
    tiles: tilesReducer,
  }
  //profile: profileReducer,
  //settings: settingsReducer,
  //someOther: someOtherReducer
  // ...  This whole object becomes the state of the application
);

const appState = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__({ trace: true })
);

export default appState;
