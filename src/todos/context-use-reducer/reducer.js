let currentId = 4;

export default function reducer(todos, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...todos,
        {
          id: currentId++,
          text: action.text,
          completed: false
        }
      ];
    case 'TOGGLE_TODO':
      return todos.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case 'EDIT_TODO':
      return todos.map(todo =>
        todo.id === action.id ? { ...todo, text: action.text } : todo
      );
    default:
      return todos;
  }
}
