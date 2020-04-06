import {createStore,combineReducers} from 'redux';
import player from './player';
const reducer = combineReducers({player})
var store = createStore(reducer);
export default store;