import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './redux/configure-store';
import AsyncApp from './async-app';

const Reddits = () => {
  React.useEffect(
    ()=> {
      let savedTitle= document.title;
      document.title="Reddits!"
    return () => {document.title=savedTitle;}
    }
  , []);

  const store = configureStore();

  return(
    <Provider store={store}>
      <AsyncApp />
    </Provider>
  )
};

export default Reddits;