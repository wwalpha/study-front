import { createStore, combineReducers } from 'redux';
import app from './app';
import word from './word';
import middle from '../middleware/index';
import { routerReducer } from 'react-router-redux'

const appStore = createStore(
  combineReducers({
    app,
    word,
    router: routerReducer,
  }),
  middle,
);

export default appStore;
