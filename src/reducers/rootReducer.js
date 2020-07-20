import {combineReducers} from 'redux';
import templateReducer from './templateReducer';

export default combineReducers({
  Template: templateReducer,
});
