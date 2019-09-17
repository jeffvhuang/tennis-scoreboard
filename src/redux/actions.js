import { createStringConstants } from "../helpers/constants";

// action types
const matchActions = [
  "UPDATE_PLAYER_1_NAME",
  "UPDATE_PLAYER_2_NAME",
  "UPDATE_GAME_SCORE_1",
  "UPDATE_GAME_SCORE_2",
  "UPDATE_SET_SCORE_1",
  "UPDATE_SET_SCORE_2",
  "UPDATE_CURRENT_SET",
  "CHANGE_SERVER",
  "RESET_SCORES"
];

export const ACTIONS = createStringConstants(...matchActions);

// action creators
export const updatePlayerName = (playerNumber, name) => ({
  type:
    playerNumber === 1
      ? ACTIONS.UPDATE_PLAYER_1_NAME
      : ACTIONS.UPDATE_PLAYER_2_NAME,
  payload: name
});

export const updateGameScore = (playerNumber, score) => ({
  type:
    playerNumber === 1
      ? ACTIONS.UPDATE_GAME_SCORE_1
      : ACTIONS.UPDATE_GAME_SCORE_2,
  payload: score
});

// setIndex = index in array (eg. If updating first set, setIndex = 0)
export const updateSetScore = (playerNumber, setIndex, score) => ({
  type:
    playerNumber === 1
      ? ACTIONS.UPDATE_SET_SCORE_1
      : ACTIONS.UPDATE_SET_SCORE_2,
  setIndex,
  payload: score
});

export const updateCurrentSet = number => ({
  type: ACTIONS.UPDATE_CURRENT_SET,
  payload: number
});

export const resetScores = () => ({
  type: ACTIONS.RESET_SCORES
});

export const updateSetAfterGameEnd = (
  playerNumber,
  currentSet,
  setScore,
  newSetNumber
) => dispatch => {
  dispatch(updateGameScore(1, "0"));
  dispatch(updateGameScore(2, "0"));
  dispatch(updateSetScore(playerNumber, currentSet - 1, setScore.toString()));
  if (currentSet != newSetNumber) dispatch(updateCurrentSet(newSetNumber));
};

export const changeServer = () => ({
  type: ACTIONS.CHANGE_SERVER
});

// async action creator
// export const logInUser = (username, password, loginFn = login) => async dispatch => {
//   dispatch({type: LOG_IN_SENT})
//   try {
//     const token = await loginFn(username, password)
//     dispatch({type: LOG_IN_FULFILLED, payload: token})
//   } catch (err) {
//     dispatch({type: LOG_IN_REJECTED, payload: err.message})
//   }
// }
