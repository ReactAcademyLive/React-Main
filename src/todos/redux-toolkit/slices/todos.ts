import { createSlice } from '@reduxjs/toolkit';
import initialTodos from '../../common/initial-todos';

let nextTodoId = 4;

const todos = createSlice({
  name: 'todos',
  initialState: initialTodos,
  reducers: {
    addTodo: (state, action) => {
      state.push({ id: nextTodoId++, text: action.payload, completed: false });
    },

    editTodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.text = action.payload.text;
      }
    },

    toggleTodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export default todos;

export const { addTodo, editTodo, toggleTodo } = todos.actions;
