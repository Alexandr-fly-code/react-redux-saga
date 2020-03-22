import { combineReducers } from 'redux';

import { dataReducer } from './fetchComponent/reducers';

export default combineReducers({
  data: dataReducer
});