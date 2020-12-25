import auth from './auth/reducer';
import user from './user/reducer';
import { combineReducers } from 'redux';

export default combineReducers({
  auth, user,
});
