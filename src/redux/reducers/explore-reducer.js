import { ACTIONS as A } from "../actions/explore-actions";

const merge = (prev, next) => Object.assign({}, prev, next);

const initialState = {
  isFetching: false,
  error: {},
  atp: []
};

const exploreReducer = (state = initialState, action) => {
  switch (action.type) {
    case A.GET_TOURNAMENTS_REQUEST:
      return merge(state, { isFetching: true });
    case A.GET_TOURNAMENTS_SUCCESS:
      return merge(state, { isFetching: false, atp: action.payload });
    case A.GET_TOURNAMENTS_FAILURE:
      return merge(state, { isFetching: false, error: action.err });

    default:
      return state;
  }
};

export default exploreReducer;
