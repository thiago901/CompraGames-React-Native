import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import cart from './cart/saga';

export default function* rootSaga() {
  return yield all([auth, cart]);
}
