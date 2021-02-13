import React, { useRef } from 'react';
import { Provider } from 'react-redux';
import createStore from './redux/createStore';
import AsyncApp from './AsyncApp';

const Reddits = () => {
  const store = useRef();

  if (!store.current) {
    store.current = createStore();
  }

  React.useEffect(() => {
    const savedTitle = document.title;
    document.title = 'Reddits!';
    return () => {
      document.title = savedTitle;
    };
  }, []);

  return (
    <Provider store={store.current}>
      <AsyncApp />
    </Provider>
  );
};

export default Reddits;
