import { combineReducers } from 'redux';
import { counterReducer } from './counterReducer';
// import { helloWorldReducer } from './helloWordReducer'

export default combineReducers({
    counterReducer,
 //   helloWordReducer
});