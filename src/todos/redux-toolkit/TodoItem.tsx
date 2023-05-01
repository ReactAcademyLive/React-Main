import { MouseEvent } from 'react';
import { ListGroup, Button } from 'react-bootstrap';

interface TodoItemProps {
  onToggle: (evt: MouseEvent) => void;
  onDelete: (evt: MouseEvent) => void;
  onEdit?: (newText: string) => void;
  completed: boolean;
  text: string;
}

interface CustomCheckboxProps {
  completed: boolean;
  text: string;
}

export default function TodoItem({
  onToggle,
  onDelete,
  completed,
  text,
}: TodoItemProps) {
  return (
    <ListGroup.Item onClick={onToggle} action as='a'>
      <CustomCheckbox text={text} completed={completed} />
      <Button className='float-end mt-2' variant='info' onClick={onDelete}>
        🗑️
      </Button>
    </ListGroup.Item>
  );
}

function CustomCheckbox({ text, completed }: CustomCheckboxProps) {
  return (
    <div className='form-check float-start my-3'>
      <input
        type='checkbox'
        className='form-check-input'
        checked={completed}
        onChange={() => null}
      />
      <label
        className={
          'form-check-label' +
          (completed ? ' text-decoration-line-through text-muted' : '')
        }
      >
        {text}
      </label>
    </div>
  );
}
