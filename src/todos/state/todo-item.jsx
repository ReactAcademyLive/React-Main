import React from "react";
import PropTypes from "prop-types";
import { ListGroupItem, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const TodoItem = ({ onClick, completed, text }) => (
  <ListGroupItem onClick={onClick} style={{ cursor: "pointer" }}>
    <div
      className="float-left my-3"
      style={{
        textDecoration: completed ? "line-through" : "none"
      }}
    >
      {text}
    </div>
    <Button className="float-right mt-2" color="info" onClick={null}>
      <FontAwesomeIcon icon={faTrashAlt} />
    </Button>
  </ListGroupItem>
);

TodoItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default TodoItem;
