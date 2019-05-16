import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './redux/configure-store';
import AsyncApp from './async-app';

const store = configureStore();

const Reddits = () => (
  <Provider store={store}>
    <AsyncApp />
  </Provider>
);

export default Reddits;