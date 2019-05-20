import React from 'react';
//import PropTypes from 'prop-types';
import { Form, Button, Input } from 'reactstrap';
import { addTodo } from './actions'
import { connect } from 'react-redux'

function AddTodo ({ dispatch })  {
  let _input= React.createRef();
  return (
    <div>
      <Form inline
        onSubmit={e => {
          e.preventDefault();
          if (!_input.current.value.trim()) {
            return;
          }
          dispatch(addTodo(_input.current.value));
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

//  const mapDispatchToProps= dispatch => 
//        ({onAddTodo: (text)=>{dispatch(addTodo(text))}});

export default connect()(AddTodo);