import { combineReducers } from 'redux';
import credentials from './credentials';
import rider from './rider';
import driver from './driver';
import vehicle from './vehicle';

export default combineReducers({
  id: (state = null, action) => {
    switch (action.type) {
      case 'INITIAL_STATE_UPDATED':
        return action.payload.userToken || state;
      case 'REGISTRATION_CREATED':
        return action.payload.id;
      default:
        return state;
    }
  },
  credentials,
  rider,
  driver,
  vehicle,
});
