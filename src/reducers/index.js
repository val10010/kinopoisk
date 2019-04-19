import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import {
  itemsHasErrored,
  itemsIsLoading,
  itemsAllFilms,
  itemCurrentFilm
} from "./items";

export default combineReducers({
  routing: routerReducer,
  itemsHasErrored,
  itemsIsLoading,
  itemsAllFilms,
  itemCurrentFilm
});
