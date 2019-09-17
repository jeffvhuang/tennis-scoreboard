import {
  UPDATE_PLAYER_1_NAME,
  UPDATE_PLAYER_2_NAME,
  UPDATE_GAME_SCORE_1,
  UPDATE_GAME_SCORE_2,
  UPDATE_SET_SCORE_1,
  UPDATE_SET_SCORE_2,
  UPDATE_CURRENT_SET,
  CHANGE_SERVER,
  RESET_SCORES
} from "../actions";

const merge = (prev, next) => Object.assign({}, prev, next);

const initialState = {
  currentSet: 1,
  player1: "Player 1",
  player2: "Player 2",
  gameScore1: "0",
  gameScore2: "0",
  scores1: ["0", "0", "0"],
  scores2: ["0", "0", "0"],
  isPlayer1Serving: true
};

const matchReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CURRENT_SET:
      return merge(state, { currentSet: action.payload });

    case UPDATE_PLAYER_1_NAME:
      return merge(state, { player1: action.payload });
    case UPDATE_PLAYER_2_NAME:
      return merge(state, { player2: action.payload });

    case UPDATE_GAME_SCORE_1:
      return merge(state, { gameScore1: action.payload });
    case UPDATE_GAME_SCORE_2:
      return merge(state, { gameScore2: action.payload });

    case UPDATE_SET_SCORE_1:
      const scores1 = [...state.scores1];
      scores1[action.setIndex] = action.payload;
      return merge(state, { scores1 });
    case UPDATE_SET_SCORE_2:
      const scores2 = [...state.scores2];
      scores2[action.setIndex] = action.payload;
      return merge(state, { scores2 });

    case CHANGE_SERVER:
      return merge(state, { isPlayer1Serving: !state.isPlayer1Serving });
    case RESET_SCORES:
      return initialState;
    default:
      return state;
  }
};

export default matchReducer;
