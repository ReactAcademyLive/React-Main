import { createRef } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

interface AddTodoProps {
  onAddTodo: (text: string) => void;
}

export default function AddTodo({ onAddTodo }: AddTodoProps) {
  let inputText = createRef<HTMLInputElement>();
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
