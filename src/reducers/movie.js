import { TEST } from '../actions/MovieActions'

const initialState = {
    title: "",
    id: 0,
    imagePath: '',
    overview: '',
    popularity: 0,
    showDetails: false,
};

export function movieReducer( state = initialState, action ) {
    switch( action.type ) {
        case TEST: {
            return {...state, testDone: true};
        }
        default: {
            return state;
        }
    }
}