import { all } from 'redux-saga/effects';

import { cartSaga } from './carts/sagas';
import { postDetailsSaga } from './postDetails/sagas';
import { authSaga } from './auth/sagas';
import { profileSagas } from './profile/saga';

export function* rootSaga() {
  yield all([cartSaga(), postDetailsSaga(), authSaga(), profileSagas()]);
}
