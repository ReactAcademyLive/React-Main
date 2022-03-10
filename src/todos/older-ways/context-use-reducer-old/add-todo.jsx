import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import TodoContext from './todo-context';

export default function AddTodo() {
  const context = React.useContext(TodoContext);
  const { onAddTodo } = context;

  let inputText = React.createRef();
  return (
    <div>
      <Form
        onSubmit={(evt) => {
          evt.preventDefault();
          if (!inputText.current.value.trim()) {
            return;
          }
          onAddTodo(inputText.current.value);
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
