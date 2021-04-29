import React, { createRef } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Button, Input } from 'reactstrap';
import { addTodo } from './slices/todos';

export default function AddTodo() {
  const dispatch = useDispatch();
  let inputText = createRef();

  const onAddTodo = (text) => {
    dispatch(addTodo(text));
  };

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
