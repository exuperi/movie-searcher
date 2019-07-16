export const SHOW_DETAILS = 'SHOW_DETAILS',
            HIDE_DETAILS = 'HIDE_DETAILS';

export function showDetails( title, overview, imagePath, popularity, releaseDate ) {
    return function( dispatch ) {
        dispatch ({
            type: SHOW_DETAILS,
            payload: {title, overview, imagePath, popularity, releaseDate},
        })
    }
}

export function hideDetails() {
    return function( dispatch ) {
        dispatch ({
            type: HIDE_DETAILS,
        })
    }
}