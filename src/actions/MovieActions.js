export const TEST = 'TEST';

export function movieAction() {
    return function( dispatch ) {
        dispatch ({
            type: TEST,
        })
    }
}