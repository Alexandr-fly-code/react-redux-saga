import { takeEvery } from 'redux-saga/effects';
import { FETCH_DATA } from '../../store/fetchComponent/actions';

import { workerFetchData } from './workerFetchData';

export function* watchFetchData() {
  yield takeEvery(FETCH_DATA, workerFetchData);
}
