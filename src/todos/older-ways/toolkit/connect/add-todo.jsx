import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
// import { addTodo } from "./slices/todos";
import { connect } from 'react-redux';

function AddTodo({ dispatch /*, onAddTodo */ }) {
  let inputText = React.createRef();
  return (
    <div>
      <Form
        onSubmit={(evt) => {
          evt.preventDefault();
          if (!inputText.current.value.trim()) {
            return;
          }
          dispatch({ type: 'todos/addTodo', payload: inputText.current.value });
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

export default connect()(AddTodo);

// const mapDispatchToProps = {
//   onAddTodo: addTodo
// };

//export default connect(null, mapDispatchToProps)(AddTodo);
