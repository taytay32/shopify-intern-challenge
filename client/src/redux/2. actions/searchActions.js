import axios from "axios";
import { API_KEY, API_URL } from "../../Utils";
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

export const searchAction = (query) => (dispatch) => {
  dispatch({
    type: SEARCH,
    payload: query,
  });
};

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

export const nominateMovie = (movie) => (dispatch, getState) => {
  dispatch({
    type: NOMINATE,
    payload: movie,
  });

  console.log(movie);

  localStorage.setItem(
    "nominatedMovies",
    JSON.stringify(getState().moviesNominated)
  );
};

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

export const activateHome = () => (dispatch, getState) => {
  dispatch({
    type: ACTIVATE_HOME,
    payload: "linksWrap__link linksWrap__link--active",
  });
  localStorage.setItem("homeClass", JSON.stringify(getState().activateHome));
  dispatch({
    type: ACTIVATE_RESULTS,
    payload: "linksWrap__link",
  });
  localStorage.setItem(
    "resultsClass",
    JSON.stringify(getState().activateResults)
  );
  dispatch({
    type: ACTIVATE_NOMINATIONS,
    payload: "linksWrap__link",
  });
  localStorage.setItem(
    "nominationsClass",
    JSON.stringify(getState().activateNominations)
  );
};

export const activateResults = () => (dispatch, getState) => {
  dispatch({
    type: ACTIVATE_RESULTS,
    payload: "linksWrap__link linksWrap__link--active",
  });
  localStorage.setItem(
    "resultsClass",
    JSON.stringify(getState().activateResults)
  );
  dispatch({
    type: ACTIVATE_HOME,
    payload: "linksWrap__link",
  });
  localStorage.setItem("homeClass", JSON.stringify(getState().activateHome));
  dispatch({
    type: ACTIVATE_NOMINATIONS,
    payload: "linksWrap__link",
  });
  localStorage.setItem(
    "nominationsClass",
    JSON.stringify(getState().activateNominations)
  );
};

export const activateNominations = () => (dispatch, getState) => {
  dispatch({
    type: ACTIVATE_NOMINATIONS,
    payload: "linksWrap__link linksWrap__link--active",
  });
  localStorage.setItem(
    "nominationsClass",
    JSON.stringify(getState().activateNominations)
  );
  dispatch({
    type: ACTIVATE_HOME,
    payload: "linksWrap__link",
  });
  localStorage.setItem("homeClass", JSON.stringify(getState().activateHome));
  dispatch({
    type: ACTIVATE_RESULTS,
    payload: "linksWrap__link",
  });
  localStorage.setItem(
    "resultsClass",
    JSON.stringify(getState().activateResults)
  );
};
