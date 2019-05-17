import React, { Component } from 'react';
import FilterButtons from './filter-buttons';
import AddTodo from './add-todo';
import VisibleTodoList from './visible-todo-list';
//import TodoList from './todo-list';
import { VisibilityFilters } from './visibility-filters';


export default class Todos extends Component {
  state = {
    todos: [{id:1, text: "Buy Milk", completed:false},
            {id:2, text: "Walk the Dog", completed:false},
            {id:3, text: "Learn React", completed:false}
          ],
    visibilityFilter: VisibilityFilters.SHOW_ALL //"SHOW_COMPLETED", "SHOW_ACTIVE" 
  };
  currentId = 4;

  toggleTodo = (id) => {
    this.setState({
      todos:
        this.state.todos.map(todo =>
          (todo.id === id)
            ? { ...todo, completed: !todo.completed }
            : todo
        )
    })
  };

  addTodo = (todoText) => (
    this.setState((prevState) => (
      {
        todos: [
          ...prevState.todos,
          {
            id: this.currentId++,
            text: todoText,
            completed: false
          }
        ]
      }
    ))
  );

  deleteTodo = (id) => (
    this.setState({todos: this.state.todos.filter((todo) => (todo.id!==id))})
  );


  changeFilter = (filter) => (
    this.setState({ visibilityFilter: filter }));

  // sortText = (a,b) => {
  //   const textA = a.text.toUpperCase(); // ignore upper and lowercase
  //   const textB = b.text.toUpperCase(); // ignore upper and lowercase
  //   if (textA < textB) {
  //     return -1;
  //   }
  //   if (textA > textB) {
  //     return 1;
  //   }
  //   // names must be equal
  //   return 0;
  // }



  render() {
    return (
      <div >
        <h1>Todos (using state)</h1>
        <AddTodo onAddTodo={this.addTodo} />
        <FilterButtons
          visibilityFilter={this.state.visibilityFilter}
          onChangeFilter={this.changeFilter} />
        <VisibleTodoList
          todos={this.state.todos}
          visibilityFilter={this.state.visibilityFilter}
          onToggleTodo={this.toggleTodo}
          onDeleteTodo={this.deleteTodo}
        />
      </div>

    );
  }
}



