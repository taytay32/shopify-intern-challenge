import axios from "axios";
import { API_KEY, API_URL } from "../../Utils";
import {
  SEARCH,
  SEARCH_CALL_REQUEST,
  SEARCH_CALL_SUCCESS,
  SEARCH_CALL_FAIL,
  NOMINATE,
  NOMINATE_REMOVE,
} from "../1. constants/searchConstants";

//SETTING SEARCH QUERY TO STATE
export const searchQuery = (query) => (dispatch) => {
  dispatch({
    type: SEARCH,
    payload: query,
  });
};

//PERFORMING SEARCH
export const searchCallAction = (query) => async (dispatch) => {
  dispatch({
    type: SEARCH_CALL_REQUEST,
  });
  try {
    const { data } = await axios.get(`${API_URL}${query}${API_KEY}`);
    console.log(data.Search);

    dispatch({
      type: SEARCH_CALL_SUCCESS,
      payload: data.Search,
    });
  } catch (error) {
    dispatch({
      type: SEARCH_CALL_FAIL,
      payload: error.message,
    });
  }
};

//NOMINATING MOVIE
export const nominateMovie = (movie) => (dispatch, getState) => {
  dispatch({
    type: NOMINATE,
    payload: movie,
  });

  console.log(movie);

  localStorage.setItem(
    "nominatedMovies",
    JSON.stringify(getState().moviesNominated.nominatedMovies)
  );
};

//REMOVING NOMINATION
export const removeNominatedMovie = (movie) => (dispatch, getState) => {
  dispatch({
    type: NOMINATE_REMOVE,
    payload: movie,
  });
  localStorage.setItem(
    "nominatedMovies",
    JSON.stringify(getState().moviesNominated)
  );
};
