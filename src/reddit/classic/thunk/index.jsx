import React, { useRef } from 'react';
import { Provider } from 'react-redux';
import configureStore from './redux/configure-store';
import AsyncApp from './AsyncApp';
import useTitle from '../../../common/useTitle';

const Reddits = () => {
  const store = useRef(configureStore());

  useTitle('Reddit Classic Redux - with thunk');

  return (
    <Provider store={store.current}>
      <AsyncApp />
    </Provider>
  );
};

export default Reddits;
