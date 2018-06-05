import { delay } from 'redux-saga'
import { put, takeEvery, all } from 'redux-saga/effects'


function* incrementAsync() {
    yield delay(1000)
    yield put({ type: 'INCREMENT' })
  }
  
  
  function* watchIncrementAsync() {
    yield takeEvery('INCREMENT_ASYNC', incrementAsync)
  }
  
  function* helloSaga() {
    console.log('Hello Sagas!')
  }
  
  // notice how we now only export the rootSaga
  // single entry point to start all Sagas at once
  export default function* rootSaga() {
    yield all([
      helloSaga(),
      watchIncrementAsync()
    ])
  }