import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './posts';
import selectedSubredditReducer from './selectedSubreddit';
//import { createLogger } from 'redux-logger';

//const loggerMiddleware = createLogger()

const createStore = () =>
  configureStore({
    reducer: {
      posts: postsReducer,
      selectedSubreddit: selectedSubredditReducer,
    },
    // middleware: (getDefaultMiddleware) =>
    //   getDefaultMiddleware().concat(loggerMiddleware),
  });

export default createStore;
