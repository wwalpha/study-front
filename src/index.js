import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux'

import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Route } from 'react-router'
import logger from 'redux-logger';

import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'

import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import EngApp from './containers/eng/App';
import CalcApp from './containers/calc/App';
import * as reducers from './reducers';
import api from './middlewares/api';
import upload from './middlewares/upload';
import router from './middlewares/router';

injectTapEventPlugin();

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const rMiddleware = routerMiddleware(history)

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  applyMiddleware(
    api,
    upload,
    router,
    logger,
    rMiddleware,
  ),
)

const root = document.getElementById('root');

render(
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div>
          <Route exact path="/" component={EngApp}/>
          <Route path="/calc" component={CalcApp}/>
        </div>
      </ConnectedRouter>
    </Provider>
  </MuiThemeProvider>,
  root,
);
