import { useReducer } from 'react';
import FilterButtons from './FilterButtons';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import initialTodos from '../older-ways/common/initial-todos';
import { addTodo, toggleTodo, setFilter } from './StateManager/actions';
import { todoReducer, filterReducer } from './StateManager/reducers';
import TodoContext from './StateManager/todo-context';
import { StatusFilters } from '../common/StatusFilters';

//dispatch: single function that schedules the changes: dispatch(action)
//action: object that describes the changes we want to do to the state
//  action.type: describes the type of change
//  action.payload: data for the action
//reducer: method scheduled by the dispatch. Takes two arguments:
//  reducer(currentState, action) : returns the new state.
//reducers have to use the state in an *immutable* way.

//actions exemples:
//{type: 'todos/addTodo', payload: 'Buy Milk'}
//{type: 'todos/toggleTodo', payload: 2}
//{type: 'todos/deleteTodo', payload: 3}
//{type: 'todos/editTodo, payload: {id:4, newText: 'Walk the dog'}}

export default function Todos() {
  const [todos, dispatchTodos] = useReducer(todoReducer, initialTodos);
  const [visibilityFilter, dispatchFilter] = useReducer(
    filterReducer,
    StatusFilters.All
  );

  function filterTodos(todos, filter) {
    switch (filter) {
      case StatusFilters.All:
        return todos;
      case StatusFilters.Completed:
        return todos.filter((t) => t.completed);
      case StatusFilters.Active:
        return todos.filter((t) => !t.completed);
      default:
        throw new Error('Unknown filter: ' + filter);
    }
  }

  const filteredTodos = filterTodos(todos, visibilityFilter);

  return (
    <TodoContext.Provider
      value={{
        todos: filteredTodos,
        visibilityFilter: visibilityFilter,
        onAddTodo: (text) => dispatchTodos(addTodo(text)),
        onToggleTodo: (id) => dispatchTodos(toggleTodo(id)),
        onDeleteTodo: (id) => alert('to be completed ' + id),
        onChangeFilter: (text) => dispatchFilter(setFilter(text)),
      }}
    >
      <h1>Todos (using Hooks, Context and Reducers)</h1>
      <AddTodo />
      <FilterButtons />
      <TodoList />
    </TodoContext.Provider>
  );
}
