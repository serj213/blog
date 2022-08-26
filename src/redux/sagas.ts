import { all } from 'redux-saga/effects';

import { cartSaga } from './carts/sagas';

export function* rootSaga() {
  yield all([cartSaga()]);
}
