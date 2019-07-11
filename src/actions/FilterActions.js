export const FILTER_CHANGED = 'FILTER_CHANGED', INPUT_CHANGED = 'INPUT_CHANGED';

// export const config = {
//     baseUrl:  'https://api.themoviedb.org/3',
//     apiKey:   '1fafe97d2ee12ba14e11814dc5afeaa2',
//     language: 'en-US',
// }

// export function setUrl( baseUrl, apiKey, language, page, filter) {
//     return `${baseUrl}/movie/${filter}?api_key=${apiKey}&language=${language}&page=${page}&region=UA`;
// }

export function filterChange( filter ) {
    // const { baseUrl, apiKey, language } = config;
    return dispatch => {
        dispatch({
            type: FILTER_CHANGED,
           // urlPayload: setUrl( baseUrl, apiKey, language, 1, filter),
            payload: filter,
        })
    }
}