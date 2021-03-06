import { applyMiddleware, createStore, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import {
  movieDetailsReducer,
  nominateMovieReducer,
  searchCallReducer,
  searchQueryReducer,
} from "./3. reducers/searchReducer";

const initialState = {
  moviesNominated: {
    nominatedMovies: localStorage.getItem("nominatedMovies")
      ? JSON.parse(localStorage.getItem("nominatedMovies"))
      : [],
  },
};

const reducer = combineReducers({
  searchQ: searchQueryReducer,
  searchCall: searchCallReducer,
  moviesNominated: nominateMovieReducer,
  movieSelected: movieDetailsReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
