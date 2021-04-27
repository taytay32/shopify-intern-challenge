import { applyMiddleware, createStore, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import {
  activateHomeReducer,
  activateNominationsReducer,
  activateResultsReducer,
  nominateMovieReducer,
  searchCallReducer,
  searchReducer,
} from "./3. reducers/searchReducer";

const initialState = {
  moviesNominated: localStorage.getItem("nominatedMovies")
    ? JSON.parse(localStorage.getItem("nominatedMovies"))
    : [],
  activateHome: localStorage.getItem("homeClass")
    ? JSON.parse(localStorage.getItem("homeClass"))
    : "linksWrap__link linksWrap__link--active",
  activateResults: localStorage.getItem("resultsClass")
    ? JSON.parse(localStorage.getItem("resultsClass"))
    : "linksWrap__link",
  activateNominations: localStorage.getItem("nominationsClass")
    ? JSON.parse(localStorage.getItem("nominationsClass"))
    : "linksWrap__link",
};

const reducer = combineReducers({
  searchMovie: searchReducer,
  searchCall: searchCallReducer,
  moviesNominated: nominateMovieReducer,
  activateHome: activateHomeReducer,
  activateResults: activateResultsReducer,
  activateNominations: activateNominationsReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
