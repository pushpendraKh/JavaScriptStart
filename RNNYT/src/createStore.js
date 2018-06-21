import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger} from 'redux-logger';
import newsFeedReducer from './reducers/newsFeedReducer';
import searchTermReducer from './reducers/searchTermReducer';
import loginReducer from './reducers/loginReducer'
import promiseMiddleware from 'redux-promise';
import createSagaMiddleware from "redux-saga";
import { watcherSaga } from "./sagas";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const logger = createLogger();
export default (initialState = {}) => (
     createStore(
       combineReducers({
         news: newsFeedReducer,
         searchTerm: searchTermReducer,
         userInfo:loginReducer,
       }),
       initialState,
       applyMiddleware(logger,sagaMiddleware)
) );


export const executeSageWatcher = () => {
    sagaMiddleware.run(watcherSaga)
}