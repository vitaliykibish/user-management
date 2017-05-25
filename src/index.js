import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'mobx-react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import UserStore from './store/User';
import usersData from './data/users';
import User from './components/User';

const store = new UserStore(usersData);

render(
  <Provider store={store}>
    <MuiThemeProvider>
      <User />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
