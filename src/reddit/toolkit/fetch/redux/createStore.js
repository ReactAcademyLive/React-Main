import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
//import { createLogger } from 'redux-logger';

//const loggerMiddleware = createLogger()

const createStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: [], // [loggerMiddleware]
  });

export default createStore;
