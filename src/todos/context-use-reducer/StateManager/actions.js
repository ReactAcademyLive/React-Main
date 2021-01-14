//action creators
export function addTodo(text) {
  return { type: 'todos/addTodo', payload: text };
}

export function toggleTodo(id) {
  return { type: 'todos/toggleTodo', payload: id };
}

export function editTodo(id, newText) {
  return { type: 'todos/editTodos', payload: { id: id, text: newText } };
}

//add deleteTodo here

export function setFilter(text) {
  return { type: 'visibilityFilter/setStatus', payload: text };
}

//export the three filters
export const StatusFilters = {
  All: 'all',
  Active: 'active',
  Completed: 'completed',
};
