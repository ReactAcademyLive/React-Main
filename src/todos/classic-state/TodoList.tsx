import TodoItem from './TodoItem';
import { ListGroup } from 'react-bootstrap';
import Todo from '../common/Todo';

interface TodoListProps {
  todos: Todo[];
  onToggleTodo: (id: number) => void;
  onDeleteTodo: (id: number) => void;
  onEditTodo?: (id: number, text: string) => void;
}

const TodoList = ({
  todos,
  onToggleTodo,
  onDeleteTodo,
  onEditTodo,
}: TodoListProps) => (
  <ListGroup className='my-4'>
    {todos.map((todo) => (
      <TodoItem
        key={todo.id}
        {...todo}
        onToggle={(evt) => onToggleTodo(todo.id)}
        onDelete={(evt) => {
          evt.stopPropagation();
          onDeleteTodo(todo.id);
        }}
        onEdit={(newText: string) => {
          if (onEditTodo) onEditTodo(todo.id, newText);
        }}
      />
    ))}
  </ListGroup>
);

export default TodoList;
