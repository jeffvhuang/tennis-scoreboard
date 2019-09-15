import {
  UPDATE_PLAYER_1_NAME,
  UPDATE_PLAYER_2_NAME,
  UPDATE_GAME_SCORE_1,
  UPDATE_GAME_SCORE_2,
  RESET_SCORES
} from "../actions";

const merge = (prev, next) => Object.assign({}, prev, next);

const initialState = {
  player1: "Player 1",
  player2: "Player 2",
  gameScore1: "0",
  gameScore2: "0",
  scores1: ["0", "0", "0"],
  scores2: ["0", "0", "0"]
};

const matchReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PLAYER_1_NAME:
      return merge(state, { player1: action.payload });
    case UPDATE_PLAYER_2_NAME:
      return merge(state, { player2: action.payload });

    case UPDATE_GAME_SCORE_1:
      return merge(state, { gameScore1: action.payload });
    case UPDATE_GAME_SCORE_2:
      return merge(state, { gameScore2: action.payload });

    case RESET_SCORES:
      return initialState;
    default:
      return state;
  }
};

export default matchReducer;
