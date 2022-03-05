import React, { useRef } from 'react';
import { Provider } from 'react-redux';
import createStore from './redux/createStore';
import AsyncApp from './AsyncApp';
import useTitle from '../../../common/useTitle';

const Reddits = () => {
  const store = useRef(createStore());

  useTitle('Reddit RTK - with thunk');

  return (
    <Provider store={store.current}>
      <AsyncApp />
    </Provider>
  );
};

export default Reddits;
