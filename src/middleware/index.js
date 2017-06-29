import { applyMiddleware } from 'redux';
import logger from 'redux-logger';
import api from './api';
import upload from './upload';

const middleware = applyMiddleware(
  api,
  upload,
  logger,
);

export default middleware;
