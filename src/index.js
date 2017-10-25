import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter as Router } from 'react-router-redux';
import store, { history } from './core/store';

import App from './views/app';

import './views/css/index.css';

ReactDOM.render(
  <Provider store={store}>
    { /* ConnectedRouter will use the store from Provider automatically */ }
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
