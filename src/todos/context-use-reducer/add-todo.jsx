import React from 'react';
import { Form, Button, Input } from 'reactstrap';
import TodoContext from './todo-context';

export default function AddTodo(props) {
  const context = React.useContext(TodoContext);
  const { onAddTodo } = context;

  let inputText = React.createRef();
  return (
    <div>
      <Form
        inline
        onSubmit={evt => {
          evt.preventDefault();
          if (!inputText.current.value.trim()) {
            return;
          }
          onAddTodo(inputText.current.value);
          inputText.current.value = '';
          inputText.current.focus();
        }}
      >
        <Input innerRef={inputText} className='mr-2' autoFocus />
        <Button color='primary'>Add Todo</Button>
      </Form>
    </div>
  );
}
