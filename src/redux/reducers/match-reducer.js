import uuid from "uuid";
import { ACTIONS as A } from "../actions/match-actions";

const merge = (prev, next) => Object.assign({}, prev, next);

const initialState = {
  id: "",
  created: null,
  modified: null,
  player1: "Player 1",
  player2: "Player 2",
  gameScore1: "0",
  gameScore2: "0",
  scores1: ["0"],
  scores2: ["0"],
  player1SetsWon: 0,
  player2SetsWon: 0,
  currentSet: 1,
  isPlayer1Serving: true,
  isTiebreak: false,
  isFault: false,
  setsToWin: 2,
  winner: 0
};

const matchReducer = (state = initialState, action) => {
  switch (action.type) {
    case A.UPDATE_PLAYER_1_NAME:
      return merge(state, { player1: action.payload });
    case A.UPDATE_PLAYER_2_NAME:
      return merge(state, { player2: action.payload });

    case A.UPDATE_GAME_SCORE_1:
      return merge(state, { gameScore1: action.payload });
    case A.UPDATE_GAME_SCORE_2:
      return merge(state, { gameScore2: action.payload });

    case A.UPDATE_SET_SCORE_1:
      const newScores1 = [...state.scores1];
      newScores1[action.setIndex] = action.payload;
      return merge(state, { scores1: newScores1 });
    case A.UPDATE_SET_SCORE_2:
      const newScores2 = [...state.scores2];
      newScores2[action.setIndex] = action.payload;
      return merge(state, { scores2: newScores2 });

    case A.UPDATE_SETS_WON_1:
      return merge(state, { player1SetsWon: action.payload });
    case A.UPDATE_SETS_WON_2:
      return merge(state, { player2SetsWon: action.payload });

    case A.UPDATE_CURRENT_SET:
      return merge(state, { currentSet: action.payload });
    case A.START_NEW_SET:
      const scores1 = [...state.scores1, "0"];
      const scores2 = [...state.scores2, "0"];
      const currentSet = state.currentSet + 1;
      return merge(state, { currentSet, scores1, scores2 });
    case A.CHANGE_FAULT:
      return merge(state, { isFault: !state.isFault });
    case A.CHANGE_SERVER:
      return merge(state, { isPlayer1Serving: !state.isPlayer1Serving });
    case A.SET_TIEBREAK:
      return merge(state, { isTiebreak: action.payload });
    case A.SET_WINNER:
      return merge(state, { winner: action.payload });

    case A.LOAD_MATCH:
      return action.payload;
    case A.RESET_SCORES:
      const date = Date.now();
      return merge(initialState, {
        id: uuid.v1(),
        created: date,
        modified: date
      });
    default:
      return state;
  }
};

export default matchReducer;
