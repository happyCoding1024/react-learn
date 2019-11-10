import { takeEvery } from 'redux-saga/effects';
import {GET_INIT_LIST} from "./actionTypes";

function* getInitList() {
  console.log('abc');
}

function* todoSagas() {
  yield takeEvery(GET_INIT_LIST, getInitList);
}

export default todoSagas;