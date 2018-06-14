import { createStore } from 'redux';


import countReducer from './reducers/CountReducer';

// const reducer = combineReducers( {countReducer,})
const store = createStore(countReducer);

export default store;