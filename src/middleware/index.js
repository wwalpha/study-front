import { applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import logger from 'redux-logger';
import api from './api';
import upload from './upload';
import router from './router';
import createHistory from 'history/createBrowserHistory';

const middleware = applyMiddleware(
  api,
  upload,
  router,
  logger,
  routerMiddleware(createHistory()),
);

export default middleware;
