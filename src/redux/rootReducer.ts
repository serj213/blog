import { combineReducers } from 'redux';
import { cartReducers } from './carts/reducers';

export const rootReducer = combineReducers({
  carts: cartReducers,
});
