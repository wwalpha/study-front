import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form/immutable';
import { apiMiddleware as api } from 'redux-api-middleware';
import logger from 'redux-logger';

const store = createStore(
  combineReducers({
    form: formReducer,
  }),
  applyMiddleware(api, logger),
);

export default store;
