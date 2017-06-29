import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './containers/App';
import appStore from './reducers/index';


injectTapEventPlugin();

const root = document.getElementById('root');

render(
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <Provider store={appStore}>
      <App />
    </Provider>
  </MuiThemeProvider>,
  root,
);
