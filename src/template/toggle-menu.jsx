import React from "react";
import { DropdownToggle } from "reactstrap";
import useRouter from "./use-router";

export default function ToggleMenu({name, link}) {
  const { location } = useRouter();
  return (
    <DropdownToggle
      nav
      tag="a"
      className={location.pathname.startsWith("/" +link) ? "active" : ""}
      caret
    >
      {name}
    </DropdownToggle>
  );
}

