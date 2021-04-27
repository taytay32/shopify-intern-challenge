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
  activateHome: "linksWrap__link linksWrap__link--active",
  activateResults: "linksWrap__link",
  activateNominations: "linksWrap__link",
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
