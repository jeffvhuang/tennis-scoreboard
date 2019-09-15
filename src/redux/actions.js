// action types
export const UPDATE_PLAYER_1_NAME = "UPDATE_PLAYER_1_NAME";
export const UPDATE_PLAYER_2_NAME = "UPDATE_PLAYER_2_NAME";
export const UPDATE_GAME_SCORE_1 = "UPDATE_GAME_SCORE_1";
export const UPDATE_GAME_SCORE_2 = "UPDATE_GAME_SCORE_2";
export const UPDATE_SET_SCORE = "UPDATE_SET_SCORE";
export const RESET_SCORES = "RESET_SCORES";

// action creators
export const updatePlayerName = (playerNumber, name) => ({
  type: playerNumber === 1 ? UPDATE_PLAYER_1_NAME : UPDATE_PLAYER_2_NAME,
  payload: name
});

export const updateGameScore = (playerNumber, score) => ({
  type: playerNumber === 1 ? UPDATE_GAME_SCORE_1 : UPDATE_GAME_SCORE_2,
  payload: score
});

export const resetScores = () => ({
  type: RESET_SCORES
});

// export const addContact = newContact => ({
//   type: UPDATE_CONTACT,
//   payload: newContact,
// })

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
