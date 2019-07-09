import { config } from '../components/Main/Main'

export const GET_MOVIES_REQUEST = 'GET_MOVIES_REQUEST',
             GET_MOVIES_SUCCESS = 'GET_MOVIES_SUCCESS',
             GET_MOVIES_FAILURE = 'GET_MOVIES_FAILURE';

const { baseUrl, apiKey, language } = config;



function fetchMovies(page) {
    return dispatch => {
        let  url = `${baseUrl}/movie/popular?api_key=${apiKey}&language=${language}&page=${page}&region=UA`;
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

export function getMovies( page ) {
    return function( dispatch ) {
        dispatch({
            type: GET_MOVIES_REQUEST
        })
        fetchMovies(page)(dispatch);
           
    }
}





