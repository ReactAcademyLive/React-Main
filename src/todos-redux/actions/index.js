let nextTodoId = 3;
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
});

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
});

export const editTodo = (id, newText) => ({
  type: 'EDIT_TODO',
  id,
  text: newText
})

export const deleteTodo= id =>({
  type: 'DELETE_TODO',
  id
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
});

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};

