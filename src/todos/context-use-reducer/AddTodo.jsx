import React, { useContext } from 'react';
import { Form, Button, Input } from 'reactstrap';
import todoContext from './StateManager/todo-context';

export default function AddTodo() {
  const ctx = useContext(todoContext);
  const { onAddTodo } = ctx;
  let inputText = React.createRef();
  return (
    <div>
      <Form
        inline
        onSubmit={(evt) => {
          evt.preventDefault();
          if (!inputText.current.value.trim()) {
            return;
          }
          onAddTodo(inputText.current.value);
          inputText.current.value = '';
        }}
      >
        <Input innerRef={inputText} className='me-2' />
        <Button color='primary'>Add Todo</Button>
      </Form>
    </div>
  );
}
