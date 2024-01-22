import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import rootReducer from './reducers';
import { composeWithDevTools } from '@redux-devtools/extension';
//import { createLogger } from 'redux-logger';

//const loggerMiddleware = createLogger();

export default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(thunk /*, loggerMiddleware */))
  );
}
