import { combineReducers } from 'redux';

import auth from './auth/reducer';
import cart from './cart/reducer';
import user from './user/reducer';

export default combineReducers({
  auth,
  cart,
  user,
});
