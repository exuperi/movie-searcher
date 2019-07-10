import { config, url } from '../components/Main/Main'

export const GET_MOVIES_REQUEST = 'GET_MOVIES_REQUEST',
             GET_MOVIES_SUCCESS = 'GET_MOVIES_SUCCESS',
             GET_MOVIES_FAILURE = 'GET_MOVIES_FAILURE';

// export const url = ``

function fetchMovies(url) {
    return dispatch => {
        fetch( url, {
            method: 'GET'
        })
            .then((result) => {
                
                return result.json();
            })
            .then( ({results}) => {
                if (results.length > 0) {
                    dispatch({
                        type: GET_MOVIES_SUCCESS,
                        payload: results,
                    });
                }
                
    
            })
            .catch(({message}) => {
                dispatch({
                    type: GET_MOVIES_FAILURE,
                    payload: message
                })
                console.log(message);
            })
        
    }
    
}


export function getMovies( url ) {
    return function( dispatch ) {
        dispatch({
            type: GET_MOVIES_REQUEST
        })
        fetchMovies(url)(dispatch);
           
    }
}





