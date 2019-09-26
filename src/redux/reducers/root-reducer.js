import { combineReducers } from "redux";
import matchReducer from "./match-reducer";
import exploreReducer from "./explore-reducer";

/* App’s top-level reducers */
const appReducer = combineReducers({
  match: matchReducer,
  explore: exploreReducer
});

const rootReducer = (state, action) => {
  // if (action.type === "USER_LOGOUT") {
  //   state = undefined;
  // }

  // if (action.type === "RESET") return action.stateFromLocalStorage;

  return appReducer(state, action);
};

export default rootReducer;
