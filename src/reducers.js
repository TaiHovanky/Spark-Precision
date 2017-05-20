import { combineReducers } from 'redux';
import page from './reducers/pageReducer';
import dashboardReducer from './reducers/dashboardReducer';

const sparkReducers = combineReducers({
  page,
  dashboardReducer
});

export default sparkReducers;