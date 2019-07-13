import { SHOW_DETAILS, HIDE_DETAILS } from '../actions/MovieActions'

const initialState = {
    title: "",
    id: 0,
    imagePath: '',
    overview: '',
    popularity: 0,
    details: false,
};

export function movieReducer( state = initialState, action ) {
    switch( action.type ) {
        case SHOW_DETAILS: {
            return {...state, details: true,
                 title: action.payload[0], 
                 overview: action.payload[1],
                imagePath: action.payload[2],
                popularity: action.payload[3]
                };
        }
        case HIDE_DETAILS: {
            return {...state, details: false};
        }
        default: {
            return state;
        }
    }
}