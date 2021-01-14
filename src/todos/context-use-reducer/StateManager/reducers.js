let currentId = 4;

export function todoReducer(todos, action) {
  switch (action.type) {
    case 'todos/addTodo':
      return [
        ...todos,
        {
          id: currentId++,
          text: action.payload,
          completed: false,
        },
      ];
    case 'todos/toggleTodo':
      return todos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case 'todos/editTodo':
      return todos.map((todo) =>
        todo.id === action.payload ? { ...todo, text: action.text } : todo
      );
    default:
      return todos;
  }
}

export function filterReducer(currentFilter, action) {
  switch (action.type) {
    case 'visibilityFilter/setStatus':
      return action.payload;
    default:
      return currentFilter;
  }
}
