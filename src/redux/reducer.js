import { combineReducers } from "redux";

import { UPDATE_PLAYER_1_NAME, UPDATE_PLAYER_2_NAME } from "./actions";

const merge = (prev, next) => Object.assign({}, prev, next);

const initialState = {
  player1: "Player 1",
  player2: "Player 2"
};

const matchReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PLAYER_1_NAME:
      return merge(state, { player1: action.payload });
    case UPDATE_PLAYER_2_NAME:
      return merge(state, { player2: action.payload });
    default:
      return state;
  }
};

const reducer = combineReducers({
  match: matchReducer
});

export default reducer;
