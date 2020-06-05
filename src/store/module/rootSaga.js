import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import cart from './cart/saga';
import user from './user/saga';

export default function* rootSaga() {
  return yield all([auth, cart, user]);
}
