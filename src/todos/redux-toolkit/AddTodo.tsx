import { createRef } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { addTodo } from './slices/todos';
import { useAppDispatch } from './slices/hooks';

export default function AddTodo() {
  const dispatch = useAppDispatch();
  const inputText = createRef<HTMLInputElement>();

  function onAddTodo(text: string) {
    dispatch(addTodo(text));
  }

  return (
    <div>
      <Form
        onSubmit={(evt) => {
          evt.preventDefault();
          if (!inputText.current?.value.trim()) {
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
