import { combineReducers } from 'redux';
import { filterReducer } from './filter';
import { movieReducer } from './movie';
import { mainReducer } from './main';

export const reducer = combineReducers({
    filter: filterReducer,
    movie: movieReducer,
    main: mainReducer,
});