import { createStringConstants } from "../../helpers/constants";
import { getTournaments } from "../../helpers/api";

// Action types
const matchActions = [
  "GET_TOURNAMENTS_REQUEST",
  "GET_TOURNAMENTS_SUCCESS",
  "GET_TOURNAMENTS_FAILURE"
];

export const ACTIONS = createStringConstants(...matchActions);

// Action creators
export const getAtpTournaments = () => async dispatch => {
  dispatch({ type: ACTIONS.GET_TOURNAMENTS_REQUEST });
  try {
    const atpTournaments = await getTournaments();
    dispatch({
      type: ACTIONS.GET_TOURNAMENTS_SUCCESS,
      payload: atpTournaments
    });
  } catch (err) {
    dispatch({ type: ACTIONS.GET_TOURNAMENTS_FAILURE, err });
  }
};
