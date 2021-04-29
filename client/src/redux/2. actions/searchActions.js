import axios from "axios";
import { API_KEY, API_URL, API_URL_ID } from "../../Utils";
import {
  SEARCH,
  SEARCH_CALL_REQUEST,
  SEARCH_CALL_SUCCESS,
  SEARCH_CALL_FAIL,
  NOMINATE,
  NOMINATE_REMOVE,
  MOVIE_DETAILS_REQUEST,
  MOVIE_DETAILS_SUCCESS,
  MOVIE_DETAILS_FAIL,
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
    JSON.stringify(getState().moviesNominated.nominatedMovies)
  );
};

//GET SELECTED MOVIE DETAILS
export const movieDetails = (imdbID) => async (dispatch) => {
  dispatch({
    type: MOVIE_DETAILS_REQUEST,
  });
  try {
    const { data } = await axios.get(`${API_URL_ID}${imdbID}${API_KEY}`);

    dispatch({
      type: MOVIE_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: MOVIE_DETAILS_FAIL,
      payload: error.message,
    });
  }
};
