import React from "react";
import PropTypes from "prop-types";
import { Form, Button, Input } from "reactstrap";

export default function AddTodo({ onAddTodo }) {
  let inputText = React.createRef();
  return (
    <div>
      <Form
        inline
        onSubmit={evt => {
          evt.preventDefault();
          if (!inputText.current.value.trim()) {
            return;
          }
          onAddTodo(inputText.current.value);
          inputText.current.value = "";
        }}
      >
        <Input innerRef={inputText} className="mr-2"  />
        <Button color="primary">Add Todo</Button>
      </Form>
    </div>
  );
}

AddTodo.propTypes = {
  onAddTodo: PropTypes.func.isRequired
};
