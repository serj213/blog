import { combineReducers } from 'redux';
import { cartReducers } from './carts/reducers';
import { appReducers } from './app/reducers';

export const rootReducer = combineReducers({
  app: appReducers,
  news: cartReducers,
});
