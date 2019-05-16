import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Input } from 'reactstrap';


export default function AddTodo ({ onAddTodo })  {
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

AddTodo.propTypes = {
  onAddTodo: PropTypes.func.isRequired
};