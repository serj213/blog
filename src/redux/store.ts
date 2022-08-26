import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import createSagaMiddelware from 'redux-saga';
import { rootReducer } from './rootReducer';
import { rootSaga } from './sagas';

const saga = createSagaMiddelware();

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(saga)));

saga.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
