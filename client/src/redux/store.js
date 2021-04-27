import { applyMiddleware, createStore, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { searchCallReducer, searchReducer } from "./3. reducers/searchReducer";

const initialState = {};
const reducer = combineReducers({
  searchMovie: searchReducer,
  searchCall: searchCallReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
