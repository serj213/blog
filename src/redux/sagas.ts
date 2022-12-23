import { all } from 'redux-saga/effects';

// import { cartSaga } from './carts/sagas';
import { authSaga } from './auth/sagas';
import { profileSagas } from './profile/sagas';

export function* rootSaga() {
  yield all([authSaga(), profileSagas()]);
}
