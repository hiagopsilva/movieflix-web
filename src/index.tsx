import React from 'react';

import '~/utils/config/reactotron';
import { createBrowserHistory } from 'history';
import { Provider } from 'mobx-react';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { CssBaseline } from '@material-ui/core';
import Routes from '~/routes';
import store from '~/stores';
import { breakpoints, colors, radius, spacings } from '~/theme';
import * as serviceWorker from './serviceWorker';

import GlobalStyles from './theme/global';
import { Toastify } from './utils/modules';
import 'react-toastify/dist/ReactToastify.css';

const browserHistory = createBrowserHistory();
const routingStore = new RouterStore();
const routing = syncHistoryWithStore(browserHistory, routingStore);

const stores = { ...store, routing };
const theme = {
  ...colors,
  ...spacings,
  ...radius,
  ...breakpoints,
};

ReactDOM.render(
  <Provider {...stores}>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <Router history={routing}>
        <Toastify.ToastContainer />

        <Routes />
      </Router>
      <GlobalStyles />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
