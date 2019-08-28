import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setVisibilityFilter } from "../connect/actions";
import Link from "../../../common/link";

export default function FilterLink(props) {
  const dispatch = useDispatch();
  const visibilityFilter = useSelector(state => state.visibilityFilter);
  return (
    <Link
      active={props.filter === visibilityFilter}
      onClick={() => dispatch(setVisibilityFilter(props.filter))}
      {...props}
    />
  );
}
