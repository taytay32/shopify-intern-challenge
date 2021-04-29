import {
  SEARCH_CALL_REQUEST,
  SEARCH_CALL_SUCCESS,
  SEARCH_CALL_FAIL,
  NOMINATE,
  NOMINATE_REMOVE,
  SEARCH,
  MOVIE_DETAILS_REQUEST,
  MOVIE_DETAILS_SUCCESS,
  MOVIE_DETAILS_FAIL,
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

export const movieDetailsReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case MOVIE_DETAILS_REQUEST:
      return { loading: true };
    case MOVIE_DETAILS_SUCCESS:
      return { loading: false, movie: action.payload };
    case MOVIE_DETAILS_FAIL:
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
  // console.log(state);

  switch (action.type) {
    case NOMINATE:
      const addedMovie = action.payload;
      // console.log(state);
      // let newArray = [...state.nominatedMovies, addedMovie];
      // console.log(newArray);
      // return newArray;

      return {
        ...state,
        nominatedMovies: [...state.nominatedMovies, addedMovie],
      };

    case NOMINATE_REMOVE:
      // console.log("are we here?");
      // console.log(state.nominatedMovies);
      return {
        ...state,
        nominatedMovies: state.nominatedMovies.filter((movie) => {
          if (movie.imdbID !== action.payload.imdbID) {
            return true;
          }
        }),
      };

    default:
      return state;
  }
};
