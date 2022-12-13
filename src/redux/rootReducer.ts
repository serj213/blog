import { combineReducers } from 'redux';
import { cartReducers } from './carts/reducers';
import { appReducers } from './app/reducers';
import { postDetailsReducer } from './postDetails/reducers';
import { authReducers } from './auth/reducers';
import { userReducers } from './profile/reducers';

export const rootReducer = combineReducers({
  app: appReducers,
  auth: authReducers,
  news: cartReducers,
  postDetails: postDetailsReducer,
  profile: userReducers,
});
