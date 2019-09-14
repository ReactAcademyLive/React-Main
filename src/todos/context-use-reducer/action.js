//action creators
export function addTodo(text) {
  return { type: 'ADD_TODO', text };
}

export function toggleTodo(id) {
  return { type: 'TOGGLE_TODO', id };
}

export function editTodo(id, newText) {
  return { type: 'EDIT_TODO', id, text: newText };
}

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};
