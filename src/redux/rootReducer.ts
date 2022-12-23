import { combineReducers } from 'redux';

import { appReducers } from './app/reducers';
import { authReducers } from './auth/reducers';
import { userReducers } from './profile/reducers';

export const rootReducer = combineReducers({
  app: appReducers,
  auth: authReducers,
  profile: userReducers,
});
