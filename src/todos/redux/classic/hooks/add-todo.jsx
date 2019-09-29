import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Button, Input } from 'reactstrap';
//import { addTodo } from '../connect/actions'

export default function AddTodo() {
  const dispatch = useDispatch();
  let inputText = React.createRef();

  //const onAddTodo = (text) => {dispatch(addTodo(inputText.current.value));};
  return (
    <div>
      <Form
        inline
        onSubmit={evt => {
          evt.preventDefault();
          if (!inputText.current.value.trim()) {
            return;
          }
          dispatch({ type: 'ADD_TODO', text: inputText.current.value });
          //dispatch(addTodo(inputText.current.value));
          //onAddTodo(inputText.current.value);
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
