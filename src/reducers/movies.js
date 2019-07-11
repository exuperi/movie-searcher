import { 
    GET_MOVIES_REQUEST, 
    GET_MOVIES_SUCCESS, 
    GET_MOVIES_FAILURE} from '../actions/MoviesActions';



const initialState = {
    moviesArray: [],
    isFetching: false,
    error: '',
    page: 1
};

export function moviesReducer( state = initialState, action ) {
    switch( action.type ) {
        case GET_MOVIES_REQUEST: {
            return {...state, isFetching: true};
        }
        case GET_MOVIES_SUCCESS: {
            return {...state, isFetching: false,
                 moviesArray: state.moviesArray.concat( action.payload ), page: state.page + 1}
        }
        case GET_MOVIES_FAILURE: {
            return {...state, isFetching: false, error: action.payload}
        }
        default:
            return state;
    }
}