import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Button, Input } from 'reactstrap';
//import { addTodo } from '../actions'

export default function AddTodo ()  {
  const dispatch = useDispatch();
  //const onAddTodo = (text) => {dispatch(addTodo(_input.current.value));};
  let _input= React.createRef();
  return (
    <div>
      <Form inline
        onSubmit={e => {
          e.preventDefault();
          if (!_input.current.value.trim()) {
            return;
          }
          dispatch({type: "ADD_TODO", text: _input.current.value});
          //dispatch(addTodo(_input.current.value));
          //onAddTodo(_input.current.value);
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

