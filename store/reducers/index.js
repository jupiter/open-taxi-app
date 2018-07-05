import { combineReducers } from 'redux';
import registration from './registration';
import initialLocation from './initialLocation';

export default combineReducers({
  registration,
  initialLocation,
});
