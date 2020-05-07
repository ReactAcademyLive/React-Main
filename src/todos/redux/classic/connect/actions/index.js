//Action constants
export const actionList = {
  ADD_TODO: 'ADD_TODO',
  TOGGLE_TODO: 'TOGGLE_TODO',
  EDIT_TODO: 'EDIT_TODO',
  SET_VISIBILITY_FILTER: 'SET_VISIBILITY_FILTER',
};

//Action creators
export function addTodo(text) {
  return { type: actionList.ADD_TODO, text };
}

export function toggleTodo(id) {
  return { type: actionList.TOGGLE_TODO, id };
}

export function editTodo(id, newText) {
  return { type: actionList.EDIT_TODO, id, text: newText };
}

export function setVisibilityFilter(filter) {
  return { type: actionList.SET_VISIBILITY_FILTER, filter };
}

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
};

// ActionList lists the types available. (Avoids typing magic string,
// use intellisense instead)
// Action creators will create an action that has a type and a payload
// Actions describe "What we want to do" (type) and additionnal data
