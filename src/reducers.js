import { combineReducers } from 'redux';
import page from './reducers/pageReducer';

const sparkReducers = combineReducers({
  page
});

export default sparkReducers;