import { createStore, combineReducers } from 'redux';
import countReducer from './reducers/CountReducer';
import dummyReducer from './reducers/DummyReducer';

const reducer = combineReducers( {countReducer, dummyReducer})

export default createStore(reducer);