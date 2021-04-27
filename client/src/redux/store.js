import { applyMiddleware, createStore, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import {
  nominateMovieReducer,
  searchCallReducer,
  searchReducer,
} from "./3. reducers/searchReducer";

const initialState = {
  moviesNominated: localStorage.getItem("nominatedMovies")
    ? JSON.parse(localStorage.getItem("nominatedMovies"))
    : [],
};

const reducer = combineReducers({
  searchMovie: searchReducer,
  searchCall: searchCallReducer,
  moviesNominated: nominateMovieReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
