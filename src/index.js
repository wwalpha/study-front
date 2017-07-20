import React from 'react';
import { Route } from 'react-router'
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter } from 'react-router-redux'
import EnglishApp from './containers/EnglishApp';
import CalculateApp from './containers/CalculateApp';
import appStore from './reducers/index';

injectTapEventPlugin();

const root = document.getElementById('root');
const history = createHistory();

render(
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <Provider store={appStore}>
      <ConnectedRouter history={history}>
        <div>
          <Route exact path="/" component={EnglishApp}/>
          <Route path="/calc" component={CalculateApp}/>
        </div>
      </ConnectedRouter>
    </Provider>
  </MuiThemeProvider>,
  root,
);
