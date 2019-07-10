import { 
    GET_MOVIES_REQUEST, 
    GET_MOVIES_SUCCESS, 
    GET_MOVIES_FAILURE} from '../actions/MainActions';



const initialState = {
    movies: [],
    isFetching: false,
    error: '',
};

export function mainReducer( state = initialState, action ) {
    switch( action.type ) {
        case GET_MOVIES_REQUEST: {
            return {...state, isFetching: true};
        }
        case GET_MOVIES_SUCCESS: {
            return {...state, isFetching: false,
                 movies: state.movies.concat( action.payload )}
        }
        case GET_MOVIES_FAILURE: {
            return {...state, isFetching: false, error: action.payload}
        }
        default:
            return state;
    }
}