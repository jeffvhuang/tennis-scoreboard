import { createStringConstants } from "../../helpers/constants";

// action types
const matchActions = [
  "UPDATE_PLAYER_1_NAME",
  "UPDATE_PLAYER_2_NAME",
  "UPDATE_GAME_SCORE_1",
  "UPDATE_GAME_SCORE_2",
  "UPDATE_SET_SCORE_1",
  "UPDATE_SET_SCORE_2",
  "UPDATE_SETS_WON_1",
  "UPDATE_SETS_WON_2",
  "UPDATE_CURRENT_SET",
  "CHANGE_SERVER",
  "SET_TIEBREAK",
  "SET_WINNER",
  "CHANGE_FAULT",
  "RESET_SCORES",
  "LOAD_MATCH"
];

export const ACTIONS = createStringConstants(...matchActions);

// action creators
export const updatePlayerName = (playerNum, name) => ({
  type:
    playerNum === 1
      ? ACTIONS.UPDATE_PLAYER_1_NAME
      : ACTIONS.UPDATE_PLAYER_2_NAME,
  payload: name
});

export const updateGameScore = (playerNum, score) => ({
  type:
    playerNum === 1 ? ACTIONS.UPDATE_GAME_SCORE_1 : ACTIONS.UPDATE_GAME_SCORE_2,
  payload: score
});

// Thunk function
export const changeGameScore = (playerNum, score, isFault) => dispatch => {
  if (isFault) dispatch(changeFault());
  dispatch(updateGameScore(playerNum, score));
};

// setIndex = index in array (eg. If updating first set, setIndex = 0)
export const updateSetScore = (playerNum, setIndex, score) => ({
  type:
    playerNum === 1 ? ACTIONS.UPDATE_SET_SCORE_1 : ACTIONS.UPDATE_SET_SCORE_2,
  setIndex,
  payload: score
});

export const updateSetsWon = (playerNum, setsWon) => ({
  type: playerNum === 1 ? ACTIONS.UPDATE_SETS_WON_1 : ACTIONS.UPDATE_SETS_WON_2,
  payload: setsWon
});

// Thunk function
// Increment the score within the set after a game ends
// This includes updating to new set or tiebreak depending on the situation
export const updateSetAfterGameEnd = (
  playerNum,
  currentSet,
  setScore
) => dispatch => {
  dispatch(updateGameScore(1, "0"));
  dispatch(updateGameScore(2, "0"));
  dispatch(updateSetScore(playerNum, currentSet - 1, setScore.toString()));
  dispatch(changeServer());
};

export const updateCurrentSet = number => ({
  type: ACTIONS.UPDATE_CURRENT_SET,
  payload: number
});

export const changeFault = () => ({
  type: ACTIONS.CHANGE_FAULT
});

export const changeServer = () => ({
  type: ACTIONS.CHANGE_SERVER
});

export const setTiebreak = isTiebreak => ({
  type: ACTIONS.SET_TIEBREAK,
  payload: isTiebreak
});

export const setWinner = playerNum => ({
  type: ACTIONS.SET_WINNER,
  payload: playerNum
});

export const resetScores = () => ({
  type: ACTIONS.RESET_SCORES
});

export const loadMatch = match => ({
  type: ACTIONS.LOAD_MATCH,
  payload: match
});
