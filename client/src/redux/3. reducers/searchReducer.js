import {
  SEARCH_CALL_REQUEST,
  SEARCH_CALL_SUCCESS,
  SEARCH_CALL_FAIL,
  NOMINATE,
  NOMINATE_REMOVE,
  SEARCH,
} from "../1. constants/searchConstants";

export const searchQueryReducer = (state = "", action) => {
  switch (action.type) {
    case SEARCH:
      return action.payload;
    default:
      return state;
  }
};

export const searchCallReducer = (state = { movies: [] }, action) => {
  switch (action.type) {
    case SEARCH_CALL_REQUEST:
      return { loading: true, movies: [] };
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
  // console.log(action.payload);

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
