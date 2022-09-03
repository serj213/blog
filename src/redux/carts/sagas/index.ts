import { takeLatest, put, call } from 'redux-saga/effects';
import { ICartItemSmall } from '../../../types/carts';
import { cartActions, ECartActions } from '../actions/index';
import { appCarts } from '../../app/actions';
import { cartApi } from '../../../api/modules/CartApi';

export function* cartSaga() {
  yield takeLatest(ECartActions.GET_CART, executeGetCarts);
}

function* executeGetCarts() {
  try {
    yield put(appCarts.pending());
    const response: ICartItemSmall = yield call(cartApi.getCarts);
    yield put(cartActions.setCart(response));
    yield put(appCarts.success());
  } catch (error) {
    yield put(appCarts.error());
    console.log('error getCarts', error);
    alert('ошибка при получении карточек');
  }
}
