import { applyMiddleware } from 'redux'
import logger from 'redux-logger';
import api from './api';
// import init from './init';

const middleware = applyMiddleware(
  api,
  // init,
  logger,
)

export default middleware