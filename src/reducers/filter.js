import { FILTER_CHANGED } from '../actions/FilterActions'

const initialState = {
    filter: 'popular',
    inputValue: '',
    nextPage: '1',
    url: `https://api.themoviedb.org/3/movie/popular?api_key=1fafe97d2ee12ba14e11814dc5afeaa2&language=en-US&page=1&region=UA`,
}

export function filterReducer( state = initialState, action ) {
    switch( action.type ) {
        case FILTER_CHANGED: {
            return {...state, filter: action.filterPayload, url: action.urlPayload}
        }
        default: 
            return state;
    }
}