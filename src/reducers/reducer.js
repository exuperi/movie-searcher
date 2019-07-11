import { combineReducers } from 'redux';
import { filterReducer } from './filter';
import { movieReducer } from './movie';
import { moviesReducer } from './movies';

export const reducer = combineReducers({
    filter: filterReducer,
    movie: movieReducer,
    movies: moviesReducer,
});