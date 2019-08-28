import React from "react";
import { DropdownToggle } from "reactstrap";
import useRouter from "./use-router";

function ToggleTodo() {
  const { location } = useRouter();
  return (
    <DropdownToggle
      nav
      tag="a"
      className={location.pathname.startsWith("/todos") ? "active" : ""}
      caret
    >
      Todos
    </DropdownToggle>
  );
}

export default ToggleTodo;
