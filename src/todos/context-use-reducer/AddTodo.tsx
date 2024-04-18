import React, { useContext } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import todoContext from './StateManager/todo-context';

export default function AddTodo() {
  const ctx = useContext(todoContext);
  const { onAddTodo } = ctx;
  const inputText = React.createRef<HTMLInputElement>();
  return (
    <div>
      <Form
        onSubmit={(evt) => {
          evt.preventDefault();
          if (!inputText.current?.value.trim()) {
            return;
          }
          onAddTodo && onAddTodo(inputText.current.value);
          inputText.current.value = '';
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
