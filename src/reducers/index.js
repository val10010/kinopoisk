import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { itemsHasErrored, itemsIsLoading,isHasData,itemsAllFilms, itemCurrentFilm } from './items';

export default combineReducers({
    routing: routerReducer,
    isHasData,
    itemsHasErrored,
    itemsIsLoading,
    itemsAllFilms,
    itemCurrentFilm
});