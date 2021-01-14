import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibility-filter';

export default combineReducers({
  todos: todos.reducer,
  visibilityFilter: visibilityFilter.reducer,
});
