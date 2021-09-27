import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Row, Col } from 'react-bootstrap';

export default function AddTodo({ onAddTodo }) {
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

AddTodo.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
};
