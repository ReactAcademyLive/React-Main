import React from 'react';
import { Form, Button, Input } from 'reactstrap';
import TodoContext from './todo-context';



export default function AddTodo(props)  {
  const context = React.useContext(TodoContext);
  const {onAddTodo}= context;

  let _input= React.createRef();
  return (
    <div>
      <Form inline
        onSubmit={e => {
          e.preventDefault();
          if (!_input.current.value.trim()) {
            return;
          }
          onAddTodo(_input.current.value);
          _input.current.value = '';
          _input.current.focus();
        }}
      >
        <Input innerRef={_input} 
               className="mr-2" />
        <Button color="primary" >
          Add Todo
        </Button>
      </Form>
    </div>
  )
};

