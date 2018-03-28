import { createStore, applyMiddleware } from 'redux';
import { apiMiddleware as api } from 'redux-api-middleware';
import logger from 'redux-logger';
import reducer from '../reducers';

const store = createStore(
  reducer,
  applyMiddleware(api, logger),
);

export default store;
