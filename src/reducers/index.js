import { createStore, combineReducers } from 'redux';
import app from './app';
import word from './word';
import middle from '../middleware/index';

const appStore = createStore(
  combineReducers({
    app,
    word,
  }),
  middle,
);

export default appStore;
