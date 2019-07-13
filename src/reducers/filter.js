import { FILTER_CHANGED, INPUT_CHANGED } from '../actions/FilterActions'

const initialState = {
    currentFilter: 'popular',
    inputValue: '',
}

export function filterReducer( state = initialState, action ) {
    switch( action.type ) {
        case FILTER_CHANGED: {
            return {...state, currentFilter: action.payload}
        }
        case INPUT_CHANGED: {
            return {...state, inputValue: action.payload}
        }
        default: 
            return state;
    }
}