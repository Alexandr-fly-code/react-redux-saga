import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import { setData } from '../../store/fetchComponent/actions';

export function* workerFetchData() {
  const data = yield call(() => {
    return axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.data);
  })

  yield put(setData(data));
};