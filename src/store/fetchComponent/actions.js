export const FETCH_DATA = 'FETCH_DATA';
export const SET_DATA = 'SET_DATA';

export const fetchData = () => ({
  type: FETCH_DATA
});

export const setData = (dataFromServer) => ({
  type: SET_DATA,
  payload: dataFromServer
});