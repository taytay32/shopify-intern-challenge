import {
  SEARCH,
  SEARCH_CALL_REQUEST,
  SEARCH_CALL_SUCCESS,
  SEARCH_CALL_FAIL,
} from "../1. constants/searchConstants";

export const searchReducer = (state = "", action) => {
  switch (action.type) {
    case SEARCH:
      return action.payload;
    default:
      return state;
  }
};

export const searchCallReducer = (
  state = { loading: true, movies: [] },
  action
) => {
  switch (action.type) {
    case SEARCH_CALL_REQUEST:
      return { loading: true };
    case SEARCH_CALL_SUCCESS:
      return { loading: false, movies: action.payload };
    case SEARCH_CALL_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
