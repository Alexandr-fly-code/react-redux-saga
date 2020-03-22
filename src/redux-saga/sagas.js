import { all } from 'redux-saga/effects';

import { watchFetchData } from './fetchComponent/watcherFetchData';

export default function* rootSaga() {
  yield all([
    watchFetchData()
  ]);
};