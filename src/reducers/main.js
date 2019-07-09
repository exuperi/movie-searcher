import { 
    GET_MOVIES_REQUEST, 
    GET_MOVIES_SUCCESS, 
    GET_MOVIES_FAILURE} from '../actions/MainActions';

const initialState = {
    movies: [],
    inputValue: '',
    filter: 'popular',
    page: 1,
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
                 movies: state.movies.concat( action.payload ), page: state.page + 1}
        }
        case GET_MOVIES_FAILURE: {
            return {...state, isFetching: false, error: action.payload}
        }
        // case GET_MORE_MOVIES_REQUEST: {
        //     return {...state, loadMore: true, page: state.page + 1}
        // }
        default:
            return state;
    }
}