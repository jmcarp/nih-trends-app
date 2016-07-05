import { takeLatest } from 'redux-saga';
import { call, put, select } from 'redux-saga/effects';

import { SELECT_TERM, LOAD_COUNTS, LOAD_COUNTS_ERROR } from './constants';
import { fetchTermYearCounts } from './api';

// All sagas to be loaded
export default [
  countSaga
];

function* fetchCounts(action) {
  try {
    const counts = yield call(fetchTermYearCounts, {cui: action.terms.map(term => term.value)});
    yield put({type: LOAD_COUNTS, counts: counts});
  } catch (e) {
    yield put({type: LOAD_COUNTS_ERROR, message: e.message});
  }
}

// Individual exports for testing
export function* countSaga() {
  yield* takeLatest(SELECT_TERM, fetchCounts);
}
