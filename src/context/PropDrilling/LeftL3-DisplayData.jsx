import React from 'react';

export default function DisplayData(props) {
  return <h1 style={{ color: props.color }}>The name is {props.firstName}</h1>;
}
