import React from 'react';

export default function DisplayData({ firstName, color }) {
  return <h1 style={{ color: color }}>The name is {firstName}</h1>;
}
