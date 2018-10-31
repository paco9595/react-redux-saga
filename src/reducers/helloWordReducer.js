import * as type from '../types';

const initialState = {
    hello: 'paco'
}
export function helloWorldReducer(state = initialState, action) {
    switch (action.type) {
        case type.HELLOW_WORLD:
            return Object.assign({}, state, {
                hello: action.data
            })
        default:
            return state;
    }
}