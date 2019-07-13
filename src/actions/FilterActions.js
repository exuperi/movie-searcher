export const FILTER_CHANGED = 'FILTER_CHANGED', INPUT_CHANGED = 'INPUT_CHANGED';

export function filterChange( filter ) {
    return dispatch => {
        dispatch({
            type: FILTER_CHANGED,
            payload: filter,
        })
    }
}

export function inputChange( value ) {
    return dispatch => {
        dispatch({
            type: INPUT_CHANGED,
            payload: value,
        })
    }
}