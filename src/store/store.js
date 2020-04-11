import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import player from './player';
const reducer = combineReducers({player})
var store = createStore(reducer,applyMiddleware(thunk));
export default store;