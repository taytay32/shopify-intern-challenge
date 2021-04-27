import {
  SEARCH,
  SEARCH_CALL_REQUEST,
  SEARCH_CALL_SUCCESS,
  SEARCH_CALL_FAIL,
  NOMINATE,
  NOMINATE_REMOVE,
  ACTIVATE_HOME,
  ACTIVATE_RESULTS,
  ACTIVATE_NOMINATIONS,
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

export const nominateMovieReducer = (
  state = { nominatedMovies: [] },
  action
) => {
  console.log(action.payload);

  switch (action.type) {
    case NOMINATE:
      const addedMovie = action.payload;
      return {
        ...state,
        nominatedMovies: [...state.nominatedMovies, addedMovie],
      };

    case NOMINATE_REMOVE:
      return {
        ...state,
        nominatedMovies: state.nominatedMovies.filter((movie) => {
          if (movie.Title !== action.payload.Title) {
            return true;
          }
        }),
      };

    default:
      return state;
  }
};

export const activateHomeReducer = (state = "", action) => {
  switch (action.type) {
    case ACTIVATE_HOME:
      return action.payload;
    default:
      return state;
  }
};

export const activateResultsReducer = (state = "", action) => {
  console.log(action.payload);
  switch (action.type) {
    case ACTIVATE_RESULTS:
      return action.payload;
    default:
      return state;
  }
};

export const activateNominationsReducer = (state = "", action) => {
  switch (action.type) {
    case ACTIVATE_NOMINATIONS:
      return action.payload;

    default:
      return state;
  }
};
