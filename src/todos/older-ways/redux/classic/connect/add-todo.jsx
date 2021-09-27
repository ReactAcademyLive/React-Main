import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
//import { addTodo } from './actions'
import { connect } from 'react-redux';

function AddTodo({ dispatch /*onAddTodo*/ }) {
  let inputText = React.createRef();
  return (
    <div>
      <Form
        onSubmit={(evt) => {
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
        <Row className='my-4'>
          <Col>
            <Form.Control ref={inputText} autoFocus />
          </Col>
          <Col xs='auto'>
            <Button variant='primary' type='submit'>
              Add Todo
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

//  const mapDispatchToProps= dispatch =>
//        ({onAddTodo: (text)=>{dispatch(addTodo(text))}});

export default connect()(AddTodo);
