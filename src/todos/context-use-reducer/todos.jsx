import React, { useReducer, useState } from 'react';
import FilterButtons from './filter-buttons';
import AddTodo from './add-todo';
import VisibleTodoList from './visible-todo-list';
import TodoContext from './todo-context';
import reducer from './reducer';
import { addTodo, toggleTodo, VisibilityFilters } from './action';
import initialTodos from '../common/initial-todos';

//dispatch: single function that schedules the changes: dispatch(action)
//action: object that describes the changes we want to do to the state
//  action.type: describes the type of change
//reducer: method scheduled by the dispatch. Takes two arguments:
//  reducer(currentState, action) : returns the new state.
//reducers have to use the state in an *immutable* way.

//actions exemples:
//{type: "ADD_TODO", text: "Buy Milk"}
//{type: "TOGGLE_TODO", id: 2}
//{type: "DELETE_TODO", id: 3}

export default function Todos(props) {
  const [todos, dispatch] = useReducer(reducer, initialTodos);
  const [visibilityFilter, setVisibilityFilter] = useState(
    VisibilityFilters.SHOW_ALL
  );

  return (
    <TodoContext.Provider
      value={{
        todos: todos,
        onAddTodo: text => dispatch(addTodo(text)),
        onToggleTodo: id => dispatch(toggleTodo(id)),
        onDeleteTodo: id => null,
        visibilityFilter: visibilityFilter,
        onChangeFilter: setVisibilityFilter,
      }}
    >
      <h1>Todos (using context, hooks, actions and reducers)</h1>
      <AddTodo />
      <FilterButtons />
      <VisibleTodoList />
    </TodoContext.Provider>
  );
}
