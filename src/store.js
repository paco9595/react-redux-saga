import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers'
//import { incrementAsync, watchIncrementAsync } from "./sagas/sagas";
//import  {fetchProducts}  from './sagas/hellowSaga';
import { incrementAsync} from './sagas/sagas';
const inisialState = {};
//const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducer,
  inisialState,
  applyMiddleware()
)
//agaMiddleware.run(incrementAsync)
console.log(store.getState())
export default store;