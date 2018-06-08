import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
import NYT_API_KEY from './config/nytApiKey';

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
  yield takeLatest("LOAD_NEWS", workerSaga);
}

// function that makes the api request and returns a Promise for response
function fetchTopStories() {
    console.log(`https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=${
        NYT_API_KEY}`); 
  return axios({
    method: "get",
    url: `https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=${
        NYT_API_KEY}`
  });
//  return fetch(`https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=${NYT_API_KEY}`);
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga() {
  try {
    const response = yield call(fetchTopStories);
    const data = response.data
    console.log("Success")
    // dispatch a success action to the store with the new top stories
    yield put({ type: "LOAD_NEWS", payload:data });
  
  } catch (error) {
    console.log("Error in saga")

    // dispatch a failure action to the store with the error
    yield put({ type: "API_CALL_FAILURE", error });
  }
}