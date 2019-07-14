export const GET_MOVIES_REQUEST = 'GET_MOVIES_REQUEST'
        ,GET_MOVIES_SUCCESS = 'GET_MOVIES_SUCCESS'
        ,GET_MOVIES_FAILURE = 'GET_MOVIES_FAILURE';

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

function setUrl( filter, page, inputValue ) {
    const config = {
        baseUrl:  'https://api.themoviedb.org/3',
        apiKey:   '1fafe97d2ee12ba14e11814dc5afeaa2',
        language: 'en-US',
    }
    if( inputValue ) {
        return `${config.baseUrl}/search/movie?api_key=${config.apiKey}&page=${page}&query=${inputValue}`;
    }
    return `${config.baseUrl}/movie/${filter}?api_key=${config.apiKey}&language=${config.language}&page=${page}&region=UA`;
}


export function getMovies( filter, page, inputValue  = '') {
    return function( dispatch ) {
        dispatch({
            type: GET_MOVIES_REQUEST
        })

        const url = setUrl( filter, page, inputValue );
        fetchMovies(url)(dispatch);
           
    }
}


