export function addTodo(text) {
  return { type:'ADD_TODO', text };
}

export function toggleTodo(id) {
  return { type: 'TOGGLE_TODO', id };
}

export function editTodo(id, newText) {
  return { type: 'EDIT_TODO', id, text: newText };
}

export function setVisibilityFilter(filter) {
  return { type: 'SET_VISIBILITY_FILTER', filter };
}

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};

//Actions describe "What we want to do" (type) and additionnal data

