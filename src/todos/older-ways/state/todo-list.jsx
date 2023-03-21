import TodoItem from './todo-item';
import { ListGroup } from 'react-bootstrap';

const TodoList = ({ todos, onToggleTodo }) => (
  <ListGroup className='my-4'>
    {todos.map((todo) => (
      <TodoItem key={todo.id} {...todo} onClick={() => onToggleTodo(todo.id)} />
    ))}
  </ListGroup>
);

export default TodoList;
