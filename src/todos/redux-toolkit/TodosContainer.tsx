import FilterButtons from './FilterButtons';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import { Provider } from 'react-redux';
import { store } from './slices/store';

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
  return (
    <Provider store={store}>
      <h1>Todos (using Redux Toolkit)</h1>
      <AddTodo />
      <FilterButtons />
      <TodoList />
    </Provider>
  );
}
