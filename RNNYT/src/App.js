import React from 'react';
import { Provider } from 'react-redux';
import HomeScreen from './components/HomeScreen';
import createStore, {executeSageWatcher }from './createStore';
import { watcherSaga } from "./sagas";
import createSagaMiddleware from "redux-saga";

const store = createStore();
executeSageWatcher();
export default () => (
     <Provider store={store}>
       <HomeScreen />
     </Provider>
);
