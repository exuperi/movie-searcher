import { SHOW_DETAILS, HIDE_DETAILS } from '../actions/MovieActions'

const initialState = {
    title: "",
    id: 0,
    imagePath: '',
    overview: '',
    popularity: 0,
    releaseDate: '',
    details: false,
};

export function movieReducer( state = initialState, action ) {
    switch( action.type ) {
        case SHOW_DETAILS: {
            return {...state, details: true,
                title: action.payload.title, 
                overview: action.payload.overview,
                imagePath: action.payload.imagePath,
                popularity: action.payload.popularity,
                releaseDate: action.payload.releaseDate
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