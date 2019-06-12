import React, { useReducer, useState } from 'react';
import FilterButtons from './filter-buttons';
import AddTodo from './add-todo';
import VisibleTodoList from './visible-todo-list';
import TodoContext from './todo-context';
import reducer from "./reducer";
import {addTodo, toggleTodo, VisibilityFilters} from "./action";

//dispatch: single function schedule the changes: dispatch(action)
//action: describes the changes we want to do to the state
//        action.type: describes the type of change
//reducer: method scheduled by the dispatch. Takes two arguments:
//  reducer(currentState, action) : returns the new state.
//reducers have to use the state in an immutable way.


//actions exemples: 
//{type: "ADD_TODO", text: "Buy Milk"}
//{type: "TOGGLE_TODO", id: 2}
//{type: "DELETE_TODO", id: 3}


const initState = [{
  id: 1,
  text: "Buy milk",
  completed: false
}, {
  id: 2,
  text: "Walk the dog",
  completed: false
}, {
  id: 3,
  text: "Learn React",
  completed: false
}];



export default function Todos(props){
  const [todos, dispatch] = useReducer(reducer, initState );
  const [visibilityFilter, setVisibilityFilter] = useState(VisibilityFilters.SHOW_ALL);


  return (
    <TodoContext.Provider value={{
      todos: todos,
      onAddTodo: text => dispatch(addTodo(text)),
      onToggleTodo: id => dispatch(toggleTodo(id)),
      onDeleteTodo: id => null,
      visibilityFilter: visibilityFilter,
      onChangeFilter: setVisibilityFilter
    }} >
      <h1>Todos (using context, Hooks, actions and reducers)</h1>
      <AddTodo  />
      <FilterButtons />
      <VisibleTodoList />
    </TodoContext.Provider>
  );
}


//////////////////////////////////////////////////////

//  class OldTodos extends Component {
//   state = {
//     todos: [{
//       id: 1,
//       text: "Buy milk",
//       completed: false
//     }, {
//       id: 2,
//       text: "Walk the dog",
//       completed: false
//     }, {
//       id: 3,
//       text: "Learn React",
//       completed: false
//     }],
//     visibilityFilter: VisibilityFilters.SHOW_ALL //"SHOW_COMPLETED", "SHOW_ACTIVE" 
//   };
//   currentId = 4;

//   toggleTodo = (id) => {
//     this.setState({
//       todos:
//         this.state.todos.map(todo =>
//           (todo.id === id)
//             ? { ...todo, completed: !todo.completed }
//             : todo
//         )
//     })
//   };

//   addTodo = (todoText) => {
//     this.setState(
//       {
//         todos: [
//           ...this.state.todos,
//           {
//             id: this.currentId++,
//             text: todoText,
//             completed: false
//           }
//         ]
//       }
//     );
//   };

//   deleteTodo = (id) => {
//     this.setState({
//       todos:
//         this.state.todos.filter(
//           todo => todo.id !== id
//         )
//     });
//   }


//   changeFilter = (filter) => (this.setState({ visibilityFilter: filter }));

//   render() {
//     return (
//       <div>
//         <h1>Todos (using state)</h1>
//         <AddTodo onAddTodo={this.addTodo} />
//         <FilterButtons
//           visibilityFilter={this.state.visibilityFilter}
//           onChangeFilter={this.changeFilter} />
//         <VisibleTodoList
//           todos={this.state.todos}
//           visibilityFilter={this.state.visibilityFilter}
//           onToggleTodo={this.toggleTodo}
//           onDeleteTodo={this.deleteTodo}
//         />
//       </div>
//     );
//   }
// }



