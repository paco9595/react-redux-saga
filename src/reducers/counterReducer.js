import * as type from '../types';
const initialState = {
    count: 0
}
export function counterReducer(state = initialState, action) {
    switch (action.type) {
        case type.ADD_COUNTER:
            return {
                ...state,
                count: action.num
            }
        case type.REDUCE_COUNTER:
            return {
                ...state,
                count: action.num
            }
        case type.RESET_COUNTER:
            return {
                ...state,
                count: action.num
            }
        case type.DOBLE_COUNTER:
            return {
                ...state,
                count: action.num
            }
        default:
            return state;
    }
}