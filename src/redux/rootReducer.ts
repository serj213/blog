import { combineReducers } from 'redux';
import { cartReducers } from './carts/reducers';
import { appReducers } from './app/reducers';
import { postDetailsReducer } from './postDetails/reducers';

export const rootReducer = combineReducers({
  app: appReducers,
  news: cartReducers,
  postDetails: postDetailsReducer
});
